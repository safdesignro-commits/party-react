import type { Metadata } from 'next'
import ShowcaseLayout from '@/components/ServicePageLayouts/ShowcaseLayout'
import { getService } from '@/lib/getService'

const SLUG = 'cabina-foto-bucuresti'

// Fallback static data (used if CMS is empty)
const fallbackData = {
  hero: {
    image: '/media/edited/cabina-foto-photo-booth/06-cabina-foto-setup-complet-din-lateral.jpeg',
    badge: 'Nr. 1 în București',
    title: 'Cabina Foto București — Photo Booth Premium',
    highlight: 'Premium',
    description:
      'Transformă orice eveniment într-o experiență de neuitat cu cabina foto PartyPixel. Printuri nelimitate, GIF-uri amuzante, magneți personalizați și partajare digitală instantanee. Peste 2000 de evenimente organizate cu succes în București și împrejurimi.',
  },
  stats: [
    { value: '2000+', label: 'Evenimente' },
    { value: '10+', label: 'Ani' },
    { value: '100+', label: 'Template-uri' },
    { value: '∞', label: 'Printuri Nelimitate' },
  ],
  steps: [
    { title: 'Alegem Designul', description: 'Alegem împreună designul și fundalul potrivit pentru evenimentul tău.' },
    { title: 'Setup Complet', description: 'Setup complet cu 1h înainte de eveniment, fără nicio grijă din partea ta.' },
    { title: 'Distracție Toată Seara', description: 'Fotografii și printuri nelimitate toată seara pentru toți invitații.' },
  ],
  features: [
    { icon: 'printer', title: 'Printuri Nelimitate', description: 'Fotografii printate pe loc, nelimitat, pe toată durata evenimentului. Format personalizat.' },
    { icon: 'palette', title: 'Grafică Personalizată', description: 'Design unic pentru fiecare eveniment — overlay-uri, rame și template-uri adaptate temei tale.' },
    { icon: 'video', title: 'GIF-uri & Boomerang', description: 'Creează GIF-uri animate și boomerang-uri amuzante, partajabile instant pe social media.' },
    { icon: 'magnet', title: 'Magneți Personalizați', description: 'Fotografii pe magneți de frigider — un suvenir practic și memorabil pentru invitați.' },
    { icon: 'phone-share', title: 'Share Digital Instant', description: 'Partajare instantanee prin QR code sau e-mail. Galerie online privată pentru eveniment.' },
    { icon: 'mask', title: 'Props & Accesorii', description: 'Colecție de 50+ accesorii tematice incluse: ochelari, pălării, mesaje personalizate.' },
  ],
  gallery: [
    { src: '/media/edited/cabina-foto-photo-booth/04-cabina-foto-print-instantaneu-nunta.jpeg', alt: 'Print instantaneu la nuntă' },
    { src: '/media/edited/cabina-foto-photo-booth/13-cabina-foto-eveniment-cu-invitati-lateral.jpeg', alt: 'Cabina foto cu invitați' },
    { src: '/media/edited/cabina-foto-photo-booth/24-setup-cabina-foto-sala-eleganta-props.jpeg', alt: 'Setup cabina foto sala elegantă' },
  ],
  faq: [
    { question: 'Cât costă închirierea unei cabine foto în București?', answer: 'Prețurile pornesc de la 250 lei/oră. Pachetele includ printuri nelimitate, grafică personalizată, props și transport gratuit în București și Ilfov.' },
    { question: 'Ce este inclus în pachetul standard?', answer: 'Pachetul standard include cabina foto, operator dedicat, printuri nelimitate, galerie online, props tematice și transport gratuit în București.' },
    { question: 'Cu cât timp înainte trebuie să rezerv?', answer: 'Recomandăm rezervarea cu minim 2-4 săptămâni înainte, în special pentru weekend-uri. Pentru evenimente în sezonul nunților (mai-octombrie), rezervă cu 2-3 luni înainte.' },
    { question: 'Puteți veni și în afara Bucureștiului?', answer: 'Da, acoperim toată România. Transportul este gratuit în București și Ilfov. Pentru alte locații se aplică o taxă de deplasare accesibilă.' },
  ],
  formDefaults: { serviceName: 'Cabina Foto Clasică' },
  slug: SLUG,
}

export async function generateMetadata(): Promise<Metadata> {
  const service = await getService(SLUG)
  if (service?.seo?.metaTitle) {
    return {
      title: service.seo.metaTitle,
      description: service.seo.metaDescription || fallbackData.hero.description,
    }
  }
  return {
    title: 'Cabina Foto București — Închiriere Photo Booth Premium 2026',
    description: 'Închiriază cabina foto în București de la 250 lei/oră. Printuri nelimitate, GIF-uri, magneți, share digital. Transport gratuit.',
  }
}

export default async function CabinaFotoBucurestiPage() {
  const service = await getService(SLUG)

  if (!service) {
    return <ShowcaseLayout {...fallbackData} />
  }

  // Map CMS data to ShowcaseLayout props
  const data = {
    hero: {
      image: service.hero?.image || fallbackData.hero.image,
      badge: service.hero?.badge || fallbackData.hero.badge,
      badgeColor: service.hero?.badgeColor as 'magenta' | 'teal' | 'gold' | undefined,
      title: service.hero?.title || fallbackData.hero.title,
      highlight: service.hero?.highlight || fallbackData.hero.highlight,
      description: service.hero?.description || fallbackData.hero.description,
    },
    stats: service.stats?.length ? service.stats.map((s: any) => ({ value: s.value, label: s.label })) : fallbackData.stats,
    steps: service.steps?.length ? service.steps.map((s: any) => ({ title: s.title, description: s.description })) : fallbackData.steps,
    features: service.features?.length ? service.features.map((f: any) => ({ icon: f.icon, title: f.title, description: f.description })) : fallbackData.features,
    gallery: service.gallery?.length ? service.gallery.map((g: any) => ({ src: g.src, alt: g.alt })) : fallbackData.gallery,
    faq: service.faq?.length ? service.faq.map((f: any) => ({ question: f.question, answer: f.answer })) : fallbackData.faq,
    formDefaults: {
      eventType: service.formDefaults?.eventType || undefined,
      serviceName: service.formDefaults?.serviceName || fallbackData.formDefaults.serviceName,
    },
    slug: SLUG,
  }

  return <ShowcaseLayout {...data} />
}
