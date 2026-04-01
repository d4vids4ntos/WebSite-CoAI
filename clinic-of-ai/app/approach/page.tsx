import Link from 'next/link'

const phases = [
  {
    number: '01',
    label: 'Diagnose',
    title: 'We begin where others skip.',
    description:
      'Before any technology recommendation, we conduct a deep organizational audit. We map your existing processes, identify automation opportunities, and — most critically — assess the human capability gaps that will determine whether AI investments generate return.',
    details: [
      'Stakeholder interviews and workflow mapping',
      'AI readiness assessment across departments',
      'Identification of high-ROI automation targets',
      'Cultural and capability baseline report',
      'Prioritized transformation roadmap',
    ],
    icon: 'search_insights',
    duration: '4 – 6 weeks',
  },
  {
    number: '02',
    label: 'Upskill',
    title: 'People are the leverage point.',
    description:
      'Technology without capability is waste. We design and deliver targeted learning programs that build genuine AI fluency — not surface-level awareness. Your teams learn to work with AI as a thinking partner, not just a tool.',
    details: [
      'Role-specific AI curriculum design',
      'Live workshops and hands-on labs',
      'Mental model development for probabilistic thinking',
      'Ethical decision-making frameworks',
      'Competency certification tracks',
    ],
    icon: 'school',
    duration: '8 – 12 weeks',
  },
  {
    number: '03',
    label: 'Transform',
    title: 'Systems that sustain themselves.',
    description:
      'With diagnosis complete and capability built, we architect and implement modular AI systems designed for organizational independence — not vendor dependency. Every solution we build includes knowledge transfer, governance frameworks, and internal champions.',
    details: [
      'Modular AI system design and deployment',
      'Internal AI governance structure',
      'Knowledge transfer to in-house teams',
      'Performance monitoring and iteration',
      'Long-term capability roadmap',
    ],
    icon: 'construction',
    duration: '12 – 20 weeks',
  },
]

const comparisonRows = [
  { traditional: 'Sells tools and platforms', clinic: 'Builds organizational capability' },
  { traditional: 'Individual training sessions', clinic: 'System-wide transformation programs' },
  { traditional: 'Vendor dependency built in', clinic: 'Organizational independence by design' },
  { traditional: 'Deploy and disappear', clinic: 'Knowledge transfer and internal champions' },
  { traditional: 'Technology-first thinking', clinic: 'People-first, then systems' },
  { traditional: 'One-size-fits-all methodology', clinic: 'Modular, context-specific approach' },
]

export default function ApproachPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="pt-32 pb-24 relative grid-watermark"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-label mb-5">Our Methodology</p>
            <h1
              className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance mb-8"
              style={{ color: '#001215', letterSpacing: '-0.02em' }}
            >
              We don&apos;t install AI. We transform how your organization thinks.
            </h1>
            <p
              className="font-body text-lg leading-relaxed"
              style={{ color: '#2d4a4d' }}
            >
              Most AI consulting ends when the implementation is live. Ours ends when your organization no longer needs us — because your people have the knowledge, structures, and confidence to continue independently.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3-PHASE METHODOLOGY ── */}
      <section
        className="py-24"
        style={{ backgroundColor: '#fff5e8' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-4">The Protocol</p>
            <h2
              className="font-headline font-bold text-3xl lg:text-4xl"
              style={{ color: '#001215', letterSpacing: '-0.01em' }}
            >
              Three phases. One transformation.
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#fff8f3',
                  boxShadow: '0 4px 16px rgba(0,18,21,0.04)',
                }}
              >
                <div className="p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Phase number + icon */}
                    <div className="lg:col-span-3 flex items-start gap-5">
                      <div
                        className="shrink-0 w-16 h-16 flex items-center justify-center rounded-xl font-label font-bold text-xl"
                        style={{
                          border: '2px solid #a14000',
                          color: '#a14000',
                        }}
                      >
                        {phase.number}
                      </div>
                      <div>
                        <p className="section-label mb-1">{phase.label}</p>
                        <p
                          className="font-body text-body-sm"
                          style={{ color: 'rgba(45,74,77,0.6)' }}
                        >
                          {phase.duration}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                      <h3
                        className="font-headline font-bold text-2xl"
                        style={{ color: '#001215' }}
                      >
                        {phase.title}
                      </h3>
                      <p
                        className="font-body text-body-md leading-relaxed"
                        style={{ color: '#2d4a4d' }}
                      >
                        {phase.description}
                      </p>
                    </div>

                    {/* Details list */}
                    <div className="lg:col-span-4">
                      <ul className="flex flex-col gap-2.5">
                        {phase.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <span
                              className="material-symbols-outlined shrink-0 mt-0.5"
                              style={{ fontSize: '16px', color: '#a14000' }}
                            >
                              arrow_right
                            </span>
                            <span
                              className="font-body text-body-sm"
                              style={{ color: '#2d4a4d' }}
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

      {/* ── AI ARCHITECT CONCEPT ── */}
      <section
        className="py-24"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <div>
                <p className="section-label mb-4">The AI Architect</p>
                <h2
                  className="font-headline font-bold text-3xl lg:text-4xl leading-tight"
                  style={{ color: '#001215', letterSpacing: '-0.01em' }}
                >
                  Every transformation needs someone who can see the whole system.
                </h2>
              </div>
              <p
                className="font-body text-body-md leading-relaxed"
                style={{ color: '#2d4a4d' }}
              >
                The AI Architect is not a job title — it is a capability profile we help organizations develop internally. This is the person who understands both the technical landscape and the human factors. Who can translate between the boardroom and the engineering team. Who knows that the hardest part of AI transformation is never the technology.
              </p>
              <p
                className="font-body text-body-md leading-relaxed"
                style={{ color: '#2d4a4d' }}
              >
                Our programs develop AI Architects at multiple levels — from individual contributors who can work alongside AI systems intelligently, to senior leaders who can build and govern AI strategy with confidence.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Research note */}
              <div className="research-note">
                <p
                  className="font-label text-xs uppercase mb-3"
                  style={{ color: '#a14000', letterSpacing: '0.1em' }}
                >
                  Research Insight
                </p>
                <p
                  className="font-body text-body-md leading-relaxed italic"
                  style={{ color: '#001215' }}
                >
                  &ldquo;Organizations that invested in AI literacy programs saw 3.4x greater return on AI initiatives than those that focused exclusively on technology procurement. The differentiator was not the model — it was the team.&rdquo;
                </p>
                <p
                  className="font-body text-body-sm mt-3"
                  style={{ color: '#2d4a4d' }}
                >
                  MIT Sloan Management Review, 2024
                </p>
              </div>

              {/* Capability pillars */}
              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: '#fff5e8',
                  boxShadow: '0 4px 16px rgba(0,18,21,0.04)',
                }}
              >
                <p className="font-body font-semibold text-body-md mb-5" style={{ color: '#001215' }}>
                  The AI Architect profile includes:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: 'psychology', label: 'Systems Thinking' },
                    { icon: 'data_exploration', label: 'Data Literacy' },
                    { icon: 'groups', label: 'Change Leadership' },
                    { icon: 'balance', label: 'AI Ethics' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: '18px', color: '#a14000' }}
                      >
                        {item.icon}
                      </span>
                      <span className="font-body text-body-sm font-medium" style={{ color: '#001215' }}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section
        className="py-24"
        style={{ backgroundColor: '#fff2e2' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-4">The Difference</p>
            <h2
              className="font-headline font-bold text-3xl lg:text-4xl"
              style={{ color: '#001215', letterSpacing: '-0.01em' }}
            >
              Traditional consulting vs. Clinic of AI
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Table header */}
            <div className="grid grid-cols-2 gap-0 mb-2">
              <div className="p-4">
                <p
                  className="font-label text-xs uppercase font-semibold"
                  style={{ color: 'rgba(45,74,77,0.5)', letterSpacing: '0.1em' }}
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

            {/* Rows — alternating bg, no borders */}
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 gap-0 rounded-lg overflow-hidden mb-1"
                style={{
                  backgroundColor: i % 2 === 0 ? '#ffffff' : '#fff8f3',
                }}
              >
                <div className="p-4 flex items-center gap-3">
                  <span
                    className="material-symbols-outlined shrink-0"
                    style={{ fontSize: '16px', color: 'rgba(45,74,77,0.4)' }}
                  >
                    close
                  </span>
                  <span
                    className="font-body text-body-sm"
                    style={{ color: 'rgba(45,74,77,0.7)' }}
                  >
                    {row.traditional}
                  </span>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <span
                    className="material-symbols-outlined shrink-0"
                    style={{ fontSize: '16px', color: '#a14000' }}
                  >
                    check
                  </span>
                  <span
                    className="font-body text-body-sm font-medium"
                    style={{ color: '#001215' }}
                  >
                    {row.clinic}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section
        className="py-20"
        style={{ backgroundColor: '#001215' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2
                className="font-headline font-bold text-3xl lg:text-4xl mb-3"
                style={{ color: '#fff8f3' }}
              >
                Ready to begin the diagnosis?
              </h2>
              <p className="font-body text-body-md" style={{ color: 'rgba(255,248,243,0.65)' }}>
                The first conversation is free. We will tell you exactly where you stand.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                Book Free Audit
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/academy"
                className="inline-flex items-center justify-center gap-2 font-body font-semibold px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap"
                style={{
                  backgroundColor: 'rgba(255,248,243,0.08)',
                  color: '#fff8f3',
                  border: '1px solid rgba(255,248,243,0.12)',
                }}
              >
                Explore Academy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
