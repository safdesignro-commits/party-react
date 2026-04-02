import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '../ui/Icon'

const heroServices = [
  {
    title: 'Cabina Foto Clasică',
    description: 'Fotografii printate nelimitat, GIF-uri animate, fundaluri premium și operator dedicat.',
    href: '/cabina-foto-bucuresti/',
    image: '/media/edited/cabina-foto-photo-booth/06-cabina-foto-setup-complet-din-lateral.jpeg',
    badge: 'Cel mai popular',
  },
  {
    title: 'AI Photo Booth',
    description: 'Transformări spectaculoase cu inteligență artificială — 100+ filtre și teme unice.',
    href: '/cabina-foto-ai-bucuresti/',
    image: '/media/edited/cabina-foto-ai/29-cabina-foto-alba-led-galerie-foto-ecran.jpeg',
    badge: 'NOU 2026',
  },
]

const compactServices = [
  {
    title: 'Selfie 360°',
    description: 'Clipuri video slow-motion cu distribuire instant prin QR code.',
    href: '/video-booth-selfie-360-bucuresti/',
    icon: 'video' as const,
    iconBg: 'bg-pp-magenta/10',
    iconColor: 'text-pp-magenta',
    linkColor: 'text-pp-magenta',
  },
  {
    title: 'Oglinda Magică',
    description: 'Mirror booth retro cu ecran touch interactiv și printuri instant.',
    href: '/oglinda-magica-bucuresti/',
    icon: 'mirror' as const,
    iconBg: 'bg-pp-teal/10',
    iconColor: 'text-pp-teal',
    linkColor: 'text-pp-teal-dark',
  },
  {
    title: 'Efecte Speciale',
    description: 'Fum greu, artificii spark, baloane cu fum — spectacol vizual de neuitat.',
    href: '/fum-greu-gheata-carbonica/',
    icon: 'fire' as const,
    iconBg: 'bg-pp-magenta/10',
    iconColor: 'text-pp-magenta',
    linkColor: 'text-pp-magenta',
  },
  {
    title: 'Guest Book',
    description: '3 variante: clasic cu copertă din lemn, audio cu telefon retro și video.',
    href: '/guest-book-foto/',
    icon: 'book' as const,
    iconBg: 'bg-pp-teal/10',
    iconColor: 'text-pp-teal',
    linkColor: 'text-pp-teal-dark',
  },
]

export function ServicesSection() {
  return (
    <section id="servicii" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-pp-magenta mb-3">
              Servicii Premium
            </p>
            <h2
              className="text-3xl lg:text-5xl font-extrabold text-pp-heading tracking-[-0.03em]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Alege experiența perfectă
            </h2>
          </div>
          <div className="lg:flex lg:items-end">
            <p className="text-pp-body leading-relaxed">
              De la cabine foto clasice la tehnologie AI &mdash; fiecare serviciu include operator,
              transport și tot ce ai nevoie.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-6">
          {/* Row 1: Hero Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {heroServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-2xl overflow-hidden min-h-[280px] lg:min-h-[320px] block"
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Badge */}
                <span className="absolute top-4 right-4 bg-pp-teal/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {service.badge}
                </span>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-sm text-white/80 mb-3">{service.description}</p>
                  <span className="text-pp-gold font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-[gap] duration-300">
                    Descoperă →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Row 2: Compact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {compactServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl p-5 shadow-card border-t-[3px] border-pp-magenta card-hover block"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-full ${service.iconBg} flex items-center justify-center mb-4`}
                >
                  <Icon name={service.icon} className={`w-5 h-5 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-pp-heading mb-1 group-hover:text-pp-magenta transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-pp-body leading-relaxed mb-3">{service.description}</p>

                {/* Link */}
                <span
                  className={`${service.linkColor} text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-[gap] duration-300`}
                >
                  Descoperă →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
