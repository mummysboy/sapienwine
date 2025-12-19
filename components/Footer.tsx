import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sapien Wine</h3>
            <p className="text-gray-400">
              Curating exceptional wines and unforgettable experiences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/wines" className="hover:text-white transition">
                  All Wines
                </Link>
              </li>
              <li>
                <Link href="/wines?type=red" className="hover:text-white transition">
                  Red Wines
                </Link>
              </li>
              <li>
                <Link href="/wines?type=white" className="hover:text-white transition">
                  White Wines
                </Link>
              </li>
              <li>
                <Link href="/wines?type=sparkling" className="hover:text-white transition">
                  Sparkling
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Events</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/events" className="hover:text-white transition">
                  Book an Event
                </Link>
              </li>
              <li>
                <Link href="/events?type=tasting" className="hover:text-white transition">
                  Wine Tastings
                </Link>
              </li>
              <li>
                <Link href="/events?type=dinner" className="hover:text-white transition">
                  Wine Dinners
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@sapienwine.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Hours: Mon-Sat 10am-8pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sapien Wine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

