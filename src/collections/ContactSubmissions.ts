import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  labels: { singular: 'Lead', plural: 'Leads (Cereri)' },
  admin: {
    useAsTitle: 'name',
    group: 'Leads',
    description: 'Cereri de ofertă primite prin formularul de pe site.',
    defaultColumns: ['name', 'phone', 'eventType', 'status', 'createdAt'],
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', required: true, label: 'Nume', admin: { width: '40%' } },
        { name: 'phone', type: 'text', required: true, label: 'Telefon', admin: { width: '30%' } },
        {
          name: 'status',
          type: 'select',
          defaultValue: 'new',
          label: 'Status',
          admin: { width: '30%' },
          options: [
            { label: '🟡 Nou', value: 'new' },
            { label: '🔵 Contactat', value: 'contacted' },
            { label: '📧 Ofertă trimisă', value: 'offer-sent' },
            { label: '✅ Confirmat', value: 'confirmed' },
            { label: '🏁 Finalizat', value: 'completed' },
          ],
        },
      ],
    },
    { name: 'email', type: 'email', label: 'Email' },
    {
      type: 'row',
      fields: [
        { name: 'eventDate', type: 'date', label: 'Data Eveniment', admin: { width: '33%' } },
        {
          name: 'eventType',
          type: 'select',
          label: 'Tip Eveniment',
          admin: { width: '33%' },
          options: [
            { label: 'Nuntă', value: 'nunta' },
            { label: 'Botez', value: 'botez' },
            { label: 'Majorat', value: 'majorat' },
            { label: 'Corporate', value: 'corporate' },
            { label: 'Petrecere privată', value: 'petrecere-privata' },
            { label: 'Alt eveniment', value: 'alt-eveniment' },
          ],
        },
        { name: 'guestCount', type: 'text', label: 'Nr. Invitați', admin: { width: '33%' } },
      ],
    },
    { name: 'message', type: 'textarea', label: 'Mesaj' },
  ],
}
