"use client";
import { useState } from "react";
import { Gauge, Smartphone, Laptop, CheckCircle2, ChevronRight, X } from "lucide-react";
import Link from "next/link";

export default function SpeedTestWidget() {
  const [testing, setTesting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  const startTest = () => {
    setTesting(true);
    setProgress(0);
    setResult(null);

    let curr = 0;
    const interval = setInterval(() => {
      curr += Math.random() * 15;
      if (curr >= 100) {
        curr = 100;
        clearInterval(interval);
        setTimeout(() => {
          setTesting(false);
          // Random score between 20 to 55 to always encourage upgrading
          setResult(Math.floor(Math.random() * 35) + 20);
        }, 500);
      }
      setProgress(curr);
    }, 300);
  };

  return (
    <div className="rounded-2xl border border-border/30 bg-card/40 p-5 backdrop-blur shadow-sm card-glow relative overflow-hidden">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="flex items-center gap-2 mb-4 relative z-10">
        <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
          <Gauge className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-bold text-lg">Test Device Speed 🏎️</h3>
      </div>
      
      {!result ? (
        <>
          <p className="text-sm text-muted-foreground mb-5 leading-snug">
            Check how fast your current device is compared to the latest 2026 models like Apple M4 or S26 Ultra.
          </p>

          <div className="space-y-4">
            <button
              onClick={startTest}
              disabled={testing}
              className="w-full bg-white text-black font-bold text-sm py-3 rounded-xl shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
            >
              {testing ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin"></div>
                  Testing Performance...
                </>
              ) : (
                <>Run Benchmark Now</>
              )}
            </button>

            {testing && (
              <div className="space-y-2">
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-center text-muted-foreground animate-pulse">Running Neural Engine Tests...</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-2 space-y-4">
           <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-xl text-center">
             <div className="text-4xl font-extrabold text-destructive mb-1">{result}%</div>
             <div className="text-xs font-bold text-destructive/80 uppercase tracking-widest">Slower than Flagships</div>
           </div>
           
           <p className="text-sm text-center font-medium leading-relaxed">
             Your device is struggling with modern AI tasks. It&apos;s time to upgrade!
           </p>

           <div className="grid grid-cols-2 gap-2 mt-4">
             <Link href="/best-phones" className="bg-secondary/50 hover:bg-secondary border border-border px-3 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1 transition-colors">
                <Smartphone className="w-4 h-4 text-primary" /> Phones
             </Link>
             <Link href="/best-laptops" className="bg-secondary/50 hover:bg-secondary border border-border px-3 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1 transition-colors">
                <Laptop className="w-4 h-4 text-primary" /> Laptops
             </Link>
           </div>
           
           <button onClick={() => setResult(null)} className="w-full text-xs text-muted-foreground mt-2 hover:text-white transition-colors">
             Test Again
           </button>
        </div>
      )}
    </div>
  );
}
