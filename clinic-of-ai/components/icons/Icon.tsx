import React from 'react'

interface IconProps {
  name: string
  className?: string
  style?: React.CSSProperties
}

const icons: Record<string, React.ReactNode> = {
  arrow_forward: (
    <polyline points="9 6 15 12 9 18" strokeLinecap="round" strokeLinejoin="round" />
  ),
  remove: <line x1="6" y1="12" x2="18" y2="12" strokeLinecap="round" />,
  close: (
    <>
      <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
      <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
    </>
  ),
  check: <polyline points="4 12 9 17 20 6" strokeLinecap="round" strokeLinejoin="round" />,
  check_circle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="8 12 11 15 16 9" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  check_small: <polyline points="7 12 10 15 17 8" strokeLinecap="round" strokeLinejoin="round" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="11" x2="12" y2="16" strokeLinecap="round" />
      <circle cx="12" cy="8" r="0.5" fill="currentColor" stroke="none" />
    </>
  ),
  expand_more: <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />,
  calendar_today: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <line x1="4" y1="10" x2="20" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" strokeLinecap="round" />
      <line x1="16" y1="3" x2="16" y2="7" strokeLinecap="round" />
    </>
  ),
  verified: (
    <>
      <path d="M12 3l2.5 2 3.2.5.5 3.2 2 2.5-2 2.5-.5 3.2-3.2.5-2.5 2-2.5-2-3.2-.5-.5-3.2-2-2.5 2-2.5.5-3.2 3.2-.5z" />
      <polyline points="9 12 11 14 15 10" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  neurology: (
    <>
      <circle cx="12" cy="10" r="5" />
      <path d="M9 8c0-1.5 1-3 3-3s3 1.5 3 3" />
      <path d="M8.5 11c-.8.5-1.5 1.5-1.5 3h10c0-1.5-.7-2.5-1.5-3" />
      <line x1="12" y1="15" x2="12" y2="20" strokeLinecap="round" />
      <line x1="9" y1="18" x2="15" y2="18" strokeLinecap="round" />
    </>
  ),
  hub: (
    <>
      <circle cx="12" cy="7" r="2" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="18" cy="17" r="2" />
      <line x1="12" y1="9" x2="6" y2="15" />
      <line x1="12" y1="9" x2="18" y2="15" />
      <line x1="6" y1="17" x2="18" y2="17" />
    </>
  ),
  memory: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="1" />
      <rect x="9" y="9" width="6" height="6" rx="0.5" />
      <line x1="9" y1="4" x2="9" y2="6" strokeLinecap="round" />
      <line x1="12" y1="4" x2="12" y2="6" strokeLinecap="round" />
      <line x1="15" y1="4" x2="15" y2="6" strokeLinecap="round" />
      <line x1="9" y1="18" x2="9" y2="20" strokeLinecap="round" />
      <line x1="12" y1="18" x2="12" y2="20" strokeLinecap="round" />
      <line x1="15" y1="18" x2="15" y2="20" strokeLinecap="round" />
      <line x1="4" y1="9" x2="6" y2="9" strokeLinecap="round" />
      <line x1="4" y1="12" x2="6" y2="12" strokeLinecap="round" />
      <line x1="4" y1="15" x2="6" y2="15" strokeLinecap="round" />
      <line x1="18" y1="9" x2="20" y2="9" strokeLinecap="round" />
      <line x1="18" y1="12" x2="20" y2="12" strokeLinecap="round" />
      <line x1="18" y1="15" x2="20" y2="15" strokeLinecap="round" />
    </>
  ),
  model_training: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5a7 7 0 0 1 7 7" />
      <path d="M12 19a7 7 0 0 1-7-7" />
      <polyline points="19 10 19 12 17 12" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="5 14 5 12 7 12" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  shopping_cart: (
    <>
      <path d="M4 4h2l3.6 9h7.1l2.3-6H8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="18" r="1.5" />
      <circle cx="17" cy="18" r="1.5" />
    </>
  ),
  school: (
    <>
      <path d="M12 4L2 9l10 5 10-5-10-5z" strokeLinejoin="round" />
      <path d="M20 9v6" strokeLinecap="round" />
      <path d="M6 11.5v4.5c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
    </>
  ),
  link_off: (
    <>
      <path d="M7 12H4a3 3 0 0 1 0-6h4" strokeLinecap="round" />
      <path d="M17 12h3a3 3 0 0 0 0-6h-4" strokeLinecap="round" />
      <line x1="3" y1="20" x2="21" y2="4" strokeLinecap="round" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" strokeLinecap="round" />
    </>
  ),
  groups: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2 20c0-3 2.5-5.5 7-5.5s7 2.5 7 5.5" strokeLinecap="round" />
      <path d="M16 14.5c2.5 0 5 1.5 5 4" strokeLinecap="round" />
    </>
  ),
  build: (
    <>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8c.6 1.2.4 2.7-.6 3.7l-7.1 7.1c-.4.4-1 .6-1.5.5l-4.3-.7-.7-4.3c-.1-.5.1-1.1.5-1.5l7.1-7.1c1-.9 2.5-1.1 3.7-.5L14.7 6.3z" strokeLinejoin="round" />
    </>
  ),
  precision_manufacturing: (
    <>
      <path d="M13 6V4h-2v2H8l-1 4h10l-1-4h-3z" strokeLinejoin="round" />
      <rect x="7" y="10" width="10" height="4" rx="0.5" />
      <path d="M9 14v4h6v-4" />
      <line x1="7" y1="20" x2="17" y2="20" strokeLinecap="round" />
    </>
  ),
  hotel: (
    <>
      <path d="M4 19V9l8-4 8 4v10" strokeLinejoin="round" />
      <rect x="9" y="13" width="6" height="6" />
      <line x1="12" y1="13" x2="12" y2="19" />
      <line x1="4" y1="19" x2="20" y2="19" strokeLinecap="round" />
      <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  apartment: (
    <>
      <rect x="4" y="4" width="7" height="16" rx="0.5" />
      <rect x="13" y="9" width="7" height="11" rx="0.5" />
      <line x1="6" y1="7" x2="9" y2="7" strokeLinecap="round" />
      <line x1="6" y1="10" x2="9" y2="10" strokeLinecap="round" />
      <line x1="6" y1="13" x2="9" y2="13" strokeLinecap="round" />
      <line x1="6" y1="16" x2="9" y2="16" strokeLinecap="round" />
      <line x1="15" y1="12" x2="18" y2="12" strokeLinecap="round" />
      <line x1="15" y1="15" x2="18" y2="15" strokeLinecap="round" />
    </>
  ),
  agriculture: (
    <>
      <path d="M12 20v-8" strokeLinecap="round" />
      <path d="M12 12c-3 0-5-2.5-5-5.5 0 0 2-.5 5 1.5" strokeLinejoin="round" />
      <path d="M12 12c3 0 5-2.5 5-5.5 0 0-2-.5-5 1.5" strokeLinejoin="round" />
      <path d="M8 20h8" strokeLinecap="round" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 12l4-4 3 2 4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12l4 4 2.5-2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12l-4 4-2.5-2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  account_tree: (
    <>
      <rect x="10" y="3" width="4" height="4" rx="0.5" />
      <rect x="3" y="17" width="4" height="4" rx="0.5" />
      <rect x="17" y="17" width="4" height="4" rx="0.5" />
      <line x1="12" y1="7" x2="12" y2="12" />
      <line x1="5" y1="17" x2="5" y2="12" />
      <line x1="19" y1="17" x2="19" y2="12" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </>
  ),
  eco: (
    <>
      <path d="M12 20c0-6 4-10 8-12-2 0-6 1-8 5-2-4-6-5-8-5 4 2 8 6 8 12z" strokeLinejoin="round" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M12 4a5 5 0 0 0-3 9v2h6v-2a5 5 0 0 0-3-9z" strokeLinejoin="round" />
      <line x1="9" y1="17" x2="15" y2="17" strokeLinecap="round" />
      <line x1="10" y1="19" x2="14" y2="19" strokeLinecap="round" />
    </>
  ),
  corporate_fare: (
    <>
      <rect x="3" y="4" width="8" height="16" rx="0.5" />
      <rect x="13" y="10" width="8" height="10" rx="0.5" />
      <line x1="5.5" y1="7" x2="8.5" y2="7" strokeLinecap="round" />
      <line x1="5.5" y1="10" x2="8.5" y2="10" strokeLinecap="round" />
      <line x1="5.5" y1="13" x2="8.5" y2="13" strokeLinecap="round" />
      <line x1="15.5" y1="13" x2="18.5" y2="13" strokeLinecap="round" />
      <line x1="15.5" y1="16" x2="18.5" y2="16" strokeLinecap="round" />
    </>
  ),
  storage: (
    <>
      <rect x="4" y="4" width="16" height="4" rx="1" />
      <rect x="4" y="10" width="16" height="4" rx="1" />
      <rect x="4" y="16" width="16" height="4" rx="1" />
      <circle cx="7" cy="6" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="7" cy="12" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="7" cy="18" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  code: (
    <>
      <polyline points="8 6 3 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="16 6 21 12 16 18" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="14" y1="4" x2="10" y2="20" strokeLinecap="round" />
    </>
  ),
  translate: (
    <>
      <path d="M4 5h8" strokeLinecap="round" />
      <path d="M8 3v2" strokeLinecap="round" />
      <path d="M4 5c1 4 3.5 7 8 9" strokeLinecap="round" />
      <path d="M12 5c-1 4-3.5 7-8 9" strokeLinecap="round" />
      <path d="M13 15l3 6 3-6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="14" y1="18" x2="18" y2="18" strokeLinecap="round" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" strokeLinejoin="round" />
      <polyline points="9 12 11 14 15 10" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  construction: (
    <>
      <path d="M14.7 6.3l3 3-8 8H6v-3.7l8-8z" strokeLinejoin="round" />
      <path d="M4 20h16" strokeLinecap="round" />
    </>
  ),
  travel_explore: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c2 2.5 3 5 3 8s-1 5.5-3 8" />
      <path d="M12 4c-2 2.5-3 5-3 8s1 5.5 3 8" />
    </>
  ),
  map: (
    <>
      <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z" strokeLinejoin="round" />
      <line x1="9" y1="4" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="20" />
    </>
  ),
  price_check: (
    <>
      <line x1="8" y1="6" x2="8" y2="18" strokeLinecap="round" />
      <path d="M5 9h5a2 2 0 0 1 0 4H5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="5" y1="13" x2="10" y2="13" strokeLinecap="round" />
      <polyline points="16 12 18 14 22 10" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  schedule: (
    <>
      <circle cx="12" cy="12" r="8" />
      <polyline points="12 7 12 12 15.5 14" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  video_call: (
    <>
      <rect x="3" y="6" width="12" height="12" rx="1.5" />
      <polyline points="15 10 21 7 21 17 15 14" strokeLinejoin="round" />
    </>
  ),
  description: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <line x1="8" y1="7" x2="16" y2="7" strokeLinecap="round" />
      <line x1="8" y1="10" x2="16" y2="10" strokeLinecap="round" />
      <line x1="8" y1="13" x2="13" y2="13" strokeLinecap="round" />
    </>
  ),
  done_all: (
    <>
      <polyline points="1 12 6 17 18 5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="7 12 12 17 24 5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  stars: (
    <>
      <path d="M12 3l2.3 4.7 5.2.7-3.7 3.7.9 5.1L12 15l-4.7 2.2.9-5.1L4.5 8.4l5.2-.7L12 3z" strokeLinejoin="round" />
    </>
  ),
  schema: (
    <>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <circle cx="12" cy="19" r="2" />
      <line x1="12" y1="7" x2="5" y2="17" />
      <line x1="12" y1="7" x2="12" y2="17" />
      <line x1="12" y1="7" x2="19" y2="17" />
    </>
  ),
  terminal: (
    <>
      <polyline points="5 7 10 12 5 17" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="13" y1="17" x2="19" y2="17" strokeLinecap="round" />
    </>
  ),
  science: (
    <>
      <path d="M9 3h6" strokeLinecap="round" />
      <path d="M10 3v7l-5 9h14l-5-9V3" strokeLinejoin="round" />
      <circle cx="10" cy="16" r="1" fill="currentColor" stroke="none" />
      <circle cx="13" cy="14" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  architecture: (
    <>
      <path d="M4 20L12 4l8 16" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="7" y1="14" x2="17" y2="14" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  arrow_right: <polyline points="9 6 15 12 9 18" strokeLinecap="round" strokeLinejoin="round" />,
  arrow_downward: <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />,
}

export default function Icon({ name, className, style }: IconProps) {
  const content = icons[name]
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
      style={{ width: '1em', height: '1em', ...style }}
      aria-hidden="true"
    >
      {content ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  )
}
