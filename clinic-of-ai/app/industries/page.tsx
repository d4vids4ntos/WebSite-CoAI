'use client'

import Link from 'next/link'

const industries = [
  {
    id: 'hospitality',
    icon: 'hotel',
    title: 'Hospitality and Service',
    subtitle: 'Operations where guest experience and execution meet.',
    painPoints: [
      'Manual staff scheduling and last-minute shift chaos',
      'Review data scattered across booking platforms',
      'Revenue decisions made without integrated demand signals',
      'Reactive maintenance disrupting guest operations',
    ],
    solution:
      'Start with one door-opener product, then expand across the full value chain: scheduling, review intelligence, dynamic pricing, guest communication, and operations support.',
    stat: '95% of AI pilots fail before production',
    statSource: 'MIT NANDA Initiative (2025)',
    bg: '#fff8f3',
  },
  {
    id: 'manufacturing',
    icon: 'precision_manufacturing',
    title: 'Manufacturing',
    subtitle: 'From quality reporting to predictive operations.',
    painPoints: [
      'Quality reporting trapped in paper and spreadsheets',
      'Unplanned downtime from reactive maintenance',
      'Inventory and procurement blind spots',
      'Production plans that break when orders change',
    ],
    solution:
      'We embed AI where operations run every day: quality automation, predictive maintenance, inventory intelligence, and production planning that updates with real constraints.',
    stat: '41% of cyberattacks hit manufacturing',
    statSource: 'Industry reports, H1 2024',
    bg: '#fff5e8',
  },
  {
    id: 'real-estate',
    icon: 'apartment',
    title: 'Real Estate',
    subtitle: 'Speed to lead, transaction control, client retention.',
    painPoints: [
      'Leads lost outside business hours',
      'Manual contract and document tracking overload',
      'Market intelligence fragmented across portals',
      'No lifecycle follow-up after closing',
    ],
    solution:
      'Automated lead response, transaction document workflows, market intelligence dashboards, and client lifecycle management designed for multilingual European operations.',
    stat: 'Speed to lead wins deals',
    statSource: 'Core market behavior across agencies',
    bg: '#fff8f3',
  },
  {
    id: 'agriculture',
    icon: 'agriculture',
    title: 'Agriculture',
    subtitle: 'Practical systems for planning, compliance, and yield.',
    painPoints: [
      'CAP subsidy and compliance reporting is manual and risky',
      'Crop planning decisions disconnected from live data',
      'Equipment scheduling and maintenance managed by memory',
      'Irrigation schedules not aligned with real field conditions',
    ],
    solution:
      'We connect field data, weather, and operations into practical workflows: subsidy reporting, crop planning, equipment scheduling, and water intelligence for mid-sized farms.',
    stat: '20-30% water savings potential',
    statSource: 'Smart irrigation benchmarks',
    bg: '#fff5e8',
  },
]

export default function IndustriesPage() {
  return (
    <>
      <section
        className="pt-32 pb-20 relative grid-watermark"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-label mb-5">Industry Value Chains</p>
            <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8 text-balance">Industry-specific delivery for teams that need results, not demos.</h1>
            <p className="font-body text-lg leading-relaxed mb-8" style={{ color: '#2d4a4d' }}>Most vendors sell one disconnected tool. Clinic of AI works across your operational value chain, starting with one high-impact use case and expanding into connected systems your team can run.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Book a 20-minute conversation
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
              </Link>
              <Link href="/approach" className="btn-secondary">
                See the FDE model
              </Link>
            </div>
          </div>
        </div>
      </section>

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

                  <div className="lg:col-span-5">
                    <p className="font-label text-xs uppercase font-semibold mb-4" style={{ color: '#a14000', letterSpacing: '0.08em' }}>How We Work</p>
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

      <section className="py-20" style={{ backgroundColor: '#001215' }}>
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-headline font-bold text-3xl lg:text-4xl mb-3" style={{ color: '#fff8f3' }}>
                One trusted partner across your value chain.
              </h2>
              <p className="font-body text-body-md" style={{ color: 'rgba(255,248,243,0.65)' }}>
                Start with one product. See the results. Then decide how far you want to go.
              </p>
            </div>
            <Link href="/contact" className="btn-primary whitespace-nowrap shrink-0">
              Book a 20-minute conversation
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}