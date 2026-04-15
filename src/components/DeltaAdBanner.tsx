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
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Official Partner</span>
            <span className="flex items-center gap-1 text-xs font-semibold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              <Zap className="h-3 w-3" /> Fastest Crypto Options
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
              <ShieldCheck className="h-3 w-3" /> RBI Compliant via FIU
            </span>
          </div>
          
          <h3 className="text-xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3 flex-wrap drop-shadow-sm">
            Trade Crypto with 
            {/* Official Delta Exchange India Logo */}
            <div className="flex items-center bg-white/5 px-4 py-2 rounded-lg border border-white/10 h-12">
              <img src="/images/delta-logo.png" alt="Delta Exchange India" className="h-full object-contain" />
            </div>
          </h3>
          
          <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
            India's most trusted platform for Bitcoin & Options trading. Join today and get a <strong className="text-white">Flat 10% Fee Discount</strong> on your trades for 6 months using referral code <span className="bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded font-mono font-bold tracking-widest border border-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.2)]">TJEGGJ</span>.
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
