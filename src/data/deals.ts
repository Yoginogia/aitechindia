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
        slug: "samsung-galaxy-s26-ultra",
        title: "Samsung Galaxy S26 Ultra — AI Camera King 👑",
        category: "Flagship",
        description: "Samsung का नया S26 Ultra! Snapdragon 8 Elite Gen 5, 200MP AI Camera, Privacy Display, S Pen। 3 variants available!",
        price: "₹1,39,999 से",
        discount: "HDFC Card पर ₹9,000 Off",
        rating: 4.9,
        tag: "🆕 New Launch",
        image: "/images/deals/samsung-s26-ultra.png",
        buyLink: `https://www.amazon.in/s?k=samsung+galaxy+s26+ultra&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: [
            "200MP (f/1.4) + 50MP Ultrawide + 50MP (5x) + 10MP (3x) Quad Camera",
            "Snapdragon 8 Elite Gen 5 for Galaxy",
            "6.9-inch QHD+ Dynamic AMOLED 2X, 120Hz",
            "Privacy Display (30° viewing angle limit)",
            "Corning Gorilla Armor 2 Protection",
            "5,000mAh Battery, 65W Fast Charging",
            "15W Wireless + Reverse Wireless Charging",
            "S Pen Built-in",
            "Titanium Frame, IP68",
            "Android 16, One UI 8.5",
            "7 Years OS + Security Updates"
        ],
        variants: [
            "12GB + 256GB — ₹1,39,999",
            "12GB + 512GB — ₹1,59,999",
            "16GB + 1TB — ₹1,89,999"
        ],
        bankOffers: [
            "HDFC Credit Card — ₹9,000 Instant Discount",
            "Pre-order Voucher — ₹2,699 Benefits",
            "No-Cost EMI — 12 months तक",
            "Exchange Bonus — ₹10,000 तक"
        ],
        colors: ["Titanium Black", "Titanium Blue", "Titanium Purple", "Titanium White"],
        content: "Samsung Galaxy S26 Ultra 2026 का सबसे powerful smartphone है। इसमें 200MP AI camera है जो f/1.4 aperture के साथ 47% ज़्यादा light capture करता है — night mode में भी DSLR-level photos! Privacy Display technology screen को 30° से ज़्यादा angle पर invisible बना देती है। Snapdragon 8 Elite Gen 5 processor Galaxy AI features जैसे Live Translate, Circle to Search (multi-object), AI Screenshot Analyzer, और Private Album power करता है। Corning Gorilla Armor 2 protection, 65W fast charging (30 min में 75%), और 7 साल तक OS updates — Samsung ने sab kuch diya hai! HDFC Credit Card से ₹9,000 instant discount + ₹2,699 pre-order benefits milte hain।"
    },
    {
        slug: "xiaomi-17-ultra",
        title: "Xiaomi 17 Ultra — Leica Camera Beast!",
        category: "Flagship",
        description: "Leica Triple Camera (200MP Periscope + 50MP Main + 50MP Ultra), Snapdragon 8 Elite Gen 5, 6000mAh, 90W Charging!",
        price: "₹1,39,999",
        discount: "SBI Card पर ₹10,000 Off",
        rating: 4.8,
        tag: "🆕 Just Launched",
        image: "/images/deals/xiaomi-17-ultra.png",
        buyLink: `https://www.amazon.in/s?k=xiaomi+17+ultra&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: [
            "50MP Main (1-inch sensor, Variable Aperture, OIS) + 50MP Ultrawide + 200MP Periscope Telephoto (75-100mm optical zoom)",
            "Snapdragon 8 Elite Gen 5 Processor",
            "16GB LPDDR5X RAM + 512GB UFS 4.1",
            "6.9-inch 2K LTPO AMOLED, 120Hz, 3500 nits",
            "6,000mAh Battery, 90W Wired + 50W Wireless",
            "Dragon Crystal Glass 3.0 Protection",
            "IP68 + IP69 Water/Dust Resistant",
            "50MP Autofocus Selfie Camera",
            "HyperOS 3 (Android 16)",
            "IR Blaster, NFC, In-display Fingerprint"
        ],
        variants: [
            "16GB + 512GB — ₹1,39,999 (Single Variant)"
        ],
        bankOffers: [
            "SBI Credit Card — ₹10,000 Instant Discount (Effective: ₹1,29,999)",
            "Free Xiaomi Photography Kit Pro worth ₹19,999 (Early Bird)",
            "No-Cost EMI — 12 months तक",
            "Exchange Bonus — Up to ₹8,000"
        ],
        colors: ["Black", "White"],
        content: "Xiaomi 17 Ultra India का सबसे powerful camera phone है! Leica co-engineered triple camera system में 1-inch 50MP main sensor (physical variable aperture + OIS), 50MP ultrawide, और world's first 200MP periscope telephoto lens है जो 75mm-100mm continuous optical zoom देता है — DSLR जैसा! LOFIC technology low-light में incredible detail capture करती है। Snapdragon 8 Elite Gen 5 processor, 16GB LPDDR5X RAM, 512GB UFS 4.1 storage — flagship performance guaranteed। 6,000mAh battery 90W wired + 50W wireless charging support करती है। IP68 + IP69 dual rating means rain, dust, steam — kuch nahi hoga! SBI Credit Card se ₹10,000 instant off → effective price ₹1,29,999! Plus free Photography Kit worth ₹19,999 early buyers ko mila।"
    },
    {
        slug: "oneplus-15r-5g",
        title: "OnePlus 15R 5G — Performance King Under ₹55K",
        category: "Smartphone",
        description: "Snapdragon 8 Gen 5, 165Hz Display, 7400mAh Battery, 80W Charging। ₹51,999 से!",
        price: "₹51,999 से",
        discount: "Bank Offers Available",
        rating: 4.7,
        tag: "🔥 Hot Deal",
        image: "/images/deals/oneplus-15r.png",
        buyLink: `https://www.amazon.in/s?k=oneplus+15r&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: [
            "50MP (f/1.8, OIS) Main + 8MP Ultrawide Camera",
            "32MP Autofocus Selfie Camera",
            "Snapdragon 8 Gen 5 Processor",
            "12GB LPDDR5X RAM",
            "6.83-inch 1.5K AMOLED, 165Hz, 3600 nits peak",
            "Corning Gorilla Glass 7i",
            "7,400mAh Battery, 80W Fast Charging",
            "IP66 + IP68 + IP69 Water Resistant",
            "OxygenOS 16 (Android 16)",
            "4 Years OS + 6 Years Security Updates",
            "Stereo Speakers, NFC, IR Blaster"
        ],
        variants: [
            "12GB + 256GB — ₹51,999",
            "12GB + 512GB — ₹56,999"
        ],
        bankOffers: [
            "Bank Card Offers — Up to ₹4,000 Off",
            "No-Cost EMI — 9 months तक",
            "Exchange Bonus — Up to ₹5,000"
        ],
        colors: ["Charcoal Black", "Mint Breeze", "Electric Violet (Ace Edition)"],
        content: "OnePlus 15R ₹55,000 से नीचे सबसे powerful smartphone है। Snapdragon 8 Gen 5 processor laptop-level performance देता है, 50MP OIS camera शानदार photos लेता है, और 6.83-inch 165Hz AMOLED display (3600 nits peak brightness) gaming और video के लिए perfect है। 7,400mAh massive battery 80W fast charging से 30 min में full हो जाती है — 2 दिन आराम से चलेगी! IP66+IP68+IP69 triple water resistance rating means heavy rain में भी safe। Corning Gorilla Glass 7i protection, stereo speakers, IR Blaster, और OxygenOS 16 buttery-smooth experience देते हैं। 4 साल OS updates + 6 साल security updates guarantee है।"
    },
    {
        slug: "samsung-galaxy-m17e-5g",
        title: "Samsung Galaxy M17e 5G — Budget King! 🆕",
        category: "Budget Phone",
        description: "सिर्फ ₹12,999 में 5G + 6000mAh Battery + 6 Years Updates! Samsung का नया budget gamechanger!",
        price: "₹12,999",
        discount: "Effective ₹11,749",
        rating: 4.3,
        tag: "🆕 Just Launched",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        buyLink: `https://www.amazon.in/s?k=samsung+galaxy+m17e+5g&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: [
            "6.7-inch HD+ LCD, 120Hz Refresh Rate",
            "MediaTek Dimensity 6300 (6nm) Octa Core",
            "4GB/6GB/8GB RAM + 128GB Storage",
            "Expandable up to 2TB via microSD",
            "50MP (f/1.8) Main + 2MP Depth Camera",
            "8MP Selfie Camera",
            "6,000mAh Battery, 25W Fast Charging",
            "Android 16 + One UI 8",
            "6 Years OS + 6 Years Security Updates!",
            "IP54, Side Fingerprint, 3.5mm Jack"
        ],
        variants: [
            "4GB + 128GB — ₹12,999",
            "6GB + 128GB — ₹14,999"
        ],
        bankOffers: [
            "Instant Discount — Effective ₹11,749",
            "No-Cost EMI — 6 months",
            "Exchange Bonus — Up to ₹3,000"
        ],
        colors: ["Vibe Violet 💜", "Blitz Blue 💙"],
        content: "Samsung Galaxy M17e 5G budget segment ka naya king hai! ₹12,999 mein 5G connectivity, 6000mAh massive battery (2 din chalegi!), 50MP camera, aur sabse badi baat — 6 saal OS updates + 6 saal security updates! Yani 2032 tak latest software milega! MediaTek Dimensity 6300 (6nm) chip smooth 5G experience deta hai, 120Hz display scrolling ko butter-smooth banata hai. IP54 splash resistance, side fingerprint, 3.5mm jack — sab kuch hai! Students, parents, aur first-time smartphone buyers ke liye perfect choice!"
    },
    {
        slug: "hp-omnibook-5-oled",
        title: "HP OmniBook 5 OLED — 34 Hrs Battery! 🔋",
        category: "Laptop",
        description: "Snapdragon X Processor, 2K OLED Display, 34 घंटे बैटरी! Students और professionals के लिए perfect।",
        price: "₹75,990",
        discount: "₹5,000 Off + No-Cost EMI",
        rating: 4.6,
        tag: "🆕 New Launch",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=hp+omnibook+5+oled&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["Snapdragon X Processor", "16GB LPDDR5x RAM", "512GB SSD Storage", "14-inch 2K OLED Display", "34 Hours Battery Life", "Weight: 1.3kg", "Wi-Fi 7, Bluetooth 5.4"],
        content: "HP OmniBook 5 OLED एक game-changer laptop है। Snapdragon X processor ARM architecture पर चलता है जो incredible battery life देता है — 34 घंटे तक! 14-inch 2K OLED display colors को vivid बनाता है, 16GB LPDDR5x RAM smooth multitasking ensure करता है, और 512GB SSD fast storage provide करता है। Weight सिर्फ 1.3kg — ultra-portable! Amazon पर ₹5,000 off + no-cost EMI available है। Students, writers, और on-the-go professionals के लिए best choice।"
    },
    {
        slug: "iphone-17-flipkart",
        title: "iPhone 17 (128GB) — Flipkart Big Saving Days",
        category: "Smartphone",
        description: "Apple का लेटेस्ट iPhone 17, 48MP कैमरा और A19 चिप। Flipkart सेल में MRP से ₹3,000 की छूट + SBI Card पर 10% इंस्टेंट डिस्काउंट।",
        price: "₹79,990",
        discount: "SBI Card पर 10% Off",
        rating: 4.9,
        tag: "🔥 Hot Deal",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
        buyLink: "https://www.flipkart.com/search?q=iphone+17",
        platform: "Flipkart",
        specs: ["48MP Camera System", "A19 Bionic Chip", "128GB Storage", "Dynamic Island", "USB-C Port", "iOS 20", "Face ID"],
        content: "Apple ने अपना नया iPhone 17 लॉन्च कर दिया है और Flipkart Big Saving Days में इस पर बहुत शानदार डील मिल रही है। इसमें A19 Bionic चिप लगी है जो पिछले सभी iPhones से ज़्यादा तेज़ है। 48MP कैमरा सिस्टम, Dynamic Island, और USB-C पोर्ट इसे एक complete package बनाते हैं। SBI Credit Card से खरीदने पर 10% instant discount मिलेगा, जो लगभग ₹8,000 तक की बचत होगी। इसके अलावा No-Cost EMI और Exchange Bonus भी उपलब्ध है।"
    },
    {
        slug: "samsung-galaxy-s25-edge",
        title: "Samsung Galaxy S25 Edge (256GB)",
        category: "Smartphone",
        description: "Samsung का सबसे पतला फ्लैगशिप फ़ोन। Galaxy AI, 200MP कैमरा और Titanium बॉडी। Amazon पर बेस्ट प्राइस।",
        price: "₹1,24,999",
        discount: "Exchange Bonus ₹15,000",
        rating: 4.8,
        tag: "New Launch",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=samsung+galaxy+s25+edge&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["200MP Main Camera", "Snapdragon 8 Elite Processor", "12GB RAM + 256GB Storage", "6.7-inch Dynamic AMOLED", "Titanium Body, IP68", "Galaxy AI Features", "5000mAh Battery"],
        content: "Samsung Galaxy S25 Edge अब तक का सबसे पतला Samsung flagship है। इसमें 200MP main camera, Snapdragon 8 Elite processor, और Galaxy AI features हैं जो live translation, circle to search, और AI photo editing करते हैं। Titanium body इसे premium और durable बनाती है। Amazon पर ₹15,000 तक का exchange bonus मिल रहा है, plus bank offers और no-cost EMI options भी available हैं।"
    },
    {
        slug: "iqoo-z11x-5g",
        title: "iQOO Z11x 5G (6GB+128GB) — Just Launched!",
        category: "Budget Phone",
        description: "सिर्फ ₹18,999 में 5G फ़ोन! Snapdragon प्रोसेसर, 6000mAh बैटरी। Amazon पर सेल शुरू।",
        price: "₹18,999",
        discount: "Bank Discount + No-Cost EMI",
        rating: 4.5,
        tag: "🆕 Just Launched",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=iqoo+z11x+5g&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["50MP AI Camera", "Snapdragon 4 Gen 2 Processor", "6GB RAM + 128GB Storage", "6.72-inch 120Hz Display", "6000mAh Battery, 44W Charging", "5G Connectivity", "FunTouch OS 14"],
        content: "iQOO ने अपना बजट किंग Z11x 5G लॉन्च किया है। ₹18,999 की कीमत में Snapdragon processor, 6000mAh massive battery (2 दिन चलेगी!), 50MP AI camera, और 5G connectivity मिल रही है। Amazon पर sale शुरू है और instant bank discount + no-cost EMI options उपलब्ध हैं। यह ₹20,000 से कम में सबसे बढ़िया 5G phone बताया जा रहा है।"
    },
    {
        slug: "sony-wh-1000xm6",
        title: "Sony WH-1000XM6 Wireless Headphones",
        category: "Audio",
        description: "दुनिया का बेस्ट ANC हेडफोन। 40 घंटे बैटरी और Hi-Res Audio। Amazon पर भारी छूट।",
        price: "₹26,990",
        discount: "Flat ₹6,000 Off",
        rating: 4.8,
        tag: "Bestseller",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=sony+wh-1000xm6&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["Industry-leading ANC", "40 Hours Battery Life", "Hi-Res Audio (LDAC)", "Multipoint Bluetooth", "Touch Controls", "Speak-to-Chat", "Foldable Design"],
        content: "Sony WH-1000XM6 industry का सबसे बेहतरीन Active Noise Cancellation (ANC) headphone है। इसमें 40 घंटे की battery life, Hi-Res Audio support, multipoint Bluetooth (2 devices एक साथ), और बेहद comfortable design है। Amazon पर ₹6,000 flat off मिल रहा है, जिससे original price ₹32,990 से कम होकर ₹26,990 हो गया है। Music lovers और work-from-home professionals के लिए perfect choice।"
    },
    {
        slug: "asus-rog-zephyrus-g16",
        title: "ASUS ROG Zephyrus G16 (2026) — Gaming Beast",
        category: "Gaming Laptop",
        description: "Intel Core Ultra 9, RTX 5070 GPU, 32GB DDR5 RAM। Amazon पर फ्री गेमिंग माउस + कैरी बैग।",
        price: "₹1,89,990",
        discount: "Free Gaming Mouse + Bag",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=asus+rog+zephyrus+g16+2026&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["Intel Core Ultra 9 Processor", "NVIDIA RTX 5070 GPU", "32GB DDR5 RAM", "1TB NVMe SSD", "16-inch QHD+ 240Hz Display", "Per-key RGB Keyboard", "Thunderbolt 4, Wi-Fi 7"],
        content: "ASUS ROG Zephyrus G16 gamers के लिए एक dream machine है। Intel Core Ultra 9 processor और NVIDIA RTX 5070 GPU के साथ यह हर latest game को ultra settings पर आराम से चला सकता है। 32GB DDR5 RAM और 1TB SSD storage है। 16-inch QHD+ display 240Hz refresh rate देता है। Amazon पर free gaming mouse और carry bag मिल रहा है, plus HDFC card पर additional discount भी available है।"
    },
    {
        slug: "redmi-13c-5g",
        title: "Redmi 13C 5G — Amazon Special",
        category: "Budget Phone",
        description: "सबसे सस्ता 5G फ़ोन! 50MP कैमरा, 5000mAh बैटरी। Amazon पर 60% तक की छूट।",
        price: "₹8,499",
        discount: "60% Off — Limited Stock",
        rating: 4.3,
        tag: "Budget King",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=redmi+13c+5g&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["50MP AI Camera", "MediaTek Dimensity 6100+", "4GB RAM + 128GB Storage", "6.74-inch HD+ Display", "5000mAh Battery", "5G Dual SIM", "MIUI 14"],
        content: "अगर आपका बजट कम है लेकिन 5G phone चाहिए, तो Redmi 13C 5G सबसे सस्ता option है। सिर्फ ₹8,499 में 50MP camera, 5000mAh battery, 6.74-inch HD+ display, और MediaTek Dimensity 6100+ 5G processor मिल रहा है। Amazon पर 60% तक discount है, लेकिन stock limited है। पहली बार smartphone खरीदने वालों और students के लिए perfect।"
    },
    {
        slug: "apple-macbook-air-m4",
        title: "Apple MacBook Air M4 (2026 Edition)",
        category: "Laptop",
        description: "M4 चिप, 16GB Unified RAM, 512GB SSD। क्रिएटर्स और प्रोफेशनल्स के लिए परफेक्ट। HDFC Card पर एक्स्ट्रा 10% Off।",
        price: "₹1,19,900",
        discount: "HDFC Card पर 10% Off",
        rating: 4.9,
        tag: "Top Pick",
        image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=apple+macbook+air+m4&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["Apple M4 Chip", "16GB Unified RAM", "512GB SSD", "13.6-inch Liquid Retina Display", "18 Hours Battery Life", "Fanless Design", "MagSafe, Thunderbolt 4"],
        content: "Apple MacBook Air M4 creators और professionals के लिए सबसे बढ़िया laptop है। M4 chip M3 से 25% तेज़ है, 16GB unified RAM seamless multitasking देती है, और 512GB SSD fast storage provide करता है। 18 घंटे की battery life and fanless design (कोई आवाज़ नहीं) इसे perfect बनाते हैं। HDFC Credit Card से खरीदने पर extra 10% off मिलेगा, यानी लगभग ₹12,000 की बचत।"
    },
    {
        slug: "nothing-phone-3",
        title: "Nothing Phone (3) — Flipkart Exclusive",
        category: "Smartphone",
        description: "Glyph Interface 2.0, Snapdragon 8 Gen 3, 50MP कैमरा। Flipkart पर बेस्ट प्राइस।",
        price: "₹37,999",
        discount: "Exchange + Bank Offer",
        rating: 4.6,
        tag: "Trending",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800",
        buyLink: "https://www.flipkart.com/search?q=nothing+phone+3",
        platform: "Flipkart",
        specs: ["50MP Dual Camera", "Snapdragon 8 Gen 3 Processor", "12GB RAM + 256GB Storage", "6.7-inch LTPO AMOLED, 120Hz", "Glyph Interface 2.0", "5000mAh Battery, 45W Charging", "Nothing OS 3.0"],
        content: "Nothing Phone (3) का unique Glyph Interface 2.0 इसे बाकी सब phones से अलग बनाता है। LED lights back panel पर notifications, music visualizer, और timer दिखाती हैं। Snapdragon 8 Gen 3 processor flagship performance देता है, 50MP dual camera system great photos लेता है, और clean Nothing OS smooth experience provide करता है। Flipkart पर exchange offer + bank discount मिलाकर ₹10,000+ बचा सकते हैं।"
    }
];

export function getDealBySlug(slug: string): Deal | undefined {
    return TOP_DEALS.find(deal => deal.slug === slug);
}

export function getAllDealSlugs(): string[] {
    return TOP_DEALS.map(deal => deal.slug);
}
