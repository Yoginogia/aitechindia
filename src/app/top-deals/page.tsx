import Link from 'next/link';
import { ExternalLink, Star } from 'lucide-react';

export const metadata = {
    title: 'Top Deals & Gadgets | AITechIndia',
    description: 'Best deals on laptops, mobiles, and tech gadgets curated by AITechIndia.',
};

const TOP_DEALS = [
    {
        title: "Apple MacBook Air M3 (2026 Edition)",
        category: "Laptop",
        description: "नया M3 चिप, 16GB RAM, और स्लिम डिज़ाइन। स्टूडेंट्स और क्रिएटर्स के लिए सबसे बेहतरीन लैपटॉप।",
        price: "₹1,14,900",
        discount: "10% Off (HDFC Card)",
        rating: 4.8,
        link: "/blog/apple-macbook-air-m3-deal",
        tag: "Bestseller",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Samsung Galaxy S24 Ultra",
        category: "Smartphone",
        description: "Galaxy AI फीचर्स, 200MP कैमरा और Titanium फ्रेम। फोटोग्राफी के शौकीनों के लिए बेस्ट चॉइस।",
        price: "₹1,29,999",
        discount: "Exchange Bonus ₹12,000",
        rating: 4.9,
        link: "/blog/samsung-galaxy-s24-ultra-deal", 
        tag: "Top Pick",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Sony WH-1000XM6 Wireless Headphones",
        category: "Audio",
        description: "इंडस्ट्री-लीडिंग एक्टिव नॉइज़ कैंसलेशन (ANC) और 40 घंटे की बैटरी लाइफ। म्यूजिक लवर्स के लिए पर्फेक्ट।",
        price: "₹29,990",
        discount: "Flat ₹3000 Off",
        rating: 4.7,
        link: "/gadgets",
        tag: "Trending",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "ASUS ROG Zephyrus G14 (2026)",
        category: "Gaming Laptop",
        description: "AMD Ryzen 9 और RTX 4070 के साथ अल्टीमेट गेमिंग परफॉरमेंस। बेहद कॉम्पैक्ट डिज़ाइन।",
        price: "₹1,74,990",
        discount: "Free Gaming Mouse",
        rating: 4.8,
        link: "/gadgets",
        image: "https://images.unsplash.com/photo-1593640498182-31c70c8268f5?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Google Pixel 9 Pro",
        category: "Smartphone",
        description: "Pure Android एक्सपीरियंस, नेक्स्ट-जेन AI कैमरा और 7 साल के OS अपडेट्स।",
        price: "₹1,06,999",
        discount: "Bank Offers Available",
        rating: 4.6,
        link: "/gadgets",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?auto=format&fit=crop&q=80&w=600"
    }
];

export default function TopDealsPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-12 max-w-5xl">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Today's <span className="gradient-text">Top Deals</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    हमारी टीम द्वारा चुने गए आज के बेस्ट गैजेट्स और भारी डिस्काउंट वाले ऑफर्स। नीचे दिए गए लिंक्स से खरीदकर आप चैनल को सपोर्ट कर सकते हैं।
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TOP_DEALS.map((deal, index) => (
                    <a href={deal.link} key={index} className="glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all group flex flex-col h-full relative card-glow cursor-pointer">
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
                            <div className="flex justify-between items-start mb-2 group-hover:transform group-hover:-translate-y-1 transition-transform">
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
                            
                            <p className="text-sm text-muted-foreground mb-6 flex-1 line-clamp-3">
                                {deal.description}
                            </p>
                            
                            <div className="flex items-end justify-between mb-6">
                                <div>
                                    <div className="text-xs text-green-500 font-medium mb-1 bg-green-500/10 inline-block px-2 py-0.5 rounded">{deal.discount}</div>
                                    <div className="text-2xl font-bold">{deal.price}</div>
                                </div>
                            </div>
                            
                            <div
                                className="w-full py-3 px-4 bg-primary group-hover:bg-primary/90 text-primary-foreground text-sm font-medium rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
                            >
                                View Deal <ExternalLink className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-16 p-6 md:p-8 bg-secondary/30 rounded-2xl border border-primary/20 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold mb-2">Affiliate Disclosure</h3>
                <p className="text-sm text-muted-foreground max-w-2xl">
                    AITechIndia पेज पर दिखाई गए कुछ प्रोडक्ट्स के लिंक्स एफिलिएट लिंक्स हो सकते हैं। अगर आप इन लिंक्स पर क्लिक करके कोई प्रोडक्ट खरीदते हैं, तो हमें बिना किसी अतिरिक्त लागत के एक छोटा सा कमीशन मिलता है। यह हमारी वेबसाइट को चलाने में मदद करता है।
                </p>
            </div>
        </div>
    );
}
