import type { MetadataRoute } from 'next'
import { PUBLIC_ROUTES, getSiteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const now = new Date()

  return PUBLIC_ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/contact' ? 0.9 : 0.8,
  }))
}

