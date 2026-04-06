import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'

import { Services } from './collections/Services'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Testimonials } from './collections/Testimonials'
import { FAQs } from './collections/FAQs'
import { Pricing } from './collections/Pricing'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { Partners } from './collections/Partners'
import { Users } from './collections/Users'
import { SiteSettings } from './globals/SiteSettings'
import { Navigation } from './globals/Navigation'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' — PartyPixel Admin',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {},
    dateFormat: 'dd MMM yyyy',
  },
  collections: [Users, Pages, Services, Media, Testimonials, FAQs, Pricing, ContactSubmissions, Partners],
  globals: [SiteSettings, Navigation],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'default-secret',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    push: process.env.NODE_ENV !== 'production',
  }),
  sharp,
})
