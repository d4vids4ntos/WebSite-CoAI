'use client'

import Link from 'next/link'
import SplitText from '@/components/animations/SplitText'
import Icon from '@/components/icons/Icon'

const capabilities = [
  {
    number: '01',
    label: 'Technical Breadth',
    title: 'The full technology landscape — not just the latest model.',
    description:
      'From legacy machine learning and data engineering to applied generative AI, autonomous agents, and on-premise deployment. A Forward Deployed AI Engineer selects the right solution for the problem, not the trendy one.',
    details: [
      'Industrial ML and predictive maintenance',
      'Generative AI application development',
      'Multi-agent architectures',
      'Data engineering and pipeline design',
      'On-premise and cloud deployment',
    ],
    icon: 'precision_manufacturing',
  },
  {
    number: '02',
    label: 'Embedded Delivery',
    title: 'Built side by side with the people who use it.',
    description:
      'Forward Deployed AI Engineers learn the workflow from the inside — the real one, not the org chart version. Solutions are built close to the people who use them, which is why they get adopted instead of abandoned.',
    details: [
      'Workflow observation from inside operations',
      'Solutions built with frontline teams',
      'Integration with existing tools and routines',
      'Immediate adoption, not post-handoff training',
      '67% higher success rate vs. internal builds',
    ],
    icon: 'groups',
  },
  {
    number: '03',
    label: 'Continuity Architecture',
    title: 'The solution outlives the engagement.',
    description:
      'We do not hand over a dashboard and disappear. We transfer capability, governance, and operating rhythm so your team can run, evolve, and own the system independently. No permanent dependency. No recurring vendor lock-in.',
    details: [
      'Role-based capability transfer',
      'Internal champions and owner training',
      'Governance and escalation structure',
      'Independence roadmap',
      'Post-engagement optimization cadence',
    ],
    icon: 'verified',
  },
]

const comparisonRows = [
  { traditional: 'Platform-first recommendation', clinic: 'Workflow-first implementation' },
  { traditional: 'Pilot delivery and handoff', clinic: 'Side-by-side deployment' },
  { traditional: 'Generic enablement sessions', clinic: 'Role-based capability transfer' },
  { traditional: 'Short-term output focus', clinic: 'Long-term continuity architecture' },
  { traditional: 'Vendor dependency over time', clinic: 'Team ownership over time' },
  { traditional: 'Deck-driven theatre', clinic: 'Operational improvement' },
]

export default function ApproachPage() {
  return (
    <>
      <section
        className="pt-32 pb-24 relative grid-watermark"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-label mb-5">Forward Deployed AI Engineers</p>
            <div className="overflow-hidden mb-8">
              <SplitText
                text="Why 95% of AI Projects Fail — and What Actually Fixes It"
                tag="h1"
                splitType="words"
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
            <div className="overflow-hidden">
              <SplitText
                text="The gap between AI capability and business results is not a technology problem. It is a dynamics problem. Clinic of AI deploys Forward Deployed AI Engineers who work side-by-side with mid-market businesses to make AI deliver real ROI."
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
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{ backgroundColor: '#fff5e8' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-4">The Model</p>
            <div className="overflow-hidden">
              <SplitText
                text="What a Forward Deployed AI Engineer Does"
                tag="h2"
                splitType="words"
                delay={50}
                duration={0.9}
                ease="power3.out"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                textAlign="center"
                className="font-headline font-bold text-3xl lg:text-4xl"
              />
            </div>
            <p
              className="font-body text-body-md leading-relaxed mt-4 max-w-2xl mx-auto"
              style={{ color: '#000000' }}
            >
              A Forward Deployed AI Engineer is not a consultant who delivers slide decks.
              They are an operator who sits inside your business and makes AI work.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.number}
                className="rounded-2xl overflow-hidden bg-[#FFF59D] hover:bg-white transition-colors duration-300"
                style={{
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                }}
              >
                <div className="p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-3 flex items-start gap-5">
                      <div
                        className="shrink-0 w-16 h-16 flex items-center justify-center rounded-xl font-label font-bold text-xl"
                        style={{
                          border: '2px solid #a14000',
                          color: '#a14000',
                        }}
                      >
                        {cap.number}
                      </div>
                      <div>
                        <p
                          className="font-body font-semibold text-xs uppercase"
                          style={{ color: '#a14000', letterSpacing: '0.15em' }}
                        >
                          {cap.label}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-4">
                      <h3
                        className="font-headline font-bold text-2xl"
                        style={{ color: '#000000' }}
                      >
                        {cap.title}
                      </h3>
                      <p
                        className="font-body text-body-md leading-relaxed"
                        style={{ color: '#000000' }}
                      >
                        {cap.description}
                      </p>
                    </div>

                    <div className="lg:col-span-4">
                      <ul className="flex flex-col gap-2.5">
                        {cap.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <Icon
                              name="arrow_right"
                              className="shrink-0 mt-0.5"
                              style={{ fontSize: '16px', color: '#a14000' }}
                            />
                            <span
                              className="font-body text-body-sm"
                              style={{ color: '#000000' }}
                            >
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <div>
                <p className="section-label mb-4">Why This Model</p>
                <div className="overflow-hidden">
                  <SplitText
                    text="You Don't Need an AI Team. You Need One Trusted Partner."
                    tag="h2"
                    splitType="words"
                    delay={50}
                    duration={0.9}
                    ease="power3.out"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    textAlign="left"
                    className="font-headline font-bold text-3xl lg:text-4xl leading-tight"
                  />
                </div>
              </div>
              <p
                className="font-body text-body-md leading-relaxed"
                style={{ color: '#000000' }}
              >
                80% of businesses outside the enterprise bubble will never hire an in-house
                AI department. They shouldn&rsquo;t have to. But buying disconnected tools from
                different vendors is how companies end up with systems that don&rsquo;t communicate,
                data that doesn&rsquo;t flow, and a bigger operational mess than they started with.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Start with one product that solves one specific pain point (from €190)',
                  'See the results in your operation within 2 weeks',
                  'Expand across your value chain through subscription-based solutions',
                  'Every solution connects to the others — no duct tape, no disconnected tools',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon
                      name="arrow_forward"
                      className="shrink-0 mt-0.5"
                      style={{ fontSize: '16px', color: '#a14000' }}
                    />
                    <span
                      className="font-body text-body-sm"
                      style={{ color: '#000000' }}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="research-note">
                <p
                  className="font-label text-xs uppercase mb-3"
                  style={{ color: '#a14000', letterSpacing: '0.1em' }}
                >
                  Data Anchor
                </p>
                <p
                  className="font-body text-body-md leading-relaxed"
                  style={{ color: '#000000' }}
                >
                  &ldquo;95% of generative AI pilots at companies fail before reaching
                  production.&rdquo;
                </p>
                <p
                  className="font-body text-body-sm mt-3"
                  style={{ color: '#000000' }}
                >
                  MIT NANDA Initiative (2025)
                </p>
              </div>

              <div className="research-note">
                <p
                  className="font-label text-xs uppercase mb-3"
                  style={{ color: '#a14000', letterSpacing: '0.1em' }}
                >
                  Data Anchor
                </p>
                <p
                  className="font-body text-body-md leading-relaxed"
                  style={{ color: '#000000' }}
                >
                  &ldquo;42% of companies have abandoned the majority of their AI initiatives,
                  up from 17%.&rdquo;
                </p>
                <p
                  className="font-body text-body-sm mt-3"
                  style={{ color: '#000000' }}
                >
                  S&amp;P Global Market Intelligence (2025)
                </p>
              </div>

              <div className="research-note">
                <p
                  className="font-label text-xs uppercase mb-3"
                  style={{ color: '#a14000', letterSpacing: '0.1em' }}
                >
                  Data Anchor
                </p>
                <p
                  className="font-body text-body-md leading-relaxed"
                  style={{ color: '#000000' }}
                >
                  &ldquo;Enterprise-wide AI initiatives achieve only 5.9% ROI despite requiring
                  10% capital investment.&rdquo;
                </p>
                <p
                  className="font-body text-body-sm mt-3"
                  style={{ color: '#000000' }}
                >
                  IBM Institute for Business Value (2025)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{ backgroundColor: '#fff2e2' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-4">The Difference</p>
            <div className="overflow-hidden">
              <SplitText
                text="Traditional consulting vs. Clinic of AI"
                tag="h2"
                splitType="words"
                delay={50}
                duration={0.9}
                ease="power3.out"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                textAlign="center"
                className="font-headline font-bold text-3xl lg:text-4xl"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 gap-0 mb-2">
              <div className="p-4">
                <p
                  className="font-label text-xs uppercase font-semibold"
                  style={{ color: 'rgba(0,0,0,0.5)', letterSpacing: '0.1em' }}
                >
                  Traditional AI Consulting
                </p>
              </div>
              <div className="p-4">
                <p
                  className="font-label text-xs uppercase font-semibold"
                  style={{ color: '#a14000', letterSpacing: '0.1em' }}
                >
                  Clinic of AI
                </p>
              </div>
            </div>

            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 gap-0 rounded-lg overflow-hidden mb-1"
                style={{
                  backgroundColor: i % 2 === 0 ? '#ffffff' : '#fff8f3',
                }}
              >
                <div className="p-4 flex items-center gap-3">
                  <Icon
                    name="close"
                    className="shrink-0"
                    style={{ fontSize: '16px', color: 'rgba(0,0,0,0.4)' }}
                  />
                  <span
                    className="font-body text-body-sm"
                    style={{ color: 'rgba(0,0,0,0.7)' }}
                  >
                    {row.traditional}
                  </span>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <Icon
                    name="check"
                    className="shrink-0"
                    style={{ fontSize: '16px', color: '#a14000' }}
                  />
                  <span
                    className="font-body text-body-sm font-medium"
                    style={{ color: '#000000' }}
                  >
                    {row.clinic}
                  </span>
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
              20 minutes. No pitch deck. We&rsquo;ll tell you in 5 if we can help.
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
