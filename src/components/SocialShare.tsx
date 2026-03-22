'use client';

import { useState, useEffect } from 'react';
import { Share2, Twitter, Facebook, Link as LinkIcon } from 'lucide-react';

export default function SocialShare({ title }: { title: string }) {
    const [mounted, setMounted] = useState(false);
    const [url, setUrl] = useState('');

    useEffect(() => {
        setMounted(true);
        setUrl(window.location.href);
    }, []);

    if (!mounted) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        alert('Link Copied to Clipboard!');
    };

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    return (
        <div className="flex flex-row md:flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold md:mb-2 flex items-center md:justify-center">
                Share
            </span>
            
            <a 
                href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors shadow-sm"
            >
                {/* Custom WhatsApp Icon SVG since lucide doesn't have it */}
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
            </a>

            <a 
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-400/10 text-blue-400 hover:bg-blue-400 hover:text-white flex items-center justify-center transition-colors shadow-sm"
            >
                <Twitter className="w-5 h-5" />
            </a>

            <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors shadow-sm"
            >
                <Facebook className="w-5 h-5" />
            </a>

            <button 
                onClick={handleCopy}
                className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white flex items-center justify-center transition-colors shadow-sm"
            >
                <LinkIcon className="w-5 h-5" />
            </button>
        </div>
    );
}
