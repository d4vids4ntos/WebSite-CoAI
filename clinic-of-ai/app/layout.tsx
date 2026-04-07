import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Newsreader, Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'
import CookieConsentBanner from '@/components/CookieConsentBanner'
import { SITE_DESCRIPTION, SITE_NAME, getSiteUrl } from '@/lib/site'

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} - Systems Architected`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'AI consulting',
    'AI transformation',
    'AI upskilling for SMBs',
    'systematic AI adoption',
    'AI value chain',
    'enterprise AI strategy',
    'AI Architect',
    'workforce AI upskilling',
    'Philippe Kung',
    'Clinic of AI',
  ],
  authors: [{ name: 'Philippe Kung' }],
  creator: SITE_NAME,
  category: 'AI Consulting',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: SITE_NAME,
    title: 'Clinic of AI - AI adoption fails when you add tools without upgrading people',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Systems Architected`,
    description: SITE_DESCRIPTION,
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: SITE_NAME,
      url: siteUrl,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#service`,
      name: SITE_NAME,
      url: siteUrl,
      areaServed: 'Europe',
      description: SITE_DESCRIPTION,
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${manrope.variable} ${spaceGrotesk.variable}`}
    >
      <head />
      <body className="text-on-surface font-body antialiased" style={{ backgroundColor: '#001215' }}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Navbar />
        <main id="main-content" style={{ backgroundColor: '#001215' }}>
          {children}
        </main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  )
}
