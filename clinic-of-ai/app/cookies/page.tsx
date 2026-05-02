import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy for Clinic of AI.',
}

export default function CookiesPage() {
  return (
    <section className="pt-32 pb-24" style={{ backgroundColor: '#fff8f3' }}>
      <div className="max-w-narrow mx-auto px-6 lg:px-8">
        <p className="section-label mb-4">Legal</p>
        <h1 className="page-title mb-8" style={{ color: '#3d4a5c', letterSpacing: '-0.02em' }}>
          Cookie Policy
        </h1>
        <p className="font-body text-body-sm mb-10" style={{ color: 'rgba(45,74,77,0.5)' }}>
          Last updated: April 2026
        </p>

        <div className="flex flex-col gap-8 font-body text-body-md leading-relaxed" style={{ color: '#2d4a4d' }}>
          <div>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#3d4a5c' }}>
              1. What we use cookies for
            </h2>
            <p>
              We use essential cookies for website functionality and optional analytics cookies to
              understand user journeys, conversion rates, and content performance.
            </p>
          </div>

          <div>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#3d4a5c' }}>
              2. Analytics cookies
            </h2>
            <p>
              Analytics cookies are only enabled after you give consent in our cookie banner. You can
              reject analytics cookies and still use the website normally.
            </p>
          </div>

          <div>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#3d4a5c' }}>
              3. Managing your preferences
            </h2>
            <p>
              You can clear browser storage to reset cookie consent at any time. For questions, contact us
              via the{' '}
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

