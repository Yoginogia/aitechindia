'use client';

import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { useEffect, useState } from 'react';

const STATIC_FALLBACK = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$74,210', change: '+2.4%', isUp: true },
    { symbol: 'ETH', name: 'Ethereum', price: '$3,850', change: '+5.1%', isUp: true },
    { symbol: 'SOL', name: 'Solana', price: '$352', change: '+12.3%', isUp: true },
    { symbol: 'DOGE', name: 'Dogecoin', price: '$0.18', change: '+8.2%', isUp: true },
    { symbol: 'ADA', name: 'Cardano', price: '$0.75', change: '-1.2%', isUp: false },
    { symbol: 'XRP', name: 'Ripple', price: '$0.62', change: '+0.5%', isUp: true },
    { symbol: 'BNB', name: 'BNB', price: '$610', change: '+1.1%', isUp: true },
    { symbol: 'TSLA', name: 'Tesla', price: '$185', change: '-1.2%', isUp: false },
    { symbol: 'AAPL', name: 'Apple', price: '$178', change: '+0.8%', isUp: true },
    { symbol: 'NVDA', name: 'Nvidia', price: '$940', change: '+3.5%', isUp: true },
];

export default function Ticker() {
    const [tickerData, setTickerData] = useState(STATIC_FALLBACK);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        async function fetchLivePrices() {
            try {
                // Cache check to prevent annoying CoinGecko 429 Rate Limit errors on reload
                const cached = localStorage.getItem('aitechnews_ticker_cache');
                const cacheTime = localStorage.getItem('aitechnews_ticker_time');
                if (cached && cacheTime && (Date.now() - parseInt(cacheTime) < 3 * 60 * 1000)) {
                    setTickerData(JSON.parse(cached));
                    return;
                }

                const ids = 'bitcoin,ethereum,solana,dogecoin,cardano,ripple,binancecoin';
                const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`);
                if (!res.ok) throw new Error('API Error/Rate Limit');
                const data = await res.json();

                const symbolMap: Record<string, string> = {
                    'bitcoin': 'BTC', 'ethereum': 'ETH', 'solana': 'SOL', 'dogecoin': 'DOGE',
                    'cardano': 'ADA', 'ripple': 'XRP', 'binancecoin': 'BNB'
                };
                const nameMap: Record<string, string> = {
                    'bitcoin': 'Bitcoin', 'ethereum': 'Ethereum', 'solana': 'Solana', 'dogecoin': 'Dogecoin',
                    'cardano': 'Cardano', 'ripple': 'Ripple', 'binancecoin': 'BNB'
                };

                const liveData = Object.keys(data).map(key => {
                    const price = data[key].usd;
                    const change = data[key].usd_24h_change;
                    return {
                        symbol: symbolMap[key],
                        name: nameMap[key],
                        price: price >= 1 ? `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : `$${price.toPrecision(4)}`,
                        change: `${change > 0 ? '+' : ''}${change?.toFixed(2) || '0.00'}%`,
                        isUp: change >= 0
                    };
                });

                // Merge live crypto with static stocks
                const finalData = [...liveData, ...STATIC_FALLBACK.filter(x => ['TSLA', 'AAPL', 'NVDA'].includes(x.symbol))];
                setTickerData(finalData);
                
                localStorage.setItem('aitechnews_ticker_cache', JSON.stringify(finalData));
                localStorage.setItem('aitechnews_ticker_time', Date.now().toString());
            } catch (err) {
                console.warn("CoinGecko Live API Error, using static fallback data", err);
            }
        }
        
        fetchLivePrices();
        const intervalId = setInterval(fetchLivePrices, 3 * 60 * 1000); // refresh every 3 minutes
        return () => clearInterval(intervalId);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) return (
        <div className="w-full bg-secondary border-b border-border/50 h-[37px] overflow-hidden z-40 relative"></div>
    );

    return (
        <div className="w-full bg-secondary border-b border-border/50 overflow-hidden relative z-40 pointer-events-none">
            <div className="flex w-full whitespace-nowrap py-2 animate-marquee hover:pause cursor-default pointer-events-auto">
                {/* Doubled the array to create a seamless infinite loop */}
                {[...tickerData, ...tickerData, ...tickerData].map((item, index) => (
                    <div key={`${item.symbol}-${index}`} className="flex items-center gap-2 mx-6 text-[13px] font-medium font-mono text-secondary-foreground">
                        <span className="font-semibold">{item.name} <span className="text-muted-foreground font-normal">({item.symbol})</span></span>
                        <span className="text-foreground tracking-tight">{item.price}</span>
                        <span className={`flex items-center font-bold text-xs ${item.isUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                            {item.isUp ? <TrendingUp className="h-3 w-3 mr-0.5" /> : <TrendingDown className="h-3 w-3 mr-0.5" />}
                            {item.change}
                        </span>
                        {/* Divider Dot */}
                        <div className="w-1.5 h-1.5 rounded-full bg-border ml-6"></div>
                    </div>
                ))}
            </div>
            
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee {
                    animation: marquee 35s linear infinite;
                    display: flex;
                    width: max-content;
                }
                .pause {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
