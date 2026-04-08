import Link from 'next/link';
import type { Metadata } from 'next';
import { STORIES } from '@/data/stories';

export const metadata: Metadata = {
    title: 'Google Web Stories | AITechNews',
    description: 'AITechNews ke Google Web Stories — Top AI aur Tech news aaj ki, quick swipeable format mein. Google Discover par bhi available!',
};

export default function WebStoriesGallery() {
    return (
        <main className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-20">
            {/* Header */}
            <div className="mb-16 text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-primary text-sm font-bold mb-6 animate-fade-in">
                    <svg className="w-4 h-4 animate-pulse" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    Google Web Stories
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter gradient-text mb-6">
                    Discovery Feed
                </h1>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
                    Latest tech insights in a lightning-fast swipeable format. Optimized for 
                    <span className="text-primary font-bold"> Google Discover</span>.
                </p>
            </div>

            {/* Stories Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                {STORIES.map((story) => (
                    <a
                        key={story.slug}
                        href={`/web-stories/${story.slug}.html`}
                        target="_blank"
                        rel="noopener"
                        className="group relative aspect-[9/16] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl hover:shadow-primary/40 hover:-translate-y-3 transition-all duration-700 flex flex-col justify-end ring-1 ring-white/10 hover:ring-primary/50 bg-black"
                    >
                        {/* Background Image with Ken Burns Effect on Hover */}
                        <img
                            src={story.image}
                            alt={story.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-100 transition-transform duration-[3000ms] ease-out opacity-80 group-hover:opacity-100"
                        />
                        
                        {/* Premium Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>

                        {/* Top Badge Layer */}
                        <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                            <div className="flex flex-col gap-3">
                                <div className="p-1 rounded-full bg-gradient-to-tr from-primary via-purple-500 to-pink-500 w-fit shadow-[0_0_20px_rgba(0,0,0,0.5)] transform group-hover:rotate-[360deg] transition-transform duration-1000">
                                    <div className="p-1 rounded-full bg-black">
                                        <img src="/logo.png" alt="AITechNews" className="w-8 h-8 rounded-full object-cover" />
                                    </div>
                                </div>
                                {story.isTrending && (
                                    <div className="bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-pulse uppercase tracking-widest">
                                        Live
                                    </div>
                                )}
                            </div>
                            <div className="bg-white/10 backdrop-blur-xl text-white/90 text-[10px] font-black px-4 py-1.5 rounded-full border border-white/20 uppercase tracking-widest">
                                {story.pages} Slides
                            </div>
                        </div>

                        {/* Content Layer - Premium Typography */}
                        <div className="relative z-10 p-7 pb-8 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                            <div className="flex items-center gap-2 mb-4">
                                <span
                                    className="text-[10px] font-black px-3 py-1 rounded-md text-white uppercase tracking-widest shadow-lg"
                                    style={{ backgroundColor: story.categoryColor }}
                                >
                                    {story.category}
                                </span>
                            </div>
                            <h2 className="text-white font-black text-2xl leading-[1.1] mb-3 group-hover:text-primary transition-colors tracking-tight line-clamp-3">
                                {story.title}
                            </h2>
                            <div className="h-0.5 w-12 bg-primary/60 mb-4 rounded-full group-hover:w-full transition-all duration-700"></div>
                            <p className="text-white/60 text-sm font-medium line-clamp-2 leading-relaxed italic">
                                "{story.subtitle}"
                            </p>
                        </div>

                        {/* Interactive Play Reveal */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 bg-black/20 backdrop-blur-[4px]">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.4)] transform scale-50 group-hover:scale-100 rotate-[-10deg] group-hover:rotate-0 transition-all duration-500">
                                <svg className="w-10 h-10 text-black ml-1.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                        </div>
                    </a>
                ))}

                {/* Aesthetic Spacer for Masonry-ish feel */}
                <div className="hidden lg:flex flex-col items-center justify-center p-10 text-center border-2 border-dashed border-white/5 rounded-[2.5rem] hover:border-primary/20 transition-colors group">
                     <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        <svg className="w-10 h-10 text-primary/40 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                     </div>
                     <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-xs">New Stories</p>
                     <p className="text-white/20 text-[10px] mt-2 italic px-10">Dropping every 24 hours.</p>
                </div>
            </div>

            {/* Google Discover CTA */}
            <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-primary/20 via-background to-black border border-white/10 relative overflow-hidden group">
                <div className="absolute -right-40 -top-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px] group-hover:bg-primary/30 transition-all duration-1000"></div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 text-center md:text-left">
                    <div className="flex items-center gap-8 flex-col md:flex-row">
                        <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center shadow-inner border border-white/10">
                            <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Real AMP Web Stories</h3>
                            <p className="text-lg text-white/50 max-w-xl">
                                Built with professional AMP standards. These stories are ready for <span className="text-white font-bold">Google Discover</span> and billion-plus mobile users.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
