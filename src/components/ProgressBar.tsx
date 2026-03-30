"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const maxScroll = documentHeight - windowHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      
      setScrollPercentage(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[5px] bg-secondary/30 z-[999999] pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-primary shadow-[0_0_15px_rgba(99,102,241,1)] transition-all duration-150 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
