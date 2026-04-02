import type { CollectionConfig } from 'payload'

export const Pricing: CollectionConfig = {
  slug: 'pricing',
  labels: { singular: 'Pachet', plural: 'Pachete Prețuri' },
  admin: {
    useAsTitle: 'packageName',
    group: 'Pagini',
    description: 'Pachetele de prețuri afișate pe pagina de prețuri.',
    defaultColumns: ['packageName', 'price', 'isFeatured', 'order'],
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'packageName', type: 'text', required: true, label: 'Nume Pachet', admin: { width: '40%', placeholder: 'Popular' } },
        { name: 'price', type: 'number', required: true, label: 'Preț (LEI)', admin: { width: '20%' } },
        { name: 'unit', type: 'text', defaultValue: 'lei/oră', label: 'Unitate', admin: { width: '20%', placeholder: 'lei/oră' } },
        { name: 'order', type: 'number', label: 'Ordine', admin: { width: '10%' } },
      ],
    },
    { name: 'isFeatured', type: 'checkbox', defaultValue: false, label: '⭐ Pachet Recomandat (evidențiat vizual)' },
    { name: 'description', type: 'textarea', label: 'Descriere Scurtă (opțional)' },
    {
      name: 'includes',
      type: 'array',
      label: 'Ce Include',
      admin: { description: 'Lista de beneficii incluse în pachet' },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'item', type: 'text', required: true, label: 'Beneficiu', admin: { width: '80%' } },
            { name: 'isHighlighted', type: 'checkbox', defaultValue: false, label: 'Evidențiat', admin: { width: '20%' } },
          ],
        },
      ],
    },
  ],
}
