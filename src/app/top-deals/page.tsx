import Link from 'next/link';
import { Star, ExternalLink, ArrowRight } from 'lucide-react';
import { TOP_DEALS } from '@/data/deals';
import DealTimer from '@/components/DealTimer';

export default function TopDealsPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-12 max-w-5xl">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Today&apos;s <span className="gradient-text">Top Deals</span> 🛒
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Amazon &amp; Flipkart के बेस्ट ऑफर्स! (Updated: {new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }).format(new Date())})
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TOP_DEALS.map((deal) => (
                    <div key={deal.slug} className="glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all group flex flex-col h-full relative card-glow">
                        {deal.tag && (
                            <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
                                {deal.tag}
                            </div>
                        )}
                        
                        <Link href={`/top-deals/${deal.slug}`} className="h-48 bg-background w-full relative overflow-hidden border-b border-border/30 block">
                            <img src={deal.image} alt={deal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>

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
                            
                            <Link href={`/top-deals/${deal.slug}`}>
                                <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors cursor-pointer">
                                    {deal.title}
                                </h2>
                            </Link>
                            
                            <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">
                                {deal.description}
                            </p>
                            
                            <div className="flex items-end justify-between mb-4">
                                <div>
                                    <div className="text-xs text-green-500 font-medium mb-1 bg-green-500/10 inline-block px-2 py-0.5 rounded">{deal.discount}</div>
                                    <div className="text-2xl font-bold">{deal.price}</div>
                                </div>
                                <DealTimer />
                            </div>
                            
                            <div className="flex gap-2">
                                <Link
                                    href={`/top-deals/${deal.slug}`}
                                    className="flex-1 py-3 px-4 bg-secondary/50 hover:bg-secondary text-foreground text-sm font-medium rounded-xl flex items-center justify-center gap-2 transition-all border border-border/50"
                                >
                                    Details <ArrowRight className="h-4 w-4" />
                                </Link>
                                <a
                                    href={deal.buyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3 px-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/20"
                                >
                                    Claim Deal Now <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            </div>
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
