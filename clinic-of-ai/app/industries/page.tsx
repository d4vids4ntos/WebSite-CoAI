'use client'

import Link from 'next/link'
import SplitText from '@/components/animations/SplitText'
import Icon from '@/components/icons/Icon'

const industries = [
  {
    id: 'hospitality',
    icon: 'hotel',
    title: 'Hospitality and Service',
    subtitle: 'Guest experience meets operational execution.',
    painPoints: [
      'Manual scheduling and last-minute shift chaos',
      'Revenue decisions without integrated demand signals',
    ],
    solution:
      'Scheduling, review intelligence, dynamic pricing, and guest communication — connected across your value chain.',
    bg: '#fff8f3',
    color: '#8a6d3b',
  },
  {
    id: 'manufacturing',
    icon: 'precision_manufacturing',
    title: 'Manufacturing',
    subtitle: 'From quality reporting to predictive operations.',
    painPoints: [
      'Quality reporting trapped in paper and spreadsheets',
      'Unplanned downtime from reactive maintenance',
    ],
    solution:
      'Quality automation, predictive maintenance, and production planning that updates with real constraints.',
    bg: '#fff5e8',
    color: '#4a5568',
  },
  {
    id: 'real-estate',
    icon: 'apartment',
    title: 'Real Estate',
    subtitle: 'Speed to lead, transaction control, retention.',
    painPoints: [
      'Leads lost outside business hours',
      'Market intelligence fragmented across portals',
    ],
    solution:
      'Automated lead response, document workflows, and client lifecycle management for multilingual European operations.',
    bg: '#fff8f3',
    color: '#1a3a5c',
  },
  {
    id: 'agriculture',
    icon: 'agriculture',
    title: 'Agriculture',
    subtitle: 'Planning, compliance, and yield.',
    painPoints: [
      'Subsidy and compliance reporting is manual and risky',
      'Crop planning disconnected from live field data',
    ],
    solution:
      'Field data, weather, and operations connected into practical workflows: subsidy reporting, crop planning, and water intelligence.',
    bg: '#fff5e8',
    color: '#2d6a4f',
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
            <div className="overflow-hidden mb-8">
              <SplitText
                text="Industry-specific delivery for teams that need results, not demos."
                tag="h1"
                splitType="chars"
                delay={20}
                duration={1.1}
                ease="expo.out"
                from={{ opacity: 0, y: 80 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                textAlign="left"
                className="page-title"
              />
            </div>
            <div className="overflow-hidden mb-8">
              <SplitText
                text="Most vendors sell one disconnected tool. Clinic of AI works across your operational value chain, starting with one high-impact use case and expanding into connected systems your team can run."
                tag="p"
                splitType="lines"
                delay={80}
                duration={0.8}
                ease="power2.out"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                textAlign="left"
                className="font-body text-lg leading-relaxed"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Book a 20-minute conversation
                <Icon name="arrow_forward" style={{ fontSize: '18px' }} />
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
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl shrink-0"
                    style={{ backgroundColor: '#fff5e8', border: '1px solid rgba(161,64,0,0.15)' }}
                  >
                    <Icon name={industry.icon} style={{ fontSize: '22px', color: industry.color }} />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-xl" style={{ color: '#001215' }}>{industry.title}</h3>
                    <p className="font-body text-body-sm italic" style={{ color: '#a14000' }}>{industry.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="font-label text-xs uppercase font-semibold mb-3" style={{ color: 'rgba(45,74,77,0.5)', letterSpacing: '0.08em' }}>Challenges</p>
                    <ul className="flex flex-col gap-2.5">
                      {industry.painPoints.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <Icon name="remove" className="shrink-0 mt-0.5" style={{ fontSize: '16px', color: 'rgba(45,74,77,0.4)' }} />
                          <span className="font-body text-body-sm" style={{ color: '#2d4a4d' }}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-label text-xs uppercase font-semibold mb-3" style={{ color: '#a14000', letterSpacing: '0.08em' }}>What We Do</p>
                    <p className="font-body text-body-md leading-relaxed" style={{ color: '#2d4a4d' }}>{industry.solution}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 mt-4 font-body font-semibold text-body-sm transition-colors duration-200 hover:underline"
                      style={{ color: '#a14000' }}
                    >
                      Start a conversation
                      <Icon name="arrow_forward" style={{ fontSize: '16px' }} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-10"
        style={{ backgroundColor: '#001215', borderTop: '1px solid rgba(255,248,243,0.06)' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-body-md" style={{ color: 'rgba(255,248,243,0.65)' }}>
              One trusted partner across your value chain. Start with one product.
            </p>
            <Link href="/contact" className="btn-primary whitespace-nowrap shrink-0">
              Book a conversation
              <Icon name="arrow_forward" style={{ fontSize: '18px' }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
