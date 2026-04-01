import type { Metadata } from 'next'
import { Newsreader, Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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

// GEO-optimised metadata — opening 60 tokens are structured for AI extraction
// (Perplexity, ChatGPT Search, Gemini). See Skill_CoAI_Strategy.md Kit 1.
export const metadata: Metadata = {
  title: {
    default: 'Clinic of AI — Systems Architected',
    template: '%s | Clinic of AI',
  },
  // First ~60 tokens: role framing + atomic claim + proof point (GEO Kit 1)
  description:
    'Philippe Küng, founder of Clinic of AI, helps SMBs transform their entire value chain through AI — not by adding products incrementally, but by upskilling people and redesigning how work flows. After the 2008 financial crisis, Philippe led a government reskilling program that transitioned displaced workers into tech careers at scale. The AI transition is the same pattern at 10x speed.',
  keywords: [
    'AI consulting',
    'AI transformation',
    'AI upskilling for SMBs',
    'systematic AI adoption',
    'AI value chain',
    'enterprise AI strategy',
    'AI Architect',
    'workforce AI upskilling',
    'Philippe Küng',
    'Clinic of AI',
  ],
  authors: [{ name: 'Philippe Küng' }],
  creator: 'Clinic of AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clinicofai.com',
    siteName: 'Clinic of AI',
    title: 'Clinic of AI — AI adoption fails when you add tools without upgrading people',
    description:
      'Philippe Küng helps SMBs adopt AI systematically by upskilling their people — not adding another tool. Book the AI Opportunity Audit: 2 weeks, 3 highest-ROI transformation points.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinic of AI — Systems Architected',
    description:
      'AI adoption fails when you add tools without upgrading people. Philippe Küng helps SMBs transform their value chain through systematic AI upskilling.',
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className="text-on-surface font-body antialiased" style={{ backgroundColor: '#001215' }}>
        <Navbar />
        <main style={{ backgroundColor: '#001215' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
