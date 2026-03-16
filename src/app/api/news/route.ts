import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'global';
    
    // Global News -> GNews API (English)
    if (type === 'global') {
        const apiKey = process.env.GNEWS_API_KEY;
        if (!apiKey || apiKey === 'your_api_key_here') {
            return NextResponse.json({ success: false, error: 'No API Key' }, { status: 400 });
        }
        try {
            const res = await fetch(
                `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&max=10&apikey=${apiKey}`,
                { next: { revalidate: 900 } }
            );
            if (!res.ok) throw new Error('Global fetch failed');
            const data = await res.json();
            const articles = data.articles.map((a: any) => ({
                title: a.title,
                source: { name: a.source.name },
                publishedAt: a.publishedAt,
                url: a.url,
            }));
            return NextResponse.json({ success: true, articles });
        } catch (error) {
            return NextResponse.json({ success: false, error: 'Failed to fetch global news' }, { status: 500 });
        }
    }
    
    // Local News -> NewsData.io API (Hindi)
    if (type === 'local') {
        const apiKey = process.env.NEWSDATA_API_KEY;
        if (!apiKey || apiKey === 'your_newsdata_api_key_here') {
            return NextResponse.json({ success: false, error: 'No API Key' }, { status: 400 });
        }
        try {
            // Using NewsData.io API for Hindi Technology news
            const res = await fetch(
                `https://newsdata.io/api/1/latest?apikey=${apiKey}&category=technology&language=hi&size=10`,
                { next: { revalidate: 900 } }
            );
            if (!res.ok) throw new Error('Local fetch failed');
            const data = await res.json();
            const articles = data.results.map((a: any) => ({
                title: a.title,
                source: { name: a.source_id || 'Tech News Source' },
                publishedAt: a.pubDate,
                url: a.link,
            }));
            return NextResponse.json({ success: true, articles });
        } catch (error) {
            return NextResponse.json({ success: false, error: 'Failed to fetch local news' }, { status: 500 });
        }
    }

    return NextResponse.json({ success: false, error: 'Invalid type' }, { status: 400 });
}
