import { MetadataRoute } from 'next'
import { getAllPostSlugs } from '@/lib/markdown'

export default function sitemap(): MetadataRoute.Sitemap {
  // Update this to your deployed domain after Vercel deployment
  const baseUrl = 'https://aitechnews.co.in'

  const staticRoutes = [
    '',
    '/latest',
    '/ai-tools',
    '/gadgets',
    '/software',
    '/crypto',
    '/top-deals',
    '/about',
    '/contact',
    '/privacy-policy',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const posts = getAllPostSlugs()
  const dynamicRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...dynamicRoutes]
}
