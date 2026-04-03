import Link from 'next/link'

const timeline = [
  {
    year: '2008',
    title: 'Government Reskilling Program',
    description:
      'Co-led a government-funded transition that moved hundreds of displaced professionals into high-demand technology roles through structured pathways.',
    icon: 'lightbulb',
    highlight: true,
  },
  {
    year: '2012 - 2019',
    title: 'Founder, The Code Venture',
    description:
      'Built and scaled a consulting firm to EUR1M revenue with 13 employees, serving 30+ Swiss startups in launch and growth operations.',
    icon: 'storage',
    highlight: false,
  },
  {
    year: '2020 - 2023',
    title: 'Head of Data and AI at Crayon AG',
    description:
      'Led AI strategy across hospitality, energy, and manufacturing, including predictive maintenance systems using 600+ sensors.',
    icon: 'corporate_fare',
    highlight: false,
  },
  {
    year: '2024',
    title: 'Clinic of AI Founded',
    description:
      'Launched the Forward Deployed AI Engineer model for mid-market companies that need measurable ROI without building full in-house AI departments.',
    icon: 'neurology',
    highlight: true,
  },
]

const values = [
  {
    icon: 'handshake',
    title: 'One trusted partner, not disconnected tools.',
    description:
      'Most mid-market businesses do not need an in-house AI department. They need one trusted partner who can connect solutions across the value chain and keep them running.',
    wide: true,
  },
  {
    icon: 'account_tree',
    title: 'Workflow-first implementation.',
    description:
      'We map the real workflow, not the org chart version. Then we design solutions where teams already make daily decisions.',
    wide: false,
  },
  {
    icon: 'groups',
    title: 'Side-by-side delivery.',
    description:
      'Forward Deployed AI Engineers work inside operations teams so adoption happens in context, not in a slide deck handoff.',
    wide: false,
  },
  {
    icon: 'eco',
    title: 'Continuity by design.',
    description:
      'Every engagement includes transfer of ownership so your team can run, evolve, and govern the system without permanent vendor dependency.',
    wide: true,
  },
]

export default function AboutPage() {
  return (
    <>
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
              Forward Deployed AI Engineers for the mid-market.
            </h1>
            <p
              className="font-body text-lg leading-relaxed"
              style={{ color: '#2d4a4d' }}
            >
              Clinic of AI closes the gap between AI capability and business outcomes by
              working side by side with operating teams until adoption is real.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{ backgroundColor: '#fff5e8' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
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
                        Philippe Kung
                      </p>
                      <p
                        className="font-body text-body-sm mt-1"
                        style={{ color: 'rgba(255,248,243,0.6)' }}
                      >
                        Founder and AI Architect, Clinic of AI
                      </p>
                      <p
                        className="font-body text-body-sm"
                        style={{ color: 'rgba(255,248,243,0.4)' }}
                      >
                        Former Head of Data and AI, Crayon AG
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-8">
              <div>
                <p className="section-label mb-4">Founder Background</p>
                <h2
                  className="font-headline font-bold text-3xl lg:text-4xl leading-tight mb-6"
                  style={{ color: '#001215', letterSpacing: '-0.01em' }}
                >
                  Philippe Kung
                </h2>
              </div>

              <p
                className="font-body text-body-md leading-relaxed"
                style={{ color: '#2d4a4d' }}
              >
                Philippe Kung combines hospitality operations training at EHL Lausanne
                with AI and machine learning training at MIT Sloan, then applied that
                foundation to enterprise deployments across hospitality, energy, and
                manufacturing.
              </p>

              <div className="research-note">
                <p
                  className="font-label text-xs uppercase mb-3 font-semibold"
                  style={{ color: '#a14000', letterSpacing: '0.1em' }}
                >
                  2008 Government Program - Proof of Continuity
                </p>
                <p
                  className="font-body text-body-md leading-relaxed mb-4"
                  style={{ color: '#001215' }}
                >
                  After the 2008 financial crisis, Philippe co-led a government-funded
                  reskilling program that transitioned hundreds of displaced professionals
                  into high-demand technology careers through structured pathways.
                </p>
                <p
                  className="font-body text-body-md leading-relaxed"
                  style={{ color: '#001215' }}
                >
                  That experience now informs Clinic of AI engagements: capability transfer
                  is designed in from day one so solutions outlive initial implementation
                  and teams can operate independently.
                </p>
                <p
                  className="font-body text-body-md leading-relaxed mt-4 italic font-headline"
                  style={{ color: '#001215' }}
                >
                  &ldquo;The technology is rarely the blocker. The blocker is the gap between
                  what AI can do and how teams actually operate.&rdquo;
                </p>
              </div>

              <blockquote
                className="font-headline italic text-xl leading-relaxed pl-6"
                style={{
                  borderLeft: '4px solid #a14000',
                  color: '#001215',
                }}
              >
                &ldquo;Forward Deployed AI Engineering means we do not stop at deployment. We
                stay until adoption is embedded and your team owns the system.&rdquo;
                <footer className="mt-3 font-body not-italic text-sm" style={{ color: '#2d4a4d' }}>
                  - Philippe Kung
                </footer>
              </blockquote>

              <p
                className="font-body text-body-md leading-relaxed"
                style={{ color: '#2d4a4d' }}
              >
                Before Clinic of AI, Philippe founded and scaled The Code Venture, ran a
                startup accelerator at Chainwork AG and Resilient Studios, and launched
                PlasticMind AI, the predecessor to today&apos;s model.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Professional Timeline</p>
            <h2
              className="font-headline font-bold text-3xl lg:text-4xl"
              style={{ color: '#001215', letterSpacing: '-0.01em' }}
            >
              Built across operations, AI, and workforce transition.
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div
              className="absolute left-8 top-0 bottom-0 w-px"
              style={{ backgroundColor: 'rgba(200,168,130,0.3)' }}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-10 pl-20">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
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

      <section
        className="py-24"
        style={{ backgroundColor: '#fff2e2' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Operating Principles</p>
            <h2
              className="font-headline font-bold text-3xl lg:text-4xl"
              style={{ color: '#001215', letterSpacing: '-0.01em' }}
            >
              How we work inside client operations.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
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
                Ready to discuss your operation?
              </h2>
              <p className="font-body text-body-md" style={{ color: 'rgba(255,248,243,0.65)' }}>
                20 minutes. No pitch deck. We will tell you in 5 minutes if we can help.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                Book a 20-minute conversation
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