import Link from 'next/link';
import { ArrowRight, Clock, Sparkles, Flame, Bot, Smartphone, Code, Cpu, RefreshCcw } from 'lucide-react';
import DualNewsWidget from '@/components/DualNewsWidget';
import NewsletterWidget from '@/components/NewsletterWidget';
import EditorsPicksWidget from '@/components/EditorsPicksWidget';
import HomeCategoryShowcase from '@/components/HomeCategoryShowcase';
import WebStoriesHighlights from '@/components/WebStoriesHighlights';
import TechShortsWidget from '@/components/TechShortsWidget';
import TechPollWidget from '@/components/TechPollWidget';
import SpeedTestWidget from '@/components/SpeedTestWidget';
import { getSortedPostsData } from '@/lib/markdown';

// Category ke hisaab se icon aur gradient
const CATEGORY_STYLES: Record<string, { icon: React.ReactNode; gradient: string }> = {
  'AI': { icon: <Bot className="h-3.5 w-3.5" />, gradient: 'from-blue-500/20 to-indigo-600/20' },
  'AI Tools': { icon: <Sparkles className="h-3.5 w-3.5" />, gradient: 'from-emerald-500/20 to-cyan-600/20' },
  'Gadgets': { icon: <Smartphone className="h-3.5 w-3.5" />, gradient: 'from-purple-500/20 to-pink-600/20' },
  'Software': { icon: <Code className="h-3.5 w-3.5" />, gradient: 'from-orange-500/20 to-red-600/20' },
  'Software Updates': { icon: <RefreshCcw className="h-3.5 w-3.5" />, gradient: 'from-blue-500/20 to-cyan-600/20' },
};

const DEFAULT_STYLE = { icon: <Cpu className="h-3.5 w-3.5" />, gradient: 'from-slate-500/20 to-gray-600/20' };

export default function Home() {
  // Automatically fetch all blog posts sorted by date
  const allPosts = getSortedPostsData();
  // Filter out Crypto posts from homepage as they go to the specialized Crypto page
  const recentPosts = allPosts.filter(post => post.category !== 'Crypto').slice(0, 8);

  return (
    <div className="flex flex-col min-h-screen bg-grid">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-12 pt-10 md:pt-16 hero-glow">
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 live-dot"></span>
              🔥 Live Tech & AI Updates
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Tech की दुनिया,{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">Decoded.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              AI के नए tools, latest gadgets, और tech industry की breaking news — सब कुछ हिंदी + English में, बिल्कुल simple और सीधा।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="#articles" className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 px-8 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:scale-105">
                आज की खबरें पढ़ें
              </a>
              <a href="#trending" className="inline-flex h-12 items-center justify-center rounded-full border border-border/50 bg-secondary/30 backdrop-blur px-8 text-sm font-medium shadow-sm transition-all hover:bg-secondary/50 hover:border-primary/30">
                Trending देखें <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold gradient-text">{allPosts.length}+</span>
                <span>Articles<br />Published</span>
              </div>
              <div className="w-px h-8 bg-border/30"></div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold gradient-text">24/7</span>
                <span>Auto News<br />Updates</span>
              </div>
              <div className="w-px h-8 bg-border/30"></div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold gradient-text">100%</span>
                <span>Free &<br />Open</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 flex-1" id="articles">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left Column: Articles — DYNAMIC from blog folder */}
            <div className="lg:col-span-8 space-y-8 min-w-0">
              <WebStoriesHighlights />

              <div className="flex items-center justify-between pb-4 mt-8">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                  <Flame className="h-6 w-6 text-orange-500" />
                  ताज़ा आर्टिकल्स
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {recentPosts.map((post) => {
                  const style = CATEGORY_STYLES[post.category] || DEFAULT_STYLE;
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col rounded-2xl border border-border/30 bg-card/50 backdrop-blur overflow-hidden card-glow"
                    >
                      <div className={`aspect-video w-full bg-gradient-to-br ${style.gradient} flex items-center justify-center relative overflow-hidden`}>
                        {post.image ? (
                          post.slug?.includes('best-phones-under') ? (
                            <>
                              <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 blur-xl scale-110" />
                              <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 z-10 drop-shadow-2xl" />
                            </>
                          ) : (
                            <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          )
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-grid opacity-30"></div>
                            <div className="h-12 w-12 rounded-2xl bg-background/30 backdrop-blur flex items-center justify-center border border-white/10">
                              {style.icon}
                            </div>
                          </>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent"></div>
                      </div>

                      <div className="p-5 space-y-3 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{post.category}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.date}</span>
                        </div>
                        <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2 flex-1">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {post.excerpt}
                        </p>
                        <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 pt-1">
                          पूरा पढ़ें <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
              
              <div className="flex justify-center pt-4">
                <Link href="/latest" className="inline-flex items-center justify-center rounded-xl bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-border px-6 py-3 text-sm font-medium transition-all group">
                  सभी ख़बरें पढ़ें 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Auto News Widget & Sidebar Extras */}
            <div className="lg:col-span-4 space-y-6" id="trending">
              <DualNewsWidget />
              <SpeedTestWidget />
              <TechPollWidget />
              <NewsletterWidget />
              <EditorsPicksWidget />
            </div>

          </div>
        </div>
      </section>

      {/* Embedded YouTube / Tech Shorts Section */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
         <TechShortsWidget />
      </div>

      {/* Full Width Category Showcase */}
      <HomeCategoryShowcase />
    </div>
  );
}
