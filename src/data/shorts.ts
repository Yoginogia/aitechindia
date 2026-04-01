export interface TechShort {
    id: string; // The YouTube Video ID (e.g., in youtube.com/shorts/ABC123XYZ, the ID is ABC123XYZ)
    title: string;
    channel: string;
}

export const TECH_SHORTS: TechShort[] = [
    {
        id: "JGpL7VEVqJ8",
        title: "Nvidia & Marvell का $2B AI Deal Explained!",
        channel: "Tech Explained",
    },
    {
        id: "gw0wVjFJV8Q",
        title: "Samsung Galaxy Book 6 Ultra First Look",
        channel: "Samsung Shorts",
    },
    {
        id: "_OBlgSz8sSM",
        title: "AI Agents क्या हैं? 60 सेकंड में जानें!",
        channel: "AI Updates",
    },
    {
        id: "N8uCvUilW_M", 
        title: "Huawei Matebook Fold Ultimate",
        channel: "Tech Leaks",
    },
    {
        id: "n5M8pRoRpmE", 
        title: "Smartphone Speed Test!",
        channel: "Tech Leaks",
    },
    {
        id: "WrfPTcK_FOs",
        title: "Apple WWDC Secrets",
        channel: "AI Updates",
    },
    {
        id: "86WokI3asU0",
        title: "Should you buy an iPhone now?",
        channel: "Apple Fanatics",
    },
    {
        id: "Ik9yYz0Kjx8",
        title: "Samsung Galaxy S24 Ultra Unboxing",
        channel: "Gadget Guru",
    }
];

// Instructions for User:
// To add a new video:
// 1. Go to YouTube on your phone or PC.
// 2. Open any 'Shorts' video you like.
// 3. Copy the URL (e.g., https://www.youtube.com/shorts/xcVYs93m32Z)
// 4. Extract ONLY the ID at the end: "xcVYs93m32Z"
// 5. Paste it in the 'id' field above!
