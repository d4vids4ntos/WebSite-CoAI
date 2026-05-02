export type AccentName = 'peach' | 'blush' | 'sky' | 'lilac' | 'mint'

export interface IndustrySolution {
  id: string
  accent: 'peach' | 'blush' | 'sky' | 'lilac'
  icon: string
  title: string
  description: string
  href?: string
}

export interface IndustryStep {
  id: string
  title: string
  description: string
}

export interface IndustryValueChainCategory {
  label: string
  accent: AccentName
}

export interface IndustryPageData {
  slug: string
  name: string
  heroAccent: AccentName
  heroSummary: string
  introTagline: string
  introBody: string
  photo: string
  valueChain: {
    headline: string
    body: string
    stages: string[]
    categories: IndustryValueChainCategory[]
  }
  solutions: IndustrySolution[]
  fullModule: { title: string; description: string }
  steps: IndustryStep[]
  closing: { leftBlurb: string }
}
