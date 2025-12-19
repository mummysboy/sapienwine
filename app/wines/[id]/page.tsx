'use client'

import { use } from 'react'
import Image from 'next/image'
import { wines } from '@/data/wines'
import { useCart } from '@/context/CartContext'
import { ShoppingCart, Plus, Minus } from 'lucide-react'
import { useState } from 'react'

export default function WineDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const wine = wines.find((w) => w.id === resolvedParams.id)
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  if (!wine) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4 fade-in-up">Wine Not Found</h1>
        <p className="text-gray-600 fade-in-up-delay-1">The wine you're looking for doesn't exist.</p>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(wine, quantity)
    setQuantity(1)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="relative h-[600px] bg-gray-200 rounded-lg overflow-hidden fade-in-up">
          <Image
            src={wine.image}
            alt={wine.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="fade-in-up-delay-1">
          <div className="mb-4">
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm capitalize">
              {wine.type}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{wine.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{wine.region} • {wine.year}</p>
          <p className="text-3xl font-bold text-wine-700 mb-6">
            ${wine.price.toFixed(2)}
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">{wine.description}</p>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Quantity</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-200 hover:bg-gray-300 rounded-lg p-2 transition"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-200 hover:bg-gray-300 rounded-lg p-2 transition"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-wine-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-wine-700 transition flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t">
            <h3 className="font-semibold mb-4">Product Details</h3>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-semibold">Type:</span> {wine.type.charAt(0).toUpperCase() + wine.type.slice(1)}</p>
              <p><span className="font-semibold">Region:</span> {wine.region}</p>
              <p><span className="font-semibold">Vintage:</span> {wine.year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

