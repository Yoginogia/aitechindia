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
}

const AI_TOOLS_DB: AITool[] = [
    // STUDENTS & RESEARCH
    { id: 'chatgpt', slug: 'chatgpt-guide-2026', name: 'ChatGPT', category: 'student', pricing: 'Freemium', description: 'Assignments, coding, aur ideas ke liye sabse popular AI.', url: 'https://chat.openai.com', emoji: '🧠' },
    { id: 'perplexity', slug: 'perplexity-guide-2026', name: 'Perplexity AI', category: 'student', pricing: 'Freemium', description: 'Advanced search engine jo Google ki jagah sidha accurate answers deta hai.', url: 'https://www.perplexity.ai', emoji: '🔍' },
    { id: 'claude', slug: 'claude-guide-2026', name: 'Claude 3', category: 'student', pricing: 'Freemium', description: 'PDF upload aur lambe research papers analyze karne me master.', url: 'https://claude.ai', emoji: '📝' },
    { id: 'quillbot', slug: 'quillbot-guide-2026', name: 'QuillBot', category: 'student', pricing: 'Freemium', description: 'Grammar check aur English text ko rephrase/rewrite karne me best.', url: 'https://quillbot.com', emoji: '✍️' },

    // VIDEO & IMAGE
    { id: 'midjourney', slug: 'midjourney-guide-2026', name: 'Midjourney', category: 'video', pricing: 'Paid', description: 'Text likhkar extremely realistic premium images banana.', url: 'https://midjourney.com', emoji: '🎨' },
    { id: 'heygen', slug: 'heygen-guide-2026', name: 'HeyGen', category: 'video', pricing: 'Freemium', description: 'AI avatar se automatically professional videos aur shorts banana.', url: 'https://www.heygen.com', emoji: '🎬' },
    { id: 'leonardo', slug: 'leonardo-guide-2026', name: 'Leonardo AI', category: 'video', pricing: 'Freemium', description: 'Midjourney ka best free alternative images generate karne ke liye.', url: 'https://leonardo.ai', emoji: '🖼️' },
    { id: 'runway', slug: 'runway-guide-2026', name: 'Runway ML', category: 'video', pricing: 'Paid', description: 'High quality AI se video generation aur text-to-video editing.', url: 'https://runwayml.com', emoji: '🎥' },

    // OFFICE & BUSINESS
    { id: 'gamma', slug: 'gamma-guide-2026', name: 'Gamma App', category: 'office', pricing: 'Freemium', description: '1 minute ke andar AI se beautiful presentation (PPTs) banana.', url: 'https://gamma.app', emoji: '📊' },
    { id: 'notionai', slug: 'notion-guide-2026', name: 'Notion AI', category: 'office', pricing: 'Paid', description: 'Notes banana, meeting summaries likhna aur workspace handle karna.', url: 'https://www.notion.so/product/ai', emoji: '📓' },
    { id: 'tome', slug: 'tome-guide-2026', name: 'Tome', category: 'office', pricing: 'Freemium', description: 'Text prompt de kar puri kahani ya business slides tayar karna.', url: 'https://tome.app', emoji: '📈' },

    // CODING & DEV
    { id: 'githubcopilot', slug: 'github-copilot-guide-2026', name: 'GitHub Copilot', category: 'coding', pricing: 'Paid', description: 'VS Code me AI autocomplete, jo khud code likh deta hai.', url: 'https://github.com/features/copilot', emoji: '💻' },
    { id: 'cursor', slug: 'cursor-guide-2026', name: 'Cursor IDE', category: 'coding', pricing: 'Freemium', description: 'AI-first code editor, ChatGPT default integrated for coding.', url: 'https://cursor.sh', emoji: '⚙️' },
    
    // AUDIO & MUSIC
    { id: 'elevenlabs', slug: 'elevenlabs-guide-2026', name: 'ElevenLabs', category: 'audio', pricing: 'Freemium', description: 'Sabse realistic AI Voice generator, exactly humans jaisi awaz.', url: 'https://elevenlabs.io', emoji: '🎙️' },
    { id: 'suno', slug: 'suno-guide-2026', name: 'Suno AI', category: 'audio', pricing: 'Freemium', description: 'Sirf text commands de kr professional gaane (songs) produce karna.', url: 'https://suno.com', emoji: '🎵' },
];

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
                                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-3xl mb-5 shadow-inner border border-border/50 group-hover:scale-110 transition-transform">
                                    {tool.emoji}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
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
                                <Link
                                    href={`/blog/${tool.slug}`}
                                    className="w-full bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
                                >
                                    📖 Read Detailed Guide <ArrowRight className="w-4 h-4" />
                                </Link>
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
