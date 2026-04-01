import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Clinic of AI.',
}

export default async function TermsPage() {
  return (
    <section
      className="pt-32 pb-24"
      style={{ backgroundColor: '#fff8f3' }}
    >
      <div className="max-w-narrow mx-auto px-6 lg:px-8">
        <p className="section-label mb-4">Legal</p>
        <h1
          className="font-headline font-bold text-4xl lg:text-5xl mb-8"
          style={{ color: '#001215', letterSpacing: '-0.02em' }}
        >
          Terms of Service
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
              1. Services
            </h2>
            <p>
              Clinic of AI provides AI transformation consulting, workforce upskilling programs, and educational services. These terms govern your use of our website and engagement with our services.
            </p>
          </div>
          <div>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#001215' }}>
              2. Bookings and Cancellations
            </h2>
            <p>
              Session bookings can be cancelled or rescheduled up to 24 hours before the scheduled time. Academy enrollment cancellations are subject to the refund policy communicated at enrollment.
            </p>
          </div>
          <div>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#001215' }}>
              3. Intellectual Property
            </h2>
            <p>
              All content, frameworks, and methodologies provided by Clinic of AI remain the intellectual property of Clinic of AI unless explicitly transferred in writing. Client deliverables are owned by the client upon full payment.
            </p>
          </div>
          <div>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#001215' }}>
              4. Contact
            </h2>
            <p>
              For any questions regarding these terms, contact us at legal@clinicofai.com or via our{' '}
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
