import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: { singular: 'Serviciu', plural: 'Servicii' },
  admin: {
    useAsTitle: 'title',
    group: 'Pagini',
    defaultColumns: ['title', 'layoutType', 'isActive', 'updatedAt'],
    description: 'Editează conținutul paginilor de servicii și evenimente.',
    listSearchableFields: ['title', 'slug'],
  },
  fields: [
    // === TAB: INFO DE BAZĂ ===
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Info de Bază',
          description: 'Informații generale despre pagină',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'title', type: 'text', required: true, label: 'Titlu Pagină', admin: { width: '60%' } },
                {
                  name: 'layoutType',
                  type: 'select',
                  required: true,
                  label: 'Tip Pagină',
                  admin: { width: '40%', description: 'Determină structura vizuală a paginii' },
                  options: [
                    { label: '🖼️ Showcase — Cabina foto, AI, 360, Oglinda', value: 'showcase' },
                    { label: '✨ Atmosphere — Fum greu, Artificii, Baloane', value: 'atmosphere' },
                    { label: '💍 EventFocus — Nuntă, Botez, Majorat, Corporate', value: 'eventfocus' },
                    { label: '📖 Custom — Guest Book, altele', value: 'custom' },
                  ],
                },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'slug', type: 'text', required: true, unique: true, label: 'URL', admin: { width: '50%', description: 'Ex: cabina-foto-bucuresti (fără /)' } },
                { name: 'isActive', type: 'checkbox', defaultValue: true, label: 'Activ pe site', admin: { width: '25%' } },
              ],
            },
          ],
        },

        // === TAB: HERO ===
        {
          label: 'Hero (Partea de Sus)',
          description: 'Secțiunea principală vizibilă imediat când se deschide pagina',
          fields: [
            {
              name: 'hero',
              type: 'group',
              label: '',
              fields: [
                { name: 'title', type: 'text', required: true, label: 'Titlu Mare (H1)', admin: { description: 'Titlul principal al paginii, afișat mare' } },
                { name: 'highlight', type: 'text', label: 'Cuvânt Evidențiat', admin: { description: 'Un cuvânt din titlu care va fi colorat (ex: "Premium", "Nuntă")' } },
                { name: 'description', type: 'textarea', required: true, label: 'Descriere', admin: { description: 'Text sub titlu, 2-3 propoziții' } },
                {
                  type: 'row',
                  fields: [
                    { name: 'badge', type: 'text', label: 'Badge', admin: { width: '40%', description: 'Etichetă mică deasupra titlului (ex: "Nr. 1 în București")' } },
                    { name: 'badgeColor', type: 'select', label: 'Culoare Badge', options: [{ label: '🩷 Magenta', value: 'magenta' }, { label: '🩵 Teal', value: 'teal' }, { label: '💛 Gold', value: 'gold' }], defaultValue: 'magenta', admin: { width: '30%' } },
                  ],
                },
                { name: 'image', type: 'text', label: 'Imagine Hero', admin: { description: 'Calea imaginii (ex: /media/edited/cabina-foto-photo-booth/06-cabina-foto-setup-complet-din-lateral.jpeg)' } },
                { name: 'video', type: 'text', label: 'Video (opțional)', admin: { description: 'Calea video (ex: /media/videos/artificii-da.mp4). Doar pt Atmosphere.' } },
              ],
            },
          ],
        },

        // === TAB: CONȚINUT ===
        {
          label: 'Conținut',
          description: 'Secțiunile principale ale paginii',
          fields: [
            // Stats
            {
              name: 'stats',
              type: 'array',
              label: '📊 Statistici (sub hero)',
              admin: { description: 'Numere afișate sub imaginea principală. Doar pt Showcase.', initCollapsed: true },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'value', type: 'text', required: true, label: 'Valoare', admin: { width: '30%', placeholder: '2000+' } },
                    { name: 'label', type: 'text', required: true, label: 'Etichetă', admin: { width: '70%', placeholder: 'Evenimente' } },
                  ],
                },
              ],
            },
            // Steps
            {
              name: 'steps',
              type: 'array',
              label: '🔢 Cum Funcționează (3 pași)',
              admin: { description: 'Pașii explicativi. Ideal 3 pași.', initCollapsed: true },
              fields: [
                { name: 'title', type: 'text', required: true, label: 'Titlu Pas' },
                { name: 'description', type: 'textarea', required: true, label: 'Descriere Pas' },
              ],
            },
            // Features
            {
              name: 'features',
              type: 'array',
              label: '⭐ Caracteristici / Ce Primești',
              admin: { description: 'Lista de beneficii/features. Iconuri: printer, palette, video, magnet, phone-share, mask, camera, sparkle-ai, etc.', initCollapsed: true },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'icon', type: 'text', label: 'Icon', admin: { width: '20%', placeholder: 'printer' } },
                    { name: 'title', type: 'text', required: true, label: 'Titlu', admin: { width: '40%' } },
                    { name: 'label', type: 'text', label: 'Label Scurt (pt pills)', admin: { width: '40%' } },
                  ],
                },
                { name: 'description', type: 'textarea', label: 'Descriere (opțional, doar pt Showcase)' },
              ],
            },
          ],
        },

        // === TAB: GALERIE ===
        {
          label: 'Galerie & Media',
          fields: [
            {
              name: 'gallery',
              type: 'array',
              label: '🖼️ Imagini Galerie',
              admin: { description: 'Fotografii afișate în secțiunea galerie a paginii' },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'src', type: 'text', required: true, label: 'Cale Imagine', admin: { width: '70%', placeholder: '/media/edited/...' } },
                    { name: 'alt', type: 'text', required: true, label: 'Descriere', admin: { width: '30%', placeholder: 'Setup cabina foto' } },
                  ],
                },
              ],
            },
            // Atmosphere-specific
            { name: 'experienceImage', type: 'text', label: '🎬 Imagine Experiență (fullwidth)', admin: { description: 'Doar pt Atmosphere — imaginea mare cu facts overlay', condition: (data) => data.layoutType === 'atmosphere' } },
            {
              name: 'experienceFacts',
              type: 'array',
              label: '📝 Facts Experiență',
              admin: { description: 'Fapte afișate peste imaginea de experiență', condition: (data) => data.layoutType === 'atmosphere' },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'icon', type: 'text', required: true, label: 'Icon', admin: { width: '30%', placeholder: 'clock' } },
                    { name: 'label', type: 'text', required: true, label: 'Text', admin: { width: '70%', placeholder: 'Durată: 3-5 min' } },
                  ],
                },
              ],
            },
          ],
        },

        // === TAB: FAQ ===
        {
          label: 'FAQ',
          description: 'Întrebările frecvente afișate jos pe pagină',
          fields: [
            {
              name: 'faq',
              type: 'array',
              label: 'Întrebări & Răspunsuri',
              fields: [
                { name: 'question', type: 'text', required: true, label: 'Întrebare' },
                { name: 'answer', type: 'textarea', required: true, label: 'Răspuns' },
              ],
            },
          ],
        },

        // === TAB: CONVERSIE ===
        {
          label: 'Conversie & Upsell',
          description: 'Setări formular, combo upsell, servicii relaționate',
          fields: [
            {
              name: 'formDefaults',
              type: 'group',
              label: '📋 Setări Formular Lead',
              fields: [
                { name: 'eventType', type: 'text', label: 'Tip eveniment pre-selectat', admin: { placeholder: 'Nuntă' } },
                { name: 'serviceName', type: 'text', label: 'Nume serviciu (afișat în formular)', admin: { placeholder: 'Cabina Foto Clasică' } },
              ],
            },
            // EventFocus: event type
            { name: 'eventType', type: 'text', label: '💍 Tip Eveniment', admin: { description: 'Doar pt EventFocus (ex: Nuntă, Botez)', condition: (data) => data.layoutType === 'eventfocus' } },
            // Combo upsell
            {
              name: 'comboUpsell',
              type: 'group',
              label: '🔗 Combo Upsell',
              admin: { description: 'Secțiune "Combină cu..." — doar pt Atmosphere', condition: (data) => data.layoutType === 'atmosphere' },
              fields: [
                { name: 'title', type: 'text', label: 'Titlu', admin: { placeholder: 'Combină cu Fum Greu' } },
                { name: 'description', type: 'textarea', label: 'Descriere' },
                {
                  name: 'services',
                  type: 'array',
                  label: 'Servicii din Combo',
                  fields: [
                    { name: 'name', type: 'text', required: true, label: 'Nume' },
                    { name: 'href', type: 'text', required: true, label: 'Link', admin: { placeholder: '/fum-greu-gheata-carbonica/' } },
                    { name: 'image', type: 'text', required: true, label: 'Imagine' },
                  ],
                },
              ],
            },
            // Related services
            {
              name: 'relatedServices',
              type: 'array',
              label: '🔗 Servicii Relaționate',
              admin: { description: 'Carduri "Alte servicii pentru..." — doar pt EventFocus', condition: (data) => data.layoutType === 'eventfocus' },
              fields: [
                { name: 'title', type: 'text', required: true, label: 'Nume Serviciu' },
                { name: 'href', type: 'text', required: true, label: 'Link' },
                { name: 'image', type: 'text', required: true, label: 'Imagine' },
              ],
            },
            // Testimonials
            {
              name: 'heroTestimonial',
              type: 'group',
              label: '💬 Testimonial în Hero',
              admin: { condition: (data) => data.layoutType === 'eventfocus' },
              fields: [
                { name: 'text', type: 'text', label: 'Citat' },
                { name: 'author', type: 'text', label: 'Autor' },
                { name: 'event', type: 'text', label: 'Eveniment' },
              ],
            },
            {
              name: 'testimonialHighlight',
              type: 'group',
              label: '💬 Testimonial Evidențiat',
              fields: [
                { name: 'text', type: 'textarea', label: 'Citat mare' },
                { name: 'author', type: 'text', label: 'Autor' },
                { name: 'event', type: 'text', label: 'Eveniment' },
              ],
            },
          ],
        },

        // === TAB: SEO ===
        {
          label: 'SEO',
          description: 'Optimizare pentru motoarele de căutare (Google)',
          fields: [
            {
              name: 'seo',
              type: 'group',
              label: '',
              fields: [
                { name: 'metaTitle', type: 'text', label: 'Titlu Google', admin: { description: 'Titlul care apare în rezultatele Google (max 60 caractere)' } },
                { name: 'metaDescription', type: 'textarea', label: 'Descriere Google', admin: { description: 'Descrierea din rezultatele Google (max 160 caractere)' } },
              ],
            },
          ],
        },
      ],
    },
  ],
}
