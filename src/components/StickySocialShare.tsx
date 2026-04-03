'use client';

import React, { useEffect, useState } from 'react';
import { MessageCircle, Send, Link, Check } from 'lucide-react';

export default function StickySocialShare() {
    const [scrolled, setScrolled] = useState(false);
    const [copied, setCopied] = useState(false);
    const [currentUrl, setCurrentUrl] = useState('');
    const [pageTitle, setPageTitle] = useState('');

    const cleanTitle = (raw: string) =>
        raw.replace(/ \| AITechNews$/, '').replace(/ \| AITechNews India$/, '').trim();

    useEffect(() => {
        setCurrentUrl(window.location.href);

        // Set title immediately
        setPageTitle(cleanTitle(document.title));

        // Watch for title changes — Next.js sometimes sets it after mount
        const observer = new MutationObserver(() => {
            const newTitle = cleanTitle(document.title);
            if (newTitle) setPageTitle(newTitle);
        });
        observer.observe(document.querySelector('title') || document.head, {
            subtree: true,
            characterData: true,
            childList: true,
        });

        // Also retry after 500ms as a fallback
        const timer = setTimeout(() => {
            setPageTitle(cleanTitle(document.title));
        }, 500);

        const handleScroll = () => setScrolled(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
            clearTimeout(timer);
        };
    }, []);

    const shareWhatsApp = () => {
        const title = pageTitle || 'AITechNews - Latest Tech News';
        const text = encodeURIComponent(`${title}\n${currentUrl}`);
        window.open(`https://wa.me/?text=${text}`, '_blank');
    };

    const shareTelegram = () => {
        const title = pageTitle || 'AITechNews - Latest Tech News';
        const encodedUrl = encodeURIComponent(currentUrl);
        const encodedText = encodeURIComponent(title);
        window.open(`https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`, '_blank');
    };

    const copyLink = () => {
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Only show on mobile and when scrolled a bit
    if (!scrolled) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] md:hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center gap-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-200 dark:border-slate-800 px-5 py-3 rounded-full shadow-2xl shadow-primary/20">
                <button 
                    onClick={shareWhatsApp}
                    className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full transition-transform active:scale-90"
                    title="Share on WhatsApp"
                >
                    <MessageCircle size={20} fill="currentColor" />
                </button>
                <button 
                    onClick={shareTelegram}
                    className="flex items-center justify-center w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded-full transition-transform active:scale-90"
                    title="Share on Telegram"
                >
                    <Send size={20} fill="currentColor" className="mr-0.5" />
                </button>
                <div className="w-[1px] h-6 bg-gray-300 dark:bg-slate-700 mx-1" />
                <button 
                    onClick={copyLink}
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-full transition-all active:scale-90"
                    title="Copy Link"
                >
                    {copied ? <Check size={20} className="text-green-500" /> : <Link size={20} />}
                </button>
            </div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap animate-bounce pointer-events-none">
                SHARE & HELP US GROW 🚀
            </div>
        </div>
    );
}
