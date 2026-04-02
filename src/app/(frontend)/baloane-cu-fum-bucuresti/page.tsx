import type { Metadata } from 'next'
import { AtmosphereLayout } from '@/components/ServicePageLayouts/AtmosphereLayout'
import { getService } from '@/lib/getService'

const SLUG = 'baloane-cu-fum-bucuresti'

// Fallback static data (used if CMS is empty)
const fallbackData = {
  hero: {
    title: 'Baloane cu Fum București',
    highlight: 'Baloane cu Fum',
    description:
      'Baloanele cu fum sunt efectul vizual care uimește pe toată lumea. Când balonul se sparge, eliberează un nor de fum colorat și spectaculos. Sigure în interior, perfecte pentru surprize la miezul nopții, intrarea mirilor sau momente speciale din seara evenimentului.',
    image: '/media/edited/Evenimente-events/40-eveniment-terasa-noapte-fundal-colorat.jpeg',
    badge: 'Efect WOW',
  },
  experienceImage: '/media/edited/Evenimente-events/41-eveniment-noapte-invitati-oglinda.jpeg',
  experienceFacts: [
    { icon: 'sparkles', label: 'Efect vizual unic' },
    { icon: 'wind', label: 'Fum dens în baloane' },
    { icon: 'target', label: 'Perfect pt dans' },
  ],
  steps: [
    {
      title: 'Alegi culorile',
      description:
        'Selectezi culorile fumului din gama disponibilă — alb, auriu, roz, albastru — în funcție de tema evenimentului.',
    },
    {
      title: 'Pregătim baloanele',
      description:
        'Echipa noastră umple baloanele cu fum colorat și le poziționează strategic în locație.',
    },
    {
      title: 'Surpriza perfectă',
      description:
        'La momentul ales, baloanele se sparg și eliberează nori de fum colorat — un spectacol de neuitat.',
    },
  ],
  faq: [
    {
      question: 'Sunt baloanele cu fum sigure în interior?',
      answer:
        'Da, fumul este netoxic, fără miros puternic și se disipează în câteva secunde. Nu declanșează alarme de incendiu și nu pătează hainele.',
    },
    {
      question: 'Câte baloane sunt incluse?',
      answer:
        'Pachetele variază între 5 și 20 de baloane cu fum, în funcție de efectul dorit și dimensiunea locației. Recomandăm minim 10 pentru un efect impresionant.',
    },
    {
      question: 'Pot alege culorile fumului?',
      answer:
        'Da! Avem disponibile mai multe culori: alb, auriu, roz, albastru, verde. Putem crea combinații personalizate în funcție de tema evenimentului.',
    },
  ],
  slug: 'baloane-cu-fum',
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
    title: 'Baloane cu Fum București — Efect Vizual Spectaculos',
    description:
      'Baloane cu fum în București. Efect vizual surprinzător pentru nunți, botezuri și petreceri. Sigure în interior, perfecte pentru surprize la miezul nopții.',
  }
}

export default async function BaloaneCuFumPage() {
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
    } : undefined,
    faq: service.faq?.length ? service.faq.map((f: any) => ({ question: f.question, answer: f.answer })) : fallbackData.faq,
    slug: service.slug || fallbackData.slug,
  }

  return <AtmosphereLayout {...data} />
}
