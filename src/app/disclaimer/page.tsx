export const metadata = {
    title: 'Disclaimer | AITechNews',
    description: 'AITechNews का Disclaimer — हमारी content से जुड़ी ज़रूरी information.',
};

export default function DisclaimerPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 max-w-4xl py-12 md:py-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 gradient-text">Disclaimer</h1>
            <p className="text-sm text-muted-foreground/60 mb-8">Last Updated: March 8, 2026</p>

            <div className="prose prose-lg prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">1. General Information</h2>
                <p>
                    AITechNews पर दी गई जानकारी सिर्फ general informational purposes के लिए है। हम पूरी कोशिश करते हैं कि content accurate हो, लेकिन हम किसी भी information की 100% accuracy की guarantee नहीं देते।
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">2. External Links</h2>
                <p>
                    हमारी site पर third-party websites के links हो सकते हैं। इन external sites की accuracy या content के लिए हम ज़िम्मेदार नहीं हैं।
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">3. Affiliate Disclaimer</h2>
                <p>
                    हमारी site पर affiliate links हो सकते हैं (जैसे Amazon Associates, AI tools के referral programs)। अगर आप इन links से कुछ ख़रीदते हैं तो हमें एक छोटा commission मिल सकता है — आपको कोई extra cost नहीं लगता।
                </p>
                <p>
                    यह compensation हमारी recommendations को influence नहीं करता — हम सिर्फ वो products recommend करते हैं जिन्हें हम genuinely अच्छा मानते हैं।
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">4. &quot;Live News&quot; Disclaimer</h2>
                <p>
                    हमारी &quot;Live Trending News&quot; widget में headlines third-party News APIs से automatically आती हैं। AITechNews इन auto-fetched headlines को manually verify या edit नहीं करता। Source हमेशा cite किया जाता है।
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">5. Professional Advice नहीं है</h2>
                <p>
                    हमारी site पर जो भी tech tutorials, coding guides, या market analysis है — वो सब educational purposes के लिए है। यह professional financial, legal, या technical advice नहीं है।
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Contact</h2>
                <p>
                    कोई सवाल हो तो email करें: <a href="mailto:aitechindia365@gmail.com" className="text-primary hover:underline">aitechindia365@gmail.com</a>
                </p>
            </div>
        </div>
    );
}
