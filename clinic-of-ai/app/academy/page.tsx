'use client'

import { useEffect, useState, useTransition } from 'react'
import Link from 'next/link'
import { submitWaitlist } from '@/app/actions/submitWaitlist'
import SplitText from '@/components/animations/SplitText'
import TextType from '@/components/animations/TextType'
import Icon from '@/components/icons/Icon'
import { trackEvent } from '@/lib/analytics'

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
  const [website, setWebsite] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [duplicate, setDuplicate] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (!submitted) {
      return
    }

    if (duplicate) {
      trackEvent('goal_waitlist_duplicate', { source: 'academy' })
      return
    }

    trackEvent('goal_waitlist_submitted', { source: 'academy' })
  }, [duplicate, submitted])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setError(null)
    startTransition(async () => {
      const result = await submitWaitlist(email, website)
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
              className="page-title mb-8"
              style={{ color: '#3d4a5c', letterSpacing: '-0.02em' }}
            >
              <TextType
                text="AI in Hospitality: 5 weeks for executives who are done experimenting."
                as="span"
                typingSpeed={40}
                loop={false}
                showCursor={true}
                cursorCharacter="|"
                startOnVisible={true}
                className=""
              />
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
                type="button"
                className="btn-primary"
              >
                Reserve cohort conversation
                <Icon name="arrow_downward" style={{ fontSize: '18px' }} />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('courses')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                type="button"
                className="btn-secondary"
              >
                Explore program
              </button>
            </div>
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
            <div className="overflow-hidden">
              <SplitText
                text="Three blocks. One operational result."
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {courses.map((course) => (
              <div
                key={course.id}
                className="rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden"
                style={{
                  backgroundColor: course.highlight ? '#5b6b7e' : '#ffffff',
                  boxShadow: course.highlight
                    ? '0 20px 60px rgba(61,74,92,0.15)'
                    : '0 4px 16px rgba(61,74,92,0.04)',
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
                    <div className="flex items-center gap-2 flex-wrap justify-end">
                      <span
                        className="font-label text-xs px-2 py-1 rounded-md"
                        style={{
                          backgroundColor: course.highlight
                            ? 'rgba(255,248,243,0.1)'
                            : 'rgba(61,74,92,0.06)',
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
                      style={{ color: course.highlight ? '#fff8f3' : '#3d4a5c' }}
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
                        <Icon
                          name="check_small"
                          className="shrink-0 mt-0.5"
                          style={{
                            fontSize: '14px',
                            color: course.highlight ? '#ff7a32' : '#a14000',
                          }}
                        />
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
        className="py-10"
        style={{ backgroundColor: '#3d4a5c', borderTop: '1px solid rgba(255,248,243,0.06)' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-body-md" style={{ color: 'rgba(255,248,243,0.65)' }}>
              <span className="font-label text-xs font-semibold uppercase" style={{ color: '#ff7a32', letterSpacing: '0.15em' }}>Team Lead</span>
              <span style={{ color: 'rgba(255,248,243,0.2)' }}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              Led by Philippe Kung, former Head of Data and AI at Crayon AG.
            </p>
            <Link href="/about" className="btn-primary whitespace-nowrap shrink-0">
              Meet the team
              <Icon name="arrow_forward" style={{ fontSize: '16px' }} />
            </Link>
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
          <div className="overflow-hidden mb-5">
            <SplitText
              text="Join the executive cohort waitlist."
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
                boxShadow: '0 12px 40px rgba(61,74,92,0.06)',
              }}
              role="status"
              aria-live="polite"
            >
              <Icon
                name="check_circle"
                className="block mb-4"
                style={{ fontSize: '48px', color: '#a14000' }}
              />
              <h3
                className="font-headline font-bold text-2xl mb-3"
                style={{ color: '#3d4a5c' }}
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
                <label
                  htmlFor="waitlist-website"
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: 'hidden',
                    clip: 'rect(0,0,0,0)',
                    whiteSpace: 'nowrap',
                    border: 0,
                  }}
                >
                  Company Website
                </label>
                <input
                  id="waitlist-website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: 'hidden',
                    clip: 'rect(0,0,0,0)',
                    whiteSpace: 'nowrap',
                    border: 0,
                  }}
                />

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
                  role="alert"
                  aria-live="polite"
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
                  <Icon name="arrow_forward" style={{ fontSize: '18px' }} />
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
            <div className="overflow-hidden">
              <SplitText
                text="Common questions."
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

          <div className="flex flex-col gap-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(61,74,92,0.04)',
                }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                >
                  <span
                    className="font-body font-semibold text-body-md pr-6"
                    style={{ color: '#3d4a5c' }}
                  >
                    {faq.question}
                  </span>
                  <Icon
                    name="expand_more"
                    className="shrink-0 transition-transform duration-200"
                    style={{
                      fontSize: '20px',
                      color: '#a14000',
                      transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                {openFaq === index && (
                  <div
                    id={`faq-panel-${index}`}
                    className="px-6 pb-6"
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                  >
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
