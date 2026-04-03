import { MetadataRoute } from 'next'
import { getAllPostSlugs } from '@/lib/markdown'
import { STORIES } from '@/data/stories'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aitechnews.co.in'

  const staticRoutes = [
    '',
    '/latest',
    '/ai-tools',
    '/gadgets',
    '/software',
    '/crypto',
    '/top-deals',
    '/web-stories',
    '/about',
    '/contact',
    '/privacy-policy',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/latest' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const posts = getAllPostSlugs()
  const dynamicRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  const storyRoutes = STORIES.map((story) => ({
    url: `${baseUrl}/web-stories/${story.slug}.html`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...dynamicRoutes, ...storyRoutes]
}
