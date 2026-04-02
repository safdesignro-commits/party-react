import Link from 'next/link'
import { InlineMiniForm } from '../InlineMiniForm'
import { Icon } from '../ui/Icon'

export function InlineLeadSection() {
  return (
    <section className="py-20 lg:py-28 bg-pp-bg bg-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-pp-magenta mb-3">
              HAI SĂ DISCUTĂM
            </p>
            <h2
              className="text-3xl lg:text-4xl font-extrabold text-pp-heading tracking-[-0.03em] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Transformă evenimentul tău într-o experiență memorabilă
            </h2>
            <p className="text-pp-body leading-relaxed mb-8">
              Completează formularul sau sună-ne direct &mdash; răspundem în maxim 2 ore cu o ofertă
              personalizată pentru evenimentul tău.
            </p>

            <a
              href="tel:0745800810"
              className="inline-flex items-center gap-3 text-2xl font-extrabold text-pp-magenta hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pp-magenta/40"
            >
              <Icon name="phone" className="w-6 h-6" />
              0745 800 810
            </a>
          </div>

          {/* Right — form card */}
          <div className="bg-white rounded-2xl p-8 shadow-elevated">
            <h3 className="text-lg font-bold text-pp-heading mb-4">Cere ofertă gratuită</h3>

            <InlineMiniForm source="homepage-cta" />

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
  )
}
