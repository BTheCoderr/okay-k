'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/95 backdrop-blur-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-accent transition-colors">
            okay(K)
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-accent transition-colors">Home</Link>
            <Link href="/about" className="text-white hover:text-accent transition-colors">About</Link>
            <Link href="/music" className="text-white hover:text-accent transition-colors">Music</Link>
            <a 
              href="https://discord.gg/okayksux" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-accent transition-colors"
            >
              Discord
            </a>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-dark/95 backdrop-blur-sm`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-2">
            <Link 
              href="/" 
              className="text-white hover:text-accent transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-accent transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/music" 
              className="text-white hover:text-accent transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Music
            </Link>
            <a 
              href="https://discord.gg/okayksux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 