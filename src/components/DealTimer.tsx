"use client";
import { useState, useEffect } from "react";
import { Timer } from "lucide-react";

export default function DealTimer() {
  const [timeLeft, setTimeLeft] = useState("--:--:--");

  useEffect(() => {
    // Generate a random expiration time between 2 and 6 hours from now
    // Store in sessionStorage so it doesn't jump around on re-renders, but for demo we can just use state
    const hours = Math.floor(Math.random() * 4) + 2;
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    
    const interval = setInterval(() => {
      if (totalSeconds <= 0) {
        setTimeLeft("00:00:00");
        clearInterval(interval);
        return;
      }
      
      totalSeconds--;
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;
      
      setTimeLeft(`${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1.5 text-xs font-bold text-red-500 bg-red-500/10 px-2 py-1 rounded-md animate-pulse">
      <Timer className="w-3.5 h-3.5" />
      Ends in: {timeLeft}
    </div>
  );
}
