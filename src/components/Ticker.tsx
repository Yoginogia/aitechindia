'use client';

import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const TICKER_DATA = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$74,210', change: '+2.4%', isUp: true },
    { symbol: 'ETH', name: 'Ethereum', price: '$3,850', change: '+5.1%', isUp: true },
    { symbol: 'SOL', name: 'Solana', price: '$352', change: '+12.3%', isUp: true },
    { symbol: 'TSLA', name: 'Tesla', price: '$185', change: '-1.2%', isUp: false },
    { symbol: 'AAPL', name: 'Apple', price: '$178', change: '+0.8%', isUp: true },
    { symbol: 'NVDA', name: 'Nvidia', price: '$940', change: '+3.5%', isUp: true },
    { symbol: 'RELIANCE', name: 'Reliance', price: '₹2,950', change: '+1.1%', isUp: true },
    { symbol: 'TCS', name: 'TCS', price: '₹4,120', change: '-0.5%', isUp: false },
    { symbol: 'DOGE', name: 'Dogecoin', price: '$0.18', change: '+8.2%', isUp: true },
];

export default function Ticker() {
    return (
        <div className="w-full bg-secondary border-b border-border/50 overflow-hidden relative z-40">
            <div className="flex w-full whitespace-nowrap py-2 animate-marquee hover:pause cursor-default">
                {/* Doubled the array to create a seamless infinite loop */}
                {[...TICKER_DATA, ...TICKER_DATA, ...TICKER_DATA].map((item, index) => (
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
                    100% { transform: translateX(-33.33%); } /* Translating 1/3 since array is tripled */
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
