import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '../ui/Icon'
import { InlineMiniForm } from '../InlineMiniForm'

interface EventFocusLayoutProps {
  hero: {
    title: string
    highlight: string
    description: string
    image: string
    badge: string
    testimonial: { text: string; author: string; event: string }
  }
  features: Array<{ icon: string; label: string }>
  gallery: Array<{ src: string; alt: string }>
  testimonialHighlight: { text: string; author: string; event: string }
  relatedServices: Array<{ title: string; href: string; image: string }>
  faq: Array<{ question: string; answer: string }>
  eventType: string
  slug: string
}

export function EventFocusLayout({
  hero,
  features,
  gallery,
  testimonialHighlight,
  relatedServices,
  faq,
  eventType,
  slug,
}: EventFocusLayoutProps) {
  /* Highlight word(s) in title */
  const titleParts = hero.title.split(hero.highlight)

  return (
    <>
      {/* ── Hero Split ── */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-pp-magenta/10 text-pp-magenta mb-4">
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

              {/* Inline testimonial snippet */}
              <blockquote className="border-l-4 border-pp-magenta pl-4 mb-8">
                <p className="text-sm italic text-pp-body leading-relaxed">
                  &ldquo;{hero.testimonial.text}&rdquo;
                </p>
                <footer className="mt-2 text-xs font-bold text-pp-heading">
                  {hero.testimonial.author}{' '}
                  <span className="font-normal text-pp-muted">
                    &mdash; {hero.testimonial.event}
                  </span>
                </footer>
              </blockquote>

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

            {/* Right — Portrait image */}
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative aspect-[3/4]">
              <Image
                src={hero.image}
                alt={hero.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── What You Get — Feature Pills ── */}
      <section className="py-12 lg:py-16 bg-pp-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((feature) => (
              <span
                key={feature.label}
                className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-sm font-medium text-pp-heading"
              >
                <Icon name={feature.icon} className="w-4 h-4 text-pp-magenta shrink-0" />
                {feature.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bento Gallery ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.slice(0, 5).map((img, i) => {
              const isLarge = i === 0
              return (
                <div
                  key={img.src}
                  className={`rounded-2xl overflow-hidden relative group ${
                    isLarge
                      ? 'col-span-2 row-span-2 aspect-square'
                      : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes={
                      isLarge
                        ? '(max-width: 1024px) 100vw, 50vw'
                        : '(max-width: 1024px) 50vw, 25vw'
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonial Highlight ── */}
      <section className="py-16 lg:py-24 bg-pp-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Icon name="quote" className="w-10 h-10 text-pp-magenta/30 mx-auto mb-6" />
          <blockquote>
            <p
              className="text-xl lg:text-2xl italic text-pp-heading leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              &ldquo;{testimonialHighlight.text}&rdquo;
            </p>
            <footer>
              <span className="text-sm font-bold text-pp-heading">
                {testimonialHighlight.author}
              </span>
              <span className="text-sm text-pp-muted ml-2">
                &mdash; {testimonialHighlight.event}
              </span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-pp-heading tracking-[-0.03em] mb-12 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Alte servicii pentru{' '}
            <span className="text-gradient-magenta">{eventType}</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-2xl overflow-hidden min-h-[200px] block"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <h3 className="text-white font-bold text-lg mb-1">{service.title}</h3>
                  <span className="text-pp-gold text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Descopera
                    <Icon name="arrow-right" className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
                Rezerva acum pentru {eventType.toLowerCase()}
              </h2>
              <p className="text-pp-body leading-relaxed mb-8">
                Completeaza formularul sau suna-ne direct &mdash; raspundem in maxim 2 ore cu o oferta
                personalizata pentru {eventType.toLowerCase()}.
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
              <InlineMiniForm
                source={`service-${slug}`}
                serviceName={slug}
                defaultEventType={eventType}
              />
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
