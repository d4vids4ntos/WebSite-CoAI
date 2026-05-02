import type { IndustryPageData } from './types'

export const hospitality: IndustryPageData = {
  slug: 'hospitality',
  name: 'Hospitality',
  heroSummary:
    'Guest experience, scheduling, and revenue running on one operational rhythm — built where your team already works.',
  introTagline: 'At full capacity',
  introBody:
    'We start with one high-impact use case — typically scheduling or revenue — and expand into a connected operational stack your team owns. Rosters, pricing, reviews, and guest comms running on one operational baseline rather than four disconnected tools.',
  photo: '/images/industries/hospitality_ai_header_background.png',
  valueChain: {
    headline: 'Where hospitality teams lose hours and revenue.',
    body: 'Rosters are built by hand each week and patched mid-shift. Pricing decisions are made without integrated demand signals. Reviews and feedback live outside the operational systems that could act on them in time to change anything.',
    stages: [
      'Booking',
      'Check-in',
      'In-stay',
      'Service',
      'Check-out',
      'Post-stay',
    ],
    categories: [
      { label: 'Full Module', accent: 'mint' },
      { label: 'Revenue', accent: 'peach' },
      { label: 'Guest', accent: 'blush' },
      { label: 'Operations', accent: 'sky' },
      { label: 'Staffing', accent: 'lilac' },
    ],
  },
  solutions: [
    {
      id: 'dynamic-pricing',
      accent: 'peach',
      icon: 'price_check',
      title: 'Dynamic pricing',
      description:
        'Demand-driven rate decisions tied to booking pace, channel mix, and external signal — applied with operational guardrails.',
    },
    {
      id: 'review-intelligence',
      accent: 'blush',
      icon: 'description',
      title: 'Review intelligence',
      description:
        'Operational signal extracted from guest feedback at scale, routed to the team that can act on it.',
    },
    {
      id: 'guest-communication',
      accent: 'sky',
      icon: 'groups',
      title: 'Guest communication',
      description:
        'Context-aware messaging — pre-arrival, in-stay, post-stay — built into the operational stack rather than bolted on.',
    },
    {
      id: 'role-aware-scheduling',
      accent: 'lilac',
      icon: 'schedule',
      title: 'Role-aware scheduling',
      description:
        'Automated rosters across shifts, venues, and skill mixes — adjusted to live constraints without rewriting the week.',
    },
  ],
  fullModule: {
    title: 'Get the Full Hospitality Module',
    description:
      'Scheduling, pricing, reviews, and guest comms running on one operational baseline rather than four disconnected tools — deployed in two weeks, owned by your team.',
  },
  steps: [
    {
      id: 'collect',
      title: 'Collect',
      description:
        'We connect to the data your team already records — PMS, booking engines, channel managers, reviews — without forcing a new system on the floor.',
    },
    {
      id: 'diagnose',
      title: 'Diagnose',
      description:
        'We isolate where rosters, pricing, and guest signal are losing hours and revenue. One high-impact use case is chosen first — typically scheduling or revenue.',
    },
    {
      id: 'deploy',
      title: 'Deploy',
      description:
        'Two weeks from engagement start to a working scheduling or pricing system in front of operators. Built where your team already works.',
    },
    {
      id: 'connect',
      title: 'Connect',
      description:
        'Reviews, communications, and the second use case are layered on the same operational baseline — connected, not stacked.',
    },
    {
      id: 'operate',
      title: 'Operate',
      description:
        'Your team owns the stack. We measure hours saved per scheduling cycle, channel mix, and review-to-action latency from week one.',
    },
  ],
  closing: {
    leftBlurb:
      'Results that will make you wonder why you didn’t find us sooner.',
  },
}
