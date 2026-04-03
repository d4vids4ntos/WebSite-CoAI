import Link from 'next/link'

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
            <path d="M320 0 L320 160 L240 160 L240 80 L160 80 L160 0" stroke="#001215" strokeWidth="1" fill="none" />
            <path d="M320 80 L280 80 L280 120 L200 120 L200 40 L320 40" stroke="#001215" strokeWidth="1" fill="none" />
            <circle cx="240" cy="160" r="4" fill="#a14000" />
            <circle cx="160" cy="80" r="4" fill="#a14000" />
            <circle cx="280" cy="120" r="3" fill="#001215" />
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
                <h1
                  className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance"
                  style={{ color: '#001215', letterSpacing: '-0.02em' }}
                >
                  Your AI initiative is failing. The technology is not the problem.
                </h1>
              </div>
              <p
                className="font-body text-lg leading-relaxed max-w-xl"
                style={{ color: '#2d4a4d' }}
              >
                95% of generative AI pilots never reach production. A Forward Deployed AI
                Engineer changes that by working inside your operation until results are
                visible, measurable, and owned by your team.
              </p>
              <p
                className="font-headline font-bold text-2xl sm:text-3xl"
                style={{ color: '#ff7a32' }}
              >
                <span>The technology works. The dynamics do not.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Book a 20-minute conversation
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    arrow_forward
                  </span>
                </Link>
                <Link href="/approach" className="btn-secondary text-center">
                  See the model
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined"
                    style={{ color: '#a14000', fontSize: '16px' }}
                  >
                    verified
                  </span>
                  <span className="font-label text-xs" style={{ color: '#2d4a4d', letterSpacing: '0.08em' }}>
                    Embedded Delivery
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined"
                    style={{ color: '#a14000', fontSize: '16px' }}
                  >
                    groups
                  </span>
                  <span className="font-label text-xs" style={{ color: '#2d4a4d', letterSpacing: '0.08em' }}>
                    Deep Tech Range
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined"
                    style={{ color: '#a14000', fontSize: '16px' }}
                  >
                    schema
                  </span>
                  <span className="font-label text-xs" style={{ color: '#2d4a4d', letterSpacing: '0.08em' }}>
                    Continuity by Design
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div
                  className="w-full h-full rounded-full overflow-hidden relative"
                  style={{
                    border: '2px solid rgba(200,168,130,0.3)',
                    boxShadow: '0 20px 60px rgba(0,18,21,0.1)',
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, #002a2e 0%, #001215 50%, #001022 100%)',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '80px', color: 'rgba(255,248,243,0.15)' }}
                    >
                      neurology
                    </span>
                  </div>
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3"
                    style={{
                      background: 'linear-gradient(to top, rgba(255,248,243,0.2), transparent)',
                    }}
                  />
                </div>

                <div
                  className="absolute -top-4 -left-8 w-14 h-14 hex-clip flex items-center justify-center"
                  style={{ backgroundColor: '#a14000' }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '22px', color: '#ffffff' }}
                  >
                    hub
                  </span>
                </div>

                <div
                  className="absolute top-1/2 -right-10 -translate-y-1/2 w-14 h-14 hex-clip flex items-center justify-center"
                  style={{ backgroundColor: '#002a2e' }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '22px', color: '#fff8f3' }}
                  >
                    memory
                  </span>
                </div>

                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 hex-clip flex items-center justify-center"
                  style={{ backgroundColor: '#001215' }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '22px', color: '#fff8f3' }}
                  >
                    model_training
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-6 border-y"
        style={{
          backgroundColor: '#fff2e2',
          borderColor: 'rgba(200,168,130,0.2)',
        }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
            <span
              className="material-symbols-outlined shrink-0"
              style={{ color: '#a14000', fontSize: '20px' }}
            >
              info
            </span>
            <p
              className="font-label text-xs font-semibold uppercase"
              style={{ color: '#2d4a4d', letterSpacing: '0.1em' }}
            >
              MIT 2025: 95% of generative AI pilots fail before production
            </p>
            <span
              className="hidden sm:block w-1 h-1 rounded-full"
              style={{ backgroundColor: '#c8a882' }}
              aria-hidden="true"
            />
            <p
              className="font-label text-xs uppercase"
              style={{ color: 'rgba(45,74,77,0.6)', letterSpacing: '0.1em' }}
            >
              S&amp;P Global 2025: 42% abandoned the majority of AI initiatives
            </p>
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
            <h2
              className="font-headline font-bold text-4xl lg:text-5xl leading-tight max-w-2xl"
              style={{ color: '#001215', letterSpacing: '-0.02em' }}
            >
              The EUR200K question nobody is asking.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div
              className="lg:col-span-5 rounded-2xl p-8 flex flex-col gap-6"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 12px 40px rgba(0,18,21,0.06)',
              }}
            >
              <div
                className="w-12 h-12 hex-clip flex items-center justify-center"
                style={{ backgroundColor: '#001215' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#fff8f3' }}>
                  shopping_cart
                </span>
              </div>
              <div>
                <p className="section-label mb-3">Problem 01</p>
                <h3
                  className="font-headline font-bold text-2xl mb-3 leading-snug"
                  style={{ color: '#001215' }}
                >
                  Tool-first pilots
                </h3>
                <p
                  className="font-body text-body-md leading-relaxed"
                  style={{ color: '#2d4a4d' }}
                >
                  An executive sees a demo, IT buys a platform, consultants launch a pilot,
                  and usage drops when they leave. The pilot did not fail because of the
                  model. It failed because nobody embedded it into daily decisions.
                </p>
              </div>
              <div className="research-note">
                <p className="font-body text-body-sm" style={{ color: '#2d4a4d' }}>
                  <strong style={{ color: '#001215' }}>&quot;95% of generative AI pilots fail before production.&quot;</strong>
                  {' '}- MIT NANDA Initiative, GenAI Divide (2025)
                </p>
              </div>
            </div>

            <div
              className="lg:col-span-4 rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden"
              style={{
                backgroundColor: '#002a2e',
                boxShadow: '0 20px 60px rgba(0,18,21,0.12)',
              }}
            >
              <span
                className="material-symbols-outlined absolute -right-4 -bottom-4 pointer-events-none select-none"
                style={{ fontSize: '140px', color: 'rgba(255,248,243,0.04)' }}
                aria-hidden="true"
              >
                person
              </span>
              <div
                className="w-12 h-12 hex-clip flex items-center justify-center relative z-10"
                style={{ backgroundColor: '#a14000' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#fff' }}>
                  school
                </span>
              </div>
              <div className="relative z-10">
                <p className="font-label text-xs uppercase tracking-widest mb-3" style={{ color: 'rgba(255,248,243,0.5)', letterSpacing: '0.15em' }}>
                  Problem 02
                </p>
                <h3
                  className="font-headline font-bold text-2xl mb-3 leading-snug"
                  style={{ color: '#fff8f3' }}
                >
                  No workflow adoption
                </h3>
                <p
                  className="font-body text-body-md leading-relaxed"
                  style={{ color: 'rgba(255,248,243,0.7)' }}
                >
                  Dashboards do not change outcomes when operators do not trust them and
                  managers do not use them in live decisions. Adoption happens only when
                  solutions are built inside the real workflow.
                </p>
              </div>
            </div>

            <div
              className="lg:col-span-3 rounded-2xl p-8 flex flex-col gap-6"
              style={{
                backgroundColor: '#efe0cd',
                boxShadow: '0 12px 40px rgba(0,18,21,0.06)',
              }}
            >
              <div
                className="w-12 h-12 hex-clip flex items-center justify-center"
                style={{ backgroundColor: '#001215' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#fff8f3' }}>
                  link_off
                </span>
              </div>
              <div>
                <p className="section-label mb-3">Problem 03</p>
                <h3
                  className="font-headline font-bold text-2xl mb-3 leading-snug"
                  style={{ color: '#001215' }}
                >
                  Consultants leave, pilots die
                </h3>
                <p
                  className="font-body text-body-md leading-relaxed"
                  style={{ color: '#2d4a4d' }}
                >
                  Most engagements end at handoff. We design continuity from day one by
                  training your team to run, evolve, and own the system after deployment.
                </p>
              </div>
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
            <p className="section-label mb-4">The Solution</p>
            <h2
              className="font-headline font-bold text-4xl lg:text-5xl"
              style={{ color: '#001215', letterSpacing: '-0.02em' }}
            >
              What a Forward Deployed AI Engineer actually does.
            </h2>
          </div>
        </div>
      </section>

      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: '#001215' }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
          aria-hidden="true"
          style={{ opacity: 0.06 }}
        >
          <svg viewBox="0 0 384 384" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M384 0 L384 200 L300 200 L300 100 L200 100 L200 0" stroke="#fff8f3" strokeWidth="1" fill="none" />
            <path d="M384 100 L340 100 L340 150 L250 150 L250 50 L384 50" stroke="#fff8f3" strokeWidth="1" fill="none" />
            <circle cx="300" cy="200" r="5" fill="#a14000" />
            <circle cx="200" cy="100" r="5" fill="#a14000" />
            <circle cx="340" cy="150" r="3" fill="#fff8f3" />
          </svg>
        </div>

        <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <div>
                <p
                  className="font-label text-xs font-semibold uppercase mb-4"
                  style={{ color: '#a14000', letterSpacing: '0.2em' }}
                >
                  Executive Cohort
                </p>
                <h2
                  className="font-headline font-bold text-4xl lg:text-5xl leading-tight"
                  style={{ color: '#fff8f3', letterSpacing: '-0.02em' }}
                >
                  AI in Hospitality: 5 weeks for executives who are done experimenting.
                </h2>
              </div>
              <p
                className="font-body text-lg leading-relaxed"
                style={{ color: 'rgba(255,248,243,0.7)' }}
              >
                This is not a generic AI course. It is a company-sponsored program focused on
                your operation: identify high-leverage opportunities, implement in workflow,
                and build internal capability.
              </p>

              <ul className="flex flex-col gap-5">
                {[
                  { icon: 'hub', label: 'Map 3 highest-leverage opportunities', desc: 'Prioritized for your teams and current operation' },
                  { icon: 'build', label: 'Implement in live workflows', desc: 'Not slide decks and not future-state theater' },
                  { icon: 'groups', label: 'Build internal capability', desc: 'Your team can run and evolve outcomes after delivery' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 hex-clip flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(161,64,0,0.3)' }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: '18px', color: '#ff7a32' }}
                      >
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-body-md" style={{ color: '#fff8f3' }}>
                        {item.label}
                      </p>
                      <p className="font-body text-body-sm" style={{ color: 'rgba(255,248,243,0.55)' }}>
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, #002a2e 0%, #001022 100%)',
                border: '1px solid rgba(255,248,243,0.08)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}
            >
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
                style={{ backgroundColor: '#a14000' }}
                aria-hidden="true"
              />
              <div className="relative z-10 flex flex-col gap-6">
                <div>
                  <p
                    className="font-label text-xs uppercase tracking-widest mb-3"
                    style={{ color: 'rgba(255,248,243,0.4)', letterSpacing: '0.15em' }}
                  >
                    Company Program
                  </p>
                  <h3
                    className="font-headline font-bold text-2xl"
                    style={{ color: '#fff8f3' }}
                  >
                    Limited to 8-12 executives per cohort
                  </h3>
                </div>
                <p
                  className="font-body text-body-md"
                  style={{ color: 'rgba(255,248,243,0.65)' }}
                >
                  Led by Philippe Kung, former Head of Data and AI at Crayon AG, Microsoft
                  hospitality partner.
                </p>
                <div className="flex flex-col gap-3">
                  {['5-week intensive format', 'Company-specific implementation', 'Executive team alignment', 'Post-program continuity plan'].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <span
                        className="material-symbols-outlined shrink-0"
                        style={{ fontSize: '16px', color: '#ff7a32' }}
                      >
                        check_circle
                      </span>
                      <span className="font-body text-body-sm" style={{ color: 'rgba(255,248,243,0.8)' }}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
                <Link href="/academy" className="btn-primary justify-center mt-2">
                  Explore the cohort
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                    arrow_forward
                  </span>
                </Link>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div>
                <p className="section-label mb-4">Proof</p>
                <h2
                  className="font-headline font-bold text-4xl lg:text-5xl leading-tight"
                  style={{ color: '#001215', letterSpacing: '-0.02em' }}
                >
                  We have done this transition at scale before.
                </h2>
              </div>

              <p
                className="font-body text-lg leading-relaxed"
                style={{ color: '#2d4a4d' }}
              >
                After the 2008 financial crisis, Philippe Kung co-led a government-funded
                program that moved hundreds of displaced professionals into high-demand tech
                roles. AI is now creating the same transition at far greater speed.
              </p>

              <div className="research-note">
                <p className="font-body text-body-md leading-relaxed" style={{ color: '#2d4a4d' }}>
                  &ldquo;AI is creating the same workforce transition at 100x speed. The companies
                  that win will be the ones that bridge technology and people.&rdquo;
                </p>
                <p className="font-body text-body-sm mt-3 font-semibold" style={{ color: '#001215' }}>
                  - Philippe Kung, Founder, Clinic of AI
                </p>
              </div>

              <Link href="/about" className="btn-outlined self-start">
                Read the full background
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
              </Link>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              {[
                { year: '2008', label: 'Government reskilling program', desc: 'Co-led a national transition program that moved hundreds into tech roles.' },
                { year: '2020', label: 'Head of Data and AI, Crayon AG', desc: 'Led AI strategy across hospitality, energy, and manufacturing operations.' },
                { year: '2024', label: 'Clinic of AI founded', desc: 'Forward Deployed AI Engineering model for mid-market companies.' },
              ].map((item, i) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="w-10 h-10 hex-clip flex items-center justify-center"
                      style={{ backgroundColor: i === 2 ? '#a14000' : '#001215' }}
                    >
                      <span
                        className="font-label text-xs font-bold"
                        style={{ color: '#fff8f3', letterSpacing: 0 }}
                      >
                        {item.year.slice(2)}
                      </span>
                    </div>
                    {i < 2 && (
                      <div
                        className="w-px flex-1 mt-2"
                        style={{ height: '2rem', backgroundColor: 'rgba(0,18,21,0.12)' }}
                      />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="section-label mb-1">{item.year}</p>
                    <p
                      className="font-headline font-bold text-lg leading-snug mb-1"
                      style={{ color: '#001215' }}
                    >
                      {item.label}
                    </p>
                    <p className="font-body text-body-sm leading-relaxed" style={{ color: '#2d4a4d' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-32"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-narrow mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-6">Final CTA</p>
          <h2
            className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-balance"
            style={{ color: '#001215', letterSpacing: '-0.02em' }}
          >
            20 minutes. No pitch deck.
          </h2>
          <p
            className="font-body text-lg leading-relaxed mb-10"
            style={{ color: '#2d4a4d' }}
          >
            We will tell you in 5 minutes if we can help. The other 15 minutes are yours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/contact" className="btn-primary">
              Book a conversation
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                arrow_forward
              </span>
            </Link>
            <Link href="/industries" className="btn-outlined">
              See industry solutions
            </Link>
          </div>
          <p
            className="font-headline italic text-lg"
            style={{ color: '#2d4a4d' }}
          >
            &ldquo;Forward deployed. Side by side. Until it works.&rdquo;
          </p>
        </div>
      </section>
    </>
  )
}