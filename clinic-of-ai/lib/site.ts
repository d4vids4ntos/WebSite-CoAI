export const SITE_NAME = 'Clinic of AI'
export const SITE_DESCRIPTION =
  'Clinic of AI helps SMBs adopt AI systematically by upgrading people, redesigning workflows, and deploying measurable operational change.'
export const DEFAULT_SITE_URL = 'https://clinicofai.com'

export function getSiteUrl(): string {
  const isProduction = process.env.NODE_ENV === 'production'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (isProduction && (!siteUrl || siteUrl.trim().length === 0)) {
    throw new Error(
      'NEXT_PUBLIC_SITE_URL is required in production for canonical URLs and sitemap generation.'
    )
  }

  const raw = siteUrl ?? process.env.NEXT_PUBLIC_VERCEL_URL ?? DEFAULT_SITE_URL

  const normalized = raw.startsWith('http') ? raw : `https://${raw}`
  return normalized.replace(/\/+$/, '')
}

export const PUBLIC_ROUTES = [
  '/',
  '/approach',
  '/industries',
  '/academy',
  '/about',
  '/contact',
  '/cookies',
  '/privacy',
  '/terms',
] as const
