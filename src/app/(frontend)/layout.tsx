export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingCTA } from '@/components/FloatingCTA'

export const metadata: Metadata = {
  title: {
    default: 'PartyPixel.ro — Cabina Foto București | Photo Booth Premium 2026',
    template: '%s | PartyPixel.ro',
  },
  description: 'Photo Booth premium în București. Cabine foto, Selfie 360°, AI Booth, fum greu, artificii. De la 250 lei/oră. Transport gratuit. 2000+ evenimente.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002'),
  openGraph: {
    locale: 'ro_RO',
    type: 'website',
    siteName: 'PartyPixel.ro',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-pp-body bg-pp-bg antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
