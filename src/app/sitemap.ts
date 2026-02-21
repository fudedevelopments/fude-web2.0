import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.fude.in/'

  // Use consistent date to improve caching
  const now = new Date()
  const homeLastModified = now
  const staticPagesLastModified = new Date(
    now.getTime() - 7 * 24 * 60 * 60 * 1000
  ) // 7 days ago

  return [
    {
      url: baseUrl,
      lastModified: homeLastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/aboutus`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contactus`,
      lastModified: staticPagesLastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
