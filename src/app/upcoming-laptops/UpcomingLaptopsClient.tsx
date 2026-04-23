'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Calendar, Laptop, Search, ArrowRight, Sparkles, Filter, Star, Cpu, Zap, Monitor } from 'lucide-react';

const BRAND_STYLES: Record<string, { bg: string; color: string; initial: string }> = {
  Apple:    { bg: '#555', color: '#fff', initial: '' },
  ASUS:     { bg: '#00539B', color: '#fff', initial: 'A' },
  Dell:     { bg: '#007DB8', color: '#fff', initial: 'D' },
  HP:       { bg: '#0096D6', color: '#fff', initial: 'HP' },
  Lenovo:   { bg: '#E2001A', color: '#fff', initial: 'L' },
  Acer:     { bg: '#83B81A', color: '#fff', initial: 'Ac' },
  MSI:      { bg: '#FF0000', color: '#fff', initial: 'MSI' },
  Samsung:  { bg: '#1428A0', color: '#fff', initial: 'S' },
  Microsoft:{ bg: '#737373', color: '#fff', initial: 'MS' },
  Realme:   { bg: '#FFC600', color: '#000', initial: 'R' },
  Xiaomi:   { bg: '#FF6900', color: '#fff', initial: 'Mi' },
};

type UpcomingLaptop = {
  id: string;
  name: string;
  brand: string;
  expectedPrice: string;
  expectedLaunch: string;
  launchMonth: string;
  status: 'rumored' | 'confirmed' | 'launching-soon';
  keySpecs: string[];
  highlight: string;
  useCase: string;
  articleSlug: string;
};

const UPCOMING_LAPTOPS: UpcomingLaptop[] = [
  {
    id: 'macbook-air-m5',
    name: 'MacBook Air M5',
    brand: 'Apple',
    expectedPrice: '₹1,14,900 से शुरू',
    expectedLaunch: 'June 2026',
    launchMonth: 'June 2026',
    status: 'confirmed',
    keySpecs: ['Apple M5 Chip', '24GB Unified RAM', 'Liquid Retina Display', '22-hr Battery'],
    highlight: 'Thinnest MacBook Ever',
    useCase: 'Students & Creators',
    articleSlug: 'upcoming-macbook-air-m5-2026',
  },
  {
    id: 'asus-rog-strix-g18-2026',
    name: 'ASUS ROG Strix G18 (2026)',
    brand: 'ASUS',
    expectedPrice: '₹1,89,999 से शुरू',
    expectedLaunch: 'July 2026',
    launchMonth: 'July 2026',
    status: 'rumored',
    keySpecs: ['Intel Arrow Lake i9', 'RTX 5090 16GB', '18" 240Hz QHD+', '4TB SSD'],
    highlight: 'Gaming Monster',
    useCase: 'Gaming',
    articleSlug: 'upcoming-asus-rog-strix-g18-2026',
  },
  {
    id: 'dell-xps-16-2026',
    name: 'Dell XPS 16 (2026)',
    brand: 'Dell',
    expectedPrice: '₹1,49,999 से शुरू',
    expectedLaunch: 'August 2026',
    launchMonth: 'August 2026',
    status: 'rumored',
    keySpecs: ['Intel Arrow Lake Ultra 9', 'RTX 5070 Ti', '16" 4K OLED', '32GB LPDDR5X'],
    highlight: 'Creator\'s Dream',
    useCase: 'Creators',
    articleSlug: 'upcoming-dell-xps-16-2026',
  },
  {
    id: 'lenovo-yoga-pro-9i-2026',
    name: 'Lenovo Yoga Pro 9i (2026)',
    brand: 'Lenovo',
    expectedPrice: '₹1,69,999 से शुरू',
    expectedLaunch: 'July 2026',
    launchMonth: 'July 2026',
    status: 'confirmed',
    keySpecs: ['Intel Arrow Lake Ultra 7', 'RTX 5060 8GB', '16" Mini-LED 165Hz', 'Bowers & Wilkins Speakers'],
    highlight: 'Best Display',
    useCase: 'Creators',
    articleSlug: 'upcoming-lenovo-yoga-pro-9i-2026',
  },
  {
    id: 'hp-omen-18-2026',
    name: 'HP OMEN 18 (2026)',
    brand: 'HP',
    expectedPrice: '₹1,59,999 से शुरू',
    expectedLaunch: 'September 2026',
    launchMonth: 'September 2026',
    status: 'rumored',
    keySpecs: ['AMD Ryzen 9 9950X', 'RTX 5080 12GB', '18" 240Hz QHD', 'Per-key RGB Keyboard'],
    highlight: 'AMD Gaming Beast',
    useCase: 'Gaming',
    articleSlug: 'upcoming-hp-omen-18-2026',
  },
  {
    id: 'asus-zenbook-s17-2026',
    name: 'ASUS Zenbook S17 (2026)',
    brand: 'ASUS',
    expectedPrice: '₹1,29,999 से शुरू',
    expectedLaunch: 'June 2026',
    launchMonth: 'June 2026',
    status: 'launching-soon',
    keySpecs: ['Intel Arrow Lake Ultra 7', 'Intel Arc GPU', '17" 3K OLED', 'Ceraluminum Body'],
    highlight: 'Ultra-Thin Premium',
    useCase: 'Office',
    articleSlug: 'upcoming-asus-zenbook-s17-2026',
  },
  {
    id: 'macbook-pro-m5-pro',
    name: 'MacBook Pro 16" M5 Pro',
    brand: 'Apple',
    expectedPrice: '₹2,49,900 से शुरू',
    expectedLaunch: 'October 2026',
    launchMonth: 'October 2026',
    status: 'rumored',
    keySpecs: ['Apple M5 Pro Chip', '36GB Unified RAM', 'Liquid Retina XDR', '24-hr Battery'],
    highlight: 'Pro Workstation',
    useCase: 'Creators',
    articleSlug: 'upcoming-macbook-pro-m5-pro-2026',
  },
  {
    id: 'acer-predator-helios-18-2026',
    name: 'Acer Predator Helios 18 (2026)',
    brand: 'Acer',
    expectedPrice: '₹1,74,999 से शुरू',
    expectedLaunch: 'August 2026',
    launchMonth: 'August 2026',
    status: 'rumored',
    keySpecs: ['Intel Arrow Lake i9', 'RTX 5080 12GB', '18" 240Hz IPS', '5th Gen AeroBlade Fan'],
    highlight: 'Cooling King',
    useCase: 'Gaming',
    articleSlug: 'upcoming-acer-predator-helios-18-2026',
  },
  {
    id: 'samsung-galaxy-book-5-ultra',
    name: 'Samsung Galaxy Book 5 Ultra',
    brand: 'Samsung',
    expectedPrice: '₹1,39,999 से शुरू',
    expectedLaunch: 'July 2026',
    launchMonth: 'July 2026',
    status: 'confirmed',
    keySpecs: ['Intel Arrow Lake Ultra 9', 'RTX 5060 8GB', '16" 3K AMOLED', 'Galaxy AI Features'],
    highlight: 'Samsung Ecosystem',
    useCase: 'Office',
    articleSlug: 'upcoming-samsung-galaxy-book-5-ultra-2026',
  },
  {
    id: 'msi-raider-18-hx-2026',
    name: 'MSI Raider 18 HX (2026)',
    brand: 'MSI',
    expectedPrice: '₹2,29,999 से शुरू',
    expectedLaunch: 'September 2026',
    launchMonth: 'September 2026',
    status: 'rumored',
    keySpecs: ['Intel Arrow Lake HX i9', 'RTX 5090 16GB', '18" UHD+ 120Hz', '99.9Whr Battery'],
    highlight: 'No-Compromise Gaming',
    useCase: 'Gaming',
    articleSlug: 'upcoming-msi-raider-18-hx-2026',
  },
  {
    id: 'lenovo-ideapad-slim-5-2026',
    name: 'Lenovo IdeaPad Slim 5 (2026)',
    brand: 'Lenovo',
    expectedPrice: '₹54,999 से शुरू',
    expectedLaunch: 'June 2026',
    launchMonth: 'June 2026',
    status: 'launching-soon',
    keySpecs: ['AMD Ryzen 7 8845HS', 'Integrated RDNA 3.5', '15.6" FHD+ IPS', '16GB DDR5'],
    highlight: 'Best Under ₹55K',
    useCase: 'Students',
    articleSlug: 'upcoming-lenovo-ideapad-slim-5-2026',
  },
  {
    id: 'dell-inspiron-16-ai-2026',
    name: 'Dell Inspiron 16 AI (2026)',
    brand: 'Dell',
    expectedPrice: '₹69,999 से शुरू',
    expectedLaunch: 'July 2026',
    launchMonth: 'July 2026',
    status: 'confirmed',
    keySpecs: ['Intel Arrow Lake Ultra 5 NPU', 'Intel Arc iGPU', '16" FHD+ IPS', 'Copilot+ PC'],
    highlight: 'AI Laptop Budget',
    useCase: 'Students',
    articleSlug: 'upcoming-dell-inspiron-16-ai-2026',
  },
  {
    id: 'xiaomi-book-pro-2026',
    name: 'Xiaomi Book Pro 16 (2026)',
    brand: 'Xiaomi',
    expectedPrice: '₹79,999 से शुरू',
    expectedLaunch: 'August 2026',
    launchMonth: 'August 2026',
    status: 'rumored',
    keySpecs: ['Intel Arrow Lake Ultra 7', 'Integrated Arc GPU', '16" 3.1K OLED', '100W USB-C Charge'],
    highlight: 'OLED Under ₹80K',
    useCase: 'Office',
    articleSlug: 'upcoming-xiaomi-book-pro-16-2026',
  },
  {
    id: 'realme-book-air-2026',
    name: 'Realme Book Air (2026)',
    brand: 'Realme',
    expectedPrice: '₹39,999 से शुरू',
    expectedLaunch: 'June 2026',
    launchMonth: 'June 2026',
    status: 'launching-soon',
    keySpecs: ['AMD Ryzen 5 8645HS', '8GB LPDDR5', '14" FHD+ IPS', 'Metal Body 1.3kg'],
    highlight: 'Budget King Under ₹40K',
    useCase: 'Students',
    articleSlug: 'upcoming-realme-book-air-2026',
  },
];

const STATUS_STYLES = {
  'rumored':        { label: 'Rumored',         color: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30' },
  'confirmed':      { label: 'Confirmed',       color: 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30' },
  'launching-soon': { label: 'Launching Soon!',  color: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30' },
};

const USE_CASE_ICONS: Record<string, React.ReactNode> = {
  'Gaming': <Zap className="w-3 h-3" />,
  'Students': <Star className="w-3 h-3" />,
  'Creators': <Monitor className="w-3 h-3" />,
  'Office': <Cpu className="w-3 h-3" />,
};

const ALL_MONTHS = [...new Set(UPCOMING_LAPTOPS.map(l => l.launchMonth))].sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
const ALL_BRANDS = [...new Set(UPCOMING_LAPTOPS.map(l => l.brand))].sort();
const ALL_USE_CASES = [...new Set(UPCOMING_LAPTOPS.map(l => l.useCase))].sort();

export default function UpcomingLaptopsClient() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedUseCase, setSelectedUseCase] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return UPCOMING_LAPTOPS.filter(l => {
      const matchBrand = selectedBrand === 'All' || l.brand === selectedBrand;
      const matchMonth = selectedMonth === 'All' || l.launchMonth === selectedMonth;
      const matchUse = selectedUseCase === 'All' || l.useCase === selectedUseCase;
      const matchSearch = l.name.toLowerCase().includes(searchQuery.toLowerCase()) || l.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchBrand && matchMonth && matchUse && matchSearch;
    });
  }, [selectedBrand, selectedMonth, selectedUseCase, searchQuery]);

  return (
    <div className="min-h-screen bg-grid">
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-8">
        <div className="absolute top-0 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-56 h-56 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 border border-teal-500/20 px-4 py-1.5 text-sm font-semibold text-teal-600 dark:text-teal-400 mb-6">
              <Sparkles className="w-4 h-4" /> Upcoming Laptops in India 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              💻 Upcoming <span className="gradient-text">Laptops</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              भारत में जल्द आने वाले Gaming, Creator, Student और Office Laptops — Expected Price, Specs & Launch Dates
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-6">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Laptop या Brand खोजें..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-card/60 border border-border/50 text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur" />
          </div>

          {/* Use Case Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-bold text-muted-foreground flex items-center gap-1 mr-1"><Laptop className="w-3 h-3" /> Use:</span>
            <button onClick={() => setSelectedUseCase('All')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${selectedUseCase === 'All' ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' : 'bg-card/60 border-border/50 text-muted-foreground hover:border-primary/40'}`}>All</button>
            {ALL_USE_CASES.map(u => (
              <button key={u} onClick={() => setSelectedUseCase(u)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border flex items-center gap-1 ${selectedUseCase === u ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' : 'bg-card/60 border-border/50 text-muted-foreground hover:border-primary/40'}`}>
                {USE_CASE_ICONS[u]} {u}
              </button>
            ))}
          </div>

          {/* Month Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-bold text-muted-foreground flex items-center gap-1 mr-1"><Calendar className="w-3 h-3" /> Month:</span>
            <button onClick={() => setSelectedMonth('All')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${selectedMonth === 'All' ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' : 'bg-card/60 border-border/50 text-muted-foreground hover:border-primary/40'}`}>All</button>
            {ALL_MONTHS.map(m => (
              <button key={m} onClick={() => setSelectedMonth(m)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${selectedMonth === m ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' : 'bg-card/60 border-border/50 text-muted-foreground hover:border-primary/40'}`}>{m}</button>
            ))}
          </div>

          {/* Brand Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-bold text-muted-foreground flex items-center gap-1 mr-1"><Filter className="w-3 h-3" /> Brand:</span>
            <button onClick={() => setSelectedBrand('All')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${selectedBrand === 'All' ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' : 'bg-card/60 border-border/50 text-muted-foreground hover:border-primary/40'}`}>All</button>
            {ALL_BRANDS.map(b => {
              const s = BRAND_STYLES[b];
              return (
                <button key={b} onClick={() => setSelectedBrand(b)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border flex items-center gap-1.5 ${selectedBrand === b ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' : 'bg-card/60 border-border/50 text-muted-foreground hover:border-primary/40'}`}>
                  {s && <span className="w-4 h-4 rounded-full flex items-center justify-center text-[7px] font-black shrink-0" style={{ backgroundColor: s.bg, color: s.color }}>{s.initial}</span>}
                  {b}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-4">
        <p className="text-sm text-muted-foreground">{filtered.length} upcoming laptops found</p>
      </div>

      {/* Cards */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((laptop) => {
              const brandStyle = BRAND_STYLES[laptop.brand];
              const statusStyle = STATUS_STYLES[laptop.status];
              return (
                <div key={laptop.id} className="group relative flex flex-col rounded-2xl border border-border/30 bg-card/50 backdrop-blur overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${statusStyle.color}`}>{statusStyle.label}</span>
                  </div>
                  <div className="relative p-5 pb-3">
                    <div className="flex items-start gap-3">
                      {brandStyle && (
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black shrink-0 shadow-md" style={{ backgroundColor: brandStyle.bg, color: brandStyle.color }}>{brandStyle.initial}</div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">{laptop.name}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{laptop.brand}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 pb-3 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">
                      <Star className="w-3 h-3" /> {laptop.highlight}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-secondary/40 text-muted-foreground text-[10px] font-semibold">
                      {USE_CASE_ICONS[laptop.useCase]} {laptop.useCase}
                    </span>
                  </div>
                  <div className="px-5 pb-3 flex-1">
                    <div className="grid grid-cols-2 gap-1.5">
                      {laptop.keySpecs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />{spec}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-5 pb-3 pt-2 border-t border-border/20 mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Expected Price</p>
                        <p className="text-base font-bold text-foreground">{laptop.expectedPrice}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Launch</p>
                        <p className="text-sm font-bold text-primary flex items-center gap-1"><Calendar className="w-3 h-3" /> {laptop.expectedLaunch}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 pb-4">
                    <Link href={`/blog/${laptop.articleSlug}`}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-teal-500/15 to-blue-500/15 hover:from-teal-500/25 hover:to-blue-500/25 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-bold transition-all hover:-translate-y-0.5">
                      <Sparkles className="w-3.5 h-3.5" /> पूरी Details पढ़ें <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Laptop className="w-12 h-12 mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground text-lg font-semibold">कोई laptop नहीं मिला</p>
              <p className="text-sm text-muted-foreground/60 mt-1">Filter बदलकर देखें</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
