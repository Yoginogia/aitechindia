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
        slug: "vivo-t5-pro-9020mah-launch-deal",
        title: "Vivo T5 Pro — 9020mAh Monster Battery + 144Hz AMOLED! 🔋 (₹22,999)",
        category: "Smartphone",
        description: "Vivo T5 Pro में दुनिया की सबसे बड़ी बैटरियों में से एक — 9020mAh! Snapdragon 7s Gen 4, 144Hz AMOLED और 80W Fast Charging के साथ यह April का सबसे बड़ा Value-for-Money Phone है।",
        price: "₹22,999",
        discount: "Launch Offer — ₹3,000 Off",
        rating: 4.6,
        tag: "🔋 Battery King",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=vivo+t5+pro&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India / Flipkart",
        specs: [
            "6.78\" AMOLED Display — 144Hz, 1500 nits",
            "Snapdragon 7s Gen 4 Processor (4nm)",
            "8GB / 12GB RAM + 128GB / 256GB Storage",
            "50MP OIS Main + 8MP Ultrawide Camera",
            "9,020mAh Battery — 3 दिन तक चलेगी!",
            "80W FlashCharge (0→100% in 60 min)",
            "Funtouch OS 15 (Android 15)",
            "IP64 Rating + Side Fingerprint"
        ],
        variants: [
            "8GB + 128GB — ₹22,999",
            "12GB + 256GB — ₹25,999"
        ],
        bankOffers: [
            "AXIS Bank Card — 7.5% Instant Off (Amazon Mega Deal Days)",
            "HSBC Credit Card — Extra ₹1,500 Off",
            "No-Cost EMI — 6 months"
        ],
        colors: ["Titanium Black", "Crystal Blue"],
        content: "Vivo T5 Pro एक Word में कहें तो — 'Battery Monster'! 9020mAh की Battery शायद आपने किसी भी Mainstream Phone में नहीं देखी होगी। 80W FlashCharge से यह 1 घंटे में Full हो जाती है और फिर 3 दिन तक चलती रहती है। Snapdragon 7s Gen 4 Chip 5G के साथ Gaming और Multitasking में कोई Lag नहीं देता। Amazon Mega Deal Days में इस पर ₹3,000 तक की छूट और Bank Offers के साथ यह ₹19,999 से भी कम में पड़ सकता है!"
    },
    {
        slug: "oneplus-nord-6-first-sale-april",
        title: "OnePlus Nord 6 — 165Hz AMOLED + 9000mAh! 🚀 First Sale Live",
        category: "Smartphone",
        description: "OnePlus Nord 6 पहली Sale में Available है! Snapdragon 8s Gen 4, 165Hz 1.5K AMOLED और India का सबसे पावरफुल Mid-Range Battery — 9000mAh। Amazon Mega Deal Days में धांसू Bank Offers के साथ!",
        price: "₹29,999",
        discount: "First Sale + Bank ₹2,000 Off",
        rating: 4.8,
        tag: "🆕 First Sale Live!",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=oneplus+nord+6&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India",
        specs: [
            "6.74\" 1.5K AMOLED — 165Hz, 4500 nits peak",
            "Snapdragon 8s Gen 4 Processor",
            "12GB LPDDR5X RAM + 256GB UFS 4.0",
            "50MP (OIS) + 8MP Ultrawide Camera",
            "9,000mAh Battery — 2.5 दिन की Life",
            "100W SUPERVOOC Charging (35 min Full!)",
            "OxygenOS 16 (Android 16)",
            "IP65 Water Resistance"
        ],
        variants: [
            "12GB + 256GB — ₹29,999",
            "16GB + 512GB — ₹34,999"
        ],
        bankOffers: [
            "DBS Bank Card — 7.5% Instant Off",
            "Axis Bank — ₹2,000 Extra Discount",
            "No-Cost EMI — 9 months तक"
        ],
        colors: ["Obsidian Midnight", "Lunar Ivory", "Nebula Purple"],
        content: "OnePlus Nord 6 ने Mid-Range Phone की Definition ही बदल दी है! ₹30,000 से कम में 165Hz AMOLED Display, Snapdragon 8s Gen 4 (Flagship-Grade!) Processor और 9000mAh Battery — यह Combination किसी दूसरे Brand ने कभी नहीं दिया। 100W SUPERVOOC Charging मतलब सुबह उठकर 35 मिनट Charge करो और पूरा दिन Tension-Free! First Sale Live है, जल्दी Order करें क्योंकि Stock Limited है।"
    },
    {
        slug: "realme-gt-7-pro-snapdragon-8-elite",
        title: "Realme GT 7 Pro — Snapdragon 8 Elite + 50W Wireless! ⚡ (₹49,999)",
        category: "Flagship",
        description: "Realme का सबसे ताकतवर Phone अब Amazon Mega Deal Days में ₹5,000 सस्ता! Snapdragon 8 Elite Gen 5, 144Hz ProXDR Display और 50W Wireless Charging — यह Samsung को टक्कर दे रहा है।",
        price: "₹49,999",
        discount: "₹5,000 Mega Deal Off",
        rating: 4.7,
        tag: "🔥 Mega Deal Days",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=realme+gt+7+pro&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India",
        specs: [
            "6.78\" ProXDR AMOLED — 144Hz, 4500 nits peak",
            "Snapdragon 8 Elite Gen 5 Processor",
            "16GB LPDDR5X RAM + 512GB UFS 4.1",
            "50MP (f/1.69, OIS) + 50MP Telephoto + 8MP Ultrawide",
            "5800mAh Battery",
            "120W SuperVOOC + 50W Wireless + 10W Reverse",
            "Realme UI 6.0 (Android 16)",
            "IP69 Water & Dust Resistant"
        ],
        variants: [
            "12GB + 256GB — ₹44,999",
            "16GB + 512GB — ₹49,999"
        ],
        bankOffers: [
            "IndusInd Bank — 7.5% Instant Off (Mega Deal Days)",
            "BOB Card — ₹2,500 Cashback",
            "No-Cost EMI — 12 months"
        ],
        colors: ["Mars Red", "Neptune Blue", "Titanium Grey"],
        content: "Realme GT 7 Pro इस साल का सबसे Underrated Flagship Phone है। Snapdragon 8 Elite Gen 5 Chip (वही जो Samsung S26 Ultra में है!) और 50W Wireless Charging ₹50,000 के नीचे — यह सुनकर हैरानी होती है! ProXDR Display का 4500 nits Peak Brightness तेज़ धूप में भी Screen एकदम साफ दिखाता है। Amazon Mega Deal Days में ₹5,000 Extra Off के साथ यह Deal Miss करना बहुत बड़ी गलती होगी।"
    },
    {
        slug: "amazon-echo-show-8-smart-display",
        title: "Amazon Echo Show 8 (3rd Gen) — Smart Display with AI 🏠 (₹8,999)",
        category: "Smart Home",
        description: "Amazon Echo Show 8 (3rd Gen) — HD Display, Built-in Camera, Alexa AI और Smart Home Control! Amazon Mega Deal Days में ₹4,000 का भारी Discount। घर को बनाएं Smart!",
        price: "₹8,999",
        discount: "₹4,000 Off (था ₹12,999)",
        rating: 4.5,
        tag: "🏠 Smart Home Deal",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=amazon+echo+show+8&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India",
        specs: [
            "8\" HD Touchscreen Display (1280x800)",
            "13MP Auto-Framing Camera",
            "Built-in Alexa — Voice Control",
            "Smart Home Hub Built-in",
            "Stereo Sound with spatial audio",
            "Video Calls (Zoom, WhatsApp support)",
            "Wall-Mountable Design"
        ],
        bankOffers: [
            "Mega Deal Days — ₹4,000 Instant Off",
            "No-Cost EMI — 3 months",
            "Amazon Pay — Extra ₹500 Off"
        ],
        content: "Amazon Echo Show 8 (3rd Gen) आपके घर को एक Smart Home में बदल देता है! Alexa से बात करके आप Lights जलाओ/बुझाओ, AC का Temperature Set करो, YouTube या Netflix देखो और Video Calls करो — सब कुछ Hands-Free! 13MP Auto-Framing Camera Video Calls में खुद-ब-खुद आपका चेहरा Frame में रखता है। Amazon Mega Deal Days में ₹4,000 का Instant Discount मिल रहा है — यह कभी इतना सस्ता नहीं था!"
    },
    {
        slug: "infinix-note-60-pro-india-launch",
        title: "Infinix Note 60 Pro — Active Matrix Display + 6500mAh Battery! 🔥",
        category: "Smartphone",
        description: "Infinix Note 60 Pro India में Launch! Active Matrix AMOLED Display, 6500mAh विशाल बैटरी, और 108MP कैमरा — सिर्फ ₹14,999 में। Budget segment का नया धमाका!",
        price: "₹14,999",
        discount: "Launch Special Offer",
        rating: 4.6,
        tag: "🆕 New Launch",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=infinix+note+60+pro&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India / Flipkart",
        specs: [
            "6.78\" Active Matrix AMOLED Display — 120Hz, 1300 nits",
            "108MP Main + 13MP Ultrawide + 2MP Depth Camera",
            "MediaTek Helio G100 Ultra Processor",
            "8GB RAM + 256GB Storage (Expandable)",
            "6500mAh Battery — 2 दिन आराम से चलती है",
            "45W Fast Charging (0-100% in ~70 min)",
            "XOS 14 (Android 14 based)",
            "Side-mounted Fingerprint + Face Unlock",
            "3.5mm Headphone Jack + USB-C"
        ],
        variants: [
            "8GB + 256GB — ₹14,999"
        ],
        bankOffers: [
            "SBI Credit Card — 10% Instant Off",
            "No-Cost EMI — 6 months",
            "Exchange Bonus — Up to ₹2,000"
        ],
        colors: ["Emerald Green", "Cosmic Black", "Stardust Silver"],
        content: "Infinix Note 60 Pro India में launch हो गया है और ₹15,000 से कम में यह सबसे दमदार smartphone है! इसकी सबसे बड़ी खासियत है — **Active Matrix AMOLED Display** जो इस price range में बहुत rare है। AMOLED screen के कारण colors vivid होते हैं, blacks deep होते हैं, और battery भी ज़्यादा efficiently खर्च होती है। 6500mAh की विशाल battery 45W fast charging के साथ आती है — 2 दिन आराम से चलेगी! 108MP triple camera system photos को शानदार बनाता है। MediaTek Helio G100 Ultra chip gaming के लिए capable है। अगर आप ₹15,000 में AMOLED screen और बड़ी battery चाहते हो — यह launch offer miss मत करो!"
    },
    {
        slug: "realme-narzo-100-lite-5g-launch",
        title: "Realme Narzo 100 Lite 5G — 7000mAh Titan Battery + 144Hz Display! ⚡",
        category: "Smartphone",
        description: "Realme Narzo 100 Lite 5G आज India में launch! 7000mAh Titan Battery, 144Hz 6.8\" Display, MediaTek Dimensity 6300, AI Eraser + Circle to Search। First Sale 21 April — Amazon पर पक्का Note करो!",
        price: "₹13,499 से",
        discount: "Launch Offer — Bank ₹1,500 Off",
        rating: 4.5,
        tag: "🆕 Just Launched Today!",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=realme+narzo+100+lite+5g&tag=${AFFILIATE_TAG}`,
        platform: "Amazon India / Realme.com",
        specs: [
            "6.8\" LCD Display — 144Hz Refresh Rate, 900 nits Peak Brightness",
            "MediaTek Dimensity 6300 Processor (5nm)",
            "4GB/6GB RAM + 64GB/128GB Storage (Expandable)",
            "13MP Rear Camera + 5MP Front Camera",
            "7000mAh 'Titan Battery' — 2-3 दिन की Life!",
            "15W Wired + Reverse Charging + Bypass Charging",
            "Realme UI 7.0 (Android 16 based)",
            "IP64 Rating — Dust & Splash Resistant",
            "Military-Grade Durability Certified",
            "AI Eraser + AI Clear Face + Circle to Search (Google Gemini)"
        ],
        variants: [
            "4GB + 64GB — ₹13,499",
            "4GB + 128GB — ₹14,499",
            "6GB + 128GB — ₹16,499"
        ],
        bankOffers: [
            "Bank Discount — ₹1,500 Instant Off (Launch Offer)",
            "No-Cost EMI — 6 months",
            "Exchange Bonus — Up to ₹2,000"
        ],
        colors: ["Thunder Black", "Frost Silver"],
        content: "Realme Narzo 100 Lite 5G आज India में officially launch हुआ है — और यह budget segment का नया champion है! इसकी सबसे बड़ी USP है **7000mAh Titan Battery** — जो 2-3 दिन तक easily चलेगी। गेमिंग, YouTube, social media — सब कुछ बिना charging टेंशन के! 144Hz refresh rate वाली 6.8\" display scrolling और gaming को butter-smooth बनाती है। MediaTek Dimensity 6300 (5nm) processor 5G के साथ smooth performance देता है। IP64 rating और military-grade durability इसे rugged use के लिए perfect बनाते हैं। Android 16 base पर Realme UI 7.0, Circle to Search, AI Eraser — premium features budget phone में! **First Sale: 21 April 2026 — Amazon India पर।** अभी Notify me लगाओ ताकि out of stock न हो!",
    },
    {
        slug: "iphone-16-pro-massive-drop-2026",
        title: "iPhone 16 Pro Max — ₹15,000 Heavy Price Drop! 🍎",
        category: "Smartphone",
        description: "iPhone 17 leaks ke chalte Apple ne India me iPhone 16 Pro Max ki keemat instantly ghata di hai. Limited time Flipkart/Amazon sales.",
        price: "₹1,44,900",
        discount: "₹15,000 Price Cut",
        rating: 4.9,
        tag: "🔥 Shocking Deal",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=iphone+16+pro+max&tag=aitechnews-21`,
        platform: "Amazon India",
        specs: ["A18 Pro Bionic Chip", "48MP Tetraprism 5x Zoom Camera", "Aerospace Titanium Build", "256GB Base Storage", "Action Button"],
        content: "Apple ne market ko surprise karte hue iPhone 16 Pro Max ki keemat record level par gira di hai. India me iPhone 17 ke aane ki subugahat tez ho gayi hai jis wajah se sellers ne existing stock clear karna chalu kar diya hai. Agar aap Pro model lene ka soch rahe the, toh ise abhi lena sabse smart move hai."
    },
    {
        slug: "redmi-note-15-se-launch-offer",
        title: "Redmi Note 15 Special Edition — 200MP Camera 📸",
        category: "Smartphone",
        description: "सबसे तगड़ा लाॅन्च! 200MP कैमरा, 90W HyperCharge, और AI Erase के साथ पहली सेल शुरू।",
        price: "₹17,999",
        discount: "Launch Special Offer",
        rating: 4.8,
        tag: "🔥 Hot Deal",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=Redmi+Note+15+Special+Edition&tag=aitechnews-21`,
        platform: "Amazon India",
        specs: ["200MP + 8MP Ultra-wide", "MediaTek Dimensity 7300", "8GB RAM + 256GB Storage", "6.67\" AMOLED, 120Hz, 2100 nits", "5500mAh Battery", "90W HyperCharge"],
        variants: [
            "8GB + 256GB — ₹17,999"
        ],
        bankOffers: [
            "SBI Credit Card — 10% Instant Off",
            "No-Cost EMI — 6 months",
            "Exchange Bonus — Up to ₹2,000"
        ],
        colors: ["Lunar Silver", "Cosmic Black"],
        content: "Redmi Note 15 Special Edition लाॅन्च हो चुका है! मात्र ₹17,999 रुपये में 200MP कैमरा और 90W HyperCharge वाला यह फोन मार्केट में धूम मचा रहा है। इस प्राइस में AI Erase और शानदार AMOLED स्क्रीन के साथ यह बेहतरीन डील है। अभी 'Claim Deal Now' पर क्लिक कर अपना पीस बुक करें, स्टॉक तेज़ी से खत्म हो रहा है!"
    },
    {
        slug: "lenovo-april-cashback-2026",
        title: "Lenovo Laptops पर ₹20,000 Cashback! 🔥 (1-15 April)",
        category: "Laptop",
        description: "Lenovo की Official Website से Laptop, Desktop या Workstation खरीदने पर ₹20,000 तक का कैशबैक। किसी भी Bank Credit Card से!",
        price: "₹55,990 से",
        discount: "₹20,000 तक Cashback",
        rating: 4.8,
        tag: "🔥 Limited Offer",
        image: "/images/blog/lenovo-cashback-april.webp",
        buyLink: `https://www.lenovo.com/in/en/laptops/`,
        platform: "Lenovo Official",
        specs: ["किसी भी Laptop पर Cashback", "Desktop & Workstation भी", "सभी Bank Credit Cards", "1-15 April 2026 तक", "Official Website से खरीदें"],
        bankOffers: ["किसी भी Bank Credit Card — ₹20,000 तक Cashback", "No-Cost EMI — 24 months तक"],
        content: "Lenovo का यह April Cashback Offer आपको एक बड़ा मौका दे रहा है। 1 से 15 April 2026 के बीच अगर आप Lenovo.com/in से कोई भी Laptop, Desktop, Workstation, या Accessories खरीदते हैं और किसी भी Bank Credit Card से Payment करते हैं, तो आपको ₹20,000 तक का Cashback मिलेगा। LOQ Gaming Laptop, IdeaPad Slim 5, और ThinkPad जैसे popular models पर यह offer लागू है। Amazon या Flipkart पर नहीं — सिर्फ Official Website पर!"
    },
    {
        slug: "iqoo-z9s-5g-gaming-deal",
        title: "iQOO Z9s 5G — Budget Gaming Beast! 🎮 (₹14,999)",
        category: "Smartphone",
        description: "Snapdragon 7s Gen 3, 144Hz AMOLED Display, 5500mAh Battery। April में सबसे Hot Budget 5G Phone। Amazon पर ₹14,999 में मिल रहा है!",
        price: "₹14,999",
        discount: "₹2,001 Off (था ₹16,999)",
        rating: 4.7,
        tag: "🎮 Gaming Pick",
        image: "/images/phones/iqoo-z9x.jpg",
        buyLink: `https://www.amazon.in/s?k=iqoo+z9s+5g&tag=aitechnews-21`,
        platform: "Amazon India",
        specs: ["Snapdragon 7s Gen 3", "144Hz AMOLED Display", "50MP OIS Camera", "5500mAh + 44W Charging", "8GB RAM / 128GB Storage"],
        bankOffers: ["HDFC Credit Card — Extra ₹1,500 Off", "Axis Bank — 5% Cashback", "No-Cost EMI — 6 Months"],
        content: "iQOO Z9s 5G यह ₹15,000 Budget में सबसे Powerful Processor वाला Phone है। Snapdragon 7s Gen 3 Chip Gaming और AI दोनों के लिए बेहतरीन है। 144Hz AMOLED Display पर Games और Videos देखना एक अलग ही अनुभव है। 44W Fast Charging से 0 से 100% सिर्फ 50 मिनट में!"
    },
    {
        slug: "apple-macbook-air-m3-april-deal",
        title: "Apple MacBook Air M3 — April में सबसे बड़ा Discount! 💻",
        category: "Laptop",
        description: "Apple MacBook Air M3 पर April में ₹15,000 तक का Instant Discount। 18-hour battery, All-day performance। Students & Creators के लिए Best Buy!",
        price: "₹1,04,990",
        discount: "₹15,000 Off (था ₹1,19,990)",
        rating: 4.9,
        tag: "⭐ Editor's Pick",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=800",
        buyLink: `https://www.amazon.in/s?k=macbook+air+m3&tag=aitechnews-21`,
        platform: "Amazon India",
        specs: ["Apple M3 Chip (8-core GPU)", "15.3-inch Liquid Retina Display", "8GB / 16GB RAM Options", "18 Hours Battery Life", "2x Thunderbolt 3 Ports", "MagSafe 3 Charging"],
        bankOffers: ["HDFC Bank Debit Card — 5% Off", "SBI Credit Card — ₹5,000 Instant Discount", "No-Cost EMI — Up to 24 Months", "Jio Postpaid — Extra ₹2,000 Benefit"],
        content: "Apple MacBook Air M3 इस वक्त Amazon पर अपनी सबसे कम कीमत पर है। M3 Chip का Neural Engine AI Tasks को बिजली की तेज़ी से Handle करता है और इसकी 18-घंटे की Battery पूरे दिन चलती है। Students, Designers और Developers — सबके लिए यह Ideal Machine है। April Deal के साथ अभी लेना फायदे का सौदा है!"
    },
    {
        slug: "samsung-galaxy-book6-ultra",
        title: "Samsung Galaxy Book 6 Ultra — AI-Ready Laptop India Launch! 🤖",
        category: "Laptop",
        description: "Samsung का नया AI-Ready Laptop। Intel Core Ultra 7, 3K OLED Display, 22hr Battery। 24-Month Zero-Interest EMI उपलब्ध!",
        price: "₹1,79,999 से",
        discount: "24-Month Zero-Interest EMI",
        rating: 4.8,
        tag: "🆕 New Launch",
        image: "/images/blog/samsung-galaxy-book6.webp",
        buyLink: `https://www.samsung.com/in/computers/all-computers/`,
        platform: "Samsung Official",
        specs: ["Intel Core Ultra 7 (Series 2)", "16-inch 3K OLED Display", "32GB RAM, 1TB SSD", "22 Hours Battery", "Galaxy AI Features Built-in", "Thunderbolt 4, Wi-Fi 7"],
        bankOffers: ["24-Month Zero-Interest EMI", "Exchange Bonus — Up to ₹25,000", "Student Discount — Extra 5% Off"],
        content: "Samsung Galaxy Book 6 Ultra India में Launch हो गया है और यह 2026 का सबसे ताकतवर Business Laptop है। Intel Series 2 का dedicated NPU AI tasks को बिजली की तेज़ी से करता है। Galaxy AI Features जैसे Live Translate, AI Summarize और Writing Assist रोज़ाना के काम को काफी आसान बना देते हैं। 22 घंटे की Battery Life मतलब पूरे दिन Charging की ज़रूरत नहीं! 24-Month Zero-Interest EMI और ₹25,000 तक Exchange Bonus!"
    },
    {
        slug: "xbox-series-x-massive-price-drop",
        title: "Xbox Series X 1TB Console — Massive 2026 Price Drop! 🎮",
        category: "Gaming",
        description: "नई CEO आशा शर्मा की स्ट्रेटेजी के बाद Xbox Series X पर अब तक की सबसे भारी छूट। HDFC कार्ड पर ₹4,000 की एक्स्ट्रा छूट।",
        price: "₹39,990",
        discount: "40% OFF + ₹4,000 Bank Off",
        rating: 4.9,
        tag: "🔥 Mega Price Drop",
        image: "/images/deals/xbox-series-x.png",
        buyLink: `https://www.amazon.in/s?k=xbox+series+x&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["1TB Custom NVMe SSD", "12 Teraflops Processing Power", "True 4K Gaming @120 FPS", "Includes Wireless Controller", "Quick Resume Feature", "Dolby Vision & TrueHD Atmos"],
        variants: ["1TB (Disc Edition) — ₹39,990", "2TB (Digital) — ₹44,990"],
        bankOffers: ["HDFC Credit Card — ₹4,000 Instant Off", "No-Cost EMI — Up to 12 months", "Exchange Bonus — Up to ₹6,000"],
        colors: ["Matte Black"],
        content: "Xbox की नई 'Reference Console' स्ट्रेटेजी के चलते आज Amazon India पर Xbox Series X पर सबसे भारी डिस्काउंट मिल रहा है। यह 1TB कंसोल अब तक का सबसे पॉवरफुल गेमिंग बॉक्स है जिसमें ट्रू 4K 120FPS गेमिंग का मज़ा है। गेम पास अल्टीमेट (Game Pass Ultimate) के साथ आप सैंकड़ों गेम्स तुरंत खेल सकते हैं। यह लिमिटेड टाइम डील है, मौका मत छोड़ें!"
    },
    {
        slug: "meta-ray-ban-smart-glasses-ai",
        title: "Meta Ray-Ban Wayfarer — AI Smart Glasses 🕶️",
        category: "Gadgets",
        description: "लाइव हिंदी ट्रांसलेशन और बिल्ट-इन Meta AI के साथ। अब फोन निकालने की जरुरत नहीं, सब कुछ आपकी आँखों के सामने।",
        price: "₹24,999",
        discount: "New Arrival + ₹2,000 Off",
        rating: 4.8,
        tag: "🤖 Best AI Gadget",
        image: "/images/deals/meta-rayban.png",
        buyLink: `https://www.amazon.in/s?k=meta+ray+ban+smart+glasses&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["Built-in Meta AI Assistant", "12MP Ultra-wide Camera", "Open-ear Audio Speakers", "Live Language Translation", "Prescription Lens Support", "Voice Command Control"],
        variants: ["Wayfarer (Standard) — ₹24,999", "Headliner (Large) — ₹26,999"],
        bankOffers: ["ICICI Credit Card — ₹2,000 Instant Off", "No-Cost EMI — Up to 6 months"],
        colors: ["Shiny Black", "Matte Black", "Caramel"],
        content: "अगर आप टेक्नोलॉजी के शौक़ीन हैं, तो Meta Ray-Ban के ये स्मार्ट ग्लासेज आपके पास होने ही चाहिए। इनमें बिल्ट-इन Meta AI है जिससे आप बात कर सकते हैं, रास्ते पूछ सकते हैं और लाइव ट्रांसलेशन कर सकते हैं। इसकी 12MP कैमरा क्वालिटी इंस्टाग्राम रील्स और व्लॉगिंग के लिए बेस्ट है। आज ही आर्डर करें और 'AI Revolution' का हिस्सा बनें।"
    },
    {
        slug: "samsung-galaxy-a57-5g-launch-offer",
        title: "Samsung Galaxy A57 5G — Launch Special Offer! 🚀",
        category: "Smartphone",
        description: "Samsung का नया AI धमाका! One UI 8.5, 6 साल के अपडेट्स, और SBI कार्ड पर ₹3,000 की भारी छूट।",
        price: "₹34,999",
        discount: "₹3,000 Instant Bank Off",
        rating: 4.8,
        tag: "🆕 Just Launched",
        image: "/images/deals/samsung-a57-5g.png",
        buyLink: `https://www.amazon.in/s?k=samsung+galaxy+a57+5g&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["One UI 8.5 (AI Enabled)", "6.7\" Super AMOLED 144Hz", "6 Years OS Updates", "50MP AI Triple Camera", "5000mAh Battery", "Exynos 1580 (4nm) High Performance"],
        variants: ["8GB + 128GB — ₹34,999", "8GB + 256GB — ₹37,999"],
        bankOffers: ["SBI Credit Card — ₹3,000 Instant Off", "No-Cost EMI — Up to 9 months", "Exchange Bonus — Up to ₹5,000"],
        colors: ["Emerald AI", "Vibe Purple", "Shadow Graphite"],
        content: "Samsung Galaxy A57 5G India आ चुका है! यह फोन 2026 का बेस्ट मिड-रेंज ऑप्शन है क्योंकि इसमें फ्लैगशिप लेवल के AI फीचर्स (One UI 8.5) दिए गए हैं। 6 साल के सॉफ़्टवेयर अपडेट्स के साथ, यह फोन 2032 तक लेटेस्ट रहेगा। 144Hz Super AMOLED स्क्रीन गेमिंग और वीडियो के लिए जबरदस्त है। SBI बैंक ऑफर्स के साथ इसकी प्रभावी कीमत सिर्फ ₹31,999 रह जाती है। जल्दी करें, लॉन्च ऑफर कल रात तक ही वैलिड है!"
    },
    {
        slug: "asus-zenbook-14-core-ultra-7-series-2",
        title: "ASUS Zenbook 14 (UX3405CA) - Intel Core Ultra 7 (Series 2)",
        category: "AI Superpower",
        description: "सबसे हल्का और पावरफुल AI लैपटॉप! 32GB RAM, 1TB SSD और 3K OLED टच स्क्रीन के साथ।",
        price: "₹1,14,990",
        discount: "New Launch Special",
        rating: 4.9,
        tag: "🚀 Future Ready",
        image: "/images/deals/asus-zenbook-14-ai.png",
        buyLink: `https://www.amazon.in/dp/B0DSHWNR64/?tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["Intel Core Ultra 7 (Series 2)", "32GB LPDDR5X RAM", "1TB Gen4 SSD", "14\" 3K OLED 120Hz Touch", "Weight: Only 1.28kg", "Integrated Arc Graphics"],
        content: "ASUS Zenbook 14 का यह नया मॉडल Intel के सबसे लेटेस्ट Series 2 (AI-ready) प्रोसेसर के साथ आता है। इसकी 3K OLED स्क्रीन और ज़बरदस्त 32GB RAM इसे प्रोडक्टिविटी और क्रिएटिव काम के लिए बेस्ट बनाती है। इसका वज़न सिर्फ 1.28kg है, जो इसे ट्रैवलिंग के लिए परफेक्ट बनाता है!"
    },
    {
        slug: "sony-playstation-6-pro",
        title: "Sony PlayStation 6 Pro — The Next-Gen Console",
        category: "Gaming",
        description: "Sony का नया PS6 Pro आ गया है! 8K Gaming, 120fps, और 2TB SSD के साथ। Flipkart BBD Sale में खास डिस्काउंट।",
        price: "₹59,990",
        discount: "Bank Offers + Free Game",
        rating: 4.9,
        tag: "🎮 Blockbuster Deal",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.flipkart.com/search?q=playstation+6+pro`,
        platform: "Flipkart",
        specs: ["8K Native Support", "Zen 4 Custom CPU", "2TB Ultra-Fast SSD", "Ray Tracing 2.0", "DualSense Edge 2 Controller", "PlayStation VR3 Support"],
        content: "Gaming enthusiasts के लिए सबसे बड़ी खबर! Sony PlayStation 6 Pro finally available है और पहली बार इतने massive discount पर मिल रहा है। इसका 8K Native output और 120fps support gaming experience को next level पर ले जाता है। Flipkart Big Billion Days sale में इस पर bank offers के साथ एक AAA game बिल्कुल free मिल रहा है!"
    },
    {
        slug: "dji-mini-5-drone",
        title: "DJI Mini 5 Drone (Fly More Combo) — 4K HDR",
        category: "Gadgets",
        description: "पॉकेट-साइज़ 4K ड्रोन 60 मिनट की फ्लाइट टाइम के साथ! AI Obstacle Avoidance और ActiveTrack 7.0 के साथ।",
        price: "₹82,499",
        discount: "Flat ₹5k Off + No Cost EMI",
        rating: 4.8,
        tag: "🔥 Hot Deal",
        image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/s?k=dji+mini+5+drone&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["Under 249g Weight", "4K/120fps HDR Video", "1/1.3-inch CMOS Sensor", "Omnidirectional Obstacle Sensing", "Up to 60 Mins Flight Time", "DJI O5 Video Transmission (Wait: 20km)"],
        content: "Content Creators और Vloggers के लिए DJI Mini 5 आ गया है। 249g से कम वजन होने के कारण इसे बहुत सारे देशों में रजिस्टर करने की ज़रूरत नहीं पड़ती। Fly More Combo में extra batteries और charging hub मिलता है, जो आपको total 60 mins का flight time देगा। Amazon पर इस पर flat ₹5000 का डिस्काउंट चल रहा है। जल्दी करें, स्टॉक लिमिटेड है!"
    },
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
        slug: "acerpure-air-fryer-glass",
        title: "Acerpure Air Fryer (5.5L) — 100% Glass Bowl",
        category: "Home Appliance",
        description: "अब बिना तेल के क्रिस्पी खाना बनाएं! 100% Glass Bowl, 360° TurboHeat Technology और 90% Less Oil. Amazon पर बेस्ट डील!",
        price: "₹3,999",
        discount: "Bank Offers + No-Cost EMI",
        rating: 4.5,
        tag: "🔥 Hot Deal",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800",
        buyLink: `https://www.amazon.in/Acerpure-Grilling-Warranty-TurboHeat-Technology/dp/B0DWSDDVL1/?tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["5.5L Air Fryer + 2.5L Cooking Pot", "100% Glass Bowl (Easy to clean)", "90% Less Oil Cooking", "360° TurboHeat Technology", "1500 Watts Power", "Air Fry, Toast, Grill, Reheat"],
        content: "क्या आप हेल्दी खाना चाहते हैं लेकिन टेस्ट से समझौता नहीं करना चाहते? Acerpure का नया Air Fryer इसका परफेक्ट सॉल्यूशन है! इसकी सबसे बड़ी खासियत इसका 100% Glass Bowl है, जिससे आप खाना पकते हुए देख सकते हैं और इसे साफ करना भी बेहद आसान है। 5.5L की कैपेसिटी वाली यह मशीन 360° TurboHeat Technology के साथ आती है जो 90% कम तेल में भी खाने को एकदम क्रिस्पी बनाती है। Amazon पर इसे शानदार नो-कॉस्ट ईएमआई और बैंक ऑफर्स के साथ खरीदा जा सकता है।"
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
        title: "Nothing Phone (3) -- Flipkart Exclusive",
        category: "Smartphone",
        description: "Nothing ka naya Phone 3! Glyph Interface 2.0 aur Snapdragon 8 Gen 3 ke saath.",
        price: "Rs. 37,999",
        discount: "Exchange + Bank Offer",
        rating: 4.6,
        tag: "Trending",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800",
        buyLink: "https://www.flipkart.com/search?q=nothing+phone+3",
        platform: "Flipkart",
        specs: ["50MP Dual Camera", "Snapdragon 8 Gen 3 Processor", "12GB RAM + 256GB Storage", "6.7-inch LTPO AMOLED, 120Hz", "Glyph Interface 2.0", "5000mAh Battery, 45W Charging", "Nothing OS 3.0"],
        content: "Nothing Phone (3) ka unique Glyph Interface 2.0 ise baki sab phones se alag banata hai."
    },
    {
        slug: "macbook-air-m4-exclusive-deal",
        title: "Apple MacBook Air M4 -- Lowest Price Ever!",
        category: "Laptops",
        description: "M4 chip की पॉवर अब सबसे कम कीमत पर। स्टूडेंट्स के लिए बेस्ट डील। लिमिटेड स्टॉक!",
        price: "Rs. 94,999",
        discount: "Flat 15k Off",
        rating: 4.9,
        tag: "Best Seller",
        image: "/images/thumbnails/macbook_air_m4.png",
        buyLink: `https://www.amazon.in/s?k=macbook+air+m4&tag=${AFFILIATE_TAG}`,
        platform: "Amazon",
        specs: ["M4 Chip (10-core)", "16GB Unified Memory", "Liquid Retina Display", "18hr Battery"],
        content: "M4 MacBook Air अब तक की सबसे पॉवरफुल और पतली मशीन है। इस प्राइस पर यह डील छोड़ने वाली नहीं है।"
    },
    {
        slug: "samsung-s26-ultra-launch-offer",
        title: "Samsung Galaxy S26 Ultra -- Launch Special",
        category: "Flagship",
        description: "200MP AI Zoom और Snapdragon 8 Elite Gen 2. बैंक कार्ड्स पर एक्स्ट्रा 10k डिस्काउंट।",
        price: "Rs. 1,19,999",
        discount: "Exchange + Bank Offer",
        rating: 4.8,
        tag: "Premium Pick",
        image: "/images/thumbnails/pixel_10_pro_premium.png",
        buyLink: `https://www.amazon.in/s?k=s26+ultra&tag=${AFFILIATE_TAG}`,
        platform: "Flipkart",
        specs: ["200MP AI Camera", "Snapdragon 8 Elite 2", "144Hz OLED", "Titanium Frame"],
        content: "Galaxy S26 Ultra ने मोबाइल फोटोग्राफी की परिभाषा बदल दी है। आज के ऑफर में यह बेस्ट वैल्यू है।"
    }
];


export function getDealBySlug(slug: string): Deal | undefined {
    return TOP_DEALS.find(deal => deal.slug === slug);
}

export function getAllDealSlugs(): string[] {
    return TOP_DEALS.map(deal => deal.slug);
}
