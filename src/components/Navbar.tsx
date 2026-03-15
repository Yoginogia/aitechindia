'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, Rss, Zap } from 'lucide-react';
import SearchModal from './SearchModal';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname?.startsWith(path);
    };

    const getLinkClass = (path: string) => {
        const baseClass = "transition-all font-medium text-sm px-3 py-1.5 rounded-full flex items-center";
        return isActive(path) 
            ? `${baseClass} bg-primary text-primary-foreground shadow-md font-semibold` 
            : `${baseClass} text-foreground/70 hover:text-foreground hover:bg-secondary/50`;
    };

    return (
        <>
            <header className="sticky top-0 z-50 w-full glass border-b border-border/30">
                <div className="container mx-auto flex h-16 max-w-7xl items-center px-4 md:px-8">
                    <div className="flex flex-1 items-center justify-between">
                        <div className="flex items-center gap-6">
                            <Link href="/" className="flex items-center gap-2 group">
                                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                                    <Zap className="h-4 w-4 text-white" />
                                </div>
                                <span className="font-bold text-xl tracking-tight gradient-text">
                                    AITechIndia
                                </span>
                            </Link>
                            <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
                                <Link href="/" className={getLinkClass('/')}>
                                    Home
                                </Link>
                                <Link href="/latest" className={getLinkClass('/latest')}>
                                    <Rss className="h-3.5 w-3.5 mr-1.5 inline-block" /> Latest
                                </Link>
                                <Link href="/ai-tools" className={getLinkClass('/ai-tools')}>
                                    AI Tools
                                </Link>
                                <Link href="/gadgets" className={getLinkClass('/gadgets')}>
                                    Gadgets
                                </Link>
                                <Link href="/crypto" className={getLinkClass('/crypto')}>
                                    Crypto News
                                </Link>
                                <Link href="/top-deals" className={getLinkClass('/top-deals')}>
                                    Top Deals
                                </Link>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => setIsSearchOpen(true)}
                                className="hidden md:flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/30 transition-all rounded-full px-4 py-1.5"
                            >
                                <Search className="h-3.5 w-3.5" />
                                <span>Search news...</span>
                            </button>
                            <ThemeToggle />
                            <button 
                                onClick={() => setIsSearchOpen(true)}
                                className="md:hidden p-2 -mr-2 text-foreground/70 hover:text-foreground"
                            >
                                <Search className="h-5 w-5" />
                            </button>
                            <button className="md:hidden p-2 -mr-2 text-foreground/70 hover:text-foreground">
                                <Menu className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <SearchModal 
                isOpen={isSearchOpen} 
                onClose={() => setIsSearchOpen(false)} 
            />
        </>
    );
}
