'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Calendar, Clock, Users, MapPin } from 'lucide-react'

interface EventType {
  id: string
  name: string
  type: 'tasting' | 'dinner' | 'seminar'
  description: string
  duration: string
  price: number
  maxGuests: number
  image: string
}

const eventTypes: EventType[] = [
  {
    id: '1',
    name: 'Private Wine Tasting',
    type: 'tasting',
    description: 'An intimate tasting experience with our sommelier, featuring 6 premium wines from around the world. Learn about wine regions, tasting notes, and food pairings.',
    duration: '2 hours',
    price: 125,
    maxGuests: 12,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop',
  },
  {
    id: '2',
    name: 'Wine Pairing Dinner',
    type: 'dinner',
    description: 'A curated 5-course dinner expertly paired with exceptional wines. Each course is designed to complement the wine selection, creating a harmonious dining experience.',
    duration: '3 hours',
    price: 250,
    maxGuests: 20,
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&h=600&fit=crop',
  },
  {
    id: '3',
    name: 'Wine Education Seminar',
    type: 'seminar',
    description: 'Deep dive into wine regions, grape varieties, and winemaking techniques. Perfect for wine enthusiasts looking to expand their knowledge.',
    duration: '2.5 hours',
    price: 95,
    maxGuests: 30,
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&h=600&fit=crop',
  },
  {
    id: '4',
    name: 'Corporate Wine Event',
    type: 'tasting',
    description: 'Customizable wine tasting experience for your team. Perfect for corporate gatherings, team building, or client entertainment.',
    duration: '2-3 hours',
    price: 150,
    maxGuests: 50,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop',
  },
]

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 1,
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedEvent) return

    // In a real app, this would send data to a backend
    alert(`Thank you for your booking request! We'll contact you soon to confirm your ${selectedEvent.name} event.`)
    setSelectedEvent(null)
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      guests: 1,
      notes: '',
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12 fade-in-up">
        <h1 className="text-4xl font-bold mb-4">Wine Events & Experiences</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join us for unforgettable wine experiences. From intimate tastings to elegant dinners, 
          we offer a variety of events to suit every occasion.
        </p>
      </div>

      {/* Event Types Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {eventTypes.map((event, index) => (
          <div
            key={event.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow stagger-item`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative h-64">
              <Image
                src={event.image}
                alt={event.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold">{event.name}</h3>
                <span className="text-sm text-gray-500 capitalize bg-gray-100 px-3 py-1 rounded">
                  {event.type}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{event.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Up to {event.maxGuests} guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">${event.price}</span>
                  <span>per person</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedEvent(event)}
                className="w-full bg-wine-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-wine-700 transition"
              >
                Book This Event
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold">Book {selectedEvent.name}</h2>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Number of Guests</label>
                  <input
                    type="number"
                    required
                    min="1"
                    max={selectedEvent.maxGuests}
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Special Requests or Notes</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={4}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Price per person:</span>
                    <span className="font-semibold">${selectedEvent.price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Number of guests:</span>
                    <span className="font-semibold">{formData.guests}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total:</span>
                    <span className="text-wine-700">${(selectedEvent.price * formData.guests).toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-wine-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-wine-700 transition"
                  >
                    Submit Booking Request
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

