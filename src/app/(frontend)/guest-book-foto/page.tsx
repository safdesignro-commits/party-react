import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@/components/ui/Icon'
import { InlineMiniForm } from '@/components/InlineMiniForm'

export const metadata: Metadata = {
  title: 'Guest Book Foto București — Carte de Oaspeți Clasic, Audio & Video',
  description:
    'Guest Book Foto în București. 3 variante: Clasic (copertă lemn), Audio (telefon retro), Video (telefon bronz). Amintiri autentice de la invitați.',
}

const variants = [
  {
    icon: 'book',
    title: 'Guest Book Clasic',
    desc: 'Copertă din lemn masiv gravată cu numele mirilor și data nunții. Pagini albe premium unde invitații lipesc fotografii din cabina foto și scriu mesaje personale.',
    features: ['Copertă lemn masiv', 'Gravură personalizată', 'Pagini premium', 'Fotografii lipite de invitați'],
    color: 'bg-pp-gold-light' as const,
    iconColor: 'text-pp-gold-dark' as const,
  },
  {
    icon: 'phone',
    title: 'Audio Guest Book',
    desc: 'Telefon retro vintage unde invitații ridică receptorul și lasă mesaje vocale. Emoțiile se aud — râsete, lacrimi de bucurie, urări sincere.',
    features: ['Telefon retro autentic', 'Mesaje vocale nelimitate', 'Calitate audio HD', 'Livrare USB + digital'],
    color: 'bg-pp-magenta-light' as const,
    iconColor: 'text-pp-magenta' as const,
  },
  {
    icon: 'video',
    title: 'Video Guest Book',
    desc: 'Telefon din lemn și bronz cu cameră video integrată. Invitații ridică receptorul, vorbesc și sunt filmați. Cel mai emoționant cadou.',
    features: ['Telefon lemn + bronz', 'Cameră video integrată', 'Full HD recording', 'Film montat profesional'],
    color: 'bg-pp-teal-light' as const,
    iconColor: 'text-pp-teal-dark' as const,
  },
]

const faqItems = [
  { question: 'Cum funcționează Audio Guest Book?', answer: 'Invitații ridică receptorul telefonului retro, aud un mesaj de bun venit personalizat și apoi lasă mesajul lor vocal. Toate mesajele sunt înregistrate automat și livrate pe USB.' },
  { question: 'Guest Book-ul Clasic include fotografiile din cabina foto?', answer: 'Da! Invitații primesc un set dublu de printuri — unul pentru ei și unul pe care îl lipesc în Guest Book, alături de un mesaj scris de mână.' },
  { question: 'Cât de mare este Guest Book-ul Clasic?', answer: 'Guest Book-ul are dimensiunea A4 landscape cu copertă din lemn masiv. Conține suficiente pagini pentru 80-100 de mesaje cu fotografii.' },
  { question: 'Video Guest Book-ul include montajul filmului?', answer: 'Da, în pachet este inclus montajul profesional al tuturor mesajelor video într-un film unitar, cu tranziții și muzică de fundal.' },
]

export default function GuestBookPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end overflow-hidden"
        style={{
          background: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1))`,
        }}
      >
        <Image
          src="/media/edited/guest-book/01-guestbook-coperta-ursulet-botez-cu-props.jpeg"
          alt="Guest Book Foto București"
          fill
          className="object-cover -z-10"
          sizes="100vw"
          priority
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-20 pt-32 relative z-10 w-full">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-white/20 backdrop-blur text-white mb-4">
            3 Variante Unice
          </span>
          <h1
            className="text-4xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Guest Book <span className="text-pp-gold">Foto</span> București
          </h1>
          <p className="text-lg text-white/80 max-w-xl mb-8">
            Carte de oaspeți cu adevărat specială. 3 variante unice: Clasic, Audio și Video.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact-cabina-fotografica-booth/" className="btn-gold px-8 py-3.5 rounded-full text-sm font-bold text-pp-heading">
              Cere Ofertă Gratuită
            </Link>
            <a href="tel:0745800810" className="px-8 py-3.5 rounded-full text-sm font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-colors">
              0745 800 810
            </a>
          </div>
        </div>
      </section>

      {/* 3 Variants */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-pp-magenta mb-3">ALEGE VARIANTA</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-pp-heading tracking-[-0.03em]" style={{ fontFamily: 'var(--font-heading)' }}>
              3 Variante de Guest Book
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {variants.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-5`}>
                  <Icon name={v.icon} className={`w-6 h-6 ${v.iconColor}`} />
                </div>
                <h3 className="font-bold text-pp-heading text-xl mb-3">{v.title}</h3>
                <p className="text-pp-body text-sm leading-relaxed mb-5">{v.desc}</p>
                <ul className="space-y-2">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-pp-body">
                      <Icon name="check" className="w-4 h-4 text-pp-teal shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-pp-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: '/media/edited/guest-book/05-guestbook-nunta-pagina-mesaj-noapte.jpeg', alt: 'Guest book nuntă mesaj' },
              { src: '/media/edited/guest-book/06-guestbook-nunta-pagini-deschise-mesaje.jpeg', alt: 'Guest book pagini deschise' },
              { src: '/media/edited/guest-book/10-guestbook-nunta-casa-de-piatra.jpeg', alt: 'Guest book nuntă casa de piatră' },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden relative aspect-[4/3] group">
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Form */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-pp-heading tracking-[-0.03em] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            Rezervă Guest Book Foto
          </h2>
          <InlineMiniForm source="guest-book-foto" serviceName="Guest Book Foto" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-pp-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-pp-heading mb-8 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
            Întrebări frecvente — Guest Book
          </h2>
          <div className="space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-xl shadow-card-sm">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-pp-heading">
                  {faq.question}
                  <span className="ml-4 text-pp-magenta transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-5 pb-5 text-pp-body text-sm leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
