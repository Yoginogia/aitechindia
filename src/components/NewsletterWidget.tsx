'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export default function NewsletterWidget() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            alert('Aapka email successfully subscribe ho gaya hai! (Demo Event)');
        }, 1200);
    };

    return (
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur p-6 relative overflow-hidden mt-6">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                    <Mail className="h-5 w-5 text-primary" />
                </div>
                
                <div>
                    <h3 className="text-lg font-bold tracking-tight mb-1">Weekly Tech Digest</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        हफ्ते की सबसे ज़रूरी Tech और AI खबरें सीधे आपके Inbox में। कोई स्पैम नहीं!
                    </p>
                </div>

                {status === 'success' ? (
                    <div className="w-full py-3 bg-green-500/10 border border-green-500/20 rounded-xl flex flex-col items-center justify-center gap-2 animate-in fade-in zoom-in duration-300">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                        <span className="text-sm font-medium text-green-500">Subscribed Successfully!</span>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
                        <div className="relative w-full">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                disabled={status === 'loading'}
                                className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all disabled:opacity-50"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'loading' || !email}
                            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium rounded-xl px-4 py-2.5 text-sm hover:bg-primary/90 transition-all disabled:opacity-50 group hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                        >
                            {status === 'loading' ? (
                                <span className="h-4 w-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin"></span>
                            ) : (
                                <>
                                    Subscribe <Send className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
