import type { Metadata } from 'next'
import { EventFocusLayout } from '@/components/ServicePageLayouts/EventFocusLayout'
import { getService } from '@/lib/getService'

const SLUG = 'cabina-foto-nunta-photobooth-bucuresti'

// Fallback static data (used if CMS is empty)
const fallbackData = {
  hero: {
    title: 'Cabina Foto Nuntă București',
    highlight: 'Nuntă',
    description:
      'Oferă invitaților tăi amintiri unice din cea mai specială zi. Cabina foto PartyPixel vine cu grafică personalizată pe tema nunții, printuri nelimitate și magneți de frigider — cadoul perfect pentru fiecare invitat. Mireasa, mirele și nașii se vor distra regește!',
    image: '/media/edited/Evenimente-events/01-eveniment-nunta-dans-miri-fum-verde.jpeg',
    badge: 'Nr. 1 pentru Nunți',
    testimonial: {
      text: 'Cabina foto a fost atracția serii! Toți invitații au fost încântați.',
      author: 'Alexandra M.',
      event: 'Nuntă București',
    },
  },
  features: [
    { icon: 'palette', label: 'Grafică de Nuntă Personalizată' },
    { icon: 'printer', label: 'Printuri Nelimitate' },
    { icon: 'magnet', label: 'Magneți — Cadoul Perfect' },
    { icon: 'video', label: 'GIF-uri & Boomerang' },
    { icon: 'cloud-save', label: 'Galerie Online Privată' },
    { icon: 'mask', label: 'Props Tematice de Nuntă' },
    { icon: 'user', label: 'Operator Dedicat' },
    { icon: 'truck', label: 'Transport Gratuit București' },
  ],
  gallery: [
    { src: '/media/edited/Evenimente-events/02-eveniment-nunta-dans-miri-artificii.jpeg', alt: 'Nuntă - dans miri cu artificii' },
    { src: '/media/edited/Evenimente-events/11-eveniment-nunta-fum-artificii.jpeg', alt: 'Nuntă - fum și artificii' },
    { src: '/media/edited/cabina-foto-photo-booth/04-cabina-foto-print-instantaneu-nunta.jpeg', alt: 'Cabina foto print instant la nuntă' },
    { src: '/media/edited/cabina-foto-photo-booth/02-setup-cabina-foto-sala-nunta-fundal-alb.jpeg', alt: 'Setup cabina foto sală nuntă' },
    { src: '/media/edited/Evenimente-events/22-eveniment-invitati-petrecere-props.jpeg', alt: 'Invitați nuntă cu props' },
  ],
  testimonialHighlight: {
    text: 'Echipa PartyPixel a fost extraordinară! De la setup până la final, totul a fost impecabil.',
    author: 'Mihai D.',
    event: 'Nuntă',
  },
  relatedServices: [
    {
      title: 'Cabina Foto Clasică',
      href: '/cabina-foto-bucuresti/',
      image: '/media/edited/cabina-foto-photo-booth/06-cabina-foto-setup-complet-din-lateral.jpeg',
    },
    {
      title: 'Selfie 360°',
      href: '/video-booth-selfie-360-bucuresti/',
      image: '/media/edited/video-360/04-platforma-video360-sala-nunta-elegant.jpeg',
    },
    {
      title: 'Fum Greu',
      href: '/fum-greu-gheata-carbonica/',
      image: '/media/edited/Evenimente-events/02-eveniment-nunta-dans-miri-artificii.jpeg',
    },
  ],
  faq: [
    {
      question: 'Câte fotografii pot face invitații la nuntă?',
      answer:
        'Nelimitat! Pe toată durata evenimentului, invitații pot face câte fotografii doresc. Fiecare poză este printată pe loc.',
    },
    {
      question: 'Puteți personaliza design-ul pentru nunta noastră?',
      answer:
        'Absolut. Creăm grafică personalizată cu numele mirilor, data nunții, paleta de culori și tema evenimentului. Totul este inclus în pachet.',
    },
    {
      question: 'Cât spațiu este necesar pentru cabina foto?',
      answer:
        'Cabina foto ocupă aproximativ 2x3 metri. Ne asigurăm că se integrează perfect în spațiul restaurantului sau locației.',
    },
    {
      question: 'Oferiți și magneți ca marturii de nuntă?',
      answer:
        'Da, magneții de frigider personalizați sunt una dintre cele mai populare opțiuni. Fiecare invitat primește un suvenir unic din ziua nunții.',
    },
  ],
  eventType: 'Nuntă',
  slug: 'cabina-foto-nunta',
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
    title: 'Cabina Foto Nuntă București — Photo Booth pentru Nunți',
    description:
      'Cabina foto pentru nuntă în București. Amintiri de neuitat pentru miri și invitați. Printuri nelimitate, grafică personalizată, magneți. De la 250 lei/oră.',
  }
}

export default async function CabinaFotoNuntaPage() {
  const service = await getService(SLUG)

  if (!service) {
    return <EventFocusLayout {...fallbackData} />
  }

  // Map CMS data to EventFocusLayout props
  const data = {
    hero: {
      title: service.hero?.title || fallbackData.hero.title,
      highlight: service.hero?.highlight || fallbackData.hero.highlight,
      description: service.hero?.description || fallbackData.hero.description,
      image: service.hero?.image || fallbackData.hero.image,
      badge: service.hero?.badge || fallbackData.hero.badge,
      testimonial: service.heroTestimonial ? {
        text: service.heroTestimonial.text,
        author: service.heroTestimonial.author,
        event: service.heroTestimonial.event,
      } : fallbackData.hero.testimonial,
    },
    features: service.features?.length ? service.features.map((f: any) => ({ icon: f.icon, label: f.label })) : fallbackData.features,
    gallery: service.gallery?.length ? service.gallery.map((g: any) => ({ src: g.src, alt: g.alt })) : fallbackData.gallery,
    testimonialHighlight: service.testimonialHighlight || fallbackData.testimonialHighlight,
    relatedServices: service.relatedServices?.length ? service.relatedServices : fallbackData.relatedServices,
    faq: service.faq?.length ? service.faq.map((f: any) => ({ question: f.question, answer: f.answer })) : fallbackData.faq,
    eventType: service.eventType || fallbackData.eventType,
    slug: service.slug || fallbackData.slug,
  }

  return <EventFocusLayout {...data} />
}
