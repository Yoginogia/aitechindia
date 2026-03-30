"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

type Post = {
  slug: string;
  title: string;
  category: string;
};

export default function NewsTicker({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="w-full bg-destructive/10 border-b border-destructive/20 relative z-40 overflow-hidden py-2 backdrop-blur-md">
      <div className="container mx-auto px-4 flex items-center h-full">
        {/* Static "Breaking" label */}
        <div className="flex items-center space-x-2 z-10 bg-background/80 pr-4 mr-2 shadow-[10px_0_10px_-5px_rgba(0,0,0,0.5)]">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </div>
          <span className="text-xs font-black uppercase text-red-500 tracking-wider">Flash News</span>
        </div>

        {/* Marquee Container */}
        <div className="flex-1 overflow-hidden relative flex items-center">
            <div className="animate-marquee whitespace-nowrap flex items-center space-x-8">
              {/* Duplicate the items to make the infinite scroll seamless */}
              {[...posts, ...posts, ...posts].map((post, i) => (
                <Link
                  key={`${post.slug}-${i}`}
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-foreground/90 hover:text-primary transition-colors cursor-pointer"
                >
                  <span className="font-bold text-destructive/80 mr-2 text-xs uppercase px-2 py-0.5 rounded bg-destructive/10 border border-destructive/20">
                    {post.category}
                  </span>
                  {post.title}
                  <span className="mx-6 text-muted-foreground opacity-50">•</span>
                </Link>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
