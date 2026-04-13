'use client'

import { useEffect, useState, useTransition } from 'react'
import Link from 'next/link'
import { submitBooking } from '@/app/actions/submitBooking'
import SplitText from '@/components/animations/SplitText'
import Icon from '@/components/icons/Icon'
import { trackEvent } from '@/lib/analytics'

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const CALENDAR_DAYS = [
  { day: null }, { day: null }, { day: 1, available: false }, { day: 2, available: true },
  { day: 3, available: true }, { day: 4, available: false }, { day: 5, available: false },
  { day: 6, available: false }, { day: 7, available: false }, { day: 8, available: true },
  { day: 9, available: true }, { day: 10, available: true }, { day: 11, available: false },
  { day: 12, available: false }, { day: 13, available: false }, { day: 14, available: false },
  { day: 15, available: true }, { day: 16, available: true }, { day: 17, available: true },
  { day: 18, available: false }, { day: 19, available: false }, { day: 20, available: false },
  { day: 21, available: false }, { day: 22, available: true }, { day: 23, available: true },
  { day: 24, available: true }, { day: 25, available: false }, { day: 26, available: false },
  { day: 27, available: false }, { day: 28, available: false }, { day: 29, available: true },
  { day: 30, available: true }, { day: 31, available: false }, { day: null }, { day: null },
]

const TIME_SLOTS = ['09:00', '11:30', '14:00', '16:30']

const FOCUS_OPTIONS = [
  'AI Opportunity Audit',
  'Forward Deployed Implementation',
  'Industry Executive Cohort',
  'Hospitality Operations',
  'Manufacturing Operations',
  'Other',
]

export default function ContactPage() {
  const [selectedDay, setSelectedDay] = useState<number | null>(15)
  const [selectedTime, setSelectedTime] = useState<string>('11:30')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [focus, setFocus] = useState(FOCUS_OPTIONS[0])
  const [website, setWebsite] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [step, setStep] = useState(1)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (!submitted) {
      return
    }

    trackEvent('goal_booking_submitted', {
      focus,
      time_slot: selectedTime,
    })
  }, [focus, selectedTime, submitted])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedDay || !selectedTime || !name.trim() || !email.trim() || !company.trim()) return
    setError(null)
    startTransition(async () => {
      const result = await submitBooking({
        name,
        email,
        company,
        session_focus: focus,
        booking_date: `April ${selectedDay}, 2026`,
        booking_time: selectedTime,
        website,
      })
      if (result.success) {
        setSubmitted(true)
      } else {
        setError(result.error ?? 'Something went wrong. Please try again.')
      }
    })
  }

  return (
    <>
      <section
        className="pt-20 pb-10 grid-watermark"
        style={{ backgroundColor: '#fff8f3' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 py-4 lg:py-6">

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div
                className="absolute top-24 left-0 w-48 h-48 pointer-events-none"
                aria-hidden="true"
                style={{ opacity: 0.05 }}
              >
                <svg viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 L0 96 L64 96 L64 32 L128 32 L128 0" stroke="#001215" strokeWidth="1" fill="none" />
                  <circle cx="64" cy="96" r="4" fill="#a14000" />
                </svg>
              </div>

              <p
                className="font-label text-xs font-semibold uppercase"
                style={{ color: '#a14000', letterSpacing: '0.3em' }}
              >
                20 Minutes. No Pitch Deck.
              </p>

              <div className="overflow-hidden">
                <SplitText
                  text="Book a 20-minute conversation about your operation"
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
                  text="This is a structured operational conversation, not a sales call. We will tell you in 5 minutes whether we can help and where the highest-leverage opportunities are in your value chain."
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

              <div
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl self-start"
                style={{
                  backgroundColor: 'rgba(0,42,46,0.06)',
                  border: '1px solid rgba(0,42,46,0.1)',
                }}
              >
                <Icon name="verified" style={{ fontSize: '18px', color: '#a14000' }} />
                <span className="font-body text-body-sm" style={{ color: '#001215' }}>
                  Working with teams across Europe.
                </span>
              </div>

              <div className="flex flex-col gap-4 mt-2">
                <p
                  className="font-label text-xs uppercase font-semibold"
                  style={{ color: 'rgba(45,74,77,0.5)', letterSpacing: '0.1em' }}
                >
                  What to expect
                </p>
                {[
                  { icon: 'travel_explore', text: 'Workflow and bottleneck review' },
                  { icon: 'map', text: 'Top 3 opportunity mapping' },
                  { icon: 'construction', text: 'Implementation fit assessment' },
                  { icon: 'price_check', text: 'Clear next steps, no pressure' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <Icon name={item.icon} className="shrink-0" style={{ fontSize: '18px', color: '#a14000' }} />
                    <span className="font-body text-body-sm" style={{ color: '#2d4a4d' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              {submitted ? (
                <div
                  className="rounded-2xl p-12 text-center"
                  style={{
                    backgroundColor: '#ffffff',
                    boxShadow: '0 20px 60px rgba(0,18,21,0.08)',
                    border: '1px solid rgba(200,168,130,0.15)',
                  }}
                  role="status"
                  aria-live="polite"
                >
                  <div
                    className="w-20 h-20 hex-clip flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: '#a14000' }}
                  >
                    <Icon name="check" style={{ fontSize: '36px', color: '#fff' }} />
                  </div>
                  <h2
                    className="font-headline font-bold text-3xl mb-4"
                    style={{ color: '#001215' }}
                  >
                    Conversation Scheduled.
                  </h2>
                  <p className="font-body text-body-md mb-3" style={{ color: '#2d4a4d' }}>
                    Your session is scheduled for{' '}
                    <strong style={{ color: '#001215' }}>
                      April {selectedDay}, 2026 at {selectedTime}
                    </strong>
                    .
                  </p>
                  <p className="font-body text-body-sm mb-8" style={{ color: '#2d4a4d' }}>
                    A calendar invitation and prep note will arrive in your inbox shortly. We look forward to speaking with you, {name.split(' ')[0]}.
                  </p>
                  <Link href="/" className="btn-primary">
                    Return Home
                    <Icon name="arrow_forward" style={{ fontSize: '18px' }} />
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: '#ffffff',
                    boxShadow: '0 20px 60px rgba(0,18,21,0.08)',
                    border: '1px solid rgba(200,168,130,0.15)',
                  }}
                >
                  <div
                    className="px-6 py-4"
                    style={{ borderBottom: '1px solid rgba(200,168,130,0.12)' }}
                  >
                    <div className="flex items-center justify-between">
                      <h2
                        className="font-headline font-bold text-xl"
                        style={{ color: '#001215' }}
                      >
                        Book your 20-minute session
                      </h2>
                      <div className="flex items-center gap-1.5">
                        {[1, 2, 3].map((s) => (
                          <div
                            key={s}
                            className="w-2 h-2 rounded-full transition-colors duration-200"
                            style={{
                              backgroundColor:
                                s <= step ? '#a14000' : 'rgba(200,168,130,0.3)',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-7">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-7 h-7 rounded-md flex items-center justify-center font-label text-xs font-bold"
                          style={{
                            backgroundColor:
                              step >= 1 ? '#a14000' : 'rgba(200,168,130,0.2)',
                            color: step >= 1 ? '#fff' : '#c8a882',
                          }}
                        >
                          01
                        </div>
                        <p
                          className="font-body font-semibold text-body-md"
                          style={{ color: '#001215' }}
                        >
                          Select date
                        </p>
                        <span
                          className="font-label text-xs ml-auto"
                          style={{ color: 'rgba(45,74,77,0.4)', letterSpacing: '0.08em' }}
                        >
                          April 2026
                        </span>
                      </div>

                      <div className="w-full">
                        <div className="grid grid-cols-7 gap-0.5 mb-0.5">
                          {DAYS_OF_WEEK.map((d) => (
                            <div
                              key={d}
                              className="text-center py-0.5 font-label text-[10px]"
                              style={{ color: 'rgba(45,74,77,0.4)', letterSpacing: '0.05em' }}
                            >
                              {d}
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-7 gap-0.5">
                          {CALENDAR_DAYS.map((cell, idx) => {
                            if (!cell.day) {
                              return <div key={`empty-${idx}`} />
                            }
                            const isSelected = selectedDay === cell.day
                            const isAvailable = cell.available

                            return (
                              <button
                                key={cell.day}
                                type="button"
                                disabled={!isAvailable}
                                onClick={() => {
                                  if (isAvailable) {
                                    setSelectedDay(cell.day as number)
                                    setStep(Math.max(step, 2))
                                  }
                                }}
                                className="w-full h-10 flex items-center justify-center rounded-md font-body text-xs font-medium transition-all duration-150"
                                aria-label={`April ${cell.day}, 2026${isAvailable ? '' : ' unavailable'}`}
                                aria-pressed={isSelected}
                                style={{
                                  backgroundColor: isSelected
                                    ? '#a14000'
                                    : isAvailable
                                    ? '#fff5e8'
                                    : 'transparent',
                                  color: isSelected
                                    ? '#ffffff'
                                    : isAvailable
                                    ? '#001215'
                                    : 'rgba(45,74,77,0.25)',
                                  cursor: isAvailable ? 'pointer' : 'default',
                                }}
                              >
                                {cell.day}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {selectedDay && (
                        <p
                          className="font-body text-xs mt-2"
                          style={{ color: '#2d4a4d' }}
                        >
                          Selected: April {selectedDay}, 2026
                        </p>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-7 h-7 rounded-md flex items-center justify-center font-label text-xs font-bold"
                          style={{
                            backgroundColor:
                              step >= 2 ? '#a14000' : 'rgba(200,168,130,0.2)',
                            color: step >= 2 ? '#fff' : '#c8a882',
                          }}
                        >
                          02
                        </div>
                        <p
                          className="font-body font-semibold text-body-md"
                          style={{ color: '#001215' }}
                        >
                          Select time
                        </p>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {TIME_SLOTS.map((slot) => {
                          const isSelected = selectedTime === slot
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => {
                                setSelectedTime(slot)
                                setStep(Math.max(step, 3))
                              }}
                              className="py-2.5 px-3 rounded-xl font-body font-semibold text-body-sm transition-all duration-200"
                              aria-label={`Select ${slot}`}
                              aria-pressed={isSelected}
                              style={{
                                backgroundColor: isSelected ? '#a14000' : '#fff5e8',
                                color: isSelected ? '#ffffff' : '#001215',
                                boxShadow: isSelected
                                  ? '0 4px 12px rgba(161,64,0,0.25)'
                                  : 'none',
                              }}
                            >
                              {slot}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-7 h-7 rounded-md flex items-center justify-center font-label text-xs font-bold"
                          style={{
                            backgroundColor:
                              step >= 3 ? '#a14000' : 'rgba(200,168,130,0.2)',
                            color: step >= 3 ? '#fff' : '#c8a882',
                          }}
                        >
                          03
                        </div>
                        <p
                          className="font-body font-semibold text-body-md"
                          style={{ color: '#001215' }}
                        >
                          Your details
                        </p>
                      </div>

                      <div className="flex flex-col gap-4">
                        <div>
                          <label
                            htmlFor="contact-website"
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
                            id="contact-website"
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
                        </div>

                        <div>
                          <label
                            htmlFor="contact-name"
                            className="font-label text-xs uppercase font-semibold block mb-2"
                            style={{ color: 'rgba(45,74,77,0.5)', letterSpacing: '0.08em' }}
                          >
                            Full Name
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input-field"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contact-email"
                            className="font-label text-xs uppercase font-semibold block mb-2"
                            style={{ color: 'rgba(45,74,77,0.5)', letterSpacing: '0.08em' }}
                          >
                            Work Email
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contact-company"
                            className="font-label text-xs uppercase font-semibold block mb-2"
                            style={{ color: 'rgba(45,74,77,0.5)', letterSpacing: '0.08em' }}
                          >
                            Company
                          </label>
                          <input
                            id="contact-company"
                            type="text"
                            required
                            autoComplete="organization"
                            placeholder="Your organization name"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="input-field"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contact-focus"
                            className="font-label text-xs uppercase font-semibold block mb-2"
                            style={{ color: 'rgba(45,74,77,0.5)', letterSpacing: '0.08em' }}
                          >
                            Session Focus
                          </label>
                          <div className="relative">
                            <select
                              id="contact-focus"
                              value={focus}
                              onChange={(e) => setFocus(e.target.value)}
                              className="w-full bg-transparent font-body text-on-surface text-body-md py-3 outline-none appearance-none pr-8 cursor-pointer"
                              style={{
                                borderBottom: '2px solid rgba(200,168,130,0.4)',
                                color: '#001215',
                              }}
                            >
                              {FOCUS_OPTIONS.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                            <Icon name="expand_more" className="absolute right-0 top-3 pointer-events-none" style={{ fontSize: '20px', color: '#2d4a4d' }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      {selectedDay && selectedTime && (
                        <div
                          className="rounded-xl p-3 mb-4 flex items-center gap-3"
                          style={{
                            backgroundColor: '#fff5e8',
                          }}
                        >
                          <Icon name="calendar_today" className="shrink-0" style={{ fontSize: '18px', color: '#a14000' }} />
                          <p
                            className="font-body text-body-sm"
                            style={{ color: '#001215' }}
                          >
                            April {selectedDay} at {selectedTime} - 20-minute conversation
                          </p>
                        </div>
                      )}

                      {error && (
                        <p
                          className="font-body text-body-sm text-center mb-3 px-4 py-3 rounded-xl"
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
                        className="w-full flex items-center justify-center gap-3 font-body font-bold text-base py-3.5 px-6 rounded-xl transition-all duration-200"
                        style={{
                          backgroundColor: isPending ? 'rgba(161,64,0,0.6)' : '#a14000',
                          color: '#ffffff',
                          boxShadow: isPending ? 'none' : '0 8px 24px rgba(161,64,0,0.3)',
                          letterSpacing: '0.05em',
                          cursor: isPending ? 'not-allowed' : 'pointer',
                        }}
                      >
                        <span className="font-label uppercase tracking-widest text-sm">
                          {isPending ? 'Sending...' : 'Book a 20-minute conversation'}
                        </span>
                        {!isPending && (
                          <Icon name="arrow_forward" style={{ fontSize: '20px' }} />
                        )}
                      </button>

                      <p
                        className="font-body text-body-sm text-center mt-3"
                        style={{ color: 'rgba(45,74,77,0.5)' }}
                      >
                        No commitment. No sales pressure. Clear next steps.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16"
        style={{ backgroundColor: '#fff5e8' }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: 'schedule',
                title: '20-minute sessions',
                desc: 'Fast qualification with clear implementation fit.',
              },
              {
                icon: 'video_call',
                title: 'Remote, Europe-wide',
                desc: 'Built for teams operating across multiple locations.',
              },
              {
                icon: 'description',
                title: 'Clear recommendations',
                desc: 'Immediate next-step guidance after the call.',
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <Icon name={item.icon} className="shrink-0" style={{ fontSize: '22px', color: '#a14000' }} />
                <div>
                  <p
                    className="font-body font-semibold text-body-md mb-1"
                    style={{ color: '#001215' }}
                  >
                    {item.title}
                  </p>
                  <p className="font-body text-body-sm" style={{ color: '#2d4a4d' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
