'use client'

import Link from 'next/link'
import SplitText from '@/components/animations/SplitText'
import Icon from '@/components/icons/Icon'
import Image from 'next/image'

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
    image: '/images/industries/restaurant-ai-supply-chain.png',
    imageAlt: 'Restaurant AI supply chain map with optimization and operations modules.',
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
    image: '/images/industries/manufacturing-ai-supply-chain.png',
    imageAlt: 'Manufacturing AI supply chain map linking production, quality, and logistics systems.',
  },
  {
    id: 'real-estate',
    icon: 'apartment',
    title: 'Real Estate',
    subtitle: 'Portfolio performance, asset risk, and market intelligence.',
    painPoints: [
      'Asset and portfolio decisions rely on fragmented data sources',
      'Maintenance, valuation, and market signals are not operationally connected',
    ],
    solution:
      'Smart portfolio management, predictive maintenance, and transaction intelligence integrated into one operational value chain.',
    bg: '#fff8f3',
    color: '#1a3a5c',
    image: '/images/industries/real-estate-ai-supply-chain.png',
    imageAlt: 'Real Estate AI supply chain map linking valuation, portfolio, maintenance, and market data.',
  },
  {
    id: 'healthcare',
    icon: 'medical_services',
    title: 'Healthcare',
    subtitle: 'Care quality, diagnostic support, and operational continuity.',
    painPoints: [
      'Clinical data fragmented across disconnected systems',
      'Resource and treatment decisions made without integrated AI support',
    ],
    solution:
      'Outcome prediction, diagnostic assistance, and connected medical workflows integrated across care teams and operational systems.',
    bg: '#fff8f3',
    color: '#2f5d7c',
    image: '/images/industries/healthcare-ai-supply-chain.png',
    imageAlt: 'Healthcare AI supply chain map connecting clinical intelligence and healthcare data systems.',
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
    image: '/images/industries/agriculture-ai-supply-chain.png',
    imageAlt: 'Agriculture AI supply chain map connecting field intelligence and logistics systems.',
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
                See the Solutions
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
                id={industry.id}
                className="rounded-2xl p-8 lg:p-10 scroll-mt-24"
                style={{
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#fff8f3',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                }}
              >
                <div className="mb-6">
                  <h3 className="font-headline font-bold text-xl" style={{ color: '#000000' }}>{industry.title}</h3>
                  <p className="font-body text-body-sm" style={{ color: '#a14000' }}>{industry.subtitle}</p>
                </div>

                <div
                  className="mb-8 overflow-hidden rounded-2xl"
                  style={{ border: '1px solid rgba(200,168,130,0.2)' }}
                >
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    width={1400}
                    height={768}
                    className="block w-full h-auto"
                    sizes="(min-width: 1024px) 1120px, 100vw"
                    priority={index === 0}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="font-label text-xs uppercase font-semibold mb-3" style={{ color: 'rgba(0,0,0,0.5)', letterSpacing: '0.08em' }}>Challenges</p>
                    <ul className="flex flex-col gap-2.5">
                      {industry.painPoints.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <Icon name="remove" className="shrink-0 mt-0.5" style={{ fontSize: '16px', color: 'rgba(0,0,0,0.4)' }} />
                          <span className="font-body text-body-sm" style={{ color: '#000000' }}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-label text-xs uppercase font-semibold mb-3" style={{ color: '#a14000', letterSpacing: '0.08em' }}>What We Do</p>
                    <p className="font-body text-body-md leading-relaxed" style={{ color: '#000000' }}>{industry.solution}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 mt-4 font-body font-semibold text-body-sm transition-colors duration-200 hover:underline"
                      style={{ color: '#a14000' }}
                    >
                      Book a 20-minute conversation
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
        style={{ backgroundColor: '#FFF59D', borderTop: '1px solid rgba(0,0,0,0.06)' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-body-md" style={{ color: 'rgba(0,0,0,0.75)' }}>
              One trusted partner across your value chain. Start with one product.
            </p>
            <Link href="/contact" className="btn-primary whitespace-nowrap shrink-0">
              Book a 20-minute conversation
              <Icon name="arrow_forward" style={{ fontSize: '18px' }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
