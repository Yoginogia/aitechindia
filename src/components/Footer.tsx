import Link from 'next/link';
import { Github, Twitter, Mail, Zap, Heart } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/30 bg-card/50">
            <div className="container mx-auto px-4 py-12 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/logo.png" alt="AITechNews" className="h-9 w-9 rounded-lg" />
                            <span className="font-bold text-xl tracking-tight gradient-text">
                                AITechNews
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            AI और Tech की दुनिया की सबसे ताज़ा खबरें, tools के reviews, और gadgets की जानकारी — सब एक जगह।
                        </p>
                        <div className="flex gap-4 mt-2">
                            <Link href="https://www.instagram.com/aitechnews.co.in" target="_blank" className="text-muted-foreground hover:text-pink-500 transition-colors p-2 rounded-lg hover:bg-secondary/50" title="Instagram">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                            </Link>
                            <Link href="mailto:aitechindia365@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/50" title="Email">
                                <Mail className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">Categories</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/latest" className="hover:text-primary transition-colors">ताज़ा खबरें</Link></li>
                            <li><Link href="/ai-tools" className="hover:text-primary transition-colors">AI & Machine Learning</Link></li>
                            <li><Link href="/gadgets" className="hover:text-primary transition-colors">Gadgets & Hardware</Link></li>
                            <li><Link href="/software" className="hover:text-primary transition-colors">Software Updates</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">Company</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">हमारे बारे में</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">संपर्क करें</Link></li>
                            <li><Link href="/advertise" className="hover:text-primary transition-colors">Advertise with Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between border-t border-border/30 pt-8">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} AITechNews Media. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 sm:mt-0 flex items-center gap-1">
                        Made with <Heart className="h-3 w-3 text-pink-500 fill-pink-500" /> in India
                    </p>
                </div>

                {/* Affiliate Disclosure - Required for AdSense + FTC Compliance */}
                <div className="mt-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/15 text-center">
                    <p className="text-xs text-muted-foreground/70 leading-relaxed">
                        <span className="font-semibold text-amber-500/80">📢 Affiliate Disclosure:</span>{' '}
                        AITechNews ke kuch links <span className="font-medium">Amazon</span> aur <span className="font-medium">Flipkart</span> affiliate links hain. Jab aap in links se kuch khareedte hain, toh humein ek small commission milta hai — aapko koi extra charge nahi lagta. Yeh commission site ko free mein chalane mein help karta hai.
                    </p>
                </div>
            </div>
        </footer>
    );
}
