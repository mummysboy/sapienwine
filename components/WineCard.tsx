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
      className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-[24rem] bg-gray-200 overflow-hidden">
        {/* Background image */}
        <Image
          src="/parv+2020.webp"
          alt=""
          fill
          className="object-cover transition-opacity duration-500 group-hover:opacity-90"
          priority={false}
        />
        {/* Wine bottle image */}
        <Image
          src={wine.image}
          alt={wine.name}
          fill
          className="object-contain group-hover:scale-110 transition-transform duration-500 ease-out relative z-10"
        />
      </div>
      <div className="p-6 md:p-7">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-wine-700 transition-colors duration-300">
            {wine.name}
          </h3>
          <span className="text-sm text-gray-500 capitalize bg-gray-100 px-2.5 py-1 rounded-md">
            {wine.type}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{wine.region} • {wine.year}</p>
        <p className="text-gray-700 text-sm mb-5 line-clamp-2 leading-relaxed">{wine.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-wine-700">
            ${wine.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-wine-600 text-white px-4 py-2 rounded-lg hover:bg-wine-700 transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
