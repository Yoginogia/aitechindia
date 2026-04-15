import Link from 'next/link';
import { TrendingUp, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function DeltaAdBanner() {
  return (
    <div className="w-full relative overflow-hidden rounded-2xl border border-[#00e1cc]/30 bg-[#0f172a] shadow-[0_4px_30px_rgba(0,225,204,0.1)] mb-8 group">
      {/* Delta Specific Background Grid & Glow */}
      <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#00e1cc]/10 blur-[80px] transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
      <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-[#4f46e5]/20 blur-[50px] transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6">
        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Official Partner</span>
            <span className="flex items-center gap-1 text-xs font-semibold text-[#00e1cc] bg-[#00e1cc]/10 px-3 py-1 rounded-full">
              <Zap className="h-3 w-3" /> Fastest Crypto Options
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
              <ShieldCheck className="h-3 w-3" /> RBI Compliant via FIU
            </span>
          </div>
          
          <h3 className="text-xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-2 flex-wrap drop-shadow-sm">
            Trade Crypto on 
            <div className="flex items-center ml-1 bg-white/5 px-3 py-1 rounded border border-white/10">
              {/* Delta Logo Mimic */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M12 3L2 21H22L12 3Z" stroke="#00e1cc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 9L7 18H17L12 9Z" fill="#00e1cc"/>
              </svg>
              <span className="font-extrabold tracking-widest text-white italic">DELTA</span>
              <span className="font-light tracking-wide text-white/80 ml-1 italic">EXCHANGE</span>
            </div>
          </h3>
          
          <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
            India's most trusted platform for Bitcoin & Options trading. Join today and get a <strong className="text-white">Flat 10% Fee Discount</strong> on your trades for 6 months using referral code <span className="bg-[#00e1cc]/20 text-[#00e1cc] px-2 py-0.5 rounded font-mono font-bold tracking-widest border border-[#00e1cc]/30 shadow-[0_0_10px_rgba(0,225,204,0.3)]">TJEGGJ</span>.
          </p>
        </div>
        
        <div className="w-full md:w-auto flex flex-col items-center">
          <Link 
            href="https://www.delta.exchange/?code=TJEGGJ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#00e1cc] text-slate-900 px-8 py-4 text-sm font-black uppercase tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(0,225,204,0.4)] active:scale-95"
          >
            Claim 10% Discount Now <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="text-center text-[11px] text-slate-500 mt-3 font-medium">Safe & Secure • Trade Options & Futures</p>
        </div>
      </div>
    </div>
  );
}
