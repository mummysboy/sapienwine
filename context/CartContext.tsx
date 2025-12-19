'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface Wine {
  id: string
  name: string
  type: 'red' | 'white' | 'sparkling' | 'rose'
  price: number
  image: string
  description: string
  region: string
  year: number
  notes?: string[]
  pairings?: string[]
}

export interface CartItem {
  wine: Wine
  quantity: number
}

interface NotificationState {
  wine: Wine | null
  quantity: number
  isVisible: boolean
}

interface CartContextType {
  cartItems: CartItem[]
  notification: NotificationState
  addToCart: (wine: Wine, quantity?: number) => void
  removeFromCart: (wineId: string) => void
  updateQuantity: (wineId: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  hideNotification: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [notification, setNotification] = useState<NotificationState>({
    wine: null,
    quantity: 0,
    isVisible: false,
  })

  const addToCart = (wine: Wine, quantity: number = 1) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.wine.id === wine.id)
      if (existingItem) {
        return prev.map((item) =>
          item.wine.id === wine.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { wine, quantity }]
    })

    // Show notification
    setNotification({
      wine,
      quantity,
      isVisible: true,
    })
  }

  const hideNotification = () => {
    setNotification((prev) => ({ ...prev, isVisible: false }))
  }

  const removeFromCart = (wineId: string) => {
    setCartItems((prev) => prev.filter((item) => item.wine.id !== wineId))
  }

  const updateQuantity = (wineId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(wineId)
      return
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.wine.id === wineId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.wine.price * item.quantity,
      0
    )
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        notification,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        hideNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

