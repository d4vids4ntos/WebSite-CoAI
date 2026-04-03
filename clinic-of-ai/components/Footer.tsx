'use client'

import Link from 'next/link'

const footerLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/contact', label: 'Contact' },
  { href: '/academy', label: 'Executive Cohort' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#001215', color: '#fff8f3' }}>
      {/* Main footer */}
      <div className="max-w-content mx-auto px-6 lg:px-8 py-14">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* Logo block */}
          <div className="flex flex-col items-center lg:items-start gap-2">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 flex items-center justify-center rounded-lg"
                style={{ backgroundColor: 'rgba(255,248,243,0.1)' }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ color: '#fff8f3', fontSize: '18px' }}
                >
                  neurology
                </span>
              </div>
              <span
                className="font-headline font-bold italic text-xl"
                style={{ color: '#fff8f3' }}
              >
                Clinic of AI
              </span>
            </div>
            <p
              className="font-label text-xs tracking-widest uppercase"
              style={{ color: 'rgba(255,248,243,0.4)', letterSpacing: '0.2em' }}
            >
              Forward Deployed AI Engineers
            </p>
          </div>

          {/* Center links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body font-medium text-body-sm transition-colors duration-200 hover:text-white"
                    style={{ color: 'rgba(255,248,243,0.6)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Terminal"
              className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200"
              style={{ backgroundColor: 'rgba(255,248,243,0.08)' }}
            >
              <span
                className="material-symbols-outlined text-sm"
                style={{ color: 'rgba(255,248,243,0.7)', fontSize: '18px' }}
              >
                terminal
              </span>
            </a>
            <a
              href="#"
              aria-label="Science"
              className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200"
              style={{ backgroundColor: 'rgba(255,248,243,0.08)' }}
            >
              <span
                className="material-symbols-outlined text-sm"
                style={{ color: 'rgba(255,248,243,0.7)', fontSize: '18px' }}
              >
                science
              </span>
            </a>
            <a
              href="#"
              aria-label="Architecture"
              className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200"
              style={{ backgroundColor: 'rgba(255,248,243,0.08)' }}
            >
              <span
                className="material-symbols-outlined text-sm"
                style={{ color: 'rgba(255,248,243,0.7)', fontSize: '18px' }}
              >
                architecture
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,248,243,0.08)' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="font-body text-body-sm"
            style={{ color: 'rgba(255,248,243,0.4)' }}
          >
            &copy; {new Date().getFullYear()} Clinic of AI. All rights reserved.
          </p>
          <p
            className="font-label text-xs tracking-widest uppercase"
            style={{ color: 'rgba(255,248,243,0.25)', letterSpacing: '0.15em' }}
          >
            20 minutes. No pitch deck.
          </p>
        </div>
      </div>
    </footer>
  )
}
