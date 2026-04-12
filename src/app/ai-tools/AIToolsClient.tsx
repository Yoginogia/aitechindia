'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Sparkles, Bot, Code, Cpu, Smartphone, ExternalLink, Filter, CheckCircle2 } from 'lucide-react';

interface AIPost {
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    image?: string;
}

interface AITool {
    id: string;
    slug: string;
    name: string;
    category: 'student' | 'video' | 'coding' | 'office' | 'audio';
    pricing: 'Free' | 'Freemium' | 'Paid';
    description: string;
    url: string;
    emoji: string;
    rating: number;        // out of 5
    indiaAvailable: boolean;
    monthlyUsers: string;  // e.g. "100M+"
    lastUpdated: string;   // e.g. "Apr 2026"
}

const AI_TOOLS_DB: AITool[] = [
    // STUDENTS & RESEARCH
    { id: 'chatgpt', slug: 'chatgpt-guide-2026', name: 'ChatGPT', category: 'student', pricing: 'Freemium', description: 'Assignments, coding, aur ideas ke liye sabse popular AI.', url: 'https://chat.openai.com', emoji: '🧠', rating: 4.8, indiaAvailable: true, monthlyUsers: '200M+', lastUpdated: 'Apr 2026' },
    { id: 'perplexity', slug: 'perplexity-guide-2026', name: 'Perplexity AI', category: 'student', pricing: 'Freemium', description: 'Advanced search engine jo Google ki jagah sidha accurate answers deta hai.', url: 'https://www.perplexity.ai', emoji: '🔍', rating: 4.7, indiaAvailable: true, monthlyUsers: '15M+', lastUpdated: 'Mar 2026' },
    { id: 'claude', slug: 'claude-guide-2026', name: 'Claude 3', category: 'student', pricing: 'Freemium', description: 'PDF upload aur lambe research papers analyze karne me master.', url: 'https://claude.ai', emoji: '📝', rating: 4.6, indiaAvailable: true, monthlyUsers: '50M+', lastUpdated: 'Apr 2026' },
    { id: 'quillbot', slug: 'quillbot-guide-2026', name: 'QuillBot', category: 'student', pricing: 'Freemium', description: 'Grammar check aur English text ko rephrase/rewrite karne me best.', url: 'https://quillbot.com', emoji: '✍️', rating: 4.4, indiaAvailable: true, monthlyUsers: '30M+', lastUpdated: 'Feb 2026' },

    // VIDEO & IMAGE
    { id: 'midjourney', slug: 'midjourney-guide-2026', name: 'Midjourney', category: 'video', pricing: 'Paid', description: 'Text likhkar extremely realistic premium images banana.', url: 'https://midjourney.com', emoji: '🎨', rating: 4.9, indiaAvailable: true, monthlyUsers: '20M+', lastUpdated: 'Apr 2026' },
    { id: 'heygen', slug: 'heygen-guide-2026', name: 'HeyGen', category: 'video', pricing: 'Freemium', description: 'AI avatar se automatically professional videos aur shorts banana.', url: 'https://www.heygen.com', emoji: '🎬', rating: 4.5, indiaAvailable: true, monthlyUsers: '5M+', lastUpdated: 'Mar 2026' },
    { id: 'leonardo', slug: 'leonardo-guide-2026', name: 'Leonardo AI', category: 'video', pricing: 'Freemium', description: 'Midjourney ka best free alternative images generate karne ke liye.', url: 'https://leonardo.ai', emoji: '🖼️', rating: 4.4, indiaAvailable: true, monthlyUsers: '8M+', lastUpdated: 'Mar 2026' },
    { id: 'runway', slug: 'runway-guide-2026', name: 'Runway ML', category: 'video', pricing: 'Paid', description: 'High quality AI se video generation aur text-to-video editing.', url: 'https://runwayml.com', emoji: '🎥', rating: 4.3, indiaAvailable: true, monthlyUsers: '3M+', lastUpdated: 'Feb 2026' },

    // OFFICE & BUSINESS
    { id: 'gamma', slug: 'gamma-guide-2026', name: 'Gamma App', category: 'office', pricing: 'Freemium', description: '1 minute ke andar AI se beautiful presentation (PPTs) banana.', url: 'https://gamma.app', emoji: '📊', rating: 4.6, indiaAvailable: true, monthlyUsers: '10M+', lastUpdated: 'Apr 2026' },
    { id: 'notionai', slug: 'notion-guide-2026', name: 'Notion AI', category: 'office', pricing: 'Paid', description: 'Notes banana, meeting summaries likhna aur workspace handle karna.', url: 'https://www.notion.so/product/ai', emoji: '📓', rating: 4.5, indiaAvailable: true, monthlyUsers: '40M+', lastUpdated: 'Mar 2026' },
    { id: 'beautifulai', slug: 'beautifulai-guide-2026', name: 'Beautiful.ai', category: 'office', pricing: 'Freemium', description: 'Smart AI presentation software jo auto-design karta hai.', url: 'https://www.beautiful.ai', emoji: '🎨', rating: 4.2, indiaAvailable: true, monthlyUsers: '2M+', lastUpdated: 'Jan 2026' },

    // CODING & DEV
    { id: 'githubcopilot', slug: 'github-copilot-guide-2026', name: 'GitHub Copilot', category: 'coding', pricing: 'Paid', description: 'VS Code me AI autocomplete, jo khud code likh deta hai.', url: 'https://github.com/features/copilot', emoji: '💻', rating: 4.7, indiaAvailable: true, monthlyUsers: '15M+', lastUpdated: 'Apr 2026' },
    { id: 'cursor', slug: 'cursor-guide-2026', name: 'Cursor IDE', category: 'coding', pricing: 'Freemium', description: 'AI-first code editor, ChatGPT default integrated for coding.', url: 'https://cursor.sh', emoji: '⚙️', rating: 4.8, indiaAvailable: true, monthlyUsers: '4M+', lastUpdated: 'Apr 2026' },

    // AUDIO & MUSIC
    { id: 'elevenlabs', slug: 'elevenlabs-guide-2026', name: 'ElevenLabs', category: 'audio', pricing: 'Freemium', description: 'Sabse realistic AI Voice generator, exactly humans jaisi awaz.', url: 'https://elevenlabs.io', emoji: '🎙️', rating: 4.8, indiaAvailable: true, monthlyUsers: '12M+', lastUpdated: 'Apr 2026' },
    { id: 'suno', slug: 'suno-guide-2026', name: 'Suno AI', category: 'audio', pricing: 'Freemium', description: 'Sirf text commands de kr professional gaane (songs) produce karna.', url: 'https://suno.com', emoji: '🎵', rating: 4.5, indiaAvailable: true, monthlyUsers: '6M+', lastUpdated: 'Mar 2026' },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(star => (
                <svg key={star} className={`w-3 h-3 ${star <= Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground fill-muted-foreground'}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
            ))}
            <span className="text-xs font-bold text-yellow-400 ml-0.5">{rating}</span>
        </div>
    );
}

export default function AIToolsClient({ aiPosts }: { aiPosts: AIPost[] }) {
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'student' | 'video' | 'coding' | 'office' | 'audio'>('all');

    const filteredTools = AI_TOOLS_DB.filter(tool => selectedCategory === 'all' || tool.category === selectedCategory);

    const getPricingColor = (pricing: string) => {
        if (pricing === 'Free') return 'bg-green-500/10 text-green-500 border-green-500/20';
        if (pricing === 'Freemium') return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
        return 'bg-red-500/10 text-red-500 border-red-500/20';
    };

    return (
        <div className="flex flex-col min-h-screen bg-grid">
            {/* HERO SECTION FOR INTERACTIVE DB */}
            <section className="relative overflow-hidden pt-16 pb-12 bg-gradient-to-br from-indigo-950 via-[#0F172A] to-[#1e1b4b] border-b border-white/5 shadow-2xl">
                <div className="absolute top-0 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 text-sm font-bold text-blue-300">
                        <Sparkles className="w-4 h-4" /> 100% Tested AI Directory
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white leading-tight">
                        Ultimate AI Tools <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Database</span>
                    </h1>
                    <p className="text-indigo-100/70 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Student, Youtuber, ya Office employee? Yahan har kaam ke liye perfect AI tool available hai. Filter karein aur directly website open karein!
                    </p>
                </div>
            </section>

            <section className="py-10">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    {/* FILTERS */}
                    <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between pb-8 border-b border-border/30">
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <Filter className="w-5 h-5 text-muted-foreground hidden md:block" />
                            <div className="flex flex-wrap gap-2 w-full justify-center md:justify-start">
                                {[
                                    { id: 'all', label: 'All Tools' },
                                    { id: 'student', label: '🎓 Students / Study' },
                                    { id: 'video', label: '🎥 Image & Video' },
                                    { id: 'office', label: '🏢 Office / PPTs' },
                                    { id: 'coding', label: '💻 Coding' },
                                    { id: 'audio', label: '🎵 Audio / Voice' },
                                ].map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id as any)}
                                        className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
                                            selectedCategory === cat.id 
                                            ? 'bg-primary text-white shadow-lg border border-primary' 
                                            : 'bg-secondary/50 text-muted-foreground border border-border/50 hover:bg-secondary'
                                        }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-2 text-xs font-semibold">
                            <span className="px-2 py-1 rounded bg-green-500/10 text-green-500">Free</span>
                            <span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-500">Freemium</span>
                            <span className="px-2 py-1 rounded bg-red-500/10 text-red-500">Paid</span>
                        </div>
                    </div>

                    {/* TOOLS GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {filteredTools.map((tool) => (
                            <div key={tool.id} className="bg-card rounded-2xl border border-border/50 p-6 flex flex-col hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <span className={`text-[10px] uppercase font-bold px-2.5 py-1 rounded-md border ${getPricingColor(tool.pricing)}`}>
                                        {tool.pricing}
                                    </span>
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-3xl mb-4 shadow-inner border border-border/50 group-hover:scale-110 transition-transform">
                                    {tool.emoji}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{tool.name}</h3>
                                
                                {/* Rating Row */}
                                <div className="flex items-center gap-3 mb-3">
                                    <StarRating rating={tool.rating} />
                                    <span className="text-[10px] text-muted-foreground">·</span>
                                    <span className="text-[10px] text-muted-foreground font-medium">Updated {tool.lastUpdated}</span>
                                </div>

                                {/* Meta Info */}
                                <div className="flex items-center gap-2 mb-3 flex-wrap">
                                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${tool.indiaAvailable ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                        {tool.indiaAvailable ? '🇮🇳 India Available' : '❌ Not in India'}
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                        👥 {tool.monthlyUsers} users
                                    </span>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                                    {tool.description}
                                </p>
                                <a 
                                    href={tool.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all mb-2"
                                >
                                    Visit Website <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* HYBRID SECTION: ARTICLES (BOTTOM) */}
            <section className="py-16 flex-1 bg-secondary/10 border-t border-border/30">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight mb-3">📰 Latest AI News & Guides</h2>
                        <p className="text-muted-foreground">In tools ke bare mein deep tutorials aur latest updates yahan padhein.</p>
                    </div>

                    {aiPosts.length === 0 ? (
                        <div className="text-center py-20 bg-card rounded-2xl border border-border/30">
                            <Sparkles className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                            <h3 className="text-xl font-medium text-foreground mb-2">Abhi koi articles nahi hain</h3>
                            <p className="text-muted-foreground">Jald hi yahan naye AI articles add kiye jayenge.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {aiPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group flex flex-col rounded-3xl border border-border/30 bg-card backdrop-blur overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className={`aspect-video w-full bg-gradient-to-br from-blue-500/10 to-emerald-500/10 flex items-center justify-center relative overflow-hidden`}>
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
                                                    <Bot className="h-6 w-6 text-muted-foreground" />
                                                </div>
                                            </>
                                        )}
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="bg-background/80 backdrop-blur-md text-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-4 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                                            <Clock className="h-3.5 w-3.5" /> {post.date}
                                        </div>
                                        <h3 className="font-bold text-xl leading-snug group-hover:text-primary transition-colors flex-1">
                                            {post.title}
                                        </h3>
                                        <span className="text-sm font-bold text-primary flex items-center gap-1.5 pt-2">
                                            Padhna shuru karein <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
