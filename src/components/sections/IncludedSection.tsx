import Image from 'next/image'
import { Icon } from '../ui/Icon'

const features = [
  { icon: 'printer', title: 'Printuri Nelimitate', description: 'Hartie foto HD, rezistenta' },
  { icon: 'user', title: 'Operator Dedicat', description: 'Asistenta completa' },
  { icon: 'palette', title: 'Grafica Custom', description: 'Design unic per eveniment' },
  { icon: 'phone-share', title: 'Share Digital', description: 'Email, QR, social media' },
  { icon: 'truck', title: 'Transport Gratuit', description: 'Bucuresti & Ilfov' },
  { icon: 'cloud-save', title: 'Backup 6 Luni', description: 'Pozele tale in siguranta' },
]

export function IncludedSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-pp-magenta mb-3">Tot inclus</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-pp-heading tracking-[-0.03em] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Fara costuri ascunse.<br />Fara surprize.
            </h2>
            <p className="text-pp-body leading-relaxed mb-8">
              Fiecare pachet PartyPixel vine complet &mdash; de la grafica personalizata pana la transport gratuit in Bucuresti.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-card-sm hover:shadow-card transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-pp-magenta-light flex items-center justify-center shrink-0">
                    <Icon name={feature.icon} className="w-6 h-6 text-pp-magenta" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-pp-heading">{feature.title}</div>
                    <div className="text-xs text-pp-muted">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/media/edited/cabina-foto-photo-booth/24-setup-cabina-foto-sala-eleganta-props.jpeg"
                  alt="Setup cabina foto PartyPixel cu props la eveniment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-pp-magenta text-white rounded-2xl px-4 py-2 shadow-lg flex items-center gap-1.5">
              <Icon name="star" className="w-5 h-5 text-white fill-white" />
              <div>
                <div className="text-lg font-extrabold leading-tight">5.0</div>
                <div className="text-[10px] font-medium opacity-80">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
