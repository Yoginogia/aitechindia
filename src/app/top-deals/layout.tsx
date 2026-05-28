export const metadata = {
    title: 'Top Deals & Gadgets | AITechNews',
    description: 'Best deals on laptops, mobiles, and tech gadgets curated by AITechNews.',
    alternates: { canonical: '/top-deals' },
    openGraph: {
        title: 'Top Deals & Gadgets | AITechNews',
        description: 'Best deals on laptops, mobiles, and tech gadgets curated by AITechNews.',
        url: 'https://aitechnews.co.in/top-deals',
        siteName: 'AITechNews',
        images: [{ url: '/logo.png', width: 512, height: 512 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Top Deals & Gadgets | AITechNews',
        description: 'Best deals on laptops, mobiles, and tech gadgets curated by AITechNews.',
        images: ['/logo.png'],
    }
};

export default function TopDealsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
