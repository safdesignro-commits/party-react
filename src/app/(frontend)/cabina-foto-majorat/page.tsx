import type { Metadata } from 'next'
import { EventFocusLayout } from '@/components/ServicePageLayouts/EventFocusLayout'
import { getService } from '@/lib/getService'

const SLUG = 'cabina-foto-majorat'

// Fallback static data (used if CMS is empty)
const fallbackData = {
  hero: {
    title: 'Cabina Foto Majorat București',
    highlight: 'Majorat',
    description:
      'Majoratul merită o petrecere epică! Surprinde cele mai nebune momente cu cabina foto, Selfie 360° și GIF-uri virale. Prietenii tăi vor adora — iar amintirile vor rămâne pentru totdeauna. Recomandăm combo-ul cabină foto + Selfie 360° pentru maximul de distracție!',
    image: '/media/edited/Evenimente-events/22-eveniment-invitati-petrecere-props.jpeg',
    badge: 'Petrecerea de 18 Ani',
    testimonial: {
      text: 'A fost cel mai tare majorat! Toți prietenii mei au înnebunit după cabina foto și 360.',
      author: 'Daria S.',
      event: 'Majorat București',
    },
  },
  features: [
    { icon: 'video', label: 'GIF-uri & Boomerang Virale' },
    { icon: 'camera', label: 'Selfie 360° Recomandat' },
    { icon: 'printer', label: 'Printuri Instant' },
    { icon: 'palette', label: 'Grafică Youth-Oriented' },
    { icon: 'phone-share', label: 'QR Share Instant' },
    { icon: 'mask', label: 'Props de Party' },
    { icon: 'clock-fast', label: 'Poze în 10 Secunde' },
    { icon: 'truck', label: 'Transport Gratuit București' },
  ],
  gallery: [
    { src: '/media/edited/Evenimente-events/40-eveniment-terasa-noapte-fundal-colorat.jpeg', alt: 'Petrecere majorat terasă' },
    { src: '/media/edited/Evenimente-events/41-eveniment-noapte-invitati-oglinda.jpeg', alt: 'Invitați la majorat' },
    { src: '/media/edited/cabina-foto-photo-booth/34-setup-cabina-foto-neagra-hotel-props.jpeg', alt: 'Setup cabina foto majorat' },
    { src: '/media/edited/video-360/04-platforma-video360-sala-nunta-elegant.jpeg', alt: 'Platforma Selfie 360' },
    { src: '/media/edited/Evenimente-events/21-eveniment-invitati-oglinda-magica.jpeg', alt: 'Invitați la oglinda magică' },
  ],
  testimonialHighlight: {
    text: 'Combo-ul cabină foto + Selfie 360° a fost alegerea perfectă. Toți prietenii mei încă vorbesc despre petrecere!',
    author: 'Andrei T.',
    event: 'Majorat',
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
      title: 'Artificii Spark',
      href: '/artificii-spark-nunta-bucuresti/',
      image: '/media/edited/Evenimente-events/02-eveniment-nunta-dans-miri-artificii.jpeg',
    },
  ],
  faq: [
    {
      question: 'Ce recomanzi pentru un majorat epic?',
      answer:
        'Combo-ul cabină foto + Selfie 360° este cel mai popular. Cabina foto pentru amintiri printate și Selfie 360° pentru videoclipuri slow motion virale pe TikTok.',
    },
    {
      question: 'Puteți veni într-un club sau restaurant?',
      answer:
        'Da, ne adaptăm oricărei locații. Am fost în cluburi, restaurante, vile și chiar în aer liber. Avem propriul sistem de iluminare.',
    },
    {
      question: 'Cât durează un pachet pentru majorat?',
      answer:
        'Recomandăm minim 3 ore pentru un majorat. Pachetele sunt flexibile și pot fi extinse pe loc dacă petrecerea continuă.',
    },
  ],
  eventType: 'Majorat',
  slug: 'cabina-foto-majorat',
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
    title: 'Cabina Foto Majorat București — Photo Booth Petrecere 18 Ani',
    description:
      'Cabina foto pentru majorat și aniversări în București. Selfie 360°, GIF-uri, printuri instant. Energie de petrecere! De la 250 lei/oră.',
  }
}

export default async function CabinaFotoMajoratPage() {
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
