import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Clinic of AI.',
}

export default async function PrivacyPage() {
  return (
    <section
      className="pt-32 pb-24"
      style={{ backgroundColor: '#fff8f3' }}
    >
      <div className="max-w-narrow mx-auto px-6 lg:px-8">
        <p className="section-label mb-4">Legal</p>
        <h1
          className="page-title mb-8"
          style={{ color: '#001215', letterSpacing: '-0.02em' }}
        >
          Privacy Policy
        </h1>
        <p
          className="font-body text-body-sm mb-10"
          style={{ color: 'rgba(45,74,77,0.5)' }}
        >
          Last updated: March 2025
        </p>

        <div className="flex flex-col gap-8 font-body text-body-md leading-relaxed" style={{ color: '#2d4a4d' }}>
          <div>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#001215' }}>
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly, including name, email address, and organization name when you book a session or join our waitlist. We do not sell your data to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#001215' }}>
              2. How We Use Your Information
            </h2>
            <p>
              Information is used solely to deliver our services, send relevant communications, and improve our programs. We will never use your data for purposes you have not consented to.
            </p>
          </div>
          <div>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#001215' }}>
              3. Your Rights
            </h2>
            <p>
              Under GDPR and applicable data protection law, you have the right to access, correct, or delete your personal data at any time. Contact us at privacy@clinicofai.com to exercise these rights.
            </p>
          </div>
          <div>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#001215' }}>
              4. Contact
            </h2>
            <p>
              For any privacy-related questions, contact us at privacy@clinicofai.com or via our{' '}
              <Link href="/contact" className="underline" style={{ color: '#a14000' }}>
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
