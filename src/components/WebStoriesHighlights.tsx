"use client";

import Link from 'next/link';

// Quick static array of top trending web stories (matching what's in /web-stories/page.tsx)
const HIGHLIGHTS = [
    {
        slug: 'samsung-s26-fe',
        title: 'S26 FE Leaks',
        image: '/images/web-stories/samsung-s26-fe/slide1.png',
        isNew: true,
    },
    {
        slug: 'samsung-a57-launch',
        title: 'Samsung A57',
        image: '/images/web-stories/samsung-a57-launch/slide1.png',
        isNew: false,
    },
    {
        slug: 'what-is-agentic-ai',
        title: 'Agentic AI',
        image: '/images/web-stories/what-is-agentic-ai/slide1.png',
        isNew: false,
    },
    {
        slug: 'oneplus-nord-6-leaks',
        title: 'Nord 6',
        image: '/images/web-stories/oneplus-nord-6-leaks/slide1.png',
        isNew: false,
    },
    {
        slug: 'meta-ai-chips',
        title: 'Meta MTIA',
        image: '/images/web-stories/meta-ai-chips/slide1.png',
        isNew: true,
    },
    {
        slug: 'rtx-6090-leaks',
        title: 'RTX 6090',
        image: '/images/web-stories/rtx-6090-leaks/slide1.png',
        isNew: false,
    }
];

export default function WebStoriesHighlights() {
  return (
    <div className="w-full mt-6 mb-4">
      <div className="flex items-center gap-2 mb-4 px-1">
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Trending Stories</h3>
        <div className="h-px flex-1 bg-border/50"></div>
      </div>
      
      {/* Horizontal scroll container (hide-scroll class removes scrollbar natively) */}
      <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-4 hide-scroll pr-4 snap-x">
        {HIGHLIGHTS.map((story) => (
          <Link
            href={`/web-stories/${story.slug}.html`}
            key={story.slug}
            className="flex flex-col items-center gap-2 flex-shrink-0 group snap-center"
          >
            {/* The Instagram Style Circle */}
            <div className={`relative p-[3px] rounded-full transition-all duration-300 group-hover:scale-105 ${story.isNew ? 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 animate-pulse-slow shadow-lg shadow-pink-500/20' : 'bg-border hover:bg-primary/50'}`}>
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-background overflow-hidden relative">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
            
            {/* Story Title */}
            <span className="text-xs font-semibold text-center text-foreground/80 max-w-[80px] sm:max-w-[96px] truncate group-hover:text-primary transition-colors">
              {story.title}
            </span>
          </Link>
        ))}
        
        {/* 'View All' Bubble */}
        <Link
            href="/web-stories"
            className="flex flex-col items-center justify-center gap-2 flex-shrink-0 group snap-center"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-dashed border-primary/40 bg-primary/5 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/10 group-hover:border-primary">
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <span className="text-xs font-bold text-center text-primary mt-[3px]">
              View All
            </span>
        </Link>
      </div>
    </div>
  );
}
