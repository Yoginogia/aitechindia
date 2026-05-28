'use client';

import React, { useState, useMemo } from 'react';
import { Smartphone, Star, Zap, Battery, Cpu, Filter, ExternalLink, CheckCircle2, TrendingUp, Award, Sparkles, AlertTriangle, ThumbsUp, ThumbsDown, Scale, X, Check, Search, ChevronDown, ChevronUp, Camera, Monitor, Shield, Heart, Flame } from 'lucide-react';
import Link from 'next/link';

interface Phone {
  id: string;
  name: string;
  brand: string;
  price: number;
  priceDisplay: string;
  score: number;
  badge?: string;
  image: string;
  specs: {
    processor: string;
    ram: string;
    display: string;
    camera: string;
    battery: string;
    charging: string;
    os: string;
  };
  highlights: string[];
  category: 'budget' | 'midrange' | 'premium' | 'flagship';
  amazon: string;
  flipkart: string;
  pros: string[];
  cons: string[];
  verdict: string;
  useCases?: string[];
}

// Fallback image used if any phone image fails to load
const FALLBACK = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80';

import ALL_PHONES_DATA from '@/data/phones.json';
const ALL_PHONES = ALL_PHONES_DATA as Phone[];

const BUDGETS = [
  { label: 'All', max: Infinity },
  { label: 'Under ₹10K', max: 10000 },
  { label: 'Under ₹15K', max: 15000 },
  { label: 'Under ₹20K', max: 20000 },
  { label: 'Under ₹25K', max: 25000 },
  { label: 'Under ₹30K', max: 30000 },
  { label: 'Under ₹40K', max: 40000 },
  { label: 'Under ₹50K', max: 50000 },
  { label: '₹1L+', max: Infinity },
];

const BRAND_STYLES: Record<string, { color: string; bg: string; initial: string }> = {
  'Samsung': { color: '#fff', bg: '#1428A0', initial: 'S' },
  'Apple': { color: '#fff', bg: '#555555', initial: '' },
  'OnePlus': { color: '#fff', bg: '#F5010C', initial: '1+' },
  'iQOO': { color: '#fff', bg: '#FF6600', initial: 'iQ' },
  'Realme': { color: '#000', bg: '#FFB200', initial: 'R' },
  'Motorola': { color: '#fff', bg: '#5C92FA', initial: 'M' },
  'Nothing': { color: '#fff', bg: '#000000', initial: 'N' },
  'Xiaomi': { color: '#fff', bg: '#FF6900', initial: 'Mi' },
  'POCO': { color: '#000', bg: '#FFD500', initial: 'P' },
  'Google': { color: '#fff', bg: '#4285F4', initial: 'G' },
  'Vivo': { color: '#fff', bg: '#415FFF', initial: 'V' },
};

const BRAND_LIST = ['All', 'Samsung', 'Apple', 'OnePlus', 'iQOO', 'Realme', 'Motorola', 'Nothing', 'Xiaomi', 'POCO', 'Google', 'Vivo'];
const BRANDS = BRAND_LIST;
const USE_CASES = ['All', 'All-Rounder', 'Gaming', 'Camera', 'Battery', 'Clean Software', 'Premium'];
type SortKey = 'score' | 'price_asc' | 'price_desc';

function BrandLogo({ brand, size = 'sm' }: { brand: string; size?: 'sm' | 'md' }) {
  const style = BRAND_STYLES[brand];
  if (!style) return <Smartphone className={size === 'sm' ? 'w-4 h-4' : 'w-6 h-6'} />;
  const dim = size === 'sm' ? 'w-5 h-5 text-[8px]' : 'w-7 h-7 text-[10px]';
  return (
    <div className={`${dim} rounded-full flex items-center justify-center font-black shrink-0`}
      style={{ backgroundColor: style.bg, color: style.color }}>
      {style.initial || '🍎'}
    </div>
  );
}

// Map phone IDs to their blog review article slugs
const REVIEW_SLUGS: Record<string, string> = {
  'redmi-14c': 'redmi-14c-review',
  'realme-c61': 'realme-c61-review',
  'samsung-a06': 'samsung-a06-review',
  'realme-narzo-70-pro': 'realme-narzo-70-pro-review',
  'redmi-note-14': 'redmi-note-14-review',
  'samsung-m15-5g': 'samsung-m15-5g-review',
  'iqoo-z9x': 'iqoo-z9x-review',
  'oneplus-nord-5': 'oneplus-nord-5-review',
  'redmi-note-15-pro': 'redmi-note-15-pro-review',
  'iqoo-neo-10': 'iqoo-neo-10-review',
  'motorola-edge-60-pro': 'motorola-edge-60-pro-review',
  'samsung-a56': 'samsung-a56-review',
  'realme-gt-7-pro': 'realme-gt-7-pro-review',
  'oneplus-15r': 'oneplus-15r-review',
  'iqoo-15r': 'iqoo-15r-review',
  'nothing-4a-pro': 'nothing-4a-pro-review',
  'oneplus-15': 'oneplus-15-review',
  'samsung-s26-ultra': 'samsung-s26-ultra-review',
};

// ── Score Ring Component ──
function ScoreRing({ score }: { score: number }) {
  const pct = (score / 10) * 100;
  const r = 18, circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  const color = score >= 9 ? '#34d399' : score >= 8.5 ? '#a78bfa' : score >= 8 ? '#fbbf24' : '#fb923c';
  return (
    <div className="relative w-12 h-12 shrink-0">
      <svg viewBox="0 0 44 44" className="w-full h-full -rotate-90">
        <circle cx="22" cy="22" r={r} fill="none" stroke="currentColor" strokeWidth="3" className="text-border/30" />
        <circle cx="22" cy="22" r={r} fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} className="transition-all duration-700" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[11px] font-black" style={{ color }}>{score.toFixed(1)}</span>
      </div>
    </div>
  );
}

function PhoneCard({ phone, rank, compareList, toggleCompare }: { phone: Phone, rank: number, compareList: Phone[], toggleCompare: (p: Phone) => void }) {
  const [showSpecs, setShowSpecs] = useState(false);
  const isComparing = compareList.some(p => p.id === phone.id);
  const canCompare = compareList.length < 2 || isComparing;

  const useCaseIcons: Record<string, React.ReactNode> = {
    'Gaming': <Flame className="w-3 h-3" />,
    'Camera': <Camera className="w-3 h-3" />,
    'Battery': <Battery className="w-3 h-3" />,
    'Clean Software': <Shield className="w-3 h-3" />,
    'Premium': <Star className="w-3 h-3" />,
    'All-Rounder': <Award className="w-3 h-3" />,
    'Display': <Monitor className="w-3 h-3" />,
    'Design': <Heart className="w-3 h-3" />,
  };

  return (
    <div className="group glass rounded-2xl border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col">

      {/* ── Phone Image ── */}
      <div className="relative h-48 bg-gradient-to-br from-secondary/40 to-background overflow-hidden flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={phone.image}
          alt={phone.name}
          width={200}
          height={200}
          className="max-h-44 w-auto object-contain p-3 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK; }}
        />
        {/* Rank Badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs text-white shadow-lg ${rank <= 3 ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-secondary/80 text-muted-foreground backdrop-blur-sm'}`}>
            #{rank}
          </div>
          {phone.badge && (
            <div className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-primary text-white shadow-lg">
              {phone.badge}
            </div>
          )}
        </div>
        {/* Score Ring */}
        <div className="absolute top-2 right-2 z-10">
          <ScoreRing score={phone.score} />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 mb-1">
          <BrandLogo brand={phone.brand} size="sm" />
          <span className="text-xs font-bold text-foreground/70 dark:text-muted-foreground uppercase tracking-wider">{phone.brand}</span>
          {phone.category === 'flagship' && <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-500 font-bold">FLAGSHIP</span>}
        </div>
        <h3 className="font-bold text-base text-foreground leading-tight mb-1 group-hover:text-primary transition-colors">{phone.name}</h3>
        <div className="text-xl font-black text-primary mb-2">{phone.priceDisplay}</div>

        {/* Best For Tags */}
        {phone.useCases && phone.useCases.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {phone.useCases.slice(0, 3).map(uc => (
              <span key={uc} className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                {useCaseIcons[uc] || <Star className="w-3 h-3" />} {uc}
              </span>
            ))}
          </div>
        )}

        <ul className="space-y-1.5 mb-3 flex-1">
          {phone.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />{h}
            </li>
          ))}
        </ul>

        {/* Quick Specs Grid */}
        <div className="grid grid-cols-4 gap-1.5 mb-3">
          <div className="bg-secondary/30 rounded-lg p-1.5 text-center">
            <Battery className="w-3 h-3 text-emerald-400 mx-auto mb-0.5" />
            <div className="text-[8px] font-bold text-muted-foreground leading-tight">{phone.specs.battery}</div>
          </div>
          <div className="bg-secondary/30 rounded-lg p-1.5 text-center">
            <Zap className="w-3 h-3 text-amber-400 mx-auto mb-0.5" />
            <div className="text-[8px] font-bold text-muted-foreground leading-tight">{phone.specs.charging}</div>
          </div>
          <div className="bg-secondary/30 rounded-lg p-1.5 text-center">
            <Camera className="w-3 h-3 text-blue-400 mx-auto mb-0.5" />
            <div className="text-[8px] font-bold text-muted-foreground leading-tight">{phone.specs.camera.split(' ')[0]}</div>
          </div>
          <div className="bg-secondary/30 rounded-lg p-1.5 text-center">
            <Cpu className="w-3 h-3 text-purple-400 mx-auto mb-0.5" />
            <div className="text-[8px] font-bold text-muted-foreground leading-tight truncate">
              {phone.specs.processor.split(' ').slice(-2).join(' ')}
            </div>
          </div>
        </div>

        {/* Expandable Full Specs */}
        <button
          onClick={() => setShowSpecs(!showSpecs)}
          className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-primary/70 hover:text-primary mb-3 transition-colors"
        >
          {showSpecs ? <><ChevronUp className="w-3 h-3" /> Specs छुपाएं</> : <><ChevronDown className="w-3 h-3" /> सभी Specs देखें</>}
        </button>
        {showSpecs && (
          <div className="bg-secondary/20 rounded-xl p-3 mb-3 space-y-1.5 text-[10px] border border-border/30 animate-in slide-in-from-top-2">
            <div className="flex justify-between"><span className="text-muted-foreground font-medium">Processor</span><span className="font-bold text-foreground">{phone.specs.processor}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground font-medium">RAM</span><span className="font-bold text-foreground">{phone.specs.ram}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground font-medium">Display</span><span className="font-bold text-foreground">{phone.specs.display}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground font-medium">Camera</span><span className="font-bold text-foreground">{phone.specs.camera}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground font-medium">Battery</span><span className="font-bold text-foreground">{phone.specs.battery}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground font-medium">Charging</span><span className="font-bold text-foreground">{phone.specs.charging}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground font-medium">OS</span><span className="font-bold text-foreground">{phone.specs.os}</span></div>
          </div>
        )}

        {/* Verdict Block */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 mb-3">
          <h4 className="text-[11px] font-bold text-primary mb-1 flex items-center gap-1"><Sparkles className="w-3 h-3" /> हमारा Verdict</h4>
          <p className="text-[11px] text-muted-foreground leading-relaxed">{phone.verdict}</p>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-emerald-500/5 rounded-lg p-2.5 border border-emerald-500/10">
            <h5 className="text-[10px] font-bold text-emerald-500 mb-1.5 flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> अच्छा</h5>
            <ul className="space-y-1">
              {phone.pros.slice(0, 2).map((p, i) => (
                <li key={i} className="text-[10px] text-muted-foreground flex items-start gap-1"><span className="text-emerald-500 mt-0.5">✓</span> {p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-500/5 rounded-lg p-2.5 border border-red-500/10">
            <h5 className="text-[10px] font-bold text-red-500 mb-1.5 flex items-center gap-1"><ThumbsDown className="w-3 h-3" /> कमज़ोर</h5>
            <ul className="space-y-1">
              {phone.cons.slice(0, 2).map((c, i) => (
                <li key={i} className="text-[10px] text-muted-foreground flex items-start gap-1"><span className="text-red-500 mt-0.5">✗</span> {c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-2 mb-2">
          {REVIEW_SLUGS[phone.id] ? (
            <Link href={`/blog/${REVIEW_SLUGS[phone.id]}`}
              className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-primary/20 to-purple-500/20 hover:from-primary/30 hover:to-purple-500/30 text-primary text-xs font-bold py-2.5 px-3 rounded-xl transition-all hover:-translate-y-0.5 border border-primary/20">
              <Sparkles className="w-3 h-3" /> Full Review
            </Link>
          ) : (
            <a href={phone.amazon} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-primary/20 to-purple-500/20 hover:from-primary/30 hover:to-purple-500/30 text-primary text-xs font-bold py-2.5 px-3 rounded-xl transition-all hover:-translate-y-0.5 border border-primary/20">
              <Sparkles className="w-3 h-3" /> Full Review
            </a>
          )}
          <button 
            onClick={() => toggleCompare(phone)}
            disabled={!canCompare}
            className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-2 rounded-xl transition-all hover:-translate-y-0.5 border ${isComparing ? 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30' : 'bg-secondary/40 text-muted-foreground hover:bg-secondary/70 border-border/50'} ${!canCompare && 'opacity-50 cursor-not-allowed'}`}>
            {isComparing ? <><Check className="w-3 h-3" /> Added</> : <><Scale className="w-3 h-3" /> Compare</>}
          </button>
        </div>

        <div className="flex gap-2">
          <a href={phone.amazon} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#FF9900] hover:bg-[#FF9900]/90 text-black text-xs font-bold py-2.5 px-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-sm">
            <ExternalLink className="w-3 h-3" /> Amazon
          </a>
          <a href={phone.flipkart} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#2874F0] hover:bg-[#2874F0]/90 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-sm">
            <ExternalLink className="w-3 h-3" /> Flipkart
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BestPhonesClient() {
  const [maxBudget,  setMaxBudget]  = useState(Infinity);
  const [budgetLabel, setBudgetLabel] = useState('All');
  const [brand, setBrand] = useState('All');
  const [useCase, setUseCase] = useState('All');
  const [sort,  setSort]  = useState<SortKey>('score');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Compare State
  const [compareList, setCompareList] = useState<Phone[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const toggleCompare = (phone: Phone) => {
    if (compareList.some(p => p.id === phone.id)) {
      setCompareList(compareList.filter(p => p.id !== phone.id));
    } else {
      if (compareList.length < 2) setCompareList([...compareList, phone]);
    }
  };

  const filtered = useMemo(() => {
    let phones = ALL_PHONES.filter(p => {
      const inBudget = budgetLabel === '₹1L+' ? p.price >= 75000 : p.price <= maxBudget;
      const inBrand  = brand === 'All' || p.brand === brand;
      const inUseCase = useCase === 'All' || (p.useCases && p.useCases.includes(useCase));
      const inSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return inBudget && inBrand && inUseCase && inSearch;
    });
    if (sort === 'score')      phones = [...phones].sort((a, b) => b.score - a.score);
    else if (sort === 'price_asc')  phones = [...phones].sort((a, b) => a.price - b.price);
    else if (sort === 'price_desc') phones = [...phones].sort((a, b) => b.price - a.price);
    return phones;
  }, [maxBudget, budgetLabel, brand, useCase, sort, searchQuery]);

  const topPick = filtered[0];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">

      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
          <Award className="h-4 w-4" /> Expert Picks — April 2026
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-foreground">
          Best Phones <span className="gradient-text">India 2026</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          अपना Budget सेट करो, Brand चुनो — हमारा Expert System आपको India का Best Phone recommend करेगा Amazon &amp; Flipkart Direct Links के साथ।
        </p>
        <div className="mt-5 flex justify-center gap-6 text-xs font-medium text-muted-foreground">
          <span className="flex items-center gap-1.5"><Smartphone className="h-3.5 w-3.5 text-primary" /> {ALL_PHONES.length} Phones</span>
          <span className="flex items-center gap-1.5"><TrendingUp className="h-3.5 w-3.5 text-primary" /> Updated April 2026</span>
          <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-primary" /> Expert Scored</span>
        </div>

        {/* Search Bar */}
        <div className="mt-8 max-w-md mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Phone या Brand खोजें... (जैसे Samsung, OnePlus)"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-secondary/30 border border-border/50 rounded-2xl text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:bg-secondary/50 transition-all"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/70 transition-colors">
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Brand Selector */}
      <div className="mb-8">
        <div className="text-xs font-semibold text-foreground/60 dark:text-muted-foreground uppercase tracking-wider mb-3 px-1">📱 Brand से चुनें</div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {BRAND_LIST.map(b => (
            <button key={b}
              onClick={() => setBrand(b)}
              className={`flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl text-xs font-bold transition-all shrink-0 min-w-[76px] border ${
                brand === b
                  ? 'bg-primary/10 text-primary border-primary/30 shadow-md shadow-primary/10'
                  : 'bg-white dark:bg-secondary/20 text-foreground/70 dark:text-muted-foreground hover:bg-secondary/50 hover:text-foreground border-border/40 dark:border-border/30'
              }`}>
              <BrandLogo brand={b} size="md" />
              <span>{b}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-secondary/20 border border-border/50 rounded-2xl p-5 md:p-6 mb-10 space-y-5">
        <div className="flex items-center gap-2 text-sm font-bold text-foreground">
          <Filter className="w-4 h-4 text-primary" /> Filter Phones
        </div>
        <div>
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">🎯 किस काम के लिए चाहिए? 🔥</div>
          <div className="flex flex-wrap gap-2 mb-5">
            {USE_CASES.map(uc => (
              <button key={uc}
                onClick={() => setUseCase(uc)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${useCase === uc ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25' : 'bg-secondary/40 text-muted-foreground hover:bg-secondary/70 hover:text-foreground'}`}>
                {uc === 'Gaming' ? '🎮 Gaming' : uc === 'Camera' ? '📸 Camera' : uc === 'Battery' ? '🔋 Battery' : uc === 'Clean Software' ? '✨ Clean Software' : uc === 'Premium' ? '💎 Premium' : uc === 'All-Rounder' ? '⭐ All-Rounder' : 'All'}
              </button>
            ))}
          </div>

          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">💰 Budget</div>
          <div className="flex flex-wrap gap-2">
            {BUDGETS.map(b => (
              <button key={b.label}
                onClick={() => { setMaxBudget(b.max); setBudgetLabel(b.label); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${budgetLabel === b.label ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'bg-secondary/40 text-muted-foreground hover:bg-secondary/70 hover:text-foreground'}`}>
                {b.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[160px]">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">🔃 Sort By</div>
            <select value={sort} onChange={e => setSort(e.target.value as SortKey)}
              className="w-full bg-background border border-border/60 text-foreground text-sm rounded-xl px-3 py-2.5 outline-none focus:border-primary transition-colors">
              <option value="score">⭐ Best Score</option>
              <option value="price_asc">💰 Price: Low → High</option>
              <option value="price_desc">💎 Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Top Pick Banner */}
      {topPick && (
        <div className="bg-gradient-to-r from-primary/10 via-purple-500/5 to-transparent border border-primary/30 rounded-2xl p-5 md:p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-primary">AITechNews Top Pick</div>
              <div className="font-black text-foreground">{topPick.name}</div>
            </div>
          </div>
          <div className="flex-1 text-sm text-muted-foreground">
            {topPick.priceDisplay} — Score {topPick.score}/10 — {topPick.highlights[0]}
          </div>
          <a href={topPick.amazon} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-primary/90 transition-colors shrink-0">
            Best Deal <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-muted-foreground font-medium">
          <span className="text-foreground font-bold">{filtered.length} phones</span> आपके filters से match करते हैं
        </div>
        <Link href="/compare" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
          कोई भी 2 phones compare करें →
        </Link>
      </div>

      {/* Phone Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((phone, i) => <PhoneCard key={phone.id} phone={phone} rank={i + 1} compareList={compareList} toggleCompare={toggleCompare} />)}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <Smartphone className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="font-bold text-foreground mb-2">इस filter में कोई phone नहीं मिला</p>
          <p className="text-sm">Budget या Brand filter change करें</p>
        </div>
      )}

      {/* Floating Compare Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-lg bg-background/80 backdrop-blur-xl border border-primary/30 shadow-2xl shadow-primary/20 rounded-2xl p-4 flex items-center justify-between animate-in slide-in-from-bottom-10">
          <div className="flex gap-3">
            {compareList.map(p => (
              <div key={p.id} className="relative w-12 h-12 rounded-lg bg-secondary/50 border border-border flex items-center justify-center overflow-hidden">
                <img src={p.image} alt={p.name} className="w-10 h-10 object-contain" />
                <button onClick={() => toggleCompare(p)} className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white p-0.5 shadow-sm">
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            {compareList.length === 1 && (
              <div className="w-12 h-12 rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-muted-foreground/50" />
              </div>
            )}
          </div>
          
          {compareList.length === 2 ? (
            <button onClick={() => setShowCompareModal(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary/30 flex items-center gap-2">
              <Scale className="w-4 h-4" /> Compare Now
            </button>
          ) : (
            <div className="text-xs font-medium text-muted-foreground">
              Select 1 more to compare
            </div>
          )}
        </div>
      )}

      {/* Compare Modal */}
      {showCompareModal && compareList.length === 2 && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-background border border-border/50 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
            
            <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border/50 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-xl font-extrabold flex items-center gap-2">
                <Scale className="w-5 h-5 text-primary" /> VS Comparison
              </h2>
              <button onClick={() => setShowCompareModal(false)} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/70 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-[80px_1fr_1fr] md:grid-cols-[120px_1fr_1fr] gap-4 mb-8">
                {/* Headers */}
                <div className="flex flex-col justify-end pb-4 font-bold text-xs text-muted-foreground tracking-wider uppercase">Specs</div>
                {compareList.map((p, i) => (
                  <div key={p.id} className="text-center">
                    <img src={p.image} alt={p.name} className="h-24 mx-auto object-contain mb-3 drop-shadow-md" />
                    <div className="text-xs text-primary font-bold uppercase mb-1">{p.brand}</div>
                    <h3 className="font-bold text-sm md:text-base leading-tight mb-2">{p.name}</h3>
                    <div className="text-xl font-black">{p.priceDisplay}</div>
                  </div>
                ))}

                {/* Rows */}
                {[
                  { label: "Processor", key: "processor" },
                  { label: "Display", key: "display" },
                  { label: "Camera", key: "camera" },
                  { label: "Battery", key: "battery" },
                  { label: "Charging", key: "charging" },
                  { label: "Software", key: "os" }
                ].map((spec, i) => (
                  <React.Fragment key={spec.key}>
                     <div className={`flex items-center text-xs font-bold text-muted-foreground uppercase p-3 rounded-l-xl ${i%2===0 ? 'bg-secondary/30' : ''}`}>{spec.label}</div>
                     <div className={`flex items-center justify-center text-center p-3 text-sm font-semibold ${i%2===0 ? 'bg-secondary/30' : ''}`}>{compareList[0].specs[spec.key as keyof Phone['specs']]}</div>
                     <div className={`flex items-center justify-center text-center p-3 text-sm font-semibold rounded-r-xl ${i%2===0 ? 'bg-secondary/30' : ''}`}>{compareList[1].specs[spec.key as keyof Phone['specs']]}</div>
                  </React.Fragment>
                ))}
              </div>

              {/* Pros Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {compareList.map(p => (
                  <div key={p.id} className="border border-border/50 rounded-2xl p-4 bg-secondary/10">
                    <h4 className="font-bold text-sm mb-3 border-b border-border/50 pb-2">{p.name}</h4>
                    <div className="text-xs font-bold text-emerald-500 mb-2">PROS</div>
                    <ul className="mb-4 space-y-1.5 text-xs text-muted-foreground">{p.pros.map((pro, i) => <li key={i}>✓ {pro}</li>)}</ul>
                    <div className="text-xs font-bold text-red-500 mb-2">CONS</div>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">{p.cons.map((con, i) => <li key={i}>✗ {con}</li>)}</ul>
                  </div>
                ))}
              </div>

              {/* Verdict */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
                 <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">कौन सा लें?</h4>
                 <p className="text-sm md:text-base font-semibold leading-relaxed">
                   अगर आप <span className="text-primary font-bold">{compareList[0].highlights[0]}</span> ढूंढ रहे हैं, तो <span className="font-bold">{compareList[0].name}</span> pick करें।<br/><br/>
                   लेकिन अगर <span className="text-primary font-bold">{compareList[1].highlights[0]}</span> priority है, तो <span className="font-bold">{compareList[1].name}</span> बेहतर choice है।
                 </p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Blog Links */}
      <div className="mt-16 pt-12 border-t border-border/30">
        <h2 className="text-2xl font-bold text-center mb-8">📖 Budget-wise Expert Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { budget: 'Under ₹20,000', desc: '₹20K के अंदर India के सबसे अच्छे phones — 2026', link: '/blog/best-phones-under-20000-india-2026', color: 'from-emerald-500/10' },
            { budget: 'Under ₹30,000', desc: 'Mid-range phones जो Flagship जैसा experience देते हैं', link: '/blog/best-phones-under-30000-india-2026', color: 'from-blue-500/10' },
            { budget: 'Under ₹50,000', desc: 'Premium phones बिना Flagship price के', link: '/blog/best-phones-under-50000-india-2026', color: 'from-purple-500/10' },
          ].map(item => (
            <Link key={item.budget} href={item.link}
              className={`group bg-gradient-to-br ${item.color} to-transparent border border-border/40 hover:border-primary/50 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300`}>
              <div className="text-lg font-black text-foreground mb-2 group-hover:text-primary transition-colors">{item.budget}</div>
              <div className="text-sm text-muted-foreground mb-4">{item.desc}</div>
              <span className="text-xs font-bold text-primary">पूरा Guide पढ़ें →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
