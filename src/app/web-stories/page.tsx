'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Share2, Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const WEB_STORIES = [
    {
        id: 1,
        title: "iPhone 18 SE: The Cheapest AI Phone by Apple!",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
        content: "Apple is launching the iPhone 18 SE with A19 chip, 48MP camera, and full Apple Intelligence support at just ₹48,900!"
    },
    {
        id: 2,
        title: "Google Gemini 3.0 Leak: Super Human Reasoning",
        category: "AI",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        content: "Gemini 3.0 can process live video from your phone's camera and solve complex coding logic instantly without internet."
    },
    {
        id: 3,
        title: "Solana ETF Approved: SOL Crosses $350!",
        category: "Crypto",
        image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=800",
        content: "US SEC officially approves Solana Spot ETF. Billions of dollars flowing in as SOL hits new All-Time High today."
    },
    {
        id: 4,
        title: "Samsung Galaxy M17e 5G: Battery King",
        category: "Trending",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800",
        content: "6000mAh battery, 5G, and 6 Years of OS updates for just ₹12,999. Is this the budget king of 2026?"
    }
];

export default function WebStoriesPage() {
    return (
        <div className="fixed inset-0 bg-black z-[100] flex justify-center items-center overflow-hidden">
            <Link href="/" className="absolute top-6 left-6 z-50 p-2 bg-black/50 backdrop-blur rounded-full text-white hover:bg-white/20 transition">
                <ArrowLeft className="h-6 w-6" />
            </Link>

            {/* Stories Container - Snap Scrolling */}
            <div className="w-full h-full max-w-md bg-zinc-900 md:rounded-3xl overflow-y-scroll snap-y snap-mandatory no-scrollbar relative flex flex-col hide-scroll">
                
                {WEB_STORIES.map((story) => (
                    <div 
                        key={story.id} 
                        className="w-full h-full flex-shrink-0 snap-start relative bg-black"
                    >
                        {/* Background Image */}
                        <img 
                            src={story.image} 
                            alt={story.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                        {/* Dark Gradient Overlay for Text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                        
                        {/* Story Content Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-white pb-20 md:pb-6">
                            <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold w-max mb-3 uppercase tracking-wider shadow-lg">
                                {story.category}
                            </span>
                            <h2 className="text-3xl font-extrabold leading-tight mb-3 drop-shadow-lg">
                                {story.title}
                            </h2>
                            <p className="text-gray-200 text-lg sm:text-base mb-6 drop-shadow-md line-clamp-4">
                                {story.content}
                            </p>
                            
                            <div className="flex items-center gap-4 border-t border-white/20 pt-4">
                                <button className="flex items-center gap-2 text-white/90 hover:text-white transition group">
                                    <div className="p-2 bg-white/10 rounded-full group-hover:bg-red-500/20 transition">
                                        <Heart className="h-5 w-5 group-hover:text-red-500 fill-transparent group-hover:fill-red-500 transition" />
                                    </div>
                                    <span className="text-sm font-medium">Like</span>
                                </button>
                                <button className="flex items-center gap-2 text-white/90 hover:text-white transition group">
                                    <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition">
                                        <MessageCircle className="h-5 w-5" />
                                    </div>
                                    <span className="text-sm font-medium">Comment</span>
                                </button>
                                <button className="flex items-center gap-2 text-white/90 hover:text-white transition group ml-auto">
                                    <div className="p-2 bg-white/10 rounded-full group-hover:bg-blue-500/20 transition">
                                        <Share2 className="h-5 w-5 group-hover:text-blue-400 transition" />
                                    </div>
                                    <span className="text-sm font-medium">Share</span>
                                </button>
                            </div>
                        </div>

                        {/* Progress Bar Top */}
                        <div className="absolute top-0 left-0 right-0 p-4 flex gap-1 z-20">
                            {WEB_STORIES.map((_, i) => (
                                <div key={i} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                                    <div className={`h-full bg-white rounded-full transition-all duration-[3000ms] ease-linear ${i === 0 ? 'w-full' : 'w-0'}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
            
            {/* Custom CSS to hide scrollbar */}
            <style jsx global>{`
                .hide-scroll::-webkit-scrollbar {
                    display: none;
                }
                .hide-scroll {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
