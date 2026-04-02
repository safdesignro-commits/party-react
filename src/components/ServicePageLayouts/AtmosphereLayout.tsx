import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '../ui/Icon'
import { InlineMiniForm } from '../InlineMiniForm'

interface AtmosphereLayoutProps {
  hero: {
    title: string
    highlight: string
    description: string
    image: string
    video?: string
    badge: string
  }
  experienceImage: string
  experienceFacts: Array<{ icon: string; label: string }>
  steps: Array<{ title: string; description: string }>
  comboUpsell?: {
    title: string
    description: string
    services: Array<{ name: string; href: string; image: string }>
  }
  faq: Array<{ question: string; answer: string }>
  slug: string
}

export function AtmosphereLayout({
  hero,
  experienceImage,
  experienceFacts,
  steps,
  comboUpsell,
  faq,
  slug,
}: AtmosphereLayoutProps) {
  /* Highlight word(s) in title */
  const titleParts = hero.title.split(hero.highlight)

  return (
    <>
      {/* ── Hero Split ── */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white bg-dots overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
            {/* Left */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-pp-teal/10 text-pp-teal mb-4">
                {hero.badge}
              </span>

              <h1
                className="text-4xl lg:text-5xl font-extrabold text-pp-heading tracking-[-0.03em] mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {titleParts[0]}
                <span className="text-gradient-magenta">{hero.highlight}</span>
                {titleParts[1]}
              </h1>

              <p className="text-lg text-pp-body leading-relaxed mb-8 max-w-xl">
                {hero.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-cabina-fotografica-booth/"
                  className="btn-gold px-8 py-3.5 rounded-full text-sm font-bold text-pp-heading"
                >
                  Cere Oferta Gratuita &rarr;
                </Link>
                <a
                  href="tel:0745800810"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-pp-magenta border-2 border-pp-magenta/20 hover:bg-pp-magenta-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pp-magenta/40 active:scale-[0.97] transition-colors"
                >
                  <Icon name="phone" className="w-4 h-4" />
                  0745 800 810
                </a>
              </div>
            </div>

            {/* Right — Video or Image */}
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative aspect-[4/3]">
              {hero.video ? (
                <video
                  src={hero.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={hero.image}
                  alt={hero.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience Section ── */}
      <section className="relative">
        <div className="relative aspect-video lg:aspect-[21/9] w-full overflow-hidden">
          <Image
            src={experienceImage}
            alt="Experience showcase"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Facts overlay bar */}
          <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
                {experienceFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center gap-2 text-white"
                  >
                    <Icon name={fact.icon} className="w-5 h-5 text-pp-gold shrink-0" />
                    <span className="text-sm font-medium">{fact.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-pp-magenta text-center mb-3">
            SIMPLU SI RAPID
          </p>
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-pp-heading tracking-[-0.03em] mb-16 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Cum functioneaza?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-pp-magenta/20 via-pp-teal/20 to-pp-gold/20" />

            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                {/* Step number */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-pp-bg flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] relative z-10">
                  <span
                    className="text-2xl font-extrabold text-gradient-magenta"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold text-pp-heading mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-pp-body leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Combo Upsell (conditional) ── */}
      {comboUpsell && (
        <section className="py-16 lg:py-24 bg-pp-bg">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl lg:text-4xl font-extrabold text-pp-heading tracking-[-0.03em] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {comboUpsell.title}
            </h2>
            <p className="text-pp-body leading-relaxed mb-12 max-w-2xl mx-auto">
              {comboUpsell.description}
            </p>

            {/* Cards with "+" between */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {comboUpsell.services.map((service, i) => (
                <div key={service.name} className="contents">
                  {/* Service card */}
                  <Link
                    href={service.href}
                    className="group relative rounded-2xl overflow-hidden min-h-[240px] w-full md:w-72 block"
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 288px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-5">
                      <h3 className="text-white font-bold text-lg">{service.name}</h3>
                      <span className="text-pp-gold text-sm font-semibold">
                        Descopera &rarr;
                      </span>
                    </div>
                  </Link>

                  {/* "+" separator (not after the last card) */}
                  {i < comboUpsell.services.length - 1 && (
                    <div className="shrink-0">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        className="text-pp-magenta"
                      >
                        <circle cx="20" cy="20" r="20" fill="currentColor" fillOpacity={0.1} />
                        <path
                          d="M20 12v16M12 20h16"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/contact-cabina-fotografica-booth/"
                className="btn-gold px-10 py-4 rounded-full text-sm font-bold text-pp-heading inline-block"
              >
                Cere Oferta Combo
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Inline Form ── */}
      <section className="py-20 lg:py-28 bg-pp-bg bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-pp-magenta mb-3">
                HAI SA DISCUTAM
              </p>
              <h2
                className="text-3xl lg:text-4xl font-extrabold text-pp-heading tracking-[-0.03em] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Rezerva acum pentru evenimentul tau
              </h2>
              <p className="text-pp-body leading-relaxed mb-8">
                Completeaza formularul sau suna-ne direct &mdash; raspundem in maxim 2 ore cu o oferta
                personalizata.
              </p>
              <a
                href="tel:0745800810"
                className="inline-flex items-center gap-3 text-2xl font-extrabold text-pp-magenta hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pp-magenta/40"
              >
                <Icon name="phone" className="w-6 h-6" />
                0745 800 810
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-elevated">
              <h3 className="text-lg font-bold text-pp-heading mb-4">Cere oferta gratuita</h3>
              <InlineMiniForm source={`service-${slug}`} serviceName={slug} />
              <p className="text-sm text-pp-body mt-6 flex items-center gap-2">
                sau scrie pe WhatsApp
                <a
                  href="https://api.whatsapp.com/send?phone=40745800810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-pp-magenta font-semibold hover:underline"
                >
                  <Icon name="whatsapp" className="w-4 h-4" />
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-pp-heading mb-8 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Intrebari frecvente
          </h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-pp-heading">
                  {item.question}
                  <span className="ml-4 text-pp-magenta transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-pp-body text-sm leading-relaxed">
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
