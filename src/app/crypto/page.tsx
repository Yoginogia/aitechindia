import Link from 'next/link';

export const metadata = {
    title: 'Top 10 Crypto News | AITechIndia',
    description: 'Latest updates from the cryptocurrency and blockchain world.',
};

const CRYPTO_NEWS = [
    {
        title: "Bitcoin (BTC) ने छुआ नया All-Time High, 2026 में क्या है एक्सपर्ट्स की राय?",
        date: "Mar 13, 2026",
        source: "CoinDesk India",
        trend: "up",
        url: "/blog/bitcoin-all-time-high-2026",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Ethereum 3.0 अपडेट का ऐलान: Gas Fees में होगी भारी कटौती",
        date: "Mar 12, 2026",
        source: "CryptoNews",
        trend: "up",
        url: "/blog/ethereum-3-update-gas-fees",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Solana (SOL) नेटवर्क फिर हुआ डाउन: इन्वेस्टर्स में घबराहट",
        date: "Mar 11, 2026",
        source: "AITechIndia",
        trend: "down",
        url: "/latest",
        image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "ग्लोबल Crypto Regulations: भारत सरकार जल्द ला सकती है नया ड्राफ्ट",
        date: "Mar 10, 2026",
        source: "Economic Times",
        trend: "neutral",
        url: "/latest",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Binance ने भारत में शुरू की नई UPI सर्विस, ट्रेडिंग हुई और आसान",
        date: "Mar 09, 2026",
        source: "YourStory",
        trend: "up",
        url: "/latest",
        image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Top 5 Altcoins जो अप्रैल 2026 में दे सकते हैं 10x रिटर्न",
        date: "Mar 08, 2026",
        source: "AITechIndia",
        trend: "up",
        url: "/latest",
        image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "AI Crypto Tokens में उछाल: SingularityNET (AGIX) और Fetch.ai की पार्टनरशिप",
        date: "Mar 07, 2026",
        source: "CoinTelegraph",
        trend: "up",
        url: "/latest",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "US SEC ने खारिज किया नया Ethereum ETF, मार्केट में गिरावट",
        date: "Mar 06, 2026",
        source: "Bloomberg",
        trend: "down",
        url: "/latest",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Tether (USDT) ने जारी की Transparency Report, रिज़र्व को लेकर उठे सवाल ख़त्म",
        date: "Mar 05, 2026",
        source: "CryptoSlate",
        trend: "neutral",
        url: "/latest",
        image: "https://images.unsplash.com/photo-1622630998477-20b41cd0e0ae?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Web3 गेमिंग का बूम: नए Play-to-Earn (P2E) टोकन्स ने मचाई धूम",
        date: "Mar 04, 2026",
        source: "AITechIndia",
        trend: "up",
        url: "/latest",
        image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=400"
    }
];

export default function CryptoNewsPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
            <div className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Top 10 <span className="gradient-text">Crypto News</span>
                </h1>
                <p className="text-muted-foreground">क्रिप्टोकरेंसी और ब्लॉकचैन दुनिया की 10 सबसे बड़ी और ताज़ा ख़बरें।</p>
            </div>

            <div className="flex flex-col gap-4">
                {CRYPTO_NEWS.map((news, index) => (
                    <Link href={news.url} key={index} className="glass group overflow-hidden p-4 rounded-xl hover:bg-secondary/20 transition-all border border-border/50 flex flex-col md:flex-row gap-4 md:items-center">
                        <div className="flex-shrink-0 relative w-full md:w-40 h-48 md:h-28 rounded-lg overflow-hidden border border-border/50 bg-secondary/30">
                            <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-bold shadow">
                                #{index + 1}
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors cursor-pointer">
                                {news.title}
                            </h2>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span>{news.date}</span>
                                <span className="w-1 h-1 rounded-full bg-border"></span>
                                <span>Source: {news.source}</span>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-shrink-0">
                            {news.trend === 'up' && <span className="text-green-500 bg-green-500/10 px-3 py-1 rounded-full text-xs font-medium border border-green-500/20">Bullish</span>}
                            {news.trend === 'down' && <span className="text-red-500 bg-red-500/10 px-3 py-1 rounded-full text-xs font-medium border border-red-500/20">Bearish</span>}
                            {news.trend === 'neutral' && <span className="text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full text-xs font-medium border border-yellow-500/20">Neutral</span>}
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 p-6 glass rounded-xl border border-border/50 text-center">
                <p className="text-muted-foreground text-sm">
                    <strong>Disclaimer:</strong> Cryptocurrency investments are subject to market risks. Please do your own research before investing. AITechIndia is not a financial advisor.
                </p>
            </div>
        </div>
    );
}
