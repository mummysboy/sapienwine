'use client'

import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 fade-in-up">Shopping Cart</h1>
        <div className="text-center py-16 fade-in-up-delay-1">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
          <Link
            href="/wines"
            className="inline-block bg-wine-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-wine-700 transition"
          >
            Browse Wines
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 fade-in-up">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={item.wine.id}
              className={`bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row gap-6 stagger-item`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative w-full sm:w-32 h-48 sm:h-32 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.wine.image}
                  alt={item.wine.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{item.wine.name}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {item.wine.region} • {item.wine.year}
                </p>
                <p className="text-wine-700 font-semibold mb-4">
                  ${item.wine.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 border rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.wine.id, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100 transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.wine.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.wine.id)}
                    className="text-red-600 hover:text-red-700 transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-wine-700">
                  ${(item.wine.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 fade-in-up-delay-2">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">$15.00</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-xl">
                <span className="font-bold">Total</span>
                <span className="font-bold text-wine-700">
                  ${(getTotalPrice() + 15).toFixed(2)}
                </span>
              </div>
            </div>
            <button className="w-full bg-wine-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-wine-700 transition mb-4">
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Clear Cart
            </button>
            <Link
              href="/wines"
              className="block text-center text-wine-600 hover:text-wine-700 mt-4 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

