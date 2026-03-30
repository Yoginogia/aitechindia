export interface TechShort {
    id: string; // The YouTube Video ID (e.g., in youtube.com/shorts/ABC123XYZ, the ID is ABC123XYZ)
    title: string;
    channel: string;
}

export const TECH_SHORTS: TechShort[] = [
    {
        id: "1pUIf_c6XEY", // Change this to any Tech Burner / Trakin Tech Shorts ID
        title: "Apple Vision Pro in Public!",
        channel: "Tech Reviewer",
    },
    {
        id: "YOUTUBE_SHORT_ID_HERE", // Replace with valid ID
        title: "Galaxy S26 Ultra Leaks!",
        channel: "Tech Leaks",
    },
    {
        id: "ANOTHER_ID_HERE",
        title: "OpenAI ChatGPT-5 Confirmed?",
        channel: "AI Updates",
    },
    {
        id: "SHORT_ID_4",
        title: "Top 5 AI Tools for Students",
        channel: "AI Hustle",
    },
    {
        id: "SHORT_ID_5",
        title: "PS5 Pro vs Xbox - Which is better?",
        channel: "Gaming Tech",
    }
];

// Instructions for User:
// To add a new video:
// 1. Go to YouTube on your phone or PC.
// 2. Open any 'Shorts' video you like.
// 3. Copy the URL (e.g., https://www.youtube.com/shorts/xcVYs93m32Z)
// 4. Extract ONLY the ID at the end: "xcVYs93m32Z"
// 5. Paste it in the 'id' field above!
