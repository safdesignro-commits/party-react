import type { CollectionConfig } from 'payload'

export const Partners: CollectionConfig = {
  slug: 'partners',
  admin: {
    useAsTitle: 'name',
    group: 'Content',
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Nume Companie' },
    { name: 'logo', type: 'upload', relationTo: 'media', required: true },
    { name: 'isActive', type: 'checkbox', defaultValue: true, admin: { position: 'sidebar' } },
    { name: 'order', type: 'number', admin: { position: 'sidebar' } },
  ],
}
