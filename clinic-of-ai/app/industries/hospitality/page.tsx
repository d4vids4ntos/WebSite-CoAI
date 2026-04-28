'use client'

import Link from 'next/link'
import Image from 'next/image'
import SplitText from '@/components/animations/SplitText'
import Icon from '@/components/icons/Icon'

const diagnosis = [
  {
    number: '01',
    title: 'Manual scheduling',
    body: 'Rosters are built by hand each week and patched mid-shift. Operators absorb the cost of every reshuffle.',
  },
  {
    number: '02',
    title: 'Disconnected revenue',
    body: 'Pricing decisions are made without integrated demand signals from booking, channel, and seasonality data.',
  },
  {
    number: '03',
    title: 'Anecdotal guest data',
    body: 'Reviews and feedback live outside the operational systems that could act on them in time to change anything.',
  },
]

const capabilities = [
  {
    icon: 'schedule',
    title: 'Role-aware scheduling',
    body: 'Automated rosters across shifts, venues, and skill mixes — adjusted to live constraints without rewriting the week.',
  },
  {
    icon: 'sell',
    title: 'Dynamic pricing',
    body: 'Demand-driven rate decisions tied to booking pace, channel mix, and external signal — applied with operational guardrails.',
  },
  {
    icon: 'rate_review',
    title: 'Review intelligence',
    body: 'Operational signal extracted from guest feedback at scale, routed to the team that can act on it.',
  },
  {
    icon: 'forum',
    title: 'Guest communication',
    body: 'Context-aware messaging — pre-arrival, in-stay, post-stay — built into the operational stack rather than bolted on.',
  },
]

const evidence = [
  {
    metric: '4 hrs',
    label: 'saved per scheduling cycle',
    note: 'Manual roster generation replaced with role-aware scheduling automation across multiple shifts and venues.',
  },
  {
    metric: '2 weeks',
    label: 'to first deployment',
    note: 'Time from engagement start to a working scheduling or pricing system in front of operators.',
  },
  {
    metric: '1 stack',
    label: 'across the value chain',
    note: 'Scheduling, pricing, reviews, and guest comms running on one operational baseline rather than four disconnected tools.',
  },
]

export default function HospitalityPage() {
  return (
    <>
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ backgroundColor: '#001215' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <Image
            src="/images/industries/hospitality_ai_header_background.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              className="font-label text-xs font-semibold uppercase mb-5"
              style={{ color: '#ff7a32', letterSpacing: '0.15em' }}
            >
              Industry value chain — Hospitality
            </p>
            <div className="overflow-hidden mb-8" style={{ color: '#fff8f3' }}>
              <SplitText
                text="Hospitality at full capacity."
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
            <div
              className="overflow-hidden mb-8"
              style={{ color: 'rgba(255,248,243,0.85)' }}
            >
              <SplitText
                text="Guest experience, scheduling, and revenue running on one operational rhythm — built where your team already works."
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
              <Link
                href="/industries"
                className="inline-flex items-center justify-center gap-2 font-body font-semibold px-6 py-3 rounded-xl border-2 transition-all duration-200"
                style={{
                  borderColor: 'rgba(255,248,243,0.5)',
                  color: '#fff8f3',
                }}
              >
                See all industries
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#fff5e8' }}>
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="section-label mb-4">The diagnosis</p>
            <h2
              className="font-headline font-bold text-3xl lg:text-4xl leading-tight"
              style={{ color: '#001215' }}
            >
              Where hospitality teams lose hours and revenue.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {diagnosis.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 16px rgba(0,18,21,0.04)',
                }}
              >
                <p
                  className="font-label text-xs font-semibold"
                  style={{ color: '#a14000', letterSpacing: '0.15em' }}
                >
                  {item.number} —
                </p>
                <h3
                  className="font-headline font-bold text-xl"
                  style={{ color: '#001215' }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-body text-body-md leading-relaxed"
                  style={{ color: '#2d4a4d' }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#fff8f3' }}>
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12">
            <div className="max-w-2xl text-center">
              <p className="section-label mb-4">What we do</p>
              <h2
                className="font-headline font-bold text-3xl lg:text-4xl leading-tight mb-6"
                style={{ color: '#001215' }}
              >
                One operational rhythm across the property.
              </h2>
              <p
                className="font-body text-body-md leading-relaxed"
                style={{ color: '#2d4a4d' }}
              >
                We start with one high-impact use case — typically scheduling or revenue —
                and expand into a connected operational stack your team owns.
              </p>
            </div>

            <div
              className="w-full max-w-3xl overflow-hidden rounded-2xl"
              style={{ border: '1px solid rgba(200,168,130,0.2)' }}
            >
              <Image
                src="/images/industries/hospitality-ai-supply-chain.png"
                alt="Hospitality AI supply chain — guest experience, revenue management, staffing, and predictive maintenance connected through booking engines, PMS data, IoT sensors, and supply logistics."
                width={2754}
                height={1536}
                className="block w-full h-auto"
                sizes="(min-width: 1024px) 768px, 100vw"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-2xl p-7 flex flex-col items-center text-center gap-4"
                  style={{
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 16px rgba(0,18,21,0.04)',
                  }}
                >
                  <h3
                    className="font-headline font-bold text-lg"
                    style={{ color: '#001215' }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    className="font-body text-body-sm leading-relaxed"
                    style={{ color: '#2d4a4d' }}
                  >
                    {cap.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#fff2e2' }}>
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="section-label mb-4">Operating evidence</p>
            <h2
              className="font-headline font-bold text-3xl lg:text-4xl leading-tight"
              style={{ color: '#001215' }}
            >
              What teams measure within the first weeks.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {evidence.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 16px rgba(0,18,21,0.04)',
                }}
              >
                <p
                  className="font-headline font-bold text-4xl"
                  style={{ color: '#001215' }}
                >
                  {item.metric}
                </p>
                <p
                  className="font-body text-body-sm font-semibold"
                  style={{ color: '#a14000' }}
                >
                  {item.label}
                </p>
                <p
                  className="font-body text-body-md leading-relaxed"
                  style={{ color: '#2d4a4d' }}
                >
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-10"
        style={{
          backgroundColor: '#001215',
          borderTop: '1px solid rgba(255,248,243,0.06)',
        }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="font-body text-body-md"
              style={{ color: 'rgba(255,248,243,0.65)' }}
            >
              20 minutes. No pitch deck. We will tell you in 5 if we can help.
            </p>
            <Link
              href="/contact"
              className="btn-primary whitespace-nowrap shrink-0"
            >
              Book a 20-minute conversation
              <Icon name="arrow_forward" style={{ fontSize: '18px' }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
