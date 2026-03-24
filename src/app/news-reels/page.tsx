'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Share2, Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const NEWS_REELS = [
    {
        id: 1,
        title: "iPhone 18 SE: Apple का सबसे सस्ता AI फोन!",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
        content: "Apple जल्द ही iPhone 18 SE लॉन्च करने वाला है। इसमें A19 चिप, 48MP कैमरा और फुल Apple Intelligence का सपोर्ट मिलेगा, वो भी सिर्फ ₹48,900 में!",
        link: "/blog/iphone-18-se-launch-leaks-india"
    },
    {
        id: 2,
        title: "Google Gemini 3.0 Leak: इंसानों से भी तेज़",
        category: "AI",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        content: "Gemini 3.0 आपके फोन के कैमरा से लाइव वीडियो देखकर चुटकियों में प्रॉब्लम सॉल्व कर देगा। और सबसे बड़ी बात, ये बिना इंटरनेट के भी काम करेगा!",
        link: "/blog/google-gemini-3-0-leak-march-2026"
    },
    {
        id: 3,
        title: "Bitcoin ETF Options: पहले दिन टूटे सारे रिकॉर्ड",
        category: "Crypto",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=800",
        content: "BlackRock के Bitcoin ETF Options ट्रेडिंग के पहले दिन ही अरबों डॉलर का वॉल्यूम आया। क्या यह Bitcoin को $110,000 के पार ले जाएगा?",
        link: "/blog/bitcoin-etf-options-trading-record-march"
    },
    {
        id: 4,
        title: "Solana ETF: Agar Approve Hua, Toh Kya Hoga?",
        category: "Crypto",
        image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=800",
        content: "Analysts ka manna hai ki agar SEC Solana ETF approve karta hai, toh SOL ka price $350+ high chhoo sakta hai. Abhi yeh sirf speculation hai.",
        link: "/blog/solana-etf-approved-march-2026"
    },
    {
        id: 5,
        title: "Jio 5G vs Airtel 5G: किसका नेटवर्क है असल में तेज़?",
        category: "Telecom",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
        content: "Community reports aur publicly available benchmark data ke aadhar par Jio aur Airtel 5G ka comparison. Janiye kaunsa operator kahan behtar perform karta hai.",
        link: "/blog/jio-5g-vs-airtel-5g-speed-test-2026"
    },
    {
        id: 6,
        title: "ChatGPT vs Gemini vs Claude: 2026 का बेस्ट AI कौन?",
        category: "AI Tools",
        image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=800",
        content: "Coding के लिए Claude, Writing के लिए ChatGPT और Research के लिए Gemini? जानिए आपके काम के लिए कौन सा AI सबसे बेस्ट और फ्री है।",
        link: "/blog/chatgpt-vs-gemini-vs-claude-2026"
    },
    {
        id: 7,
        title: "Instagram Reels Se Paise Kaise Kamaye? (2026 Guide)",
        category: "Social Media",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
        content: "क्या आप भी रील्स बनाते हैं? जानिए Instagram Reels से हर महीने ₹50,000 से ज़्यादा कमाने के 7 सबसे बेहतरीन (proven) और सीक्रेट तरीके।",
        link: "/blog/instagram-reels-se-paise-kaise-kamaye"
    },
    {
        id: 8,
        title: "Samsung Galaxy S26 Ultra: Specs & Features Analysis",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800",
        content: "Samsung Galaxy S26 Ultra ke leaked specs aur expected features ka analysis. Note: Yeh hands-on review nahi, publicly available data par based hai.",
        link: "/blog/samsung-galaxy-s26-ultra-review"
    },
    {
        id: 9,
        title: "VPN Kya Hai? 2026 ke 5 Best Free VPN Apps",
        category: "Security",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=800",
        content: "इंटरनेट पर अपनी प्राइवेसी छुपाना चाहते हैं? जानिए VPN क्या होता है और कौन से 5 बिलकुल मुफ़्त VPN एप्स आज के टाइम में सबसे सेफ हैं।",
        link: "/blog/vpn-kya-hai-best-free-vpn"
    },
    {
        id: 10,
        title: "iPhone 18 Pro Leaks: Under-Display Camera!?",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=800",
        content: "बिना किसी 'Notch' के पहला iPhone? iPhone 18 Pro के नए लीक्स खुलासा करते हैं अंडर-डिस्प्ले AI कैमरा और सॉलिड स्टेट बटन्स के बारे में।",
        link: "/blog/iphone-18-pro-leaks-march-2026"
    }
];

export default function NewsReelsPage() {
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

            {/* Toast */}
            {showToast && (
                <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
                    Link Copied! 📋
                </div>
            )}

            {/* Desktop Info Badge */}
            <div className="hidden md:flex absolute right-12 top-12 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-white max-w-xs flex-col gap-2 z-50">
                <div className="flex items-center gap-2 mb-1">
                    <span className="bg-primary px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(99,102,241,0.5)]">AITechNews</span>
                    <h3 className="font-bold text-lg">News Reels</h3>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                    Top tech news ko swipe karo — quick, fast aur seedha point par. Puri khabar ke liye article link par click karo.
                </p>
            </div>

            {/* Reels Container - Snap Scrolling */}
            <div className="w-full h-full max-w-md bg-zinc-900 md:rounded-3xl overflow-y-scroll snap-y snap-mandatory no-scrollbar relative flex flex-col hide-scroll">
                
                {NEWS_REELS.map((story) => (
                    <div 
                        key={story.id} 
                        className="w-full h-full flex-shrink-0 snap-start relative bg-black"
                    >
                        <img 
                            src={story.image} 
                            alt={story.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-white pb-20 md:pb-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                                    {story.category}
                                </span>
                                <span className="flex items-center text-xs font-medium text-white/70 animate-pulse bg-white/10 px-2 py-1 rounded-full">
                                    ⬆️ Swipe 
                                </span>
                            </div>
                            <h2 className="text-3xl font-extrabold leading-tight mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                {story.title}
                            </h2>
                            <p className="text-gray-200 text-[15px] sm:text-base mb-4 drop-shadow-md line-clamp-3">
                                {story.content}
                            </p>
                            
                            <Link 
                                href={story.link} 
                                className="w-full text-center bg-white text-black font-bold py-3 rounded-xl mb-5 hover:bg-gray-200 transition-colors shadow-lg flex justify-center items-center gap-2 group"
                            >
                                <span>Puri Khabar Padhein</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                            
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
                            {NEWS_REELS.map((_, i) => (
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
