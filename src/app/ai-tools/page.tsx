import AIToolsClient from './AIToolsClient';
import { getSortedPostsData } from '@/lib/markdown';

export const metadata = {
    title: 'Ultimate AI Tools Library 2026 | Free & Paid AI Database',
    description: 'AITechNews par discover karein top AI tools for students, video generation, coding, and office work. Interactive database aur direct access links.',
    alternates: { canonical: '/ai-tools' },
};

export default function AIToolsPage() {
    const allPosts = getSortedPostsData();
    // We'll consider both 'AI' and 'AI Tools' as relevant for the AI articles bottom section.
    const aiPosts = allPosts.filter(post => post.category === 'AI Tools' || post.category === 'AI');

    return <AIToolsClient aiPosts={aiPosts} />;
}
