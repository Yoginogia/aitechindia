import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/_next/static/', '/_next/image/'],
      disallow: ['/api/', '/_next/data/', '/static/'],
    },
    sitemap: [
      'https://aitechnews.co.in/sitemap.xml',
      'https://aitechnews.co.in/news-sitemap.xml'
    ],
    host: 'https://aitechnews.co.in',
  }
}
