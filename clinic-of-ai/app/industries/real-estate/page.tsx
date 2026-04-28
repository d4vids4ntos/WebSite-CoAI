'use client'

import Link from 'next/link'
import Image from 'next/image'
import SplitText from '@/components/animations/SplitText'
import Icon from '@/components/icons/Icon'

const diagnosis = [
  {
    number: '01',
    title: 'Fragmented data',
    body: 'Portfolio decisions rely on data scattered across CRMs, asset management systems, and finance models that do not talk to each other.',
  },
  {
    number: '02',
    title: 'Reactive maintenance',
    body: 'Asset condition is observed after damage compounds. Capex is allocated to recovery rather than prevention.',
  },
  {
    number: '03',
    title: 'Disconnected market signals',
    body: 'Valuation and transaction work moves slower than the market it depends on. Internal evidence is not integrated with external signal.',
  },
]

const capabilities = [
  {
    icon: 'apartment',
    title: 'Smart portfolio operations',
    body: 'A single operational view across assets, leases, and capex — built on the data sources your team already maintains.',
  },
  {
    icon: 'build',
    title: 'Predictive maintenance',
    body: 'Sensor and inspection data interpreted before issues escalate, with intervention windows tied to operational risk.',
  },
  {
    icon: 'insights',
    title: 'Transaction intelligence',
    body: 'Market signals integrated with internal data so acquisition and disposal decisions are faster and defensible.',
  },
  {
    icon: 'analytics',
    title: 'Valuation modelling',
    body: 'Repeatable, auditable models that replace spreadsheet-driven cycles with one shared method across the team.',
  },
]

const evidence = [
  {
    metric: '30%',
    label: 'fewer emergency repairs',
    note: 'Predictive maintenance scheduling introduced before peak load windows on a mid-size portfolio.',
  },
  {
    metric: '2 weeks',
    label: 'to first integrated view',
    note: 'Time from engagement start to a working portfolio dashboard built on existing data sources.',
  },
  {
    metric: '1 partner',
    label: 'across the value chain',
    note: 'Acquisition, operations, and disposal connected, rather than three disconnected vendors.',
  },
]

export default function RealEstatePage() {
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
            src="/images/industries/real_estate_ai_header_background.png"
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
              Industry value chain — Real estate
            </p>
            <div className="overflow-hidden mb-8" style={{ color: '#fff8f3' }}>
              <SplitText
                text="Real estate, diagnosed."
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
                text="Asset performance, portfolio risk, and market intelligence connected into one operational view your team runs."
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
              Where real estate teams lose time and capital.
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
                One operational view across the portfolio.
              </h2>
              <p
                className="font-body text-body-md leading-relaxed"
                style={{ color: '#2d4a4d' }}
              >
                We start with a single high-impact use case — typically maintenance or
                portfolio reporting — and expand into a connected operational stack your
                team owns.
              </p>
            </div>

            <div
              className="w-full max-w-3xl overflow-hidden rounded-2xl"
              style={{ border: '1px solid rgba(200,168,130,0.2)' }}
            >
              <Image
                src="/images/industries/real-estate-ai-supply-chain.png"
                alt="Real estate operational value chain — valuation, portfolio operations, maintenance, and market data connected into one view."
                width={1400}
                height={768}
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
              What teams measure within the first months.
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
