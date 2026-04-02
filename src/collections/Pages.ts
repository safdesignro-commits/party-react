import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, admin: { position: 'sidebar' } },
    { name: 'content', type: 'richText' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroTitle', type: 'text' },
    { name: 'heroSubtitle', type: 'textarea' },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
        { name: 'metaKeywords', type: 'text' },
      ],
    },
  ],
}
