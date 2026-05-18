'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NavbarProps {
  isMobileUnlocked?: boolean
}

export function Navbar({ isMobileUnlocked }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-secondary text-white py-5 fixed w-full z-50">
      <div className={`max-w-6xl mx-auto px-5 flex justify-between items-center ${isMobileUnlocked ? 'justify-start gap-2.5 py-2' : ''}`}>
        <h1 className={`font-bold ${isMobileUnlocked ? 'text-lg px-2.5' : 'text-2xl'}`}>OFF</h1>
        
        {!isMobileUnlocked && (
          <>
            <button
              className="hidden max-[900px]:flex flex-col justify-center w-9 h-9 bg-transparent border-none cursor-pointer z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Ouvrir le menu"
            >
              <span className="block h-1 w-full bg-primary rounded mb-1.5 transition-all" />
              <span className="block h-1 w-full bg-primary rounded mb-1.5 transition-all" />
              <span className="block h-1 w-full bg-primary rounded transition-all" />
            </button>

            <nav className="max-[900px]:hidden">
              <ul className="flex list-none gap-5">
                <li>
                  <a href="#about" className="text-white no-underline hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white no-underline hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-white no-underline hover:text-primary transition-colors">
                    Work
                  </a>
                </li>
              </ul>
            </nav>

            <Link href="/contact" className="btn-outline max-[900px]:hidden">
              Contact
            </Link>

            {/* Mobile menu */}
            {isMenuOpen && (
              <nav className="absolute top-[70px] left-0 w-screen bg-secondary flex-col z-40 max-[900px]:flex hidden">
                <ul className="flex flex-col list-none p-0 m-0">
                  <li className="border-b border-gray-800">
                    <a 
                      href="#about" 
                      className="block w-full py-4 px-6 text-white no-underline hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </a>
                  </li>
                  <li className="border-b border-gray-800">
                    <a 
                      href="#services" 
                      className="block w-full py-4 px-6 text-white no-underline hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Services
                    </a>
                  </li>
                  <li className="border-b border-gray-800">
                    <a 
                      href="#work" 
                      className="block w-full py-4 px-6 text-white no-underline hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Work
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </>
        )}
      </div>
    </header>
  )
}
