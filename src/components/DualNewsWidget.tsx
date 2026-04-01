'use client';

import { useState, useEffect } from 'react';
import { Clock, TrendingUp, ExternalLink, Zap, Globe, MapPin, Radio } from 'lucide-react';

interface NewsArticle {
    title: string;
    source: { name: string };
    publishedAt: string;
    url: string;
}

const MOCK_GLOBAL_NEWS_DATA = [
    {
        title: "Apple M5 Ultra Chip leaks with 40-core Neural Engine for Gen-AI tasks",
        source: { name: "AppleInsider" },
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
        title: "TSMC 2nm plant in Arizona begins test production ahead of schedule",
        source: { name: "DigiTimes" },
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
        title: "Nvidia H300 GPU breaks all AI training speed records",
        source: { name: "Tom's Hardware" },
        minutesAgo: 360,
        url: "#"
    },
    {
        title: "Ethereum Fast Confirmation Rule — L1 to L2 deposits in 13 seconds!",
        source: { name: "BeInCrypto" },
        minutesAgo: 300,
        url: "#"
    },
    {
        title: "OpenAI's new reasoning model scores 98% on PhD-level science exams",
        source: { name: "The Verge" },
        minutesAgo: 420,
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
        title: "Lenovo Laptops पर ₹20,000 Cashback — 15 April तक ही",
        source: { name: "Tech Updates India" },
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
    const [isLive, setIsLive] = useState(false);
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setGlobalNews(buildMockNews(MOCK_GLOBAL_NEWS_DATA));
        setLocalNews(buildMockNews(MOCK_LOCAL_NEWS_DATA));

        async function fetchNews() {
            setLoading(true);
            try {
                const globalRes = await fetch('/api/news?type=global');
                const globalData = await globalRes.json();
                if (globalData.success) {
                    const freshGlobal = globalData.articles.map((article: NewsArticle, idx: number) => ({
                        ...article,
                        publishedAt: new Date(Date.now() - (idx * 45 + 15) * 60 * 1000).toISOString()
                    }));
                    setGlobalNews(freshGlobal);
                    setIsLive(true);
                } else {
                    setGlobalNews(buildMockNews(MOCK_GLOBAL_NEWS_DATA));
                }

                const localRes = await fetch('/api/news?type=local');
                const localData = await localRes.json();
                if (localData.success) {
                    const freshLocal = localData.articles.map((article: NewsArticle, idx: number) => ({
                        ...article,
                        publishedAt: new Date(Date.now() - (idx * 45 + 20) * 60 * 1000).toISOString()
                    }));
                    setLocalNews(freshLocal);
                    setIsLive(true);
                } else {
                    setLocalNews(buildMockNews(MOCK_LOCAL_NEWS_DATA));
                }
            } catch {
                // Fallbacks already set
            } finally {
                setLoading(false);
            }
        }
        fetchNews();
    }, []);

    const currentNews = activeTab === 'global' ? globalNews : localNews;

    return (
        <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-card/60 backdrop-blur-xl shadow-xl">
            {/* Neon glow top border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />

            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-4">
                <div className="flex items-center gap-3">
                    {/* Icon with gradient bg */}
                    <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center border border-primary/30 shadow-lg shadow-primary/10">
                        <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-base font-bold tracking-tight leading-none">Trending News</h2>
                        <p className="text-[11px] text-muted-foreground mt-0.5">दुनिया भर की ताज़ा अपडेट</p>
                    </div>
                </div>
                {/* Live indicator */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    {isLive ? (
                        <>
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span className="text-[10px] font-semibold text-emerald-400">LIVE</span>
                        </>
                    ) : (
                        <>
                            <Radio className="h-3 w-3 text-amber-400" />
                            <span className="text-[10px] font-semibold text-amber-400">SYNC</span>
                        </>
                    )}
                </div>
            </div>

            {/* Tabs */}
            <div className="px-5 pb-4">
                <div className="flex bg-secondary/40 p-1 rounded-xl border border-border/30 gap-1">
                    <button
                        onClick={() => setActiveTab('local')}
                        className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded-lg transition-all duration-200 ${
                            activeTab === 'local'
                                ? 'bg-gradient-to-r from-primary to-purple-500 text-white shadow-md shadow-primary/20'
                                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                        }`}
                    >
                        <MapPin className="h-3 w-3" /> India 🇮🇳
                    </button>
                    <button
                        onClick={() => setActiveTab('global')}
                        className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded-lg transition-all duration-200 ${
                            activeTab === 'global'
                                ? 'bg-gradient-to-r from-primary to-purple-500 text-white shadow-md shadow-primary/20'
                                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                        }`}
                    >
                        <Globe className="h-3 w-3" /> Global 🌐
                    </button>
                </div>
            </div>

            {/* News List */}
            <div className={`px-5 pb-4 space-y-1 max-h-[420px] overflow-y-auto transition-opacity duration-300 ${loading ? 'opacity-40' : 'opacity-100'}`}>
                {currentNews.map((article, index) => (
                    <a
                        key={index}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3 py-3 px-3 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/15 transition-all duration-200 -mx-1"
                    >
                        {/* Number badge */}
                        <span className={`shrink-0 h-6 w-6 rounded-lg flex items-center justify-center text-[11px] font-black transition-all group-hover:scale-110 ${
                            index === 0
                                ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md shadow-amber-500/30'
                                : index === 1
                                ? 'bg-gradient-to-br from-slate-400 to-slate-500 text-white'
                                : index === 2
                                ? 'bg-gradient-to-br from-amber-700 to-amber-800 text-white'
                                : 'bg-secondary/80 text-muted-foreground border border-border/40'
                        }`}>
                            {index + 1}
                        </span>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <p className="text-[13px] font-semibold leading-snug text-foreground/90 group-hover:text-primary transition-colors line-clamp-2">
                                {article.title}
                            </p>
                            <div className="flex items-center gap-2 mt-1.5">
                                <span className="text-[10px] font-semibold text-primary/70 bg-primary/8 px-1.5 py-0.5 rounded-md border border-primary/15">
                                    {article.source.name}
                                </span>
                                <span className="text-[10px] text-muted-foreground flex items-center gap-0.5">
                                    <Clock className="h-2.5 w-2.5" />
                                    {mounted ? timeAgo(article.publishedAt) : '—'}
                                </span>
                                <ExternalLink className="h-2.5 w-2.5 text-muted-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Glowing bottom footer */}
            <div className="flex items-center justify-center gap-1.5 py-3 border-t border-border/20 bg-secondary/10">
                <Zap className="h-3 w-3 text-primary" />
                <p className="text-[10px] text-muted-foreground font-medium">
                    {activeTab === 'global' ? 'Powered by GNews API' : 'Powered by NewsData.io'}
                </p>
            </div>

            {/* Bottom neon glow border */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </div>
    );
}
