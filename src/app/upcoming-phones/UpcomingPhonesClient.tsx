'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Calendar, ChevronDown, Smartphone, Search, ArrowRight, Sparkles, Clock, IndianRupee, Filter, Star } from 'lucide-react';

// ── Brand Styles (reused from BestPhones) ──
const BRAND_STYLES: Record<string, { bg: string; color: string; initial: string }> = {
  Samsung:  { bg: '#1428A0', color: '#fff', initial: 'S' },
  Apple:    { bg: '#555', color: '#fff', initial: '' },
  Xiaomi:   { bg: '#FF6900', color: '#fff', initial: 'Mi' },
  OnePlus:  { bg: '#E4002B', color: '#fff', initial: '1+' },
  Vivo:     { bg: '#415FFF', color: '#fff', initial: 'V' },
  Realme:   { bg: '#FFC600', color: '#000', initial: 'R' },
  OPPO:     { bg: '#1A6B3C', color: '#fff', initial: 'O' },
  Google:   { bg: '#4285F4', color: '#fff', initial: 'G' },
  Motorola: { bg: '#5C2D91', color: '#fff', initial: 'M' },
  Nothing:  { bg: '#000', color: '#fff', initial: 'N' },
  iQOO:     { bg: '#FF4500', color: '#fff', initial: 'iQ' },
  POCO:     { bg: '#FFD700', color: '#000', initial: 'P' },
  Tecno:    { bg: '#0077B6', color: '#fff', initial: 'T' },
  Infinix:  { bg: '#00B4D8', color: '#fff', initial: 'I' },
  Honor:    { bg: '#0071C5', color: '#fff', initial: 'H' },
  CMF:      { bg: '#F97316', color: '#fff', initial: 'C' },
  Lava:     { bg: '#E63946', color: '#fff', initial: 'L' },
};

type UpcomingPhone = {
  id: string;
  name: string;
  brand: string;
  expectedPrice: string;
  expectedLaunch: string;
  launchMonth: string; // "May 2026", "June 2026" etc.
  status: 'rumored' | 'confirmed' | 'launching-soon';
  keySpecs: string[];
  highlight: string;
  image?: string;
};

const UPCOMING_PHONES: UpcomingPhone[] = [
  {
    id: 'iphone-18-pro',
    name: 'iPhone 18 Pro',
    brand: 'Apple',
    expectedPrice: '₹1,29,900 से शुरू',
    expectedLaunch: 'September 2026',
    launchMonth: 'September 2026',
    status: 'rumored',
    keySpecs: ['A20 Pro Chip', '48MP Periscope Camera', 'ProMotion 120Hz', 'Titanium Body'],
    highlight: 'Camera Upgrade',
  },
  {
    id: 'samsung-galaxy-s27-ultra',
    name: 'Samsung Galaxy S27 Ultra',
    brand: 'Samsung',
    expectedPrice: '₹1,34,999 से शुरू',
    expectedLaunch: 'January 2027',
    launchMonth: 'January 2027',
    status: 'rumored',
    keySpecs: ['Snapdragon 8 Gen 5', '200MP Camera', '6000mAh Battery', 'Gorilla Glass Armor 2'],
    highlight: 'Flagship Killer',
  },
  {
    id: 'oneplus-14',
    name: 'OnePlus 14',
    brand: 'OnePlus',
    expectedPrice: '₹54,999 से शुरू',
    expectedLaunch: 'June 2026',
    launchMonth: 'June 2026',
    status: 'confirmed',
    keySpecs: ['Snapdragon 8 Gen 4+', 'Hasselblad Camera', '100W SUPERVOOC', '6000mAh Battery'],
    highlight: 'Performance Beast',
  },
  {
    id: 'pixel-11-pro',
    name: 'Google Pixel 11 Pro',
    brand: 'Google',
    expectedPrice: '₹79,999 से शुरू',
    expectedLaunch: 'October 2026',
    launchMonth: 'October 2026',
    status: 'rumored',
    keySpecs: ['Tensor G6 Chip', 'AI Camera Pro', '7 Years Updates', '120Hz LTPO OLED'],
    highlight: 'Best AI Camera',
  },
  {
    id: 'realme-gt-8-pro',
    name: 'Realme GT 8 Pro',
    brand: 'Realme',
    expectedPrice: '₹34,999 से शुरू',
    expectedLaunch: 'July 2026',
    launchMonth: 'July 2026',
    status: 'rumored',
    keySpecs: ['Snapdragon 8s Gen 4', '50MP Sony IMX890', '5500mAh Battery', '100W Charge'],
    highlight: 'Budget Flagship',
  },
  {
    id: 'xiaomi-16-ultra',
    name: 'Xiaomi 16 Ultra',
    brand: 'Xiaomi',
    expectedPrice: '₹74,999 से शुरू',
    expectedLaunch: 'May 2026',
    launchMonth: 'May 2026',
    status: 'launching-soon',
    keySpecs: ['Snapdragon 8 Gen 4+', 'Leica 50MP Quad Camera', '6000mAh Battery', '120W HyperCharge'],
    highlight: 'Camera Champion',
  },
  {
    id: 'vivo-x300-pro',
    name: 'Vivo X300 Pro',
    brand: 'Vivo',
    expectedPrice: '₹59,999 से शुरू',
    expectedLaunch: 'May 2026',
    launchMonth: 'May 2026',
    status: 'confirmed',
    keySpecs: ['Dimensity 9400', 'Zeiss Camera', '5500mAh Battery', 'Curved AMOLED'],
    highlight: 'Photography Pro',
  },
  {
    id: 'iqoo-neo-11',
    name: 'iQOO Neo 11',
    brand: 'iQOO',
    expectedPrice: '₹29,999 से शुरू',
    expectedLaunch: 'June 2026',
    launchMonth: 'June 2026',
    status: 'rumored',
    keySpecs: ['Snapdragon 8s Gen 4', '144Hz AMOLED', '6000mAh Battery', '80W FlashCharge'],
    highlight: 'Gaming Value King',
  },
  {
    id: 'nothing-phone-4',
    name: 'Nothing Phone (4)',
    brand: 'Nothing',
    expectedPrice: '₹32,999 से शुरू',
    expectedLaunch: 'July 2026',
    launchMonth: 'July 2026',
    status: 'rumored',
    keySpecs: ['Snapdragon 8 Gen 4', 'Glyph Interface 3.0', '50MP Camera', 'NothingOS 4.0'],
    highlight: 'Unique Design',
  },
  {
    id: 'motorola-razr-60-ultra',
    name: 'Motorola Razr 60 Ultra',
    brand: 'Motorola',
    expectedPrice: '₹89,999 से शुरू',
    expectedLaunch: 'August 2026',
    launchMonth: 'August 2026',
    status: 'rumored',
    keySpecs: ['Snapdragon 8 Gen 4', '4\" Cover Display', '50MP Camera', 'Foldable'],
    highlight: 'Best Flip Phone',
  },
  {
    id: 'poco-f8-pro',
    name: 'POCO F8 Pro',
    brand: 'POCO',
    expectedPrice: '₹27,999 से शुरू',
    expectedLaunch: 'June 2026',
    launchMonth: 'June 2026',
    status: 'confirmed',
    keySpecs: ['Snapdragon 8s Gen 4', '200MP Camera', '5500mAh Battery', '120W Charge'],
    highlight: 'Price Killer',
  },
  {
    id: 'oppo-find-x10-pro',
    name: 'OPPO Find X10 Pro',
    brand: 'OPPO',
    expectedPrice: '₹69,999 से शुरू',
    expectedLaunch: 'August 2026',
    launchMonth: 'August 2026',
    status: 'rumored',
    keySpecs: ['Dimensity 9500', 'Hasselblad Camera', '5800mAh Battery', '100W SUPERVOOC'],
    highlight: 'Camera Beast',
  },
  {
    id: 'samsung-galaxy-a57',
    name: 'Samsung Galaxy A57',
    brand: 'Samsung',
    expectedPrice: '₹24,999 से शुरू',
    expectedLaunch: 'May 2026',
    launchMonth: 'May 2026',
    status: 'launching-soon',
    keySpecs: ['Exynos 1580', '50MP OIS Camera', '5000mAh Battery', 'One UI 7'],
    highlight: 'Mid-range King',
  },
  {
    id: 'redmi-note-16-pro',
    name: 'Redmi Note 16 Pro',
    brand: 'Xiaomi',
    expectedPrice: '₹19,999 से शुरू',
    expectedLaunch: 'September 2026',
    launchMonth: 'September 2026',
    status: 'rumored',
    keySpecs: ['Dimensity 8400 Ultra', '200MP Camera', '5500mAh Battery', '67W Turbo Charge'],
    highlight: 'Budget Camera King',
  },
  {
    id: 'honor-magic-7-lite',
    name: 'Honor Magic 7 Lite',
    brand: 'Honor',
    expectedPrice: '₹17,999 से शुरू',
    expectedLaunch: 'May 2026',
    launchMonth: 'May 2026',
    status: 'confirmed',
    keySpecs: ['Snapdragon 6 Gen 3', '108MP Camera', '6000mAh Battery', 'MagicOS 9.0'],
    highlight: 'Battery Monster',
  },
  {
    id: 'tecno-spark-30-ultra',
    name: 'Tecno Spark 30 Ultra',
    brand: 'Tecno',
    expectedPrice: '₹12,999 से शुरू',
    expectedLaunch: 'May 2026',
    launchMonth: 'May 2026',
    status: 'launching-soon',
    keySpecs: ['Helio G100', '108MP Camera', '5000mAh Battery', '33W Charge'],
    highlight: 'Budget Champion',
  },
];

const STATUS_STYLES = {
  'rumored':        { label: 'Rumored',         color: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30' },
  'confirmed':      { label: 'Confirmed',       color: 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30' },
  'launching-soon': { label: 'Launching Soon!',  color: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30' },
};

const ALL_MONTHS = [...new Set(UPCOMING_PHONES.map(p => p.launchMonth))].sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
const ALL_BRANDS = [...new Set(UPCOMING_PHONES.map(p => p.brand))].sort();

export default function UpcomingPhonesClient() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPhones = useMemo(() => {
    return UPCOMING_PHONES.filter(phone => {
      const matchesBrand = selectedBrand === 'All' || phone.brand === selectedBrand;
      const matchesMonth = selectedMonth === 'All' || phone.launchMonth === selectedMonth;
      const matchesSearch = phone.name.toLowerCase().includes(searchQuery.toLowerCase()) || phone.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesMonth && matchesSearch;
    });
  }, [selectedBrand, selectedMonth, searchQuery]);

  return (
    <div className="min-h-screen bg-grid">
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-8">
        <div className="absolute top-0 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-56 h-56 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
              <Sparkles className="w-4 h-4" /> Upcoming Phones in India 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              📱 Upcoming <span className="gradient-text">Smartphones</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              भारत में जल्द आने वाले सभी स्मार्टफोन्स — Expected Price, Launch Date, और Key Specs
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-6">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Phone या Brand खोजें..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-card/60 border border-border/50 text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur"
            />
          </div>

          {/* Month Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="text-xs font-bold text-muted-foreground flex items-center gap-1 mr-1"><Calendar className="w-3 h-3" /> Month:</span>
            <button
              onClick={() => setSelectedMonth('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${selectedMonth === 'All' ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' : 'bg-card/60 border-border/50 text-muted-foreground hover:border-primary/40'}`}
            >All</button>
            {ALL_MONTHS.map(m => (
              <button key={m} onClick={() => setSelectedMonth(m)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${selectedMonth === m ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' : 'bg-card/60 border-border/50 text-muted-foreground hover:border-primary/40'}`}
              >{m}</button>
            ))}
          </div>

          {/* Brand Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-bold text-muted-foreground flex items-center gap-1 mr-1"><Filter className="w-3 h-3" /> Brand:</span>
            <button
              onClick={() => setSelectedBrand('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${selectedBrand === 'All' ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' : 'bg-card/60 border-border/50 text-muted-foreground hover:border-primary/40'}`}
            >All</button>
            {ALL_BRANDS.map(b => {
              const style = BRAND_STYLES[b];
              return (
                <button key={b} onClick={() => setSelectedBrand(b)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border flex items-center gap-1.5 ${selectedBrand === b ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' : 'bg-card/60 border-border/50 text-muted-foreground hover:border-primary/40'}`}
                >
                  {style && <span className="w-4 h-4 rounded-full flex items-center justify-center text-[7px] font-black shrink-0" style={{ backgroundColor: style.bg, color: style.color }}>{style.initial}</span>}
                  {b}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-4">
        <p className="text-sm text-muted-foreground">{filteredPhones.length} upcoming phones found</p>
      </div>

      {/* Phone Cards */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPhones.map((phone, idx) => {
              const brandStyle = BRAND_STYLES[phone.brand];
              const statusStyle = STATUS_STYLES[phone.status];
              return (
                <div key={phone.id} className="group relative flex flex-col rounded-2xl border border-border/30 bg-card/50 backdrop-blur overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${statusStyle.color}`}>
                      {statusStyle.label}
                    </span>
                  </div>

                  {/* Card Header with brand color accent */}
                  <div className="relative p-5 pb-3">
                    <div className="flex items-start gap-3">
                      {/* Brand Logo */}
                      {brandStyle && (
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black shrink-0 shadow-md"
                          style={{ backgroundColor: brandStyle.bg, color: brandStyle.color }}>
                          {brandStyle.initial}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                          {phone.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{phone.brand}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Tag */}
                  <div className="px-5 pb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">
                      <Star className="w-3 h-3" /> {phone.highlight}
                    </span>
                  </div>

                  {/* Key Specs */}
                  <div className="px-5 pb-3 flex-1">
                    <div className="grid grid-cols-2 gap-1.5">
                      {phone.keySpecs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Launch */}
                  <div className="px-5 pb-4 pt-2 border-t border-border/20 mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Expected Price</p>
                        <p className="text-base font-bold text-foreground flex items-center gap-0.5">
                          {phone.expectedPrice}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Launch</p>
                        <p className="text-sm font-bold text-primary flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {phone.expectedLaunch}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPhones.length === 0 && (
            <div className="text-center py-16">
              <Smartphone className="w-12 h-12 mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground text-lg font-semibold">कोई phone नहीं मिला</p>
              <p className="text-sm text-muted-foreground/60 mt-1">Filter बदलकर देखें</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
