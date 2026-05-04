'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

const REQUIRE_CONSENT = process.env.NEXT_PUBLIC_ANALYTICS_REQUIRE_CONSENT !== 'false'
const ANALYTICS_ENABLED =
  Boolean(process.env.NEXT_PUBLIC_GA_ID) || Boolean(process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN)
const CONSENT_KEY = 'coai-cookie-consent'
const CONSENT_DATE_KEY = 'coai-cookie-consent-date'
const CONSENT_EVENT = 'coai-cookie-consent-change'

type ConsentValue = 'accepted' | 'rejected' | null

function readConsent(): ConsentValue {
  if (typeof window === 'undefined') {
    return null
  }

  const value = window.localStorage.getItem(CONSENT_KEY)
  if (value === 'accepted' || value === 'rejected') {
    return value
  }
  return null
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ANALYTICS_ENABLED || !REQUIRE_CONSENT) {
      return
    }

    setVisible(readConsent() === null)
  }, [])

  function setConsent(value: Exclude<ConsentValue, null>) {
    window.localStorage.setItem(CONSENT_KEY, value)
    window.localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString())
    window.dispatchEvent(new Event(CONSENT_EVENT))
    trackEvent('cookie_consent_set', { consent: value })
    setVisible(false)
  }

  if (!ANALYTICS_ENABLED || !REQUIRE_CONSENT || !visible) {
    return null
  }

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl p-5 md:p-6"
      style={{
        backgroundColor: '#fff8f3',
        boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
      }}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="max-w-content mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-body text-body-sm" style={{ color: '#000000' }}>
          We use analytics cookies to understand conversion and improve this website. Read our{' '}
          <Link href="/cookies" style={{ color: '#a14000', textDecoration: 'underline' }}>
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setConsent('rejected')}
          >
            Reject
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={() => setConsent('accepted')}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
