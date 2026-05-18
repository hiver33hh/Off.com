'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { Footer } from '@/components/footer'
import { MobileBlock } from '@/components/mobile-block'
import { FloatingMenu } from '@/components/floating-menu'
import { LanguageSwitcher } from '@/components/language-switcher'

export default function Home() {
  const [isMobileUnlocked, setIsMobileUnlocked] = useState(false)
  const [showMobileBlock, setShowMobileBlock] = useState(false)
  const [language, setLanguage] = useState('fr')

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 700 || window.innerHeight <= 700
      if (isMobile && !isMobileUnlocked) {
        setShowMobileBlock(true)
      } else {
        setShowMobileBlock(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    window.addEventListener('orientationchange', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('orientationchange', checkMobile)
    }
  }, [isMobileUnlocked])

  const handleMobileUnlock = () => {
    setIsMobileUnlocked(true)
    setShowMobileBlock(false)
  }

  return (
    <>
      {showMobileBlock && <MobileBlock onUnlock={handleMobileUnlock} />}
      
      <Navbar isMobileUnlocked={isMobileUnlocked} />
      
      <main>
        <HeroSection language={language} />
      </main>

      <Footer language={language} />
      
      <LanguageSwitcher language={language} onLanguageChange={setLanguage} />
      
      {isMobileUnlocked && <FloatingMenu />}
    </>
  )
}
