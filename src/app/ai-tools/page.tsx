import Link from 'next/link';
import { ArrowRight, Clock, Sparkles, Flame, Bot, Smartphone, Code, Cpu, FileText } from 'lucide-react';
import { getSortedPostsData } from '@/lib/markdown';

// Category ke hisaab se icon aur gradient
const CATEGORY_STYLES: Record<string, { icon: React.ReactNode; gradient: string }> = {
  'AI': { icon: <Bot className="h-3.5 w-3.5" />, gradient: 'from-blue-500/20 to-indigo-600/20' },
  'AI Tools': { icon: <Sparkles className="h-3.5 w-3.5" />, gradient: 'from-emerald-500/20 to-cyan-600/20' },
  'Gadgets': { icon: <Smartphone className="h-3.5 w-3.5" />, gradient: 'from-purple-500/20 to-pink-600/20' },
  'Software': { icon: <Code className="h-3.5 w-3.5" />, gradient: 'from-orange-500/20 to-red-600/20' },
};

const DEFAULT_STYLE = { icon: <Cpu className="h-3.5 w-3.5" />, gradient: 'from-slate-500/20 to-gray-600/20' };

export const metadata = {
    title: 'AI Tools | AITechNews',
    description: 'AITechNews par latest AI tools aur unke upyog ke bare mein janiye.',
};

export default function AIToolsPage() {
  const allPosts = getSortedPostsData();
  // We'll consider both 'AI' and 'AI Tools' as relevant for the AI Tools page to show more content.
  const aiPosts = allPosts.filter(post => post.category === 'AI Tools' || post.category === 'AI');

  return (
    <div className="flex flex-col min-h-screen bg-grid">
      <section className="relative overflow-hidden pt-12 pb-6">
        <div className="absolute top-0 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="flex items-center justify-between pb-4 border-b border-border/30">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3 mb-2">
                <Sparkles className="h-8 w-8 text-emerald-500" />
                AI <span className="gradient-text">Tools & News</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">Artificial Intelligence tools aur updates jo aapka kaam aasan banayenge.</p>
            </div>
            <span className="hidden md:inline-flex text-sm text-muted-foreground bg-secondary/50 px-4 py-1.5 rounded-full border border-border/50 font-medium">
              {aiPosts.length} Articles
            </span>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center gap-2 mb-8">
            <Flame className="h-5 w-5 text-orange-500 fill-current" />
            <h2 className="text-xl font-bold uppercase tracking-widest text-muted-foreground/60">Featured Interactive Tools</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Link 
              href="/tools/compress-pdf"
              className="group relative overflow-hidden rounded-[2rem] border border-emerald-500/20 bg-emerald-500/5 p-8 flex flex-col md:flex-row items-center gap-8 hover:bg-emerald-500/10 transition-all duration-500 shadow-2xl card-glow"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-all"></div>
              
              <div className="relative z-10 w-24 h-24 rounded-3xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                <FileText className="h-10 w-10 text-emerald-500" />
                <div className="absolute -top-2 -right-2 bg-emerald-500 text-[10px] font-black px-2 py-0.5 rounded-md text-white shadow-lg animate-bounce">
                  NEW
                </div>
              </div>
              
              <div className="relative z-10 flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-emerald-400 transition-colors">Compress PDF (Local AI)</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-md">100MB to 500KB in seconds! Quality waisi hi, size zero! Secure, high-speed, and free. 🏎️</p>
                <div className="mt-4 flex items-center gap-2 text-emerald-500 font-bold text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                  Try Now <ArrowRight className="h-3 w-3" />
                </div>
              </div>

              {/* MB to KB Animation Mockup */}
              <div className="relative hidden lg:flex items-center gap-3 bg-black/40 px-6 py-4 rounded-2xl border border-white/5 backdrop-blur-xl">
                 <div className="text-center">
                    <p className="text-[10px] text-white/40 uppercase font-black">Size</p>
                    <p className="text-lg font-black line-through opacity-30">10MB</p>
                 </div>
                 <ArrowRight className="h-4 w-4 text-emerald-500 animate-pulse" />
                 <div className="text-center">
                    <p className="text-[10px] text-emerald-500 uppercase font-black">AI</p>
                    <p className="text-2xl font-black text-emerald-500">1MB</p>
                 </div>
              </div>
            </Link>

            <div className="bg-secondary/20 rounded-[2rem] border border-dashed border-border/40 flex flex-col items-center justify-center p-8 text-center opacity-60">
               <div className="w-16 h-16 rounded-2xl bg-muted/20 flex items-center justify-center mb-4">
                  <Bot className="h-8 w-8 text-muted-foreground/40" />
               </div>
               <p className="font-bold text-muted-foreground/60 tracking-widest text-xs uppercase">More AI Tools Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 flex-1">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {aiPosts.length === 0 ? (
             <div className="text-center py-20 bg-card/30 rounded-2xl border border-border/30 backdrop-blur">
                <Sparkles className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-medium text-foreground mb-2">Abhi koi articles nahi hain</h3>
                <p className="text-muted-foreground">Jald hi yahan naye AI articles add kiye jayenge.</p>
             </div>
          ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {aiPosts.map((post) => {
                 const style = CATEGORY_STYLES[post.category] || DEFAULT_STYLE;
                 return (
                   <Link
                     key={post.slug}
                     href={`/blog/${post.slug}`}
                     className="group flex flex-col rounded-2xl border border-border/30 bg-card/50 backdrop-blur overflow-hidden card-glow"
                   >
                     <div className={`aspect-video w-full bg-gradient-to-br ${style.gradient} flex items-center justify-center relative overflow-hidden`}>
                       {post.image ? (
                         <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                         <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">{post.category}</span>
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
          )}
        </div>
      </section>
    </div>
  );
}
