import type { Metadata } from 'next'
import ShowcaseLayout from '@/components/ServicePageLayouts/ShowcaseLayout'
import { getService } from '@/lib/getService'

const SLUG = 'oglinda-magica-bucuresti'

// Fallback static data (used if CMS is empty)
const fallbackData = {
  hero: {
    image: '/media/edited/oglinda-magica-magic-mirror/03-oglinda-magica-led-neon-interior-noapte.jpeg',
    badge: 'Experiență Unică',
    title: 'Oglinda Magică București',
    highlight: 'Magică',
    description:
      'Oglinda Magică aduce un plus de eleganță și rafinament oricărui eveniment. Cu un design retro sofisticat, ecran touch interactiv și mod portret full-body, este alegerea perfectă pentru nunți, recepții elegante și gale. Invitații interacționează cu animații pe ecran și primesc fotografii de înaltă calitate.',
  },
  stats: [
    { value: 'Full-Body', label: 'Mod Portret' },
    { value: 'Touch', label: 'Ecran Interactiv' },
    { value: 'Premium', label: 'Printuri' },
    { value: '∞', label: 'Fotografii' },
  ],
  steps: [
    {
      title: 'Interacțiune pe Ecran',
      description:
        'Invitații sunt ghidați de animații interactive pe ecranul tactil — mesaje personalizate și efecte vizuale.',
    },
    {
      title: 'Fotografiere Full-Body',
      description:
        'Oglinda Magică surprinde invitații din cap până în picioare, în mod portret elegant.',
    },
    {
      title: 'Print & Semnătură',
      description:
        'Invitații pot semna pe ecran, iar fotografia se printează pe loc cu grafică personalizată.',
    },
  ],
  features: [
    {
      icon: 'sparkles',
      title: 'Design Retro Elegant',
      description:
        'Cadru elegant cu finisaje premium care se integrează perfect la evenimente rafinate. Un element decorativ în sine.',
    },
    {
      icon: 'mirror',
      title: 'Ecran Touch Interactiv',
      description:
        'Animații interactive pe ecran care ghidează invitații prin experiență. Mesaje personalizate și efecte vizuale.',
    },
    {
      icon: 'camera',
      title: 'Mod Portret Full-Body',
      description:
        'Spre deosebire de cabina foto clasică, Oglinda Magică surprinde invitații din cap până în picioare.',
    },
    {
      icon: 'printer',
      title: 'Printuri Premium',
      description:
        'Fotografii de înaltă calitate printate pe loc cu grafică personalizată pentru evenimentul tău.',
    },
    {
      icon: 'mail',
      title: 'Semnături pe Ecran',
      description:
        'Invitații pot semna și scrie mesaje direct pe ecranul tactil, adăugând un touch personal fiecărei fotografii.',
    },
    {
      icon: 'mask',
      title: 'Animații Elegante',
      description:
        'Efecte vizuale sofisticate — confetti digital, rame animate și tranziții fluide între fotografii.',
    },
  ],
  gallery: [
    {
      src: '/media/edited/oglinda-magica-magic-mirror/01-oglinda-magica-setup-exterior-gradina.jpeg',
      alt: 'Oglinda magică exterior grădină',
    },
    {
      src: '/media/edited/oglinda-magica-magic-mirror/02-oglinda-magica-ecran-mare-exterior-terasa.jpeg',
      alt: 'Oglinda magică terasă',
    },
    {
      src: '/media/edited/oglinda-magica-magic-mirror/08-oglinda-magica-ecran-mare-eveniment-noapte.jpeg',
      alt: 'Oglinda magică eveniment noapte',
    },
  ],
  faq: [
    {
      question: 'Care este diferența dintre Oglinda Magică și cabina foto clasică?',
      answer:
        'Oglinda Magică oferă fotografii full-body (portret), ecran tactil interactiv cu animații și un design mai elegant. Cabina foto clasică este mai compactă și oferă fotografii bust.',
    },
    {
      question: 'Cât spațiu necesită Oglinda Magică?',
      answer:
        'Oglinda Magică necesită aproximativ 2x2.5 metri. Este mai subțire decât o cabină foto tradițională și se integrează elegant în orice locație.',
    },
    {
      question: 'Pot invitații să scrie mesaje pe ecran?',
      answer:
        'Da! Invitații pot semna, scrie mesaje sau desena direct pe ecranul tactil. Mesajele apar pe fotografia printată — un guestbook interactiv.',
    },
  ],
  formDefaults: { serviceName: 'Oglinda Magică' },
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
    title: 'Oglinda Magică București — Magic Mirror Photo Booth Elegant',
    description:
      'Oglinda Magică în București. Design retro elegant, ecran touch, mod portret, animații interactive. Perfectă pentru nunți și evenimente elegante.',
  }
}

export default async function OglindaMagicaPage() {
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
