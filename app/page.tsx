'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { wines } from '@/data/wines'
import { WineCard } from '@/components/WineCard'
import { WineModal } from '@/components/WineModal'
import { Wine } from '@/context/CartContext'

export default function Home() {
  const featuredWines = wines.slice(0, 6)
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleWineClick = (wine: Wine) => {
    setSelectedWine(wine)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedWine(null)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-wine-900 to-wine-700 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">Sapien Wine</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto fade-in-up-delay-1">
            Discover exceptional wines and unforgettable experiences
          </p>
          <div className="flex gap-4 justify-center fade-in-up-delay-2">
            <Link
              href="/wines"
              className="bg-white text-wine-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Shop Wines
            </Link>
            <Link
              href="/events"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-wine-700 transition"
            >
              Book Events
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Wines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 fade-in-up">Featured Wines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWines.map((wine) => (
            <div key={wine.id} className="stagger-item">
              <WineCard wine={wine} onClick={() => handleWineClick(wine)} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/wines"
            className="inline-block bg-wine-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-wine-700 transition"
          >
            View All Wines
          </Link>
        </div>
      </section>

      <WineModal
        wine={selectedWine}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Events Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="text-4xl font-bold mb-6">Wine Events & Tastings</h2>
              <p className="text-lg text-gray-700 mb-6">
                Join us for exclusive wine tastings, educational seminars, and elegant wine dinners. 
                Our expert sommeliers will guide you through curated selections from around the world.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-center">
                  <span className="text-wine-600 mr-2">✓</span>
                  Private wine tastings
                </li>
                <li className="flex items-center">
                  <span className="text-wine-600 mr-2">✓</span>
                  Wine pairing dinners
                </li>
                <li className="flex items-center">
                  <span className="text-wine-600 mr-2">✓</span>
                  Educational seminars
                </li>
                <li className="flex items-center">
                  <span className="text-wine-600 mr-2">✓</span>
                  Corporate events
                </li>
              </ul>
              <Link
                href="/events"
                className="inline-block bg-wine-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-wine-700 transition"
              >
                Book an Event
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop"
                alt="Wine tasting event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

