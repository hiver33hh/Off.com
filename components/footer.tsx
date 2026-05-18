'use client'

import { translations } from '@/lib/translations'

interface FooterProps {
  language: string
}

export function Footer({ language }: FooterProps) {
  const t = translations[language as keyof typeof translations] || translations.fr

  return (
    <>
      <section>
        <div className="bg-secondary text-white flex flex-wrap justify-between gap-8 py-10 px-[10vw]">
          <div className="flex-1 min-w-[220px] bg-white/5 rounded-xl p-5" id="about">
            <h4 className="text-primary text-xl mb-3 tracking-wide">{t.aboutTitle}</h4>
            <p className="text-muted text-sm leading-relaxed">{t.aboutText}</p>
          </div>

          <div className="flex-1 min-w-[220px] bg-white/5 rounded-xl p-5" id="services">
            <h4 className="text-primary text-xl mb-3 tracking-wide">{t.servicesTitle}</h4>
            <ul className="list-disc list-inside text-muted text-sm">
              {t.services.map((service, index) => (
                <li key={index} className="mb-2 text-accent">{service}</li>
              ))}
            </ul>
          </div>

          <div className="flex-1 min-w-[220px] bg-white/5 rounded-xl p-5">
            <h4 className="text-primary text-xl mb-3 tracking-wide">{t.socialTitle}</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a 
                  href="https://wa.me/242067451820" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-accent no-underline hover:text-primary transition-colors"
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" 
                    alt="WhatsApp" 
                    className="w-5 h-5 mr-2 brightness-0 invert"
                  />
                  +242 06 74 51 820
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/hiver_mav" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-accent no-underline hover:text-primary transition-colors"
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" 
                    alt="Instagram" 
                    className="w-5 h-5 mr-2 brightness-0 invert"
                  />
                  @hiver_mav
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/@hiver_mav" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-accent no-underline hover:text-primary transition-colors"
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" 
                    alt="YouTube" 
                    className="w-5 h-5 mr-2 brightness-0 invert"
                  />
                  hiver_mav
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section>
        <div className="bg-secondary text-accent text-center py-4 text-sm">
          <p>&copy; 2025 Tous droits reserves. <br /> Licenses gratuites par hiver_mav</p>
        </div>
      </section>
    </>
  )
}
