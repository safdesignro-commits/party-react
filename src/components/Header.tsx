'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  { label: 'Cabina Foto Clasică', href: '/cabina-foto-bucuresti/', badge: '' },
  { label: 'AI Photo Booth', href: '/cabina-foto-ai-bucuresti/', badge: 'NOU 2026' },
  { label: 'Selfie 360°', href: '/video-booth-selfie-360-bucuresti/', badge: '' },
  { label: 'Oglinda Magică', href: '/oglinda-magica-bucuresti/', badge: '' },
  { label: 'Fum Greu', href: '/fum-greu-gheata-carbonica/', badge: '' },
  { label: 'Artificii Spark', href: '/artificii-spark-nunta-bucuresti/', badge: '' },
  { label: 'Baloane cu Fum', href: '/baloane-cu-fum-bucuresti/', badge: '' },
  { label: 'Guest Book', href: '/guest-book-foto/', badge: '' },
]

const events = [
  { label: 'Cabina Foto Nuntă', href: '/cabina-foto-nunta-photobooth-bucuresti/' },
  { label: 'Cabina Foto Botez', href: '/cabina-foto-botez-photobooth-bucuresti/' },
  { label: 'Cabina Foto Majorat', href: '/cabina-foto-majorat/' },
  { label: 'Petreceri Corporate', href: '/photobooth-petreceri-corporate/' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-scrolled' : 'glass'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/media/brand/logo.png" alt="Party Pixel Photo Booth" width={180} height={56} className="h-10 lg:h-12 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Servicii Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-sm font-medium text-pp-heading hover:text-pp-magenta transition-colors flex items-center gap-1">
                Servicii
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-elevated border border-gray-100 p-3 mt-1">
                  {services.map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm text-pp-body hover:bg-pp-magenta-light hover:text-pp-magenta transition-colors">
                      <span>{item.label}</span>
                      {item.badge && <span className="text-[10px] font-bold uppercase bg-pp-teal text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Evenimente Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('events')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-sm font-medium text-pp-heading hover:text-pp-magenta transition-colors flex items-center gap-1">
                Evenimente
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'events' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {activeDropdown === 'events' && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-elevated border border-gray-100 p-3 mt-1">
                  {events.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2.5 rounded-xl text-sm text-pp-body hover:bg-pp-magenta-light hover:text-pp-magenta transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/preturi-inchiriere-cabina-foto/" className="px-4 py-2 text-sm font-medium text-pp-heading hover:text-pp-magenta transition-colors">Prețuri</Link>
            <Link href="/template-cabine-foto-bucuresti/" className="px-4 py-2 text-sm font-medium text-pp-heading hover:text-pp-magenta transition-colors">Exemple Grafice</Link>
            <Link href="/contact-cabina-fotografica-booth/" className="px-4 py-2 text-sm font-medium text-pp-heading hover:text-pp-magenta transition-colors">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:0745800810" className="text-sm font-semibold text-pp-heading flex items-center gap-2">
              <svg className="w-4 h-4 text-pp-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              0745 800 810
            </a>
            <Link href="/contact-cabina-fotografica-booth/" className="btn-gold px-6 py-2.5 rounded-full text-sm font-bold text-pp-heading">
              Rezervă Acum
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6 text-pp-heading" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-elevated">
          <div className="px-4 py-6 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-pp-muted px-3 mb-2">Servicii</p>
            {services.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-pp-body hover:bg-pp-magenta-light">
                <span>{item.label}</span>
                {item.badge && <span className="text-[10px] font-bold bg-pp-teal text-white px-2 py-0.5 rounded-full">{item.badge}</span>}
              </Link>
            ))}
            <div className="border-t border-gray-100 my-3" />
            <p className="text-xs font-bold uppercase tracking-wider text-pp-muted px-3 mb-2">Evenimente</p>
            {events.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-xl text-sm text-pp-body hover:bg-pp-magenta-light">
                {item.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 my-3" />
            <Link href="/preturi-inchiriere-cabina-foto/" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-xl text-sm font-medium text-pp-heading">Prețuri</Link>
            <Link href="/contact-cabina-fotografica-booth/" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-xl text-sm font-medium text-pp-heading">Contact</Link>
            <div className="pt-4 space-y-3">
              <a href="tel:0745800810" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-pp-teal-light text-pp-teal-dark font-semibold text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                0745 800 810
              </a>
              <Link href="/contact-cabina-fotografica-booth/" onClick={() => setMobileOpen(false)} className="block w-full text-center btn-gold py-3 rounded-xl font-bold text-sm text-pp-heading">
                Rezervă Acum
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
