'use client'

import { useState } from 'react'
import Link from 'next/link'

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white border-none rounded-full shadow-lg text-2xl flex items-center justify-center z-[2000] cursor-pointer hover:bg-primary-hover hover:scale-110 transition-all max-[700px]:flex hidden"
        title="Menu"
      >
        <span>&#9776;</span>
      </button>

      <div 
        className={`fixed bottom-24 right-6 bg-secondary/95 rounded-2xl shadow-2xl py-4 min-w-[170px] z-[3000] transition-all duration-300 flex-col max-[700px]:flex hidden ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0 scale-100' : 'opacity-0 pointer-events-none translate-y-8 scale-95'
        }`}
      >
        <ul className="list-none m-0 p-0">
          <li className="border-b border-gray-700">
            <a 
              href="#about" 
              className="block text-accent no-underline py-3.5 px-6 hover:bg-primary hover:text-white hover:rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li className="border-b border-gray-700">
            <a 
              href="#services" 
              className="block text-accent no-underline py-3.5 px-6 hover:bg-primary hover:text-white hover:rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
          </li>
          <li className="border-b border-gray-700">
            <a 
              href="#work" 
              className="block text-accent no-underline py-3.5 px-6 hover:bg-primary hover:text-white hover:rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Work
            </a>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="block text-accent no-underline py-3.5 px-6 hover:bg-primary hover:text-white hover:rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
