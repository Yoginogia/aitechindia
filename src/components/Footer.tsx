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
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/50">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/50">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/50">
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
            </div>
        </footer>
    );
}
