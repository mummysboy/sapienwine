import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'
import PageTransition from '@/components/PageTransition'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sapien Wine - Premium Wine Store & Events',
  description: 'Discover exceptional wines and book exclusive wine tasting events',
  icons: {
    icon: '/icon.webp',
    shortcut: '/icon.webp',
    apple: '/icon.webp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
