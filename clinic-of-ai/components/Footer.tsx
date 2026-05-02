'use client'

import Link from 'next/link'
import Image from 'next/image'

const footerLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/cookies', label: 'Cookies' },
  { href: '/terms', label: 'Terms' },
  { href: '/contact', label: 'Contact' },
  { href: '/academy', label: 'Executive Cohort' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#fff8f3', color: '#3d4a5c' }}>
      {/* Main footer */}
      <div className="max-w-content mx-auto px-6 lg:px-8 py-14">
        <div className="flex flex-col items-center gap-8">
          {/* Logo block */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Clinic of AI logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span
                className="font-headline font-bold text-xl"
                style={{ color: '#3d4a5c' }}
              >
                Clinic of AI
              </span>
            </div>
            <p
              className="font-label text-xs tracking-widest uppercase"
              style={{ color: '#a14000', letterSpacing: '0.2em' }}
            >
              Forward Deployed AI Engineers
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body font-medium text-body-sm transition-colors duration-200 hover:text-secondary"
                    style={{ color: '#2d4a4d' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(61,74,92,0.08)' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="font-body text-body-sm"
            style={{ color: '#2d4a4d' }}
          >
            &copy; {new Date().getFullYear()} Clinic of AI. All rights reserved.
          </p>
          <p
            className="font-label text-xs tracking-widest uppercase"
            style={{ color: '#a14000', letterSpacing: '0.15em' }}
          >
            20 minutes. No pitch deck.
          </p>
        </div>
      </div>
    </footer>
  )
}
