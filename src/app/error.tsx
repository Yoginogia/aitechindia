'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console or error tracking service
    console.error('Unhandled Client-Side Exception:', error);

    // Auto-recover from Chunk Loading Errors (happens after new deployments when browser tries to load old bundles)
    const errorMsg = error?.message?.toLowerCase() || '';
    if (errorMsg.includes('loading chunk') || errorMsg.includes('chunkloaderror') || errorMsg.includes('failed to fetch')) {
      console.warn('Chunk loading error detected. Auto-reloading page to fetch latest bundles...');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-grid">
      <div className="relative group max-w-md w-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-[20px] opacity-70"></div>
        
        <div className="relative bg-card/60 backdrop-blur-2xl border border-red-500/20 rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center space-y-6">
          <div className="h-16 w-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
            <AlertTriangle className="h-8 w-8 animate-pulse" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black tracking-tight text-white uppercase italic">
              Kuchh Gadbad Ho Gayi! 🛠️
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A client-side exception occurred while rendering the page. This is usually fixed by a simple reload or cache refresh.
            </p>
          </div>

          {error?.digest && (
            <div className="text-[10px] font-mono bg-zinc-900/50 border border-border/40 text-muted-foreground rounded-lg px-3 py-1.5 uppercase select-all">
              Error ID: {error.digest}
            </div>
          )}

          <div className="w-full flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => reset()}
              className="flex-1 py-3 px-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xs font-black rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/25 uppercase cursor-pointer"
            >
              <RefreshCw className="h-4 w-4" /> Try Again
            </button>
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                // Hard refresh to home page to clear state
                window.location.href = '/';
              }}
              className="flex-1 py-3 px-4 bg-secondary/50 hover:bg-secondary border border-border/50 text-foreground text-xs font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all uppercase"
            >
              <Home className="h-4 w-4" /> Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
