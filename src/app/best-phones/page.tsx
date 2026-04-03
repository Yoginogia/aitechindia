import BestPhonesClient from './BestPhonesClient';

export const metadata = {
    title: 'Best Phones in India 2026 — Expert Picks by Budget | AITechNews',
    description: 'India mein best smartphone kaunsa hai? Budget ke hisaab se filter karo aur expert-scored phones dekhein — Under ₹20K, ₹30K, ₹50K. Amazon & Flipkart direct links.',
    keywords: ['best phones india 2026', 'best smartphone under 20000', 'best phone under 30000', 'best mobile phone india', 'top phones 2026'],
    openGraph: {
        title: 'Best Phones in India 2026 — AITechNews Expert Picks',
        description: 'Budget set karo, best phone paao. Under ₹20K to ₹1L+ — India ke best smartphones with Amazon & Flipkart links.',
        type: 'website',
    },
};

export default function BestPhonesPage() {
    return (
        <div className="w-full min-h-screen bg-background text-foreground">
            <BestPhonesClient />
        </div>
    );
}
