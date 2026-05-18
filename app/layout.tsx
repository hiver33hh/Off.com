import type { Metadata, Viewport } from 'next'
import { Poppins, Pacifico } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
})

export const metadata: Metadata = {
  title: 'OFF Officiel - Specialiste en Informatique',
  description: 'OFF - Une marque deposee de @hiver_mav. Nous aidons chacun a progresser en informatique.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#162415',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${poppins.variable} ${pacifico.variable} bg-background`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
