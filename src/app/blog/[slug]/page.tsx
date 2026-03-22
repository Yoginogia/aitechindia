import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/markdown';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Share2, Clock, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import SocialShare from '@/components/SocialShare';

export async function generateStaticParams() {
    const posts = getAllPostSlugs();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    try {
        const postData = await getPostData(resolvedParams.slug);
        return {
            title: `${postData.title} | AITechNews`,
            description: postData.excerpt,
        };
    } catch {
        return {
            title: 'Post Not Found | AITechNews',
        };
    }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;

    let postData;
    try {
        postData = await getPostData(resolvedParams.slug);
    } catch (error) {
        notFound();
    }

    const allPosts = getSortedPostsData();
    const relatedPosts = allPosts
        .filter(post => post.category === postData.category && post.slug !== postData.slug)
        .slice(0, 3);

    return (
        <article className="container mx-auto px-4 md:px-8 max-w-4xl py-12 md:py-20">
            <div className="mb-10">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    वापस Home पर
                </Link>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-sm font-semibold text-primary">
                        <Tag className="mr-2 h-3 w-3" />
                        {postData.category}
                    </span>
                    <span className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        {postData.date}
                    </span>
                    {postData.readingTime && (
                        <span className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-2 h-4 w-4" />
                            {postData.readingTime}
                        </span>
                    )}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight gradient-text">
                    {postData.title}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                    {postData.excerpt}
                </p>
            </div>

            {/* Article Cover Image */}
            <div className="aspect-[21/9] w-full rounded-2xl mb-12 overflow-hidden relative border border-border/30 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10">
                {postData.image ? (
                    <img
                        src={postData.image}
                        alt={postData.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ) : (
                    <>
                        <div className="absolute inset-0 bg-grid opacity-30"></div>
                        <span className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 bg-background/30 backdrop-blur text-sm">[Featured Image]</span>
                    </>
                )}
            </div>

            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative">
                {/* Sticky Sidebar for Social Share (Desktop) */}
                <div className="hidden md:flex flex-col sticky top-24 h-fit pt-2">
                    <SocialShare title={postData.title} />
                </div>

                {/* Main Content */}
                <div
                    className="flex-1 min-w-0 prose prose-lg prose-invert max-w-none 
                       prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight 
                       prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                       prose-strong:text-foreground prose-strong:font-semibold
                       prose-ul:text-muted-foreground prose-ul:list-disc prose-ul:pl-6
                       prose-ol:text-muted-foreground prose-ol:list-decimal prose-ol:pl-6
                       prose-blockquote:border-l-primary prose-blockquote:bg-primary/10 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-foreground prose-blockquote:font-medium
                       prose-img:rounded-2xl prose-img:border prose-img:border-border/40 prose-img:shadow-xl
                       marker:text-primary"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
                />
            </div>
            
            <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-6 mb-16">
                <div className="md:hidden w-full flex justify-center items-center py-4 bg-zinc-900/50 rounded-2xl border border-border/50">
                    <SocialShare title={postData.title} />
                </div>
                <div className="hidden md:block"></div> {/* Spacer for desktop bottom area */}
                
                <Link href="/latest" className="inline-flex h-12 items-center justify-center rounded-full border border-border/30 bg-primary/10 text-primary px-8 text-sm font-bold transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                    Aur Khabrein Padhein →
                </Link>
            </div>

            {/* Premium "You May Also Like" Section */}
            {relatedPosts.length > 0 && (
                <div className="border-t border-border/30 pt-16 mt-10">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-extrabold tracking-tight">You May Also Like 🔥</h3>
                        <Link href="/latest" className="text-primary text-sm font-bold hover:underline hidden sm:block">View All</Link>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {relatedPosts.map((post) => (
                             <Link
                               key={post.slug}
                               href={`/blog/${post.slug}`}
                               className="group flex flex-col rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
                             >
                               <div className="aspect-[4/3] w-full bg-secondary flex items-center justify-center relative overflow-hidden">
                                 {post.image ? (
                                   <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                                 ) : (
                                   <div className="absolute inset-0 bg-grid opacity-30"></div>
                                 )}
                                 <div className="absolute top-4 left-4 z-20">
                                     <span className="bg-background/80 backdrop-blur-md text-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                         {post.category}
                                     </span>
                                 </div>
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                               </div>
                               <div className="p-6 flex flex-col flex-grow">
                                 <h4 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-3">
                                   {post.title}
                                 </h4>
                                 <div className="mt-auto flex items-center text-xs text-muted-foreground font-medium">
                                     <Calendar className="mr-1.5 h-3.5 w-3.5" />
                                     {post.date}
                                 </div>
                               </div>
                             </Link>
                        ))}
                    </div>
                </div>
            )}
        </article>
    );
}
