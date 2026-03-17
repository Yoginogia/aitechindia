export const metadata = {
    title: 'Advertise with Us | AITechNews',
    description: 'AITechNews पर advertise करें और भारत की सबसे तेज़ी से बढ़ती tech audience तक पहुंचें।',
};

export default function AdvertisePage() {
    return (
        <div className="container mx-auto px-4 md:px-8 max-w-4xl py-12 md:py-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 gradient-text">Advertise with Us</h1>
            <p className="text-lg text-muted-foreground mb-12">
                AITechNews के साथ जुड़ें और अपनी ब्रांड को सही टेक-सैवी (tech-savvy) ऑडियंस तक पहुंचाएं।
            </p>

            <div className="prose prose-lg prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p>
                    AITechNews भारत के सबसे तेज़ी से बढ़ते Tech और AI ब्लोग्स में से एक है। हमारी ऑडियंस गैजेट्स, AI टूल्स, और लेटेस्ट टेक न्यूज़ में बहुत दिलचस्पी रखती है।
                </p>

                <div className="bg-card/50 border border-border/30 rounded-2xl p-8 my-8 card-glow">
                    <h2 className="text-2xl font-bold text-foreground mb-4 mt-0">हम क्या ऑफर करते हैं?</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-foreground">Sponsored Articles:</strong> आपके प्रोडक्ट  का डिटेल रिव्यु।</li>
                        <li><strong className="text-foreground">Banner Ads:</strong> होमपेज और साइडबार पर प्रीमियम डिस्प्ले।</li>
                        <li><strong className="text-foreground">Newsletter Mentions:</strong> हमारे डेली रीडर्स के इनबॉक्स में सीधी पहुँच।</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Let&apos;s Talk!</h2>
                <p>
                    पार्टनरशिप, स्पॉन्सरशिप्स, या विज्ञापन की किसी भी जानकारी के लिए सीधा हमें ईमेल करें:
                </p>
                
                <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
                    <a href="mailto:aitechindia365@gmail.com" className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-sm font-medium !text-white !no-underline shadow-lg transition-transform hover:scale-105 active:scale-95">
                        aitechindia365@gmail.com
                    </a>
                    <span className="text-sm">पर मेल भेजें। हम 24 घंटे में आपको रिप्लाई करेंगे।</span>
                </div>
            </div>
        </div>
    );
}
