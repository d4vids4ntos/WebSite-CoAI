'use client'

export type AnalyticsPayload = Record<string, string | number | boolean>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    plausible?: (eventName: string, options?: { props?: AnalyticsPayload }) => void
  }
}

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}): void {
  if (typeof window === 'undefined') {
    return
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload)
  }

  if (typeof window.plausible === 'function') {
    window.plausible(eventName, { props: payload })
  }
}

