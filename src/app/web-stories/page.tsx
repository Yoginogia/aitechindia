import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Google Web Stories | AITechNews',
    description: 'AITechNews ke Google Web Stories — Top AI aur Tech news aaj ki, quick swipeable format mein. Google Discover par bhi available!',
};

const STORIES = [
    {
        slug: 'rtx-6090-leaks',
        title: 'RTX 6090: The 800W Monster GPU!',
        subtitle: 'Can your PSU handle this beast? 48GB VRAM leaked.',
        category: 'Hardware',
        categoryColor: '#76b900',
        image: '/images/thumbnails/rtx_6090_leak.png',
        pages: 4,
        isTrending: true,
    },
    {
        slug: 'gpt-6-mystery',
        title: 'GPT-6 Leaked: The AGI Breakthrough?',
        subtitle: 'OpenAI Q* secret revealed. Human-level reasoning is here.',
        category: 'AI News',
        categoryColor: '#14b8a6',
        image: '/images/thumbnails/gpt_6_ai.png',
        pages: 4,
        isTrending: true,
    },
    {
        slug: 'meta-ai-chips',
        title: 'Meta MTIA: The NVIDIA Killer?',
        subtitle: 'Zuckerberg unveils 4 new custom AI chips.',
        category: 'AI News',
        categoryColor: '#0668E1',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=600&q=80',
        pages: 5,
    },
    {
        slug: 'iphone-18-se-leaks',
        title: 'iPhone 18 SE: Budget AI King?',
        subtitle: '₹48,900 price point leaked for India market.',
        category: 'Gadgets',
        categoryColor: '#f59e0b',
        image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=400&h=600&q=80',
        pages: 5,
    },
];

export default function WebStoriesGallery() {
    return (
        <main className="container mx-auto px-4 md:px-8 max-w-5xl py-12 md:py-20">
            {/* Header */}
            <div className="mb-12 text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-primary text-sm font-bold mb-6">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    Google Web Stories
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight gradient-text mb-4">
                    Web Stories
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                    Top tech news — swipeable format mein. Yeh real Google Web Stories hain jo Google Discover mein appear ho sakti hain!
                </p>
            </div>

            {/* Stories Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {STORIES.map((story) => (
                    <a
                        key={story.slug}
                        href={`/web-stories/${story.slug}.html`}
                        target="_blank"
                        rel="noopener"
                        className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-border/40 shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-end"
                    >
                        {/* Background Image */}
                        <img
                            src={story.image}
                            alt={story.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                        {/* Story Ring (like Instagram) */}
                        <div className="absolute top-3 left-3 p-1 rounded-full bg-gradient-to-tr from-primary via-purple-500 to-pink-500">
                            <div className="p-0.5 rounded-full bg-black">
                                <img src="https://aitechnews.co.in/logo.png" alt="AITechNews" className="w-8 h-8 rounded-full object-cover" />
                            </div>
                        </div>

                        {/* Pages badge */}
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full">
                            {story.pages} slides
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-4">
                            <span
                                className="text-xs font-bold px-2 py-0.5 rounded-full text-white mb-2 inline-block"
                                style={{ backgroundColor: story.categoryColor }}
                            >
                                {story.category}
                            </span>
                            <h2 className="text-white font-bold text-sm leading-tight line-clamp-3 mb-1">
                                {story.title}
                            </h2>
                            <p className="text-white/70 text-xs line-clamp-2">{story.subtitle}</p>
                        </div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
                                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                        </div>
                    </a>
                ))}

                {/* Coming Soon placeholder */}
                <div className="aspect-[9/16] rounded-2xl border-2 border-dashed border-border/40 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">Aur Stories</p>
                    <p className="text-muted-foreground text-xs mt-1">Jald aane wale hain!</p>
                </div>
            </div>

            {/* Google Discover Info Box */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-foreground mb-1">Real Google Web Stories</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Yeh AMP format mein banaye gaye real Web Stories hain. Google Discover par appear hone ke liye Google Search Console mein submit karein. Free mein lakhs of Indian readers tak pahuncho!
                        </p>
                    </div>
                </div>
            </div>

        </main>
    );
}
