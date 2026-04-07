export const SITE_NAME = 'Clinic of AI'
export const SITE_DESCRIPTION =
  'Clinic of AI helps SMBs adopt AI systematically by upgrading people, redesigning workflows, and deploying measurable operational change.'
export const DEFAULT_SITE_URL = 'https://clinicofai.com'

export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.NEXT_PUBLIC_VERCEL_URL ??
    DEFAULT_SITE_URL

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
  '/privacy',
  '/terms',
] as const

