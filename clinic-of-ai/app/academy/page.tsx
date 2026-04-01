'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { submitWaitlist } from '@/app/actions/submitWaitlist'

const courses = [
  {
    id: 'cognitive',
    icon: 'psychology',
    title: 'Cognitive Frameworks for AI',
    level: 'Foundation',
    modules: 8,
    description:
      'Develop the mental models required to work effectively alongside AI systems. Learn probabilistic thinking, how to evaluate AI outputs critically, and how to make decisions in high-uncertainty environments.',
    topics: [
      'Bayesian reasoning in practice',
      'Recognizing AI failure modes',
      'Prompt engineering as a thinking discipline',
      'Building personal AI workflows',
    ],
    highlight: false,
  },
  {
    id: 'datalakes',
    icon: 'storage',
    title: 'Architecting Data Lakes',
    level: 'Advanced',
    modules: 12,
    description:
      'From raw ingestion to production-grade pipelines. Build the data infrastructure that makes AI systems possible — and the governance frameworks that keep them trustworthy.',
    topics: [
      'Data lake design patterns',
      'Vector stores and embeddings',
      'ETL pipelines for AI workloads',
      'Data governance and quality frameworks',
    ],
    highlight: true,
  },
  {
    id: 'ethics',
    icon: 'balance',
    title: 'Generative Ethics',
    level: 'Practitioner',
    modules: 6,
    description:
      'Navigate the governance, legal, and ethical dimensions of deploying AI in organizational contexts. Build internal frameworks for responsible AI development that withstand scrutiny.',
    topics: [
      'EU AI Act and regulatory landscape',
      'Bias detection and mitigation',
      'AI incident response frameworks',
      'Communicating AI decisions to stakeholders',
    ],
    highlight: false,
  },
]

const faqs = [
  {
    question: 'Who is the Academy designed for?',
    answer:
      'The Academy is designed for professionals at all levels who want to develop genuine AI capability — not just tool familiarity. This includes executives who need strategic fluency, managers who need to lead AI-adjacent teams, and individual contributors who want to future-proof their careers.',
  },
  {
    question: 'Are the courses self-paced or live?',
    answer:
      'The founding cohort includes a blend of self-paced content and live sessions with Philippe. Live sessions allow for real-time Q&A, case study discussion, and community building. Recordings are made available for all cohort members.',
  },
  {
    question: 'What is the time commitment?',
    answer:
      'Each course requires approximately 4 to 6 hours per week over 8 to 12 weeks. The full Academy experience (all three courses) is designed to be completed over a six-month period without interfering with full-time professional commitments.',
  },
  {
    question: 'Will I receive a certificate?',
    answer:
      'Yes. Completion of each course grants a verifiable digital certificate. Completing all three courses and passing the integrated assessment grants the Clinic of AI Practitioner designation.',
  },
  {
    question: 'When does the founding cohort begin?',
    answer:
      'The founding cohort is scheduled to begin in Q3 2025. Waitlist members receive priority enrollment, founding pricing, and early access to pre-course materials.',
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
      {/* ── HERO ── */}
      <section
        className="pt-32 pb-24 relative grid-watermark overflow-hidden"
        style={{ backgroundColor: '#fff8f3' }}
      >
        {/* Decorative blob */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ backgroundColor: 'rgba(161,64,0,0.04)' }}
          aria-hidden="true"
        />
        <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="section-label mb-5">The Academy</p>
            <h1
              className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8 text-balance"
              style={{ color: '#001215', letterSpacing: '-0.02em' }}
            >
              The AI Academy is open.
            </h1>
            <p
              className="font-body text-lg leading-relaxed mb-10"
              style={{ color: '#2d4a4d' }}
            >
              The Clinic of AI Academy is where professionals transform from AI-adjacent to AI-capable. Three deep courses. A founding community. The intellectual toolkit for the decade ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('waitlist')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
              >
                Join Waitlist
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
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENTO SHOWCASE ── */}
      <section
        className="py-16"
        style={{ backgroundColor: '#fff5e8' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'school', label: '3 Courses', sub: 'Comprehensive curriculum' },
              { icon: 'groups', label: '50 Seats', sub: 'Founding cohort' },
              { icon: 'verified', label: 'Certificate', sub: 'Verifiable digital' },
              { icon: 'live_tv', label: 'Live Sessions', sub: 'With Philippe' },
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

      {/* ── COURSES ── */}
      <section
        id="courses"
        className="py-24"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Curriculum</p>
            <h2
              className="font-headline font-bold text-3xl lg:text-4xl"
              style={{ color: '#001215', letterSpacing: '-0.01em' }}
            >
              Three courses. One transformation.
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
                  {/* Icon + badges */}
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

                  {/* Title + desc */}
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

                  {/* Topics */}
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

      {/* ── GAMIFIED INTELLIGENCE TEASER ── */}
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
                Coming Soon
              </p>
              <h2
                className="font-headline font-bold text-3xl lg:text-4xl leading-tight mb-6"
                style={{ color: '#fff8f3' }}
              >
                Gamified Intelligence: Learning by Doing.
              </h2>
              <p
                className="font-body text-body-md leading-relaxed mb-8"
                style={{ color: 'rgba(255,248,243,0.65)' }}
              >
                We are building the most sophisticated AI learning environment ever created — where professionals solve real organizational challenges using AI tools in a safe, scored, and iterative environment. Challenges, leaderboards, team scenarios, and live case studies.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Real-world organizational case challenges',
                  'Team-based AI problem-solving scenarios',
                  'Scored assessments with instant feedback',
                  'Leaderboards and community recognition',
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

            {/* Teaser visual */}
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
                    sports_esports
                  </span>
                </div>
                <p
                  className="font-headline font-bold text-2xl"
                  style={{ color: '#fff8f3' }}
                >
                  Gamified Intelligence
                </p>
                <p
                  className="font-body text-body-sm"
                  style={{ color: 'rgba(255,248,243,0.5)' }}
                >
                  Beta launching with founding cohort
                </p>
                <div
                  className="w-full h-px"
                  style={{ backgroundColor: 'rgba(255,248,243,0.08)' }}
                />
                <div className="grid grid-cols-3 gap-4 w-full">
                  {['Challenges', 'Leaderboards', 'Teams'].map((item) => (
                    <div key={item} className="text-center">
                      <span
                        className="material-symbols-outlined block mb-2"
                        style={{ fontSize: '22px', color: 'rgba(255,248,243,0.3)' }}
                      >
                        {item === 'Challenges' ? 'bolt' : item === 'Leaderboards' ? 'leaderboard' : 'group'}
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

      {/* ── WAITLIST FORM ── */}
      <section
        id="waitlist"
        className="py-24"
        style={{ backgroundColor: '#fff5e8' }}
      >
        <div className="max-w-narrow mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Join Waitlist</p>
          <h2
            className="font-headline font-bold text-3xl lg:text-4xl mb-5"
            style={{ color: '#001215', letterSpacing: '-0.01em' }}
          >
            Reserve your place in the founding cohort.
          </h2>
          <p
            className="font-body text-body-md leading-relaxed mb-10"
            style={{ color: '#2d4a4d' }}
          >
            Founding members receive priority enrollment, founding pricing (up to 40% below public pricing), and early access to pre-course materials. 50 seats only.
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
                  ? 'This email is already registered. We will be in touch when the cohort opens.'
                  : 'We will be in touch when the founding cohort opens. Watch your inbox.'}
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
                {isPending ? 'Submitting…' : 'Join Waitlist — 50 Seats'}
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

      {/* ── FAQ ── */}
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
