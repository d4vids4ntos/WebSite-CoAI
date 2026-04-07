'use server'

import { supabaseAdmin } from '@/lib/supabase-server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitWaitlist(
  email: string,
  website?: string
): Promise<{ success: boolean; error?: string; duplicate?: boolean }> {
  const normalizedEmail = email.trim().toLowerCase()
  const honeypot = (website ?? '').trim()

  // Bot trap: silently accept if hidden field was filled.
  if (honeypot.length > 0) {
    return { success: true }
  }

  if (!normalizedEmail || !EMAIL_REGEX.test(normalizedEmail)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  try {
    const { error: dbError } = await supabaseAdmin
      .from('waitlist')
      .insert([{ email: normalizedEmail, source: 'academy' }])

    if (dbError) {
      if (dbError.code === '23505') {
        return { success: true, duplicate: true }
      }

      console.error('Supabase waitlist error:', dbError)
      return { success: false, error: 'Could not save your email. Please try again.' }
    }
  } catch (error) {
    console.error('Unexpected waitlist insert error:', error)
    return { success: false, error: 'Could not save your email. Please try again.' }
  }

  const from = process.env.RESEND_FROM_EMAIL ?? 'hello@clinicofai.com'

  try {
    await resend.emails.send({
      from,
      to: normalizedEmail,
      subject: "You're on the Clinic of AI Academy waitlist",
      text: [
        "You're in.",
        '',
        "We'll let you know as soon as the Academy opens. In the meantime, follow Philippe's work at clinicofai.com.",
        '',
        'Clinic of AI',
      ].join('\n'),
    })
  } catch (error) {
    console.error('Could not send waitlist confirmation email:', error)
  }

  return { success: true }
}
