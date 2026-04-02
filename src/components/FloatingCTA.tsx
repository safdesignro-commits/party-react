'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const pageMessages: Record<string, string> = {
  '/': 'Bună ziua! Aș dori să aflu mai multe despre serviciile PartyPixel.',
  '/cabina-foto-bucuresti': 'Bună ziua! Sunt interesat/ă de cabina foto clasică. Aș dori o ofertă.',
  '/cabina-foto-ai-bucuresti': 'Bună ziua! Sunt interesat/ă de AI Photo Booth. Aș dori o ofertă.',
  '/video-booth-selfie-360-bucuresti': 'Bună ziua! Sunt interesat/ă de Selfie 360°. Aș dori o ofertă.',
  '/oglinda-magica-bucuresti': 'Bună ziua! Sunt interesat/ă de Oglinda Magică. Aș dori o ofertă.',
  '/fum-greu-gheata-carbonica': 'Bună ziua! Sunt interesat/ă de fum greu. Aș dori o ofertă.',
  '/artificii-spark-nunta-bucuresti': 'Bună ziua! Sunt interesat/ă de artificii spark. Aș dori o ofertă.',
  '/baloane-cu-fum-bucuresti': 'Bună ziua! Sunt interesat/ă de baloane cu fum. Aș dori o ofertă.',
  '/guest-book-foto': 'Bună ziua! Sunt interesat/ă de guest book foto. Aș dori o ofertă.',
  '/cabina-foto-nunta-photobooth-bucuresti': 'Bună ziua! Organizez o nuntă și aș dori o ofertă pentru cabina foto.',
  '/cabina-foto-botez-photobooth-bucuresti': 'Bună ziua! Organizez un botez și aș dori o ofertă pentru cabina foto.',
  '/cabina-foto-majorat': 'Bună ziua! Organizez un majorat și aș dori o ofertă pentru cabina foto.',
  '/photobooth-petreceri-corporate': 'Bună ziua! Organizez un eveniment corporate și aș dori o ofertă.',
  '/preturi-inchiriere-cabina-foto': 'Bună ziua! Am văzut pachetele de prețuri și aș dori mai multe detalii.',
}

export function FloatingCTA() {
  const pathname = usePathname()
  const [showBubble, setShowBubble] = useState(false)
  const [bubbleDismissed, setBubbleDismissed] = useState(false)

  const message = pageMessages[pathname.replace(/\/$/, '')] || pageMessages['/']
  const whatsappUrl = `https://api.whatsapp.com/send?phone=40745800810&text=${encodeURIComponent(message!)}`

  useEffect(() => {
    if (bubbleDismissed) return
    const timer = setTimeout(() => setShowBubble(true), 3000)
    const hideTimer = setTimeout(() => setShowBubble(false), 11000)
    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [bubbleDismissed])

  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col items-end gap-3">
      {/* Chat bubble tooltip */}
      {showBubble && !bubbleDismissed && (
        <div className="relative bg-white rounded-2xl shadow-elevated p-4 pr-8 max-w-[260px] animate-fade-in">
          <button
            onClick={() => { setShowBubble(false); setBubbleDismissed(true) }}
            className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center text-pp-muted hover:text-pp-heading transition-colors"
            aria-label="Închide"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <p className="text-sm text-pp-heading font-medium leading-snug">
            Bună! 👋 Cu ce te putem ajuta? Scrie-ne pe WhatsApp!
          </p>
          {/* Arrow pointing to button */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 shadow-sm" />
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform wa-pulse-once"
        aria-label="Contactează pe WhatsApp"
        onMouseEnter={() => { if (!bubbleDismissed) setShowBubble(true) }}
      >
        <svg className="w-7 h-7 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
