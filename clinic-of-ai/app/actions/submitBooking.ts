'use server'

import { supabaseAdmin } from '@/lib/supabase-server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface BookingPayload {
  name: string
  email: string
  company: string
  session_focus: string
  booking_date: string
  booking_time: string
}

export async function submitBooking(
  payload: BookingPayload
): Promise<{ success: boolean; error?: string }> {
  // 1 — Basic validation
  const { name, email, company, session_focus, booking_date, booking_time } = payload
  if (!name || !email || !company || !session_focus || !booking_date || !booking_time) {
    return { success: false, error: 'All fields are required.' }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  // 2 — Insert into Supabase
  const { error: dbError } = await supabaseAdmin.from('bookings').insert([
    { name, email, company, session_focus, booking_date, booking_time },
  ])
  if (dbError) {
    console.error('Supabase insert error:', dbError)
    return { success: false, error: 'Could not save your booking. Please try again.' }
  }

  const from = process.env.RESEND_FROM_EMAIL ?? 'hello@clinicofai.com'
  const philippeEmail = process.env.PHILIPPE_EMAIL ?? 'philippe@clinicofai.com'

  // 3 — Notify Philippe
  await resend.emails.send({
    from,
    to: philippeEmail,
    subject: `New AI Opportunity Audit booking — ${name} (${company})`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Focus: ${session_focus}`,
      `Date: ${booking_date}`,
      `Time: ${booking_time}`,
    ].join('\n'),
  })

  // 4 — Confirmation to the prospect
  await resend.emails.send({
    from,
    to: email,
    subject: 'Your AI Opportunity Audit is booked — Clinic of AI',
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

  return { success: true }
}
