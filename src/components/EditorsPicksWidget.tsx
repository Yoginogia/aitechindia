import Link from 'next/link';
import { Star, ChevronRight, Clock } from 'lucide-react';
import { getSortedPostsData } from '@/lib/markdown';

export default function EditorsPicksWidget() {
    // For "Editor's Picks", we'll just grab the first 4 articles that have a specific tag,
    // or just the latest 4 if we don't have tags set up for 'featured'.
    const allPosts = getSortedPostsData();
    
    // We can simulate editor's picks by taking articles from 2nd index onwards, 
    // but excluding Crypto posts which belong in the dedicated section.
    const featuredPosts = allPosts.filter(post => post.category !== 'Crypto').slice(2, 6);

    return (
        <div className="rounded-2xl border border-border/30 bg-card/50 backdrop-blur p-6 mt-6">
            <div className="flex items-center gap-2 mb-5">
                <div className="h-8 w-8 rounded-lg bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500/20" />
                </div>
                <h3 className="text-lg font-bold tracking-tight">Editor's Picks</h3>
            </div>

            <div className="space-y-4">
                {featuredPosts.map((post, index) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex gap-3 items-start border-b border-border/10 pb-4 last:border-0 last:pb-0 hover:bg-secondary/20 -mx-2 px-2 py-1 rounded-lg transition-colors"
                    >
                        {post.image ? (
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-16 h-16 rounded-xl object-cover shrink-0 border border-border/20 group-hover:border-primary/30 transition-colors"
                            />
                        ) : (
                            <div className="w-16 h-16 rounded-xl bg-secondary/50 flex items-center justify-center shrink-0 border border-border/20">
                                <span className="text-xl font-bold text-muted-foreground/30">{index + 1}</span>
                            </div>
                        )}
                        
                        <div className="flex flex-col flex-1 min-w-0 justify-center h-16">
                            <h4 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                {post.title}
                            </h4>
                            <div className="flex items-center gap-2 text-[10px] text-muted-foreground mt-1">
                                <span className="text-primary bg-primary/10 px-1.5 py-0.5 rounded-sm font-medium">{post.category}</span>
                                <span className="flex items-center gap-0.5"><Clock className="h-2.5 w-2.5" /> {post.readingTime || '3 min'}</span>
                            </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground/30 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all self-center transform group-hover:translate-x-1" />
                    </Link>
                ))}
            </div>
        </div>
    );
}
