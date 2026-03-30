"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = Math.max(
          window.scrollY || 0,
          document.documentElement.scrollTop || 0,
          document.body.scrollTop || 0
      );
      
      const scrollHeight = Math.max(
          document.documentElement.scrollHeight || 0,
          document.body.scrollHeight || 0
      );
      
      const clientHeight = Math.max(
          window.innerHeight || 0,
          document.documentElement.clientHeight || 0
      );
      
      const maxScroll = scrollHeight - clientHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      
      setScrollPercentage(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount in case we start halfway down
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Only render on blog post pages
  if (!pathname?.startsWith('/blog/')) {
      return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-[5px] bg-secondary/30 z-[999999] pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-primary shadow-[0_0_20px_rgba(99,102,241,1)] transition-all duration-150 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
