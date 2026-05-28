import { getSortedPostsData } from '@/lib/markdown';

export async function GET() {
    const posts = getSortedPostsData().slice(0, 100); // Google News sitemap needs recent articles (latest 100 is ideal)
    const baseUrl = 'https://aitechnews.co.in';

    const xmlItems = posts.map((post) => {
        let lastModDate = new Date();
        if (post.date) {
            const parsed = new Date(post.date);
            if (!isNaN(parsed.getTime())) {
                lastModDate = parsed;
            }
        }

        // XML entities escaping helper
        const escapeXml = (str: string) => {
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&apos;');
        };

        return `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>AITechNews</news:name>
        <news:language>hi</news:language>
      </news:publication>
      <news:publication_date>${lastModDate.toISOString()}</news:publication_date>
      <news:title>${escapeXml(post.title || '')}</news:title>
    </news:news>
  </url>`;
    }).join('\n');

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${xmlItems}
</urlset>`;

    return new Response(sitemapXml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=600',
        },
    });
}
