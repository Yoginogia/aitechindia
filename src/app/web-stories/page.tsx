'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Share2, Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const WEB_STORIES = [
    {
        id: 1,
        title: "iPhone 18 SE: Apple का सबसे सस्ता AI फोन!",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
        content: "Apple जल्द ही iPhone 18 SE लॉन्च करने वाला है। इसमें A19 चिप, 48MP कैमरा और फुल Apple Intelligence का सपोर्ट मिलेगा, वो भी सिर्फ ₹48,900 में!"
    },
    {
        id: 2,
        title: "Google Gemini 3.0 Leak: इंसानों से भी तेज़",
        category: "AI",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        content: "Gemini 3.0 आपके फोन के कैमरा से लाइव वीडियो देखकर चुटकियों में प्रॉब्लम सॉल्व कर देगा। और सबसे बड़ी बात, ये बिना इंटरनेट के भी काम करेगा!"
    },
    {
        id: 3,
        title: "Solana ETF Approved: SOL ने पार किया $350!",
        category: "Crypto",
        image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=800",
        content: "US SEC ने आखिरकार Solana Spot ETF को मंज़ूरी दे दी है। इसके बाद मार्केट में भारी निवेश आया है और SOL ने आज नया All-Time High बना दिया।"
    },
    {
        id: 4,
        title: "Samsung Galaxy M17e 5G: ₹12,999 में गदर फोन",
        category: "Trending",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800",
        content: "6000mAh की 'Super-Solid' बैटरी, 5G स्पीड, और पूरे 6 साल के OS अपडेट! क्या यह सैमसंग का नया बजट किंग है?"
    },
    {
        id: 5,
        title: "Binance Zero-Fee Web3 Wallet हुआ लॉन्च 🇮🇳",
        category: "Crypto",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800",
        content: "भारतीय यूज़र्स के लिए Binance ने UPI सपोर्ट वाला नया Web3 वॉलेट लॉन्च किया है। अब बिना किसी एक्स्ट्रा गैस फीस के आसानी से क्रिप्टो ट्रेड करें।"
    },
    {
        id: 6,
        title: "Lenskart AI Smart Glasses: चश्मे में AI की ताक़त",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1577741314755-048d8525d31e?auto=format&fit=crop&q=80&w=800",
        content: "Lenskart ने ₹4,999 में अपने पहले AI-powered Smart Glasses लॉन्च किये। इस चश्मे से आप कॉल्स उठा सकते हैं और ChatGPT से बात कर सकते हैं।"
    },
    {
        id: 7,
        title: "Jio AirFiber AI Plans हुए सस्ते!",
        category: "Internet",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
        content: "Jio ने AirFiber के नए प्लान लॉन्च कर दिए हैं, जिसमें आपको घर के लिए स्मार्ट AI राउटर और 1Gbps तक की स्पीड मिलेगी।"
    },
    {
        id: 8,
        title: "OpenAI Sora: अब सबके लिए फ्री Video Generation",
        category: "AI Tools",
        image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=800",
        content: "Sam Altman ने ऐलान कर दिया है! कमाल का वीडियो जनरेटर AI 'Sora' अब ChatGPT Plus यूज़र्स के लिए अवेलेबल हो गया है।"
    }
];

export default function WebStoriesPage() {
    const [likedStories, setLikedStories] = useState<Record<number, boolean>>({});
    const [showToast, setShowToast] = useState(false);

    const handleLike = (id: number) => {
        setLikedStories(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleComment = () => {
        alert("💬 Comments UI coming soon! Tab tak updates ke liye WhatsApp join karein.");
    };

    const handleShare = async (story: any) => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: story.title,
                    text: story.content,
                    url: window.location.href,
                });
            } catch (err) {
                console.log("Error sharing", err);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    return (
        <div className="fixed inset-0 bg-black z-[100] flex justify-center items-center overflow-hidden">
            <Link href="/" className="absolute top-6 left-6 z-50 p-2 bg-black/50 backdrop-blur rounded-full text-white hover:bg-white/20 transition">
                <ArrowLeft className="h-6 w-6" />
            </Link>

            {/* Custom Toast for Desktop fallback */}
            {showToast && (
                <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
                    Link Copied! 📋
                </div>
            )}

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
                                <button 
                                    onClick={() => handleLike(story.id)}
                                    className="flex items-center gap-2 text-white/90 hover:text-white transition group"
                                >
                                    <div className="p-2 bg-white/10 rounded-full group-hover:bg-red-500/20 transition">
                                        <Heart className={`h-5 w-5 transition ${likedStories[story.id] ? 'text-red-500 fill-red-500 scale-110' : 'group-hover:text-red-500 fill-transparent group-hover:fill-red-500'}`} />
                                    </div>
                                    <span className="text-sm font-medium">{likedStories[story.id] ? 'Liked' : 'Like'}</span>
                                </button>
                                <button 
                                    onClick={handleComment}
                                    className="flex items-center gap-2 text-white/90 hover:text-white transition group"
                                >
                                    <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition">
                                        <MessageCircle className="h-5 w-5" />
                                    </div>
                                    <span className="text-sm font-medium">Comment</span>
                                </button>
                                <button 
                                    onClick={() => handleShare(story)}
                                    className="flex items-center gap-2 text-white/90 hover:text-white transition group ml-auto"
                                >
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
            

        </div>
    );
}
