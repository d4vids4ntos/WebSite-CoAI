'use client'

import React, { useRef, useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { useMotionPreference } from '@/components/animations/useMotionPreference'

type GsapInstance = typeof import('gsap')['gsap']
type ScrollTriggerPlugin = typeof import('gsap/ScrollTrigger')['ScrollTrigger']
type SplitTextPlugin = typeof import('gsap/SplitText')['SplitText']

export interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string | ((t: number) => number)
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars'
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  threshold?: number
  rootMargin?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  textAlign?: React.CSSProperties['textAlign']
  onLetterAnimationComplete?: () => void
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const animationCompletedRef = useRef(false)
  const onCompleteRef = useRef(onLetterAnimationComplete)
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false)
  const [pluginsReady, setPluginsReady] = useState<boolean>(false)
  const gsapRef = useRef<GsapInstance | null>(null)
  const scrollTriggerRef = useRef<ScrollTriggerPlugin | null>(null)
  const splitTextRef = useRef<SplitTextPlugin | null>(null)
  const { reduceMotion, lowPowerDevice } = useMotionPreference()
  const disableAnimation = reduceMotion || lowPowerDevice

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete
  }, [onLetterAnimationComplete])

  useEffect(() => {
    let cancelled = false

    const loadPlugins = async () => {
      if (typeof window === 'undefined') {
        return
      }

      const [{ gsap }, { ScrollTrigger }, { SplitText }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('gsap/SplitText'),
      ])

      if (cancelled) {
        return
      }

      gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)
      gsapRef.current = gsap
      scrollTriggerRef.current = ScrollTrigger
      splitTextRef.current = SplitText
      setPluginsReady(true)
    }

    loadPlugins().catch(() => {
      if (!cancelled) {
        setPluginsReady(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined' || !document.fonts) {
      setFontsLoaded(true)
      return
    }

    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true)
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true))
    }
  }, [])

  useGSAP(
    () => {
      const gsap = gsapRef.current
      const ScrollTrigger = scrollTriggerRef.current
      const GSAPSplitText = splitTextRef.current

      if (!ref.current || !text || !fontsLoaded || !pluginsReady || !gsap || !ScrollTrigger || !GSAPSplitText || disableAnimation) {
        if (disableAnimation && !animationCompletedRef.current) {
          animationCompletedRef.current = true
          onCompleteRef.current?.()
        }
        return
      }
      if (animationCompletedRef.current) return

      const el = ref.current as HTMLElement & { _rbsplitInstance?: { revert: () => void } }

      if (el._rbsplitInstance) {
        try { el._rbsplitInstance.revert() } catch (_) {}
        el._rbsplitInstance = undefined
      }

      const startPct = (1 - threshold) * 100
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin)
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px'
      const sign =
        marginValue === 0 ? ''
        : marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}`
        : `+=${marginValue}${marginUnit}`
      const start = `top ${startPct}%${sign}`

      let targets: Element[] = []
      const assignTargets = (self: { chars?: Element[]; words?: Element[]; lines?: Element[] }) => {
        if (splitType.includes('chars') && self.chars?.length) targets = self.chars
        if (!targets.length && splitType.includes('words') && self.words?.length) targets = self.words
        if (!targets.length && splitType.includes('lines') && self.lines?.length) targets = self.lines
        if (!targets.length) targets = self.chars ?? self.words ?? self.lines ?? []
      }

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === 'lines',
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
        reduceWhiteSpace: false,
        onSplit: (self: { chars?: Element[]; words?: Element[]; lines?: Element[] }) => {
          assignTargets(self)
          return gsap.fromTo(targets, { ...from }, {
            ...to,
            duration,
            ease,
            stagger: delay / 1000,
            scrollTrigger: {
              trigger: el,
              start,
              once: true,
              fastScrollEnd: true,
              anticipatePin: 0.4,
            },
            onComplete: () => {
              animationCompletedRef.current = true
              onCompleteRef.current?.()
            },
            willChange: 'transform, opacity',
            force3D: true,
          })
        },
      })
      el._rbsplitInstance = splitInstance

      return () => {
        ScrollTrigger.getAll().forEach(st => { if (st.trigger === el) st.kill() })
        try { splitInstance.revert() } catch (_) {}
        el._rbsplitInstance = undefined
      }
    },
    {
      dependencies: [
        text, delay, duration, ease, splitType,
        JSON.stringify(from), JSON.stringify(to),
        threshold, rootMargin, fontsLoaded, disableAnimation,
        pluginsReady,
      ],
      scope: ref,
    }
  )

  const Tag = (tag || 'p') as React.ElementType
  return (
    <Tag
      ref={ref}
      style={{
        textAlign,
        wordWrap: 'break-word',
        willChange: disableAnimation ? 'auto' : 'transform, opacity',
      }}
      className={`split-parent inline-block whitespace-normal ${className}`}
    >
      {text}
    </Tag>
  )
}

export default SplitText
