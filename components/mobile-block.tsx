'use client'

import { useState } from 'react'

interface MobileBlockProps {
  onUnlock: () => void
}

export function MobileBlock({ onUnlock }: MobileBlockProps) {
  const [score, setScore] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleCircleClick = () => {
    const newScore = score + 1
    setScore(newScore)
    
    if (newScore >= 3) {
      setShowSuccess(true)
      setTimeout(() => {
        onUnlock()
      }, 1000)
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #162415 60%, #4CAF50 100%)' }}>
      <div className="bg-white/95 rounded-2xl shadow-2xl p-10 text-center animate-bounce-in max-w-sm mx-4">
        <h2 className="text-primary text-2xl mb-4 font-sans">Acces refuse sur mobile</h2>
        <p className="text-secondary text-base mb-4">
          Ce site est optimise uniquement pour ordinateur.<br />
          Mais tu peux tenter ta chance au mini-jeu pour acceder au site !
        </p>
        
        <div className="mt-4">
          <p className="text-secondary mb-4">Tape sur le cercle vert 3 fois pour debloquer le site :</p>
          <div 
            onClick={handleCircleClick}
            className="w-16 h-16 bg-primary rounded-full mx-auto cursor-pointer shadow-lg hover:scale-110 transition-transform"
          />
          <p className="font-bold mt-4 text-secondary">{score} / 3</p>
          {showSuccess && (
            <p className="text-primary font-bold mt-2">Bravo ! Acces debloque</p>
          )}
        </div>
      </div>
    </div>
  )
}
