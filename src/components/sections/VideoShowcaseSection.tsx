import Link from 'next/link'
import { Icon } from '../ui/Icon'

const bullets = [
  'Fum greu spectaculos',
  'Artificii spark indoor',
  'Setup complet în 30 min',
]

export function VideoShowcaseSection() {
  return (
    <section className="py-20 lg:py-28 bg-pp-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Video — left */}
          <div className="lg:col-span-3 relative rounded-[2rem] overflow-hidden shadow-elevated">
            <video
              src="/media/videos/artificii-da.mp4"
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Content — right */}
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-pp-magenta mb-3">
              VEZI ÎN ACȚIUNE
            </p>
            <h2
              className="text-3xl font-extrabold text-pp-heading tracking-[-0.03em] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Magia prinde viață la evenimentul tău
            </h2>
            <p className="text-pp-body leading-relaxed mb-6">
              Efectele speciale transformă orice eveniment într-un spectacol vizual. De la fum greu
              care plutește pe ringul de dans, la artificii spark care creează momente magice &mdash;
              oferim totul pentru o atmosferă de neuitat.
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Icon name="check" className="w-5 h-5 text-pp-teal shrink-0" />
                  <span className="text-sm font-semibold text-pp-heading">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/fum-greu-gheata-carbonica/"
              className="inline-flex items-center gap-2 border-2 border-pp-magenta text-pp-magenta rounded-xl px-6 py-3 text-sm font-semibold hover:bg-pp-magenta hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pp-magenta/40 active:scale-[0.97] transition-colors"
            >
              Explorează Efecte Speciale
              <Icon name="arrow-right" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
