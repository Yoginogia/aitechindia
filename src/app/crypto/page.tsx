'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CRYPTO_NEWS = [
    {
        title: "Bitcoin (BTC) ने तोड़ा $74,000 का रेज़िस्टेंस, मार्केट में $2.6 Trillion की रैली!",
        date: "Mar 16, 2026",
        source: "CoinDesk",
        trend: "up",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=400",
        content: "क्रिप्टो मार्केट में भारी उछाल देखा गया है। Bitcoin ने $74,000 का मजबूत रेज़िस्टेंस लेवल तोड़ दिया है, जो पिछले 5 हफ़्तों में पहली बार हुआ है। कुल क्रिप्टो मार्केट कैप $2.6 Trillion तक पहुँच गया है। एक्सपर्ट्स का कहना है कि Institutional Demand फिर से बढ़ रही है, और Spot Bitcoin ETFs में इस महीने $1.34 Billion की इनफ्लो आई है। हालांकि, कुछ एनालिस्ट्स का मानना है कि यह रैली एक 'Short Squeeze' हो सकती है, क्योंकि $74K ज़ोन में बहुत सारी शॉर्ट पोज़ीशंस लिक्विडेट हुई हैं।"
    },
    {
        title: "🔥 20 Millionth Bitcoin माइन हो गया! अब सिर्फ 1 Million BTC बाकी — Scarcity बढ़ी",
        date: "Mar 15, 2026",
        source: "CryptoSlate",
        trend: "up",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=400",
        content: "Bitcoin के इतिहास में एक बड़ा milestone आ गया है। 20 Millionth Bitcoin माइन हो चुका है, यानी कुल 21 Million में से अब सिर्फ 1 Million BTC बाकी हैं माइन होने को। यह Bitcoin की scarcity (कमी) को और बढ़ा देता है। Satoshi Nakamoto ने Bitcoin को इसी तरह डिज़ाइन किया था — जितने ज़्यादा BTC माइन होंगे, उतना ही मुश्किल होगा नए Bitcoin निकालना। यह gold जैसी digital scarcity है जो Bitcoin को 'Digital Gold' बनाती है।"
    },
    {
        title: "US Fed का बड़ा फैसला आज: क्या Interest Rates होंगे कम? Crypto मार्केट की नज़र",
        date: "Mar 16, 2026",
        source: "Bloomberg",
        trend: "neutral",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400",
        content: "US Federal Reserve की दो-दिवसीय March मीटिंग (16-17 March) शुरू हो चुकी है। 18 March को Rate Decision और Press Conference होगी। फिलहाल Rates 3.5-3.75% पर हैं और Fed के hold करने की उम्मीद है। लेकिन ट्रेडर्स future rate cuts के hints पर नज़र रखेंगे। अगर Fed dovish (नरम) signal देता है, तो Crypto में बड़ी तेज़ी आ सकती है। Hormuz Crisis की वजह से Oil $95-110 पर है, जो stagflation का ख़तरा पैदा कर रहा है।"
    },
    {
        title: "SEC और CFTC ने मिलाया हाथ: 'Project Crypto' से आएगा Regulation में बड़ा बदलाव",
        date: "Mar 14, 2026",
        source: "Lowenstein",
        trend: "neutral",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=400",
        content: "11 March को SEC और CFTC ने एक MOU (Memorandum of Understanding) साइन किया है। दोनों agencies 'Project Crypto' नाम से एक joint initiative शुरू करेंगी जो crypto products की definitions, clearing frameworks, और regulatory reporting को modernize करेगी। यह कदम crypto industry के लिए बहुत positive है, क्योंकि अब तक दोनों agencies आपस में लड़ती रहती थीं। अब coordination से clear rules बनेंगे जो investors और companies दोनों के लिए अच्छे होंगे।"
    },
    {
        title: "Ethereum (ETH) 6% उछला, $3,243 पर ट्रेड हो रहा — Spot ETF Inflows बढ़े",
        date: "Mar 16, 2026",
        source: "CryptoNews",
        trend: "up",
        image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&q=80&w=400",
        content: "Ethereum ने पिछले 24 घंटों में 6% की तेज़ी दिखाई है और अब $3,243 पर ट्रेड हो रहा है। Ether-linked ETFs में लगभग $180 Million की इनफ्लो आई है। XRP, Solana (SOL), और Dogecoin (DOGE) में भी gains दिखे हैं, जबकि Pepe, Polkadot, और Bonk ने double-digit gains दिए हैं। Overall crypto market sentiment improve हो रहा है, हालांकि Fear & Greed Index अभी भी neutral zone में है।"
    },
    {
        title: "MicroStrategy (Strategy Inc.) ने खरीदे 17,000 और BTC — Total: 7,38,731 BTC!",
        date: "Mar 15, 2026",
        source: "The Block",
        trend: "up",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400",
        content: "Strategy Inc. (पहले MicroStrategy) ने confirm किया है कि उन्होंने 17,000+ BTC और खरीदे हैं। इसके साथ उनकी total Bitcoin holdings 7,38,731 BTC हो गई हैं — जो किसी भी publicly traded company से सबसे ज़्यादा है। CEO Michael Saylor ने कहा कि Bitcoin corporate treasury के लिए सबसे बेहतर asset है। इससे institutional adoption का ट्रेंड और मजबूत हुआ है।"
    },
    {
        title: "Solana Alpenglow अपग्रेड: 100x Finality Improvement, SOL में तेज़ी की उम्मीद",
        date: "Mar 14, 2026",
        source: "AITechNews",
        trend: "up",
        image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=400",
        content: "Solana का बहुप्रतीक्षित Alpenglow अपग्रेड Q1 2026 में mainnet पर आ रहा है। यह upgrade transaction finality को 100 गुना तेज़ बनाएगा, जिससे Solana DeFi और gaming applications के लिए और भी attractive बनेगा। SOL की कीमत में इस announcement के बाद अच्छी तेज़ी देखी गई है। Developers community इस upgrade को Ethereum killer move मान रहे हैं।"
    },
    {
        title: "Spot Bitcoin ETFs में $1.34 Billion की इनफ्लो, 5 हफ़्तों बाद Withdrawals रुकी",
        date: "Mar 13, 2026",
        source: "IG Markets",
        trend: "up",
        image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=400",
        content: "इस महीने US-listed Spot Bitcoin ETFs में कुल $1.34 Billion की इनफ्लो आई है। एक ही दिन में $500 Million तक की buying देखी गई, जिससे 5 हफ़्तों की withdrawal streak टूट गई। BlackRock का iShares Bitcoin Trust (IBIT) सबसे ज़्यादा popular रहा। Institutional investors दोबारा crypto में interest दिखा रहे हैं, जो market recovery का strong signal है।"
    },
    {
        title: "Crypto Fear & Greed Index: 39 दिनों से 'Extreme Fear' — Smart Money कर रही Accumulation",
        date: "Mar 16, 2026",
        source: "CapitalStreetFX",
        trend: "neutral",
        image: "https://images.unsplash.com/photo-1622630998477-20b41cd0e0ae?auto=format&fit=crop&q=80&w=400",
        content: "Crypto Fear and Greed Index लगातार 39 दिनों से 'Extreme Fear' (15/100) ज़ोन में है। हालांकि, prices बढ़ रही हैं जो sentiment और price action के बीच divergence दिखाता है। History बताती है कि जब market में extreme fear हो और prices बढ़ रही हों, तो यह 'Smart Money accumulation' का signal होता है। बड़े investors सस्ते में खरीद रहे हैं जबकि retail investors डरे हुए हैं।"
    },
    {
        title: "Canada vs Crypto Scams: 'Operation Atlantic' से दुनिया भर में Fraud पर शिकंजा",
        date: "Mar 12, 2026",
        source: "CP24",
        trend: "neutral",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=400",
        content: "Canadian agencies ने US Secret Service, UK National Crime Agency, और UK Financial Conduct Authority के साथ मिलकर 'Operation Atlantic' शुरू किया है। यह operation crypto investment fraud को target कर रहा है, खासकर 'Approval Phishing' technique जिसमें scammers आपसे wallet approvals लेकर funds चुरा लेते हैं। Users को सलाह दी जा रही है कि unknown links पर click न करें और wallet permissions regular check करें।"
    }
];

export default function CryptoNewsPage() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

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
                    <div key={index} className="glass group overflow-hidden rounded-xl border border-border/50 transition-all hover:border-primary/30">
                        <button
                            onClick={() => toggleExpand(index)}
                            className="w-full text-left p-4 flex flex-col md:flex-row gap-4 md:items-center cursor-pointer"
                        >
                            <div className="flex-shrink-0 relative w-full md:w-40 h-48 md:h-28 rounded-lg overflow-hidden border border-border/50 bg-secondary/30">
                                <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-bold shadow">
                                    #{index + 1}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                    {news.title}
                                </h2>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <span>{news.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-border"></span>
                                    <span>Source: {news.source}</span>
                                </div>
                            </div>
                            <div className="flex flex-shrink-0 items-center gap-2">
                                {news.trend === 'up' && <span className="text-green-500 bg-green-500/10 px-3 py-1 rounded-full text-xs font-medium border border-green-500/20">Bullish 📈</span>}
                                {news.trend === 'down' && <span className="text-red-500 bg-red-500/10 px-3 py-1 rounded-full text-xs font-medium border border-red-500/20">Bearish 📉</span>}
                                {news.trend === 'neutral' && <span className="text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full text-xs font-medium border border-yellow-500/20">Neutral ⚖️</span>}
                                {expandedIndex === index ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                            </div>
                        </button>
                        {expandedIndex === index && (
                            <div className="px-4 pb-4 md:pl-48 border-t border-border/30 pt-4 animate-in fade-in duration-300">
                                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                    {news.content}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-12 p-6 glass rounded-xl border border-border/50 text-center">
                <p className="text-muted-foreground text-sm">
                    <strong>Disclaimer:</strong> Cryptocurrency investments are subject to market risks. Please do your own research before investing. AITechNews is not a financial advisor.
                </p>
            </div>
        </div>
    );
}
