import Link from 'next/link';
import { Sparkles, Smartphone, Code, ArrowRight, Clock } from 'lucide-react';
import { getSortedPostsData } from '@/lib/markdown';

const CATEGORY_STYLES: Record<string, { icon: React.ReactNode; gradient: string }> = {
    'AI Tools': { icon: <Sparkles className="h-4 w-4" />, gradient: 'from-emerald-500/20 to-cyan-600/20' },
    'Gadgets': { icon: <Smartphone className="h-4 w-4" />, gradient: 'from-purple-500/20 to-pink-600/20' },
    'Software': { icon: <Code className="h-4 w-4" />, gradient: 'from-orange-500/20 to-red-600/20' },
};

export default function HomeCategoryShowcase() {
    const allPosts = getSortedPostsData();

    // Group posts by prominent categories
    const categories = ['AI Tools', 'Gadgets', 'Software'];
    
    return (
        <section className="py-16 border-t border-border/20 bg-secondary/5 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-3">Explore Top Categories</h2>
                    <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                        आपकी पसंद की टेक खबरें, अलग-अलग कैटेगरी में। AI, गैजेट्स या सॉफ्टवेयर — जो चाहें वो पढ़ें।
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category) => {
                        const style = CATEGORY_STYLES[category];
                        const categoryPosts = allPosts.filter(p => p.category === category).slice(0, 3);
                        
                        if (categoryPosts.length === 0) return null;

                        const pathSlug = category.toLowerCase().replace(' ', '-');

                        return (
                            <div key={category} className="space-y-4">
                                {/* Category Header */}
                                <div className="flex items-center justify-between border-b border-border/20 pb-3">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${style.gradient} flex items-center justify-center border border-white/10`}>
                                            {style.icon}
                                        </div>
                                        <h3 className="text-xl font-bold">{category}</h3>
                                    </div>
                                    <Link href={`/${pathSlug}`} className="text-xs font-medium text-primary hover:text-primary/80 transition-colors flex items-center">
                                        सब देखें <ArrowRight className="h-3 w-3 ml-1" />
                                    </Link>
                                </div>

                                {/* Article List */}
                                <div className="space-y-4">
                                    {categoryPosts.map((post) => (
                                        <Link
                                            key={post.slug}
                                            href={`/blog/${post.slug}`}
                                            className="group flex gap-4 items-start hover:bg-secondary/20 -mx-2 px-2 py-2 rounded-lg transition-colors"
                                        >
                                            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-border/20 group-hover:border-primary/30 transition-colors">
                                                {post.image ? (
                                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className={`w-full h-full bg-gradient-to-br ${style.gradient}`}></div>
                                                )}
                                            </div>
                                            <div className="flex flex-col justify-center min-w-0">
                                                <h4 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                                    {post.title}
                                                </h4>
                                                <div className="flex items-center gap-2 text-[10px] text-muted-foreground mt-1.5">
                                                    <span className="flex items-center gap-0.5"><Clock className="h-2.5 w-2.5" /> {post.date}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
