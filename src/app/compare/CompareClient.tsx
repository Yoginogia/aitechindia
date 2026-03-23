'use client';

import { useState, useRef, useEffect } from "react";
import { Search, Info, Smartphone, CheckCircle2, ShoppingCart, TrendingUp, AlertTriangle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PHONES = [
  {
    id: "samsung-s26-ultra",
    name: "Samsung Galaxy S26 Ultra",
    price: "₹1,39,999",
    score: 9.0,
    badge: "Best Overall",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=300&q=80",
    specs: {
      camera:    { value: "200MP AI Quad", score: 10 },
      battery:   { value: "5000mAh", score: 8 },
      ram:       { value: "12GB / 16GB", score: 9 },
      display:   { value: "6.9\" AMOLED 120Hz", score: 10 },
      charging:  { value: "60W Wired + 25W Wireless", score: 8 },
      processor: { value: "Snapdragon 8 Elite Gen 5", score: 10 },
      storage:   { value: "256GB / 512GB / 1TB", score: 10 },
      os:        { value: "Android 16 (7 yrs OS)", score: 10 },
    },
    pros: ["Privacy Display feature", "S Pen included", "Best-in-class AI camera", "Gorilla Armor 2"],
    cons: ["Heavy at 228g", "60W charging is slow vs rivals", "Very expensive"],
    verdict: "2026 ka sabse feature-rich Android flagship. Ultimate power users ke liye #1 pasand.",
    amazon: "https://amzn.to/s26ultra", flipkart: "https://flipkart.com/s26ultra",
  },
  {
    id: "xiaomi-17-ultra",
    name: "Xiaomi 17 Ultra",
    price: "₹1,39,999",
    score: 9.1,
    badge: "Best Camera",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=300&q=80",
    specs: {
      camera:    { value: "200MP Leica 1-inch", score: 10 },
      battery:   { value: "6000mAh", score: 9 },
      ram:       { value: "16GB", score: 10 },
      display:   { value: "6.73\" LTPO AMOLED 120Hz", score: 10 },
      charging:  { value: "90W Wired + 50W Wireless", score: 10 },
      processor: { value: "Snapdragon 8 Elite Gen 5", score: 10 },
      storage:   { value: "512GB / 1TB", score: 9 },
      os:        { value: "HyperOS 3 (Android 16)", score: 8 },
    },
    pros: ["Mechanical continuous zoom", "1-inch Leica sensor", "90W ultra-fast charging", "Monster 6000mAh battery"],
    cons: ["HyperOS bloatware", "Limited service centers", "Extremely bulky camera bump"],
    verdict: "Camera mein koi match nahi. Photography enthusiasts ke liye undisputed king of 2026.",
    amazon: "https://amzn.to/xiaomi17ultra", flipkart: "https://flipkart.com/xiaomi17ultra",
  },
  {
    id: "oneplus-15",
    name: "OnePlus 15",
    price: "₹72,999",
    score: 8.6,
    badge: "Flagship Killer",
    image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=300&q=80",
    specs: {
      camera:    { value: "50MP Hasselblad Triple", score: 8 },
      battery:   { value: "6100mAh", score: 9 },
      ram:       { value: "12GB / 16GB", score: 9 },
      display:   { value: "6.82\" BOE LTPO OLED", score: 9 },
      charging:  { value: "100W Wired + 50W Wireless", score: 10 },
      processor: { value: "Snapdragon 8 Elite Gen 5", score: 10 },
      storage:   { value: "256GB / 512GB", score: 8 },
      os:        { value: "OxygenOS 15", score: 9 },
    },
    pros: ["100W insane fast charging", "Hasselblad tuning", "Clean OxygenOS", "Premium glass-metal build"],
    cons: ["Camera falls short of Ultra rivals", "Plastic frame on base variant"],
    verdict: "Best mid-flagship value. 0-100% sirf 28 minutes mein. Android purists ki first choice.",
    amazon: "https://amzn.to/oneplus15", flipkart: "https://flipkart.com/oneplus15",
  },
  {
    id: "oneplus-15r",
    name: "OnePlus 15R",
    price: "₹51,999",
    score: 8.2,
    badge: "Best Value",
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=300&q=80",
    specs: {
      camera:    { value: "50MP Triple", score: 7 },
      battery:   { value: "7400mAh", score: 10 },
      ram:       { value: "12GB", score: 8 },
      display:   { value: "6.7\" AMOLED 120Hz", score: 8 },
      charging:  { value: "80W SuperVOOC", score: 9 },
      processor: { value: "Snapdragon 8s Gen 4", score: 8 },
      storage:   { value: "128GB / 256GB", score: 7 },
      os:        { value: "OxygenOS 15", score: 9 },
    },
    pros: ["7400mAh monster battery", "80W fast charging", "Clean software", "Excellent thermal management"],
    cons: ["Average secondary cameras", "Not using full Gen 5 flagship chip"],
    verdict: "Battery enthusiasts aur travelers ke liye perfect. Value for money aspect is unbeatable.",
    amazon: "https://amzn.to/oneplus15r", flipkart: "https://flipkart.com/oneplus15r",
  },
  {
    id: "nothing-phone-4a-pro",
    name: "Nothing Phone (4a) Pro",
    price: "₹48,990",
    score: 8.0,
    badge: "Design Pick",
    image: "https://images.unsplash.com/photo-1707166127113-d4d1da32ebfc?auto=format&fit=crop&w=300&q=80",
    specs: {
      camera:    { value: "50MP + 50MP Dual", score: 8 },
      battery:   { value: "5200mAh", score: 8 },
      ram:       { value: "12GB", score: 8 },
      display:   { value: "6.67\" AMOLED 120Hz", score: 8 },
      charging:  { value: "65W Wired", score: 8 },
      processor: { value: "Snapdragon 7s Gen 3", score: 7 },
      storage:   { value: "256GB", score: 8 },
      os:        { value: "Nothing OS 3.5", score: 9 },
    },
    pros: ["New Glyph Bar LED unique", "50MP telephoto lens added", "Very clean fast software", "Eye-catching transparent look"],
    cons: ["Mid-range processor vs rivals", "No wireless charging", "Limited offline presence"],
    verdict: "Looks and brains dono hain. Glyph notifications daily use mein kaafi handy lagti hain.",
    amazon: "https://amzn.to/nothing4apro", flipkart: "https://flipkart.com/nothing4apro",
  },
  {
    id: "iqoo-15r",
    name: "iQOO 15R",
    price: "₹44,998",
    score: 8.3,
    badge: "Best Gaming",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=300&q=80",
    specs: {
      camera:    { value: "50MP Sony IMX882 + 8MP", score: 7 },
      battery:   { value: "6400mAh", score: 9 },
      ram:       { value: "8GB / 12GB", score: 8 },
      display:   { value: "6.77\" AMOLED 144Hz", score: 9 },
      charging:  { value: "120W FlashCharge", score: 10 },
      processor: { value: "Snapdragon 8 Gen 4", score: 9 },
      storage:   { value: "128GB / 256GB", score: 7 },
      os:        { value: "FunTouchOS 15", score: 7 },
    },
    pros: ["120W lightning charging", "144Hz dedicated gaming display", "Top-tier gaming performance", "6400mAh battery"],
    cons: ["FunTouchOS has bloatware", "Camera strictly average", "Bulky and heavy at 215g"],
    verdict: "Gamers ke liye best phone under ₹50K. 144Hz + 8 Gen 4 + 120W charging = absolute beast.",
    amazon: "https://amzn.to/iqoo15r", flipkart: "https://flipkart.com/iqoo15r",
  },
  {
    id: "vivo-x300-ultra",
    name: "Vivo X300 Ultra",
    price: "₹79,990",
    score: 8.8,
    badge: "Monster Specs",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80",
    specs: {
      camera:    { value: "Dual 200MP System", score: 10 },
      battery:   { value: "7000mAh", score: 10 },
      ram:       { value: "12GB / 16GB", score: 9 },
      display:   { value: "6.82\" LTPO OLED 2K", score: 9 },
      charging:  { value: "120W Wired", score: 10 },
      processor: { value: "Snapdragon 8 Elite Gen 5", score: 10 },
      storage:   { value: "256GB / 512GB", score: 9 },
      os:        { value: "OriginOS 5", score: 7 },
    },
    pros: ["Dual 200MP cameras", "7000mAh massive battery outlasts everything", "120W charging", "IP69 waterproof"],
    cons: ["OS UX can be polarizing", "Heavy at 230g", "India launch still pending (Q2)"],
    verdict: "Battery + Camera ka ultimate pinnacle. Power users ke liye dream device. Worth the wait.",
    amazon: "https://amzn.to/vivox300ultra", flipkart: "https://flipkart.com/vivox300ultra",
  },
  {
    id: "redmi-note-15-pro",
    name: "Xiaomi Redmi Note 15 Pro",
    price: "₹29,999",
    score: 7.8,
    badge: "Budget King",
    image: "https://images.unsplash.com/photo-1621330396167-e4acf44122d6?auto=format&fit=crop&w=300&q=80",
    specs: {
      camera:    { value: "200MP OIS Primary", score: 9 },
      battery:   { value: "5500mAh", score: 8 },
      ram:       { value: "8GB / 12GB", score: 8 },
      display:   { value: "6.67\" AMOLED 120Hz", score: 8 },
      charging:  { value: "90W HyperCharge", score: 9 },
      processor: { value: "MediaTek Dimensity 7300", score: 7 },
      storage:   { value: "128GB / 256GB", score: 7 },
      os:        { value: "HyperOS (Android 16)", score: 7 },
    },
    pros: ["200MP camera under ₹30K", "90W fast charging", "Beautiful bright AMOLED display", "IP64 splash resistant"],
    cons: ["OS has pre-installed ads", "Mid-range processor only", "Useless 2MP macro lens"],
    verdict: "₹30K mein 200MP camera gives it unmatched value. Budget camera lovers ke liye clear winner.",
    amazon: "https://amzn.to/redminote15pro", flipkart: "https://flipkart.com/redminote15pro",
  },
];

const RELATED = [
  { a: "Samsung Galaxy S26 Ultra", b: "Xiaomi 17 Ultra" },
  { a: "Nothing Phone (4a) Pro", b: "iQOO 15R" },
  { a: "OnePlus 15", b: "Vivo X300 Ultra" },
];

const SPEC_LABELS: Record<string, string> = {
  camera: "Camera", battery: "Battery", ram: "RAM",
  display: "Display", charging: "Charging",
  processor: "Processor", storage: "Storage", os: "Software",
};

type PhoneType = typeof PHONES[0] | null;

function ScoreRing({ score }: { score: number }) {
  const isExcellent = score >= 8.5;
  const isGood = score >= 7.5;
  
  return (
    <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 shrink-0">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
        <path
          className="stroke-muted"
          strokeWidth="3"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={`${isExcellent ? 'stroke-primary' : isGood ? 'stroke-amber-500' : 'stroke-red-500'} transition-all duration-1000 ease-out`}
          strokeWidth="3"
          strokeDasharray={`${score * 10}, 100`}
          strokeLinecap="round"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <span className={`text-sm md:text-base font-bold ${isExcellent ? 'text-primary' : isGood ? 'text-amber-500' : 'text-red-500'}`}>
          {score.toFixed(1)}
        </span>
      </div>
    </div>
  );
}

function PhoneSearch({ value, onChange, placeholder }: { value: PhoneType, onChange: (p: PhoneType) => void, placeholder: string }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState(value?.name || "");
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const h = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  
  useEffect(() => {
      if (value) setQ(value.name);
  }, [value]);
  
  const filtered = PHONES.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase()) && p !== value
  );
  
  return (
    <div ref={ref} className="relative flex-1 min-w-[240px]">
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <input 
          value={q}
          onChange={e => { setQ(e.target.value); setOpen(true); onChange(null); }}
          onFocus={() => { setOpen(true); setQ(""); }}
          placeholder={placeholder}
          className="w-full pl-11 pr-4 py-3.5 bg-secondary/30 hover:bg-secondary/50 focus:bg-background border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl text-sm font-medium outline-none transition-all shadow-sm"
        />
      </div>
      
      {open && filtered.length > 0 && (
        <div className="absolute top-[calc(100%+8px)] left-0 right-0 glass backdrop-blur-xl border border-border/50 rounded-xl z-50 overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-2">
          <div className="max-h-[300px] overflow-y-auto">
            {filtered.map(p => (
              <div 
                key={p.id}
                onClick={() => { onChange(p); setQ(p.name); setOpen(false); }}
                className="flex items-center justify-between px-4 py-3.5 cursor-pointer hover:bg-primary/10 border-b border-border/30 last:border-0 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 overflow-hidden">
                    <Smartphone className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-semibold text-sm group-hover:text-primary transition-colors">{p.name}</span>
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">{p.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CompareClient() {
  const [phoneA, setPhoneA] = useState<PhoneType>(PHONES[0]);
  const [phoneB, setPhoneB] = useState<PhoneType>(PHONES[1]);

  const winner = phoneA && phoneB ? (phoneA.score >= phoneB.score ? phoneA : phoneB) : null;
  const getWinner = (key: string) => {
    if (!phoneA || !phoneB) return null;
    const sa = phoneA.specs[key as keyof typeof phoneA.specs]?.score ?? 0, sb = phoneB.specs[key as keyof typeof phoneB.specs]?.score ?? 0;
    if (sa === sb) return "tie";
    return sa > sb ? "a" : "b";
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20 animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <div className="text-center mb-12 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 hover:bg-primary/20 transition-colors">
          <Smartphone className="h-4 w-4" />
          Ultimate Phone Compare Tool
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
          Kaunsa smartphone <span className="gradient-text">lena chahiye?</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Select any two phones below to compare detailed specs, read pros and cons, and see our expert AITechNews verdict based on real-world tests.
        </p>
        <div className="mt-6 flex justify-center gap-4 text-xs font-medium text-muted-foreground">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {PHONES.length} Phones Listed</span>
          <span className="flex items-center gap-1.5"><TrendingUp className="h-3.5 w-3.5 text-primary" /> Latest 2026 Models</span>
        </div>
      </div>

      {/* Selectors */}
      <div className="flex flex-col md:flex-row items-center gap-4 bg-secondary/20 p-4 md:p-6 rounded-3xl border border-border/50 shadow-sm mb-12">
        <PhoneSearch value={phoneA} onChange={setPhoneA} placeholder="Select first smartphone..." />
        
        <div className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-background border shadow-sm border-border z-10 -my-2 md:-mx-2 text-muted-foreground font-black text-xs tracking-widest relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-muted-foreground to-foreground">VS</span>
          <div className="absolute inset-[-4px] rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
        </div>
        
        <PhoneSearch value={phoneB} onChange={setPhoneB} placeholder="Select second smartphone..." />
      </div>

      {phoneA && phoneB && (
        <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-500">
          
          {/* Quick Score Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[phoneA, phoneB].map((p) => (
              <div 
                key={p.id} 
                className={`relative p-6 glass rounded-3xl border transition-all duration-300 flex flex-col md:flex-row items-center gap-5 hover:-translate-y-1 hover:shadow-xl ${
                  p === winner 
                    ? "border-primary/50 shadow-primary/10" 
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                {/* Winner Crown */}
                {p === winner && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-primary to-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg shadow-primary/30 border border-white/20 whitespace-nowrap z-10">
                    AITechNews Winner 🏆
                  </div>
                )}
                
                <div className="w-full md:w-auto flex justify-center">
                  <div className="relative w-28 h-28 mix-blend-multiply dark:mix-blend-normal rounded-xl overflow-hidden glass p-2 border border-border/50">
                    <Image src={p.image} alt={p.name} fill className="object-contain p-2 hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                
                <ScoreRing score={p.score} />
                
                <div className="flex-1 min-w-0">
                  {p.badge && (
                    <span className="inline-block px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-wider mb-2">
                      {p.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-bold tracking-tight text-foreground truncate">{p.name}</h3>
                  <div className="text-primary font-black mt-1 text-lg">{p.price}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Verdict Box */}
          <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <CheckCircle2 className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Expert Verdict
              </div>
              <h4 className="text-2xl font-black text-foreground mb-3">
                {winner!.name} takes the crown.
              </h4>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {winner!.verdict}
              </p>
            </div>
          </div>

          {/* Detailed Spec Comparison */}
          <div className="glass rounded-3xl border border-border/50 overflow-hidden shadow-sm">
            <div className="grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-secondary/50 border-b border-border/50 px-4 md:px-6 py-4">
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Specifications</div>
              <div className="text-xs md:text-sm font-bold text-center truncate px-2">{phoneA.name}</div>
              <div className="text-xs md:text-sm font-bold text-center truncate px-2">{phoneB.name}</div>
            </div>
            
            <div className="divide-y divide-border/30">
              {Object.keys(SPEC_LABELS).map((key, index) => {
                const specKey = key as keyof typeof phoneA.specs;
                const w = getWinner(specKey);
                return (
                  <div 
                    key={key} 
                    className={`grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] px-4 md:px-6 py-4 items-center transition-colors hover:bg-secondary/20 ${index % 2 === 0 ? 'bg-background/30' : ''}`}
                  >
                    <div className="text-xs md:text-sm font-semibold text-muted-foreground">
                      {SPEC_LABELS[key]}
                    </div>
                    
                    <div className={`text-xs md:text-sm text-center px-2 py-1.5 rounded-lg mx-1 flex flex-col items-center justify-center min-h-[44px] ${w === "a" ? "bg-primary/10 text-primary font-bold" : "text-foreground"}`}>
                      {phoneA.specs[specKey]?.value}
                      {w === "a" && <span className="block mt-1"><CheckCircle2 className="w-3.5 h-3.5" /></span>}
                    </div>
                    
                    <div className={`text-xs md:text-sm text-center px-2 py-1.5 rounded-lg mx-1 flex flex-col items-center justify-center min-h-[44px] ${w === "b" ? "bg-primary/10 text-primary font-bold" : "text-foreground"}`}>
                      {phoneB.specs[specKey]?.value}
                      {w === "b" && <span className="block mt-1"><CheckCircle2 className="w-3.5 h-3.5" /></span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[phoneA, phoneB].map((p) => (
              <div key={p.id} className="space-y-4">
                <div className="glass rounded-2xl border border-border/50 p-5 p-6">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">
                    <CheckCircle2 className="w-4 h-4" /> {p.name.split(" ")[0]} Pros
                  </h4>
                  <ul className="space-y-3">
                    {p.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-emerald-500/50 mt-0.5">•</span>
                        <span className="leading-snug">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="glass rounded-2xl border border-border/50 p-5 p-6 bg-red-500/5">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-red-500 uppercase tracking-widest mb-4">
                    <AlertTriangle className="w-4 h-4" /> Cons
                  </h4>
                  <ul className="space-y-3">
                    {p.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-red-500/50 mt-0.5">•</span>
                        <span className="leading-snug">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Buying Links */}
          <div className="glass rounded-3xl border border-border/50 p-6 md:p-8">
            <h3 className="text-lg font-bold flex items-center gap-2 mb-6">
              <ShoppingCart className="w-5 h-5 text-primary" /> Where to buy?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[phoneA, phoneB].map((p) => (
                <div key={p.id} className="bg-secondary/30 p-4 rounded-2xl border border-border/50">
                  <div className="text-xs font-semibold text-muted-foreground mb-3">{p.name} Prices</div>
                  <div className="flex gap-3">
                    <a href={p.amazon} target="_blank" rel="noopener noreferrer" 
                       className="flex-1 flex items-center justify-center gap-2 bg-[#FF9900] hover:bg-[#FF9900]/90 text-black font-bold py-3 px-4 rounded-xl transition-transform hover:-translate-y-0.5 active:translate-y-0 text-sm shadow-sm">
                      Amazon
                    </a>
                    <a href={p.flipkart} target="_blank" rel="noopener noreferrer" 
                       className="flex-1 flex items-center justify-center gap-2 bg-[#2874F0] hover:bg-[#2874F0]/90 text-white font-bold py-3 px-4 rounded-xl transition-transform hover:-translate-y-0.5 active:translate-y-0 text-sm shadow-sm">
                      Flipkart
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Suggested Comparisons */}
      <div className="mt-16 pt-12 border-t border-border/30">
        <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Popular Comparisons</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {RELATED.map((r, i) => (
            <button
              key={i}
              onClick={() => {
                const a = PHONES.find(p => p.name.includes(r.a.split(" ")[1])) || PHONES.find(p=>p.name===r.a);
                const b = PHONES.find(p => p.name.includes(r.b.split(" ")[1])) || PHONES.find(p=>p.name===r.b);
                if(a) setPhoneA(a); 
                if(b) setPhoneB(b);
                window.scrollTo({top: 0, behavior: "smooth"});
              }}
              className="group text-left p-5 glass rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">VS</span>
              </div>
              <div className="font-semibold text-sm text-foreground/90 leading-tight">
                {r.a}
              </div>
              <div className="text-muted-foreground text-xs my-1">vs</div>
              <div className="font-semibold text-sm text-foreground/90 leading-tight">
                {r.b}
              </div>
              <div className="mt-4 text-[11px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                Compare Now &rarr;
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
