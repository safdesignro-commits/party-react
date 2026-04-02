import type { Metadata } from 'next'
import { EventFocusLayout } from '@/components/ServicePageLayouts/EventFocusLayout'
import { getService } from '@/lib/getService'

const SLUG = 'photobooth-petreceri-corporate'

// Fallback static data (used if CMS is empty)
const fallbackData = {
  hero: {
    title: 'Photo Booth Petreceri Corporate',
    highlight: 'Corporate',
    description:
      'Adaugă un element memorabil la evenimentul tău corporate. Cabina foto cu branding complet personalizat — logo, culori corporate, mesaje cheie. Perfectă pentru team building, petreceri de Crăciun, lansări de produs și activări de brand. Peste 500 de evenimente corporate organizate cu succes.',
    image: '/media/edited/cabina-foto-photo-booth/34-setup-cabina-foto-neagra-hotel-props.jpeg',
    badge: 'Business Events',
    testimonial: {
      text: 'Branding-ul pe printuri a fost impecabil. Colegii au fost super încântați de experiență!',
      author: 'Elena V.',
      event: 'Corporate Event București',
    },
  },
  features: [
    { icon: 'target', label: 'Branding Complet' },
    { icon: 'user', label: 'Team Building' },
    { icon: 'sparkle-ai', label: 'Lansări de Produs' },
    { icon: 'globe', label: 'Activări de Brand' },
    { icon: 'phone-share', label: 'Social Media Integration' },
    { icon: 'shield', label: 'Factură & Contract' },
    { icon: 'printer', label: 'Printuri Brandate' },
    { icon: 'cloud-save', label: 'Galerie Online Brandată' },
  ],
  gallery: [
    { src: '/media/edited/video-360/05-platforma-video360-eveniment-corporate-hotel.jpeg', alt: 'Video 360 corporate hotel' },
    { src: '/media/edited/cabina-foto-photo-booth/10-setup-cabina-foto-fundal-bokeh-craciun.jpeg', alt: 'Setup cabina foto corporate Crăciun' },
    { src: '/media/edited/cabina-foto-photo-booth/37-setup-cabina-foto-neagra-exterior-fundal-roz.jpeg', alt: 'Cabina foto corporate exterior' },
    { src: '/media/edited/cabina-foto-photo-booth/39-cabina-foto-neagra-concert-fundal-alb.jpeg', alt: 'Cabina foto concert corporate' },
    { src: '/media/edited/oglinda-magica-magic-mirror/08-oglinda-magica-ecran-mare-eveniment-noapte.jpeg', alt: 'Oglindă magică eveniment corporate' },
  ],
  testimonialHighlight: {
    text: 'Am lucrat cu PartyPixel la 3 evenimente corporate anul acesta. Profesionalism, punctualitate și calitate de fiecare dată. Recomand cu încredere!',
    author: 'Radu M.',
    event: 'Corporate',
  },
  relatedServices: [
    {
      title: 'Cabina Foto Clasică',
      href: '/cabina-foto-bucuresti/',
      image: '/media/edited/cabina-foto-photo-booth/06-cabina-foto-setup-complet-din-lateral.jpeg',
    },
    {
      title: 'Cabina Foto AI',
      href: '/cabina-foto-ai-bucuresti/',
      image: '/media/edited/cabina-foto-ai/29-cabina-foto-alba-led-galerie-foto-ecran.jpeg',
    },
    {
      title: 'Oglinda Magică',
      href: '/oglinda-magica-bucuresti/',
      image: '/media/edited/oglinda-magica-magic-mirror/03-oglinda-magica-led-neon-interior-noapte.jpeg',
    },
  ],
  faq: [
    {
      question: 'Puteți integra logo-ul companiei pe toate materialele?',
      answer:
        'Da, logo-ul și identitatea vizuală a companiei sunt integrate pe printurile foto, overlay-ul digital, backdrop și ecranul cabinei. Oferim preview înainte de eveniment.',
    },
    {
      question: 'Emiteți factură fiscală?',
      answer:
        'Da, emitem factură fiscală, contract de servicii și deviz. Acceptăm plata prin transfer bancar, card sau numerar.',
    },
    {
      question: 'Câte persoane pot deservi pe oră?',
      answer:
        'Cabina foto poate deservi 60-80 de persoane pe oră. Pentru evenimente cu peste 200 de participanți, recomandăm 2 cabine sau combinația cabină + Selfie 360°.',
    },
  ],
  eventType: 'Corporate',
  slug: 'photobooth-petreceri-corporate',
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
    title: 'Photo Booth Petreceri Corporate București — Evenimente Business',
    description:
      'Photo Booth pentru petreceri corporate în București. Branding personalizat, team building, activări de brand. 500+ evenimente corporate organizate.',
  }
}

export default async function CorporatePage() {
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
