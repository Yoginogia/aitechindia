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

    // Prevent body scroll when mobile menu or search is open
    useEffect(() => {
        if (isMobileMenuOpen || isSearchOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = 'var(--removed-body-scroll-bar-size)'; // Prevent layout shift if any
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    }, [isMobileMenuOpen, isSearchOpen]);

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
        { href: '/web-stories', label: 'Web Stories', icon: '⚡' },
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
                                    ⚡ Web Stories
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

                            <div className="flex items-center gap-1 md:gap-4">
                                <ThemeToggle />
                                <button 
                                    onClick={() => setIsSearchOpen(true)}
                                    className="p-2 text-foreground/70 hover:text-foreground"
                                >
                                    <Search className="h-5 w-5 md:h-4 md:w-4" />
                                </button>
                                <button 
                                    onClick={() => setIsMobileMenuOpen(true)}
                                    className="md:hidden p-2 text-foreground/70 hover:text-foreground relative z-[60]"
                                    aria-label="Open Menu"
                                >
                                    <Menu className="h-6 w-6" />
                                </button>
                            </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Panel Layer - Highest Z */}
            <div 
                className={`fixed inset-y-0 right-0 z-[1001] w-72 bg-background border-l border-border/30 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
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
                </div>
            </div>

            {/* Backdrop Layer */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 z-[1000] bg-black/60 shadow-[0_0_50px_rgba(0,0,0,0.5)] md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </>
    );
}
