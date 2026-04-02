import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Galerie Cabine Fotografice București — Poze de la Evenimente',
  description:
    'Galerie foto de la evenimente cu cabina foto PartyPixel. Nunți, botezuri, corporate, majorat. Peste 2000 de evenimente în București.',
}

export default function GaleriePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,61,154,0.10) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(29,232,220,0.08) 0%, transparent 70%)',
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-pp-magenta/10 text-pp-magenta mb-4">
            2000+ Evenimente
          </span>
          <h1
            className="text-4xl lg:text-5xl font-extrabold text-pp-heading tracking-[-0.03em] mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Galerie Cabine Fotografice
          </h1>
          <p className="text-lg text-pp-body leading-relaxed max-w-2xl mx-auto mb-8">
            Descoperă momente autentice surprinse cu cabinele foto PartyPixel la nunți, botezuri,
            petreceri corporate și evenimente private din București.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {['Toate', 'Nunți', 'Botezuri', 'Corporate', 'Majorat', 'Selfie 360°'].map(
              (tab) => (
                <button
                  key={tab}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-pp-heading/10 text-pp-heading hover:bg-pp-magenta hover:text-white hover:border-pp-magenta transition-colors"
                >
                  {tab}
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Gallery Masonry-style Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: '/media/edited/Evenimente-events/01-eveniment-nunta-dans-miri-fum-verde.jpeg', label: 'Nuntă — Dans Miri', aspect: 'aspect-[4/3]' },
              { src: '/media/edited/cabina-foto-photo-booth/16-cabina-foto-cu-perete-floral-si-banner.jpeg', label: 'Botez — Perete Floral', aspect: 'aspect-[3/4]' },
              { src: '/media/edited/video-360/04-platforma-video360-sala-nunta-elegant.jpeg', label: 'Nuntă — Video 360', aspect: 'aspect-square' },
              { src: '/media/edited/cabina-foto-photo-booth/24-setup-cabina-foto-sala-eleganta-props.jpeg', label: 'Nuntă — Sala Elegantă', aspect: 'aspect-[4/3]' },
              { src: '/media/edited/guest-book/05-guestbook-nunta-pagina-mesaj-noapte.jpeg', label: 'Nuntă — Guest Book', aspect: 'aspect-[3/4]' },
              { src: '/media/edited/oglinda-magica-magic-mirror/03-oglinda-magica-led-neon-interior-noapte.jpeg', label: 'Petrecere — Oglinda Magică', aspect: 'aspect-square' },
              { src: '/media/edited/cabina-foto-photo-booth/34-setup-cabina-foto-neagra-hotel-props.jpeg', label: 'Corporate — Hotel', aspect: 'aspect-[4/3]' },
              { src: '/media/edited/Evenimente-events/22-eveniment-invitati-petrecere-props.jpeg', label: 'Majorat — Props', aspect: 'aspect-[3/4]' },
              { src: '/media/edited/cabina-foto-ai/29-cabina-foto-alba-led-galerie-foto-ecran.jpeg', label: 'Corporate — AI Booth', aspect: 'aspect-square' },
              { src: '/media/edited/altele-diverse/03-setup-cabina-foto-sala-nunta-vedere-completa.jpeg', label: 'Nuntă — Setup Complet', aspect: 'aspect-[4/3]' },
              { src: '/media/edited/Evenimente-events/40-eveniment-terasa-noapte-fundal-colorat.jpeg', label: 'Petrecere — Terasă', aspect: 'aspect-[3/4]' },
              { src: '/media/edited/cabina-foto-photo-booth/38-cabina-foto-alba-eveniment-craciun-elegant.jpeg', label: 'Crăciun — Cabina Albă', aspect: 'aspect-square' },
            ].map((item) => (
              <div
                key={item.src}
                className="rounded-2xl overflow-hidden img-reveal group cursor-pointer"
              >
                <div className={`${item.aspect} relative`}>
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-pp-heading/0 group-hover:bg-pp-heading/40 transition-colors flex items-end p-4">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-semibold">{item.label}</p>
                      <p className="text-white/60 text-xs">București, 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3.5 rounded-full text-sm font-semibold text-pp-magenta border-2 border-pp-magenta/20 hover:bg-pp-magenta-light transition-colors">
              Încarcă mai multe fotografii
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24 bg-pp-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: '2000+', label: 'Evenimente' },
              { value: '500K+', label: 'Fotografii Printate' },
              { value: '100K+', label: 'GIF-uri Create' },
              { value: '4.9/5', label: 'Rating Google' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <p className="text-3xl font-extrabold text-pp-magenta mb-1">{stat.value}</p>
                <p className="text-pp-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-pp-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl lg:text-4xl font-extrabold tracking-[-0.03em] mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Vrei să apari și tu în galerie?
          </h2>
          <p className="text-white/70 mb-8">
            Rezervă cabina foto PartyPixel și creează momente memorabile la evenimentul tău.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-cabina-fotografica-booth/"
              className="btn-gold px-8 py-4 rounded-full font-bold text-pp-heading text-sm"
            >
              Cere Ofertă Gratuită →
            </Link>
            <a
              href="tel:0745800810"
              className="px-8 py-4 rounded-full font-bold text-white text-sm border-2 border-white/20 hover:bg-white/10 transition-colors"
            >
              📞 0745 800 810
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
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
                q: 'Pot primi toate fotografiile de la evenimentul meu?',
                a: 'Da! Toate fotografiile sunt livrate pe USB și/sau într-o galerie online privată în termen de 2-3 zile după eveniment.',
              },
              {
                q: 'Fotografiile sunt prelucrate profesional?',
                a: 'Fotografiile din cabina foto au iluminare profesională și sunt printate la calitate maximă. Nu necesită prelucrare suplimentară.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
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
