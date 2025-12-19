'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 150)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div className={`page-content ${isVisible ? 'fade-in' : 'fade-out'}`}>
      {children}
    </div>
  )
}

