import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: { singular: 'Recenzie', plural: 'Recenzii' },
  admin: {
    useAsTitle: 'authorName',
    group: 'Pagini',
    description: 'Recenzii de la clienți afișate pe homepage și pe pagini.',
    defaultColumns: ['authorName', 'authorRole', 'rating', 'isActive'],
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'authorName', type: 'text', required: true, label: 'Nume Client', admin: { width: '40%', placeholder: 'Alexandra M.' } },
        { name: 'authorRole', type: 'text', label: 'Tip Eveniment', admin: { width: '30%', placeholder: 'Nuntă București' } },
        { name: 'rating', type: 'number', min: 1, max: 5, defaultValue: 5, label: '⭐ Rating (1-5)', admin: { width: '15%' } },
        { name: 'isActive', type: 'checkbox', defaultValue: true, label: 'Activ', admin: { width: '15%' } },
      ],
    },
    { name: 'content', type: 'textarea', required: true, label: 'Textul Recenziei', admin: { description: 'Citatul clientului — se afișează între ghilimele pe site' } },
    { name: 'order', type: 'number', label: 'Ordine Afișare', admin: { position: 'sidebar' } },
  ],
}
