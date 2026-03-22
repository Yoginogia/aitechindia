'use client';

import { useState } from 'react';
import { Cpu, Maximize, Camera, Battery, Smartphone, DollarSign, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const PHONE_DB = [
    {
        id: 'iphone-18-pro-max',
        name: 'Apple iPhone 18 Pro Max',
        brand: 'Apple',
        image: '/images/blog/iphone-18-pro.png?v=999',
        specs: {
            processor: 'A19 Pro AI Neural',
            display: '6.9" Super Retina XDR 144Hz OLED',
            camera: '48MP Main + 48MP Ultrawide + 48MP Telephoto',
            frontCamera: '24MP TruDepth',
            battery: '4,852 mAh (45W Fast Charge)',
            os: 'iOS 20 with Apple GPT',
            features: 'Titanium Build, Action Button'
        },
        price: '₹1,59,900'
    },
    {
        id: 'samsung-s26-ultra',
        name: 'Samsung Galaxy S26 Ultra',
        brand: 'Samsung',
        image: '/images/deals/samsung-s26-ultra.png?v=999',
        specs: {
            processor: 'Snapdragon 8 Gen 5 for Galaxy',
            display: '6.8" Dynamic AMOLED 2X 144Hz (Flat)',
            camera: '200MP Main + 50MP 5x + 12MP 3x + 10MP UW',
            frontCamera: '12MP AI Selfie',
            battery: '5,500 mAh (65W Fast Charge)',
            os: 'Android 16 (One UI 8)',
            features: 'Titanium Frame, Built-in S-Pen, Galaxy AI'
        },
        price: '₹1,34,999'
    },
    {
        id: 'oneplus-15r',
        name: 'OnePlus 15R 5G',
        brand: 'OnePlus',
        image: '/images/deals/oneplus-15r.png?v=999',
        specs: {
            processor: 'Snapdragon 8 Gen 4',
            display: '6.78" 1.5K AMOLED 120Hz',
            camera: '50MP Sony IMX890 + 8MP UW + 2MP Macro',
            frontCamera: '16MP',
            battery: '5,500 mAh (120W SuperVOOC)',
            os: 'OxygenOS 16 (Android 16)',
            features: 'Alert Slider, Vapor Chamber Cooling'
        },
        price: '₹39,999'
    },
    {
        id: 'nothing-fold-1',
        name: 'Nothing Fold (1)',
        brand: 'Nothing',
        image: '/images/blog/nothing-fold-1.png?v=999',
        specs: {
            processor: 'Snapdragon 8 Gen 5',
            display: '8.1" Foldable LTPO OLED (Main), 6.4" Cover',
            camera: '50MP Main + 50MP UW + 32MP Telephoto',
            frontCamera: '32MP Cover + 16MP Inner',
            battery: '4,800 mAh (60W Fast Charge)',
            os: 'Nothing OS 4.0 (Android 16)',
            features: 'Transparent Back, Dual Glyph Interface'
        },
        price: '₹89,999'
    },
    {
        id: 'pixel-10-pro',
        name: 'Google Pixel 10 Pro',
        brand: 'Google',
        image: '/images/blog/pixel-10-pro.png?v=999',
        specs: {
            processor: 'Google Tensor G6',
            display: '6.7" Super Actua Display 120Hz',
            camera: '50MP Main + 48MP UW + 48MP 5x Telephoto',
            frontCamera: '42MP AF',
            battery: '5,060 mAh (30W Fast Charge)',
            os: 'Android 16 Stock',
            features: 'Gemini Nano, Best Smartphone Camera'
        },
        price: '₹1,09,999'
    }
];

export default function CompareClient() {
    // Default selection
    const [phone1Id, setPhone1Id] = useState(PHONE_DB[0].id);
    const [phone2Id, setPhone2Id] = useState(PHONE_DB[1].id);

    const phone1 = PHONE_DB.find(p => p.id === phone1Id);
    const phone2 = PHONE_DB.find(p => p.id === phone2Id);

    return (
        <div className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl shadow-xl overflow-hidden p-4 md:p-8">
            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-10">
                {/* Phone 1 Selector */}
                <div className="flex flex-col gap-4">
                    <div className="relative">
                        <select 
                            value={phone1Id} 
                            onChange={(e) => setPhone1Id(e.target.value)}
                            className="w-full appearance-none bg-background dark:bg-zinc-800 border-2 border-border dark:border-zinc-700 hover:border-primary/50 text-foreground dark:text-white px-4 py-3 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-primary/50 transition cursor-pointer pr-10"
                        >
                            {PHONE_DB.map(phone => (
                                <option key={phone.id} value={phone.id} disabled={phone.id === phone2Id}>
                                    {phone.name}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                    </div>
                    {phone1 && (
                        <div className="flex flex-col items-center p-6 bg-gradient-to-b from-secondary/50 dark:from-zinc-900/80 to-secondary dark:to-zinc-950 rounded-2xl border-2 border-border/50 dark:border-zinc-800 hover:border-primary/40 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="w-28 h-48 md:w-36 md:h-60 relative mb-6 rounded-2xl overflow-hidden shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] ring-1 ring-border dark:ring-white/10 group-hover:ring-primary/50 transition-all duration-300 transform group-hover:-translate-y-2">
                                <img src={phone1.image} alt={phone1.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-black text-center line-clamp-1 mb-1 tracking-tight text-foreground">{phone1.name}</h2>
                            <p className="text-primary font-bold text-xl md:text-2xl">{phone1.price}</p>
                        </div>
                    )}
                </div>

                {/* Phone 2 Selector */}
                <div className="flex flex-col gap-4">
                    <div className="relative">
                        <select 
                            value={phone2Id} 
                            onChange={(e) => setPhone2Id(e.target.value)}
                            className="w-full appearance-none bg-background dark:bg-zinc-800 border-2 border-border dark:border-zinc-700 hover:border-blue-500/50 text-foreground dark:text-white px-4 py-3 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition cursor-pointer pr-10"
                        >
                            {PHONE_DB.map(phone => (
                                <option key={`p2-${phone.id}`} value={phone.id} disabled={phone.id === phone1Id}>
                                    {phone.name}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                    </div>
                    {phone2 && (
                        <div className="flex flex-col items-center p-6 bg-gradient-to-b from-secondary/50 dark:from-zinc-900/80 to-secondary dark:to-zinc-950 rounded-2xl border-2 border-border/50 dark:border-zinc-800 hover:border-blue-500/40 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="w-28 h-48 md:w-36 md:h-60 relative mb-6 rounded-2xl overflow-hidden shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] ring-1 ring-border dark:ring-white/10 group-hover:ring-blue-500/50 transition-all duration-300 transform group-hover:-translate-y-2">
                                <img src={phone2.image} alt={phone2.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-black text-center line-clamp-1 mb-1 tracking-tight text-foreground">{phone2.name}</h2>
                            <p className="text-blue-600 dark:text-blue-400 font-bold text-xl md:text-2xl">{phone2.price}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Comparison Table */}
            {phone1 && phone2 && (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <tbody>
                            {/* Performance */}
                            <tr className="border-t border-border/50">
                                <td className="py-4 font-bold text-muted-foreground w-1/4 flex items-center gap-2">
                                    <Cpu className="h-5 w-5" /> Processor
                                </td>
                                <td className="py-4 px-2 w-[37.5%]">{phone1.specs.processor}</td>
                                <td className="py-4 px-2 w-[37.5%] border-l border-border/30 pl-4">{phone2.specs.processor}</td>
                            </tr>
                            
                            {/* Display */}
                            <tr className="border-t border-border/50 bg-zinc-900/30">
                                <td className="py-4 font-bold text-muted-foreground flex items-center gap-2">
                                    <Maximize className="h-5 w-5" /> Display
                                </td>
                                <td className="py-4 px-2">{phone1.specs.display}</td>
                                <td className="py-4 px-2 border-l border-border/30 pl-4">{phone2.specs.display}</td>
                            </tr>

                            {/* Camera */}
                            <tr className="border-t border-border/50">
                                <td className="py-4 font-bold text-muted-foreground flex items-center gap-2">
                                    <Camera className="h-5 w-5" /> Camera
                                </td>
                                <td className="py-4 px-2">
                                    <div className="font-semibold text-white/90">{phone1.specs.camera}</div>
                                    <div className="text-sm text-gray-400 mt-1">Front: {phone1.specs.frontCamera}</div>
                                </td>
                                <td className="py-4 px-2 border-l border-border/30 pl-4">
                                    <div className="font-semibold text-white/90">{phone2.specs.camera}</div>
                                    <div className="text-sm text-gray-400 mt-1">Front: {phone2.specs.frontCamera}</div>
                                </td>
                            </tr>

                            {/* Battery */}
                            <tr className="border-t border-border/50 bg-zinc-900/30">
                                <td className="py-4 font-bold text-muted-foreground flex items-center gap-2">
                                    <Battery className="h-5 w-5" /> Battery
                                </td>
                                <td className="py-4 px-2">{phone1.specs.battery}</td>
                                <td className="py-4 px-2 border-l border-border/30 pl-4">{phone2.specs.battery}</td>
                            </tr>

                            {/* OS and Features */}
                            <tr className="border-t border-border/50">
                                <td className="py-4 font-bold text-muted-foreground flex items-center gap-2">
                                    <Smartphone className="h-5 w-5" /> Details
                                </td>
                                <td className="py-4 px-2">
                                    <div className="mb-1">{phone1.specs.os}</div>
                                    <div className="text-sm text-gray-400">{phone1.specs.features}</div>
                                </td>
                                <td className="py-4 px-2 border-l border-border/30 pl-4">
                                    <div className="mb-1">{phone2.specs.os}</div>
                                    <div className="text-sm text-gray-400">{phone2.specs.features}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
