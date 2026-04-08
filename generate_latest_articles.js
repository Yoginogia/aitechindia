const fs = require('fs');
const path = require('path');

const articles = [
  {
    id: 'gpt6-vs-claude4-5-battle',
    title: 'GPT-6 vs Claude 4.5: कौन जीतेगा AI की अगली बड़ी जंग?',
    cat: 'AI News', author: 'AITechNews Desk', img: '/images/blog/gpt6-vs-claude45.jpg',
    excerpt: 'April 2026 में AGI (Artificial General Intelligence) की चर्चा सबसे ज़्यादा है। GPT-6 और Claude 4.5 के फीचर्स देखकर लगता है कि AI की दुनिया पूरी तरह से बदलने वाली है।',
    content: `2026 शुरू होते ही AI की दुनिया में एक नई जंग छिड़ गई है। OpenAI ने अपना **GPT-6** अनाउंस (announce) किया है, तो वहीं Anthropic ने **Claude 4.5** के साथ मार्किट में तगड़ी एंट्री ली है। 

## GPT-6: Next-Gen Reasoning का बाप
GPT-6 सिर्फ एक चैटबॉट (chatbot) नहीं है। इसमें "Recursive Self-Correction" फीचर है, जिसका मतलब है यह कोड (code) लिखते वक़्त अपनी गलतियां खुद पहचान कर उन्हें फिक्स कर सकता है। इसका context window अब 5 Million tokens तक पहुँच गया है, जो कि अनबिलीवेबल (unbelievable) है।

## Claude 4.5: Emotional Intelligence और Speed
Claude 4.5 का फोकस human-like interaction पर ज़्यादा है। इसका 'Natural Voice Engine' इतना रियल है कि आप डिफ्रेंशिएट (differentiate) नहीं कर पाएंगे कि यह AI है या असली इंसान। 

**हमारी राय:** अगर आपको डीप रिसर्च (deep research) और कोडिंग करनी है तो GPT-6 बेस्ट है, पर क्रिएटिव राइटिंग और क्लाइंट हैंडलिंग के लिए Claude 4.5 ही किंग है।`
  },
  {
    id: 'iphone-18-pro-max-leaks',
    title: 'iPhone 18 Pro Max लीक्स: क्या Apple हटा देगा चार्जिंग पोर्ट?',
    cat: 'Gadgets', author: 'AITechNews Desk', img: '/images/blog/iphone-18-leaks.jpg',
    excerpt: 'iPhone 18 की लीक्स (leaks) अभी से ट्रेंडिंग होने लगी हैं। क्या Apple सच में फिजिकली पोर्ट्स (ports) हटाने वाला है?',
    content: `सितम्बर 2026 कतई दूर नहीं है, और Apple के नए फ्लैगशिप (flagship) **iPhone 18 Pro Max** की लीक्स आना शुरू हो गई हैं। इंडस्ट्री इनसाइडर्स की मानें तो इस बार डिज़ाइन में बहुत बड़ा बदलाव होने वाला है।

## No-Port Design: असली या सपना?
रुमर्स (Rumors) हैं कि Apple इस बार USB-C पोर्ट को भी हटा सकता है। पूरा फोन सिर्फ MagSafe 3 चार्जिंग और वायरलेस डेटा ट्रांसफर पर डिपेंड करेगा। यह एक बड़ा रिस्क हो सकता है, पर Apple हमेशा से 'Wireless Future' को प्रमोट करता आया है।

## 48MP Quad-Camera System
इस बार सिर्फ मेन सेंसर ही नहीं, बल्कि Zoom और Ultra-wide सेंसर्स भी 48MP के होंगे। पेरिस्कोप ज़ूम लेंस (Periscope zoom lens) को अपग्रेड करके 10x Optical Zoom तक ले जाया जा रहा है।

**Verdict:** अगर यह लीक्स सच हुईं, तो iPhone 18 अब तक का सबसे बोल्ड और इनोवेटिव (innovative) अपडेट होगा।`
  },
  {
    id: 'best-ai-laptops-under-60k',
    title: 'टॉप 5 AI Laptops अंडर ₹60,000: कोडिंग और एडिटिंग के लिए बेस्ट चॉइस (2026)',
    cat: 'Laptops', author: 'AITechNews Desk', img: '/images/blog/best-ai-laptops-60k.jpg',
    excerpt: '₹60,000 के बजट में बेस्ट परफॉरमेंस पाने के लिए ये 5 AI-powered laptops आपके लिए बेस्ट चॉइस हैं।',
    content: `लैपटॉप्स खरीदने का तरीका अब बदल चुका है। अब सिर्फ RAM और प्रोसेसर देखना काफी नहीं है, बल्कि 'NPU' (Neural Processing Unit) होना भी ज़रूरी है। 

## टॉप पिक्स (Top Picks):
1. **ASUS Vivobook 15 AI:** यह Intel Core Ultra 5 के साथ आता है जो स्पेशल AI टास्क के लिए बना है।
2. **Acer Swift Go 14:** इसका OLED डिस्प्ले और फ़ास्ट AI रेंडरिंग इसे क्रिएटर्स (creators) का फेवरेट बनाती है।
3. **HP Pavilion Plus:** बेस्ट बिल्ड क्वालिटी और डेडिकेटेड Copilot+ की (key) के साथ।

**कैसे चुनें?** अगर आप स्टूडेंट हैं तो ASUS बेहतर है, और अगर आप क्रिएटर हैं तो OLED स्क्रीन वाला Acer मॉडल बेस्ट चॉइस है।`
  },
  {
    id: 'top-ai-crypto-coins-2026',
    title: 'Top 3 AI Crypto Coins: 2026 में करोड़पति बना सकते हैं ये सिक्के?',
    cat: 'Crypto', author: 'AITechNews Desk', img: '/images/blog/ai-crypto-2026.jpg',
    excerpt: 'AI और Blockchain का मिलन क्रिप्टो मार्किट में नया बूम लेकर आया है। ये 3 कॉइन्स हाई-पोटेंशियल (high-potential) दिख रहे हैं।',
    content: `मार्किट एक्सपर्ट्स का कहना है कि 2026 "AI Crypto" का साल होने वाला है। ब्लॉकचेन पर बेस्ड AI मॉडल्स अब डेटा माइनिंग में नए रिकॉर्ड्स बना रहे हैं।

## 1. Render (RNDR):
क्लाउड ग्राफिक्स और AI रेंडरिंग का सबसे बड़ा प्लेयर। जब से Apple और NVIDIA की पार्टनरशिप की न्यूज़ आई है, RNDR टॉप प्रायोरिटी बन गया है।

## 2. Fetch.ai (FET):
ये डिसेंट्रलाइज्ड (decentralized) AI एजेंट्स बनाते हैं जो ट्रेडिंग और मैनेजमेंट ऑटोमेशन में यूज़ होते हैं।

## 3. SingularityNET (AGIX):
AI सर्विसेज का ओपन मार्किट। इनका लक्ष्य AGI (Artificial General Intelligence) को डिसेंट्रलाइज्ड बनाना है।

*Disclaimer: क्रिप्टो इन्वेस्टमेंट रिस्की है, हमेशा अपनी रिसर्च खुद करें।*`
  },
  {
    id: 'ai-jobs-reality-check-2026',
    title: 'क्या AI सच में IT Jobs खत्म कर रहा है? जानिए 2026 का सच।',
    cat: 'Tech News', author: 'AITechNews Desk', img: '/images/blog/ai-jobs-reality.jpg',
    excerpt: 'जॉब मार्किट में हलचल मची हुई है। क्या AI हमारी नौकरी खा जाएगा या नए अवसर (opportunities) लाएगा?',
    content: `इंडिया के IT सेक्टर में 2026 एक ट्रांज़िशन पीरियड (transition period) है। पिछले साल के ले-ऑफ़्स (layoffs) के बाद, सबके दिमाग में एक ही सवाल है: **"क्या AI मेरी जगह ले लेगा?"**

## सच्चाई क्या है?
सच्चाई यह है कि AI आपकी नौकरी नहीं लेगा, बल्कि **"जो इंसान AI यूज़ करना जानता है, वह आपकी नौकरी ले जाएगा।"** स्टैण्डर्ड कोडिंग जॉब्स कम हो रही हैं, पर AI Model ट्रेनिंग और प्रॉम्प्ट इंजीनियरिंग (prompt engineering) में लाखों वैकेंसीज़ निकल रही हैं।

## किन सेक्टर्स में खतरा है?
- डेटा एंट्री (Data Entry)
- बेसिक ग्राफ़िक डिज़ाइन
- लेवल 1 टेक सपोर्ट

## कैसे बचें?
नए स्किल्स सीखना ही एकमात्र रास्ता है। Python, Machine Learning aur AI आर्किटेक्चर की समझ होना अब हर डिग्री से ज़्यादा इम्पोर्टेन्ट (important) हो गया है।`
  }
];

const targetDir = path.join(__dirname, 'src', 'content', 'blog');

if (!fs.existsSync(targetDir)){
    fs.mkdirSync(targetDir, { recursive: true });
}

articles.forEach(article => {
  const mdContent = "---\ntitle: \"" + article.title + "\"\ndate: \"" + new Date().toISOString().split('T')[0] + "\"\ncategory: \"" + article.cat + "\"\nexcerpt: \"" + article.excerpt + "\"\nimage: \"" + article.img + "\"\nauthor: \"" + article.author + "\"\n---\n" + article.content + "\n";

  fs.writeFileSync(path.join(targetDir, article.id + '.md'), mdContent);
  console.log("Updated article with Devnagari Headline: " + article.id + ".md");
});
