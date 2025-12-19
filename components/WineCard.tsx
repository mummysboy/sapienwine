'use client'

import Image from 'next/image'
import { Wine } from '@/context/CartContext'
import { useCart } from '@/context/CartContext'
import { ShoppingCart } from 'lucide-react'

interface WineCardProps {
  wine: Wine
  onClick?: () => void
}

export function WineCard({ wine, onClick }: WineCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addToCart(wine, 1)
  }

  const handleCardClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div
      onClick={handleCardClick}
      className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-[24rem] bg-gray-200 px-8">
        <Image
          src={wine.image}
          alt={wine.name}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-wine-700 transition">
            {wine.name}
          </h3>
          <span className="text-sm text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded">
            {wine.type}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-2">{wine.region} • {wine.year}</p>
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{wine.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-wine-700">
            ${wine.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-wine-600 text-white px-4 py-2 rounded-lg hover:bg-wine-700 transition flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
