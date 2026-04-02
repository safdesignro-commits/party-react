import { Icon } from '../ui/Icon'

const testimonials = [
  {
    quote: 'Cabina foto a fost atracția serii! Toți invitații au fost încântați de calitatea pozelor.',
    author: 'Alexandra M.',
    event: 'Nuntă București',
    borderColor: 'border-pp-magenta',
  },
  {
    quote: 'Echipa PartyPixel a fost extraordinară! Totul a fost impecabil de la setup până la final.',
    author: 'Mihai D.',
    event: 'Botez',
    borderColor: 'border-pp-teal',
  },
  {
    quote: 'Am ales pachetul cu fum greu și artificii spark. Efectul a fost absolut spectaculos!',
    author: 'Cristina P.',
    event: 'Nuntă Snagov',
    borderColor: 'border-pp-gold',
  },
]

export function SocialProofSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Reviews summary bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {/* Google "G" icon */}
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>

          <span className="text-3xl font-extrabold text-pp-heading">5.0</span>

          {/* 5 gold stars */}
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-5 h-5 text-pp-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <span className="text-sm text-pp-muted">din 200+ recenzii Google</span>
        </div>

        {/* Separator */}
        <div className="border-b border-gray-100 my-8" />

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className={`bg-white rounded-xl p-8 shadow-card border-l-[3px] ${t.borderColor}`}
            >
              <Icon name="quote" className="w-8 h-8 text-pp-magenta mb-4" />

              <p className="text-base text-pp-body leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div>
                <p className="text-sm font-bold text-pp-heading">{t.author}</p>
                <p className="text-xs text-pp-muted">{t.event}</p>
                <span className="inline-flex items-center gap-1 text-xs text-pp-teal font-semibold mt-1">
                  Verificat Google ✓
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
