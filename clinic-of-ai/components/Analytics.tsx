'use client'

import { useEffect, useMemo, useState } from 'react'
import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { trackEvent } from '@/lib/analytics'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
const REQUIRE_CONSENT = process.env.NEXT_PUBLIC_ANALYTICS_REQUIRE_CONSENT !== 'false'
const CONSENT_KEY = 'coai-cookie-consent'
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

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [consent, setConsent] = useState<ConsentValue>(null)

  const canTrack = useMemo(() => {
    if (!GA_ID && !PLAUSIBLE_DOMAIN) {
      return false
    }

    if (!REQUIRE_CONSENT) {
      return true
    }

    return consent === 'accepted'
  }, [consent])

  useEffect(() => {
    setConsent(readConsent())

    const onConsentChange = () => setConsent(readConsent())
    window.addEventListener(CONSENT_EVENT, onConsentChange)

    return () => {
      window.removeEventListener(CONSENT_EVENT, onConsentChange)
    }
  }, [])

  useEffect(() => {
    if (!canTrack || !pathname) {
      return
    }

    const query = searchParams.toString()
    const pathWithQuery = query ? `${pathname}?${query}` : pathname

    trackEvent('page_view', {
      path: pathWithQuery,
      title: document.title,
    })

    if (pathname === '/contact') {
      trackEvent('goal_contact_page_view', { path: pathWithQuery })
    }

    if (pathname === '/academy') {
      trackEvent('goal_academy_page_view', { path: pathWithQuery })
    }
  }, [canTrack, pathname, searchParams])

  useEffect(() => {
    if (!canTrack) {
      return
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a')
      if (!anchor) {
        return
      }

      const rawHref = anchor.getAttribute('href')
      if (!rawHref) {
        return
      }

      let targetPath = rawHref
      if (rawHref.startsWith('http')) {
        try {
          targetPath = new URL(rawHref).pathname
        } catch {
          return
        }
      }

      if (targetPath !== '/contact') {
        return
      }

      const ctaName = anchor.getAttribute('data-cta') ?? anchor.textContent?.trim() ?? 'contact_link'
      trackEvent('cta_click', {
        cta: ctaName.slice(0, 80),
        target: '/contact',
        page: pathname,
      })
    }

    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('click', onClick)
    }
  }, [canTrack, pathname])

  if (!canTrack) {
    return null
  }

  return (
    <>
      {GA_ID && (
        <>
          <Script
            id="ga-script"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
              `,
            }}
          />
        </>
      )}

      {PLAUSIBLE_DOMAIN && (
        <Script
          id="plausible-script"
          strategy="afterInteractive"
          data-domain={PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
        />
      )}
    </>
  )
}

