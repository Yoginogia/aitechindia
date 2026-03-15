export const metadata = {
    title: 'Privacy Policy | AITechIndia',
    description: 'AITechIndia की Privacy Policy — आपका data कैसे collect और use होता है।',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 max-w-4xl py-12 md:py-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 gradient-text">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground/60 mb-8">Last Updated: March 8, 2026</p>

            <div className="prose prose-lg prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p>
                    AITechIndia (&quot;हम&quot;, &quot;हमारा&quot;) पर आपकी privacy हमारी top priority है। यह Privacy Policy बताती है कि हम आपकी personal information को कैसे collect, use और protect करते हैं।
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">1. हम क्या Information Collect करते हैं</h2>
                <p>
                    <strong className="text-foreground">आपके द्वारा दी गई information:</strong> जब आप हमारा newsletter subscribe करते हैं या contact form use करते हैं, तब हम आपका नाम और email collect कर सकते हैं।
                </p>
                <p>
                    <strong className="text-foreground">Automatically collect होने वाली information:</strong> जब आप AITechIndia visit करते हैं, हम आपके browser, IP address, और browsing behavior के बारे में कुछ basic जानकारी collect करते हैं (cookies के through)।
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">2. Cookies और Tracking</h2>
                <p>हम cookies use करते हैं site को बेहतर बनाने के लिए:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li><strong className="text-foreground">Essential Cookies:</strong> Site के सही काम के लिए ज़रूरी हैं।</li>
                    <li><strong className="text-foreground">Analytics Cookies:</strong> समझने के लिए कि visitors site को कैसे use करते हैं।</li>
                    <li><strong className="text-foreground">Advertising Cookies (Google AdSense):</strong> Google और उसके partners ads दिखाने के लिए cookies use करते हैं।</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">3. Data का Use</h2>
                <p>हम collected data का use करते हैं: site को maintain करने, improve करने, और आपको better experience देने के लिए।</p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">4. Third-Party Links</h2>
                <p>हमारी site पर बाहर की websites के links हो सकते हैं। उन websites की privacy policies के लिए हम responsible नहीं हैं।</p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">5. Contact</h2>
                <p>
                    Privacy से related कोई सवाल हो तो email करें: <a href="mailto:aitechindia365@gmail.com" className="text-primary hover:underline">aitechindia365@gmail.com</a>
                </p>
            </div>
        </div>
    );
}
