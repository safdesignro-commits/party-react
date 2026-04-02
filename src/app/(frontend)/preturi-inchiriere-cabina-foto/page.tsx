import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import { InlineMiniForm } from '@/components/InlineMiniForm'

export const metadata: Metadata = {
  title: 'Prețuri Închiriere Cabina Foto București — Pachete de la 250 lei/oră',
  description:
    'Prețuri transparente pentru închiriere cabină foto în București. 4 pachete: Essential, Popular, Premium, Ultimate. De la 250 lei/oră. Transport gratuit.',
}

const packages = [
  {
    name: 'Essential',
    price: '250',
    unit: 'lei/oră',
    popular: false,
    features: [
      'Cabina foto clasică',
      'Printuri nelimitate',
      'Grafică personalizată',
      'Props & accesorii',
      'Operator dedicat',
      'Transport București + Ilfov',
      'Galerie online',
    ],
  },
  {
    name: 'Popular',
    price: '350',
    unit: 'lei/oră',
    popular: true,
    features: [
      'Tot din Essential +',
      'GIF-uri & Boomerang',
      'Magneți foto (50 buc)',
      'QR share instant',
      'Backdrop premium',
      'Props tematice extinse',
      'USB cu toate pozele',
    ],
  },
  {
    name: 'Premium',
    price: '500',
    unit: 'lei/oră',
    popular: false,
    features: [
      'Tot din Popular +',
      'Selfie 360° inclus',
      'Confetti colorate',
      'Green screen',
      'Slow & fast motion',
      'Social media integration',
      'Film highlight 1 min',
    ],
  },
  {
    name: 'Ultimate',
    price: '750',
    unit: 'lei/oră',
    popular: false,
    features: [
      'Tot din Premium +',
      'AI Photo Booth inclus',
      'Guest Book Clasic inclus',
      'Fum greu inclus',
      'Artificii spark incluse',
      '2 operatori',
      'Setup VIP decorat',
    ],
  },
]

export default function PreturiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl lg:text-5xl font-extrabold text-pp-heading tracking-[-0.03em] mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Prețuri Transparente — Fără Surprize
          </h1>
          <p className="text-lg text-pp-body leading-relaxed max-w-2xl mx-auto mb-4">
            Alege pachetul potrivit pentru evenimentul tău. Toate prețurile includ transport gratuit
            în București și Ilfov, operator dedicat și grafică personalizată.
          </p>
          <p className="text-sm text-pp-muted">
            Minim 2 ore. Prețuri fără TVA. Pachetele pot fi personalizate.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 relative ${
                  pkg.popular
                    ? 'bg-pp-heading text-white shadow-elevated ring-2 ring-pp-gold scale-105'
                    : 'bg-white shadow-card-sm'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-pp-gold text-pp-heading">
                    Cel Mai Ales
                  </span>
                )}
                <h3
                  className={`text-xl font-bold mb-2 ${
                    pkg.popular ? 'text-white' : 'text-pp-heading'
                  }`}
                >
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <span
                    className={`text-4xl font-extrabold ${
                      pkg.popular ? 'text-pp-gold' : 'text-pp-magenta'
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      pkg.popular ? 'text-white/60' : 'text-pp-muted'
                    }`}
                  >
                    {pkg.unit}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start text-sm ${
                        pkg.popular ? 'text-white/80' : 'text-pp-body'
                      }`}
                    >
                      <Icon name="check" className={`w-3.5 h-3.5 shrink-0 mt-0.5 mr-3 ${
                          pkg.popular ? 'text-pp-gold' : 'text-pp-teal'
                        }`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact-cabina-fotografica-booth/"
                  className={`block text-center py-3 rounded-full text-sm font-bold transition-colors ${
                    pkg.popular
                      ? 'btn-gold text-pp-heading'
                      : 'border-2 border-pp-magenta/20 text-pp-magenta hover:bg-pp-magenta-light'
                  }`}
                >
                  Solicită Ofertă
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-pp-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-pp-heading tracking-[-0.03em] mb-12"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Inclus în toate pachetele
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Transport Gratuit Buc+IF', icon: 'truck' as const },
              { label: 'Operator Dedicat', icon: 'user' as const },
              { label: 'Grafică Personalizată', icon: 'palette' as const },
              { label: 'Galerie Online', icon: 'globe' as const },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-6 shadow-card-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-pp-magenta-light flex items-center justify-center mb-3">
                  <Icon name={item.icon} className="w-5 h-5 text-pp-magenta" />
                </div>
                <h3 className="font-bold text-pp-heading">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-pp-bg bg-dots">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-pp-heading tracking-[-0.03em] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Nu ești sigur care pachet e potrivit?
          </h2>
          <p className="text-pp-body mb-8">Consultanță gratuită — te ajutăm să alegi.</p>
          <InlineMiniForm source="preturi" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-pp-heading mb-8 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Întrebări frecvente — Prețuri
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Care este durata minimă de închiriere?',
                a: 'Durata minimă este de 2 ore. Recomandăm minim 3 ore pentru nunți și 2 ore pentru botezuri sau petreceri private.',
              },
              {
                q: 'Prețurile includ TVA?',
                a: 'Prețurile afișate nu includ TVA. Emitem factură fiscală completă pentru companii și persoane fizice.',
              },
              {
                q: 'Se poate personaliza un pachet?',
                a: 'Absolut! Putem crea pachete personalizate combinând orice servicii. Contactează-ne pentru o ofertă adaptată nevoilor tale.',
              },
              {
                q: 'Există costuri suplimentare pentru transport?',
                a: 'Transportul este gratuit în București și Ilfov. Pentru alte județe, se aplică o taxă de deplasare accesibilă — te informăm transparent înainte.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl shadow-card-sm"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-pp-heading">
                  {faq.q}
                  <span className="ml-4 text-pp-magenta transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-pp-body text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
