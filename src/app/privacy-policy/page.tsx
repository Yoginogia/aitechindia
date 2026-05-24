import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy | AITechNews',
    description: 'AITechNews की Privacy Policy — जानिए हम आपका data कैसे collect, use, and protect करते हैं।',
    alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 max-w-4xl py-12 md:py-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 gradient-text">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground/60 mb-8">Last Updated: May 24, 2026</p>

            <div className="prose prose-lg prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p>
                    AITechNews.co.in (&quot;हम&quot;, &quot;हमारा&quot;, &quot;वेबसाइट&quot;) पर आपकी privacy हमारे लिए अत्यंत महत्वपूर्ण है। यह Privacy Policy दस्तावेज यह स्पष्ट करता है कि जब आप हमारी वेबसाइट का उपयोग करते हैं, तो किस प्रकार की व्यक्तिगत जानकारी (personal information) एकत्रित और दर्ज की जाती, और हम उसका उपयोग कैसे करते हैं।
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">1. एकत्रित की जाने वाली जानकारी (Information Collection)</h2>
                <p>
                    <strong className="text-foreground">व्यक्तिगत जानकारी (Personal Data):</strong> जब आप हमारे न्यूज़लेटर (newsletter) को सब्सक्राइब करते हैं, किसी पोस्ट पर कमेंट करते हैं, या हमसे संपर्क करते हैं, तो हम आपका नाम, ईमेल एड्रेस और स्वेच्छा से दी गई अन्य जानकारी एकत्र कर सकते हैं।
                </p>
                <p>
                    <strong className="text-foreground">लॉग फ़ाइलें (Log Files):</strong> अन्य सभी व्यावसायिक वेबसाइटों की तरह, AITechNews भी लॉग फ़ाइलों का उपयोग करता है। इन फ़ाइलों में शामिल जानकारी में इंटरनेट प्रोटोकॉल (IP) पते, ब्राउज़र का प्रकार, इंटरनेट सेवा प्रदाता (ISP), दिनांक/समय स्टैम्प, रेफ़रिंग/एग्जिट पेज और क्लिकों की संख्या शामिल होती है। यह डेटा व्यक्तिगत रूप से पहचान योग्य जानकारी से लिंक नहीं होता है।
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">2. कुकीज़ और ट्रैकिंग (Cookies and Web Beacons)</h2>
                <p>
                    हम आपके प्राथमिकताओं (preferences) को सहेजने, यूजर-विशिष्ट जानकारी दर्ज करने और उपयोगकर्ता अनुभव को बेहतर बनाने के लिए कुकीज़ (Cookies) का उपयोग करते हैं।
                </p>
                <p>
                    हमारी वेबसाइट पर कुछ विज्ञापन भागीदार (advertising partners) कुकीज़ और वेब बीकन (web beacons) का उपयोग कर सकते हैं। हमारे विज्ञापन भागीदारों में शामिल हैं:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                        <strong className="text-foreground">Google AdSense:</strong> Google एक थर्ड-पार्टी वेंडर (third-party vendor) के रूप में हमारी साइट पर विज्ञापन दिखाने के लिए कुकीज़ का उपयोग करता है।
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">3. Google AdSense और DoubleClick DART कुकीज़</h2>
                <p>
                    Google, हमारी वेबसाइट पर विज्ञापन प्रदर्शित करने के लिए विशेष कुकीज़ का उपयोग करता है:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                        Google द्वारा DART कुकी का उपयोग उसे हमारी साइट और इंटरनेट पर अन्य साइटों पर आपके विज़िट के आधार पर विज्ञापन दिखाने की अनुमति देता है।
                    </li>
                    <li>
                        यूजर Google के विज्ञापन और कंटेंट नेटवर्क गोपनीयता नीति पर जाकर DART कुकी के उपयोग को ऑप्ट-आउट (opt-out) कर सकते हैं। इसके लिए आप इस लिंक पर जा सकते हैं: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ad & Content Network Privacy Policy</a>।
                    </li>
                    <li>
                        आप Google की पर्सनलाइज्ड एडवरटाइजिंग सेटिंग्स पर जाकर रुचि-आधारित विज्ञापनों को ऑप्ट-आउट कर सकते हैं: <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Settings</a>।
                    </li>
                    <li>
                        वैकल्पिक रूप से, आप थर्ड-पार्टी वेंडर्स द्वारा पर्सनलाइज्ड एडवरटाइजिंग के लिए कुकीज़ के उपयोग को रोकने के लिए <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aboutads.info</a> पर जा सकते हैं।
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">4. Google की डेटा सुरक्षा नीति (Google Partner Disclosure)</h2>
                <p>
                    क्योंकि हम Google की एडवरटाइजिंग सेवाओं का उपयोग करते हैं, हम Google की डेटा उपयोग नीति का खुलासा करते हैं। जब आप हमारी वेबसाइट का उपयोग करते हैं, तो Google आपके डेटा को कैसे एकत्र और प्रोसेस करता है, इसे विस्तार से जानने के लिए कृपया निम्नलिखित आधिकारिक लिंक पर जाएँ:
                </p>
                <div className="bg-secondary/40 border border-border/30 rounded-xl p-5 my-4">
                    <p className="text-sm font-medium text-foreground mb-2">📢 Google Partner Privacy Disclosures:</p>
                    <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm break-all font-semibold flex items-center gap-1.5">
                        👉 How Google uses information from sites or apps that use our services
                    </a>
                </div>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">5. थर्ड-पार्टी विज्ञापन नीतियां (Third-Party Privacy Policies)</h2>
                <p>
                    थर्ड-पार्टी विज्ञापन सर्वर या विज्ञापन नेटवर्क तकनीक का उपयोग सीधे आपके ब्राउज़र पर विज्ञापनों और लिंक्स को भेजने के लिए करते हैं। जब ऐसा होता है, तो वे स्वचालित रूप से आपका आईपी पता प्राप्त कर लेते हैं। हमारी वेबसाइट का इन थर्ड-पार्टी विज्ञापनदाताओं की कुकीज़ पर कोई नियंत्रण नहीं है।
                </p>
                <p>
                    आपको इन थर्ड-पार्टी विज्ञापन सर्वरों की विस्तृत जानकारी और ऑप्ट-आउट करने के तरीकों के लिए उनकी संबंधित गोपनीयता नीतियों (privacy policies) को देखना चाहिए। यदि आप कुकीज़ को अक्षम (disable) करना चाहते हैं, तो आप इसे अपने व्यक्तिगत ब्राउज़र विकल्पों के माध्यम से कर सकते हैं।
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">6. बच्चों की जानकारी की सुरक्षा (COPPA Compliance)</h2>
                <p>
                    ऑनलाइन बच्चों की सुरक्षा बढ़ाना हमारे लिए महत्वपूर्ण है। हम माता-पिता और अभिभावकों को अपने बच्चों की ऑनलाइन गतिविधियों की निगरानी करने के लिए प्रोत्साहित करते हैं। AITechNews 13 वर्ष से कम उम्र के बच्चों से जानबूझकर कोई भी व्यक्तिगत पहचान योग्य जानकारी एकत्र नहीं करता है। यदि किसी अभिभावक को लगता है कि उनके बच्चे ने हमारे डेटाबेस में ऐसी जानकारी प्रदान की है, तो कृपया तुरंत हमसे संपर्क करें, हम उसे तुरंत हटाने का पूरा प्रयास करेंगे।
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">7. गोपनीयता नीति में परिवर्तन (Changes to Privacy Policy)</h2>
                <p>
                    हम समय-समय पर अपनी Privacy Policy को अपडेट कर सकते हैं। कोई भी बदलाव होने पर हम इस पेज पर नए अपडेट की तारीख के साथ उसे पब्लिश कर देंगे। हमारा सुझाव है कि आप समय-समय पर इस गोपनीयता नीति की समीक्षा करते रहें।
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">8. हमसे संपर्क करें (Contact Us)</h2>
                <p>
                    यदि इस गोपनीयता नीति के संबंध में आपका कोई प्रश्न या सुझाव है, तो कृपया बेझिझक हमसे संपर्क करें:
                </p>
                <p>
                    📧 ईमेल: <a href="mailto:aitechindia365@gmail.com" className="text-primary hover:underline font-semibold">aitechindia365@gmail.com</a>
                </p>
            </div>
        </div>
    );
}
