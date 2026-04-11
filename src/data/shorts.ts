export interface TechShort {
    id: string; // The YouTube Video ID (e.g., in youtube.com/shorts/ABC123XYZ, the ID is ABC123XYZ)
    title: string;
    channel: string;
}

export const TECH_SHORTS: TechShort[] = [
    {
        id: "L_C0ywtsX88",
        title: "Apple M4 MacBook Air Unboxing! 💻",
        channel: "Tech Burner",
    },
    {
        id: "BJS0_XovsvQ",
        title: "Samsung Galaxy S26 Ultra - Camera Test! 📸",
        channel: "Gadget Guru",
    },
    {
        id: "fFZyJdQtaCs",
        title: "Top 3 Gaming Laptops Under 60K! 🎮",
        channel: "Tech Updates",
    },
    {
        id: "vN3ysH_dSYU",
        title: "Redmi Note 16 Pro Plus Hands On! 🔥",
        channel: "Tech Leaks",
    },
    {
        id: "aJK1t5o_MqQ",
        title: "iPhone 18 Pro Max - No Ports? 😱",
        channel: "Apple Fanatics",
    },
    {
        id: "ONQkStzRxI0",
        title: "Best Productivity AI Laptops 2026",
        channel: "Gadget Guru",
    }
];

// ✅ नया Short Video कैसे Add करें:
// 1. YouTube पर कोई भी Tech Short खोलें (mobile या PC पर)
// 2. URL कुछ ऐसी दिखेगी: https://www.youtube.com/shorts/xcVYs93m32Z
// 3. आखिरी हिस्सा copy करें: "xcVYs93m32Z"
// 4. ऊपर TECH_SHORTS array में नया object add करें:
//    { id: "xcVYs93m32Z", title: "आपका Title", channel: "Channel Name" }

// Instructions for User:
// To add a new video:
// 1. Go to YouTube on your phone or PC.
// 2. Open any 'Shorts' video you like.
// 3. Copy the URL (e.g., https://www.youtube.com/shorts/xcVYs93m32Z)
// 4. Extract ONLY the ID at the end: "xcVYs93m32Z"
// 5. Paste it in the 'id' field above!
