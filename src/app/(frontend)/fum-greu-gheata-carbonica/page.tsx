import type { Metadata } from 'next'
import { AtmosphereLayout } from '@/components/ServicePageLayouts/AtmosphereLayout'
import { getService } from '@/lib/getService'

const SLUG = 'fum-greu-gheata-carbonica'

// Fallback static data (used if CMS is empty)
const fallbackData = {
  hero: {
    title: 'Fum Greu Gheață Carbonică București',
    highlight: 'Gheață Carbonică',
    description:
      'Creează un moment magic la dansul mirilor cu fum greu din gheață carbonică sau sistem CO2. Fumul rămâne la nivelul solului, creând iluzia că dansați pe nori. Complet sigur, fără miros și fără a declanșa alarma de incendiu. Un efect vizual de vis pentru fotografii spectaculoase.',
    image: '/media/edited/Evenimente-events/01-eveniment-nunta-dans-miri-fum-verde.jpeg',
    badge: 'Efect Premium',
  },
  experienceImage: '/media/edited/Evenimente-events/02-eveniment-nunta-dans-miri-artificii.jpeg',
  experienceFacts: [
    { icon: 'clock', label: 'Durată: 3-5 min' },
    { icon: 'shield', label: '100% Sigur' },
    { icon: 'wind', label: 'Fără miros' },
  ],
  steps: [
    {
      title: 'Alegi momentul',
      description:
        'Stabilim împreună momentul perfect — dansul mirilor, intrarea în sală sau deschiderea tortului.',
    },
    {
      title: 'Instalăm echipamentul',
      description:
        'Tehnicianul nostru pregătește sistemul de gheață carbonică sau CO2 discret, fără a deranja evenimentul.',
    },
    {
      title: 'Magia începe',
      description:
        'La semnalul dat, fumul greu inundă ringul de dans — senzația că dansați pe nori.',
    },
  ],
  comboUpsell: {
    title: 'Combină cu Artificii Spark',
    description:
      'Fum greu + artificii spark = cel mai spectaculos efect vizual pentru dansul mirilor. Scântei strălucitoare deasupra unui covor de fum.',
    services: [
      {
        name: 'Fum Greu',
        href: '/fum-greu-gheata-carbonica/',
        image: '/media/edited/Evenimente-events/01-eveniment-nunta-dans-miri-fum-verde.jpeg',
      },
      {
        name: 'Artificii Spark',
        href: '/artificii-spark-nunta-bucuresti/',
        image: '/media/services/artificii-nunta-1.jpeg',
      },
    ],
  },
  faq: [
    {
      question: 'Fumul greu declanșează alarma de incendiu?',
      answer:
        'Nu. Fumul din gheață carbonică sau CO2 nu declanșează senzorii de fum. Este sigur pentru orice locație interior sau exterior.',
    },
    {
      question: 'Cât durează efectul de fum greu?',
      answer:
        'O sesiune de fum greu durează 3-5 minute, perfect pentru dansul mirilor. Putem repeta efectul de mai multe ori pe parcursul serii.',
    },
    {
      question: 'Este sigur pentru copii și persoane cu astm?',
      answer:
        'Da, fumul este complet netoxic, fără miros și fără substanțe chimice. Se disipează rapid și nu irită căile respiratorii.',
    },
  ],
  slug: 'fum-greu',
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
    title: 'Fum Greu Gheață Carbonică București — Efect Dans Mirilor',
    description:
      'Fum greu cu gheață carbonică și sistem CO2 în București. Efect spectaculos pentru dansul mirilor. Fără miros, sigur 100%. De la 350 lei.',
  }
}

export default async function FumGreuPage() {
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
      video: service.hero?.video || undefined,
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
