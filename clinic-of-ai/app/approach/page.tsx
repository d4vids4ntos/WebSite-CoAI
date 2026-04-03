import Link from 'next/link'

const phases = [
  {
    number: '01',
    label: 'Embed',
    title: 'Map the real workflow, not the org chart version.',
    description:
      'We start inside operations: shadowing teams, mapping decision points, and identifying where AI can improve outcomes in daily execution.',
    details: [
      'Workflow observation and stakeholder interviews',
      'Current systems and data flow mapping',
      'Top 3 high-leverage opportunities selected',
      'Quick-win implementation plan',
      'Clear ownership model per team',
    ],
    icon: 'search_insights',
    duration: 'Weeks 1 - 2',
  },
  {
    number: '02',
    label: 'Deploy',
    title: 'Build side by side with the people who use it.',
    description:
      'Forward Deployed AI Engineers implement in live workflows and iterate with frontline teams so adoption is immediate, measurable, and durable.',
    details: [
      'Pilot implementation in operational context',
      'Integration with existing tools and routines',
      'Role-based enablement for daily use',
      'KPI tracking for time, quality, and cost',
      'Iteration based on field feedback',
    ],
    icon: 'construction',
    duration: 'Weeks 3 - 6',
  },
  {
    number: '03',
    label: 'Transfer',
    title: 'Design continuity so the solution outlives the engagement.',
    description:
      'We do not hand over a dashboard and disappear. We transfer capability, governance, and operating rhythm so your team can run and evolve the system independently.',
    details: [
      'Operational playbooks and handover guides',
      'Internal champions and owner training',
      'Governance and escalation structure',
      'Post-deployment optimization cadence',
      'Independence roadmap',
    ],
    icon: 'school',
    duration: 'Weeks 7 - 8+',
  },
]

const comparisonRows = [
  { traditional: 'Platform-first recommendation', clinic: 'Workflow-first implementation' },
  { traditional: 'Pilot delivery and handoff', clinic: 'Side-by-side deployment' },
  { traditional: 'Generic enablement sessions', clinic: 'Role-based capability transfer' },
  { traditional: 'Short-term output focus', clinic: 'Long-term continuity architecture' },
  { traditional: 'Vendor dependency over time', clinic: 'Team ownership over time' },
  { traditional: 'Deck-driven transformation', clinic: 'Operational transformation' },
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
            <p className="section-label mb-5">Forward Deployed Model</p>
            <h1
              className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance mb-8"
              style={{ color: '#001215', letterSpacing: '-0.02em' }}
            >
              We do not sell AI. We sit inside your operation and make it work.
            </h1>
            <p
              className="font-body text-lg leading-relaxed"
              style={{ color: '#2d4a4d' }}
            >
              MIT reports 95% of generative AI pilots fail before production. The missing
              piece is not another tool. It is embedded delivery that bridges technology
              and how teams actually operate.
            </p>
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
            <h2
              className="font-headline font-bold text-3xl lg:text-4xl"
              style={{ color: '#001215', letterSpacing: '-0.01em' }}
            >
              Three phases. One operational outcome.
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

      <section
        className="py-24"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <div>
                <p className="section-label mb-4">Why It Works</p>
                <h2
                  className="font-headline font-bold text-3xl lg:text-4xl leading-tight"
                  style={{ color: '#001215', letterSpacing: '-0.01em' }}
                >
                  Deep tech range. Embedded delivery. Continuity by design.
                </h2>
              </div>
              <p
                className="font-body text-body-md leading-relaxed"
                style={{ color: '#2d4a4d' }}
              >
                Forward Deployed AI Engineers combine technical breadth from legacy ML to
                generative AI and autonomous agents, then apply it directly in operational
                context where adoption decisions happen every day.
              </p>
              <p
                className="font-body text-body-md leading-relaxed"
                style={{ color: '#2d4a4d' }}
              >
                The goal is measurable improvement now and organizational ownership later.
                No recurring dependency. No handoff theater.
              </p>
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
                  className="font-body text-body-md leading-relaxed italic"
                  style={{ color: '#001215' }}
                >
                  &ldquo;42% of companies have abandoned the majority of their AI initiatives,
                  up from 17%.&rdquo;
                </p>
                <p
                  className="font-body text-body-sm mt-3"
                  style={{ color: '#2d4a4d' }}
                >
                  S&amp;P Global Market Intelligence (2025)
                </p>
              </div>

              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: '#fff5e8',
                  boxShadow: '0 4px 16px rgba(0,18,21,0.04)',
                }}
              >
                <p className="font-body font-semibold text-body-md mb-5" style={{ color: '#001215' }}>
                  Core capability pillars:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: 'precision_manufacturing', label: 'Technical Breadth' },
                    { icon: 'groups', label: 'Embedded Delivery' },
                    { icon: 'account_tree', label: 'Systems Integration' },
                    { icon: 'verified', label: 'Continuity Architecture' },
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
                20 minutes. No pitch deck.
              </h2>
              <p className="font-body text-body-md" style={{ color: 'rgba(255,248,243,0.65)' }}>
                We will tell you in 5 minutes if we can help. The other 15 minutes are yours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                Book a conversation
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/industries"
                className="inline-flex items-center justify-center gap-2 font-body font-semibold px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap"
                style={{
                  backgroundColor: 'rgba(255,248,243,0.08)',
                  color: '#fff8f3',
                  border: '1px solid rgba(255,248,243,0.12)',
                }}
              >
                Explore industries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}