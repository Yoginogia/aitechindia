import { Phone, CheckCircle2, ChevronRight, Zap, ShieldCheck, PiggyBank, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import CompareClient from './CompareClient';

export const metadata = {
    title: 'Compare Mobile Phones - AITechNews',
    description: 'Compare processors, cameras, batteries, and prices of the latest smartphones in India.',
};

export default function ComparePage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header Section */}
            <div className="bg-secondary/30 dark:bg-zinc-900 border-b border-border/40 pb-12 pt-20 px-4 relative overflow-hidden transition-colors">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container max-w-5xl mx-auto relative z-10 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-semibold mb-6">
                        <Zap className="h-4 w-4" /> Smart Comparison
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
                        Kaunsa Phone Hai <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Sabse Best?</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                        Features, Specs, aur Price ko side-by-side compare karein aur chunein apne liye sabse behtar option.
                    </p>
                </div>
            </div>

            {/* Main Interactive Comparison UI */}
            <div className="container max-w-6xl mx-auto px-4 -mt-8 relative z-20">
                <CompareClient />
            </div>

            {/* Why Compare Section */}
            <div className="container max-w-5xl mx-auto px-4 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-border/40 pt-16">
                    <div>
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center mx-auto mb-4">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Unbiased Comparison</h3>
                        <p className="text-muted-foreground text-sm">Puri detail mein processor, camera aur battery check karein bina kisi bias ke.</p>
                    </div>
                    <div>
                        <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                            <PiggyBank className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Save Money</h3>
                        <p className="text-muted-foreground text-sm">Prices compare karke dekhein ki actual mehnat ki kamai kahan lagani sahi hai.</p>
                    </div>
                    <div>
                        <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-4">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Latest Models</h3>
                        <p className="text-muted-foreground text-sm">iPhone 18, Samsung S26 jaise ekdum latest phones ka data yahan available hai.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
