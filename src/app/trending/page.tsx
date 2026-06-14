import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Flame, Bot, Sparkles, Smartphone, Code, Cpu, RefreshCcw, TrendingUp } from 'lucide-react';
import { getSortedPostsData } from '@/lib/markdown';
import DeltaAdBanner from '@/components/DeltaAdBanner';

// Category styles for badges and fallback backgrounds
const CATEGORY_STYLES: Record<string, { icon: React.ReactNode; gradient: string; colorClass: string }> = {
  'AI': { icon: <Bot className="h-3.5 w-3.5" />, gradient: 'from-blue-500/20 to-indigo-600/20', colorClass: 'text-blue-500 bg-blue-500/10' },
  'AI Tools': { icon: <Sparkles className="h-3.5 w-3.5" />, gradient: 'from-emerald-500/20 to-cyan-600/20', colorClass: 'text-emerald-500 bg-emerald-500/10' },
  'Gadgets': { icon: <Smartphone className="h-3.5 w-3.5" />, gradient: 'from-purple-500/20 to-pink-600/20', colorClass: 'text-purple-500 bg-purple-500/10' },
  'Software': { icon: <RefreshCcw className="h-3.5 w-3.5" />, gradient: 'from-cyan-500/20 to-blue-600/20', colorClass: 'text-cyan-500 bg-cyan-500/10' },
  'Crypto': { icon: <TrendingUp className="h-3.5 w-3.5" />, gradient: 'from-yellow-500/20 to-orange-600/20', colorClass: 'text-yellow-500 bg-yellow-500/10' },
};

const DEFAULT_STYLE = { icon: <Cpu className="h-3.5 w-3.5" />, gradient: 'from-slate-500/20 to-gray-600/20', colorClass: 'text-slate-500 bg-slate-500/10' };

export const metadata = {
    title: 'Trending Tech News & Topics | AITechNews',
    description: 'भारत में आज के सबसे लोकप्रिय Google Trends और टेक टॉपिक्स — AI, गैजेट्स, और सॉफ्टवेयर अपडेट्स की हर खबर पर टेक-नज़रिया।',
    alternates: { canonical: '/trending' },
    openGraph: {
        title: 'Trending Tech News & Topics | AITechNews',
        description: 'भारत में आज के सबसे लोकप्रिय Google Trends और टेक टॉपिक्स — AI, गैजेट्स, और सॉफ्टवेयर अपडेट्स की हर खबर पर टेक-नज़रिया।',
        url: 'https://aitechnews.co.in/trending',
        siteName: 'AITechNews',
        images: [{ url: '/logo.png', width: 512, height: 512 }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trending Tech News & Topics | AITechNews',
        description: 'भारत में आज के सबसे लोकप्रिय Google Trends और टेक टॉपिक्स — AI, गैजेट्स, और सॉफ्टवेयर अपडेट्स की हर खबर पर टेक-नज़रिया।',
        images: ['/logo.png'],
    }
};

export default function TrendingNewsPage() {
  const allPosts = getSortedPostsData();
  // Filter for posts flagged with trending: true
  const trendingPosts = allPosts.filter(post => post.trending === true);

  return (
    <div className="flex flex-col min-h-screen bg-grid">
      {/* Hero section with floating background gradient */}
      <section className="relative overflow-hidden pt-12 pb-6">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute -top-10 left-10 w-60 h-60 bg-red-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="flex items-center justify-between pb-4 border-b border-border/30">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3 mb-2">
                <Flame className="h-8 w-8 text-orange-500 animate-bounce" />
                Trending <span className="gradient-text">Topics & News</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">
                Google Trends और सोशल मीडिया पर छाए आज के सबसे हॉट मुद्दों पर हमारा टेक और एआई नज़रिया।
              </p>
            </div>
            <span className="hidden md:inline-flex text-sm text-orange-500 bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/25 font-bold animate-pulse">
              Live 🔥
            </span>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8 flex-1">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <DeltaAdBanner />
          
          {trendingPosts.length === 0 ? (
            <div className="text-center py-20 bg-card/30 rounded-2xl border border-border/30 backdrop-blur">
              <Flame className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-medium text-foreground mb-2">Abhi koi trending topics nahi hain</h3>
              <p className="text-muted-foreground">Jald hi yahan naye Google Trends topics add kiye jayenge.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingPosts.map((post) => {
                const style = CATEGORY_STYLES[post.category] || DEFAULT_STYLE;
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col rounded-2xl border border-border/30 bg-card/50 backdrop-blur overflow-hidden card-glow relative"
                  >
                    {/* Hot label badge */}
                    <div className="absolute top-3 right-3 z-20 bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-md">
                      <Flame className="h-3 w-3 animate-pulse" /> TRENDING
                    </div>

                    <div className={`aspect-video w-full bg-gradient-to-br ${style.gradient} flex items-center justify-center relative overflow-hidden`}>
                      {post.image ? (
                        <Image 
                          src={post.image} 
                          alt={post.title} 
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-grid opacity-30"></div>
                          <div className="h-12 w-12 rounded-2xl bg-background/30 backdrop-blur flex items-center justify-center border border-white/10">
                            {style.icon}
                          </div>
                        </>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-card/85 via-transparent to-transparent"></div>
                    </div>

                    <div className="p-5 space-y-3 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className={`font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${style.colorClass}`}>
                          {style.icon} {post.category}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {post.date}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2 flex-1">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <span className="text-xs font-semibold text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 pt-1">
                        पूरा पढ़ें <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
