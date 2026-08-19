export const AFFILIATE_TAG = "aitechnews-21";

export type Deal = {
    slug: string;
    title: string;
    category: string;
    description: string;
    price: string;
    discount: string;
    rating: number;
    tag?: string;
    image: string;
    buyLink: string;
    platform: string;
    content: string;
    specs?: string[];
    variants?: string[];
    bankOffers?: string[];
    colors?: string[];
};

export const TOP_DEALS: Deal[] = [
    {
        slug: "tecno-pova-8-pro-5g-flipkart-launch-deal",
        title: "Tecno POVA 8 Pro 5G — 7000mAh Monster Battery Launch! 🔋⚡",
        category: "Smartphone",
        description: "Tecno ने लॉन्च किया 7,000mAh बैटरी और 70W फ़ास्ट चार्जिंग वाला गेमिंग मॉन्स्टर! मीडियाटेक डाइमेंसिटी 5G, मेका लाइट बार और फ्लिपकार्ट लॉन्च सेल में ₹2,000 की सीधी छूट।",
        price: "₹14,999",
        discount: "Launch Offer ₹2,000 Off",
        rating: 4.9,
        tag: "🔥 Bestseller",
        image: "/images/blog/tecno-pova-8-pro-5g-india-launch-specifications-price.webp",
        buyLink: `https://www.flipkart.com/search?q=tecno+pova+8+pro+5g`,
        platform: "Flipkart Exclusive",
        specs: [
            "7,000mAh Mega Battery with 3-day backup",
            "70W Flash Charging (0-80% in 38 mins) + 10W Reverse Charging",
            "MediaTek Dimensity 5G 6nm High-Speed Gaming Processor",
            "6.78-inch FHD+ 120Hz Adaptive Refresh Screen",
            "50MP AI Dual Camera with 2K EIS Video Recording",
            "Cyberpunk Mecha LED Notification Light Strips"
        ],
        variants: [
            "8GB RAM + 128GB Storage — ₹14,999 (Effective)",
            "8GB RAM + 256GB Storage — ₹16,999 (Effective)"
        ],
        bankOffers: [
            "HDFC / SBI Credit Cards — Flat ₹2,000 Instant Discount",
            "Flipkart Axis Bank Card — 5% Unlimited Cashback",
            "No-Cost EMI — Starting from ₹2,500/month"
        ],
        colors: ["Cyber Black", "Mecha Silver", "Neon Blue"],
        content: "Tecno POVA 8 Pro 5G भारत के बजट गेमर्स और छात्रों के लिए सबसे बड़ी सौगात बन कर आया है। 7,000mAh की विशालकाय बैटरी के साथ आपको दिनभर पावर बैंक कैरी करने की बिल्कुल जरूरत नहीं पड़ेगी। 70W की सुपरफास्ट चार्जिंग से यह तुरंत चार्ज हो जाता है और रिवर्स चार्जिंग सपोर्ट के जरिए आपके अन्य गैजेट्स को भी चार्ज कर सकता है। 21 अगस्त की पहली फ्लिपकार्ट सेल में ₹2,000 बैंक छूट के साथ यह ₹15,000 के नीचे की सबसे तगड़ी डील है!"
    },
    {
        slug: "mahindra-be-6-sporteq-electric-suv-baas-deal",
        title: "Mahindra BE 6 SPORTEQ EV — BaaS Model @ ₹11.45 Lakh! 🚗⚡",
        category: "EV & Mobility",
        description: "Mahindra की फ्लैगशिप बॉर्न-इलेक्ट्रिक कूपे SUV! 535 KM रेंज, Google Gemini 'TEQ_Talk' AI कॉकपिट और ₹11.45 लाख से शुरू होने वाला क्रांतिकारी BaaS मॉडल।",
        price: "₹11.45 Lakh",
        discount: "BaaS Model (₹3.75/km)",
        rating: 4.9,
        tag: "⚡ EV Special",
        image: "/images/blog/mahindra-be-6-sporteq-electric-suv-india-launch-price-baas.webp",
        buyLink: `https://aitechnews.co.in/blog/mahindra-be-6-sporteq-electric-suv-india-launch-price-baas`,
        platform: "Mahindra Electric Official",
        specs: [
            "79 kWh Advanced LFP Blade Battery Pack",
            "535 KM ARAI Certified Range (460+ KM Real World)",
            "175 kW DC Ultra-Fast Charging (20-80% in 20 mins)",
            "285 bhp (210 kW) Rear-Wheel Drive Motor, 380 Nm Torque",
            "Google Gemini AI 'TEQ_Talk' Multilingual Voice Assistant",
            "BaaS (Battery-as-a-Service) ₹3.75/km Subscription Model"
        ],
        variants: [
            "BE 6 SPORTEQ (BaaS Model) — ₹11.45 Lakh",
            "BE 6 SPORTEQ (Upfront Purchase) — ₹19.45 Lakh"
        ],
        bankOffers: [
            "Green Car Loan — Special 7.99% Interest Rate",
            "Priority Delivery starting August 26, 2026",
            "Free Home Charger Installation Support"
        ],
        colors: ["Stealth Grey", "Cyber Cyan", "Arctic White"],
        content: "महिंद्रा एंड महिंद्रा ने BE 6 SPORTEQ के साथ भारतीय ईवी बाजार में हलचल मचा दी है। इस इलेक्ट्रिक कूपे SUV में 79 kWh की बड़ी बैटरी और 535 किमी की रेंज मिलती है। BaaS (बैटरी-ऐज-ए-सर्विस) मॉडल के तहत शुरुआती कीमत मात्र ₹11.45 लाख रखी गई है, जिससे एक मध्यमवर्गीय परिवार भी आसानी से प्रीमियम इलेक्ट्रिक एसयूवी का मालिक बन सकता है। 26 अगस्त से डिलीवरी शुरू हो रही है!"
    },
    {
        slug: "poco-m8x-5g-flipkart-launch-deal",
        title: "Poco M8x 5G — India's First Snapdragon 4 Gen 5! 📱⚡",
        category: "Smartphone",
        description: "Poco लाया भारत का पहला Snapdragon 4 Gen 5 प्रोसेसर वाला फोन! 6,000mAh बैटरी, 120Hz स्क्रीन और बैंक डिस्काउंट के बाद सिर्फ ₹13,499 में।",
        price: "₹13,499",
        discount: "Launch Offer ₹1,500 Off",
        rating: 4.7,
        tag: "🔥 New Launch",
        image: "/images/blog/poco-m8x-5g-india-launch-snapdragon-4-gen-5-specs-price.webp",
        buyLink: `https://www.flipkart.com/search?q=poco+m8x+5g`,
        platform: "Flipkart Exclusive",
        specs: [
            "Qualcomm Snapdragon 4 Gen 5 (4nm) Processor",
            "6,000mAh Long-Lasting Battery with 45W Fast Charge",
            "6.79-inch Full HD+ 120Hz Adaptive Refresh Display",
            "50MP AI Dual Camera with 2K Video Recording",
            "Corning Gorilla Glass Victus Front Protection",
            "IP64 Splash & Dust Resistance"
        ],
        variants: [
            "6GB RAM + 128GB Storage — ₹13,499 (Effective)",
            "8GB RAM + 256GB Storage — ₹15,499 (Effective)"
        ],
        bankOffers: [
            "ICICI / HDFC Bank Cards — ₹1,500 Instant Discount",
            "Exchange Bonus — Extra ₹1,500 on old smartphones",
            "No-Cost EMI — Up to 6 months"
        ],
        colors: ["Cyber Yellow", "Power Black", "Glacier Blue"],
        content: "Poco M8x 5G ने बजट 5G सेगमेंट में पावर का नया स्तर पेश किया है। 4nm स्नैपड्रैगन 4 Gen 5 चिपसेट के साथ यह फोन 5.5 लाख+ AnTuTu स्कोर देता है, जिससे गेमिंग और मल्टीटास्किंग बिना किसी रुकावट के चलती है। 6,000mAh बैटरी के साथ 45W चार्जिंग इसे कॉलेज छात्रों और डेली यूजर्स के लिए ऑल-राउंडर बजट फोन बनाती है।"
    },
    {
        slug: "asus-expertbook-zero-trust-launch-deal",
        title: "ASUS ExpertBook B5 Zero Trust — Secure Corporate Deal! 💼",
        category: "Laptop",
        description: "ASUS ने कॉर्पोरेट्स और प्रोफेशनल्स के लिए लॉन्च किया बायोमेट्रिक Zero-Trust PC! Intel Core Ultra 7, FIDO2 पासवर्डलेस ऑथेंटिकेशन और ₹6,000 का फ्लैट बैंक डिस्काउंट।",
        price: "₹89,990",
        discount: "Launch Offer ₹6,000 Off",
        rating: 4.8,
        tag: "💼 Enterprise Pick",
        image: "/images/blog/asus-zero-trust-pc-biometric-security-launch.webp",
        buyLink: `https://www.amazon.in/s?k=asus+expertbook+b5&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India",
        specs: [
            "Intel Core Ultra 7 Processor with Dedicated AI NPU",
            "14-inch WUXGA OLED Display, 100% DCI-P3 Color Accuracy",
            "16GB LPDDR5X RAM, 512GB PCIe Gen4 NVMe SSD",
            "Dedicated Zero-Trust TPM Security Chip for hardware encryption",
            "FIDO2 Passwordless Biometric Fingerprint & IR Face Login",
            "Ultra-lightweight 1.2kg Carbon Fiber Military-Grade Chassis"
        ],
        variants: [
            "Core Ultra 7 + 16GB RAM + 512GB SSD — ₹89,990",
            "Core Ultra 9 + 32GB RAM + 1TB SSD — ₹1,19,990"
        ],
        bankOffers: [
            "ICICI / HDFC Credit Cards — Flat ₹6,000 Instant Discount",
            "No-Cost EMI — Up to 12 months",
            "Business Purchase — Save up to 18% with GST Input Tax Credit"
        ],
        colors: ["Star Black"],
        content: "ASUS ExpertBook B5 Zero Trust कॉर्पोरेट्स और उन प्रोफेशनल्स के लिए डिजाइन किया गया है जो अपनी डेटा सुरक्षा से कोई समझौता नहीं करना चाहते। इसमें इंटीग्रेटेड TPM सिक्योरिटी चिप दी गई है जो बायोमेट्रिक डेटा को हार्डवेयर स्तर पर सुरक्षित रखती है। पासवर्ड भूलने की झंझट को खत्म करते हुए यह लैपटॉप पूरी तरह पासवर्ड-लेस सुरक्षा (FIDO2) को सपोर्ट करता है।"
    },
    {
        slug: "samsung-galaxy-s25-fe-launch",
        title: "Samsung Galaxy S25 FE — AI Flagship Killer! 🚀",
        category: "Smartphone",
        description: "Samsung ने लॉन्च किया S25 FE! Exynos 2500, Galaxy AI और 144Hz AMOLED स्क्रीन के साथ प्रीमियम मार्केट का नया राजा। HDFC कार्ड पर ₹5,000 की एक्स्ट्रा छूट!",
        price: "₹39,999",
        discount: "Launch Offer ₹5,000 Off",
        rating: 4.8,
        tag: "⭐ Editor's Choice",
        image: "/images/deals/samsung-a57-5g.png",
        buyLink: `https://www.amazon.in/s?k=samsung+galaxy+s25+fe&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India",
        specs: [
            "Exynos 2500 (4nm) Processor with Advanced AI Engine",
            "6.4-inch Dynamic AMOLED 2X, 144Hz Refresh Rate (2600 nits)",
            "50MP OIS Main + 12MP Ultra-Wide + 8MP Telephoto (3x Optical)",
            "Full Suite Galaxy AI (Circle to Search, Live Translate, AI Note Assist)",
            "4500mAh Battery, 45W Fast Charging support",
            "IP68 Water & Dust Resistant Certified"
        ],
        variants: [
            "8GB RAM + 128GB Storage — ₹39,999",
            "8GB RAM + 256GB Storage — ₹43,999"
        ],
        bankOffers: [
            "HDFC Credit Card — ₹5,000 Instant Off",
            "No-Cost EMI — Up to 9 months",
            "Exchange Bonus — Extra ₹6,000 on old devices"
        ],
        colors: ["Mint", "Graphite", "Lavender", "Cream"],
        content: "Samsung Galaxy S25 FE उन लोगों के लिए बेस्ट है जिन्हें ₹40,000 के बजट में फ्लैगशिप स्तर के फीचर्स और Samsung की विश्वसनीयता चाहिए। इसमें S25 सीरीज के सभी Galaxy AI फीचर्स दिए गए हैं, जैसे Live Translate और Circle to Search। HDFC बैंक के ₹5,000 डिस्काउंट के साथ यह फोन अपने सेगमेंट का सबसे बड़ा वैल्यू फॉर मनी ऑप्शन बन गया है!"
    },
    {
        slug: "ipad-air-m3-student-deal",
        title: "Apple iPad Air M3 (2026) — Student Offer! 🎓",
        category: "Tablet",
        description: "M3 चिप वाला नया iPad Air! स्टूडेंट्स के लिए ₹8,000 का फ्लैट डिस्काउंट और फ्री Apple Pencil USB-C। कॉलेज और कोडिंग के लिए परफेक्ट डिवाइस।",
        price: "₹51,900",
        discount: "₹8,000 Off + Free Pencil",
        rating: 4.9,
        tag: "🎓 Student Deal",
        image: "/images/deals/ipad_air_m3_deal.png",
        buyLink: `https://www.amazon.in/s?k=ipad+air+m3&tag=${AFFILIATE_TAG}`,
        platform: "Amazon / Apple Education",
        specs: [
            "Apple M3 Chip (8-core CPU, 10-core GPU, Hardware Ray Tracing)",
            "10.9-inch Liquid Retina Display with True Tone & P3 Wide Color",
            "12MP Front Landscape Ultra-Wide Camera with Center Stage",
            "Wi-Fi 6E Support for ultra-fast connectivity",
            "Supports Apple Pencil Pro & Magic Keyboard"
        ],
        variants: [
            "128GB (Wi-Fi Only) — ₹51,900",
            "256GB (Wi-Fi Only) — ₹61,900"
        ],
        bankOffers: [
            "Student Discount — ₹8,000 Flat Off with Student ID",
            "Free Apple Pencil (USB-C) bundle offer",
            "ICICI Bank Credit Cards — Extra ₹3,000 Cashback"
        ],
        colors: ["Space Gray", "Starlight", "Purple", "Blue"],
        content: "Apple का नया iPad Air M3 स्टूडेंट्स के लिए एक बेजोड़ डील के साथ उपलब्ध है। M3 चिप के साथ यह पुराने मॉडल्स से दोगुना तेज़ है और 4K वीडियो एडिटिंग या हेवी गेमिंग आसानी से हैंडल करता है। अगर आपके पास Student ID है, तो आपको ₹8,000 का फ्लैट डिस्काउंट और एक Apple Pencil USB-C बिल्कुल मुफ्त मिलेगी।"
    },
    {
        slug: "oneplus-nord-ce-6-launch-deal",
        title: "OnePlus Nord CE 6 — 8000mAh Battery & 144Hz AMOLED! 🔋",
        category: "Smartphone",
        description: "OnePlus का बजट किंग! 8000mAh की विशालकाय बैटरी, Snapdragon 7s Gen 4, 144Hz AMOLED और 100W SuperVOOC चार्जिंग।",
        price: "₹22,999",
        discount: "Launch Offer ₹2,000 Off",
        rating: 4.7,
        tag: "🔋 Battery Monster",
        image: "/images/deals/oneplus-15r.png",
        buyLink: `https://www.amazon.in/s?k=oneplus+nord+ce+6&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India",
        specs: [
            "Snapdragon 7s Gen 4 NPU Processor",
            "6.7-inch FHD+ 144Hz AMOLED Display (3000 nits Peak)",
            "8,000mAh Battery — 3-day continuous backup",
            "100W SUPERVOOC Fast Charging (0-100% in 42 mins)",
            "108MP Sony LYT-600 OIS Primary Camera",
            "OxygenOS 16 based on Android 16"
        ],
        variants: [
            "8GB RAM + 128GB Storage — ₹22,999",
            "8GB RAM + 256GB Storage — ₹24,999"
        ],
        bankOffers: [
            "SBI Credit Card — ₹2,000 Instant Off",
            "ICICI Credit Card — ₹2,000 Instant Off",
            "No-Cost EMI — 6 months support"
        ],
        colors: ["Midnight Obsidian", "Lunar Ivory"],
        content: "OnePlus Nord CE 6 ने भारत के मिड-रेंज मार्केट में तहलका मचा दिया है। Snapdragon 7s Gen 4 और 8000mAh की सुपर-बैटरी का कॉम्बिनेशन आपको बिना चार्ज किए पूरे दो दिन तक भारी गेमिंग करने देता है। 100W फ़ास्ट चार्जर बॉक्स के अंदर ही आता है जो फोन को केवल 42 मिनट में पूरा चार्ज कर देता है।"
    },
    {
        slug: "acer-predator-helios-neo-16-gaming-deal",
        title: "Acer Predator Helios Neo 16 — Core i5 + RTX 4050! 🎮",
        category: "Laptop",
        description: "Acer का धाकड़ गेमिंग लैपटॉप अब स्टूडेंट सेल में 22% डिस्काउंट पर! Intel Core i5-13500HX, RTX 4050 और 165Hz स्क्रीन के साथ गेमिंग का असली मज़ा।",
        price: "₹84,990",
        discount: "Flat 22% Off",
        rating: 4.8,
        tag: "🎮 Gaming Pick",
        image: "/images/deals/acer_predator_helios_deal.png",
        buyLink: `https://www.amazon.in/s?k=acer+predator+helios+neo+16&tag=${AFFILIATE_TAG}`,
        platform: "Flipkart / Amazon",
        specs: [
            "Intel Core i5-13500HX (14 Cores, Up to 4.70 GHz)",
            "NVIDIA GeForce RTX 4050 Laptop GPU (6GB GDDR6)",
            "16GB DDR5 RAM (Upgradable to 32GB)",
            "512GB PCIe Gen4 SSD Ultra-Fast Storage",
            "16-inch WQXGA (2560x1600) 165Hz IPS Display, 100% sRGB",
            "Liquid Metal Thermal Cooling System with Dual 5th Gen 3D Fans"
        ],
        variants: [
            "16GB RAM + 512GB SSD + RTX 4050 — ₹84,990",
            "16GB RAM + 1TB SSD + RTX 4060 — ₹1,04,990"
        ],
        bankOffers: [
            "SBI Credit Card — ₹4,000 Instant Off",
            "HDFC Bank Credit Card — 10% Instant Off",
            "No-Cost EMI — 12 months with Zero Downpayment"
        ],
        colors: ["Abyssal Black"],
        content: "Acer Predator Helios Neo 16 गेमर्स और वीडियो एडिटर्स के लिए सर्वश्रेष्ठ मशीन है। Intel Core i5-13500HX एक डेस्कटॉप-क्लास प्रोसेसर है जो हैवी लोड के दौरान भी स्मूथ चलता है। RTX 4050 ग्राफ़िक्स कार्ड की मदद से आप AAA गेम्स को 1080p Ultra सेटिंग्स पर खेल सकते हैं।"
    },
    {
        slug: "samsung-vision-ai-4k-smart-tv-deal",
        title: "Samsung 55' Vision AI 4K Smart TV — Flat 38% Off! 📺",
        category: "Smart TV",
        description: "55-इंच विज़न एआई 4K टीवी मॉडल्स पर मिल रही बड़ी छूट। रियल-टाइम एआई अपस्केलिंग और 3D सराउंड ऑडियो के साथ घर को बनाएं सिनेमाहॉल।",
        price: "₹42,990",
        discount: "Flat 38% Off Live",
        rating: 4.8,
        tag: "📺 Blockbuster Deal",
        image: "/images/deals/samsung-s26-ultra.png",
        buyLink: `https://www.amazon.in/s?k=samsung+vision+ai+tv+55&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India",
        specs: [
            "55-inch 4K Ultra HD Display Panel (3840x2160)",
            "Vision AI Processor with Real-time 4K Upscaling",
            "Active Voice Amplifier & Q-Symphony sound system",
            "SmartThings IoT Hub Built-in for home automation",
            "Dolby Digital Plus 3D Audio (20W Outputs)",
            "HDR10+ Support and Auto Game Mode (ALLM)"
        ],
        variants: [
            "43-inch Model — ₹29,990",
            "55-inch Model — ₹42,990",
            "65-inch Model — ₹58,990"
        ],
        bankOffers: [
            "SBI Bank Cards — ₹3,000 Instant Off",
            "HDFC Credit Card — ₹4,000 Cashback",
            "No-Cost EMI — Up to 18 Months"
        ],
        colors: ["Titan Gray Slim Design"],
        content: "सैमसंग विज़न एआई 4K टीवी अपनी अब तक की सबसे कम कीमत पर बिक रहा है। इसमें मौजूद विज़न एआई प्रोसेसर आपके पुराने 1080p वीडियो को भी ऑटोमैटिक रूप से 4K क्वालिटी में बदल देता है। क्यू-सिम्फनी साउंड बार के साथ कनेक्ट होकर शानदार सिनेमाई अनुभव देता है।"
    },
    {
        slug: "xbox-series-x-massive-price-drop",
        title: "Xbox Series X 1TB Console — 40% OFF Live! 🎮",
        category: "Gaming",
        description: "गेमर्स के लिए लाइफ-टाइम डील! Xbox Series X कंसोल पर अब तक का सबसे बड़ा 40% डिस्काउंट लाइव। HDFC कार्ड पर ₹4,000 की एक्स्ट्रा छूट।",
        price: "₹39,990",
        discount: "40% OFF + ₹4,000 Bank Off",
        rating: 4.9,
        tag: "🎮 Hardcore Gaming",
        image: "/images/deals/xbox-series-x.png",
        buyLink: `https://www.amazon.in/s?k=xbox+series+x&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India",
        specs: [
            "1TB Custom NVMe SSD Ultra-Fast Storage",
            "12 Teraflops GPU Processing Power",
            "True 4K Gaming up to 120 Frames Per Second",
            "Quick Resume feature to jump between games instantly",
            "Dolby Vision & TrueHD Atmos spatial audio",
            "Includes 1x Xbox Wireless Controller"
        ],
        variants: [
            "1TB (Disc Edition) — ₹39,990",
            "2TB (All-Digital Edition) — ₹44,990"
        ],
        bankOffers: [
            "HDFC Credit Cards — ₹4,000 Instant Discount",
            "Axis Bank Credit Card — 5% Unlimited Cashback",
            "No-Cost EMI — Up to 12 Months"
        ],
        colors: ["Matte Black"],
        content: "Amazon India पर Xbox Series X पर अब तक की सबसे भारी छूट मिल रही है। यह 1TB कंसोल दुनिया के सबसे पावरफुल गेमिंग बॉक्सेस में से एक है जिसमें ट्रू 4K 120FPS गेमिंग का मज़ा है। Xbox Game Pass के साथ आप पहले दिन से ही सैंकड़ों बड़े गेम्स तुरंत खेल सकते हैं।"
    }
];

export function getDealBySlug(slug: string): Deal | undefined {
    return TOP_DEALS.find(deal => deal.slug === slug);
}

export function getAllDealSlugs(): string[] {
    return TOP_DEALS.map(deal => deal.slug);
}
