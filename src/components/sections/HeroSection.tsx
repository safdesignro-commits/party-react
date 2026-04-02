import Link from 'next/link'
import Image from 'next/image'
import { InlineMiniForm } from '../InlineMiniForm'
import { Icon } from '../ui/Icon'

export function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-20"
      style={{
        background: `
          radial-gradient(ellipse 600px 600px at 10% 20%, rgba(255,61,154,0.10) 0%, transparent 70%),
          radial-gradient(ellipse 700px 700px at 90% 80%, rgba(29,232,220,0.07) 0%, transparent 70%),
          radial-gradient(ellipse 500px 500px at 50% 50%, rgba(245,200,66,0.05) 0%, transparent 70%)
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pp-teal-light border border-pp-teal/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-pp-teal animate-pulse-dot" />
              <span className="text-xs font-semibold text-pp-teal-dark">Disponibil pentru evenimente 2026</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-pp-heading leading-[1.08] tracking-[-0.03em] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Amintiri care{' '}
              <span className="text-gradient-magenta">strălucesc</span>{' '}
              pentru totdeauna
            </h1>

            <p className="text-lg text-pp-body leading-relaxed mb-8 max-w-lg">
              Photo Booth premium in Bucuresti. Cabine foto, Selfie 360&deg;, AI Booth &mdash; cu printuri nelimitate si operator dedicat.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Link
                href="/contact-cabina-fotografica-booth/"
                className="btn-gold px-8 py-3.5 rounded-full text-sm font-bold text-pp-heading inline-flex items-center gap-2"
              >
                Cere Ofertă Gratuită
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#servicii"
                className="px-8 py-3.5 rounded-full text-sm font-semibold text-pp-magenta border-2 border-pp-magenta/20 hover:bg-pp-magenta-light hover:border-pp-magenta transition-colors"
              >
                Explorează Servicii
              </Link>
            </div>

            {/* Mini phone form */}
            <div className="mb-10 max-w-md">
              <p className="text-xs text-pp-muted mb-2 font-medium">Sau lasă-ne numărul și te sunăm noi:</p>
              <InlineMiniForm compact={true} source="hero" />
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 lg:gap-10">
              <div>
                <div className="text-2xl font-extrabold text-gradient-magenta">2000+</div>
                <div className="text-xs text-pp-muted font-medium">Evenimente</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-gradient-magenta">10+</div>
                <div className="text-xs text-pp-muted font-medium">Ani Experiență</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-2xl font-extrabold text-gradient-magenta">5.0</div>
                <svg className="w-5 h-5 text-pp-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div className="text-xs text-pp-muted font-medium ml-1">Google Reviews</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/media/edited/cabina-foto-photo-booth/02-setup-cabina-foto-sala-nunta-fundal-alb.jpeg"
                  alt="Cabina foto PartyPixel la eveniment nunta"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating badge top-right: AI Photo Booth */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-elevated p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-pp-teal-light flex items-center justify-center">
                <Icon name="sparkle-ai" className="w-5 h-5 text-pp-teal" />
              </div>
              <div>
                <div className="text-sm font-bold text-pp-heading">AI Photo Booth</div>
                <div className="text-xs text-pp-teal font-semibold">NOU 2026</div>
              </div>
            </div>

            {/* Floating testimonial snippet bottom-left */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white rounded-2xl shadow-elevated p-4 max-w-[280px] border-l-4 border-pp-magenta">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-pp-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-pp-heading leading-snug font-medium mb-2">
                &ldquo;Cabina foto a fost atracția serii!&rdquo;
              </p>
              <p className="text-xs text-pp-muted font-medium">
                Alexandra M. &mdash; Nuntă
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
