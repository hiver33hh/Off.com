'use client'

import { useState } from 'react'
import { translations } from '@/lib/translations'
import { LanguageSwitcher } from '@/components/language-switcher'

export default function ContactPage() {
  const [language, setLanguage] = useState('fr')
  const t = translations[language as keyof typeof translations] || translations.fr

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = '/'
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)' }}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center animate-fade-in-up">
        <h2 className="text-primary text-3xl mb-4 font-semibold">{t.contactTitle}</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder={t.contactName}
            required
            className="p-3 rounded-lg border border-gray-300 text-base focus:border-primary focus:outline-none transition-colors"
          />
          <input
            type="email"
            placeholder={t.contactEmail}
            required
            className="p-3 rounded-lg border border-gray-300 text-base focus:border-primary focus:outline-none transition-colors"
          />
          <textarea
            rows={4}
            placeholder={t.contactMessage}
            required
            className="p-3 rounded-lg border border-gray-300 text-base focus:border-primary focus:outline-none transition-colors resize-none"
          />
          <button
            type="submit"
            className="bg-primary text-white border-none rounded-lg py-3 text-lg font-semibold cursor-pointer hover:bg-primary-hover hover:scale-105 transition-all"
          >
            {t.contactSend}
          </button>
        </form>

        <div className="flex flex-col gap-3 mt-4">
          <a 
            href="https://wa.me/242067451820" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-secondary no-underline font-medium hover:text-primary transition-colors"
          >
            <img 
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" 
              alt="WhatsApp" 
              className="w-6 h-6"
            />
            +242 06 74 51 820
          </a>
          <a 
            href="https://instagram.com/hiver_mav" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-secondary no-underline font-medium hover:text-primary transition-colors"
          >
            <img 
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" 
              alt="Instagram" 
              className="w-6 h-6"
            />
            @hiver_mav
          </a>
          <a 
            href="https://youtube.com/@hiver_mav" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-secondary no-underline font-medium hover:text-primary transition-colors"
          >
            <img 
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" 
              alt="YouTube" 
              className="w-6 h-6"
            />
            hiver_mav
          </a>
        </div>
      </div>

      <LanguageSwitcher language={language} onLanguageChange={setLanguage} />
    </div>
  )
}
