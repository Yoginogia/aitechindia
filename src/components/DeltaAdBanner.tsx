import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function DeltaAdBanner() {
  return (
    <div className="w-full relative overflow-hidden rounded-2xl border border-orange-500/30 bg-[#0f172a] shadow-[0_4px_30px_rgba(249,115,22,0.1)] mb-8 group">
      {/* Delta India Background Gradients (Orange & Green) */}
      <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-[80px] transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
      <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-green-500/10 blur-[50px] transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6">
        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1 text-xs font-semibold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              <Zap className="h-3 w-3" /> Fastest Crypto Options
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
              <ShieldCheck className="h-3 w-3" /> RBI Compliant via FIU
            </span>
          </div>
          
          <h3 className="text-xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3 flex-wrap drop-shadow-sm">
            Trade Crypto with 
            <div className="flex items-center bg-transparent px-2 py-1">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 filter drop-shadow-md">
                {/* Small Left Arrow (Orange) */}
                <path d="M30 35 L10 50 L30 65 Z" fill="#f97316"/>
                {/* Top Right Shape (Orange) */}
                <path d="M30 15 L85 45 L50 60 Z" fill="#f97316"/>
                {/* Bottom Right Shape (Green) */}
                <path d="M30 85 L85 55 L50 40 Z" fill="#22c55e"/>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-[22px] text-white tracking-wide">Delta.</span>
                <span className="font-light text-[15px] text-slate-300">Exchange</span>
              </div>
            </div>
          </h3>
          
          <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
            India's most trusted platform for Bitcoin & Options trading.
          </p>
        </div>
        
        <div className="w-full md:w-auto flex flex-col items-center">
          <Link 
            href="https://www.delta.exchange/?code=TJEGGJ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 text-white px-8 py-4 text-sm font-black uppercase tracking-wide transition-all hover:scale-105 hover:bg-orange-600 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] active:scale-95"
          >
            Claim 10% Discount Now <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="text-center text-[11px] text-slate-500 mt-3 font-medium">Safe & Secure • Trade Options & Futures</p>
        </div>
      </div>
    </div>
  );
}
