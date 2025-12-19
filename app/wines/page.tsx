'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { wines } from '@/data/wines'
import { WineCard } from '@/components/WineCard'
import { WineModal } from '@/components/WineModal'
import { Wine } from '@/context/CartContext'

function WinesContent() {
  const searchParams = useSearchParams()
  const filterType = searchParams.get('type')
  const [selectedType, setSelectedType] = useState<string>(filterType || 'all')
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredWines = useMemo(() => {
    if (selectedType === 'all') return wines
    return wines.filter((wine) => wine.type === selectedType)
  }, [selectedType])

  const types: (Wine['type'] | 'all')[] = ['all', 'red', 'white', 'sparkling', 'rose']

  const handleWineClick = (wine: Wine) => {
    setSelectedWine(wine)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedWine(null)
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 fade-in-up">Our Wine Collection</h1>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 border-b pb-4 fade-in-up-delay-1">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedType === type
                  ? 'bg-wine-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type === 'all' ? 'All Wines' : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Wine Grid */}
        {filteredWines.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredWines.map((wine) => (
              <div key={wine.id} className="stagger-item">
                <WineCard wine={wine} onClick={() => handleWineClick(wine)} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 fade-in-up-delay-2">
            <p className="text-gray-600 text-lg">No wines found in this category.</p>
          </div>
        )}
      </div>

      <WineModal
        wine={selectedWine}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default function WinesPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Wine Collection</h1>
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Loading wines...</p>
        </div>
      </div>
    }>
      <WinesContent />
    </Suspense>
  )
}

