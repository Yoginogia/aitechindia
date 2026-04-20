import Link from 'next/link';
import { ArrowRight, Clock, Sparkles, Flame, Bot, Smartphone, Code, Cpu } from 'lucide-react';
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
    title: 'Gadgets & EVs | AITechNews',
    description: 'AITechNews par latest smartphones, laptops, aur Electric Vehicles (EVs) ki reviews aur updates.',
    alternates: { canonical: '/gadgets' },
};

export default function GadgetsPage() {
  const allPosts = getSortedPostsData();
  const gadgetPosts = allPosts.filter(post => post.category === 'Gadgets');

  return (
    <div className="flex flex-col min-h-screen bg-grid">
      <section className="relative overflow-hidden pt-12 pb-6">
        <div className="absolute top-0 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="flex items-center justify-between pb-4 border-b border-border/30">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3 mb-2">
                <Smartphone className="h-8 w-8 text-purple-500" />
                Latest <span className="gradient-text">Gadgets & EVs</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">Smartphones, laptops, ki reviews aur latest EV car launches ki news.</p>
            </div>
            <span className="hidden md:inline-flex text-sm text-muted-foreground bg-secondary/50 px-4 py-1.5 rounded-full border border-border/50 font-medium">
              {gadgetPosts.length} Articles
            </span>
          </div>
        </div>
      </section>

      <section className="py-8 flex-1">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {gadgetPosts.length === 0 ? (
             <div className="text-center py-20 bg-card/30 rounded-2xl border border-border/30 backdrop-blur">
                <Smartphone className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-medium text-foreground mb-2">Abhi koi articles nahi hain</h3>
                <p className="text-muted-foreground">Jald hi yahan naye gadgets articles add kiye jayenge.</p>
             </div>
          ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {gadgetPosts.map((post) => {
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
                         <span className="font-semibold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400">Gadgets</span>
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
