'use client'

import { useEffect, useState } from 'react'

type MotionPreference = {
  reduceMotion: boolean
  lowPowerDevice: boolean
}

export function useMotionPreference(): MotionPreference {
  const [reduceMotion, setReduceMotion] = useState(false)
  const [lowPowerDevice, setLowPowerDevice] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(query.matches)

    const onChange = (event: MediaQueryListEvent) => {
      setReduceMotion(event.matches)
    }

    if (query.addEventListener) {
      query.addEventListener('change', onChange)
    } else {
      query.addListener(onChange)
    }

    const hardwareThreads = navigator.hardwareConcurrency ?? 8
    const saveData = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData)
    setLowPowerDevice(hardwareThreads <= 4 || saveData)

    return () => {
      if (query.removeEventListener) {
        query.removeEventListener('change', onChange)
      } else {
        query.removeListener(onChange)
      }
    }
  }, [])

  return { reduceMotion, lowPowerDevice }
}

