import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: '../public/media',
    mimeTypes: ['image/*', 'video/*'],
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
      { name: 'card', width: 768, height: 512, position: 'centre' },
      { name: 'hero', width: 1920, height: 1080, position: 'centre' },
    ],
  },
  admin: {
    useAsTitle: 'alt',
    group: 'Media',
  },
  fields: [
    { name: 'alt', type: 'text', required: true, label: 'Alt Text (SEO)' },
    { name: 'caption', type: 'text' },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Cabina Foto', value: 'cabina-foto' },
        { label: 'AI Photo Booth', value: 'ai-booth' },
        { label: 'Selfie 360', value: 'selfie-360' },
        { label: 'Oglinda Magica', value: 'oglinda-magica' },
        { label: 'Fum Greu', value: 'fum-greu' },
        { label: 'Artificii', value: 'artificii' },
        { label: 'Baloane cu Fum', value: 'baloane-fum' },
        { label: 'Guest Book', value: 'guest-book' },
        { label: 'Corporate', value: 'corporate' },
        { label: 'Logo Partner', value: 'logo-partner' },
        { label: 'Fundaluri', value: 'fundaluri' },
        { label: 'Altele', value: 'altele' },
      ],
    },
  ],
}
