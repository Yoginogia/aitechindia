import { getSortedPostsData } from '@/lib/markdown';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = getSortedPostsData();
  const siteUrl = 'https://aitechnews.co.in';

  const rssItems = posts
    .slice(0, 20)
    .map((post) => {
      const pubDate = new Date(post.date || Date.now()).toUTCString();
      const postUrl = `${siteUrl}/blog/${post.slug}`;
      const imageUrl = post.image?.startsWith('/')
        ? `${siteUrl}${post.image}`
        : post.image || '';

      return `
    <item>
      <title><![CDATA[${post.title || ''}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.excerpt || ''}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category>${post.category || 'AI'}</category>
      ${imageUrl ? `<enclosure url="${imageUrl}" type="image/jpeg" length="0"/>` : ''}
    </item>`;
    })
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AITechNews India - Latest AI &amp; Tech News in Hinglish</title>
    <link>${siteUrl}</link>
    <description>Rozana AI, Crypto, Deals aur Software ki Latest Tech Khabar Hinglish mein</description>
    <language>hi-IN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
    },
  });
}
