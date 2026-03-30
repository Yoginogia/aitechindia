"use client";

import { useRef, useState } from "react";
import { PlayCircle, ChevronLeft, ChevronRight, Youtube, Play } from "lucide-react";
import { TECH_SHORTS } from "@/data/shorts";

export default function TechShortsWidget() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full mt-16 mb-12 relative group/widget">
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
             <PlayCircle className="w-6 h-6 text-destructive" />
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tight flex items-center gap-2">
              Tech Shorts <span className="text-xs bg-destructive text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Watch</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">Trending tech videos from around the web</p>
          </div>
        </div>
        
        {/* Desktop Navigation Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <button 
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Buttons (Floats over content on extreme edges) */}
      <button 
        onClick={() => scroll("left")}
        className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-r-2xl border border-l-0 border-border bg-background/90 backdrop-blur shadow-xl flex items-center justify-center -ml-2 opacity-0 group-hover/widget:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button 
        onClick={() => scroll("right")}
        className="sm:hidden absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-l-2xl border border-r-0 border-border bg-background/90 backdrop-blur shadow-xl flex items-center justify-center -mr-2 opacity-0 group-hover/widget:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Horizontal Scroll wrapper */}
      <div 
        ref={scrollRef}
        className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-6 hide-scroll px-2 snap-x w-full scroll-smooth"
      >
        {TECH_SHORTS.map((short, i) => (
          <div 
            key={i}
            className="flex-shrink-0 w-[220px] sm:w-[250px] h-[390px] sm:h-[445px] rounded-[28px] overflow-hidden border-4 border-card/80 shadow-2xl bg-card relative group snap-center cursor-pointer"
            onClick={() => setActiveVideoIndex(i)}
          >
            {activeVideoIndex === i ? (
               <iframe
                 width="100%"
                 height="100%"
                 className="absolute inset-0 pointer-events-auto rounded-[24px]"
                 src={`https://www.youtube.com/embed/${short.id}?autoplay=1&rel=0&modestbranding=1`}
                 title={short.title}
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
               ></iframe>
            ) : (
               <>
                 {/* Fake YouTube Player Facade (Improves Performance & Stops Multi-Play) */}
                 <img 
                   src={`https://i.ytimg.com/vi/${short.id}/hqdefault.jpg`} 
                   alt={short.title} 
                   className="w-full h-full object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-10"></div>
                 
                 {/* Play Button Overlay */}
                 <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center group-hover:bg-destructive/90 transition-colors shadow-lg border border-white/20">
                       <Play className="w-6 h-6 text-white ml-1 fill-white" />
                    </div>
                 </div>

                 {/* Video Title Overlay */}
                 <div className="absolute bottom-5 left-4 right-4 z-20 pointer-events-none">
                   <h4 className="text-white font-bold leading-snug line-clamp-2 shadow-black drop-shadow-md">
                     {short.title}
                   </h4>
                 </div>
                 
                 {/* YouTube icon at top right */}
                 <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur p-1.5 rounded-full shadow-sm">
                   <Youtube className="w-4 h-4 text-destructive" />
                 </div>
               </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
