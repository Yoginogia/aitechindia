import Link from 'next/link';
import { TrendingUp, ArrowRight, Activity, Bitcoin } from 'lucide-react';

export default function DeltaAdBanner() {
  return (
    <div className="w-full relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-r from-background via-purple-900/20 to-background shadow-lg mb-8 group">
      {/* Background decorations */}
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-[50px] transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
      <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-blue-500/20 blur-[50px] transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6 backdrop-blur-sm">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground bg-background/50 px-2 py-0.5 rounded-full border border-border/50">Sponsored Promotion</span>
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              <Activity className="h-3 w-3" /> Live Crypto Trading
            </span>
          </div>
          <h3 className="text-xl md:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2 flex-wrap drop-shadow-sm">
            Trade Crypto Like a Pro with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-extrabold flex items-center gap-1"><Bitcoin className="h-7 w-7 text-purple-400 inline"/> Delta Exchange</span>
          </h3>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed">
            India's most trusted platforms for Bitcoin & Options trading. Join today and get a <strong className="text-foreground">Flat 10% Fee Discount</strong> on your trades for 6 months using referral code <span className="bg-primary/20 text-primary px-2 py-0.5 rounded font-mono font-bold tracking-widest border border-primary/30">TJEGGJ</span>.
          </p>
        </div>
        
        <div className="w-full md:w-auto flex flex-col items-center">
          <Link 
            href="https://www.delta.exchange/?code=TJEGGJ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] active:scale-95"
          >
            Claim 10% Discount Now <TrendingUp className="h-4 w-4" />
          </Link>
          <p className="text-center text-[11px] text-muted-foreground mt-3 font-medium">Safe & Secure • Quick KYC</p>
        </div>
      </div>
    </div>
  );
}
