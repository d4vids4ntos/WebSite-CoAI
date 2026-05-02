import type { IndustryPageData } from './types'

export const realEstate: IndustryPageData = {
  slug: 'real-estate',
  name: 'Real Estate',
  heroAccent: 'sky',
  heroSummary:
    'Asset performance, portfolio risk, and market intelligence connected into one operational view your team runs.',
  introTagline: 'Diagnosed',
  introBody:
    'We start with a single high-impact use case — typically maintenance or portfolio reporting — and expand into a connected operational stack your team owns. Acquisition, operations, and disposal connected, rather than three disconnected vendors.',
  photo: '/images/industries/real_estate_ai_header_background.png',
  valueChain: {
    headline: 'Where real estate teams lose time and capital.',
    body: 'Portfolio decisions rely on data scattered across CRMs, asset management systems, and finance models that do not talk to each other. Asset condition is observed after damage compounds, and valuation work moves slower than the market it depends on.',
    stages: [
      'Sourcing',
      'Acquisition',
      'Operation',
      'Maintenance',
      'Valuation',
      'Disposal',
    ],
    categories: [
      { label: 'Full Module', accent: 'mint' },
      { label: 'Market', accent: 'peach' },
      { label: 'Portfolio', accent: 'blush' },
      { label: 'Maintenance', accent: 'sky' },
      { label: 'Valuation', accent: 'lilac' },
    ],
  },
  solutions: [
    {
      id: 'transaction-intelligence',
      accent: 'peach',
      icon: 'price_check',
      title: 'Transaction intelligence',
      description:
        'Market signals integrated with internal data so acquisition and disposal decisions are faster and defensible.',
    },
    {
      id: 'smart-portfolio',
      accent: 'blush',
      icon: 'apartment',
      title: 'Smart portfolio operations',
      description:
        'A single operational view across assets, leases, and capex — built on the data sources your team already maintains.',
    },
    {
      id: 'predictive-maintenance',
      accent: 'sky',
      icon: 'build',
      title: 'Predictive maintenance',
      description:
        'Sensor and inspection data interpreted before issues escalate, with intervention windows tied to operational risk.',
    },
    {
      id: 'valuation-modelling',
      accent: 'lilac',
      icon: 'description',
      title: 'Valuation modelling',
      description:
        'Repeatable, auditable models that replace spreadsheet-driven cycles with one shared method across the team.',
    },
  ],
  fullModule: {
    title: 'Get the Full Real Estate Module',
    description:
      'Acquisition, operations, valuation, and disposal connected on one operational view — built on the data sources your team already maintains, deployed in two weeks.',
  },
  steps: [
    {
      id: 'collect',
      title: 'Collect',
      description:
        'We connect to the CRMs, asset management systems, and finance models your team already maintains — no migration, no new system of record.',
    },
    {
      id: 'diagnose',
      title: 'Diagnose',
      description:
        'We isolate where capex is allocated to recovery rather than prevention, and where valuation work moves slower than the market it depends on.',
    },
    {
      id: 'deploy',
      title: 'Deploy',
      description:
        'Two weeks from engagement start to a working portfolio dashboard built on existing data sources, in front of operators.',
    },
    {
      id: 'connect',
      title: 'Connect',
      description:
        'Predictive maintenance, transaction intelligence, and valuation models are layered on the same baseline — one partner across the value chain rather than three vendors.',
    },
    {
      id: 'operate',
      title: 'Operate',
      description:
        'Your team owns the stack. We measure emergency repairs avoided, time-to-integrated-view, and capex shifted from recovery to prevention.',
    },
  ],
  closing: {
    leftBlurb:
      'Results that will make you wonder why you didn’t find us sooner.',
  },
}
