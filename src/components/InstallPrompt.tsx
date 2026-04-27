"use client";

import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch((err) => {
        console.error("Service Worker registration failed:", err);
      });
    }

    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Only show on 2nd+ visit to reduce popup fatigue
      const visitCount = parseInt(localStorage.getItem('ait-visits') || '0', 10) + 1;
      localStorage.setItem('ait-visits', String(visitCount));
      if (visitCount >= 2) {
        // Delay 15s to not overlap with other prompts
        setTimeout(() => setShowPrompt(true), 15000);
      }
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setShowPrompt(false);
    }

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-zinc-900 border border-zinc-700 p-4 rounded-xl shadow-2xl z-50 flex items-start gap-3 animate-in slide-in-from-bottom-5">
      <div className="bg-primary/20 p-2 rounded-lg text-primary">
        <Download className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-white text-sm">Install AITechNews App</h4>
        <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
          Get fastest news updates & dark mode on your home screen.
        </p>
        <button
          onClick={handleInstallClick}
          className="mt-3 w-full bg-primary text-black font-bold text-xs py-2 rounded shadow hover:bg-primary/90 transition"
        >
          Install Now
        </button>
      </div>
      <button onClick={() => setShowPrompt(false)} className="text-zinc-500 hover:text-white">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
