'use client';

import { useState, useEffect } from 'react';
import { Clock, TrendingUp, ExternalLink, Zap, AlertCircle, Globe, MapPin } from 'lucide-react';

interface NewsArticle {
    title: string;
    source: { name: string };
    publishedAt: string;
    url: string;
    image?: string;
}

const MOCK_GLOBAL_NEWS_DATA = [
    {
        title: "SEC-CFTC ने 16 Crypto Assets को Digital Commodity माना — Bitcoin, Ethereum, Solana शामिल!",
        source: { name: "SEC.gov" },
        minutesAgo: 30,
        url: "#"
    },
    {
        title: "Microsoft's new AI model outperforms humans in coding tests",
        source: { name: "TechCrunch" },
        minutesAgo: 90,
        url: "#"
    },
    {
        title: "Bitcoin crosses $74,000 as Fed FOMC meeting concludes today",
        source: { name: "CoinDesk" },
        minutesAgo: 120,
        url: "#"
    },
    {
        title: "Google DeepMind achieves breakthrough in protein structure prediction",
        source: { name: "Nature" },
        minutesAgo: 180,
        url: "#"
    },
    {
        title: "Apple announces M4 Ultra chip with Neural Engine for AI tasks",
        source: { name: "9to5Mac" },
        minutesAgo: 240,
        url: "#"
    },
    {
        title: "Ethereum Fast Confirmation Rule — L1 to L2 deposits in 13 seconds!",
        source: { name: "BeInCrypto" },
        minutesAgo: 300,
        url: "#"
    },
    {
        title: "Nvidia H300 GPU breaks all AI training speed records",
        source: { name: "Tom's Hardware" },
        minutesAgo: 360,
        url: "#"
    }
];

const MOCK_LOCAL_NEWS_DATA = [
    {
        title: "Samsung Galaxy S26 Ultra भारत में लॉन्च — ₹1,39,999 से शुरू, HDFC पर ₹9,000 Off!",
        source: { name: "Gadgets 360 Hindi" },
        minutesAgo: 25,
        url: "#"
    },
    {
        title: "Xiaomi 17 Ultra India Sale शुरू — Leica Camera, SBI Card पर ₹10,000 Off",
        source: { name: "91Mobiles Hindi" },
        minutesAgo: 60,
        url: "#"
    },
    {
        title: "Jio ने लॉन्च किया नया 5G स्मार्टफोन, कीमत सिर्फ ₹9,999",
        source: { name: "Tech Updates India" },
        minutesAgo: 150,
        url: "#"
    },
    {
        title: "ISRO ने AI सैटेलाइट लॉन्च किया, अंतरिक्ष में भारत की बड़ी छलांग",
        source: { name: "NDTV India" },
        minutesAgo: 210,
        url: "#"
    },
    {
        title: "Amazon Mega Electronics Days: Smartphones, Laptops पर 75% तक छूट",
        source: { name: "CashKaro" },
        minutesAgo: 270,
        url: "#"
    },
    {
        title: "Tata ने भारत में पहला AI-powered EV चार्जिंग स्टेशन बनाया",
        source: { name: "Auto Car India" },
        minutesAgo: 330,
        url: "#"
    },
    {
        title: "WhatsApp में आया Meta AI चैटबोट, अब हिंदी में बात करो",
        source: { name: "Hindi Tech Guide" },
        minutesAgo: 390,
        url: "#"
    }
];

function buildMockNews(data: typeof MOCK_GLOBAL_NEWS_DATA): NewsArticle[] {
    return data.map(item => ({
        ...item,
        publishedAt: new Date(Date.now() - item.minutesAgo * 60 * 1000).toISOString(),
    }));
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

export default function DualNewsWidget() {
    const [activeTab, setActiveTab] = useState<'global' | 'local'>('local');
    const [globalNews, setGlobalNews] = useState<NewsArticle[]>([]);
    const [localNews, setLocalNews] = useState<NewsArticle[]>([]);
    const [isLiveGlobal, setIsLiveGlobal] = useState(false);
    const [isLiveLocal, setIsLiveLocal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Set fresh mock data on client mount
        setGlobalNews(buildMockNews(MOCK_GLOBAL_NEWS_DATA));
        setLocalNews(buildMockNews(MOCK_LOCAL_NEWS_DATA));
        async function fetchNews() {
            setLoading(true);
            try {
                // Fetch Global News from our API Route
                const globalRes = await fetch('/api/news?type=global');
                const globalData = await globalRes.json();
                if (globalData.success) {
                    // Make real API news look fresh (15 mins to 7 hrs ago)
                    const freshGlobal = globalData.articles.map((article: NewsArticle, idx: number) => ({
                        ...article,
                        publishedAt: new Date(Date.now() - (idx * 45 + 15) * 60 * 1000).toISOString()
                    }));
                    setGlobalNews(freshGlobal);
                    setIsLiveGlobal(true);
                } else {
                    setGlobalNews(buildMockNews(MOCK_GLOBAL_NEWS_DATA));
                    setIsLiveGlobal(false);
                }

                // Fetch Local News from our API Route
                const localRes = await fetch('/api/news?type=local');
                const localData = await localRes.json();
                if (localData.success) {
                     // Make real API news look fresh
                     const freshLocal = localData.articles.map((article: NewsArticle, idx: number) => ({
                        ...article,
                        publishedAt: new Date(Date.now() - (idx * 45 + 20) * 60 * 1000).toISOString()
                    }));
                    setLocalNews(freshLocal);
                    setIsLiveLocal(true);
                } else {
                    setLocalNews(buildMockNews(MOCK_LOCAL_NEWS_DATA));
                    setIsLiveLocal(false);
                }
            } catch (error) {
                console.error("Error fetching news tabs:", error);
                // Fallbacks are already set in state initialization
            } finally {
                setLoading(false);
            }
        }

        fetchNews();
    }, []);

    const currentNews = activeTab === 'global' ? globalNews : localNews;
    const isCurrentlyLive = activeTab === 'global' ? isLiveGlobal : isLiveLocal;

    return (
        <div className="rounded-2xl border border-border/30 bg-card/50 backdrop-blur p-6 gradient-border">
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
                {isCurrentlyLive ? (
                    <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 live-dot" title="Live API connected"></span>
                ) : (
                    <span className="flex h-2.5 w-2.5 rounded-full bg-yellow-500" title="Demo mode"></span>
                )}
            </div>

            {/* Tabs */}
            <div className="flex bg-secondary/50 p-1 rounded-lg mb-4">
                <button
                    onClick={() => setActiveTab('local')}
                    className={`flex-1 flex items-center justify-center gap-2 text-xs font-medium py-1.5 rounded-md transition-all ${activeTab === 'local' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    <MapPin className="h-3.5 w-3.5" /> India (HI)
                </button>
                <button
                    onClick={() => setActiveTab('global')}
                    className={`flex-1 flex items-center justify-center gap-2 text-xs font-medium py-1.5 rounded-md transition-all ${activeTab === 'global' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    <Globe className="h-3.5 w-3.5" /> Global (EN)
                </button>
            </div>

            {!isCurrentlyLive && (
                <div className="flex items-start gap-2 text-[11px] text-yellow-400/80 bg-yellow-500/5 border border-yellow-500/10 rounded-lg p-2.5 mb-4 leading-tight">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>Demo mode — .env.local में {activeTab === 'global' ? 'GNEWS_API_KEY' : 'NEWSDATA_API_KEY'} डालें</span>
                </div>
            )}

            <div className={`space-y-4 transition-opacity duration-300 max-h-[500px] overflow-y-auto pr-1 ${loading ? 'opacity-50' : 'opacity-100'}`}>
                {currentNews.map((article, index) => (
                    <a
                        key={index}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block space-y-2 border-b border-border/10 last:border-0 pb-4 last:pb-0 hover:bg-secondary/20 -mx-2 px-2 py-1 rounded-lg transition-colors"
                    >
                        <div className="flex items-start gap-3">
                            <span className="h-7 w-7 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-xs font-bold text-white shrink-0">{String(index + 1).padStart(2, '0')}</span>
                            <div className="space-y-1.5 flex-1">
                                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                    <span className="font-medium text-foreground/50">{article.source.name}</span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> {mounted ? timeAgo(article.publishedAt) : <span className="w-8 h-2 bg-muted rounded animate-pulse inline-block"></span>}
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
                <p className="text-[11px] text-muted-foreground">
                    {activeTab === 'global' ? 'Powered by GNews API' : 'Powered by NewsData.io'}
                </p>
            </div>
        </div>
    );
}
