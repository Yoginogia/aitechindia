'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, IndianRupee } from 'lucide-react';

const COINS = [
    { name: 'Bitcoin (BTC)', current: 69000, target: 120000 },
    { name: 'Solana (SOL)', current: 210, target: 450 },
    { name: 'Ethereum (ETH)', current: 3500, target: 8000 },
    { name: 'Fetch.ai (FET)', current: 2.5, target: 10 }
];

// $1 = ₹83 (approx in 2026)
const USD_TO_INR = 83;

export default function CryptoCalculator() {
    const [amount, setAmount] = useState<string>('10000');
    const [coin, setCoin] = useState(COINS[0]);

    const numAmt = parseFloat(amount) || 0;
    
    // Growth multiplier
    const multiplier = coin.target / coin.current;
    
    // Future value
    const futureValue = numAmt * multiplier;
    
    // Profit
    const profit = futureValue - numAmt;
    
    // ROI percentage
    const roi = ((futureValue - numAmt) / numAmt) * 100;

    return (
        <div className="bg-gradient-to-br from-yellow-500/10 via-background to-background border border-yellow-500/20 rounded-3xl p-6 md:p-8 shadow-xl mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                    <Calculator className="w-5 h-5" />
                </div>
                <div>
                    <h2 className="text-xl font-bold">Crypto ROI Calculator (2026 Target)</h2>
                    <p className="text-sm text-muted-foreground">Dekhiye agar aaj aap invest karein, toh 2026 end tak kitna return mil sakta hai!</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inputs */}
                <div className="space-y-5">
                    <div>
                        <label className="text-sm font-semibold text-muted-foreground mb-1.5 block">Select Coin</label>
                        <select 
                            className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500/50 appearance-none"
                            value={coin.name}
                            onChange={(e) => setCoin(COINS.find(c => c.name === e.target.value) || COINS[0])}
                        >
                            {COINS.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-muted-foreground mb-1.5 block">Investment Amount (₹)</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <IndianRupee className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <input 
                                type="number" 
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full bg-secondary/50 border border-border/50 rounded-xl pl-10 pr-4 py-3 text-foreground font-bold focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                                placeholder="10000"
                            />
                        </div>
                    </div>
                </div>

                {/* Results Card */}
                <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute -right-4 -top-4 opacity-10">
                        <TrendingUp className="w-32 h-32 text-yellow-500" />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="text-sm font-semibold text-muted-foreground mb-1">Estimated Future Value</div>
                        <div className="text-4xl md:text-5xl font-black text-foreground mb-4 tabular-nums">
                            ₹{futureValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-background/50 rounded-xl p-3 border border-border/50">
                                <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Profit</div>
                                <div className="text-green-500 font-bold text-lg">+₹{profit.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</div>
                            </div>
                            <div className="bg-background/50 rounded-xl p-3 border border-border/50">
                                <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">ROI</div>
                                <div className="text-green-500 font-bold text-lg">+{roi.toFixed(1)}%</div>
                            </div>
                        </div>
                        
                        <div className="mt-4 text-[10px] text-muted-foreground px-1">
                            * Based on analyst predictions of {coin.name} hitting ${coin.target.toLocaleString()} from current ${coin.current.toLocaleString()}. Not financial advice.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
