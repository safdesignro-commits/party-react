import type { Metadata } from 'next'
import { AtmosphereLayout } from '@/components/ServicePageLayouts/AtmosphereLayout'
import { getService } from '@/lib/getService'

const SLUG = 'artificii-spark-nunta-bucuresti'

// Fallback static data (used if CMS is empty)
const fallbackData = {
  hero: {
    title: 'Artificii Spark Nuntă București',
    highlight: 'Artificii Spark',
    description:
      'Artificii reci (cold sparks) care creează un spectacol vizual uimitor fără riscuri. Temperatura maximă de doar 60°C le face sigure pentru interior — fără pericol de incendiu, fără fum și fără miros. Folosite la intrarea mirilor, dansul mirilor sau tăierea tortului.',
    image: '/media/services/artificii-nunta-1.jpeg',
    video: '/media/videos/artificii-da.mp4',
    badge: 'Spectacol de Lumini',
  },
  experienceImage: '/media/edited/Evenimente-events/11-eveniment-nunta-fum-artificii.jpeg',
  experienceFacts: [
    { icon: 'fire', label: 'Indoor Safe' },
    { icon: 'clock', label: '10-15 sec/cascadă' },
    { icon: 'shield', label: 'Fără fum' },
  ],
  steps: [
    {
      title: 'Alegem poziția',
      description:
        'Stabilim unde amplasăm cascadele de scântei — de-a lungul culoarului, lângă ringul de dans sau în jurul tortului.',
    },
    {
      title: 'Setăm înălțimea',
      description:
        'Tehnicianul reglează înălțimea scânteilor între 1 și 4 metri, în funcție de locație și efectul dorit.',
    },
    {
      title: 'Spectacolul începe',
      description:
        'La momentul potrivit, cascadele de scântei luminează sala — sincronizate perfect cu muzica.',
    },
  ],
  comboUpsell: {
    title: 'Combină cu Fum Greu',
    description:
      'Artificii spark + fum greu = cel mai spectaculos efect vizual pentru dansul mirilor. Scântei strălucitoare deasupra unui covor de fum.',
    services: [
      {
        name: 'Artificii Spark',
        href: '/artificii-spark-nunta-bucuresti/',
        image: '/media/services/artificii-nunta-1.jpeg',
      },
      {
        name: 'Fum Greu',
        href: '/fum-greu-gheata-carbonica/',
        image: '/media/edited/Evenimente-events/01-eveniment-nunta-dans-miri-fum-verde.jpeg',
      },
    ],
  },
  faq: [
    {
      question: 'Artificiile spark sunt sigure pentru interior?',
      answer:
        'Da, 100%. Scânteile ating maxim 60°C și se sting înainte de a atinge solul. Nu produc fum, nu lasă reziduuri și nu declanșează alarme.',
    },
    {
      question: 'Cât de înalte sunt scânteile?',
      answer:
        'Înălțimea poate fi reglată între 1 și 4 metri. Tehnicianul nostru ajustează înălțimea în funcție de locație și momentul evenimentului.',
    },
    {
      question: 'Pot fi combinate cu fumul greu?',
      answer:
        'Da! Combinația artificii spark + fum greu creează un efect vizual spectaculos — scântei strălucitoare deasupra unui covor de fum. Cea mai populară combinație pentru dansul mirilor.',
    },
  ],
  slug: 'artificii-spark',
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
    title: 'Artificii Spark Nuntă București — Artificii Reci Interior',
    description:
      'Artificii spark reci pentru nunți în București. Sigure în interior, max 60°C, fără fum. Perfecte pentru intrare, dans, tort. De la 300 lei.',
  }
}

export default async function ArtificiiSparkPage() {
  const service = await getService(SLUG)

  if (!service) {
    return <AtmosphereLayout {...fallbackData} />
  }

  // Map CMS data to AtmosphereLayout props
  const data = {
    hero: {
      title: service.hero?.title || fallbackData.hero.title,
      highlight: service.hero?.highlight || fallbackData.hero.highlight,
      description: service.hero?.description || fallbackData.hero.description,
      image: service.hero?.image || fallbackData.hero.image,
      video: service.hero?.video || fallbackData.hero.video,
      badge: service.hero?.badge || fallbackData.hero.badge,
    },
    experienceImage: service.experienceImage || fallbackData.experienceImage,
    experienceFacts: service.experienceFacts?.length ? service.experienceFacts : fallbackData.experienceFacts,
    steps: service.steps?.length ? service.steps.map((s: any) => ({ title: s.title, description: s.description })) : fallbackData.steps,
    comboUpsell: service.comboUpsell?.title ? {
      title: service.comboUpsell.title,
      description: service.comboUpsell.description,
      services: service.comboUpsell.services,
    } : fallbackData.comboUpsell,
    faq: service.faq?.length ? service.faq.map((f: any) => ({ question: f.question, answer: f.answer })) : fallbackData.faq,
    slug: service.slug || fallbackData.slug,
  }

  return <AtmosphereLayout {...data} />
}
