export interface TechShort {
    id: string; // The YouTube Video ID (e.g., in youtube.com/shorts/ABC123XYZ, the ID is ABC123XYZ)
    title: string;
    channel: string;
}

export const TECH_SHORTS: TechShort[] = [
    {
        id: "WFig9CZBFOw",
        title: "Latest Tech Short",
        channel: "Tech Updates",
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
