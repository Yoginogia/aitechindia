export type TechTerm = {
    term: string;
    definition: string;
    category: "AI" | "Mobile" | "Hardware" | "Crypto" | "General Tech";
    slug: string; // URL friendly slug (e.g. "agentic-ai")
};

export const TECH_DICTIONARY: TechTerm[] = [
    {
        term: "Agentic AI",
        definition: "एक ऐसी एडवांस AI जो सिर्फ जवाब नहीं देती, बल्कि इंसानों की तरह खुद सोचकर, प्लान बनाकर और कदम उठाकर कोई भी काम (Task) पूरा कर सकती है।",
        category: "AI",
        slug: "agentic-ai"
    },
    {
        term: "Algorithm (एल्गोरिदम)",
        definition: "कंप्यूटर या AI को कोई काम करने के लिए दिए गए स्टेप-बाय-स्टेप निर्देशों (Instructions) का सेट। इसे कंप्यूटर की 'रेसिपी' समझ लें।",
        category: "General Tech",
        slug: "algorithm"
    },
    {
        term: "AMOLED Display",
        definition: "स्मार्टफोन्स में इस्तेमाल होने वाली स्क्रीन तकनीक जहाँ हर पिक्सल अपनी खुद की लाइट बनाता है, जिससे रंग गहरे (Dark) और बैटरी की बचत होती है।",
        category: "Mobile",
        slug: "amoled-display"
    },
    {
        term: "Artificial Intelligence (AI)",
        definition: "मशीनों (कंप्यूटर) द्वारा इंसानों की तरह सोचने, सीखने और फैसले लेने की क्षमता को आर्टिफिशियल इंटेलिजेंस कहते हैं।",
        category: "AI",
        slug: "artificial-intelligence"
    },
    {
        term: "Blockchain",
        definition: "एक डिजिटल और 100% सुरक्षित बही-खाता (Ledger) जहाँ डेटा ब्लॉक्स में सेव होता है और इसे कोई हैक या बदल नहीं सकता (जैसे Bitcoin)।",
        category: "Crypto",
        slug: "blockchain"
    },
    {
        term: "Chatbot (चैटबॉट)",
        definition: "एक कंप्यूटर प्रोग्राम (जैसे ChatGPT) जो इंसानों की तरह टेक्स्ट या आवाज़ के ज़रिए आपसे बातचीत कर सकता है।",
        category: "AI",
        slug: "chatbot"
    },
    {
        term: "Cloud Computing",
        definition: "इंटरनेट के ज़रिए डाटा स्टोर करना या कंप्यूटर की पावर का यूज़ करना, ताकि फाइलें आपके फोन/लैपटॉप की जगह ऑनलाइन सुरक्षित रहें।",
        category: "General Tech",
        slug: "cloud-computing"
    },
    {
        term: "CPU (प्रोसेसर)",
        definition: "कंप्यूटर या मोबाइल का 'दिमाग' (Central Processing Unit) जो सारे कमांड्स को समझकर काम करता है (जैसे Snapdragon, Intel)।",
        category: "Hardware",
        slug: "cpu"
    },
    {
        term: "Cryptocurrency",
        definition: "डिजिटल या वर्चुअल पैसा जिसे क्रिप्टोग्राफी द्वारा सुरक्षित किया जाता है। इसे सरकार ब्लॉक या कंट्रोल नहीं करती (जैसे Bitcoin, Ethereum)।",
        category: "Crypto",
        slug: "cryptocurrency"
    },
    {
        term: "Deep Learning",
        definition: "AI की एक तकनीक जो इंसानी दिमाग (Neural Networks) की तरह काम करके मुश्किल चीज़ें (जैसे चेहरा या आवाज़ पहचानना) सीखती है।",
        category: "AI",
        slug: "deep-learning"
    },
    {
        term: "GPU (ग्राफ़िक्स कार्ड)",
        definition: "Graphics Processing Unit — कंप्यूटर का वह हिस्सा जो गेमिंग, वीडियो एडिटिंग और आज-कल AI (ChatGPT) को फास्ट चलाने के काम आता है।",
        category: "Hardware",
        slug: "gpu"
    },
    {
        term: "IP Rating (IP68)",
        definition: "Ingress Protection — यह बताता है कि आपका गैजेट धूल (Dust) और पानी (Water) से कितना सुरक्षित है। IP68 मतलब फोन पानी में नहीं डूबेगा।",
        category: "Mobile",
        slug: "ip-rating"
    },
    {
        term: "LLM (Large Language Model)",
        definition: "AI की वह टेक्नोलॉजी जिस पर ChatGPT या Gemini बने हैं। इसे पूरी दुनिया का इंटरनेट पढ़ाकर इतना स्मार्ट बनाया गया है कि यह इंसानों जैसी बातें कर सके।",
        category: "AI",
        slug: "llm"
    },
    {
        term: "Machine Learning (ML)",
        definition: "कंप्यूटर को डेटा देकर बिना प्रोग्रामिंग के खुद सीखने और सुधार करने की क्षमता देना मशीन लर्निंग कहलाता है।",
        category: "AI",
        slug: "machine-learning"
    },
    {
        term: "Metaverse (मेटावर्स)",
        definition: "एक वर्चुअल (VR) दुनिया जहाँ आप इंटरनेट के अंदर जाकर लोगों से मिल सकते हैं, खेल सकते हैं और काम कर सकते हैं जैसे सच में वहीं हों।",
        category: "General Tech",
        slug: "metaverse"
    },
    {
        term: "Neural Network",
        definition: "इंसानी दिमाग की नसों (Neurons) से प्रेरित होकर बनाया गया कंप्यूटर सिस्टम, जो AI को फोटो या आवाज़ पहचानने में मदद करता है।",
        category: "AI",
        slug: "neural-network"
    },
    {
        term: "NFC",
        definition: "Near Field Communication — फोन के पास फोन लाकर डेटा ट्रांसफर करना या कार्ड छुए बिना पेमेंट (Tap to Pay) करने की टेक्नोलॉजी।",
        category: "Mobile",
        slug: "nfc"
    },
    {
        term: "NPU (Neural Processing Unit)",
        definition: "आजकल के स्मार्टफोन्स (जैसे Apple, Snapdragon) में लगा ख़ास चिप (Chip) जो फोन के अंदर के AI टास्क को तेज़ी से करता है।",
        category: "Hardware",
        slug: "npu"
    },
    {
        term: "Refresh Rate (120Hz)",
        definition: "आपकी फोन स्क्रीन एक सेकंड में कितनी बार रिफ्रेश होती है। 120Hz का मतलब है स्क्रीन बहुत स्मूथ (मक्खन जैसी) चलेगी।",
        category: "Mobile",
        slug: "refresh-rate"
    },
    {
        term: "Web3",
        definition: "इंटरनेट का नया वर्ज़न (भविष्य) जहाँ बड़ी कंपनियां (जैसे Google/Facebook) इंटरनेट कंट्रोल नहीं करेंगी, बल्कि वह यूज़र्स का होगा (Blockchain के जरिये)।",
        category: "Crypto",
        slug: "web3"
    }
];

// Helper Function: Alphabetical Sorted A-Z list for UI
export const getSortedDictionary = () => {
    return TECH_DICTIONARY.sort((a, b) => a.term.localeCompare(b.term));
};
