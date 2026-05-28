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
        slug: "samsung-galaxy-s25-fe-launch",
        title: "Samsung Galaxy S25 FE — AI Flagship Killer! 🚀",
        category: "Smartphone",
        description: "Samsung ने लॉन्च किया S25 FE! Exynos 2500, Galaxy AI और 144Hz स्क्रीन के साथ मिड-रेंज मार्केट का नया राजा। HDFC कार्ड पर ₹5,000 की एक्स्ट्रा छूट!",
        price: "₹39,999",
        discount: "Launch Offer ₹5,000 Off",
        rating: 4.8,
        tag: "🔥 Bestseller",
        image: "/images/blog/upcoming_samsung_s27.webp",
        buyLink: `https://www.amazon.in/s?k=samsung+galaxy+s25+fe&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India",
        specs: [
            "Exynos 2500 (4nm) Processor with AI Engine",
            "6.4-inch Dynamic AMOLED 2X, 144Hz Refresh Rate",
            "50MP OIS Main + 12MP UW + 8MP Telephoto (3x)",
            "Galaxy AI Built-in (Circle to Search, Live Translate)",
            "4500mAh Battery, 45W Fast Charging support",
            "IP68 Water & Dust Resistant"
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
        content: "Samsung Galaxy S25 FE फाइनली भारत में आ गया है! यह उन लोगों के लिए बेस्ट है जिन्हें ₹40,000 के बजट में प्रॉपर फ्लैगशिप फीचर्स और Samsung की विश्वसनीयता चाहिए। इसमें S25 सीरीज के सभी Galaxy AI फीचर्स दिए गए हैं, जैसे Live Translate और Circle to Search। HDFC बैंक के ₹5,000 डिस्काउंट के साथ यह फोन अपने सेगमेंट का सबसे बड़ा वैल्यू फॉर मनी ऑप्शन बन गया है!"
    },
    {
        slug: "ipad-air-m3-student-deal",
        title: "Apple iPad Air M3 (2026) — Student Offer! 🎓",
        category: "Tablet",
        description: "M3 चिप वाला नया iPad Air! स्टूडेंट्स के लिए ₹8,000 का फ्लैट डिस्काउंट और फ्री Apple Pencil USB-C। कॉलेज और कोडिंग के लिए परफेक्ट डिवाइस।",
        price: "₹51,900",
        discount: "₹8,000 Off + Free Pencil",
        rating: 4.9,
        tag: "⭐ Student Deal",
        image: "/images/blog/apple_macbook_neo_budget.webp",
        buyLink: `https://www.amazon.in/s?k=ipad+air+m3&tag=${AFFILIATE_TAG}`,
        platform: "Amazon / Apple Education",
        specs: [
            "Apple M3 Chip (8-core CPU, 10-core GPU)",
            "10.9-inch Liquid Retina Display with True Tone",
            "12MP Front Landscape Ultra-Wide Camera",
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
        content: "Apple का नया iPad Air M3 अब स्टूडेंट्स के लिए एक बेजोड़ डील के साथ उपलब्ध है। M3 चिप के साथ यह पुराने मॉडल्स से दोगुना तेज़ है और 4K वीडियो एडिटिंग या हेवी गेमिंग आसानी से हैंडल करता है। अगर आपके पास Student ID है, तो आपको ₹8,000 का फ्लैट डिस्काउंट और एक Apple Pencil USB-C बिल्कुल मुफ्त मिलेगी। कॉलेज और क्रिएटिव काम के लिए इससे बेहतर टैबलेट इस कीमत में नहीं मिलेगा!"
    },
    {
        slug: "oneplus-nord-ce-6-launch-deal",
        title: "OnePlus Nord CE 6 — 8000mAh Battery & 144Hz AMOLED! 🔋",
        category: "Smartphone",
        description: "OnePlus का नया बजट किंग! 8000mAh की विशालकाय बैटरी, Snapdragon 7s Gen 4, 144Hz AMOLED और 100W SuperVOOC चार्जिंग।",
        price: "₹22,999",
        discount: "Launch Offer ₹2,000 Off",
        rating: 4.7,
        tag: "🔋 Battery Monster",
        image: "/images/blog/oneplus_nord_ce6_launch.png",
        buyLink: `https://www.amazon.in/s?k=oneplus+nord+ce+6&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India",
        specs: [
            "Snapdragon 7s Gen 4 NPU Processor",
            "6.7-inch FHD+ 144Hz AMOLED Display (3000 nits)",
            "8,000mAh Battery — 3-day backup",
            "100W SUPERVOOC Fast Charging (0-100% in 42m)",
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
            "No-Cost EMI — Up to 6 Months"
        ],
        colors: ["Midnight Obsidian", "Lunar Ivory"],
        content: "OnePlus Nord CE 6 ने भारत के मिड-रेंज मार्केट में तहलका मचा दिया है। Snapdragon 7s Gen 4 और 8000mAh की सुपर-बैटरी का कॉम्बिनेशन आपको बिना चार्ज किए पूरे दो दिन तक भारी गेमिंग करने देता है। 100W फ़ास्ट चार्जर बॉक्स के अंदर ही आता है जो फोन को केवल 42 मिनट में पूरा चार्ज कर देता है। लॉन्च सेल में ₹2,000 बैंक डिस्काउंट के साथ यह बेहतरीन सौदा है।"
    },
    {
        slug: "asus-predator-helios-neo-16-gaming-deal",
        title: "ASUS Predator Helios Neo 16 — Core i5 + RTX 4050! 🎮",
        category: "Laptop",
        description: "ASUS का धाकड़ गेमिंग लैपटॉप अब स्टूडेंट सेल में 22% डिस्काउंट पर! Intel Core i5-13500HX, RTX 4050 और 165Hz स्क्रीन के साथ गेमिंग का असली मज़ा।",
        price: "₹84,990",
        discount: "Flat 22% Off (Student Special)",
        rating: 4.8,
        tag: "🎮 Gaming Pick",
        image: "/images/blog/asus_ai_pc.png",
        buyLink: `https://www.amazon.in/s?k=asus+predator+helios+neo+16&tag=${AFFILIATE_TAG}`,
        platform: "Flipkart / Amazon",
        specs: [
            "Intel Core i5-13500HX (Up to 4.70 GHz)",
            "NVIDIA GeForce RTX 4050 Laptop GPU (6GB GDDR6)",
            "16GB DDR5 RAM (Upgradable to 32GB)",
            "512GB PCIe Gen4 SSD Ultra-Fast Storage",
            "16-inch WQXGA (2560x1600) 165Hz IPS Display",
            "Liquid Metal Thermal System with Dual Fans"
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
        content: "ASUS Predator Helios Neo 16 गेमर्स और वीडियो एडिटर्स के लिए सर्वश्रेष्ठ मशीन है। Intel Core i5-13500HX एक डेस्कटॉप-क्लास प्रोसेसर है जो हैवी लोड के दौरान भी स्मूथ चलता है। RTX 4050 ग्राफ़िक्स कार्ड की मदद से आप AAA गेम्स को 1080p Ultra सेटिंग्स पर खेल सकते हैं। लिक्विड मेटल थर्मल सिस्टम की वजह से लैपटॉप गर्म नहीं होता। बैक टू कैंपस सेल में मिल रहा डिस्काउंट इसे इस बजट का बेस्ट गेमिंग लैपटॉप बनाता है।"
    },
    {
        slug: "samsung-galaxy-tab-s9-fe-deal",
        title: "Samsung Galaxy Tab S9 FE — Flat 26% Off + Free S Pen! ✏️",
        category: "Tablet",
        description: "असाइनमेंट्स और क्लास नोट्स के लिए बेस्ट एंड्रॉइड टैबलेट। 10.9-इंच 90Hz स्क्रीन, IP68 वॉटर रेसिस्टेंस और इन-बॉक्स S-Pen स्टाइलस बिल्कुल मुफ्त।",
        price: "₹32,990",
        discount: "Flat 26% Off + Free S Pen",
        rating: 4.7,
        tag: "✏️ Student Deal",
        image: "/images/blog/samsung_ai_tv_deals.png",
        buyLink: `https://www.amazon.in/s?k=samsung+galaxy+tab+s9+fe&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India",
        specs: [
            "Exynos 1380 Octa-Core High Performance Chip",
            "10.9-inch 90Hz WUXGA Display with Vision Booster",
            "6GB RAM, 128GB Internal Storage (1TB Expandable)",
            "8000mAh Battery with 45W Fast Charging support",
            "IP68 Water & Dust Resistant (Tablet and S Pen both)",
            "Included S Pen in the Box (Zero latency writing)"
        ],
        variants: [
            "6GB RAM + 128GB Wi-Fi — ₹32,990",
            "8GB RAM + 256GB Wi-Fi — ₹38,990"
        ],
        bankOffers: [
            "Student Club Account — Extra ₹2,000 Off",
            "HDFC Credit Card — ₹3,000 Instant Discount",
            "No-Cost EMI — Up to 9 Months"
        ],
        colors: ["Mint", "Gray", "Lavender", "Silver"],
        content: "अगर आप पढ़ने, नोट्स लिखने और नेटफ्लिक्स देखने के लिए एक रग्ड और प्रीमियम टैबलेट खोज रहे हैं, तो Samsung Galaxy Tab S9 FE से बेहतर कोई विकल्प नहीं है। इसकी सबसे बड़ी खासियत यह है कि यह IP68 वॉटरप्रूफ है और बॉक्स के अंदर ही बिना किसी अतिरिक्त कीमत के ओरिजिनल S-Pen स्टाइलस आता है। बैक टू कैंपस सेल में इसे ₹32,990 की ऐतिहासिक कम कीमत पर बेचा जा रहा है।"
    },
    {
        slug: "redmi-note-15-se-launch-offer",
        title: "Redmi Note 15 Special Edition — 200MP OIS Camera King! 📸",
        category: "Smartphone",
        description: "सबसे तगड़ा लाॅन्च! 200MP OIS कैमरा, 90W HyperCharge, और AI Magic Erase के साथ पहली सेल शुरू। बजट सेगमेंट का नया सनसनीखेज फोन।",
        price: "₹17,999",
        discount: "Launch Special Offer",
        rating: 4.8,
        tag: "🔥 Hot Deal",
        image: "/images/blog/best_phones_15k.webp",
        buyLink: `https://www.amazon.in/s?k=Redmi+Note+15+Special+Edition&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India",
        specs: [
            "200MP Samsung ISOCELL HP3 Main Camera (OIS)",
            "MediaTek Dimensity 7300 Processor (4nm)",
            "6.67-inch AMOLED, 120Hz, 2100 nits Peak Brightness",
            "5500mAh Battery with 90W HyperCharge (0-100% in 28m)",
            "8GB LPDDR4X RAM + 256GB Storage",
            "AI Magic Eraser + AI Zoom Enhancement Tools"
        ],
        variants: [
            "8GB RAM + 256GB Storage — ₹17,999"
        ],
        bankOffers: [
            "SBI Credit Card — 10% Instant Off",
            "AXIS Credit Card — 5% Cashback",
            "No-Cost EMI — 6 months support"
        ],
        colors: ["Lunar Silver", "Cosmic Black"],
        content: "Redmi Note 15 Special Edition भारत में लाॅन्च हो चुका है! मात्र ₹17,999 रुपये में 200MP कैमरा और 90W HyperCharge (जो फोन को आधे घंटे में पूरा चार्ज कर देता है) वाला यह फोन मार्केट में धूम मचा रहा है। इस प्राइस रेंज में एआई ऑब्जेक्ट इरेज़र (AI Magic Eraser) और एक बेहद शानदार बेज़ल-लेस AMOLED स्क्रीन दी गई है। यह स्टॉक तेज़ी से खत्म हो रहा है, तुरंत चेक करें!"
    },
    {
        slug: "samsung-vision-ai-4k-smart-tv-deal",
        title: "Samsung 55' Vision AI 4K Smart TV — Flat 38% Off! 📺",
        category: "Smart TV",
        description: "सैमसंग समर सेल 2026 में 55-इंच विज़न एआई 4K टीवी मॉडल्स पर मिल रही बड़ी छूट। रियल-टाइम एआई अपस्केलिंग और 3D सराउंड ऑडियो के साथ घर को बनाएं सिनेमाहॉल।",
        price: "₹42,990",
        discount: "Flat 38% Off (Summer Sale)",
        rating: 4.8,
        tag: "📺 Blockbuster Deal",
        image: "/images/blog/samsung_ai_tv_deals.png",
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
        content: "सैमसंग विज़न एआई 4K टीवी समर सेल में अपनी अब तक की सबसे कम कीमत पर बिक रहा है। इसमें मौजूद विज़न एआई प्रोसेसर आपके पुराने 1080p वीडियो को भी ऑटोमैटिक रूप से 4K क्वालिटी में बदल देता है। क्यू-सिम्फनी साउंड बार के साथ कनेक्ट होकर शानदार सिनेमाई अनुभव देता है। घर बैठे लाइव मैच या एचडी मूवीज़ का मज़ा दोगुना करने के लिए यह सेल की सबसे बड़ी डील है।"
    },
    {
        slug: "realme-narzo-100-lite-5g-launch-deal",
        title: "Realme Narzo 100 Lite 5G — 7000mAh Titan Battery! ⚡",
        category: "Smartphone",
        description: "Realme Narzo 100 Lite 5G भारत में लॉन्च! 7000mAh 'Titan' बैटरी, 144Hz रिफ्रेश रेट स्क्रीन, और Google Circle to Search एआई फीचर सिर्फ ₹13,499 में।",
        price: "₹13,499",
        discount: "₹1,500 Bank Discount",
        rating: 4.6,
        tag: "⚡ Budget Pick",
        image: "/images/blog/best_phones_15k.webp",
        buyLink: `https://www.amazon.in/s?k=realme+narzo+100+lite+5g&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India",
        specs: [
            "7000mAh 'Titan Battery' — 3-day backup life",
            "6.8-inch FHD+ 144Hz Smooth Display (900 nits)",
            "MediaTek Dimensity 6300 (5nm) 5G Processor",
            "Google Circle to Search & AI Eraser built-in",
            "IP64 Dust & Splash Resistant Rating",
            "Military-Grade Durability Certified chassis"
        ],
        variants: [
            "4GB RAM + 128GB Storage — ₹13,499",
            "6GB RAM + 128GB Storage — ₹14,999"
        ],
        bankOffers: [
            "Axis Bank Cards — ₹1,500 Instant Off",
            "DBS Bank Card — 10% Instant Off",
            "No-Cost EMI — 6 months support"
        ],
        colors: ["Thunder Black", "Frost Silver"],
        content: "यदि आपका बजट सीमित है लेकिन आप बिना बार-बार चार्ज करने के झंझट के एक दमदार 5G फोन चाहते हैं, तो नार्जो 100 लाइट बेस्ट चॉइस है। इसकी 7000mAh की टाइटन बैटरी आराम से 3 दिन की लाइव लाइफ देती है। 144Hz रिफ्रेश रेट के कारण फेसबुक और इंस्टाग्राम स्क्रॉलिंग बेहद स्मूथ रहती है। आईपी64 रेटिंग की वजह से यह धूल और पानी के छींटों को भी आसानी से सह लेता है।"
    },
    {
        slug: "asus-vivobook-15-student-deal",
        title: "ASUS Vivobook 15 (Core i3, 512GB SSD) — Student Special! 💻",
        category: "Laptop",
        description: "फ्लिपकार्ट बैक टू कैंपस सेल की सबसे लोकप्रिय डील! रोजाना के पढ़ाई, कोडिंग और ऑनलाइन क्लासेज के लिए थिन एंड लाइट डिजाइन वाला शानदार स्टूडेंट लैपटॉप।",
        price: "₹39,990",
        discount: "27% Off (Back to Campus Sale)",
        rating: 4.5,
        tag: "💻 Budget Student Pick",
        image: "/images/blog/asus_ai_pc.png",
        buyLink: `https://www.amazon.in/s?k=asus+vivobook+15+i3&tag=${AFFILIATE_TAG}`,
        platform: "Flipkart / Amazon",
        specs: [
            "Intel Core i3-1215U (12th Gen) Processor",
            "8GB DDR4 RAM (Upgradable to 16GB)",
            "512GB M.2 NVMe PCIe 3.0 SSD Storage",
            "15.6-inch Full HD (1920x1080) Anti-Glare Display",
            "Thin & Light: 1.7kg Weight, 19.9mm profile",
            "Pre-installed Windows 11 Home + MS Office"
        ],
        variants: [
            "8GB RAM + 512GB SSD — ₹39,990",
            "16GB RAM + 512GB SSD — ₹43,990"
        ],
        bankOffers: [
            "HDFC Credit Card — ₹3,000 Flat Off",
            "SBI Bank Cards — ₹2,500 Instant Discount",
            "No-Cost EMI — 3 & 6 Months options"
        ],
        colors: ["Quiet Blue", "Icelight Silver"],
        content: "ASUS Vivobook 15 कॉलेज स्टूडेंट्स के लिए सबसे भरोसेमंद बजट लैपटॉप है। 12th जेनरेशन इंटेल कोर i3 प्रोसेसर और 512GB एसएसडी का कॉम्बिनेशन वर्ड, एक्सेल, कोडिंग और वेब ब्राउज़िंग को बिना किसी रुकावट के रन करता है। इसका वजन केवल 1.7 किलोग्राम है जिससे आप इसे आसानी से अपने कॉलेज बैग में कैरी कर सकते हैं। ₹39,990 की कीमत पर यह इस समय की सबसे अच्छी बजट लैपटॉप डील है।"
    },
    {
        slug: "xbox-series-x-massive-price-drop",
        title: "Xbox Series X 1TB Console — 40% OFF Live! 🎮",
        category: "Gaming",
        description: "गेमर्स के लिए लाइफ-टाइम डील! आशा शर्मा की नई रणनीति के तहत Xbox Series X कंसोल पर अब तक का सबसे बड़ा 40% डिस्काउंट लाइव। HDFC कार्ड पर ₹4,000 की एक्स्ट्रा छूट।",
        price: "₹39,990",
        discount: "40% OFF + ₹4,000 Bank Off",
        rating: 4.9,
        tag: "🎮 Hardcore Gaming",
        image: "/images/blog/xbox_new_era.webp",
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
        content: "Xbox की नई रणनीतियों के चलते Amazon India पर Xbox Series X पर अब तक की सबसे भारी छूट मिल रही है। यह 1TB कंसोल दुनिया के सबसे पावरफुल गेमिंग बॉक्सेस में से एक है जिसमें ट्रू 4K 120FPS गेमिंग का मज़ा है। Xbox Game Pass के साथ आप पहले दिन से ही सैंकड़ों बड़े गेम्स तुरंत खेल सकते हैं। यह लिमिटेड स्टॉक डील है, मौका हाथ से न जाने दें!"
    }
];

export function getDealBySlug(slug: string): Deal | undefined {
    return TOP_DEALS.find(deal => deal.slug === slug);
}

export function getAllDealSlugs(): string[] {
    return TOP_DEALS.map(deal => deal.slug);
}
