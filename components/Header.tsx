'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartItems } = useCart()
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.webp" 
              alt="Sapien Wine" 
              width={120} 
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-wine-700 transition">
              Home
            </Link>
            <Link href="/wines" className="text-gray-700 hover:text-wine-700 transition">
              Wines
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-wine-700 transition">
              Events
            </Link>
            <Link 
              href="/wine-club" 
              className="bg-wine-600 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Join Wine Club
            </Link>
            <Link href="/cart" className="relative text-gray-700 hover:text-wine-700 transition">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-wine-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Menu */}
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 animate-slide-down">
              <div className="px-4 py-6 space-y-1">
                <Link
                  href="/"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-wine-700 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/wines"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-wine-700 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Wines
                </Link>
                <Link
                  href="/events"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-wine-700 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
                <div className="pt-2 pb-1">
                  <Link
                    href="/wine-club"
                    className="block bg-wine-600 text-white px-4 py-3 rounded-lg font-semibold text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join Wine Club
                  </Link>
                </div>
                <Link
                  href="/cart"
                  className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-wine-700 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>Cart {cartCount > 0 && `(${cartCount})`}</span>
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}

