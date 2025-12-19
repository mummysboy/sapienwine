'use client'

import { useCart } from '@/context/CartContext'
import { ToastNotification } from './ToastNotification'

export function CartNotification() {
  const { notification, hideNotification } = useCart()

  return (
    <ToastNotification
      wine={notification.wine}
      quantity={notification.quantity}
      isVisible={notification.isVisible}
      onClose={hideNotification}
    />
  )
}

