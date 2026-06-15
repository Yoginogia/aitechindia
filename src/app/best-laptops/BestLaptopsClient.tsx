'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Cpu, MemoryStick, Monitor, Gamepad2, BatteryCharging, ShoppingCart, Sparkles, Filter, ChevronRight, CheckCircle2, X, Check } from 'lucide-react';

export interface LaptopSpec {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    graphics: string;
    battery: string;
    os: string;
}

export interface Laptop {
    id: string; // also the image filename minus extension
    name: string;
    brand: string;
    category: 'student' | 'gaming' | 'office' | 'creator';
    price: number;
    amazonUrl: string;
    flipkartUrl: string;
    rating: number;
    specs: LaptopSpec;
    tags: string[];
    pros: string[];
    cons: string[];
    verdict: string;
    ports: string[];
}

import ALL_LAPTOPS_DATA from '@/data/laptops.json';
const ALL_LAPTOPS = ALL_LAPTOPS_DATA as Laptop[];

const LAPTOPS_WITH_REVIEWS = new Set<string>([
    'asus-vivobook-15-2026',
    'honor-magicbook-x14-pro',
    'lenovo-thinkpad-e14-gen6',
    'dell-inspiron-14-plus',
    'acer-predator-helios-neo-16',
    'lenovo-loq-2026',
    'apple-macbook-air-m3',
    'asus-zenbook-14-oled-2026'
]);

export default function BestLaptopsClient() {
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'student' | 'gaming' | 'office' | 'creator'>('all');
    const [selectedBudget, setSelectedBudget] = useState<number>(Infinity);
    const [compareList, setCompareList] = useState<string[]>([]);
    const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

    const filteredLaptops = ALL_LAPTOPS.filter(laptop => {
        const matchCategory = selectedCategory === 'all' || laptop.category === selectedCategory;
        const matchBudget = laptop.price <= selectedBudget;
        return matchCategory && matchBudget;
    }).sort((a, b) => b.rating - a.rating); // Best rated first

    return (
        <div className="min-h-screen bg-background selection:bg-primary/20">
            {/* HER0 SECTION */}
            <div className="relative pt-20 pb-12 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#311042] text-white">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/40 blur-[120px] rounded-full pointer-events-none"></div>
                
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-xl text-sm font-bold tracking-wider">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        AITechNews Ultimate Laptop Guide 2026
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-sm">
                        Best Laptops in India
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100/80 mb-10 leading-relaxed font-medium">
                        हमने 50+ laptops compare किये हैं ताकि आपको अपने specific use-case के लिए बेस्ट laptop मिल सके। <strong className="text-white">Confused about specs?</strong> हमने सब सिंपल कर दिया है।
                    </p>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* FILTERS */}
                <div className="flex flex-col xl:flex-row gap-6 mb-12 items-center xl:items-start justify-between bg-secondary/50 p-6 rounded-3xl border border-border/50 shadow-sm backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row gap-4 items-center w-full xl:w-auto">
                        <span className="font-bold whitespace-nowrap flex items-center gap-2 px-2 text-foreground/80">
                            <Filter className="w-5 h-5 text-primary" /> Usage:
                        </span>
                        <div className="flex flex-wrap flex-1 gap-2 p-1.5 bg-background border border-border/50 rounded-2xl w-full sm:w-auto">
                            {[
                                { id: 'all', label: 'All Laptops', icon: '💻' },
                                { id: 'student', label: 'College/Student', icon: '🎓' },
                                { id: 'office', label: 'Office/Business', icon: '🏢' },
                                { id: 'gaming', label: 'Gaming', icon: '🎮' },
                                { id: 'creator', label: 'Creator/Editing', icon: '🎨' },
                            ].map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id as any)}
                                    className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                                        selectedCategory === cat.id
                                            ? 'bg-primary text-white shadow-md shadow-primary/20 scale-100'
                                            : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                                    }`}
                                >
                                    <span>{cat.icon}</span> <span className="hidden sm:inline">{cat.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center w-full xl:w-auto">
                        <span className="font-bold whitespace-nowrap px-2 text-foreground/80">Budget:</span>
                        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                            {[
                                { value: Infinity, label: 'Any Budget' },
                                { value: 50000, label: 'Under ₹50k' },
                                { value: 75000, label: 'Under ₹75k' },
                                { value: 100000, label: 'Under ₹1 Lakh' },
                            ].map((bgt) => (
                                <button
                                    key={bgt.value}
                                    onClick={() => setSelectedBudget(bgt.value)}
                                    className={`flex-1 sm:flex-none px-5 py-2.5 rounded-2xl font-bold text-sm transition-all border ${
                                        selectedBudget === bgt.value
                                            ? 'border-primary bg-primary/10 text-primary'
                                            : 'border-border/50 bg-background text-muted-foreground hover:border-primary/50 hover:bg-primary/5'
                                    }`}
                                >
                                    {bgt.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RESULTS */}
                <div className="flex justify-between items-end mb-8 px-2 border-b border-border/40 pb-4">
                    <h2 className="text-2xl font-extrabold tracking-tight">
                        {selectedCategory === 'all' ? 'Top Laptops' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Laptops`}
                        {selectedBudget !== Infinity && ` Under ₹${(selectedBudget / 1000)}k`}
                    </h2>
                    <p className="text-muted-foreground text-sm font-medium bg-secondary px-3 py-1 rounded-full border border-border/50">
                        {filteredLaptops.length} Laptops Found
                    </p>
                </div>

                {/* LAPTOP GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredLaptops.map((laptop) => (
                        <div key={laptop.id} className="group bg-card rounded-[2rem] border border-border/40 overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 relative flex flex-col md:flex-row">
                            {/* Compare Check Box top-right */}
                            <label className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-border/50 shadow-sm cursor-pointer hover:border-primary/50 transition-all group/chk">
                                <input 
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary cursor-pointer"
                                    checked={compareList.includes(laptop.id)}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            if (compareList.length < 3) setCompareList([...compareList, laptop.id])
                                            else alert("You can compare up to 3 laptops at a time.");
                                        } else {
                                            setCompareList(compareList.filter(id => id !== laptop.id))
                                        }
                                    }}
                                />
                                <span className="text-xs font-bold whitespace-nowrap text-foreground group-hover/chk:text-primary">Compare</span>
                            </label>

                            {/* Tags layer top-left */}
                            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 pointer-events-none">
                                {laptop.tags.map((tag, i) => (
                                    <span key={i} className="bg-background/80 backdrop-blur-md text-foreground text-[10px] font-bold px-2.5 py-1 rounded-lg border border-border/50 shadow-sm">
                                        ✨ {tag}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Image Section */}
                            <div className="w-full md:w-[40%] bg-gradient-to-br from-secondary/50 to-secondary p-8 flex items-center justify-center relative overflow-hidden shrink-0">
                                <div className="absolute inset-0 bg-grid opacity-10"></div>
                                <img
                                    src={`/images/laptops/${laptop.id}.jpg`}
                                    alt={laptop.name}
                                    className="w-full h-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 z-10"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1531297172867-4d4ce2e2640a?auto=format&fit=crop&w=500&q=80';
                                        (e.target as HTMLImageElement).style.opacity = '0.5';
                                    }}
                                />
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="bg-primary/90 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                                        ⭐ {laptop.rating} / 5.0
                                    </span>
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="p-6 md:p-8 flex flex-col justify-between flex-1 bg-background relative z-10">
                                <div>
                                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-5 leading-tight tracking-tight">
                                        {laptop.name}
                                    </h3>

                                    {/* Detailed Specs Grid */}
                                    <div className="grid grid-cols-1 gap-y-3 gap-x-4 mb-6">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 mt-0.5"><Cpu className="w-4 h-4" /></div>
                                            <div>
                                                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-0.5">Processor</p>
                                                <p className="text-sm font-semibold text-foreground/90">{laptop.specs.processor}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-4 pt-1">
                                            <div className="flex items-start gap-3 w-full sm:w-[45%]">
                                                <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center shrink-0 mt-0.5"><MemoryStick className="w-4 h-4" /></div>
                                                <div>
                                                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-0.5">RAM & Storage</p>
                                                    <p className="text-sm font-semibold text-foreground/90 leading-tight">{laptop.specs.ram} <br/> <span className="text-xs text-muted-foreground font-medium">{laptop.specs.storage}</span></p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 w-full sm:w-[45%]">
                                                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0 mt-0.5"><Monitor className="w-4 h-4" /></div>
                                                <div>
                                                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-0.5">Display</p>
                                                    <p className="text-sm font-semibold text-foreground/90 leading-tight">{laptop.specs.display}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 pt-1">
                                            <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 mt-0.5"><Gamepad2 className="w-4 h-4" /></div>
                                            <div>
                                                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-0.5">Graphics</p>
                                                <p className="text-sm font-semibold text-foreground/90">{laptop.specs.graphics}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Ports & Battery Icon Strip */}
                                    <div className="flex flex-wrap gap-2 mb-6 mt-1">
                                        <div className="bg-secondary/60 text-foreground text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 border border-primary/20 shadow-sm">
                                            <BatteryCharging className="w-3.5 h-3.5 text-green-500" /> {laptop.specs.battery.split(',')[0].split('(')[0].trim()}
                                        </div>
                                        {laptop.ports && laptop.ports.map((port, i) => (
                                            <div key={i} className="bg-secondary/30 text-muted-foreground text-[10px] font-bold px-2 py-1 rounded-md border border-border/40 flex items-center shadow-sm">
                                                {port}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Verdict Block */}
                                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-5">
                                        <h4 className="text-sm font-bold text-primary mb-1 flex items-center gap-1.5"><Sparkles className="w-4 h-4" /> Our Verdict</h4>
                                        <p className="text-sm text-foreground/80 leading-snug">{laptop.verdict}</p>
                                    </div>

                                    {/* Pros & Cons Block */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-secondary/20 p-4 rounded-xl border border-border/40">
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-green-500 mb-2 flex items-center gap-1">
                                                <CheckCircle2 className="w-3.5 h-3.5" /> Pros
                                            </h4>
                                            <ul className="space-y-1">
                                                {laptop.pros.map((pro, i) => (
                                                    <li key={i} className="text-xs font-medium text-foreground/80 flex items-start gap-1.5"><span className="text-green-500 font-bold mt-[1px]">+</span> <span className="leading-tight">{pro}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2 flex items-center gap-1">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> Cons
                                            </h4>
                                            <ul className="space-y-1">
                                                {laptop.cons.map((con, i) => (
                                                    <li key={i} className="text-xs font-medium text-foreground/80 flex items-start gap-1.5"><span className="text-red-500 font-bold mt-[1px]">-</span> <span className="leading-tight">{con}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-border/50">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-2xl font-black">₹{laptop.price.toLocaleString('en-IN')}</span>
                                        <span className="text-xs text-muted-foreground/60 line-through">₹{(laptop.price * 1.3).toLocaleString('en-IN')}</span>
                                    </div>
                                    {LAPTOPS_WITH_REVIEWS.has(laptop.id) && (
                                        <div className="mb-4">
                                            <Link href={`/blog/${laptop.id}-review`} className="w-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all border border-border/40">
                                                📖 Read Detailed Review <ChevronRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    )}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <a href={laptop.amazonUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#ff9900] hover:bg-[#ff9900]/90 text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-[#ff9900]/20 hover:-translate-y-0.5">
                                            Buy on Amazon
                                        </a>
                                        <a href={laptop.flipkartUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#047BD5] hover:bg-[#047BD5]/90 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-[#047BD5]/20 hover:-translate-y-0.5">
                                            Buy on Flipkart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {filteredLaptops.length === 0 && (
                        <div className="col-span-full py-20 text-center border-2 border-dashed border-border/50 rounded-3xl bg-secondary/20">
                            <div className="w-20 h-20 mx-auto relative mb-6 grayscale opacity-50">
                                <span className="text-6xl">💸</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">No laptops found in this range</h3>
                            <p className="text-muted-foreground max-w-md mx-auto">Try adjusting your budget or selecting a different category to see more options.</p>
                            <button onClick={() => { setSelectedCategory('all'); setSelectedBudget(Infinity) }} className="mt-6 font-bold text-primary hover:underline">
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* QUICK BUYING GUIDE */}
            <div className="bg-secondary/40 border-y border-border/50 mt-20">
                <div className="container mx-auto px-4 py-16 max-w-5xl">
                    <h2 className="text-3xl font-extrabold text-center mb-10">💡 Laptop Buying Guide (2026)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-background p-6 rounded-2xl border border-border/40 shadow-sm">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Processor Rule</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">हमेशा लेटेस्ट जेनरेशन चुनें। 2026 में Intel 13th/14th Gen या Core Ultra Series और AMD Ryzen 7000/8000 series सबसे बेस्ट परफॉरमेंस देते हैं।</p>
                        </div>
                        <div className="bg-background p-6 rounded-2xl border border-border/40 shadow-sm">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> RAM & Storage</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">8GB RAM अब Outdated हो चुका है। एक smooth experience के लिए कम से कम 16GB LPDDR5 RAM और 512GB PCIe Gen4 SSD होना अनिवार्य है।</p>
                        </div>
                        <div className="bg-background p-6 rounded-2xl border border-border/40 shadow-sm">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Display Types</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">Creators के लिए OLED (100% DCI-P3) ज़रूरी है। Gamers को fast IPS (144Hz+) चाहिए। और Office/Students के लिए स्टैण्डर्ड IPS (300nits) काफी है।</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMPARE WIDGET (FLOATING) */}
            {compareList.length > 0 && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl px-4 py-3 sm:px-6 sm:py-4 rounded-full flex items-center gap-4 sm:gap-6 animate-in slide-in-from-bottom-10 fade-in duration-300">
                    <div className="flex -space-x-3">
                        {compareList.map(id => {
                            const l = ALL_LAPTOPS.find(x => x.id === id);
                            return l ? <img key={id} src={`/images/laptops/${id}.jpg`} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background object-cover bg-secondary" title={l.name} alt={l.name} /> : null
                        })}
                    </div>
                    <div className="flex-col hidden sm:flex">
                        <span className="font-bold text-sm tracking-tight">{compareList.length} Selected</span>
                        <span className="text-[10px] text-muted-foreground font-medium">Max 3 allowed</span>
                    </div>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setCompareList([])}
                            className="px-3 py-2 rounded-xl text-xs font-bold text-muted-foreground hover:bg-secondary transition-all"
                        >Clear</button>
                        <button 
                            onClick={() => setIsCompareModalOpen(true)}
                            disabled={compareList.length < 2}
                            className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center gap-1.5 ${compareList.length < 2 ? 'bg-secondary text-muted-foreground cursor-not-allowed' : 'bg-primary text-white hover:scale-105 shadow-primary/25'}`}
                        >
                            Compare <Monitor className="w-4 h-4 hidden sm:block" />
                        </button>
                    </div>
                </div>
            )}

            {/* COMPARE MODAL */}
            {isCompareModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-card w-full max-w-6xl max-h-[90vh] rounded-3xl border border-border/50 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="p-4 sm:p-6 border-b border-border/50 flex justify-between items-center bg-secondary/30">
                            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2"><Filter className="w-6 h-6 text-primary" /> Feature Comparison</h2>
                            <button onClick={() => setIsCompareModalOpen(false)} className="p-2 hover:bg-secondary rounded-full transition-colors"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="p-4 sm:p-6 overflow-x-auto flex-1 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-secondary/50 [&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full">
                            <table className="w-full text-left min-w-[700px]">
                                <thead>
                                    <tr>
                                        <th className="p-3 font-semibold text-muted-foreground border-b border-border/50 w-1/4">Specs \\ Models</th>
                                        {compareList.map(id => {
                                            const l = ALL_LAPTOPS.find(x => x.id === id);
                                            return l ? (
                                                <th key={id} className="p-3 border-b border-border/50 w-1/4 align-top">
                                                    <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-3 bg-secondary/50 border border-border/50">
                                                        <img src={`/images/laptops/${id}.jpg`} alt={l.name} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
                                                    </div>
                                                    <h3 className="font-bold text-sm leading-tight text-primary mb-1">{l.name}</h3>
                                                    <p className="text-foreground font-black text-lg">₹{l.price.toLocaleString('en-IN')}</p>
                                                </th>
                                            ) : null;
                                        })}
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {[
                                        { label: 'Processor', key: 'processor', icon: Cpu },
                                        { label: 'RAM', key: 'ram', icon: MemoryStick },
                                        { label: 'Storage', key: 'storage', icon: null },
                                        { label: 'Display', key: 'display', icon: Monitor },
                                        { label: 'Graphics', key: 'graphics', icon: Gamepad2 },
                                        { label: 'Battery', key: 'battery', icon: BatteryCharging },
                                    ].map((row, idx) => (
                                        <tr key={row.key} className={idx % 2 === 0 ? 'bg-secondary/20' : ''}>
                                            <td className="p-4 border-b border-border/30 font-semibold text-muted-foreground flex items-center gap-2">
                                                {row.icon && <row.icon className="w-4 h-4 text-foreground/50" />} {row.label}
                                            </td>
                                            {compareList.map(id => {
                                                const l = ALL_LAPTOPS.find(x => x.id === id);
                                                return l ? <td key={id} className="p-4 border-b border-border/30 text-foreground/90 leading-tight border-l border-border/20">{l.specs[row.key as keyof LaptopSpec]}</td> : null;
                                            })}
                                        </tr>
                                    ))}
                                    <tr>
                                        <td className="p-4 font-semibold text-muted-foreground flex items-center gap-2">
                                            Verdict
                                        </td>
                                        {compareList.map(id => {
                                            const l = ALL_LAPTOPS.find(x => x.id === id);
                                            return l ? <td key={id} className="p-4 text-xs font-medium text-primary leading-relaxed border-l border-border/20">{l.verdict}</td> : null;
                                        })}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
