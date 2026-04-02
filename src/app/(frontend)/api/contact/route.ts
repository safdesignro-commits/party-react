import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, eventDate, eventType, guestCount, message } = body

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Numele și telefonul sunt obligatorii.' },
        { status: 400 }
      )
    }

    // Save to Payload CMS
    const payload = await getPayload({ config })

    await payload.create({
      collection: 'contact-submissions',
      data: {
        name,
        phone,
        email: email || undefined,
        eventDate: eventDate || undefined,
        eventType: eventType || undefined,
        guestCount: guestCount || undefined,
        message: message || undefined,
        status: 'new',
      },
    })

    // TODO: Send email notification when SMTP is configured
    // For now, submissions are saved to the CMS and visible in admin panel

    return NextResponse.json(
      { success: true, message: 'Mulțumim! Te vom contacta în maxim 2 ore.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'A apărut o eroare. Te rugăm să ne contactezi la 0745 800 810.' },
      { status: 500 }
    )
  }
}
