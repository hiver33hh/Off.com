'use client'

interface LanguageSwitcherProps {
  language: string
  onLanguageChange: (lang: string) => void
}

export function LanguageSwitcher({ language, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="fixed left-0 bottom-0 w-full flex items-center justify-end gap-2.5 py-3 px-[6vw] z-[1000] rounded-t-2xl shadow-lg" style={{ background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)' }}>
      <label htmlFor="lang-select" className="font-medium text-secondary">
        Langue :
      </label>
      <select
        id="lang-select"
        value={language}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="py-1.5 px-3.5 rounded-md border border-primary bg-white text-secondary font-semibold outline-none focus:border-2 focus:border-blue-500 transition-colors"
      >
        <option value="fr">Francais</option>
        <option value="en">English</option>
        <option value="es">Espanol</option>
        <option value="zh">中文</option>
      </select>
    </div>
  )
}
