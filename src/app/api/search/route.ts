import { NextResponse } from 'next/server';
import { getSortedPostsData } from '@/lib/markdown';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query) {
        return NextResponse.json({ results: [] });
    }

    try {
        const allPosts = getSortedPostsData();
        const lowercaseQuery = query.toLowerCase();

        const results = allPosts.filter((post) => {
            return (
                (post.title || '').toLowerCase().includes(lowercaseQuery) ||
                (post.excerpt || '').toLowerCase().includes(lowercaseQuery) ||
                (post.category || '').toLowerCase().includes(lowercaseQuery)
            );
        }).slice(0, 20); // Limit to 20 results for performance

        return NextResponse.json({ results });
    } catch (error) {
        console.error('Search API error:', error);
        return NextResponse.json({ results: [], error: 'Search failed' }, { status: 500 });
    }
}
