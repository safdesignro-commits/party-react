import type { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigație',
  admin: {
    group: 'Setări',
  },
  fields: [
    {
      name: 'mainMenu',
      type: 'array',
      label: 'Meniu Principal',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
        {
          name: 'children',
          type: 'array',
          label: 'Submeniu',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'url', type: 'text', required: true },
            { name: 'badge', type: 'text', label: 'Badge (ex: NOU)' },
          ],
        },
      ],
    },
  ],
}
