import { MetadataRoute } from 'next'
import { getSortedPostsData } from '@/lib/markdown'
import { STORIES } from '@/data/stories'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aitechnews.co.in'
  
  const posts = getSortedPostsData()
  
  // Use the date of the latest post for the homepage and latest feed
  const latestPostDate = posts[0] && posts[0].date ? new Date(posts[0].date) : new Date()
  const defaultStaticDate = new Date('2026-05-24')

  const staticRoutes = [
    '',
    '/latest',
    '/trending',
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
    '/terms-of-service',
    '/advertise',
    '/best-phones',
    '/upcoming-phones',
    '/best-laptops',
    '/upcoming-laptops',
    '/compare',
    '/tools/compress-pdf',
  ].map((route) => {
    let lastMod = defaultStaticDate
    if (route === '' || route === '/latest' || route === '/trending') {
      lastMod = latestPostDate
    }
    
    return {
      url: `${baseUrl}${route}`,
      lastModified: lastMod,
      changeFrequency: route === '' || route === '/latest' || route === '/trending' ? 'daily' as const : 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    }
  })

  const dynamicRoutes = posts.map((post) => {
    let lastModDate = new Date()
    if (post.date) {
      const parsed = new Date(post.date)
      if (!isNaN(parsed.getTime())) {
        lastModDate = parsed
      }
    }

    const now = new Date()
    const diffTime = Math.abs(now.getTime() - lastModDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    let changeFreq: 'daily' | 'weekly' | 'monthly' = 'monthly'
    let priorityVal = 0.6

    if (diffDays <= 3) {
      changeFreq = 'daily'
      priorityVal = 0.95
    } else if (diffDays <= 14) {
      changeFreq = 'weekly'
      priorityVal = 0.8
    } else {
      changeFreq = 'monthly'
      priorityVal = 0.6
    }

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: lastModDate,
      changeFrequency: changeFreq,
      priority: priorityVal,
    }
  })

  const storyRoutes = STORIES.map((story) => {
    // Find matching post to get its date
    const cleanStorySlug = story.slug.replace('-story-', '-').replace('-story', '').replace('story-', '')
    const matchedPost = posts.find(p => p.slug.startsWith(cleanStorySlug) || cleanStorySlug.startsWith(p.slug))
    
    let lastModDate = new Date()
    if (matchedPost && matchedPost.date) {
      const parsed = new Date(matchedPost.date)
      if (!isNaN(parsed.getTime())) {
        lastModDate = parsed
      }
    } else {
      // Fallback: search for any date pattern in the story slug (like 2026-05-24)
      const dateMatch = story.slug.match(/202\d-\d\d-\d\d/)
      if (dateMatch) {
        const parsed = new Date(dateMatch[0])
        if (!isNaN(parsed.getTime())) {
          lastModDate = parsed
        }
      } else {
        // Fallback to the latest post date
        if (posts.length > 0) {
          const parsed = new Date(posts[0].date)
          if (!isNaN(parsed.getTime())) {
            lastModDate = parsed
          }
        }
      }
    }

    return {
      url: `${baseUrl}/web-stories/${story.slug}.html`,
      lastModified: lastModDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    }
  })

  return [...staticRoutes, ...dynamicRoutes, ...storyRoutes]
}

