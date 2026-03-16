import Link from 'next/link';

export const metadata = {
    title: 'Top 10 Crypto News | AITechIndia',
    description: 'Latest updates from the cryptocurrency and blockchain world.',
};

const CRYPTO_NEWS = [
    {
        title: "Bitcoin (BTC) ने तोड़ा $74,000 का रेज़िस्टेंस, मार्केट में $2.6 Trillion की रैली!",
        date: "Mar 16, 2026",
        source: "CoinDesk",
        trend: "up",
        url: "#",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "🔥 20 Millionth Bitcoin माइन हो गया! अब सिर्फ 1 Million BTC बाकी — Scarcity बढ़ी",
        date: "Mar 15, 2026",
        source: "CryptoSlate",
        trend: "up",
        url: "#",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "US Fed का बड़ा फैसला आज: क्या Interest Rates होंगे कम? Crypto मार्केट की नज़र",
        date: "Mar 16, 2026",
        source: "Bloomberg",
        trend: "neutral",
        url: "#",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "SEC और CFTC ने मिलाया हाथ: 'Project Crypto' से आएगा Regulation में बड़ा बदलाव",
        date: "Mar 14, 2026",
        source: "Lowenstein",
        trend: "neutral",
        url: "#",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Ethereum (ETH) 6% उछला, $3,243 पर ट्रेड हो रहा — Spot ETF Inflows बढ़े",
        date: "Mar 16, 2026",
        source: "CryptoNews",
        trend: "up",
        url: "#",
        image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "MicroStrategy (Strategy Inc.) ने खरीदे 17,000 और BTC — Total Holdings: 7,38,731 BTC!",
        date: "Mar 15, 2026",
        source: "The Block",
        trend: "up",
        url: "#",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Solana Alpenglow अपग्रेड: 100x Finality Improvement, SOL में बड़ी तेज़ी की उम्मीद",
        date: "Mar 14, 2026",
        source: "AITechIndia",
        trend: "up",
        url: "#",
        image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Spot Bitcoin ETFs में $1.34 Billion की इनफ्लो, 5 हफ़्तों बाद Withdrawals रुकी",
        date: "Mar 13, 2026",
        source: "IG Markets",
        trend: "up",
        url: "#",
        image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Crypto Fear & Greed Index: 39 दिनों से 'Extreme Fear' — Smart Money कर रही Accumulation",
        date: "Mar 16, 2026",
        source: "CapitalStreetFX",
        trend: "neutral",
        url: "#",
        image: "https://images.unsplash.com/photo-1622630998477-20b41cd0e0ae?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Canada vs Crypto Scams: 'Operation Atlantic' से दुनिया भर में Fraud पर शिकंजा",
        date: "Mar 12, 2026",
        source: "CP24",
        trend: "neutral",
        url: "#",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=400"
    }
];

export default function CryptoNewsPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
            <div className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Top 10 <span className="gradient-text">Crypto News</span>
                </h1>
                <p className="text-muted-foreground">क्रिप्टोकरेंसी और ब्लॉकचैन दुनिया की 10 सबसे बड़ी और ताज़ा ख़बरें। (Updated: 16 March 2026)</p>
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
                            {news.trend === 'up' && <span className="text-green-500 bg-green-500/10 px-3 py-1 rounded-full text-xs font-medium border border-green-500/20">Bullish 📈</span>}
                            {news.trend === 'down' && <span className="text-red-500 bg-red-500/10 px-3 py-1 rounded-full text-xs font-medium border border-red-500/20">Bearish 📉</span>}
                            {news.trend === 'neutral' && <span className="text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full text-xs font-medium border border-yellow-500/20">Neutral ⚖️</span>}
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
