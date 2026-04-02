import type { Metadata } from 'next'
import { Icon } from '@/components/ui/Icon'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Cabina Foto București — Solicită Ofertă Gratuită',
  description:
    'Contactează PartyPixel.ro pentru închiriere cabină foto în București. Telefon: 0745 800 810. Răspundem în maxim 2 ore. Ofertă gratuită personalizată.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h1
                className="text-4xl lg:text-5xl font-extrabold text-pp-heading tracking-[-0.03em] mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Solicită Ofertă Gratuită
              </h1>
              <p className="text-lg text-pp-body leading-relaxed mb-8">
                Completează formularul și te contactăm în maxim 2 ore cu o ofertă personalizată pentru
                evenimentul tău.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6 lg:pt-20">
              <div className="bg-white rounded-xl p-6 shadow-card-sm">
                <h3 className="font-bold text-pp-heading text-lg mb-2 flex items-center gap-2">
                  <Icon name="phone" className="w-5 h-5 text-pp-magenta" />
                  Telefon
                </h3>
                <a
                  href="tel:0745800810"
                  className="text-pp-magenta font-semibold text-lg hover:underline"
                >
                  0745 800 810
                </a>
                <p className="text-pp-muted text-sm mt-1">Luni - Duminică, 09:00 - 22:00</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-card-sm">
                <h3 className="font-bold text-pp-heading text-lg mb-2 flex items-center gap-2">
                  <Icon name="chat" className="w-5 h-5 text-[#25D366]" />
                  WhatsApp
                </h3>
                <a
                  href="https://api.whatsapp.com/send?phone=40745800810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pp-magenta font-semibold hover:underline"
                >
                  Scrie-ne pe WhatsApp →
                </a>
                <p className="text-pp-muted text-sm mt-1">
                  Răspundem rapid, inclusiv în weekend.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-card-sm">
                <h3 className="font-bold text-pp-heading text-lg mb-2 flex items-center gap-2">
                  <Icon name="mail" className="w-5 h-5 text-pp-magenta" />
                  Email
                </h3>
                <a
                  href="mailto:contact@partypixel.ro"
                  className="text-pp-magenta font-semibold hover:underline"
                >
                  contact@partypixel.ro
                </a>
                <p className="text-pp-muted text-sm mt-1">
                  Pentru oferte detaliate și documente.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-card-sm">
                <h3 className="font-bold text-pp-heading text-lg mb-2 flex items-center gap-2">
                  <Icon name="map-pin" className="w-5 h-5 text-pp-magenta" />
                  Locație
                </h3>
                <p className="text-pp-body text-sm">București, România</p>
                <p className="text-pp-muted text-sm mt-1">
                  Transport gratuit în București și Ilfov. Acoperim toată România.
                </p>
              </div>

              <div className="bg-pp-heading rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Icon name="clock-fast" className="w-5 h-5 text-pp-gold" />
                  Timp de Răspuns
                </h3>
                <p className="text-3xl font-extrabold text-pp-gold mb-1">{'< 2 ore'}</p>
                <p className="text-white/60 text-sm">
                  Răspundem la toate solicitările în maxim 2 ore, 7 zile din 7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-pp-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-pp-heading mb-8 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Întrebări frecvente
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Cum pot rezerva o cabină foto?',
                a: 'Completează formularul de mai sus, sună-ne la 0745 800 810 sau scrie-ne pe WhatsApp. Vom confirma disponibilitatea și îți vom trimite o ofertă personalizată.',
              },
              {
                q: 'Este necesară o plată în avans?',
                a: 'Da, pentru confirmarea rezervării solicităm un avans de 30%. Restul se achită în ziua evenimentului sau cu 3 zile înainte prin transfer bancar.',
              },
              {
                q: 'Ce se întâmplă dacă trebuie să anulez?',
                a: 'Anularea cu minim 30 de zile înainte este gratuită. Pentru anulări mai tardive, avansul se reține parțial. Te rugăm să ne anunți cât mai devreme.',
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
