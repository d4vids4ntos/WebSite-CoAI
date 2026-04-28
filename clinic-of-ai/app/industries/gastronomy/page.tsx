'use client'

import Link from 'next/link'
import Image from 'next/image'
import SplitText from '@/components/animations/SplitText'
import Icon from '@/components/icons/Icon'

const diagnosis = [
  {
    number: '01',
    title: 'Forecasting by feel',
    body: 'Order quantities are set by experience rather than signal. Last week is the only data, and it is not enough.',
  },
  {
    number: '02',
    title: 'Compounding waste',
    body: 'Stockouts and over-ordering both eat margin, often in the same week. Neither shows up clearly until month-end.',
  },
  {
    number: '03',
    title: 'Service measured anecdotally',
    body: 'Customer flow, ticket size, and quality of service are tracked through gut feel rather than the data already in the till.',
  },
]

const capabilities = [
  {
    icon: 'insights',
    title: 'Demand forecasting',
    body: 'Daily, weekly, and seasonal patterns isolated from noise — built on the point-of-sale and inventory data your team already records.',
  },
  {
    icon: 'inventory_2',
    title: 'Inventory and waste reduction',
    body: 'Order quantities tied to forecast rather than habit. Waste tracked at the item level, not the invoice level.',
  },
  {
    icon: 'restaurant_menu',
    title: 'Menu and pricing intelligence',
    body: 'Data-backed iterations on the items, prices, and combinations that actually move margin and ticket size.',
  },
  {
    icon: 'storefront',
    title: 'Service analytics',
    body: 'Customer flow, throughput, and service quality measured on real signal rather than surveys after the fact.',
  },
]

const evidence = [
  {
    metric: '−15 to −25%',
    label: 'food waste range',
    note: 'Forecast-driven ordering applied to a small-format venue, measured at the item level after one operating cycle.',
  },
  {
    metric: '€190',
    label: 'starting solution price',
    note: 'Most engagements start with one product solving one specific operational pain point — not a full transformation programme.',
  },
  {
    metric: '2 weeks',
    label: 'to first deployment',
    note: 'Time from engagement start to a working forecasting or inventory tool in front of operators.',
  },
]

export default function GastronomyPage() {
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
            src="/images/industries/gastronomy_ai_header_background.png"
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
              Industry value chain — Gastronomy and small retail
            </p>
            <div className="overflow-hidden mb-8" style={{ color: '#fff8f3' }}>
              <SplitText
                text="Gastronomy and small retail, measured."
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
                text="Inventory, demand, and service quality on one operational baseline — built where your team already works the floor."
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
              Where small operators lose margin one week at a time.
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
                One baseline across forecasting, inventory, and service.
              </h2>
              <p
                className="font-body text-body-md leading-relaxed"
                style={{ color: '#2d4a4d' }}
              >
                Most small operators do not need a full AI department. They need one
                solution that works in the operational reality of the venue, then a second,
                then a third — connected, not stacked.
              </p>
            </div>

            <div
              className="w-full max-w-3xl overflow-hidden rounded-2xl"
              style={{ border: '1px solid rgba(200,168,130,0.2)' }}
            >
              <Image
                src="/images/industries/restaurant-ai-supply-chain.png"
                alt="Gastronomy and small retail operational value chain — forecasting, inventory, menu intelligence, and service analytics connected into one view."
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
              What small operators measure within the first weeks.
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
