'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PostData } from '@/lib/markdown'; // You might need to make this type exportable if not already

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<PostData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            document.body.style.overflow = 'unset';
            setQuery('');
            setResults([]);
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    useEffect(() => {
        const fetchResults = async () => {
            if (!query.trim()) {
                setResults([]);
                return;
            }

            setIsLoading(true);
            try {
                const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                const data = await res.json();
                setResults(data.results);
            } catch (error) {
                console.error("Failed to fetch search results", error);
            } finally {
                setIsLoading(false);
            }
        };

        const debounceTimer = setTimeout(fetchResults, 300);
        return () => clearTimeout(debounceTimer);
    }, [query]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-24 px-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
            <div 
                className="w-full max-w-2xl bg-card border border-border/50 shadow-2xl rounded-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex items-center px-4 py-3 border-b border-border/50 gap-3">
                    <Search className="h-5 w-5 text-muted-foreground" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search for articles, reviews, news..."
                        className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-lg"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={onClose} className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-foreground">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto">
                    {isLoading ? (
                        <div className="py-14 flex items-center justify-center text-muted-foreground">
                            <Loader2 className="h-6 w-6 animate-spin mr-2" /> Searching...
                        </div>
                    ) : query.trim() !== '' && results.length === 0 ? (
                        <div className="py-14 text-center text-muted-foreground">
                            No results found for "{query}". Try something else.
                        </div>
                    ) : (
                        <div className="py-2">
                            {results.map((post) => (
                                <Link 
                                    key={post.slug} 
                                    href={`/blog/${post.slug}`}
                                    onClick={onClose}
                                    className="flex items-start gap-4 p-4 hover:bg-secondary/50 transition-colors group border-b border-border/30 last:border-0"
                                >
                                     {post.image ? (
                                        <img src={post.image} alt="" className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-border/30" />
                                     ) : (
                                        <div className="w-16 h-16 rounded-lg bg-secondary flex-shrink-0 border border-border/30 flex items-center justify-center text-xs text-muted-foreground">
                                            No Img
                                        </div>
                                     )}
                                     <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{post.category}</span>
                                        </div>
                                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">{post.title}</h4>
                                        <p className="text-sm text-muted-foreground truncate">{post.excerpt}</p>
                                     </div>
                                     <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity self-center flex-shrink-0 mr-2" />
                                </Link>
                            ))}
                        </div>
                    )}
                    
                    {!query && (
                        <div className="py-8 px-6 text-sm text-muted-foreground">
                            <p className="font-medium mb-3 text-foreground/80">Popular Categories</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-secondary px-3 py-1 rounded-full border border-border/50 cursor-pointer hover:bg-secondary/80 transition-colors" onClick={() => setQuery('AI Tools')}>AI Tools</span>
                                <span className="bg-secondary px-3 py-1 rounded-full border border-border/50 cursor-pointer hover:bg-secondary/80 transition-colors" onClick={() => setQuery('Smartphones')}>Smartphones</span>
                                <span className="bg-secondary px-3 py-1 rounded-full border border-border/50 cursor-pointer hover:bg-secondary/80 transition-colors" onClick={() => setQuery('OpenAI')}>OpenAI</span>
                                <span className="bg-secondary px-3 py-1 rounded-full border border-border/50 cursor-pointer hover:bg-secondary/80 transition-colors" onClick={() => setQuery('Google')}>Google</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="bg-secondary/30 px-4 py-2 border-t border-border/50 text-xs text-muted-foreground flex justify-between items-center">
                    <span>Search powered by AITechNews</span>
                    <span className="hidden sm:inline-block border border-border/50 rounded px-1.5 py-0.5 bg-background font-mono text-[10px]">esc to close</span>
                </div>
            </div>
        </div>
    );
}
