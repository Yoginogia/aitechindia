import { NextResponse } from 'next/server';
import { getSortedPostsData } from '@/lib/markdown';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query) {
        return NextResponse.json({ results: [] });
    }

    const allPosts = getSortedPostsData();
    const lowercaseQuery = query.toLowerCase();

    const results = allPosts.filter((post) => {
        return (
            post.title.toLowerCase().includes(lowercaseQuery) ||
            post.excerpt.toLowerCase().includes(lowercaseQuery) ||
            post.category.toLowerCase().includes(lowercaseQuery)
        );
    });

    return NextResponse.json({ results });
}
