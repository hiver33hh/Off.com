'use client'

import { translations } from '@/lib/translations'

interface HeroSectionProps {
  language: string
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language as keyof typeof translations] || translations.fr

  return (
    <section 
      id="hero" 
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat text-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/hero-bg.png')`
      }}
    >
      <div className="max-w-4xl mx-auto px-5 animate-fade-in-up">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-relaxed text-white"
          style={{ fontFamily: 'var(--font-pacifico), cursive' }}
          dangerouslySetInnerHTML={{ __html: t.heroTitle }}
        />
        <p 
          className="text-lg md:text-xl mb-5 text-gray-300"
          style={{ fontFamily: 'var(--font-pacifico), cursive' }}
        >
          {t.heroDesc}
        </p>
        <a href="#services" className="btn-primary inline-block">
          {t.cta}
        </a>
      </div>
    </section>
  )
}
