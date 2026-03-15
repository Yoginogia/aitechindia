'use client';

export default function ContactForm() {
    return (
        <form className="space-y-5 text-sm" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-xl font-bold tracking-tight mb-2 gradient-text">Message भेजें</h3>
            <p className="text-muted-foreground text-xs mb-4">हम 24 घंटे के अंदर reply करते हैं।</p>

            <div className="space-y-2">
                <label htmlFor="name" className="text-muted-foreground text-xs font-medium">नाम</label>
                <input type="text" id="name" className="w-full flex h-10 rounded-xl border border-border/30 bg-secondary/30 px-4 py-2 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all" placeholder="आपका नाम" />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-muted-foreground text-xs font-medium">Email</label>
                <input type="email" id="email" className="w-full flex h-10 rounded-xl border border-border/30 bg-secondary/30 px-4 py-2 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all" placeholder="name@example.com" />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-muted-foreground text-xs font-medium">Message</label>
                <textarea id="message" rows={4} className="w-full flex rounded-xl border border-border/30 bg-secondary/30 px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 resize-none transition-all" placeholder="हम आपकी कैसे मदद कर सकते हैं?"></textarea>
            </div>

            <button className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 px-8 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:scale-[1.02] w-full mt-2">
                Message भेजें
            </button>
        </form>
    );
}
