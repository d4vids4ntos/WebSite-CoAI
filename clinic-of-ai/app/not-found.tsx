import Link from 'next/link'
import type { Metadata } from 'next'
import Icon from '@/components/icons/Icon'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center grid-watermark pt-16"
      style={{ backgroundColor: '#fff8f3' }}
    >
      <div className="max-w-narrow mx-auto px-6 text-center py-24">
        <p
          className="font-label text-xs uppercase font-semibold mb-6"
          style={{ color: '#a14000', letterSpacing: '0.2em' }}
        >
          404 — Not Found
        </p>
        <h1
          className="page-title mb-6"
          style={{ color: '#3d4a5c', letterSpacing: '-0.02em' }}
        >
          This path does not exist.
        </h1>
        <p
          className="font-body text-lg leading-relaxed mb-10"
          style={{ color: '#2d4a4d' }}
        >
          Even the best systems have dead ends. Let us help you find the right route.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Return Home
            <Icon name="arrow_forward" style={{ fontSize: '18px' }} />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
