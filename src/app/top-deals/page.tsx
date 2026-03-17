'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';

const TOP_DEALS = [
    {
        title: "iPhone 17 (128GB) — Flipkart Big Saving Days",
        category: "Smartphone",
        description: "Apple का लेटेस्ट iPhone 17, 48MP कैमरा और A19 चिप। Flipkart सेल में MRP से ₹3,000 की छूट + SBI Card पर 10% इंस्टेंट डिस्काउंट।",
        price: "₹79,990",
        discount: "SBI Card पर 10% Off",
        rating: 4.9,
        tag: "🔥 Hot Deal",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=600",
        content: "Apple ने अपना नया iPhone 17 लॉन्च कर दिया है और Flipkart Big Saving Days में इस पर बहुत शानदार डील मिल रही है। इसमें A19 Bionic चिप लगी है जो पिछले सभी iPhones से ज़्यादा तेज़ है। 48MP कैमरा सिस्टम, Dynamic Island, और USB-C पोर्ट इसे एक complete package बनाते हैं। SBI Credit Card से खरीदने पर 10% instant discount मिलेगा, जो लगभग ₹8,000 तक की बचत होगी। इसके अलावा No-Cost EMI और Exchange Bonus भी उपलब्ध है।"
    },
    {
        title: "Samsung Galaxy S25 Edge (256GB)",
        category: "Smartphone",
        description: "Samsung का सबसे पतला फ्लैगशिप फ़ोन। Galaxy AI, 200MP कैमरा और Titanium बॉडी। Flipkart पर बेस्ट प्राइस।",
        price: "₹1,24,999",
        discount: "Exchange Bonus ₹15,000",
        rating: 4.8,
        tag: "New Launch",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        content: "Samsung Galaxy S25 Edge अब तक का सबसे पतला Samsung flagship है। इसमें 200MP main camera, Snapdragon 8 Elite processor, और Galaxy AI features हैं जो live translation, circle to search, और AI photo editing करते हैं। Titanium body इसे premium और durable बनाती है। Flipkart पर ₹15,000 तक का exchange bonus मिल रहा है, plus bank offers और no-cost EMI options भी available हैं।"
    },
    {
        title: "iQOO Z11x 5G (6GB+128GB) — Just Launched!",
        category: "Budget Phone",
        description: "सिर्फ ₹18,999 में 5G फ़ोन! Snapdragon प्रोसेसर, 6000mAh बैटरी। Amazon पर 16 March से सेल शुरू।",
        price: "₹18,999",
        discount: "Bank Discount + No-Cost EMI",
        rating: 4.5,
        tag: "🆕 Just Launched",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?auto=format&fit=crop&q=80&w=600",
        content: "iQOO ने अपना बजट किंग Z11x 5G लॉन्च किया है। ₹18,999 की कीमत में Snapdragon processor, 6000mAh massive battery (2 दिन चलेगी!), 50MP AI camera, और 5G connectivity मिल रही है। Amazon पर 16 March से sale शुरू है और instant bank discount + no-cost EMI options उपलब्ध हैं। यह ₹20,000 से कम में सबसे बढ़िया 5G phone बताया जा रहा है।"
    },
    {
        title: "Sony WH-1000XM6 Wireless Headphones",
        category: "Audio",
        description: "दुनिया का बेस्ट ANC हेडफोन। 40 घंटे बैटरी और Hi-Res Audio। Amazon Mega Electronics Days में भारी छूट।",
        price: "₹26,990",
        discount: "Flat ₹6,000 Off",
        rating: 4.8,
        tag: "Bestseller",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=600",
        content: "Sony WH-1000XM6 industry का सबसे बेहतरीन Active Noise Cancellation (ANC) headphone है। इसमें 40 घंटे की battery life, Hi-Res Audio support, multipoint Bluetooth (2 devices एक साथ), और बेहद comfortable design है। Amazon Mega Electronics Days में ₹6,000 flat off मिल रहा है, जिससे original price ₹32,990 से कम होकर ₹26,990 हो गया है। Music lovers और work-from-home professionals के लिए perfect choice।"
    },
    {
        title: "ASUS ROG Zephyrus G16 (2026) — Gaming Beast",
        category: "Gaming Laptop",
        description: "Intel Core Ultra 9, RTX 5070 GPU, 32GB DDR5 RAM। Amazon Holi Sale में फ्री गेमिंग माउस + कैरी बैग।",
        price: "₹1,89,990",
        discount: "Free Gaming Mouse + Bag",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1593640498182-31c70c8268f5?auto=format&fit=crop&q=80&w=600",
        content: "ASUS ROG Zephyrus G16 gamers के लिए एक dream machine है। Intel Core Ultra 9 processor और NVIDIA RTX 5070 GPU के साथ यह हर latest game को ultra settings पर आराम से चला सकता है। 32GB DDR5 RAM और 1TB SSD storage है। 16-inch QHD+ display 240Hz refresh rate देता है। Amazon Holi Sale में free gaming mouse और carry bag मिल रहा है, plus HDFC card पर additional discount भी available है।"
    },
    {
        title: "Redmi 13C 5G — Amazon Holi Store",
        category: "Budget Phone",
        description: "सबसे सस्ता 5G फ़ोन! 50MP कैमरा, 5000mAh बैटरी। Amazon Holi Store में 60% तक की छूट।",
        price: "₹8,499",
        discount: "60% Off — Limited Stock",
        rating: 4.3,
        tag: "Budget King",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
        content: "अगर आपका बजट कम है लेकिन 5G phone चाहिए, तो Redmi 13C 5G सबसे सस्ता option है। सिर्फ ₹8,499 में 50MP camera, 5000mAh battery, 6.74-inch HD+ display, और MediaTek Dimensity 6100+ 5G processor मिल रहा है। Amazon Holi Store sale में 60% तक discount है, लेकिन stock limited है। पहली बार smartphone खरीदने वालों और students के लिए perfect।"
    },
    {
        title: "Apple MacBook Air M4 (2026 Edition)",
        category: "Laptop",
        description: "M4 चिप, 16GB Unified RAM, 512GB SSD। क्रिएटर्स और प्रोफेशनल्स के लिए परफेक्ट। HDFC Card पर एक्स्ट्रा 10% Off।",
        price: "₹1,19,900",
        discount: "HDFC Card पर 10% Off",
        rating: 4.9,
        tag: "Top Pick",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600",
        content: "Apple MacBook Air M4 creators और professionals के लिए सबसे बढ़िया laptop है। M4 chip M3 से 25% तेज़ है, 16GB unified RAM seamless multitasking देती है, और 512GB SSD fast storage provide करता है। 18 घंटे की battery life and fanless design (कोई आवाज़ नहीं) इसे perfect बनाते हैं। HDFC Credit Card से खरीदने पर extra 10% off मिलेगा, यानी लगभग ₹12,000 की बचत।"
    },
    {
        title: "Nothing Phone (3) — Flipkart Exclusive",
        category: "Smartphone",
        description: "Glyph Interface 2.0, Snapdragon 8 Gen 3, 50MP कैमरा। Flipkart Big Saving Days में बेस्ट प्राइस।",
        price: "₹37,999",
        discount: "Exchange + Bank Offer",
        rating: 4.6,
        tag: "Trending",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=600",
        content: "Nothing Phone (3) का unique Glyph Interface 2.0 इसे बाकी सब phones से अलग बनाता है। LED lights back panel पर notifications, music visualizer, और timer दिखाती हैं। Snapdragon 8 Gen 3 processor flagship performance देता है, 50MP dual camera system great photos लेता है, और clean Nothing OS smooth experience provide करता है। Flipkart पर exchange offer + bank discount मिलाकर ₹10,000+ बचा सकते हैं।"
    }
];

export default function TopDealsPage() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto px-4 md:px-8 py-12 max-w-5xl">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Today's <span className="gradient-text">Top Deals</span> 🛒
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Amazon Holi Sale & Flipkart Big Saving Days के बेस्ट ऑफर्स! (Updated: 16 March 2026)
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TOP_DEALS.map((deal, index) => (
                    <div key={index} className="glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all group flex flex-col h-full relative card-glow">
                        {deal.tag && (
                            <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
                                {deal.tag}
                            </div>
                        )}
                        
                        <div className="h-48 bg-background w-full relative overflow-hidden border-b border-border/30">
                            <img src={deal.image} alt={deal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                                    {deal.category}
                                </span>
                                <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium bg-background/50 backdrop-blur px-2 py-0.5 rounded-full border border-yellow-500/20">
                                    <Star className="h-3.5 w-3.5 fill-yellow-500" />
                                    {deal.rating}
                                </div>
                            </div>
                            
                            <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                                {deal.title}
                            </h2>
                            
                            <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">
                                {deal.description}
                            </p>
                            
                            <div className="flex items-end justify-between mb-4">
                                <div>
                                    <div className="text-xs text-green-500 font-medium mb-1 bg-green-500/10 inline-block px-2 py-0.5 rounded">{deal.discount}</div>
                                    <div className="text-2xl font-bold">{deal.price}</div>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => toggleExpand(index)}
                                className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 cursor-pointer"
                            >
                                {expandedIndex === index ? 'Close Details' : 'View Details'} 
                                {expandedIndex === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                            </button>

                            {expandedIndex === index && (
                                <div className="mt-4 pt-4 border-t border-border/30 animate-in fade-in duration-300">
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {deal.content}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 p-6 md:p-8 bg-secondary/30 rounded-2xl border border-primary/20 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold mb-2">Affiliate Disclosure</h3>
                <p className="text-sm text-muted-foreground max-w-2xl">
                    AITechNews पेज पर दिखाई गए कुछ प्रोडक्ट्स के लिंक्स एफिलिएट लिंक्स हो सकते हैं। अगर आप इन लिंक्स पर क्लिक करके कोई प्रोडक्ट खरीदते हैं, तो हमें बिना किसी अतिरिक्त लागत के एक छोटा सा कमीशन मिलता है। यह हमारी वेबसाइट को चलाने में मदद करता है।
                </p>
            </div>
        </div>
    );
}
