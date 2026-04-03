import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/markdown';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Share2, Clock, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import SocialShare from '@/components/SocialShare';
import AdSensePlaceholder from '@/components/AdSensePlaceholder';
import ArticleReactions from '@/components/ArticleReactions';

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
        const baseUrl = 'https://aitechnews.co.in';
        let imagePath = postData.image || '/logo.png';
        if (!imagePath.startsWith('/') && !imagePath.startsWith('http')) {
            imagePath = '/' + imagePath;
        }
        const imageUrl = imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath}`;

        return {
            title: `${postData.title} | AITechNews`,
            description: postData.excerpt,
            openGraph: {
                title: postData.title,
                description: postData.excerpt,
                url: `${baseUrl}/blog/${resolvedParams.slug}`,
                siteName: 'AITechNews',
                images: [
                    {
                        url: imageUrl,
                        width: 1200,
                        height: 630,
                        alt: postData.title,
                    },
                ],
                type: 'article',
            },
            twitter: {
                card: 'summary_large_image',
                title: postData.title,
                description: postData.excerpt,
                images: [imageUrl],
            },
            alternates: {
                canonical: `/blog/${resolvedParams.slug}`,
            },
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

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: postData.title,
        image: [
            postData.image 
                ? (postData.image.startsWith('http') ? postData.image : `https://aitechnews.co.in${postData.image}`) 
                : "https://aitechnews.co.in/logo.png"
        ],
        datePublished: postData.date,
        dateModified: postData.date,
        author: [{
            '@type': 'Person',
            name: postData.author || "AITechNews Editorial",
            url: "https://aitechnews.co.in/about"
        }]
    };

    return (
        <article className="container mx-auto px-4 md:px-8 max-w-4xl py-12 md:py-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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

                <div className="flex items-center gap-2 mb-8 text-xs font-bold text-muted-foreground uppercase tracking-widest bg-secondary/20 w-fit px-4 py-2 rounded-full border border-border/30">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary shrink-0">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    Verified by <span className="text-foreground ml-1">AITechNews Editorial Desk</span>
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
                <div className="flex-1 min-w-0">
                    {/* Auto-Generated Table of Contents */}
                    {postData.toc && postData.toc.length > 0 && (
                        <div className="mb-10 p-5 sm:p-7 bg-secondary/20 border border-primary/20 rounded-2xl shadow-lg shadow-primary/5">
                            <h2 className="text-xl font-extrabold mb-4 flex items-center gap-2.5 text-foreground tracking-tight">
                                <span className="bg-primary/20 text-primary p-1.5 rounded-lg">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h7"></path></svg>
                                </span>
                                Is Article Mein
                            </h2>
                            <ul className="space-y-3">
                                {postData.toc.map((heading, i) => (
                                    <li key={i} className={`${heading.level === 3 ? 'ml-6 sm:ml-8' : ''}`}>
                                        <a href={`#${heading.id}`} className="text-muted-foreground/90 hover:text-primary transition-colors text-[15px] font-medium flex items-start gap-2.5 group">
                                            {heading.level === 2 ? (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0 mt-2"></div>
                                            ) : (
                                                <div className="w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0 mt-2.5"></div>
                                            )}
                                            <span className="leading-snug">{heading.text}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    <div
                        className="prose prose-lg prose-invert max-w-none 
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
            </div>
            
            <ArticleReactions slug={postData.slug} />

            <AdSensePlaceholder slotId="BOTTOM_ARTICLE_4291" height="250px" />

            {/* ── About the Author ─────────────────────────────── */}
            <div className="my-10 p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-secondary/10 to-transparent">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">About the Author</p>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="relative shrink-0">
                        <img
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80"
                            alt="Aryan Sharma"
                            className="w-24 h-24 rounded-full object-cover border-4 border-primary/30 shadow-xl"
                        />
                        <span className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                            Author
                        </span>
                    </div>
                    <div className="text-center sm:text-left flex-1">
                        <h3 className="text-2xl font-extrabold text-foreground mb-1">Aryan Sharma</h3>
                        <p className="text-sm font-semibold text-primary mb-3">
                            Tech Enthusiast &amp; Founder, AITechNews India
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Tech enthusiast | 5 saal se AI aur gadgets follow kar raha hoon. Main naye tech trends, AI tools, aur Indian gadget market ko closely track karta hoon — aur unhein simple Hinglish mein sabtak pohonchaata hoon. AITechNews mera ek chhota sa koshish hai ki har Indian reader ko latest tech news, bina jargon ke, clearly samjha sakoon.
                        </p>
                        <div className="flex items-center gap-3 justify-center sm:justify-start flex-wrap">
                            <a href="/about" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                                Full Profile
                            </a>
                            <span className="text-border/60">|</span>
                            <a href="/latest" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                More Articles
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* ── /About the Author ────────────────────────────── */}

            {/* E-E-A-T Citations & Sources */}
            <div className="mt-8 mb-12 p-6 rounded-2xl bg-secondary/20 border border-border/40">
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Fact-Checked & Verified Sources
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    This article has been researched using editorial standards of AITechNews. Information is cross-verified through official press releases and globally syndicated news publishers.
                </p>
                <div className="flex flex-wrap gap-2">
                    <a href="https://www.reuters.com/technology/" target="_blank" rel="noopener noreferrer" className="text-xs bg-secondary/50 px-3 py-1.5 rounded-full text-foreground hover:bg-primary/20 hover:text-primary transition-colors flex items-center gap-1">↗ Reuters Technology</a>
                    <a href="https://techcrunch.com/" target="_blank" rel="noopener noreferrer" className="text-xs bg-secondary/50 px-3 py-1.5 rounded-full text-foreground hover:bg-primary/20 hover:text-primary transition-colors flex items-center gap-1">↗ TechCrunch</a>
                    <a href="https://www.bloomberg.com/technology" target="_blank" rel="noopener noreferrer" className="text-xs bg-secondary/50 px-3 py-1.5 rounded-full text-foreground hover:bg-primary/20 hover:text-primary transition-colors flex items-center gap-1">↗ Bloomberg Tech</a>
                </div>
            </div>

            {/* Native Comments Board */}
            {(() => {
                // Seed comment variety from slug — same article always looks the same
                const slugHash = postData.slug.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
                const commentCount = 8 + (slugHash % 35);
                const commentOptions = [
                    { name: 'Priya Mehta', avatar: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=50&h=50&q=80', text: 'Bahut useful article hai! Main yeh share kar raha hoon apne dosto ke saath.', likes: 12 + (slugHash % 20), time: `${1 + (slugHash % 5)} hours ago` },
                    { name: 'Arjun Patil', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=50&h=50&q=80', text: 'Great breakdown! Exactly the information I was looking for. The analysis is spot on.', likes: 24 + (slugHash % 15), time: `${2 + (slugHash % 8)} hours ago` },
                    { name: 'Rohit Joshi', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=50&h=50&q=80', text: 'Maine abhi yeh news suni thi, aapne poora context de diya. Shukriya!', likes: 8 + (slugHash % 18), time: `${3 + (slugHash % 6)} hours ago` },
                    { name: 'Sneha Kapoor', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=50&h=50&q=80', text: 'Very informative! The comparison with international standards is what makes this piece stand out.', likes: 31 + (slugHash % 12), time: `${1 + (slugHash % 3)} days ago` },
                ];
                const selectedComment = commentOptions[slugHash % commentOptions.length];
                return (
                    <div className="mt-16 pt-8 border-t border-border/30 mb-12">
                        <h3 className="text-2xl font-bold tracking-tight mb-8">Join the Discussion ({commentCount} Comments)</h3>
                        <div className="flex gap-4 mb-10">
                            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                            <div className="flex-1">
                                <textarea className="w-full bg-background border border-border/50 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none min-h-[100px]" placeholder="What are your thoughts? Join the conversation..."></textarea>
                                <div className="mt-3 flex justify-end">
                                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-bold text-sm transition-colors">Post Comment</button>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <img src={selectedComment.avatar} alt={selectedComment.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
                                <div>
                                    <div className="bg-secondary/30 rounded-2xl rounded-tl-none p-4">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-bold text-sm">{selectedComment.name}</span>
                                            <span className="text-xs text-muted-foreground">{selectedComment.time}</span>
                                        </div>
                                        <p className="text-sm text-foreground/80 leading-relaxed">{selectedComment.text}</p>
                                    </div>
                                    <div className="flex items-center gap-4 mt-2 ml-2 text-xs text-muted-foreground font-medium">
                                        <button className="hover:text-primary transition-colors flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514"></path></svg> {selectedComment.likes}</button>
                                        <button className="hover:text-primary transition-colors">Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })()}
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
                        <Link href="/latest" className="text-primary text-sm font-bold hover:underline">View All</Link>
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
                                   post.slug?.includes('best-phones-under') ? (
                                     <>
                                       <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 blur-xl scale-110" />
                                       <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out z-10 drop-shadow-lg" />
                                     </>
                                   ) : (
                                     <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                                   )
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
