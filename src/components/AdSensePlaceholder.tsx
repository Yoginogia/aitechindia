'use client';

import { useState, useEffect } from 'react';
import { BadgeDollarSign } from 'lucide-react';

export default function AdSensePlaceholder({ slotId, width = "100%", height = "250px" }: { slotId?: string, width?: string, height?: string }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div style={{ width, height }} className="bg-secondary/20 rounded-xl mb-8 animate-pulse"></div>;

    return (
        <div 
            style={{ width, minHeight: height }} 
            className="w-full relative mx-auto my-8 flex items-center justify-center bg-zinc-900 border-2 border-dashed border-border/50 rounded-2xl overflow-hidden group hover:border-primary/30 transition-colors"
        >
            <div className="absolute top-2 right-3 text-[10px] uppercase font-bold text-muted-foreground bg-background/50 px-2 py-0.5 rounded shadow-sm">
                Advertisement
            </div>
            <div className="flex flex-col items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                <BadgeDollarSign className="w-8 h-8 text-primary/50 mb-2" />
                <span className="text-sm font-semibold text-muted-foreground font-mono">
                    Google AdSense Ready
                </span>
                {slotId && (
                    <span className="text-xs text-muted-foreground/60 mt-1 font-mono">
                        Slot: {slotId}
                    </span>
                )}
            </div>
        </div>
    );
}
