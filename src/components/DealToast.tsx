"use client";

import { useState, useEffect } from "react";
import { X, Tag, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function DealToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(true); // Default true to prevent hydration mismatch flashes

  useEffect(() => {
    // Check if user dismissed it this session
    const dismissed = sessionStorage.getItem("aitechnews_deal_dismissed");
    if (!dismissed) {
      setHasDismissed(false);
      
      // Delay popup by 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("aitechnews_deal_dismissed", "true");
  };

  if (hasDismissed) return null;

  return (
    <div 
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 sm:max-w-sm w-[calc(100%-2rem)] z-[99998] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-destructive/30 bg-card/80 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(239,68,68,0.3)]">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl pointer-events-none -ml-12 -mb-12"></div>
        
        {/* 'LIVE DEAL' Badge */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>

        <button 
          onClick={handleDismiss}
          className="absolute top-2 right-2 p-1.5 rounded-full bg-secondary/50 hover:bg-destructive/20 hover:text-destructive text-muted-foreground transition-colors z-20"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-4 sm:p-5 flex gap-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-background rounded-xl p-1 border border-border/50 shadow-inner flex items-center justify-center relative overflow-hidden">
            <img 
              src="https://m.media-amazon.com/images/I/81Os1SDWpcL._SX679_.jpg" 
              alt="iPhone 15 Deal" 
              className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal transform group-hover:scale-110 transition-transform" 
            />
            {/* Disclaimer: You should download proper thumbnails instead of cross-linking from Amazon if deployed permanently */}
          </div>
          
          <div className="flex flex-col flex-1 pb-1">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-destructive tracking-widest mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Price Drop Alert
            </div>
            
            <h4 className="text-sm font-bold text-foreground leading-tight mb-1">Apple iPhone 15 (128GB)</h4>
            
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-lg font-black text-emerald-500">₹65,999</span>
              <span className="text-xs text-muted-foreground line-through decoration-border font-semibold">₹79,900</span>
            </div>
            
            <Link 
              href="/top-deals/iphone-15-massive-discount" 
              onClick={handleDismiss}
              className="mt-auto group flex items-center justify-center w-full gap-2 rounded-lg bg-foreground text-background py-2 px-3 text-xs font-bold transition-all hover:bg-destructive hover:text-white shadow-md active:scale-95"
            >
              <Tag className="w-3.5 h-3.5 group-hover:-rotate-12 transition-transform" />
              Claim Deal Now
              <ExternalLink className="w-3 h-3 ml-auto opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
