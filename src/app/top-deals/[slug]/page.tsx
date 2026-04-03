import { getDealBySlug, getAllDealSlugs, TOP_DEALS } from '@/data/deals';
import Link from 'next/link';
import { ArrowLeft, Star, ExternalLink, Tag, ShieldCheck, Truck, CreditCard } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return getAllDealSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const deal = getDealBySlug(resolvedParams.slug);
    if (!deal) return { title: 'Deal Not Found | AITechNews' };
    return {
        title: `${deal.title} | AITechNews Top Deals`,
        description: deal.description,
    };
}

export default async function DealPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const deal = getDealBySlug(resolvedParams.slug);

    if (!deal) {
        notFound();
    }

    const relatedDeals = TOP_DEALS
        .filter(d => d.slug !== deal.slug && d.category === deal.category)
        .slice(0, 3);

    return (
        <div className="container mx-auto px-4 md:px-8 max-w-4xl py-12 md:py-20">
            {/* Back Button */}
            <Link href="/top-deals" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                वापस Top Deals पर
            </Link>

            {/* Deal Header */}
            <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-sm font-semibold text-primary">
                        <Tag className="mr-2 h-3 w-3" />
                        {deal.category}
                    </span>
                    {deal.tag && (
                        <span className="inline-flex items-center rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-sm font-semibold text-orange-500">
                            {deal.tag}
                        </span>
                    )}
                    <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                        <Star className="h-4 w-4 fill-yellow-500" />
                        {deal.rating} / 5.0
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
                    {deal.title}
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                    {deal.description}
                </p>
            </div>

            {/* Deal Image */}
            <div className="aspect-[16/9] w-full rounded-2xl mb-8 overflow-hidden relative border border-border/30">
                <img
                    src={deal.image}
                    alt={deal.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                        <div className="text-sm text-green-400 font-medium mb-1 bg-green-500/20 backdrop-blur inline-block px-3 py-1 rounded-full">{deal.discount}</div>
                        <div className="text-4xl font-bold text-white drop-shadow-lg">{deal.price}</div>
                    </div>
                </div>
            </div>

            {/* Buy Button - Prominent */}
            <a
                href={deal.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-500/30 mb-8"
            >
                {deal.platform} पर अभी खरीदें 🛒 <ExternalLink className="h-5 w-5" />
            </a>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary/30 border border-border/30">
                    <ShieldCheck className="h-6 w-6 text-green-500 mb-2" />
                    <span className="text-xs text-muted-foreground">100% Genuine</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary/30 border border-border/30">
                    <Truck className="h-6 w-6 text-blue-500 mb-2" />
                    <span className="text-xs text-muted-foreground">Free Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary/30 border border-border/30">
                    <CreditCard className="h-6 w-6 text-purple-500 mb-2" />
                    <span className="text-xs text-muted-foreground">No-Cost EMI</span>
                </div>
            </div>

            {/* Variants */}
            {deal.variants && deal.variants.length > 0 && (
                <div className="mb-8 p-6 rounded-2xl bg-secondary/20 border border-border/30">
                    <h2 className="text-xl font-bold mb-4">📦 Available Variants</h2>
                    <div className="space-y-3">
                        {deal.variants.map((variant, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/20">
                                <span className="text-primary font-bold text-lg">{index + 1}</span>
                                <span className="text-sm font-medium">{variant}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Bank Offers */}
            {deal.bankOffers && deal.bankOffers.length > 0 && (
                <div className="mb-8 p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
                    <h2 className="text-xl font-bold mb-4">🏦 Bank Offers & Discounts</h2>
                    <div className="space-y-3">
                        {deal.bankOffers.map((offer, index) => (
                            <div key={index} className="flex items-start gap-3 text-sm">
                                <span className="text-green-500 mt-0.5 text-lg">💰</span>
                                <span className="text-muted-foreground">{offer}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Colors */}
            {deal.colors && deal.colors.length > 0 && (
                <div className="mb-8 p-6 rounded-2xl bg-secondary/20 border border-border/30">
                    <h2 className="text-xl font-bold mb-4">🎨 Available Colors</h2>
                    <div className="flex flex-wrap gap-3">
                        {deal.colors.map((color, index) => (
                            <span key={index} className="px-4 py-2 rounded-full bg-background/50 border border-border/30 text-sm font-medium">
                                {color}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Specifications */}
            {deal.specs && deal.specs.length > 0 && (
                <div className="mb-8 p-6 rounded-2xl bg-secondary/20 border border-border/30">
                    <h2 className="text-xl font-bold mb-4">📋 Key Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {deal.specs.map((spec, index) => (
                            <div key={index} className="flex items-start gap-3 text-sm">
                                <span className="text-primary mt-0.5">✓</span>
                                <span className="text-muted-foreground">{spec}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Full Description */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">📝 पूरी Details</h2>
                <div className="prose prose-lg prose-invert max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed">
                    <p>{deal.content}</p>
                </div>
            </div>

            {/* Second Buy Button */}
            <a
                href={deal.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-500/30 mb-12"
            >
                {deal.price} में {deal.platform} पर खरीदें → <ExternalLink className="h-5 w-5" />
            </a>

            {/* Related Deals */}
            {relatedDeals.length > 0 && (
                <div className="border-t border-border/30 pt-12">
                    <h3 className="text-2xl font-bold tracking-tight mb-6">ये भी देखें 👇</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedDeals.map((rd) => (
                            <Link
                                key={rd.slug}
                                href={`/top-deals/${rd.slug}`}
                                className="group flex flex-col rounded-2xl border border-border/30 bg-card/50 backdrop-blur overflow-hidden card-glow"
                            >
                                <div className="aspect-video w-full bg-secondary relative overflow-hidden">
                                    <img src={rd.image} alt={rd.title} className="absolute inset-0 w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-4 space-y-2">
                                    <h4 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">{rd.title}</h4>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-primary">{rd.price}</span>
                                        <span className="text-xs text-green-500">{rd.discount}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Affiliate Disclosure */}
            <div className="mt-12 p-6 bg-secondary/30 rounded-2xl border border-primary/20 text-center">
                <p className="text-xs text-muted-foreground">
                    ⚠️ Affiliate Disclosure: इस पेज पर दिए गए लिंक्स affiliate links हो सकते हैं। खरीदारी पर हमें एक छोटा कमीशन मिलता है, आपको कोई extra charge नहीं लगता।
                </p>
            </div>
        </div>
    );
}
