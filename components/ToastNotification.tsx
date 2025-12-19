'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { CheckCircle2, X, Wine } from 'lucide-react'
import { Wine as WineType } from '@/context/CartContext'

interface ToastNotificationProps {
  wine: WineType | null
  quantity: number
  isVisible: boolean
  onClose: () => void
}

export function ToastNotification({ wine, quantity, isVisible, onClose }: ToastNotificationProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true)
      
      // Close notification after 3 seconds
      const closeTimer = setTimeout(() => {
        setIsAnimating(false)
        setTimeout(onClose, 300) // Wait for exit animation
      }, 3000)
      
      return () => {
        clearTimeout(closeTimer)
      }
    }
  }, [isVisible, onClose])

  if (!isVisible || !wine) return null

  return (
    <div
      className={`fixed bottom-4 right-4 left-4 sm:left-auto z-50 max-w-md w-auto sm:w-auto transition-all duration-300 ${
        isAnimating
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0'
      }`}
    >
      <div className="bg-white rounded-lg shadow-2xl border border-wine-200 overflow-hidden">
        <div className="flex items-center gap-4 p-4">
          {/* Wine Image */}
          <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={wine.image}
              alt={wine.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-2 mb-1">
              <CheckCircle2 className="w-5 h-5 text-wine-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  Added to Cart
                </p>
                <p className="text-sm text-gray-600 truncate">{wine.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Wine className="w-4 h-4 text-wine-500" />
              <span className="text-xs text-gray-500">
                {quantity} {quantity === 1 ? 'bottle' : 'bottles'} • ${(wine.price * quantity).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => {
              setIsAnimating(false)
              setTimeout(onClose, 300)
            }}
            className="text-gray-400 hover:text-gray-600 transition flex-shrink-0 p-1"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-gray-100">
          <div
            key={`${wine.id}-${isVisible}`}
            className="h-full bg-gradient-to-r from-wine-500 to-wine-700 toast-progress"
          />
        </div>
      </div>
    </div>
  )
}

