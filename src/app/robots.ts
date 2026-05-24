import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/static/'],
    },
    sitemap: [
      'https://aitechnews.co.in/sitemap.xml',
      'https://aitechnews.co.in/news-sitemap.xml'
    ],
    host: 'https://aitechnews.co.in',
  }
}
