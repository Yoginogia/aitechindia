'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Cpu, MemoryStick, Monitor, Gamepad2, BatteryCharging, ShoppingCart, Sparkles, Filter, ChevronRight, CheckCircle2 } from 'lucide-react';

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
}

const ALL_LAPTOPS: Laptop[] = [
    // STUDENTS UNDER 40-50K
    {
        id: 'asus-vivobook-15-2026',
        name: 'ASUS Vivobook 15 (2026)',
        brand: 'ASUS',
        category: 'student',
        price: 42990,
        amazonUrl: 'https://www.amazon.in/s?k=ASUS+Vivobook+15+13th+gen&tag=aitechnews-21',
        flipkartUrl: 'https://www.flipkart.com/search?q=ASUS+Vivobook+15',
        rating: 4.5,
        specs: {
            processor: 'Intel Core i5-1335U (10 Cores, up to 4.6 GHz)',
            ram: '16GB LPDDR5 4800MHz',
            storage: '512GB PCIe Gen4 NVMe SSD',
            display: '15.6" FHD (1920 x 1080) IPS, 60Hz, Anti-glare',
            graphics: 'Intel Iris Xe Graphics (Integrated)',
            battery: '42WHrs, 3-cell Li-ion (Up to 7 hours)',
            os: 'Windows 11 Home + MS Office 2021 + McAfee',
        },
        tags: ['Best for College', 'Thin & Light', 'Office Included']
    },
    {
        id: 'honor-magicbook-x14-pro',
        name: 'HONOR MagicBook X14 Pro',
        brand: 'HONOR',
        category: 'student',
        price: 49999,
        amazonUrl: 'https://www.amazon.in/s?k=HONOR+MagicBook+X14+Pro&tag=aitechnews-21',
        flipkartUrl: 'https://www.flipkart.com/search?q=HONOR+MagicBook+X14+Pro',
        rating: 4.6,
        specs: {
            processor: 'Intel Core i5-13420H (High Performance)',
            ram: '16GB LPDDR4x',
            storage: '512GB PCIe NVMe SSD',
            display: '14" FHD IPS Anti-Glare, 100% sRGB, 300 nits',
            graphics: 'Intel UHD Graphics',
            battery: '60Wh (Up to 12 hours local video playback)',
            os: 'Windows 11 Home',
        },
        tags: ['Alumunium Body', '100% sRGB', 'Type-C Fast Charge']
    },
    // OFFICE / BUSINESS
    {
        id: 'lenovo-thinkpad-e14-gen6',
        name: 'Lenovo ThinkPad E14 Gen 6',
        brand: 'Lenovo',
        category: 'office',
        price: 68990,
        amazonUrl: 'https://www.amazon.in/s?k=Lenovo+ThinkPad+E14+Core+i5&tag=aitechnews-21',
        flipkartUrl: 'https://www.flipkart.com/search?q=Lenovo+ThinkPad+E14',
        rating: 4.8,
        specs: {
            processor: 'Intel Core Ultra 5 125U (AI Boost)',
            ram: '16GB DDR5 5600MHz (Upgradable)',
            storage: '1TB M.2 PCIe Gen4 TLC SSD',
            display: '14" WUXGA (1920x1200) IPS, 300 nits, Anti-glare',
            graphics: 'Intel Graphics',
            battery: '47Wh or 57Wh (Rapid Charge)',
            os: 'Windows 11 Pro',
        },
        tags: ['Military Grade', 'Best Keyboard', 'AI Processor']
    },
    {
        id: 'dell-inspiron-14-plus',
        name: 'Dell Inspiron 14 Plus (2026)',
        brand: 'Dell',
        category: 'office',
        price: 74990,
        amazonUrl: 'https://www.amazon.in/s?k=Dell+Inspiron+14+Plus&tag=aitechnews-21',
        flipkartUrl: 'https://www.flipkart.com/search?q=Dell+Inspiron+14+Plus',
        rating: 4.5,
        specs: {
            processor: 'Intel Core 7 150U',
            ram: '16GB LPDDR5x 6400 MT/s',
            storage: '1TB M.2 PCIe NVMe SSD',
            display: '14.0" 2.2K (2240x1400) 16:10, 300nits, 100% sRGB',
            graphics: 'Intel Graphics',
            battery: '64 Wh, ExpressCharge 100W',
            os: 'Windows 11 Home + MS Office 2021',
        },
        tags: ['2.2K Display', 'Premium Build', 'FHD Webcam']
    },
    // GAMING
    {
        id: 'acer-predator-helios-neo-16',
        name: 'Acer Predator Helios Neo 16',
        brand: 'Acer',
        category: 'gaming',
        price: 114999,
        amazonUrl: 'https://www.amazon.in/s?k=Acer+Predator+Helios+Neo+16+RTX+4060&tag=aitechnews-21',
        flipkartUrl: 'https://www.flipkart.com/search?q=Acer+Predator+Helios+Neo+16',
        rating: 4.7,
        specs: {
            processor: 'Intel Core i7-14700HX (20 Cores, 28 Threads)',
            ram: '16GB DDR5 5600MHz (Upgradable to 32GB)',
            storage: '1TB PCIe Gen4 NVMe',
            display: '16" WQXGA (2560x1600) IPS, 165Hz, 500 Nits, 100% sRGB',
            graphics: 'NVIDIA GeForce RTX 4060 8GB GDDR6 (140W TGP)',
            battery: '90Wh, 330W Adapter',
            os: 'Windows 11 Home',
        },
        tags: ['RTX 4060 140W', 'Advanced Cooling', 'G-Sync']
    },
    {
        id: 'lenovo-loq-2026',
        name: 'Lenovo LOQ 15 (Ryzen 7)',
        brand: 'Lenovo',
        category: 'gaming',
        price: 84990,
        amazonUrl: 'https://www.amazon.in/s?k=Lenovo+LOQ+Ryzen+7+RTX+4050&tag=aitechnews-21',
        flipkartUrl: 'https://www.flipkart.com/search?q=Lenovo+LOQ+Ryzen+7',
        rating: 4.6,
        specs: {
            processor: 'AMD Ryzen 7 7840HS (8 Cores, 16 Threads)',
            ram: '16GB DDR5 5600MHz',
            storage: '512GB PCIe Gen4 SSD',
            display: '15.6" FHD (1920x1080) 144Hz, 350 Nits, 45% NTSC',
            graphics: 'NVIDIA GeForce RTX 4050 6GB (95W TGP)',
            battery: '60Wh (Support Super Rapid Charge)',
            os: 'Windows 11 Home + MS Office',
        },
        tags: ['Best Budget Gaming', 'MUX Switch', 'AI Engine+']
    },
    // CREATOR
    {
        id: 'apple-macbook-air-m3',
        name: 'Apple MacBook Air 13 (M3 Chip)',
        brand: 'Apple',
        category: 'creator',
        price: 114900,
        amazonUrl: 'https://www.amazon.in/s?k=MacBook+Air+M3+13+inch&tag=aitechnews-21',
        flipkartUrl: 'https://www.flipkart.com/search?q=MacBook+Air+M3',
        rating: 4.9,
        specs: {
            processor: 'Apple M3 chip (8-core CPU, 16-core Neural Engine)',
            ram: '8GB Unified Memory (Configurable up to 24GB)',
            storage: '256GB SSD',
            display: '13.6" Liquid Retina display, 500 nits, True Tone',
            graphics: '8-core GPU (Hardware-accelerated ray tracing)',
            battery: '52.6Wh Lithium-Po (Up to 18 hours battery life)',
            os: 'macOS Sonoma',
        },
        tags: ['Unmatched Battery', 'Silent Fanless', 'Premium Video Editing']
    },
    {
        id: 'asus-zenbook-14-oled-2026',
        name: 'ASUS Zenbook 14 OLED',
        brand: 'ASUS',
        category: 'creator',
        price: 98990,
        amazonUrl: 'https://www.amazon.in/s?k=ASUS+Zenbook+14+OLED+Core+Ultra&tag=aitechnews-21',
        flipkartUrl: 'https://www.flipkart.com/search?q=ASUS+Zenbook+14+OLED',
        rating: 4.8,
        specs: {
            processor: 'Intel Core Ultra 7 155H with AI NPU',
            ram: '16GB LPDDR5X (Onboard)',
            storage: '1TB M.2 NVMe PCIe 4.0 SSD',
            display: '14" 3K (2880x1800) OLED 120Hz, 600 nits HDR, 100% DCI-P3',
            graphics: 'Intel Arc Graphics',
            battery: '75WHrs, 4-cell Li-ion',
            os: 'Windows 11 Home + MS Office 2021',
        },
        tags: ['OLED 120Hz', 'AI Processor', '1.2kg Ultra-light']
    }
];

export default function BestLaptopsClient() {
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'student' | 'gaming' | 'office' | 'creator'>('all');
    const [selectedBudget, setSelectedBudget] = useState<number>(Infinity);

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
                        Humne 50+ laptops compare kiye hain taaki aapko apne specific use-case ke liye best laptop mil sake. <strong className="text-white">Confused about specs?</strong> Humne sab simple kar diya hai.
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
                                    
                                </div>

                                <div className="mt-8 pt-6 border-t border-border/50">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-2xl font-black">₹{laptop.price.toLocaleString('en-IN')}</span>
                                        <span className="text-xs text-muted-foreground/60 line-through">₹{(laptop.price * 1.3).toLocaleString('en-IN')}</span>
                                    </div>
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
                            <p className="text-sm text-muted-foreground leading-relaxed">Hamesha latest generation lein. 2026 mein Intel 13th/14th Gen ya Core Ultra Series aur AMD Ryzen 7000/8000 series sabse best hain.</p>
                        </div>
                        <div className="bg-background p-6 rounded-2xl border border-border/40 shadow-sm">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> RAM & Storage</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">8GB RAM ab obsolete ho chuka hai. Min 16GB LPDDR5 RAM aur 512GB PCIe Gen4 SSD zaroori hai ek smooth experience ke liye.</p>
                        </div>
                        <div className="bg-background p-6 rounded-2xl border border-border/40 shadow-sm">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Display Types</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">Creators ke liye OLED (100% DCI-P3) zaruri hai. Gamers ko fast IPS (144Hz+) chahiye. Office/Students ke liye standard IPS (300nits) kafi hai.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
