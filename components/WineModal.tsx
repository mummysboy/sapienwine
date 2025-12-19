'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, ShoppingCart, Plus, Minus } from 'lucide-react'
import { Wine } from '@/context/CartContext'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'

interface WineModalProps {
  wine: Wine | null
  isOpen: boolean
  onClose: () => void
}

export function WineModal({ wine, isOpen, onClose }: WineModalProps) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isClosing, setIsClosing] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      setIsClosing(false)
      document.body.style.overflow = 'hidden'
      setQuantity(1)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen && shouldRender) {
      setIsClosing(true)
      const timer = setTimeout(() => {
        setShouldRender(false)
        document.body.style.overflow = 'unset'
      }, 300) // Match animation duration
      return () => clearTimeout(timer)
    }
  }, [isOpen, shouldRender])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isClosing) {
        handleClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, isClosing])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  const handleAddToCart = () => {
    if (wine) {
      addToCart(wine, quantity)
      setQuantity(1)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  if (!shouldRender || !wine) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 transition-all duration-300 ease-out ${
        isClosing ? 'bg-black/0 backdrop-blur-none' : 'bg-black/50 backdrop-blur-sm'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white rounded-t-2xl sm:rounded-lg max-w-4xl w-full h-[95vh] sm:h-auto sm:max-h-[95vh] shadow-2xl flex flex-col transition-all duration-300 ${
          isClosing ? 'modal-exit' : 'modal-enter'
        }`}
      >
        {/* Header with close button */}
        <div className="flex-shrink-0 bg-white border-b z-10 flex items-center justify-between p-4">
          <h2 className="text-lg font-bold text-gray-900 sm:hidden">{wine.name}</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 transition p-2 hover:bg-gray-100 rounded-full ml-auto"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Image */}
            <div className="relative h-64 sm:h-80 md:h-full min-h-[250px] sm:min-h-[400px] bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={wine.image}
                alt={wine.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col">
              {/* Desktop title - hidden on mobile (shown in header) */}
              <div className="hidden sm:block">
                <div className="mb-3">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm capitalize">
                    {wine.type}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{wine.name}</h2>
                <p className="text-base text-gray-600 mb-3">{wine.region} • {wine.year}</p>
                <p className="text-3xl font-bold text-wine-700 mb-4">
                  ${wine.price.toFixed(2)}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">{wine.description}</p>
              </div>

              {/* Mobile title section */}
              <div className="sm:hidden mb-4">
                <div className="mb-2">
                  <span className="inline-block bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs capitalize">
                    {wine.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{wine.region} • {wine.year}</p>
                <p className="text-2xl font-bold text-wine-700 mb-3">
                  ${wine.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">{wine.description}</p>
              </div>

              {/* Wine Notes */}
              {wine.notes && wine.notes.length > 0 && (
                <div className="mb-5 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-semibold mb-2.5 sm:mb-3 text-wine-800">Tasting Notes</h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {wine.notes.map((note, index) => (
                      <li key={index} className="flex items-start text-sm sm:text-base text-gray-700 leading-relaxed">
                        <span className="text-wine-600 mr-2 flex-shrink-0 mt-0.5">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Food Pairings */}
              {wine.pairings && wine.pairings.length > 0 && (
                <div className="mb-5 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-semibold mb-2.5 sm:mb-3 text-wine-800">Food Pairings</h3>
                  <div className="flex flex-wrap gap-2">
                    {wine.pairings.map((pairing, index) => (
                      <span
                        key={index}
                        className="bg-wine-50 text-wine-700 px-3 py-1.5 rounded-full text-sm font-medium"
                      >
                        {pairing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector and Add to Cart - Desktop */}
              <div className="hidden sm:block pt-4 border-t">
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Quantity</label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="bg-gray-200 hover:bg-gray-300 rounded-lg p-2 transition flex-shrink-0"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-gray-200 hover:bg-gray-300 rounded-lg p-2 transition flex-shrink-0"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full bg-wine-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-wine-700 transition flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile sticky bottom section */}
        <div className="sm:hidden flex-shrink-0 bg-white border-t p-4 sticky bottom-0">
          <div className="mb-3">
            <label className="block text-sm font-semibold mb-2">Quantity</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-200 hover:bg-gray-300 rounded-lg p-2.5 transition flex-shrink-0 touch-manipulation"
                aria-label="Decrease quantity"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-200 hover:bg-gray-300 rounded-lg p-2.5 transition flex-shrink-0 touch-manipulation"
                aria-label="Increase quantity"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-wine-600 text-white px-6 py-3.5 rounded-lg text-base font-semibold hover:bg-wine-700 transition flex items-center justify-center gap-2 touch-manipulation"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

