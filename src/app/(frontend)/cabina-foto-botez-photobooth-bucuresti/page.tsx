import type { Metadata } from 'next'
import { EventFocusLayout } from '@/components/ServicePageLayouts/EventFocusLayout'
import { getService } from '@/lib/getService'

const SLUG = 'cabina-foto-botez-photobooth-bucuresti'

// Fallback static data (used if CMS is empty)
const fallbackData = {
  hero: {
    title: 'Cabina Foto Botez București',
    highlight: 'Botez',
    description:
      'Surprinde cele mai frumoase momente din ziua botezului cu o cabină foto specială. Magneții personalizați cu numele bebelușului sunt cadoul perfect pentru nași și invitați — o mărturie modernă pe care toată lumea o va păstra cu drag.',
    image: '/media/edited/cabina-foto-photo-booth/16-cabina-foto-cu-perete-floral-si-banner.jpeg',
    badge: 'Perfect pentru Botez',
    testimonial: {
      text: 'Magneții au fost marturiile perfecte! Toți invitații au fost încântați de idee.',
      author: 'Ioana P.',
      event: 'Botez București',
    },
  },
  features: [
    { icon: 'magnet', label: 'Magneți — Mărturii Moderne' },
    { icon: 'palette', label: 'Grafică Tematică de Botez' },
    { icon: 'printer', label: 'Printuri Nelimitate' },
    { icon: 'cloud-save', label: 'Galerie Online Privată' },
    { icon: 'mask', label: 'Props Adorabile' },
    { icon: 'user', label: 'Operator Atent' },
    { icon: 'shield', label: 'Lumină LED Blândă' },
    { icon: 'truck', label: 'Transport Gratuit București' },
  ],
  gallery: [
    { src: '/media/edited/cabina-foto-photo-booth/38-cabina-foto-alba-eveniment-craciun-elegant.jpeg', alt: 'Cabina foto la botez' },
    { src: '/media/edited/altele-diverse/12-guestbook-botez-cu-poze-printate-si-props.jpeg', alt: 'Guestbook botez cu poze printate' },
    { src: '/media/edited/cabina-foto-photo-booth/23-setup-cabina-foto-fundal-frunze-interior.jpeg', alt: 'Setup cabina foto botez' },
    { src: '/media/edited/guest-book/01-guestbook-coperta-ursulet-botez-cu-props.jpeg', alt: 'Guestbook botez cu ursuleț' },
    { src: '/media/edited/cabina-foto-photo-booth/24-setup-cabina-foto-sala-eleganta-props.jpeg', alt: 'Setup cabina foto sală elegantă' },
  ],
  testimonialHighlight: {
    text: 'Cabina foto a fost surpriza serii! Nașii și bunicii s-au distrat de minune, iar magneții au fost cel mai apreciat cadou.',
    author: 'Cristina R.',
    event: 'Botez',
  },
  relatedServices: [
    {
      title: 'Cabina Foto Clasică',
      href: '/cabina-foto-bucuresti/',
      image: '/media/edited/cabina-foto-photo-booth/06-cabina-foto-setup-complet-din-lateral.jpeg',
    },
    {
      title: 'Guest Book Foto',
      href: '/guest-book-foto/',
      image: '/media/edited/guest-book/03-guestbook-pagina-mesaj-cu-poza-botez.jpeg',
    },
    {
      title: 'Cabina Foto AI',
      href: '/cabina-foto-ai-bucuresti/',
      image: '/media/edited/cabina-foto-ai/29-cabina-foto-alba-led-galerie-foto-ecran.jpeg',
    },
  ],
  faq: [
    {
      question: 'Magneții pot fi personalizați cu numele bebelușului?',
      answer:
        'Da, fiecare magnet conține fotografia invitaților plus un design personalizat cu numele bebelușului, data botezului și grafică tematică.',
    },
    {
      question: 'Câți magneți primesc invitații?',
      answer:
        'Fiecare invitat poate face câte poze dorește și primește un magnet pentru fiecare fotografie. Pachetele includ un număr generos de magneți.',
    },
    {
      question: 'Este potrivit pentru bebeluși mici?',
      answer:
        'Absolut! Cabina noastră folosește lumină LED blândă, fără flash puternic. Este complet sigură pentru bebeluși de orice vârstă.',
    },
  ],
  eventType: 'Botez',
  slug: 'cabina-foto-botez',
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
    title: 'Cabina Foto Botez București — Photo Booth pentru Botezuri',
    description:
      'Cabina foto pentru botez în București. Magneți personalizați ca mărturii, grafică tematică cu bebeluș, printuri nelimitate. De la 250 lei/oră.',
  }
}

export default async function CabinaFotoBotezPage() {
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
