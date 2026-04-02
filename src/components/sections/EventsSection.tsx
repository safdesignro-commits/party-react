import Link from 'next/link'
import Image from 'next/image'

const events = [
  {
    title: 'Cabina Foto Nunta',
    description: 'Amintiri de neuitat pentru ziua ta speciala.',
    href: '/cabina-foto-nunta-photobooth-bucuresti/',
    image: '/media/edited/Evenimente-events/01-eveniment-nunta-dans-miri-fum-verde.jpeg',
    large: true,
  },
  {
    title: 'Cabina Foto Botez',
    description: 'Marturii foto adorabile pentru cel mic.',
    href: '/cabina-foto-botez-photobooth-bucuresti/',
    image: '/media/edited/cabina-foto-photo-booth/16-cabina-foto-cu-perete-floral-si-banner.jpeg',
    large: false,
  },
  {
    title: 'Cabina Foto Majorat',
    description: 'Petrecerea de 18 ani — WOW factor garantat.',
    href: '/cabina-foto-majorat/',
    image: '/media/edited/Evenimente-events/22-eveniment-invitati-petrecere-props.jpeg',
    large: false,
  },
  {
    title: 'Corporate Events',
    description: 'Branding personalizat, team building memorabil.',
    href: '/photobooth-petreceri-corporate/',
    image: '/media/edited/cabina-foto-photo-booth/34-setup-cabina-foto-neagra-hotel-props.jpeg',
    large: false,
  },
]

export function EventsSection() {
  return (
    <section className="py-20 lg:py-28 bg-pp-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-pp-magenta mb-3">Evenimente</p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-pp-heading tracking-[-0.03em]" style={{ fontFamily: 'var(--font-heading)' }}>
            Pentru fiecare ocazie speciala
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <Link
              key={event.href}
              href={event.href}
              className={`rounded-2xl overflow-hidden relative group cursor-pointer card-hover ${
                event.large ? 'md:col-span-1 lg:col-span-2 lg:row-span-2' : ''
              }`}
              style={{ minHeight: event.large ? 480 : 220 }}
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-600 group-hover:scale-105"
                sizes={event.large
                  ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw'
                  : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className={`font-bold text-white mb-1 ${event.large ? 'text-2xl' : 'text-lg'}`}>
                  {event.title}
                </h3>
                <p className="text-sm text-white/70 mb-3">{event.description}</p>
                <span className="text-sm font-semibold text-pp-gold inline-flex items-center gap-1 group-hover:gap-2 transition-[gap] duration-300">
                  Descoperă →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
