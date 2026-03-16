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

const MOCK_GLOBAL_NEWS: NewsArticle[] = [
    {
        title: "Microsoft's new AI model outperforms humans in coding tests",
        source: { name: "TechCrunch" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
        url: "#"
    },
    {
        title: "Tesla reveals fully autonomous CyberCab prototype in Texas",
        source: { name: "The Verge" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
        url: "#"
    },
    {
        title: "Europe passes AI Act — the world's first major AI regulation",
        source: { name: "Wired" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
        url: "#"
    },
    {
        title: "Google DeepMind achieves breakthrough in protein structure prediction",
        source: { name: "Nature" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
        url: "#"
    },
    {
        title: "Apple announces M4 Ultra chip with Neural Engine for AI tasks",
        source: { name: "9to5Mac" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
        url: "#"
    },
    {
        title: "Samsung Galaxy S26 Ultra leaked specs reveal AI camera features",
        source: { name: "SamMobile" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 7).toISOString(),
        url: "#"
    },
    {
        title: "Nvidia H300 GPU breaks all AI training speed records",
        source: { name: "Tom's Hardware" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
        url: "#"
    }
];

const MOCK_LOCAL_NEWS: NewsArticle[] = [
    {
        title: "भारत में AI का बढ़ता इस्तेमाल: IT कंपनियों ने शुरू की नई ट्रेनिंग",
        source: { name: "Tech News Hindi" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
        url: "#"
    },
    {
        title: "Jio ने लॉन्च किया नया 5G स्मार्टफोन, कीमत सिर्फ ₹9,999",
        source: { name: "Gadgets 360 Hindi" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 150).toISOString(),
        url: "#"
    },
    {
        title: "Paytm ऐप में आए नए फीचर्स, अब UPI पेमेंट होगा और भी तेज़",
        source: { name: "Tech Updates India" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
        url: "#"
    },
    {
        title: "ISRO ने AI सैटेलाइट लॉन्च किया, अंतरिक्ष में भारत की बड़ी छलांग",
        source: { name: "NDTV India" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
        url: "#"
    },
    {
        title: "Flipkart Big Savings Days: स्मार्टफोन पर 40% तक की छूट",
        source: { name: "91Mobiles Hindi" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
        url: "#"
    },
    {
        title: "Tata ने भारत में पहला AI-powered EV चार्जिंग स्टेशन बनाया",
        source: { name: "Auto Car India" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
        url: "#"
    },
    {
        title: "WhatsApp में आया Meta AI चैटबोट, अब हिंदी में बात करो",
        source: { name: "Hindi Tech Guide" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 7).toISOString(),
        url: "#"
    }
];

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
    const [globalNews, setGlobalNews] = useState<NewsArticle[]>(MOCK_GLOBAL_NEWS);
    const [localNews, setLocalNews] = useState<NewsArticle[]>(MOCK_LOCAL_NEWS);
    const [isLiveGlobal, setIsLiveGlobal] = useState(false);
    const [isLiveLocal, setIsLiveLocal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        async function fetchNews() {
            setLoading(true);
            try {
                // Fetch Global News from our API Route
                const globalRes = await fetch('/api/news?type=global');
                const globalData = await globalRes.json();
                if (globalData.success) {
                    setGlobalNews(globalData.articles);
                    setIsLiveGlobal(true);
                } else {
                    setGlobalNews(MOCK_GLOBAL_NEWS);
                    setIsLiveGlobal(false);
                }

                // Fetch Local News from our API Route
                const localRes = await fetch('/api/news?type=local');
                const localData = await localRes.json();
                if (localData.success) {
                    setLocalNews(localData.articles);
                    setIsLiveLocal(true);
                } else {
                    setLocalNews(MOCK_LOCAL_NEWS);
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
                            <span className="text-xs font-bold text-muted-foreground/50 mt-0.5 shrink-0">0{index + 1}</span>
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
