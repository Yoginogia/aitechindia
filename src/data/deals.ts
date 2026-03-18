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
};

export const TOP_DEALS: Deal[] = [
    {
        slug: "samsung-galaxy-s26-ultra",
        title: "Samsung Galaxy S26 Ultra — AI Camera King 👑",
        category: "Flagship",
        description: "Samsung का नया S26 Ultra! AI Camera, S Pen, Snapdragon 8 Elite Gen 2 और 6.9-inch QHD+ AMOLED। Amazon Mega Electronics Days में launch offer!",
        price: "₹1,39,999",
        discount: "₹10,000 Exchange + Bank Off",
        rating: 4.9,
        tag: "🆕 New Launch",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        buyLink: `https://www.amazon.in/s?k=samsung+galaxy+s26+ultra&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["200MP AI Camera + 50MP Ultrawide", "Snapdragon 8 Elite Gen 2", "12GB RAM + 256GB/512GB Storage", "6.9-inch QHD+ Dynamic AMOLED 2X", "5500mAh Battery, 65W Fast Charging", "S Pen Built-in", "Titanium Frame, IP68"],
        content: "Samsung Galaxy S26 Ultra 2026 का सबसे powerful smartphone है। इसमें 200MP AI camera है जो night mode में भी DSLR जैसी photos लेता है। S Pen built-in है, Snapdragon 8 Elite Gen 2 processor blazing fast performance देता है, और 6.9-inch QHD+ AMOLED display stunning visuals दिखाती है। Galaxy AI features जैसे Live Translate, Circle to Search, और AI Photo Editor इसे smart बनाते हैं। Amazon Mega Electronics Days में ₹10,000 तक exchange bonus + bank card discount मिल रहा है।"
    },
    {
        slug: "xiaomi-17-ultra",
        title: "Xiaomi 17 Ultra — 200MP Beast!",
        category: "Flagship",
        description: "Leica कैमरा, Snapdragon 8 Elite, 120W फास्ट चार्जिंग। ₹1,29,999 में flagship killer!",
        price: "₹1,29,999",
        discount: "₹8,000 Instant Discount",
        rating: 4.8,
        tag: "🆕 Just Launched",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?auto=format&fit=crop&q=80&w=600",
        buyLink: `https://www.amazon.in/s?k=xiaomi+17+ultra&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["Dual 200MP Leica Periscope Cameras", "Snapdragon 8 Elite Processor", "16GB RAM + 512GB Storage", "6.8-inch 2K LTPO AMOLED, 120Hz", "7500mAh Battery, 120W Fast Charging", "IP68 Water Resistant", "In-display Fingerprint"],
        content: "Xiaomi 17 Ultra photography lovers के लिए dream phone है। Leica partnership से बना dual 200MP periscope camera system professional-grade photos लेता है। Snapdragon 8 Elite processor, 16GB RAM, 512GB storage, और 7500mAh battery (120W fast charging — 15 मिनट में 50%!) इसे complete powerhouse बनाते हैं। Amazon पर ₹8,000 instant bank discount मिल रहा है plus no-cost EMI options available हैं।"
    },
    {
        slug: "oneplus-15r-5g",
        title: "OnePlus 15R 5G — Best Under ₹50K",
        category: "Smartphone",
        description: "Snapdragon 8 Gen 3, 50MP OIS कैमरा, 100W चार्जिंग। ₹46,999 में premium experience!",
        price: "₹46,999",
        discount: "₹4,000 Bank Discount",
        rating: 4.7,
        tag: "🔥 Hot Deal",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=600",
        buyLink: `https://www.amazon.in/s?k=oneplus+15r&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["50MP OIS Main + 8MP Ultrawide", "Snapdragon 8 Gen 3 Processor", "12GB RAM + 256GB Storage", "6.7-inch 120Hz AMOLED Display", "5500mAh Battery, 100W SUPERVOOC", "OxygenOS 15", "Stereo Speakers, Alert Slider"],
        content: "OnePlus 15R ₹50,000 से नीचे सबसे बढ़िया smartphone है। Snapdragon 8 Gen 3 processor laptop-level performance देता है, 50MP OIS camera शानदार photos लेता है, और 100W SUPERVOOC charging सिर्फ 25 मिनट में full charge करती है। 6.7-inch 120Hz AMOLED display, stereo speakers, और OxygenOS 15 buttery-smooth experience देते हैं। Amazon पर ₹4,000 instant bank discount + exchange offer available है।"
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
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=600",
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
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=600",
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
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
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
        image: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?auto=format&fit=crop&q=80&w=600",
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
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=600",
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
        image: "https://images.unsplash.com/photo-1593640498182-31c70c8268f5?auto=format&fit=crop&q=80&w=600",
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
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
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
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600",
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
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=600",
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
