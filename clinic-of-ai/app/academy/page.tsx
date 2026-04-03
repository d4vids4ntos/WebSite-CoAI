'use client'

import { useState, useTransition } from 'react'
import { submitWaitlist } from '@/app/actions/submitWaitlist'

const courses = [
  {
    id: 'opportunity-mapping',
    icon: 'hub',
    title: 'Week 1-2: Opportunity Mapping',
    level: 'Executive',
    modules: 2,
    description:
      'Map the 3 highest-leverage AI opportunities in your operation based on workflow reality, not org-chart assumptions.',
    topics: [
      'Workflow diagnostics by team',
      'Decision-point analysis',
      'ROI potential ranking',
      'Priority sequence definition',
    ],
    highlight: false,
  },
  {
    id: 'embedded-implementation',
    icon: 'build',
    title: 'Week 3-4: Embedded Implementation',
    level: 'Hands-on',
    modules: 2,
    description:
      'Implement selected use cases in live operations with side-by-side delivery so leadership and frontline teams see direct impact quickly.',
    topics: [
      'Pilot build in real workflow context',
      'Operational adoption loops',
      'KPI tracking and iteration',
      'Cross-functional execution rhythm',
    ],
    highlight: true,
  },
  {
    id: 'continuity-transfer',
    icon: 'groups',
    title: 'Week 5: Capability Transfer',
    level: 'Leadership',
    modules: 1,
    description:
      'Build governance, ownership, and continuity so the solution runs without ongoing external dependency.',
    topics: [
      'Ownership model and governance',
      'Team enablement playbook',
      'Risk and security guardrails',
      '90-day continuity roadmap',
    ],
    highlight: false,
  },
]

const faqs = [
  {
    question: 'Who is this cohort for?',
    answer:
      'This program is designed for executive teams and functional leaders in hospitality and service operations who are done experimenting and want measurable implementation outcomes.',
  },
  {
    question: 'Is this a theory-based AI course?',
    answer:
      'No. It is an implementation program. We work on your specific operational workflows and deliver practical outcomes during the 5-week window.',
  },
  {
    question: 'How large is each cohort?',
    answer:
      'Each cohort is limited to 8-12 executives to ensure depth, speed, and hands-on execution quality.',
  },
  {
    question: 'What does my team receive at the end?',
    answer:
      'You leave with implemented workflow improvements, a capability transfer plan, and a continuity roadmap so internal teams can keep momentum.',
  },
  {
    question: 'When does the next cohort start?',
    answer:
      'Start dates are released directly to waitlist members. Priority is given to teams ready for immediate implementation.',
  },
]

export default function AcademyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [duplicate, setDuplicate] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setError(null)
    startTransition(async () => {
      const result = await submitWaitlist(email)
      if (result.success) {
        setDuplicate(result.duplicate ?? false)
        setSubmitted(true)
      } else {
        setError(result.error ?? 'Something went wrong. Please try again.')
      }
    })
  }

  return (
    <>
      <section
        className="pt-32 pb-24 relative grid-watermark overflow-hidden"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ backgroundColor: 'rgba(161,64,0,0.04)' }}
          aria-hidden="true"
        />
        <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="section-label mb-5">Industry Executive Cohort</p>
            <h1
              className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8 text-balance"
              style={{ color: '#001215', letterSpacing: '-0.02em' }}
            >
              AI in Hospitality: 5 weeks for executives who are done experimenting.
            </h1>
            <p
              className="font-body text-lg leading-relaxed mb-10"
              style={{ color: '#2d4a4d' }}
            >
              This is not a generic AI course. It is a focused implementation program for your
              operation: identify priorities, implement in workflow, and build internal capability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('waitlist')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
              >
                Reserve cohort conversation
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  arrow_downward
                </span>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('courses')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary"
              >
                Explore program
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16"
        style={{ backgroundColor: '#fff5e8' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'schedule', label: '5 Weeks', sub: 'Intensive delivery format' },
              { icon: 'groups', label: '8-12 Seats', sub: 'Executive-only cohorts' },
              { icon: 'build', label: 'Live Implementation', sub: 'In your real workflows' },
              { icon: 'verified', label: 'Continuity Plan', sub: 'Ownership beyond the program' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-6 text-center"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 16px rgba(0,18,21,0.04)',
                }}
              >
                <span
                  className="material-symbols-outlined block mb-3"
                  style={{ fontSize: '28px', color: '#a14000' }}
                >
                  {item.icon}
                </span>
                <p
                  className="font-headline font-bold text-lg mb-1"
                  style={{ color: '#001215' }}
                >
                  {item.label}
                </p>
                <p
                  className="font-body text-body-sm"
                  style={{ color: '#2d4a4d' }}
                >
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="courses"
        className="py-24"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Program Structure</p>
            <h2
              className="font-headline font-bold text-3xl lg:text-4xl"
              style={{ color: '#001215', letterSpacing: '-0.01em' }}
            >
              Three blocks. One operational result.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {courses.map((course) => (
              <div
                key={course.id}
                className="rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden"
                style={{
                  backgroundColor: course.highlight ? '#002a2e' : '#ffffff',
                  boxShadow: course.highlight
                    ? '0 20px 60px rgba(0,18,21,0.15)'
                    : '0 4px 16px rgba(0,18,21,0.04)',
                  border: course.highlight ? 'none' : '1px solid rgba(200,168,130,0.15)',
                }}
              >
                {course.highlight && (
                  <div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
                    style={{ backgroundColor: '#a14000' }}
                    aria-hidden="true"
                  />
                )}

                <div className="relative z-10 flex flex-col gap-5 flex-1">
                  <div className="flex items-start justify-between">
                    <div
                      className="w-12 h-12 hex-clip flex items-center justify-center"
                      style={{ backgroundColor: course.highlight ? '#a14000' : '#001215' }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: '20px', color: '#fff8f3' }}
                      >
                        {course.icon}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap justify-end">
                      <span
                        className="font-label text-xs px-2 py-1 rounded-md"
                        style={{
                          backgroundColor: course.highlight
                            ? 'rgba(255,248,243,0.1)'
                            : 'rgba(0,18,21,0.06)',
                          color: course.highlight ? 'rgba(255,248,243,0.7)' : '#2d4a4d',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {course.modules} modules
                      </span>
                      <span
                        className="font-label text-xs px-2 py-1 rounded-md"
                        style={{
                          backgroundColor: course.highlight
                            ? 'rgba(161,64,0,0.3)'
                            : 'rgba(161,64,0,0.08)',
                          color: course.highlight ? '#ff7a32' : '#a14000',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3
                      className="font-headline font-bold text-xl mb-3"
                      style={{ color: course.highlight ? '#fff8f3' : '#001215' }}
                    >
                      {course.title}
                    </h3>
                    <p
                      className="font-body text-body-sm leading-relaxed"
                      style={{
                        color: course.highlight ? 'rgba(255,248,243,0.7)' : '#2d4a4d',
                      }}
                    >
                      {course.description}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2 flex-1">
                    {course.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2.5">
                        <span
                          className="material-symbols-outlined shrink-0 mt-0.5"
                          style={{
                            fontSize: '14px',
                            color: course.highlight ? '#ff7a32' : '#a14000',
                          }}
                        >
                          check_small
                        </span>
                        <span
                          className="font-body text-body-sm"
                          style={{
                            color: course.highlight
                              ? 'rgba(255,248,243,0.75)'
                              : '#2d4a4d',
                          }}
                        >
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{ backgroundColor: '#001215' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="font-label text-xs uppercase mb-4 font-semibold"
                style={{ color: '#ff7a32', letterSpacing: '0.15em' }}
              >
                Team Lead
              </p>
              <h2
                className="font-headline font-bold text-3xl lg:text-4xl leading-tight mb-6"
                style={{ color: '#fff8f3' }}
              >
                Led by Philippe Kung, former Head of Data and AI at Crayon AG.
              </h2>
              <p
                className="font-body text-body-md leading-relaxed mb-8"
                style={{ color: 'rgba(255,248,243,0.65)' }}
              >
                Program design draws on enterprise deployment experience, hospitality domain
                expertise, and workforce transition experience from government-scale programs.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Hospitality-first operational framing',
                  'Enterprise deployment background',
                  'Executive alignment plus frontline adoption',
                  'Continuity architecture beyond pilot stage',
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined shrink-0"
                      style={{ fontSize: '16px', color: '#ff7a32' }}
                    >
                      stars
                    </span>
                    <span className="font-body text-body-sm" style={{ color: 'rgba(255,248,243,0.75)' }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, #002a2e 0%, #001022 100%)',
                border: '1px solid rgba(255,248,243,0.08)',
              }}
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div
                  className="w-20 h-20 hex-clip flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(161,64,0,0.25)' }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '36px', color: '#ff7a32' }}
                  >
                    groups
                  </span>
                </div>
                <p
                  className="font-headline font-bold text-2xl"
                  style={{ color: '#fff8f3' }}
                >
                  Executive Cohort
                </p>
                <p
                  className="font-body text-body-sm"
                  style={{ color: 'rgba(255,248,243,0.5)' }}
                >
                  Company-sponsored format for 8-12 leaders
                </p>
                <div
                  className="w-full h-px"
                  style={{ backgroundColor: 'rgba(255,248,243,0.08)' }}
                />
                <div className="grid grid-cols-3 gap-4 w-full">
                  {['Map', 'Build', 'Transfer'].map((item) => (
                    <div key={item} className="text-center">
                      <span
                        className="material-symbols-outlined block mb-2"
                        style={{ fontSize: '22px', color: 'rgba(255,248,243,0.3)' }}
                      >
                        {item === 'Map' ? 'travel_explore' : item === 'Build' ? 'construction' : 'done_all'}
                      </span>
                      <p
                        className="font-label text-xs"
                        style={{ color: 'rgba(255,248,243,0.4)', letterSpacing: '0.08em' }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="waitlist"
        className="py-24"
        style={{ backgroundColor: '#fff5e8' }}
      >
        <div className="max-w-narrow mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Reserve Conversation</p>
          <h2
            className="font-headline font-bold text-3xl lg:text-4xl mb-5"
            style={{ color: '#001215', letterSpacing: '-0.01em' }}
          >
            Join the executive cohort waitlist.
          </h2>
          <p
            className="font-body text-body-md leading-relaxed mb-10"
            style={{ color: '#2d4a4d' }}
          >
            Waitlist members get priority scheduling for upcoming cohorts and early access to
            program briefing details.
          </p>

          {submitted ? (
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 12px 40px rgba(0,18,21,0.06)',
              }}
            >
              <span
                className="material-symbols-outlined block mb-4"
                style={{ fontSize: '48px', color: '#a14000' }}
              >
                check_circle
              </span>
              <h3
                className="font-headline font-bold text-2xl mb-3"
                style={{ color: '#001215' }}
              >
                {duplicate ? 'Already on the list.' : 'You are on the list.'}
              </h3>
              <p className="font-body text-body-md" style={{ color: '#2d4a4d' }}>
                {duplicate
                  ? 'This email is already registered. We will be in touch when the next cohort opens.'
                  : 'We will be in touch with upcoming cohort dates and next steps.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-6">
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field text-center"
                  aria-label="Email address for waitlist"
                />
              </div>
              {error && (
                <p
                  className="font-body text-body-sm text-center mb-4 px-4 py-3 rounded-xl"
                  style={{
                    color: '#a14000',
                    backgroundColor: 'rgba(161,64,0,0.06)',
                    border: '1px solid rgba(161,64,0,0.15)',
                  }}
                >
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={isPending}
                className="btn-primary w-full justify-center"
                style={{ opacity: isPending ? 0.6 : 1, cursor: isPending ? 'not-allowed' : 'pointer' }}
              >
                {isPending ? 'Submitting...' : 'Join waitlist'}
                {!isPending && (
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    arrow_forward
                  </span>
                )}
              </button>
              <p
                className="font-body text-body-sm mt-4"
                style={{ color: 'rgba(45,74,77,0.5)' }}
              >
                No spam. No third-party sharing. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </section>

      <section
        className="py-24"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-narrow mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-4">FAQ</p>
            <h2
              className="font-headline font-bold text-3xl lg:text-4xl"
              style={{ color: '#001215', letterSpacing: '-0.01em' }}
            >
              Common questions.
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,18,21,0.04)',
                }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span
                    className="font-body font-semibold text-body-md pr-6"
                    style={{ color: '#001215' }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="material-symbols-outlined shrink-0 transition-transform duration-200"
                    style={{
                      fontSize: '20px',
                      color: '#a14000',
                      transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    expand_more
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p
                      className="font-body text-body-md leading-relaxed"
                      style={{ color: '#2d4a4d' }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}