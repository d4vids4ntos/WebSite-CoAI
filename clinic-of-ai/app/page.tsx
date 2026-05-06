'use client'

import Link from 'next/link'
import SplitText from '@/components/animations/SplitText'
import TextType from '@/components/animations/TextType'
import Image from 'next/image'
import Icon from '@/components/icons/Icon'
import ThreeGlobe from '@/components/ThreeGlobe'

export default function HomePage() {
  return (
    <>
      <p
        aria-hidden="false"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        Philippe Kung is the founder of Clinic of AI, a company that deploys Forward
        Deployed AI Engineers to mid-market businesses across Europe. Clinic of AI focuses
        on the last mile between pilot and production so AI delivers measurable ROI in
        real operations.
      </p>

      <section
        className="relative grid-watermark overflow-hidden"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div
          className="absolute top-24 right-0 w-80 h-80 pointer-events-none"
          aria-hidden="true"
          style={{ opacity: 0.06 }}
        >
          <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M320 0 L320 160 L240 160 L240 80 L160 80 L160 0" stroke="#000000" strokeWidth="1" fill="none" />
            <path d="M320 80 L280 80 L280 120 L200 120 L200 40 L320 40" stroke="#000000" strokeWidth="1" fill="none" />
            <circle cx="240" cy="160" r="4" fill="#a14000" />
            <circle cx="160" cy="80" r="4" fill="#a14000" />
            <circle cx="280" cy="120" r="3" fill="#000000" />
          </svg>
        </div>

        <div className="max-w-content mx-auto px-6 lg:px-8 w-full pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div>
                <p
                  className="font-label text-xs font-semibold tracking-widest uppercase mb-5"
                  style={{ color: '#a14000', letterSpacing: '0.3em' }}
                >
                  Forward Deployed Model
                </p>
                <div className="overflow-hidden">
                  <SplitText
                    text="Your AI initiative is failing. The technology is not the problem."
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
              </div>
              <div className="overflow-hidden max-w-xl">
                <SplitText
                  text="95% of generative AI pilots never reach production. A Forward Deployed AI Engineer changes that by working inside your operation until results are visible, measurable, and owned by your team."
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
              <p
                className="font-headline font-bold text-xl sm:text-2xl whitespace-nowrap"
                style={{ color: '#ff7a32' }}
              >
                <TextType
                  text="The technology works. The dynamics do not."
                  as="span"
                  typingSpeed={60}
                  loop={false}
                  showCursor={true}
                  cursorCharacter="▋"
                  initialDelay={800}
                  className=""
                />
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Book a 20-minute conversation
                  <Icon name="arrow_forward" style={{ fontSize: '18px' }} />
                </Link>
                <Link href="/approach" className="btn-secondary text-center">
                  See the model
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <Icon name="verified" style={{ color: '#a14000', fontSize: '16px' }} />
                  <span className="font-label text-xs" style={{ color: '#000000', letterSpacing: '0.08em' }}>
                    Embedded Delivery
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="groups" style={{ color: '#a14000', fontSize: '16px' }} />
                  <span className="font-label text-xs" style={{ color: '#000000', letterSpacing: '0.08em' }}>
                    Deep Tech Range
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="schema" style={{ color: '#a14000', fontSize: '16px' }} />
                  <span className="font-label text-xs" style={{ color: '#000000', letterSpacing: '0.08em' }}>
                    Continuity by Design
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-80 sm:w-[26rem] lg:w-[32rem] aspect-square">
                <div
                  className="w-full h-full rounded-full overflow-hidden relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4"
                  style={{ backgroundColor: 'transparent' }}
                >
                  <ThreeGlobe
                    textureSrc="/images/hero/landing-hero-globe.png"
                    className="absolute inset-[8%] rounded-full overflow-hidden"
                    ariaLabel="Rotate 3D globe"
                  />
                  <div
                    className="absolute inset-x-0 bottom-[8%] h-1/3 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(255,248,243,0.2), transparent)',
                    }}
                  />
                </div>
                <div
                  className="w-full h-full rounded-full overflow-hidden pointer-events-none absolute inset-0"
                  style={{
                    border: '2px solid rgba(200,168,130,0.3)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                  }}
                />

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
          <div className="mb-14">
            <p className="section-label mb-4">The Problem</p>
            <div className="overflow-hidden max-w-2xl">
              <SplitText
                text="The EUR200K question nobody is asking."
                tag="h2"
                splitType="words"
                delay={50}
                duration={0.9}
                ease="power3.out"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                textAlign="left"
                className="font-headline font-bold text-4xl lg:text-5xl leading-tight"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div
              className="lg:col-span-5 rounded-2xl p-8 flex flex-col gap-6 card-shine"
              style={{
                backgroundColor: '#FFF59D',
                boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
              }}
            >
              <div>
                <p className="section-label mb-3">Problem 01</p>
                <h3
                  className="font-headline font-bold text-2xl mb-3 leading-snug"
                  style={{ color: '#000000' }}
                >
                  Tool-first pilots
                </h3>
                <p
                  className="font-body text-body-md leading-relaxed"
                  style={{ color: '#000000' }}
                >
                  Executive sees a demo, IT buys a platform, usage drops when consultants leave. The model was never the problem.
                </p>
              </div>
            </div>

            <div
              className="lg:col-span-4 rounded-2xl p-8 flex flex-col gap-6 card-shine"
              style={{
                backgroundColor: '#FFF59D',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              }}
            >
              <Icon
                name="person"
                className="absolute -right-4 -bottom-4 pointer-events-none select-none"
                style={{ fontSize: '140px', color: 'rgba(0,0,0,0.05)' }}
              />
              <div className="relative z-10">
                <p className="section-label mb-3">Problem 02</p>
                <h3
                  className="font-headline font-bold text-2xl mb-3 leading-snug"
                  style={{ color: '#000000' }}
                >
                  No workflow adoption
                </h3>
                <p
                  className="font-body text-body-md leading-relaxed"
                  style={{ color: '#000000' }}
                >
                  Dashboards do not change outcomes when operators do not trust them. Adoption happens only when solutions are built inside the real workflow.
                </p>
              </div>
            </div>

            <div
              className="lg:col-span-3 rounded-2xl p-8 flex flex-col gap-6 card-shine"
              style={{
                backgroundColor: '#FFF59D',
                boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
              }}
            >
              <div>
                <p className="section-label mb-3">Problem 03</p>
                <h3
                  className="font-headline font-bold text-2xl mb-3 leading-snug"
                  style={{ color: '#000000' }}
                >
                  Consultants leave, pilots die
                </h3>
                <p
                  className="font-body text-body-md leading-relaxed"
                  style={{ color: '#000000' }}
                >
                  Most engagements end at handoff. We design continuity from day one so your team owns the system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-10"
        style={{ backgroundColor: '#FFF59D', borderTop: '1px solid rgba(0,0,0,0.06)' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="font-body text-body-md"
              style={{ color: 'rgba(0,0,0,0.75)' }}
            >
              <span className="font-label text-xs font-semibold uppercase" style={{ color: '#a14000', letterSpacing: '0.15em' }}>Executive Cohort</span>
              <span style={{ color: 'rgba(0,0,0,0.25)' }}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              5 weeks. 8-12 executives. Real implementation, not slide decks.
            </p>
            <Link href="/academy" className="btn-primary whitespace-nowrap shrink-0">
              Explore the cohort
              <Icon name="arrow_forward" style={{ fontSize: '16px' }} />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{ backgroundColor: '#fff2e2' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="section-label mb-4">Evidence From Operations</p>
            <div className="overflow-hidden">
              <SplitText
                text="Three implementation outcomes from real operating teams."
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              {
                industry: 'Hospitality Group',
                metric: '4 hrs',
                metricLabel: 'saved per scheduling cycle',
                summary:
                  'Manual roster generation replaced with role-aware scheduling automation across multiple shifts.',
              },
              {
                industry: 'Manufacturing Unit',
                metric: '30%',
                metricLabel: 'fewer emergency repairs',
                summary:
                  'Predictive maintenance scheduling introduced before peak load windows to reduce reactive downtime.',
              },
              {
                industry: 'Professional Services Team',
                metric: '67%',
                metricLabel: 'higher implementation success',
                summary:
                  'Embedded delivery model increased adoption by integrating AI workflows directly into daily operations.',
              },
            ].map((item) => (
              <div
                key={item.industry}
                className="rounded-2xl p-8 flex flex-col gap-5 card-shine"
                style={{
                  backgroundColor: '#FFF59D',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
                }}
              >
                <p
                  className="font-label text-xs uppercase font-semibold"
                  style={{ color: '#000000', letterSpacing: '0.12em' }}
                >
                  {item.industry}
                </p>
                <p className="font-headline font-bold text-4xl" style={{ color: '#000000' }}>
                  {item.metric}
                </p>
                <p className="font-body text-body-sm" style={{ color: '#a14000' }}>
                  {item.metricLabel}
                </p>
                <p className="font-body text-body-md leading-relaxed" style={{ color: '#000000' }}>
                  {item.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="font-label text-xs uppercase font-semibold" style={{ color: '#000000', letterSpacing: '0.12em' }}>
              Operating contexts
            </span>
            {['Hospitality', 'Manufacturing', 'Professional Services', 'Real Estate', 'Agriculture'].map((context) => (
              <span
                key={context}
                className="font-body text-body-sm px-3 py-1.5 rounded-lg"
                style={{ backgroundColor: '#fff8f3', color: '#000000' }}
              >
                {context}
              </span>
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
              20 minutes. No pitch deck. We will tell you in 5 if we can help.
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
