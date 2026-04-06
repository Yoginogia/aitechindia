import { Metadata } from 'next';
import BestLaptopsClient from './BestLaptopsClient';

export const metadata: Metadata = {
    title: 'Best Laptops in India 2026 | Top Picks for Students, Gaming & Office',
    description: 'Expert-curated list of the best laptops to buy in India right now. Filter by budget (Under 40K, 60K, 1L+) and use-case (Gaming, Students, Office). Includes detailed hardware specs.',
    keywords: ['best laptops 2026', 'best laptop under 50000', 'best gaming laptop india', 'laptops for students', 'laptop buying guide', 'top laptops india'],
};

export default function BestLaptopsPage() {
    return <BestLaptopsClient />;
}
