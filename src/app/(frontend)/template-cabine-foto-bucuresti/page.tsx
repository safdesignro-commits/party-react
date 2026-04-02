import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Template Cabine Foto București — Exemple Grafică Personalizată',
  description:
    'Galerie template-uri și exemple de grafică personalizată pentru cabine foto. Design-uri pentru nunți, botezuri, corporate și petreceri private.',
}

const categories = [
  { name: 'Nunți', count: 24 },
  { name: 'Botezuri', count: 18 },
  { name: 'Majorat', count: 12 },
  { name: 'Corporate', count: 16 },
  { name: 'Petreceri Private', count: 10 },
  { name: 'Tematice', count: 8 },
]

export default function TemplatePage() {
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
          <h1
            className="text-4xl lg:text-5xl font-extrabold text-pp-heading tracking-[-0.03em] mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Template-uri Cabine Foto
          </h1>
          <p className="text-lg text-pp-body leading-relaxed max-w-2xl mx-auto mb-8">
            Explorează exemple de grafică personalizată realizată pentru clienții noștri. Fiecare design
            este creat unic — alege un stil care te inspiră și îl adaptăm pentru evenimentul tău.
          </p>
          <Link
            href="/contact-cabina-fotografica-booth/"
            className="btn-gold px-8 py-3.5 rounded-full text-sm font-bold text-pp-heading inline-block"
          >
            Solicită Grafică Personalizată →
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-pp-heading/10 text-pp-heading hover:bg-pp-magenta hover:text-white hover:border-pp-magenta transition-colors"
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: '/media/fundaluri/fundal-01.jpeg', label: 'Nuntă Clasică' },
              { src: '/media/fundaluri/fundal-02.jpeg', label: 'Nuntă Elegantă' },
              { src: '/media/fundaluri/fundal-03.jpeg', label: 'Botez Roz' },
              { src: '/media/fundaluri/fundal-04.jpeg', label: 'Botez Albastru' },
              { src: '/media/fundaluri/fundal-05.jpeg', label: 'Corporate' },
              { src: '/media/fundaluri/fundal-06.jpeg', label: 'Majorat Gold' },
              { src: '/media/fundaluri/fundal-07.jpeg', label: 'Petrecere Tematică' },
              { src: '/media/fundaluri/fundal-08.jpeg', label: 'Nuntă Boho' },
              { src: '/media/fundaluri/fundal-09.jpeg', label: 'Botez Verde' },
              { src: '/media/fundaluri/fundal-10.jpeg', label: 'Nuntă Rustic' },
              { src: '/media/fundaluri/fundal-11.jpeg', label: 'Corporate Modern' },
              { src: '/media/fundaluri/fundal-12.jpeg', label: 'Crăciun' },
            ].map((tmpl) => (
              <div
                key={tmpl.src}
                className="rounded-2xl overflow-hidden img-reveal group cursor-pointer"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={tmpl.src}
                    alt={`Template grafică ${tmpl.label}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-pp-heading/0 group-hover:bg-pp-heading/40 transition-colors flex items-center justify-center">
                    <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      {tmpl.label}
                    </span>
                  </div>
                </div>
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
            Vrei un design personalizat?
          </h2>
          <p className="text-white/70 mb-8">
            Designerul nostru creează grafică unică pentru fiecare eveniment. Trimite-ne detaliile și
            primești un mock-up gratuit!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0745800810"
              className="btn-gold px-8 py-4 rounded-full font-bold text-pp-heading text-sm"
            >
              📞 Sună: 0745 800 810
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=40745800810"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magenta px-8 py-4 rounded-full font-bold text-white text-sm"
            >
              💬 WhatsApp
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
            Întrebări frecvente — Template-uri
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Pot alege un template existent sau trebuie unul nou?',
                a: 'Poți alege orice template din galeria noastră ca punct de plecare, iar designerul îl va adapta cu numele, data și detaliile evenimentului tău. Sau putem crea un design complet nou.',
              },
              {
                q: 'Este gratuită grafica personalizată?',
                a: 'Da, grafica personalizată este inclusă în toate pachetele noastre. Nu există costuri suplimentare pentru design.',
              },
              {
                q: 'Primesc un preview înainte de eveniment?',
                a: 'Absolut! Trimitem un mock-up digital cu 5-7 zile înainte de eveniment. Poți solicita modificări până ești 100% mulțumit.',
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
