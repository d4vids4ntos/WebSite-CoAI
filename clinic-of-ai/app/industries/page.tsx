'use client'

import Link from 'next/link'

const industries = [
  {
    id: 'hospitality',
    icon: 'hotel',
    title: 'Hospitality',
    subtitle: 'Where experience is everything.',
    painPoints: [
      'High operational costs from manual booking and guest management',
      'Inconsistent service quality across properties and staff',
      'Underutilized guest data preventing personalization at scale',
      'Revenue leakage from inefficient dynamic pricing',
    ],
    solution:
      'We help hospitality groups deploy AI for demand forecasting, personalized guest communication, and operational optimization — while ensuring the human warmth that defines great hospitality remains central.',
    stat: '23% average revenue uplift',
    statSource: 'McKinsey Hospitality Report, 2024',
    bg: '#fff8f3',
  },
  {
    id: 'real-estate',
    icon: 'apartment',
    title: 'Real Estate',
    subtitle: 'Data-driven decisions for every property.',
    painPoints: [
      'Manual property valuation processes prone to inconsistency',
      'Slow lead qualification and follow-up losing potential buyers',
      'Fragmented market data preventing accurate forecasting',
      'High administrative overhead in lease and contract management',
    ],
    solution:
      'We help real estate firms deploy AI for automated property valuation, intelligent lead scoring, market trend prediction, and document processing — enabling agents and managers to focus on relationships, not paperwork.',
    stat: '28% faster deal closure',
    statSource: 'Deloitte Real Estate AI Report, 2024',
    bg: '#fff5e8',
  },
  {
    id: 'catering',
    icon: 'restaurant',
    title: 'Catering',
    subtitle: 'Precision at scale, flavor at every plate.',
    painPoints: [
      'Food waste from inaccurate demand forecasting',
      'Inconsistent quality when scaling across events and locations',
      'Manual scheduling and logistics creating bottlenecks',
      'Thin margins squeezed further by rising supply costs',
    ],
    solution:
      'We design AI systems for demand forecasting, menu optimization, supply chain intelligence, and workforce scheduling — helping catering operations reduce waste, improve consistency, and protect margins as they grow.',
    stat: '31% reduction in food waste',
    statSource: 'McKinsey Food Service Report, 2024',
    bg: '#fff8f3',
  },
]

export default function IndustriesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="pt-32 pb-20 relative grid-watermark"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-label mb-5">Domain Expertise</p>
            <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8 text-balance">Domain expertise that speaks your language.</h1>
            <p className="font-body text-lg leading-relaxed mb-8" style={{ color: '#2d4a4d' }}>Generic AI consulting fails because every industry has different data structures, regulatory constraints, competitive dynamics, and cultural norms. We have gone deep in the sectors where the gaps between AI potential and organizational reality are widest.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Book Sector Consultation
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
              </Link>
              <Link href="/approach" className="btn-secondary">
                Explore Our Methodology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY CARDS ── */}
      <section className="py-24" style={{ backgroundColor: '#fff5e8' }}>
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className="rounded-2xl p-8 lg:p-10"
                style={{
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#fff8f3',
                  boxShadow: '0 4px 16px rgba(0,18,21,0.04)',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Icon + title */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 flex items-center justify-center rounded-xl shrink-0"
                        style={{ backgroundColor: '#fff5e8', border: '1px solid rgba(161,64,0,0.15)' }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '22px', color: '#a14000' }}>
                          {industry.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-headline font-bold text-xl" style={{ color: '#001215' }}>{industry.title}</h3>
                        <p className="font-body text-body-sm italic" style={{ color: '#a14000' }}>{industry.subtitle}</p>
                      </div>
                    </div>
                    <div
                      className="rounded-xl p-4 mt-4"
                      style={{ backgroundColor: 'rgba(161,64,0,0.06)' }}
                    >
                      <p className="font-label text-xs uppercase font-semibold mb-1" style={{ color: '#a14000', letterSpacing: '0.08em' }}>{industry.stat}</p>
                      <p className="font-body text-body-sm" style={{ color: 'rgba(45,74,77,0.6)' }}>{industry.statSource}</p>
                    </div>
                  </div>

                  {/* Pain points */}
                  <div className="lg:col-span-4">
                    <p className="font-label text-xs uppercase font-semibold mb-4" style={{ color: 'rgba(45,74,77,0.5)', letterSpacing: '0.08em' }}>Common Challenges</p>
                    <ul className="flex flex-col gap-2.5">
                      {industry.painPoints.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="material-symbols-outlined shrink-0 mt-0.5" style={{ fontSize: '16px', color: 'rgba(45,74,77,0.4)' }}>remove</span>
                          <span className="font-body text-body-sm" style={{ color: '#2d4a4d' }}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div className="lg:col-span-5">
                    <p className="font-label text-xs uppercase font-semibold mb-4" style={{ color: '#a14000', letterSpacing: '0.08em' }}>Our Approach</p>
                    <p className="font-body text-body-md leading-relaxed" style={{ color: '#2d4a4d' }}>{industry.solution}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 mt-6 font-body font-semibold text-body-sm transition-colors duration-200 hover:underline"
                      style={{ color: '#a14000' }}
                    >
                      Start a conversation
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-20" style={{ backgroundColor: '#001215' }}>
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-headline font-bold text-3xl lg:text-4xl mb-3" style={{ color: '#fff8f3' }}>
                Ready to go deep in your sector?
              </h2>
              <p className="font-body text-body-md" style={{ color: 'rgba(255,248,243,0.65)' }}>
                Book a sector-specific consultation and see exactly where AI creates value in your industry.
              </p>
            </div>
            <Link href="/contact" className="btn-primary whitespace-nowrap shrink-0">
              Book Sector Consultation
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
