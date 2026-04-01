'use server'

import { supabaseAdmin } from '@/lib/supabase-server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitWaitlist(
  email: string
): Promise<{ success: boolean; error?: string; duplicate?: boolean }> {
  // 1 — Validate
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  // 2 — Insert (unique constraint handles duplicates)
  const { error: dbError } = await supabaseAdmin
    .from('waitlist')
    .insert([{ email, source: 'academy' }])

  if (dbError) {
    if (dbError.code === '23505') {
      // Postgres unique violation — already on waitlist
      return { success: true, duplicate: true }
    }
    console.error('Supabase waitlist error:', dbError)
    return { success: false, error: 'Could not save your email. Please try again.' }
  }

  const from = process.env.RESEND_FROM_EMAIL ?? 'hello@clinicofai.com'

  // 3 — Confirmation email
  await resend.emails.send({
    from,
    to: email,
    subject: "You're on the Clinic of AI Academy waitlist",
    text: [
      "You're in.",
      '',
      "We'll let you know as soon as the Academy opens. In the meantime, follow Philippe's work at clinicofai.com.",
      '',
      'Clinic of AI',
    ].join('\n'),
  })

  return { success: true }
}
