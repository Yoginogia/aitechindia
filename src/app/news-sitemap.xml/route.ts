import { getSortedPostsData } from '@/lib/markdown';

export async function GET() {
  const posts = getSortedPostsData();
  
  // Google News Sitemap only supports last 2 days of articles
  // But we include last 30 days for broader coverage
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - 30);
  
  const recentPosts = posts.filter(post => {
    const postDate = new Date(post.date);
    return postDate >= cutoffDate;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${recentPosts.map(post => {
  const imageUrl = post.image 
    ? (post.image.startsWith('http') ? post.image : `https://aitechnews.co.in${post.image}`)
    : 'https://aitechnews.co.in/logo.png';
  
  const pubDate = new Date(post.date).toISOString().split('T')[0];
  
  return `  <url>
    <loc>https://aitechnews.co.in/blog/${post.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>AITechNews</news:name>
        <news:language>hi</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title>${post.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')}</news:title>
    </news:news>
    <image:image>
      <image:loc>${imageUrl.replace(/&/g, '&amp;')}</image:loc>
      <image:title>${post.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</image:title>
    </image:image>
  </url>`;
}).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
