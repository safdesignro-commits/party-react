import type { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'faqs',
  labels: { singular: 'Întrebare', plural: 'Întrebări Frecvente (FAQ)' },
  admin: {
    useAsTitle: 'question',
    group: 'Pagini',
    description: 'Întrebări frecvente afișate pe paginile de prețuri și contact.',
    defaultColumns: ['question', 'page', 'order'],
  },
  fields: [
    { name: 'question', type: 'text', required: true, label: 'Întrebare' },
    { name: 'answer', type: 'textarea', required: true, label: 'Răspuns' },
    {
      type: 'row',
      fields: [
        {
          name: 'page',
          type: 'select',
          label: 'Pagina',
          admin: { width: '50%' },
          options: [
            { label: 'General', value: 'general' },
            { label: 'Prețuri', value: 'preturi' },
            { label: 'Contact', value: 'contact' },
            { label: 'Cabina Foto', value: 'cabina-foto' },
            { label: 'AI Photo Booth', value: 'ai-booth' },
            { label: 'Selfie 360', value: 'selfie-360' },
            { label: 'Oglinda Magica', value: 'oglinda-magica' },
            { label: 'Fum Greu', value: 'fum-greu' },
            { label: 'Artificii', value: 'artificii' },
            { label: 'Guest Book', value: 'guest-book' },
            { label: 'Corporate', value: 'corporate' },
          ],
        },
        { name: 'order', type: 'number', label: 'Ordine', admin: { width: '25%' } },
      ],
    },
  ],
}
