import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
        return NextResponse.json({ error: 'URL query parameter is required' }, { status: 400 });
    }

    try {
        console.log(`[Indexing API] GET Ping requested for URL: ${url}`);
        const sitemapUrl = 'https://aitechnews.co.in/sitemap.xml';
        const newsSitemapUrl = 'https://aitechnews.co.in/news-sitemap.xml';
        
        // Ping Google Sitemaps & IndexNow API
        const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
        const googleNewsPingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(newsSitemapUrl)}`;
        const indexNowUrl = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(url)}&key=aitechnews2026indexnow`;

        await Promise.allSettled([
            fetch(googlePingUrl),
            fetch(googleNewsPingUrl),
            fetch(indexNowUrl)
        ]);

        return NextResponse.json({
            success: true,
            message: `Successfully pinged Google & IndexNow indexers for: ${url}`
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { url } = await request.json();
        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        console.log(`[Indexing API] POST Ping requested for URL: ${url}`);
        const sitemapUrl = 'https://aitechnews.co.in/sitemap.xml';
        const newsSitemapUrl = 'https://aitechnews.co.in/news-sitemap.xml';
        
        const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
        const googleNewsPingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(newsSitemapUrl)}`;
        const indexNowUrl = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(url)}&key=aitechnews2026indexnow`;

        await Promise.allSettled([
            fetch(googlePingUrl),
            fetch(googleNewsPingUrl),
            fetch(indexNowUrl)
        ]);

        return NextResponse.json({ 
            success: true, 
            message: `Successfully pinged Google Indexer, Google News & IndexNow for URL: ${url}` 
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
