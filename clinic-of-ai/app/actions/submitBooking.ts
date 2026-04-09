'use server'

import { supabaseAdmin } from '@/lib/supabase-server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TIME_REGEX = /^([01]\d|2[0-3]):[0-5]\d$/

export interface BookingPayload {
  name: string
  email: string
  company: string
  session_focus: string
  booking_date: string
  booking_time: string
  website?: string
}

export async function submitBooking(
  payload: BookingPayload
): Promise<{ success: boolean; error?: string }> {
  const name = payload.name.trim().replace(/\s+/g, ' ')
  const email = payload.email.trim().toLowerCase()
  const company = payload.company.trim().replace(/\s+/g, ' ')
  const session_focus = payload.session_focus.trim()
  const booking_date = payload.booking_date.trim()
  const booking_time = payload.booking_time.trim()
  const website = (payload.website ?? '').trim()

  // Bot trap: silently accept if hidden field was filled.
  if (website.length > 0) {
    return { success: true }
  }

  if (!name || !email || !company || !session_focus || !booking_date || !booking_time) {
    return { success: false, error: 'All fields are required.' }
  }

  if (!EMAIL_REGEX.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  if (name.length > 100 || company.length > 120 || session_focus.length > 120) {
    return { success: false, error: 'One or more fields are too long.' }
  }

  if (!TIME_REGEX.test(booking_time)) {
    return { success: false, error: 'Please choose a valid time slot.' }
  }

  if (!supabaseAdmin) {
    console.error('Supabase is not configured. Booking cannot be saved.')
    return { success: false, error: 'Service temporarily unavailable. Please try again later.' }
  }

  try {
    const { error: dbError } = await supabaseAdmin.from('bookings').insert([
      { name, email, company, session_focus, booking_date, booking_time },
    ])

    if (dbError) {
      console.error('Supabase insert error:', dbError)
      return { success: false, error: 'Could not save your booking. Please try again.' }
    }
  } catch (error) {
    console.error('Unexpected booking insert error:', error)
    return { success: false, error: 'Could not save your booking. Please try again.' }
  }

  const from = process.env.RESEND_FROM_EMAIL ?? 'hello@clinicofai.com'
  const philippeEmail = process.env.PHILIPPE_EMAIL ?? 'philippe@clinicofai.com'

  if (resend) {
    try {
      await resend.emails.send({
        from,
        to: philippeEmail,
        subject: `New AI Opportunity Audit booking - ${name} (${company})`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company}`,
          `Focus: ${session_focus}`,
          `Date: ${booking_date}`,
          `Time: ${booking_time}`,
        ].join('\n'),
      })
    } catch (error) {
      console.error('Could not send booking notification email:', error)
    }

    try {
      await resend.emails.send({
        from,
        to: email,
        subject: 'Your AI Opportunity Audit is booked - Clinic of AI',
        text: [
          `Hi ${name},`,
          '',
          'Your AI Opportunity Audit is confirmed. Here are your details:',
          '',
          `Date: ${booking_date}`,
          `Time: ${booking_time}`,
          `Focus: ${session_focus}`,
          '',
          "Philippe will review your situation before the call. If you need to reschedule, just reply to this email.",
          '',
          'See you soon,',
          'Clinic of AI',
        ].join('\n'),
      })
    } catch (error) {
      console.error('Could not send booking confirmation email:', error)
    }
  }

  return { success: true }
}
