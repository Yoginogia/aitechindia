import { Clock, TrendingUp, ExternalLink, Zap, AlertCircle } from 'lucide-react';

interface NewsArticle {
    title: string;
    source: { name: string };
    publishedAt: string;
    url: string;
    image?: string;
}

// Mock data as fallback (jab API key na ho ya API fail ho)
const MOCK_NEWS: NewsArticle[] = [
    {
        title: "Microsoft का नया AI model coding tests में इंसानों से आगे निकला",
        source: { name: "TechCrunch" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
        url: "#"
    },
    {
        title: "Tesla ने Texas में fully autonomous CyberCab prototype दिखाया",
        source: { name: "The Verge" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
        url: "#"
    },
    {
        title: "Europe ने AI Act pass किया — दुनिया का पहला बड़ा AI regulation",
        source: { name: "Wired" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
        url: "#"
    },
    {
        title: "NVIDIA RTX 6000 series announce — native AI upscaling built-in",
        source: { name: "PC Gamer" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
        url: "#"
    },
    {
        title: "Quantum computing में breakthrough: Error rates 1% से नीचे आई",
        source: { name: "MIT Tech Review" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
        url: "#"
    }
];

async function getLiveTechNews(): Promise<{ articles: NewsArticle[]; isLive: boolean }> {
    const apiKey = process.env.GNEWS_API_KEY;

    // Agar API key nahi hai ya placeholder hai, mock data use karo
    if (!apiKey || apiKey === 'your_api_key_here') {
        return { articles: MOCK_NEWS, isLive: false };
    }

    try {
        const res = await fetch(
            `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&max=5&apikey=${apiKey}`,
            { next: { revalidate: 3600 } } // Har 1 ghante mein refresh (free tier ke liye perfect)
        );

        if (!res.ok) {
            console.error('GNews API error:', res.status);
            return { articles: MOCK_NEWS, isLive: false };
        }

        const data = await res.json();

        const articles: NewsArticle[] = data.articles.map((article: { title: string; source: { name: string }; publishedAt: string; url: string; image?: string }) => ({
            title: article.title,
            source: { name: article.source.name },
            publishedAt: article.publishedAt,
            url: article.url,
            image: article.image,
        }));

        return { articles, isLive: true };
    } catch (error) {
        console.error('Failed to fetch news:', error);
        return { articles: MOCK_NEWS, isLive: false };
    }
}

function timeAgo(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'अभी-अभी';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} मिनट पहले`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} घंटे पहले`;
    return `${Math.floor(diffInSeconds / 86400)} दिन पहले`;
}

export default async function LiveNewsWidget() {
    const { articles, isLive } = await getLiveTechNews();

    return (
        <div className="rounded-2xl border border-border/30 bg-card/50 backdrop-blur p-6 sticky top-24 gradient-border">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/20">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold tracking-tight">Trending News</h2>
                        <p className="text-xs text-muted-foreground">दुनिया भर से ताज़ा अपडेट</p>
                    </div>
                </div>
                {isLive ? (
                    <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 live-dot" title="Live — Real API connected"></span>
                ) : (
                    <span className="flex h-2.5 w-2.5 rounded-full bg-yellow-500" title="Demo mode — API key needed"></span>
                )}
            </div>

            {!isLive && (
                <div className="flex items-start gap-2 text-xs text-yellow-400/80 bg-yellow-500/5 border border-yellow-500/10 rounded-lg p-3 mb-4">
                    <AlertCircle className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                    <span>Demo mode — API key connect करें तो real news आएंगी</span>
                </div>
            )}

            <div className="space-y-4">
                {articles.map((article, index) => (
                    <a
                        key={index}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block space-y-2 border-b border-border/10 last:border-0 pb-4 last:pb-0 hover:bg-secondary/20 -mx-2 px-2 py-1 rounded-lg transition-colors"
                    >
                        <div className="flex items-start gap-3">
                            <span className="text-xs font-bold text-muted-foreground/50 mt-0.5 shrink-0">0{index + 1}</span>
                            <div className="space-y-1.5 flex-1">
                                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                    <span className="font-medium text-foreground/50">{article.source.name}</span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> {timeAgo(article.publishedAt)}
                                        <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-5 pt-4 border-t border-border/20 flex justify-center items-center gap-2">
                <Zap className="h-3 w-3 text-primary" />
                <p className="text-xs text-muted-foreground">
                    {isLive ? 'हर घंटे auto-update होता है' : 'API key connect करें — gnews.io से free मिलेगा'}
                </p>
            </div>
        </div>
    );
}
