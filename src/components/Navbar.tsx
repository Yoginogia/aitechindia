'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, X, ChevronDown } from 'lucide-react';
import SearchModal from './SearchModal';
import { ThemeToggle } from './ThemeToggle';

const NAV_CATEGORIES = [
    { href: '/',            label: 'Home',          emoji: '🏠', color: 'from-slate-500 to-slate-700' },
    { href: '/latest',      label: 'Latest',        emoji: '🔥', color: 'from-orange-500 to-red-500' },
    { href: '/web-stories', label: 'Web Stories',   emoji: '⚡', color: 'from-yellow-400 to-orange-500' },
    { href: '/ai-tools',    label: 'AI Tools',      emoji: '🤖', color: 'from-blue-500 to-cyan-400' },
    { href: '/gadgets',     label: 'Gadgets',       emoji: '📱', color: 'from-purple-500 to-pink-500' },
    { href: '/best-phones', label: 'Best Phones',   emoji: '🏆', color: 'from-green-400 to-emerald-500' },
    { href: '/compare',     label: 'Compare',       emoji: '⚖️', color: 'from-indigo-500 to-purple-500' },
    { href: '/crypto',      label: 'Crypto',        emoji: '💰', color: 'from-yellow-500 to-amber-400' },
    { href: '/top-deals',   label: 'Top Deals',     emoji: '🛒', color: 'from-pink-500 to-rose-500' },
    { href: '/software',    label: 'Updates',       emoji: '🔄', color: 'from-cyan-500 to-blue-500' },
    { href: '/dictionary',  label: 'Dictionary',    emoji: '📖', color: 'from-teal-400 to-cyan-500' },
];

const MOBILE_LINKS = NAV_CATEGORIES;

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => { setIsMobileOpen(false); }, [pathname]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = (isMobileOpen || isSearchOpen) ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileOpen, isSearchOpen]);

    const isActive = (path: string) =>
        path === '/' ? pathname === '/' : pathname?.startsWith(path);

    return (
        <>
            {/* ───── HEADER ───── */}
            <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'shadow-lg shadow-primary/10' : ''}`}>
                {/* ── TOP BAR: Logo + Actions ── */}
                <div className="relative bg-background/90 backdrop-blur-xl border-b border-border/40">
                    {/* Animated gradient stripe at very top */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-orange-400 animate-gradient-x" />

                    <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-6">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                            <div className="relative">
                                <img
                                    src="/logo.png"
                                    alt="AITechNews"
                                    className="h-9 w-9 rounded-xl shadow-md shadow-primary/30 group-hover:shadow-primary/60 transition-all duration-300 group-hover:scale-110"
                                />
                                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-green-400 rounded-full border-2 border-background animate-pulse" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-extrabold text-2xl tracking-tight gradient-text">AITechNews</span>
                                <span className="text-[9px] text-muted-foreground/70 tracking-widest uppercase font-medium">India&apos;s Tech Hub</span>
                            </div>
                        </Link>



                        {/* Right Actions */}
                        <div className="flex items-center gap-1.5">
                            <ThemeToggle />
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/60 hover:bg-primary/10 border border-border/40 hover:border-primary/40 text-muted-foreground hover:text-primary transition-all text-xs font-medium"
                                aria-label="Search"
                            >
                                <Search className="h-3.5 w-3.5" />
                                <span className="hidden sm:inline">Search</span>
                            </button>
                            <button
                                onClick={() => setIsMobileOpen(true)}
                                className="lg:hidden p-2 rounded-full hover:bg-secondary/60 text-foreground/70 hover:text-foreground transition-all"
                                aria-label="Open Menu"
                            >
                                <Menu className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── BOTTOM BAR: Category Strip ── */}
                <div className="hidden lg:block bg-card/80 backdrop-blur-xl border-b border-border/30">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1.5">
                            {NAV_CATEGORIES.map(({ href, label, emoji, color }) => {
                                const active = isActive(href);
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        className={`group relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                                            active
                                                ? `bg-gradient-to-r ${color} text-white shadow-lg border-transparent scale-[1.04]`
                                                : 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-400/30 text-indigo-900 dark:text-indigo-300 hover:from-indigo-500/20 hover:to-pink-500/20 hover:border-purple-400/50 hover:text-indigo-900 dark:hover:text-white hover:shadow-sm'
                                        }`}
                                    >
                                        <span className={`transition-transform duration-200 ${active ? '' : 'group-hover:scale-125'}`}>{emoji}</span>
                                        {label}
                                        {active && (
                                            <span className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-2 h-0.5 bg-primary rounded-full" />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </header>

            {/* ───── MOBILE SLIDE MENU ───── */}
            <div className={`fixed inset-y-0 right-0 z-[1001] w-[280px] bg-background border-l border-border/30 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-border/40 bg-card/50">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="AITechNews" className="h-8 w-8 rounded-lg shadow-md shadow-primary/30" />
                        <span className="font-bold text-base gradient-text">AITechNews</span>
                    </div>
                    <button onClick={() => setIsMobileOpen(false)}
                        className="p-2 rounded-full hover:bg-secondary/60 text-foreground/70 transition-all">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Menu Links */}
                <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
                    {MOBILE_LINKS.map(({ href, label, emoji }) => {
                        const active = isActive(href);
                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setIsMobileOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                                    active
                                        ? 'bg-gradient-to-r from-primary/20 to-purple-500/10 text-primary border border-primary/20 shadow-sm'
                                        : 'text-foreground/70 hover:text-foreground hover:bg-secondary/50'
                                }`}
                            >
                                <span className="text-base w-6 text-center">{emoji}</span>
                                {label}
                                {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                            </Link>
                        );
                    })}
                </nav>

                {/* Menu Footer */}
                <div className="p-4 border-t border-border/30 bg-card/30 space-y-1 text-xs">
                    {[{ href: '/about', label: 'About Us' }, { href: '/contact', label: 'Contact' }, { href: '/disclaimer', label: 'Disclaimer' }].map(({ href, label }) => (
                        <Link key={href} href={href} onClick={() => setIsMobileOpen(false)}
                            className="block px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-all">
                            {label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Backdrop */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm lg:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
