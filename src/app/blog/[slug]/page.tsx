import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/markdown';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Share2, Clock, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

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
            title: `${postData.title} | AITechIndia`,
            description: postData.excerpt,
        };
    } catch {
        return {
            title: 'Post Not Found | AITechIndia',
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

            <div
                className="prose prose-lg prose-invert max-w-none 
                   prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight 
                   prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                   prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                   prose-strong:text-foreground prose-strong:font-semibold
                   prose-ul:text-muted-foreground prose-ul:list-disc prose-ul:pl-6
                   prose-ol:text-muted-foreground prose-ol:list-decimal prose-ol:pl-6
                   prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-muted-foreground
                   prose-img:rounded-xl prose-img:border prose-img:border-border/40
                   marker:text-primary"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
            />

            <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4 mb-16">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Share2 className="h-4 w-4" />
                    <span>Share करें:</span>
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(postData.title)}&url=${encodeURIComponent(`https://aitechindia.vercel.app/blog/${resolvedParams.slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">Twitter</a>
                    <span>•</span>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://aitechindia.vercel.app/blog/${resolvedParams.slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">LinkedIn</a>
                    <span>•</span>
                    <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(postData.title + ' - ' + `https://aitechindia.vercel.app/blog/${resolvedParams.slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">WhatsApp</a>
                </div>
                <Link href="/" className="inline-flex h-10 items-center justify-center rounded-full border border-border/30 bg-secondary/30 backdrop-blur px-6 text-sm font-medium transition-all hover:bg-secondary/50 hover:border-primary/30">
                    और पढ़ें →
                </Link>
            </div>

            {/* Related Articles Section */}
            {relatedPosts.length > 0 && (
                <div className="border-t border-border/30 pt-16">
                    <h3 className="text-2xl font-bold tracking-tight mb-8">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedPosts.map((post) => (
                             <Link
                               key={post.slug}
                               href={`/blog/${post.slug}`}
                               className="group flex flex-col rounded-2xl border border-border/30 bg-card/50 backdrop-blur overflow-hidden card-glow"
                             >
                               <div className="aspect-video w-full bg-secondary flex items-center justify-center relative overflow-hidden">
                                 {post.image ? (
                                   <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                 ) : (
                                   <div className="absolute inset-0 bg-grid opacity-30"></div>
                                 )}
                                 <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent"></div>
                               </div>
          
                               <div className="p-5 space-y-3 flex-1 flex flex-col">
                                 <h4 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                   {post.title}
                                 </h4>
                                 <div className="flex items-center justify-between mt-auto pt-2">
                                     <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> {post.readingTime}
                                     </span>
                                     <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
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
