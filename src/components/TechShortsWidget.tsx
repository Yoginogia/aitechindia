"use client";

import { PlayCircle } from "lucide-react";
import { TECH_SHORTS } from "@/data/shorts";

export default function TechShortsWidget() {
  return (
    <div className="w-full mt-16 mb-12">
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
      </div>
      
      {/* Horizontal Scroll wrapper */}
      <div className="flex items-center gap-6 overflow-x-auto pb-6 hide-scroll px-2 snap-x w-full">
        {TECH_SHORTS.map((short, i) => (
          <div 
            key={i}
            className="flex-shrink-0 w-[260px] sm:w-[300px] h-[460px] sm:h-[530px] rounded-[32px] overflow-hidden border-4 border-card/80 shadow-2xl bg-card relative group snap-center"
          >
            {/* The actual YouTube iframe */}
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 pointer-events-auto rounded-[28px]"
              src={`https://www.youtube.com/embed/${short.id}?rel=0&modestbranding=1`}
              title={short.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            {/* Overlay Gradient for Title (Helps if iframe falls back or loads slow) */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10 hidden"></div>
            
            {/* Fallback Text if video ID is invalid */}
            <div className="absolute top-4 left-4 right-4 z-20 pointer-events-none hidden">
              <span className="bg-background/80 backdrop-blur-md text-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-sm backdrop-saturate-150">
                {short.title}
              </span>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
