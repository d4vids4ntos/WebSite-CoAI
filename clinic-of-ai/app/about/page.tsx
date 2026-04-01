import Link from 'next/link'

const timeline = [
  {
    year: '2008',
    title: 'The Reskilling Program',
    description:
      'During the global financial crisis, Philippe led one of the first systematic AI-adjacent reskilling programs in Switzerland — helping 200+ workers develop analytical and digital capabilities as their industries contracted. This experience became the intellectual foundation of Clinic of AI.',
    icon: 'lightbulb',
    highlight: true,
  },
  {
    year: '2012 – 2019',
    title: 'Enterprise Data Architecture',
    description:
      'A decade of senior data strategy and architecture roles across financial services and logistics. Built and scaled data platforms serving millions of daily transactions, developing a deep fluency in the infrastructure requirements of AI at enterprise scale.',
    icon: 'storage',
    highlight: false,
  },
  {
    year: '2020 – 2023',
    title: 'Head of Data & AI at Crayon AG',
    description:
      'Led the AI and data strategy function at Crayon AG, one of Europe\'s leading IT advisory firms. Designed and delivered AI transformation programs for enterprise clients across multiple sectors, scaling the practice from zero to a core service line.',
    icon: 'corporate_fare',
    highlight: false,
  },
  {
    year: '2024',
    title: 'Clinic of AI',
    description:
      'Founded Clinic of AI to apply everything learned about what makes AI transformation actually work — and what consistently fails. The firm is built on the conviction that people are the leverage point, and that organizational independence is the only acceptable outcome.',
    icon: 'neurology',
    highlight: true,
  },
]

const values = [
  {
    icon: 'handshake',
    title: 'Trusted partner, not vendor.',
    description:
      'We do not sell products. We have no platform dependency, no license commissions, and no incentive to recommend anything that does not serve your organization\'s genuine needs. Our business model is built on repeat relationships and referrals — which requires actually delivering transformation.',
    wide: true,
  },
  {
    icon: 'account_tree',
    title: 'Systems thinking over tool adoption.',
    description:
      'Every recommendation we make begins with understanding your organization as a system — its incentive structures, its information flows, its cultural dynamics. Tools are chosen to serve the system, never the other way around.',
    wide: false,
  },
  {
    icon: 'groups',
    title: 'People-first transformation.',
    description:
      'The hardest part of AI transformation is never the technology. It is changing how people think, make decisions, and collaborate. We invest disproportionately in the human layer because that is where transformation is won or lost.',
    wide: false,
  },
  {
    icon: 'eco',
    title: 'Sustainable capability, not dependency.',
    description:
      'Every engagement is designed to end with your organization stronger than when we arrived — and no longer needing us for the same problems. We build internal champions, transfer knowledge systematically, and document everything. Your capability is the measure of our success.',
    wide: true,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="pt-32 pb-24 relative grid-watermark overflow-hidden"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-label mb-5">About</p>
            <h1
              className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance mb-8"
              style={{ color: '#001215', letterSpacing: '-0.02em' }}
            >
              The future belongs to applied polymaths.
            </h1>
            <p
              className="font-body text-lg leading-relaxed"
              style={{ color: '#2d4a4d' }}
            >
              Clinic of AI exists because transformation requires more than technical expertise. It requires someone who has sat with the complexity of real organizations, real people, and real constraints — and found a way through.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section
        className="py-24"
        style={{ backgroundColor: '#fff5e8' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Portrait */}
            <div className="lg:col-span-4">
              <div
                className="w-full aspect-square rounded-2xl overflow-hidden relative"
                style={{
                  boxShadow: '0 20px 60px rgba(0,18,21,0.1)',
                  maxWidth: '380px',
                }}
              >
                <div
                  className="w-full h-full flex items-end"
                  style={{
                    background: 'linear-gradient(160deg, #002a2e 0%, #001215 70%, #001022 100%)',
                  }}
                >
                  <div className="p-8 relative z-10">
                    <div
                      className="w-full h-full absolute inset-0 flex items-center justify-center opacity-10"
                      style={{ top: '-20px' }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: '200px', color: '#fff8f3' }}
                      >
                        person
                      </span>
                    </div>
                    <div className="relative z-10">
                      <p
                        className="font-headline font-bold italic text-2xl"
                        style={{ color: '#fff8f3' }}
                      >
                        Philippe Küng
                      </p>
                      <p
                        className="font-body text-body-sm mt-1"
                        style={{ color: 'rgba(255,248,243,0.6)' }}
                      >
                        Founder, Clinic of AI
                      </p>
                      <p
                        className="font-body text-body-sm"
                        style={{ color: 'rgba(255,248,243,0.4)' }}
                      >
                        Former Head of Data & AI, Crayon AG
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div>
                <p className="section-label mb-4">The Founder</p>
                <h2
                  className="font-headline font-bold text-3xl lg:text-4xl leading-tight mb-6"
                  style={{ color: '#001215', letterSpacing: '-0.01em' }}
                >
                  Philippe Küng
                </h2>
              </div>

              <p
                className="font-body text-body-md leading-relaxed"
                style={{ color: '#2d4a4d' }}
              >
                Philippe Küng has spent two decades at the intersection of human capability and organizational transformation. His career spans enterprise data architecture, AI strategy, and — at its origin — a reskilling program that shaped everything that followed.
              </p>

              {/* 2008 story — research note */}
              <div className="research-note">
                <p
                  className="font-label text-xs uppercase mb-3 font-semibold"
                  style={{ color: '#a14000', letterSpacing: '0.1em' }}
                >
                  The 2008 Program — The Origin Story
                </p>
                <p
                  className="font-body text-body-md leading-relaxed mb-4"
                  style={{ color: '#001215' }}
                >
                  In 2008, at the height of the financial crisis, Philippe was asked to design a retraining program for workers whose roles were being eliminated by automation and economic contraction. He was 26, and he had six months to help 200 people build new capabilities for roles that barely existed yet.
                </p>
                <p
                  className="font-body text-body-md leading-relaxed"
                  style={{ color: '#001215' }}
                >
                  The program worked — not because of the curriculum, but because of how it was designed: around mental models first, tools second. Participants learned how to think differently before they learned any specific technology. Eighty-three percent of participants transitioned successfully into new roles within 12 months.
                </p>
                <p
                  className="font-body text-body-md leading-relaxed mt-4 italic font-headline"
                  style={{ color: '#001215' }}
                >
                  &ldquo;That program taught me that the hardest part of any technology transformation is never the technology. It is helping people believe they are capable of something new.&rdquo;
                </p>
              </div>

              <blockquote
                className="font-headline italic text-xl leading-relaxed pl-6"
                style={{
                  borderLeft: '4px solid #a14000',
                  color: '#001215',
                }}
              >
                &ldquo;I have seen what happens when organizations treat AI as a product instead of a capability. They get dashboards nobody uses, models nobody trusts, and transformation programs that fail at the culture layer. We do this differently.&rdquo;
                <footer className="mt-3 font-body not-italic text-sm" style={{ color: '#2d4a4d' }}>
                  — Philippe Küng
                </footer>
              </blockquote>

              <p
                className="font-body text-body-md leading-relaxed"
                style={{ color: '#2d4a4d' }}
              >
                After Crayon AG, where he scaled the AI practice from zero to a core service line, Philippe founded Clinic of AI to do the same work at larger scale — and with a clearer mandate: build organizational independence, not consultant dependency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER TIMELINE ── */}
      <section
        className="py-24"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Career Timeline</p>
            <h2
              className="font-headline font-bold text-3xl lg:text-4xl"
              style={{ color: '#001215', letterSpacing: '-0.01em' }}
            >
              The path to the Clinic.
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-px"
              style={{ backgroundColor: 'rgba(200,168,130,0.3)' }}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-10 pl-20">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline node */}
                  <div
                    className="absolute -left-12 top-1 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: item.highlight ? '#a14000' : '#001215',
                      boxShadow: item.highlight
                        ? '0 0 0 4px rgba(161,64,0,0.15)'
                        : '0 0 0 4px rgba(0,18,21,0.08)',
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '14px', color: '#fff8f3' }}
                    >
                      {item.icon}
                    </span>
                  </div>

                  <div
                    className="rounded-2xl p-7"
                    style={{
                      backgroundColor: item.highlight ? '#fff5e8' : '#ffffff',
                      boxShadow: '0 4px 16px rgba(0,18,21,0.04)',
                      border: item.highlight
                        ? '1px solid rgba(161,64,0,0.15)'
                        : '1px solid rgba(200,168,130,0.1)',
                    }}
                  >
                    <p
                      className="font-label text-xs font-semibold mb-2"
                      style={{
                        color: item.highlight ? '#a14000' : '#2d4a4d',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {item.year}
                    </p>
                    <h3
                      className="font-headline font-bold text-xl mb-3"
                      style={{ color: '#001215' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-body text-body-sm leading-relaxed"
                      style={{ color: '#2d4a4d' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section
        className="py-24"
        style={{ backgroundColor: '#fff2e2' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">What We Believe</p>
            <h2
              className="font-headline font-bold text-3xl lg:text-4xl"
              style={{ color: '#001215', letterSpacing: '-0.01em' }}
            >
              Core values, not slogans.
            </h2>
          </div>

          {/* Staggered layout — NOT equal 3-col */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Row 1: wide + narrow */}
            <div
              className="lg:col-span-7 rounded-2xl p-8"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 16px rgba(0,18,21,0.04)',
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 hex-clip flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#001215' }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '20px', color: '#fff8f3' }}
                  >
                    {values[0].icon}
                  </span>
                </div>
                <div>
                  <h3
                    className="font-headline font-bold text-xl mb-3"
                    style={{ color: '#001215' }}
                  >
                    {values[0].title}
                  </h3>
                  <p
                    className="font-body text-body-md leading-relaxed"
                    style={{ color: '#2d4a4d' }}
                  >
                    {values[0].description}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="lg:col-span-5 rounded-2xl p-8"
              style={{
                backgroundColor: '#002a2e',
                boxShadow: '0 4px 16px rgba(0,18,21,0.08)',
              }}
            >
              <div
                className="w-12 h-12 hex-clip flex items-center justify-center mb-5"
                style={{ backgroundColor: 'rgba(161,64,0,0.3)' }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '20px', color: '#ff7a32' }}
                >
                  {values[1].icon}
                </span>
              </div>
              <h3
                className="font-headline font-bold text-xl mb-3"
                style={{ color: '#fff8f3' }}
              >
                {values[1].title}
              </h3>
              <p
                className="font-body text-body-sm leading-relaxed"
                style={{ color: 'rgba(255,248,243,0.7)' }}
              >
                {values[1].description}
              </p>
            </div>

            {/* Row 2: narrow + wide */}
            <div
              className="lg:col-span-5 rounded-2xl p-8"
              style={{
                backgroundColor: '#fff8f3',
                boxShadow: '0 4px 16px rgba(0,18,21,0.04)',
                border: '1px solid rgba(200,168,130,0.2)',
              }}
            >
              <div
                className="w-12 h-12 hex-clip flex items-center justify-center mb-5"
                style={{ backgroundColor: '#a14000' }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '20px', color: '#fff' }}
                >
                  {values[2].icon}
                </span>
              </div>
              <h3
                className="font-headline font-bold text-xl mb-3"
                style={{ color: '#001215' }}
              >
                {values[2].title}
              </h3>
              <p
                className="font-body text-body-sm leading-relaxed"
                style={{ color: '#2d4a4d' }}
              >
                {values[2].description}
              </p>
            </div>

            <div
              className="lg:col-span-7 rounded-2xl p-8"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 16px rgba(0,18,21,0.04)',
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 hex-clip flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#001215' }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '20px', color: '#fff8f3' }}
                  >
                    {values[3].icon}
                  </span>
                </div>
                <div>
                  <h3
                    className="font-headline font-bold text-xl mb-3"
                    style={{ color: '#001215' }}
                  >
                    {values[3].title}
                  </h3>
                  <p
                    className="font-body text-body-md leading-relaxed"
                    style={{ color: '#2d4a4d' }}
                  >
                    {values[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA TO CONTACT ── */}
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
                Ready to start the conversation?
              </h2>
              <p className="font-body text-body-md" style={{ color: 'rgba(255,248,243,0.65)' }}>
                The first session is a diagnosis, not a pitch. We will tell you what we see — honestly.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                Schedule Your Audit
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
