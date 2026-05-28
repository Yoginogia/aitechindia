"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Star, 
  ExternalLink, 
  ArrowRight, 
  Search, 
  SlidersHorizontal, 
  Check, 
  ShoppingBag, 
  Percent, 
  Award,
  Sparkles,
  Zap,
  ShoppingBag as BagIcon,
  Tag
} from 'lucide-react';
import { TOP_DEALS } from '@/data/deals';
import DealTimer from '@/components/DealTimer';

// Utility to parse numeric price for sorting
const getNumericPrice = (priceStr: string) => {
  const numeric = parseInt(priceStr.replace(/[^\d]/g, ''));
  return isNaN(numeric) ? 0 : numeric;
};

// Utility to generate a stable mock claim rate based on deal slug
const getClaimRate = (slug: string) => {
  const codeSum = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return (codeSum % 25) + 65; // Returns a value between 65% and 90%
};

export default function TopDealsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('recommended');

  // Dynamically extract categories from TOP_DEALS to avoid hardcoding
  const categories = useMemo(() => {
    const cats = Array.from(new Set(TOP_DEALS.map(d => d.category)));
    return ['All', ...cats];
  }, []);

  // Filter and sort deals
  const filteredAndSortedDeals = useMemo(() => {
    let result = TOP_DEALS.filter(deal => {
      const matchesSearch = 
        deal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || deal.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    if (sortBy === 'price-low') {
      result.sort((a, b) => getNumericPrice(a.price) - getNumericPrice(b.price));
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => getNumericPrice(b.price) - getNumericPrice(a.price));
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  // Identify the "Deal of the Day" (the highest-rated bestseller)
  const featuredDeal = useMemo(() => {
    const bestsellers = TOP_DEALS.filter(d => d.tag?.toLowerCase().includes('bestseller') || d.tag?.toLowerCase().includes('editor'));
    return bestsellers.length > 0 ? bestsellers[0] : TOP_DEALS[0];
  }, []);

  // Remove the featured deal from the grid view if no search/filters are active to keep layouts clean
  const gridDeals = useMemo(() => {
    if (searchQuery || selectedCategory !== 'All') {
      return filteredAndSortedDeals;
    }
    return filteredAndSortedDeals.filter(d => d.slug !== featuredDeal.slug);
  }, [filteredAndSortedDeals, searchQuery, selectedCategory, featuredDeal]);

  return (
    <div className="min-h-screen bg-background bg-grid pb-20">
      {/* Top Banner Stripe */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-primary text-white text-xs font-semibold py-2 text-center select-none overflow-hidden relative">
        <span className="inline-flex items-center gap-1.5 animate-pulse">
          <Zap className="h-3 w-3 fill-white" />
          MEGA SALE LIVE: Amazon & Flipkart के चुनिंदा प्रोडक्ट्स पर मिल रहा है रिकॉर्ड-तोड़ डिस्काउंट!
        </span>
      </div>

      {/* Hero Header Section */}
      <div className="hero-glow py-16 text-center relative border-b border-border/10">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6 animate-float">
            <Sparkles className="h-3.5 w-3.5" /> Best Deals and Coupon Codes Hub
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase leading-none">
            Tech <span className="gradient-text">Top Deals</span> 🛒
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-8 font-medium">
            AITechNews की स्पेशल टेक-डील्स! यहाँ आपको मिलेंगे भारत के सर्वश्रेष्ठ स्मार्टफोन, लैपटॉप्स और गैजेट्स पर भारी-भरकम डिस्काउंट।
          </p>

          {/* Dynamic Interactive Controls Card */}
          <div className="glass p-4 rounded-3xl border border-border/50 max-w-3xl mx-auto shadow-2xl space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="सर्च करें फोन, लैपटॉप या स्पेशल ब्रांड डील्स..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background/50 pl-12 pr-4 py-3 rounded-2xl border border-border/40 focus:border-primary/50 focus:outline-none text-sm placeholder:text-muted-foreground/70 transition-all shadow-inner"
              />
            </div>

            {/* Filter Tabs strip */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                    selectedCategory === cat
                      ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                      : 'bg-background/40 hover:bg-secondary border-border/40 text-muted-foreground'
                  }`}
                >
                  {cat === 'All' ? 'All Categories 🛍️' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl py-12">
        {/* Sort & Stats Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-border/30">
          <div className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Showing {filteredAndSortedDeals.length} Deals Available
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="text-xs font-bold text-muted-foreground">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-card text-xs font-bold border border-border/40 rounded-xl px-3 py-2 focus:outline-none focus:border-primary/50 transition-all cursor-pointer shadow-sm"
            >
              <option value="recommended">Editor&apos;s Choice</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">User Rating</option>
            </select>
          </div>
        </div>

        {/* Featured Deal Card (Hero Banner) */}
        {!searchQuery && selectedCategory === 'All' && featuredDeal && (
          <div className="mb-14">
            <h2 className="text-xl font-black mb-6 uppercase tracking-wider flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-500 fill-orange-500" /> Deal of the Day ⭐
            </h2>
            <div className="gradient-border p-[1px]">
              <div className="bg-card/90 backdrop-blur rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 border border-border/10">
                {/* Image Section */}
                <div className="md:col-span-5 relative bg-background/50 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-border/30 h-64 md:h-auto min-h-[300px]">
                  {featuredDeal.tag && (
                    <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-black uppercase px-3 py-1 rounded-full z-10 shadow-lg animate-bounce">
                      {featuredDeal.tag}
                    </span>
                  )}
                  <img
                    src={featuredDeal.image}
                    alt={featuredDeal.title}
                    className="w-full h-full object-contain max-h-[260px] hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 right-4 bg-background/70 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-extrabold border border-border/30">
                    {featuredDeal.platform}
                  </div>
                </div>

                {/* Details Section */}
                <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg">
                        {featuredDeal.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-yellow-500 bg-yellow-500/10 px-2.5 py-1 rounded-lg border border-yellow-500/20">
                        <Star className="h-3.5 w-3.5 fill-yellow-500" />
                        {featuredDeal.rating} Rating
                      </div>
                    </div>

                    <h3 className="text-2xl font-black mb-3 leading-tight hover:text-primary transition-colors">
                      <Link href={`/top-deals/${featuredDeal.slug}`}>{featuredDeal.title}</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {featuredDeal.description}
                    </p>

                    {/* Specs Checklist */}
                    {featuredDeal.specs && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {featuredDeal.specs.slice(0, 4).map((spec, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                            <Check className="h-4 w-4 text-green-500 shrink-0" />
                            <span className="line-clamp-1">{spec}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions & Urgency */}
                  <div className="border-t border-border/30 pt-6 space-y-4">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                      <div>
                        <span className="text-xs font-black text-green-500 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-lg inline-block mb-2">
                          {featuredDeal.discount}
                        </span>
                        <div className="text-3xl font-black tracking-tight">{featuredDeal.price}</div>
                      </div>
                      <DealTimer />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/top-deals/${featuredDeal.slug}`}
                        className="flex-1 py-3.5 px-4 bg-secondary/50 hover:bg-secondary text-foreground text-sm font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all border border-border/50"
                      >
                        Technical Details <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a
                        href={featuredDeal.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3.5 px-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm font-black rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-orange-500/25"
                      >
                        Claim Deal Directly <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Normal Grid Deals */}
        {gridDeals.length > 0 ? (
          <div>
            {!searchQuery && selectedCategory === 'All' && (
              <h2 className="text-xl font-black mb-6 uppercase tracking-wider flex items-center gap-2">
                <Percent className="h-5 w-5 text-primary" /> More Live Deals 👇
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridDeals.map((deal) => {
                const claimRate = getClaimRate(deal.slug);
                return (
                  <div 
                    key={deal.slug} 
                    className="glass rounded-3xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all duration-300 group flex flex-col h-full relative card-glow"
                  >
                    {/* Tags */}
                    {deal.tag && (
                      <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-lg z-10 shadow-lg tracking-wider">
                        {deal.tag}
                      </div>
                    )}
                    
                    {/* Image Block */}
                    <Link href={`/top-deals/${deal.slug}`} className="h-48 bg-card w-full relative overflow-hidden border-b border-border/20 block p-4 flex items-center justify-center">
                      <img 
                        src={deal.image} 
                        alt={deal.title} 
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                      />
                      <span className="absolute bottom-3 right-3 text-[10px] font-extrabold bg-background/80 border border-border/30 px-2 py-0.5 rounded backdrop-blur-sm">
                        {deal.platform}
                      </span>
                    </Link>

                    {/* Content Block */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-lg">
                            {deal.category}
                          </span>
                          <div className="flex items-center gap-1 text-[10px] font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded-lg">
                            <Star className="h-3 w-3 fill-yellow-500" />
                            {deal.rating}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-black mb-2 leading-tight group-hover:text-primary transition-colors">
                          <Link href={`/top-deals/${deal.slug}`}>{deal.title}</Link>
                        </h3>
                        
                        <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                          {deal.description}
                        </p>

                        {/* Direct Specs preview */}
                        {deal.specs && (
                          <div className="space-y-1.5 mb-4 border-t border-b border-border/20 py-3">
                            {deal.specs.slice(0, 3).map((spec, i) => (
                              <div key={i} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                                <Check className="h-3 w-3 text-green-500 shrink-0" />
                                <span className="line-clamp-1">{spec}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="space-y-4">
                        {/* Claim Progress Urgency */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] font-black text-muted-foreground uppercase">
                            <span>Stock claimed</span>
                            <span className={claimRate > 80 ? 'text-red-500 font-black animate-pulse' : 'text-primary'}>
                              {claimRate}%
                            </span>
                          </div>
                          <div className="w-full bg-secondary/50 rounded-full h-1.5 overflow-hidden border border-border/10">
                            <div 
                              className={`h-full rounded-full transition-all duration-500 ${
                                claimRate > 80 ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-primary'
                              }`}
                              style={{ width: `${claimRate}%` }}
                            />
                          </div>
                        </div>

                        {/* Price Details */}
                        <div className="flex items-end justify-between">
                          <div>
                            <span className="text-[10px] text-green-500 font-bold bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded mb-1 inline-block">
                              {deal.discount}
                            </span>
                            <div className="text-xl font-black">{deal.price}</div>
                          </div>
                          <DealTimer />
                        </div>
                        
                        {/* Dual CTAs */}
                        <div className="flex gap-2">
                          <Link
                            href={`/top-deals/${deal.slug}`}
                            className="flex-1 py-2.5 px-3 bg-secondary/50 hover:bg-secondary text-foreground text-xs font-extrabold rounded-xl flex items-center justify-center gap-1.5 transition-all border border-border/50"
                          >
                            Details <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                          <a
                            href={deal.buyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2.5 px-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xs font-black rounded-xl flex items-center justify-center gap-1 transition-all shadow-lg shadow-orange-500/15"
                          >
                            Claim <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="glass p-12 text-center rounded-3xl border border-border/40 max-w-xl mx-auto shadow-xl">
            <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold mb-2">कोई डील नहीं मिली 🔍</h3>
            <p className="text-sm text-muted-foreground mb-6">
              आपके सर्च या सिलेक्टेड फ़िल्टर से मिलता-जुलता कोई सक्रिय ऑफर उपलब्ध नहीं है। कृपया कोई दूसरा सर्च टर्म आज़माएं या फ़िल्टर्स रीसेट करें।
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="py-2.5 px-6 bg-primary text-white text-xs font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/95 transition-all"
            >
              Filters Reset करें
            </button>
          </div>
        )}

        {/* Affiliate Disclosure Box */}
        <div className="mt-20 p-6 md:p-8 bg-card/60 backdrop-blur rounded-3xl border border-primary/20 flex flex-col md:flex-row items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/25">
            <Award className="h-8 w-8" />
          </div>
          <div>
            <h3 className="text-lg font-black mb-1 uppercase tracking-wider flex items-center gap-1.5">
              Affiliate Disclosure
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>AITechNews</strong> पर प्रदर्शित कुछ ऑफर्स में एफिलिएट ट्रैकिंग कोड्स शामिल हो सकते हैं। जब आप इन लिंक्स का उपयोग करके उत्पाद खरीदते हैं, तो हमें मर्चेंट्स (जैसे Amazon/Flipkart) से एक छोटा सा विज्ञापन कमीशन मिलता है, जिससे आपको कोई अतिरिक्त चार्ज नहीं देना पड़ता। यह कमाई हमारी एडिटिंग टीम और स्वतंत्र टेस्टिंग टीम को सपोर्ट करने और वेबसाइट ऑपरेशन्स चलाने में सहायक होती है।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
