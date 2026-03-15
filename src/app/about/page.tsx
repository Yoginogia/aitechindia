import { Sparkles, Target, Layers, Zap } from 'lucide-react';

export const metadata = {
    title: 'हमारे बारे में | AITechIndia',
    description: 'AITechIndia के बारे में जानें — हमारा mission, हमारा vision, और हम क्या cover करते हैं।',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 max-w-4xl py-12 md:py-20">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                <Sparkles className="mr-2 h-3 w-3" /> About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 gradient-text">हमारे बारे में</h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                <strong className="text-foreground">AITechIndia</strong> एक ऐसी जगह है जहाँ technology की दुनिया को simple और सीधी भाषा में समझाया जाता है। चाहे आप एक developer हो, student हो, या बस tech में interested हो — AITechIndia आपके लिए है।
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="rounded-2xl border border-border/30 bg-card/50 p-6 card-glow space-y-4">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <Target className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-lg">हमारा Mission</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">AI और tech की complex दुनिया को हिंदी + English में समझाना — ताकि हर कोई informed रह सके।</p>
                </div>
                <div className="rounded-2xl border border-border/30 bg-card/50 p-6 card-glow space-y-4">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                        <Layers className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-lg">क्या Cover करते हैं</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">AI tools, smartphones, laptops, software updates, और tech industry के latest trends और breaking news.</p>
                </div>
                <div className="rounded-2xl border border-border/30 bg-card/50 p-6 card-glow space-y-4">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-lg">Hybrid Approach</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">हाथ से लिखे गए in-depth articles + auto-updating live news feeds — दोनों का perfect mix.</p>
                </div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">हमारी कहानी</h2>
                <p>
                    जब tech की दुनिया में रोज़ नए-नए tools और products आते हैं, तो सब कुछ समझना मुश्किल हो जाता है। AITechIndia इसलिए बना है — ताकि हम noise को cut करके आपको सिर्फ वो जानकारी दें जो ज़रूरी है।
                </p>
                <p>
                    हम AI technology को खुद अपने काम में इस्तेमाल करते हैं। हमारा &quot;Live Trending News&quot; section दुनिया भर से ताज़ा खबरें automatically fetch करता है, जबकि हमारी editorial team regularly deep-dive articles लिखती है जो unique और valuable हैं।
                </p>
            </div>
        </div>
    );
}
