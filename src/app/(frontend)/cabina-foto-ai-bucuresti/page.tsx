import type { Metadata } from 'next'
import ShowcaseLayout from '@/components/ServicePageLayouts/ShowcaseLayout'
import { getService } from '@/lib/getService'

const SLUG = 'cabina-foto-ai-bucuresti'

// Fallback static data (used if CMS is empty)
const fallbackData = {
  hero: {
    image: '/media/edited/cabina-foto-ai/29-cabina-foto-alba-led-galerie-foto-ecran.jpeg',
    badge: 'NOU 2026',
    title: 'AI Photo Booth București',
    highlight: 'AI Photo Booth',
    description:
      'Cea mai inovatoare experiență foto din România! AI Photo Booth-ul nostru folosește inteligența artificială pentru a transforma fotografiile invitaților în opere de artă. Peste 100 de filtre AI — de la portrete renascentiste la supereroi, anime și stiluri futuriste. Procesare în doar 20-25 secunde!',
  },
  stats: [
    { value: '100+', label: 'Filtre AI' },
    { value: '20-25s', label: 'Procesare' },
    { value: '2in1', label: 'Print AI + Original' },
    { value: 'QR', label: 'Share Instant' },
  ],
  steps: [
    {
      title: 'Alege Filtrul AI',
      description:
        'Invitații aleg dintr-o gamă de peste 100 de filtre AI — supereroi, anime, portrete clasice, futuristic și multe altele.',
    },
    {
      title: 'Transformare în 20s',
      description:
        'Inteligența artificială procesează fotografia în doar 20-25 secunde, creând o transformare unică.',
    },
    {
      title: 'Print & Share',
      description:
        'Primești atât fotografia originală cât și versiunea AI — pe print și digital prin QR code.',
    },
  ],
  features: [
    {
      icon: 'sparkle-ai',
      title: '100+ Filtre AI',
      description:
        'Supereroi, anime, portrete clasice, stil cartoon, futuristic, fantasy — fiecare filtru creează o transformare unică și surprinzătoare.',
    },
    {
      icon: 'clock-fast',
      title: '20-25 Secunde Procesare',
      description:
        'Inteligența artificială procesează fiecare fotografie în doar 20-25 secunde. Rezultatul este printat și trimis digital instant.',
    },
    {
      icon: 'printer',
      title: 'Print AI + Original',
      description:
        'Primești atât fotografia originală cât și versiunea transformată de AI — pe print sau digital.',
    },
    {
      icon: 'phone-share',
      title: 'Share Digital Instant',
      description:
        'QR code pentru descărcare instantanee pe telefon. Perfect pentru distribuire pe social media.',
    },
    {
      icon: 'target',
      title: 'Personalizare Completă',
      description:
        'Alege filtrele potrivite pentru evenimentul tău sau lasă invitații să exploreze toate opțiunile.',
    },
    {
      icon: 'sparkles',
      title: 'Efect WOW Garantat',
      description:
        'Invitații vor fi fascinați de transformările AI. Cea mai comentată atracție de la orice eveniment.',
    },
  ],
  gallery: [
    {
      src: '/media/edited/cabina-foto-ai/26-cabina-foto-closeup-ecran-fundal-craciun.jpeg',
      alt: 'AI Photo Booth ecran closeup',
    },
    {
      src: '/media/edited/cabina-foto-ai/30-cabina-foto-alba-led-closeup-galerie.jpeg',
      alt: 'Cabina foto AI LED galerie',
    },
    {
      src: '/media/edited/cabina-foto-photo-booth/09-cabina-foto-ecran-touchscreen-closeup.jpeg',
      alt: 'Ecran touchscreen cabina foto AI',
    },
  ],
  faq: [
    {
      question: 'Cât durează procesarea AI a unei fotografii?',
      answer:
        'Fiecare transformare AI durează între 20-25 secunde. Invitatul primește poza printată și/sau pe telefon imediat după.',
    },
    {
      question: 'Câte filtre AI sunt disponibile?',
      answer:
        'Peste 100 de filtre AI, organizate pe categorii: supereroi, anime, stil clasic, futuristic, fantasy, cartoon și multe altele. Poți alege filtrele potrivite pentru evenimentul tău.',
    },
    {
      question: 'Funcționează bine cu grupuri mari?',
      answer:
        'Da! AI-ul poate procesa fotografii cu grupuri de până la 4-5 persoane. Transformările sunt spectaculoase și la nivel de grup.',
    },
    {
      question: 'Necesită conexiune la internet?',
      answer:
        'Da, AI Photo Booth-ul necesită conexiune la internet pentru procesarea imaginilor. Venim echipați cu router 4G/5G propriu pentru orice locație.',
    },
  ],
  formDefaults: { serviceName: 'AI Photo Booth' },
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
    title: 'Cabina Foto AI București — AI Photo Booth 2026',
    description:
      'AI Photo Booth în București — 100+ filtre AI, transformări artistice în 20-25 secunde. Tehnologie NOU 2026. Cea mai nouă atracție la evenimente.',
  }
}

export default async function CabinaFotoAIPage() {
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
