import { getPayload } from 'payload'
import config from '@payload-config'

export async function getService(slug: string) {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })

  return result.docs[0] || null
}

export async function getServiceFAQs(page: string) {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'faqs',
    where: { page: { equals: page } },
    sort: 'order',
    limit: 20,
    depth: 0,
  })

  return result.docs
}

export async function getPricing() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pricing',
    sort: 'order',
    limit: 10,
    depth: 0,
  })

  return result.docs
}

export async function getTestimonials() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'testimonials',
    where: { isActive: { equals: true } },
    sort: 'order',
    limit: 10,
    depth: 0,
  })

  return result.docs
}
