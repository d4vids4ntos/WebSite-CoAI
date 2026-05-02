import type { IndustryPageData } from './types'

export const gastronomy: IndustryPageData = {
  slug: 'gastronomy',
  name: 'Gastronomy',
  heroSummary:
    'Inventory, demand, and service quality on one operational baseline — built where your team already works the floor.',
  introTagline: 'Small retail, measured',
  introBody:
    'Most small operators do not need a full AI department. They need one solution that works in the operational reality of the venue, then a second, then a third — connected, not stacked. Forecasting, inventory, and service quality sitting on the data your team already records at the till.',
  photo: '/images/industries/gastronomy_ai_header_background.png',
  valueChain: {
    headline: 'Where small operators lose margin one week at a time.',
    body: 'Order quantities are set by experience rather than signal. Stockouts and over-ordering both eat margin, often in the same week. Customer flow, ticket size, and quality of service are tracked through gut feel rather than the data already in the till.',
    stages: [
      'Supply',
      'Inventory',
      'Prep',
      'Service',
      'Till',
      'Reorder',
    ],
    categories: [
      { label: 'Full Module', accent: 'mint' },
      { label: 'Demand', accent: 'peach' },
      { label: 'Service', accent: 'blush' },
      { label: 'Inventory', accent: 'sky' },
      { label: 'Menu', accent: 'lilac' },
    ],
  },
  solutions: [
    {
      id: 'demand-forecasting',
      accent: 'peach',
      icon: 'price_check',
      title: 'Demand forecasting',
      description:
        'Daily, weekly, and seasonal patterns isolated from noise — built on the point-of-sale and inventory data your team already records.',
    },
    {
      id: 'service-analytics',
      accent: 'blush',
      icon: 'groups',
      title: 'Service analytics',
      description:
        'Customer flow, throughput, and service quality measured on real signal rather than surveys after the fact.',
    },
    {
      id: 'inventory-waste',
      accent: 'sky',
      icon: 'storage',
      title: 'Inventory and waste reduction',
      description:
        'Order quantities tied to forecast rather than habit. Waste tracked at the item level, not the invoice level.',
    },
    {
      id: 'menu-pricing',
      accent: 'lilac',
      icon: 'description',
      title: 'Menu and pricing intelligence',
      description:
        'Data-backed iterations on the items, prices, and combinations that actually move margin and ticket size.',
    },
  ],
  fullModule: {
    title: 'Get the Full Gastronomy Module',
    description:
      'Forecasting, inventory, menu intelligence, and service analytics connected into one view — engagements start at €190, with a working tool in front of operators within two weeks.',
  },
  steps: [
    {
      id: 'collect',
      title: 'Collect',
      description:
        'We pull from the point-of-sale, inventory, and reservation data the venue already records — no new till, no new floor system.',
    },
    {
      id: 'diagnose',
      title: 'Diagnose',
      description:
        'We isolate the daily, weekly, and seasonal patterns from noise and find the one operational pain point worth solving first.',
    },
    {
      id: 'deploy',
      title: 'Deploy',
      description:
        'Two weeks from engagement start to a working forecasting or inventory tool in front of operators, starting at €190.',
    },
    {
      id: 'connect',
      title: 'Connect',
      description:
        'Menu, pricing, and service analytics are layered onto the same baseline — one solution at a time, connected rather than stacked.',
    },
    {
      id: 'operate',
      title: 'Operate',
      description:
        'Waste tracked at the item level, ticket size measured against signal, service quality observed on the data already in the till.',
    },
  ],
  closing: {
    leftBlurb:
      'Results that will make you wonder why you didn’t find us sooner.',
  },
}
