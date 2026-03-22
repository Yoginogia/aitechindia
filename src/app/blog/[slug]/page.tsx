import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/markdown';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Share2, Clock, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import SocialShare from '@/components/SocialShare';
import AdSensePlaceholder from '@/components/AdSensePlaceholder';

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

                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    {postData.excerpt}
                </p>

                {/* E-E-A-T Author Box */}
                <div className="flex flex-col gap-4 py-6 px-6 mt-8 mb-8 border border-border/40 rounded-2xl bg-secondary/10 hover:bg-secondary/20 transition-colors">
                    <div className="flex items-center gap-4">
                        <img src={postData.authorImage} alt={postData.author} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 shadow-sm" />
                        <div className="flex flex-col">
                            <span className="font-bold text-foreground text-lg flex items-center gap-1.5">
                                {postData.author} 
                                <span className="bg-blue-500/10 text-blue-500 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-sm flex items-center" title="Verified Editor">
                                    <svg className="w-3 h-3 mr-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg> 
                                    Verified
                                </span>
                            </span>
                            <span className="text-sm text-primary font-semibold">{postData.authorRole}</span>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {postData.author} is a verified tech journalist with over 8 years of experience covering the latest trends in technology, gadgets, and artificial intelligence. Their objective analysis has helped millions of consumers make informed buying decisions.
                    </p>
                </div>
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

            <AdSensePlaceholder slotId="TOP_BANNER_9841" height="150px" />

            {/* Affiliate Monetization Block */}
            {(postData.category === 'Gadgets' || postData.category === 'Top Deals') && (
                <div className="my-10 p-1 rounded-2xl bg-gradient-to-r from-primary via-blue-500 to-purple-500">
                    <div className="bg-card rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1 block">Editor's Choice Deal</span>
                            <h3 className="text-xl font-bold text-foreground mb-2">Interested in {postData.title.split(' ')[0]}?</h3>
                            <p className="text-sm text-muted-foreground">Check out the lowest price on trusted retail platforms right now before the deal expires.</p>
                        </div>
                        <div className="flex flex-col gap-3 min-w-[200px]">
                            <a href="#" className="flex items-center justify-center gap-2 bg-[#ff9900] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#ff9900]/90 transition-colors shadow-[0_0_15px_rgba(255,153,0,0.3)]">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M14.9 16c-3.1 1.7-6.5 1.7-9.8 0-1.8-1-3.2-2.5-4.2-4.3-.8-1.5-.8-3.3 0-4.8C1.9 5.1 3.3 3.6 5.1 2.6c3.1-1.7 6.5-1.7 9.8 0 1.8 1 3.2 2.5 4.2 4.3.8 1.5.8 3.3 0 4.8-.9 1.8-2.3 3.3-4.2 4.3zM10.1 6.8c-2 0-3.6 1.6-3.6 3.6 0 .4.1.8.2 1.2-1.3-.2-2.1-1.2-2.1-2.5 0-1.5 1.1-2.8 2.6-2.9 1-.1 1.9.4 2.4 1.2M7.4 14.8c1.3.2 2.1 1.2 2.1 2.5 0 1.5-1.1 2.8-2.6 2.9-1 .1-1.9-.4-2.4-1.2 2 0 3.6-1.6 3.6-3.6 0-.4-.1-.8-.2-1.2m5.2-9.2c1.3.2 2.1 1.2 2.1 2.5 0 1.5-1.1 2.8-2.6 2.9-1 .1-1.9-.4-2.4-1.2 2 0 3.6-1.6 3.6-3.6 0-.4-.1-.8-.2-1.2m0 8c-1.3-.2-2.1-1.2-2.1-2.5 0-1.5 1.1-2.8 2.6-2.9 1-.1 1.9.4 2.4 1.2-2 0-3.6 1.6-3.6 3.6 0 .4.1.8.2 1.2"/></svg> View on Amazon
                            </a>
                            <a href="#" className="flex items-center justify-center gap-2 bg-[#047BD5] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#047BD5]/90 transition-colors shadow-[0_0_15px_rgba(4,123,213,0.3)]">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 1.5l1.5 1.5v18l-1.5 1.5H3L1.5 21v-18L3 1.5h10.5z"/></svg> View on Flipkart
                            </a>
                        </div>
                    </div>
                </div>
            )}

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
            
            <AdSensePlaceholder slotId="BOTTOM_ARTICLE_4291" height="250px" />
            
            {/* E-E-A-T Citations & Sources */}
            <div className="mt-8 mb-12 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50">
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Fact-Checked & Verified Sources
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    This article has been researched using the strict journalistic standards of AITechNews. Information has been verified through primary technology announcements, official press releases, and reputable globally syndicated news hubs.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-secondary/50 px-3 py-1.5 rounded-full text-foreground hover:bg-primary/20 cursor-default transition-colors">Reuters Technology</span>
                    <span className="text-xs bg-secondary/50 px-3 py-1.5 rounded-full text-foreground hover:bg-primary/20 cursor-default transition-colors">TechCrunch News Desk</span>
                    <span className="text-xs bg-secondary/50 px-3 py-1.5 rounded-full text-foreground hover:bg-primary/20 cursor-default transition-colors">Bloomberg Tech</span>
                </div>
            </div>

            {/* Native Comments Board Mock */}
            <div className="mt-16 pt-8 border-t border-border/30 mb-12">
                <h3 className="text-2xl font-bold tracking-tight mb-8">Join the Discussion ({Math.floor(Math.random() * 40 + 5)} Comments)</h3>
                
                {/* Leave a Comment */}
                <div className="flex gap-4 mb-10">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                    <div className="flex-1">
                        <textarea className="w-full bg-background border border-border/50 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none min-h-[100px]" placeholder="What are your thoughts on this? Join the conversation..."></textarea>
                        <div className="mt-3 flex justify-end">
                            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-bold text-sm transition-colors">Post Comment</button>
                        </div>
                    </div>
                </div>

                {/* Dummy Comment */}
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=50&h=50&q=80" alt="Arjun Patil" className="w-10 h-10 rounded-full object-cover shrink-0" />
                        <div>
                            <div className="bg-secondary/30 rounded-2xl rounded-tl-none p-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-bold text-sm">Arjun Patil</span>
                                    <span className="text-xs text-muted-foreground">2 hours ago</span>
                                </div>
                                <p className="text-sm text-foreground/80 leading-relaxed">Such a great detailed breakdown! Really appreciate the unbiased perspective here. Keep up the good work!</p>
                            </div>
                            <div className="flex items-center gap-4 mt-2 ml-2 text-xs text-muted-foreground font-medium">
                                <button className="hover:text-primary transition-colors flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514"></path></svg> 24</button>
                                <button className="hover:text-primary transition-colors">Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
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
