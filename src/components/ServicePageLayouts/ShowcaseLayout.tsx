import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '../ui/Icon'
import { InlineMiniForm } from '../InlineMiniForm'

interface ShowcaseLayoutProps {
  hero: {
    image: string
    badge: string
    badgeColor?: 'magenta' | 'teal' | 'gold'
    title: string
    highlight: string
    description: string
  }
  stats: Array<{ value: string; label: string }>
  steps: Array<{ title: string; description: string }>
  features: Array<{ icon: string; title: string; description: string }>
  gallery: Array<{ src: string; alt: string }>
  faq: Array<{ question: string; answer: string }>
  formDefaults?: { eventType?: string; serviceName?: string }
  slug: string
}

const GALLERY_ASPECTS = ['4/3', '3/4', '1/1', '4/3', '1/1', '3/4'] as const

function highlightWord(title: string, highlight: string) {
  const idx = title.toLowerCase().indexOf(highlight.toLowerCase())
  if (idx === -1) return <>{title}</>
  const before = title.slice(0, idx)
  const match = title.slice(idx, idx + highlight.length)
  const after = title.slice(idx + highlight.length)
  return (
    <>
      {before}
      <span className="text-pp-gold">{match}</span>
      {after}
    </>
  )
}

export default function ShowcaseLayout({
  hero,
  stats,
  steps,
  features,
  gallery,
  faq,
  formDefaults,
  slug,
}: ShowcaseLayoutProps) {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="relative min-h-[60vh] flex items-end">
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

        <div className="relative w-full p-8 lg:p-16 max-w-7xl">
          <span className="inline-block rounded-full bg-white/20 backdrop-blur text-white text-xs font-bold px-4 py-1.5 mb-4">
            {hero.badge}
          </span>

          <h1 className="font-heading text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 max-w-3xl" style={{ letterSpacing: '-0.03em' }}>
            {highlightWord(hero.title, hero.highlight)}
          </h1>

          <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed font-body">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact-cabina-fotografica-booth/"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-pp-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pp-gold"
            >
              Cere Ofert&#x103;
            </Link>
            <a
              href="tel:0745800810"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 text-sm font-bold text-white backdrop-blur hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ transition: 'background 0.3s ease' }}
            >
              <Icon name="phone" className="w-4 h-4" />
              0745 800 810
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Stats Strip ── */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 lg:gap-16 py-6 px-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold text-pp-magenta font-heading">
                {stat.value}
              </div>
              <div className="text-xs text-pp-muted uppercase tracking-wider font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. How It Works ── */}
      <section className="bg-pp-bg py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-pp-heading text-center mb-12" style={{ letterSpacing: '-0.03em' }}>
            Cum Func&#x21B;ioneaz&#x103;
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.title}>
                <div className="w-12 h-12 rounded-full bg-pp-magenta text-white text-lg font-bold flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-pp-heading mb-2 font-body">
                  {step.title}
                </h3>
                <p className="text-sm text-pp-body leading-relaxed font-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Feature Grid ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-pp-heading text-center mb-12" style={{ letterSpacing: '-0.03em' }}>
            Ce Prime&#x219;ti
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className="bg-white rounded-xl p-5 shadow-card-sm hover:shadow-card"
                style={{ transition: 'box-shadow 0.3s ease' }}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${
                    i % 2 === 0
                      ? 'bg-pp-magenta-light text-pp-magenta'
                      : 'bg-pp-teal-light text-pp-teal-dark'
                  }`}
                >
                  <Icon name={feat.icon} className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-pp-heading mb-1 font-body">
                  {feat.title}
                </h3>
                <p className="text-sm text-pp-body leading-relaxed font-body">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Gallery ── */}
      <section className="bg-pp-bg py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-pp-heading text-center mb-12" style={{ letterSpacing: '-0.03em' }}>
            Galerie
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <div
                key={img.src}
                className="rounded-2xl overflow-hidden relative group"
                style={{ aspectRatio: GALLERY_ASPECTS[i % GALLERY_ASPECTS.length] }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105"
                  style={{ transition: 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Inline Form ── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-pp-heading text-center mb-8" style={{ letterSpacing: '-0.03em' }}>
            Rezerv&#x103; {formDefaults?.serviceName ?? 'Serviciul'}
          </h2>

          <InlineMiniForm
            source={slug}
            defaultEventType={formDefaults?.eventType}
            serviceName={formDefaults?.serviceName}
          />
        </div>
      </section>

      {/* ── 7. FAQ Accordion ── */}
      <section className="bg-pp-bg py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-pp-heading text-center mb-12" style={{ letterSpacing: '-0.03em' }}>
            &#xCE;ntreb&#x103;ri Frecvente
          </h2>

          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group bg-white rounded-xl shadow-card-sm"
              >
                <summary className="p-5 font-semibold text-pp-heading cursor-pointer flex justify-between items-center font-body list-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 shrink-0 text-pp-muted group-open:rotate-45"
                    style={{ transition: 'transform 0.3s ease' }}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-pp-body leading-relaxed font-body">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
