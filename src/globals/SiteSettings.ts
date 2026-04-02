import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Setări Site & Homepage',
  admin: {
    group: 'Setări',
    description: 'Editează informațiile generale ale site-ului și conținutul paginii principale.',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // === TAB: GENERAL ===
        {
          label: 'Date Generale',
          description: 'Informații de contact și identitate brand',
          fields: [
            {
              name: 'general',
              type: 'group',
              label: '',
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'siteName', type: 'text', defaultValue: 'PartyPixel.ro', label: 'Nume Site', admin: { width: '50%' } },
                    { name: 'tagline', type: 'text', defaultValue: 'Photo Booth Premium București', label: 'Tagline', admin: { width: '50%' } },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'phone', type: 'text', defaultValue: '0745 800 810', label: '📞 Telefon', admin: { width: '33%' } },
                    { name: 'email', type: 'email', defaultValue: 'contact@partypixel.ro', label: '📧 Email', admin: { width: '33%' } },
                    { name: 'whatsapp', type: 'text', defaultValue: '40745800810', label: '💬 WhatsApp (nr intl)', admin: { width: '33%' } },
                  ],
                },
                { name: 'address', type: 'text', defaultValue: 'București, România', label: '📍 Adresă' },
              ],
            },
          ],
        },

        // === TAB: SOCIAL ===
        {
          label: 'Social Media',
          fields: [
            {
              name: 'social',
              type: 'group',
              label: '',
              fields: [
                { name: 'facebook', type: 'text', label: 'Facebook URL', admin: { placeholder: 'https://facebook.com/partypixel' } },
                { name: 'instagram', type: 'text', label: 'Instagram URL', admin: { placeholder: 'https://instagram.com/partypixel' } },
                { name: 'tiktok', type: 'text', label: 'TikTok URL', admin: { placeholder: 'https://tiktok.com/@partypixel' } },
                { name: 'youtube', type: 'text', label: 'YouTube URL' },
              ],
            },
          ],
        },

        // === TAB: HOMEPAGE HERO ===
        {
          label: 'Homepage — Hero',
          description: 'Prima secțiune vizibilă pe pagina principală',
          fields: [
            {
              name: 'hero',
              type: 'group',
              label: '',
              fields: [
                { name: 'badgeText', type: 'text', defaultValue: 'Disponibil pentru evenimente 2026', label: 'Badge Text', admin: { description: 'Textul mic verde de deasupra titlului' } },
                { name: 'title', type: 'text', defaultValue: 'Amintiri care strălucesc pentru totdeauna', label: 'Titlu Principal (H1)', admin: { description: 'Cuvântul "strălucesc" va fi colorat automat' } },
                { name: 'highlightWord', type: 'text', defaultValue: 'strălucesc', label: 'Cuvânt Evidențiat', admin: { description: 'Cuvântul din titlu care va fi colorat gradient' } },
                { name: 'subtitle', type: 'textarea', defaultValue: 'Photo Booth premium în București. Cabine foto, Selfie 360°, AI Booth — cu printuri nelimitate și operator dedicat.', label: 'Subtitlu' },
                { name: 'heroImage', type: 'text', defaultValue: '/media/edited/cabina-foto-photo-booth/02-setup-cabina-foto-sala-nunta-fundal-alb.jpeg', label: 'Imagine Hero', admin: { description: 'Calea imaginii din dreapta (ex: /media/edited/...)' } },
                {
                  type: 'row',
                  fields: [
                    { name: 'ctaPrimary', type: 'text', defaultValue: 'Cere Ofertă Gratuită', label: 'Buton Principal', admin: { width: '50%' } },
                    { name: 'ctaSecondary', type: 'text', defaultValue: 'Explorează Servicii', label: 'Buton Secundar', admin: { width: '50%' } },
                  ],
                },
              ],
            },
          ],
        },

        // === TAB: HOMEPAGE STATS ===
        {
          label: 'Homepage — Statistici',
          description: 'Numerele afișate sub hero pe pagina principală',
          fields: [
            {
              name: 'stats',
              type: 'group',
              label: '',
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'eventsCount', type: 'text', defaultValue: '2000+', label: 'Nr. Evenimente', admin: { width: '33%' } },
                    { name: 'yearsExperience', type: 'text', defaultValue: '10+', label: 'Ani Experiență', admin: { width: '33%' } },
                    { name: 'googleRating', type: 'text', defaultValue: '5.0', label: 'Rating Google', admin: { width: '33%' } },
                  ],
                },
              ],
            },
          ],
        },

        // === TAB: HOMEPAGE TESTIMONIALE ===
        {
          label: 'Homepage — Testimonial Hero',
          description: 'Testimonialul mic care apare pe imaginea din hero',
          fields: [
            {
              name: 'heroTestimonial',
              type: 'group',
              label: '',
              fields: [
                { name: 'quote', type: 'text', defaultValue: 'Cabina foto a fost atracția serii!', label: 'Citat Scurt' },
                { name: 'author', type: 'text', defaultValue: 'Alexandra M. — Nuntă', label: 'Autor' },
              ],
            },
          ],
        },

        // === TAB: HOMEPAGE SERVICES SECTION ===
        {
          label: 'Homepage — Servicii',
          description: 'Secțiunea "Alege experiența perfectă" de pe pagina principală',
          fields: [
            {
              name: 'servicesSection',
              type: 'group',
              label: '',
              fields: [
                { name: 'label', type: 'text', defaultValue: 'SERVICII PREMIUM', label: 'Label Mic' },
                { name: 'title', type: 'text', defaultValue: 'Alege experiența perfectă', label: 'Titlu Secțiune' },
                { name: 'description', type: 'textarea', defaultValue: 'Cabina foto clasică sau cu tehnologie AI. Filmare 360 sau efecte speciale. Fiecare serviciu vine cu operator dedicat, transport gratuit și grafică personalizată.', label: 'Descriere' },
              ],
            },
          ],
        },

        // === TAB: HOMEPAGE VIDEO ===
        {
          label: 'Homepage — Video',
          description: 'Secțiunea video de pe pagina principală',
          fields: [
            {
              name: 'videoSection',
              type: 'group',
              label: '',
              fields: [
                { name: 'videoSrc', type: 'text', defaultValue: '/media/videos/artificii-da.mp4', label: 'Video URL', admin: { description: 'Calea video-ului (ex: /media/videos/...)' } },
                { name: 'title', type: 'text', defaultValue: 'Magia prinde viață la evenimentul tău', label: 'Titlu' },
                { name: 'description', type: 'textarea', defaultValue: 'De la fum greu spectaculos la artificii spark indoor, fiecare efect este conceput să creeze momente wow.', label: 'Descriere' },
                {
                  name: 'bullets',
                  type: 'array',
                  label: 'Puncte cheie',
                  defaultValue: [
                    { text: 'Fum greu spectaculos' },
                    { text: 'Artificii spark indoor' },
                    { text: 'Setup complet în 30 min' },
                  ],
                  fields: [
                    { name: 'text', type: 'text', required: true, label: 'Text' },
                  ],
                },
              ],
            },
          ],
        },

        // === TAB: HOMEPAGE CTA ===
        {
          label: 'Homepage — CTA Final',
          description: 'Secțiunea de contact de jos cu formularul',
          fields: [
            {
              name: 'ctaSection',
              type: 'group',
              label: '',
              fields: [
                { name: 'label', type: 'text', defaultValue: 'HAI SĂ DISCUTĂM', label: 'Label Mic' },
                { name: 'title', type: 'text', defaultValue: 'Transformă evenimentul tău într-o experiență memorabilă', label: 'Titlu' },
                { name: 'description', type: 'textarea', defaultValue: 'Completează formularul și te contactăm în maxim 2 ore cu o ofertă personalizată. Transport gratuit în București și Ilfov.', label: 'Descriere' },
              ],
            },
          ],
        },

        // === TAB: SEO ===
        {
          label: 'SEO Global',
          description: 'Setări SEO valabile pe tot site-ul',
          fields: [
            {
              name: 'seo',
              type: 'group',
              label: '',
              fields: [
                { name: 'defaultTitle', type: 'text', defaultValue: 'PartyPixel.ro — Cabina Foto București | Photo Booth Premium 2026', label: 'Titlu Google (default)' },
                { name: 'defaultDescription', type: 'textarea', defaultValue: 'Photo Booth premium în București. Cabine foto, Selfie 360°, AI Booth, fum greu, artificii. De la 250 lei/oră. Transport gratuit. 2000+ evenimente.', label: 'Descriere Google (default)' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
