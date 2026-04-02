import type { Metadata } from 'next'
import ShowcaseLayout from '@/components/ServicePageLayouts/ShowcaseLayout'
import { getService } from '@/lib/getService'

const SLUG = 'video-booth-selfie-360-bucuresti'

// Fallback static data (used if CMS is empty)
const fallbackData = {
  hero: {
    image: '/media/edited/video-360/04-platforma-video360-sala-nunta-elegant.jpeg',
    badge: 'Video 360°',
    title: 'Selfie 360° Video Booth București',
    highlight: '360°',
    description:
      'Platforma rotativă de 1 metru care filmează 360° în slow motion sau fast motion. Confetti inclus, iluminare profesională și partajare instant prin QR code. Videoclipurile devin virale pe TikTok și Instagram — garantat cel mai comentat moment al serii!',
  },
  stats: [
    { value: '360°', label: 'Filmare Completă' },
    { value: '1m', label: 'Platformă' },
    { value: 'QR', label: 'Share Instant' },
    { value: '∞', label: 'Videoclipuri' },
  ],
  steps: [
    {
      title: 'Urci pe Platformă',
      description:
        'Invitații urcă pe platforma rotativă de 1 metru — încap confortabil 2-3 persoane.',
    },
    {
      title: 'Filmare 360°',
      description:
        'Camera se rotește în jurul tău, filmând în slow motion sau fast motion cu confetti inclus.',
    },
    {
      title: 'Share Instant',
      description:
        'Scanează QR-ul și primești videoclipul pe telefon în 10 secunde. Postează direct pe social media.',
    },
  ],
  features: [
    {
      icon: 'video',
      title: 'Slow & Fast Motion',
      description:
        'Alege între slow motion dramatic sau fast motion amuzant. Ambele moduri creează videoclipuri spectaculoase.',
    },
    {
      icon: 'target',
      title: 'Platformă Rotativă 1m',
      description:
        'Platformă de 1 metru diametru cu lumini LED integrate. Încap confortabil 2-3 persoane simultan.',
    },
    {
      icon: 'sparkles',
      title: 'Confetti Inclus',
      description:
        'Confetti colorate lansate automat pentru efect dramatic. Fiecare videoclip devine spectacular.',
    },
    {
      icon: 'phone-share',
      title: 'QR Sharing Instant',
      description:
        'Scanează QR-ul și primești videoclipul pe telefon în 10 secunde. Postează-l direct pe social media.',
    },
    {
      icon: 'sparkle-ai',
      title: 'Iluminare LED Ring',
      description:
        'Lumină profesională LED ring light pentru un look perfect în orice condiții de iluminare.',
    },
    {
      icon: 'dance',
      title: 'Muzică de Fundal',
      description:
        'Fiecare videoclip vine cu muzică de fundal sincronizată. Alege din playlist-ul nostru sau adaugă melodia ta.',
    },
  ],
  gallery: [
    {
      src: '/media/edited/video-360/01-platforma-video360-exterior-gradina-nunta.jpeg',
      alt: 'Video 360 exterior grădină nuntă',
    },
    {
      src: '/media/edited/video-360/05-platforma-video360-eveniment-corporate-hotel.jpeg',
      alt: 'Video 360 eveniment corporate',
    },
    {
      src: '/media/edited/video-360/02-video360-cu-litere-volumetrice-nunta-exterior.jpeg',
      alt: 'Video 360 cu litere volumetrice',
    },
  ],
  faq: [
    {
      question: 'Câte persoane încap pe platformă?',
      answer:
        'Platforma de 1 metru poate acomoda confortabil 2-3 persoane simultan. Pentru grupuri mai mari, recomandăm runde succesive.',
    },
    {
      question: 'Cum primesc invitații videoclipul?',
      answer:
        'Prin QR code — scanează și primești videoclipul pe telefon în 10 secunde. Poate fi distribuit direct pe TikTok, Instagram sau WhatsApp.',
    },
    {
      question: 'Este inclus confetti?',
      answer:
        'Da, confetti colorat este inclus în pachetul standard. Putem personaliza culorile confetti-ului în funcție de tema evenimentului.',
    },
  ],
  formDefaults: { serviceName: 'Selfie 360' },
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
    title: 'Selfie 360° București — Video Booth Slow Motion & Fast Motion',
    description:
      'Selfie 360° în București. Platformă rotativă 1m, slow/fast motion, confetti inclus, partajare QR instant. Cel mai viral serviciu la petreceri!',
  }
}

export default async function Selfie360Page() {
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
