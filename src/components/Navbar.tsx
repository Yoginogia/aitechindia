'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, Rss, Zap, X } from 'lucide-react';
import SearchModal from './SearchModal';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

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

    const getMobileLinkClass = (path: string) => {
        const baseClass = "transition-all font-medium text-base px-4 py-3 rounded-xl flex items-center gap-3 w-full";
        return isActive(path) 
            ? `${baseClass} bg-primary text-primary-foreground shadow-md font-semibold` 
            : `${baseClass} text-foreground/80 hover:text-foreground hover:bg-secondary/50`;
    };

    const navLinks = [
        { href: '/', label: 'Home', icon: '🏠' },
        { href: '/latest', label: 'Latest', icon: '📰' },
        { href: '/web-stories', label: 'Stories', icon: '⚡' },
        { href: '/ai-tools', label: 'AI Tools', icon: '🤖' },
        { href: '/gadgets', label: 'Gadgets', icon: '📱' },
        { href: '/compare', label: 'Compare', icon: '⚖️' },
        { href: '/crypto', label: 'Crypto News', icon: '💰' },
        { href: '/top-deals', label: 'Top Deals', icon: '🛒' },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 w-full glass border-b border-border/30">
                <div className="container mx-auto flex h-16 max-w-7xl items-center px-4 md:px-8">
                    <div className="flex flex-1 items-center justify-between">
                        <div className="flex items-center gap-6">
                            <Link href="/" className="flex items-center gap-2 group">
                                <img src="/logo.png" alt="AITechNews" className="h-9 w-9 rounded-lg shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow" />
                                <span className="font-bold text-xl tracking-tight gradient-text">
                                    AITechNews
                                </span>
                            </Link>
                            <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
                                <Link href="/" className={getLinkClass('/')}>
                                    Home
                                </Link>
                                <Link href="/latest" className={getLinkClass('/latest')}>
                                    <Rss className="h-3.5 w-3.5 mr-1.5 inline-block" /> Latest
                                </Link>
                                <Link href="/web-stories" className={getLinkClass('/web-stories')}>
                                    ⚡ Stories
                                </Link>
                                <Link href="/ai-tools" className={getLinkClass('/ai-tools')}>
                                    AI Tools
                                </Link>
                                <Link href="/gadgets" className={getLinkClass('/gadgets')}>
                                    Gadgets
                                </Link>
                                <Link href="/compare" className={getLinkClass('/compare')}>
                                    Compare
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
                            <button 
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="md:hidden p-2 -mr-2 text-foreground/70 hover:text-foreground"
                            >
                                <Menu className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[60] md:hidden">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    
                    {/* Menu Panel */}
                    <div className="absolute right-0 top-0 h-full w-72 bg-background border-l border-border/30 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-border/30">
                            <div className="flex items-center gap-2">
                                <img src="/logo.png" alt="AITechNews" className="h-7 w-7 rounded-md" />
                                <span className="font-bold text-lg gradient-text">AITechNews</span>
                            </div>
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-lg hover:bg-secondary/50 text-foreground/70 hover:text-foreground transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={getMobileLinkClass(link.href)}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="text-lg">{link.icon}</span>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Footer Links */}
                        <div className="p-4 border-t border-border/30 space-y-1">
                            <Link href="/about" className="block text-sm text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg hover:bg-secondary/50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                About Us
                            </Link>
                            <Link href="/contact" className="block text-sm text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg hover:bg-secondary/50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                Contact
                            </Link>
                            <Link href="/advertise" className="block text-sm text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg hover:bg-secondary/50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                Advertise
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <SearchModal 
                isOpen={isSearchOpen} 
                onClose={() => setIsSearchOpen(false)} 
            />
        </>
    );
}
