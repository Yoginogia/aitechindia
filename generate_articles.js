const fs = require('fs');
const path = require('path');

const articles = [
  {
    slug: 'chatgpt-guide-2026',
    title: 'ChatGPT Complete Guide (2026): नए फ़ीचर्स और Use Cases',
    category: 'AI Tools',
    author: 'AITechNews Desk',
    image: '/images/blog/gpt-5-gemini-3.png',
    content: `OpenAI का ChatGPT 2026 में पूरी तरह बदल चुका है। अब यह सिर्फ़ एक text-bot नहीं रहा, बल्कि एक Advanced AI Agent बन गया है।

## 1. ChatGPT में नया क्या है?
हाल ही में ChatGPT-5/ChatGPT-Next के आने से इसमें **Agentic AI** जोड़ा गया है। 
- **Voice Mode 2.0:** अब latency 0 है, आप इसे रोक कर बीच में टोक सकते हैं।
- **Custom GPTs Store:** 3 मिलियन से ज़्यादा pre-trained bots।
- **Vision Pro Integration:** Video upload करें और ये live video समझ सकता है।

## 2. Best Use Cases (कहाँ इस्तेमाल करें)
- **Students:** Research papers लिखने और difficult mathematics solve करने के लिए। Prompt: 'Explain [Topic] like I am 5 years old.'
- **Coders:** Python, React या NextJS के 1000 lines के code में seconds में bugs ढूँढना।
- **Business:** Daily emails का reply करना और meeting summaries तैयार करना।

ChatGPT Freemium है। इसका basic model Plus features के साथ काफी शक्तिशाली है।`
  },
  {
    slug: 'perplexity-guide-2026',
    title: 'Perplexity AI Review: Google Search का असली बाप?',
    category: 'AI Tools',
    author: 'AITechNews Desk',
    image: '/images/blog/agentic_ai_explained.png',
    content: `Perplexity AI अब India में students और professionals का favorite बन चुका है। Google जहाँ आपको 10 blue links देता है, वहीं Perplexity सीधा जवाब देता है।

## 1. Perplexity में नया क्या है?
- **Pro Search (Copilot):** यह आख़िरी जवाब देने से पहले आपसे clarify करने के लिए सवाल पूछता है।
- **Focus Modes:** आप इसे सिर्फ़ "Academic Papers" या "YouTube" से search करने के लिए कह सकते हैं।
- **Real-time Sources:** हर line के साथ clickable footnotes होते हैं।

## 2. Best Use Cases
- **Research:** "Give me a detailed market report on EV sector in India for 2026 with citations."
- **Current Affairs:** Live data access होने से यह आज की news एकदम सटीकता से देता है।
- **Shopping:** "Find the best laptop under 50k with OLED display" - सीधा verdict देगा।`
  },
  {
    slug: 'claude-guide-2026',
    title: 'Claude 3 Review: सबसे Human-like AI Model (2026)',
    category: 'AI Tools',
    author: 'AITechNews Desk',
    image: '/images/blog/claude-mythos-5-gpt-battle.jpg',
    content: `Anthropic का Claude 3 (Opus & Sonnet) coding और writing के मामले में ChatGPT को कड़ी टक्कर दे रहा है।

## 1. Claude में नया क्या है?
- **Huge Context Window:** आप इसमें 1 लाख से ज़्यादा शब्दों की पूरी PDF किताब एक साथ दाल सकते हैं।
- **Fewer Refusals:** यह false "I am an AI, I cannot answer" वाली errors कम देता है।
- **Artifacts UI:** जब आप code या website बनाने को कहेंगे, तो ये सीधा बगल में preview दिखा देता है।

## 2. Best Use Cases
- **Writers:** Articles, stories और SEO blogs लिखने के लिए। इसकी भाषा में robotic touch बहुत कम होता है।
- **Data Analysis:** बड़ी excel sheets upload करें और सीधा charts और insights प्राप्त करें।`
  },
  {
    slug: 'quillbot-guide-2026',
    title: 'Quillbot Ultimate Guide: AI Word Spinner & Grammar Checker',
    category: 'AI Tools',
    author: 'AITechNews Desk',
    image: '/images/blog/india_ai_boom.png',
    content: `QuillBot उन लोगों के लिए वरदान है जिनकी English writing थोड़ी कमज़ोर है या जो content rewrite करना चाहते हैं।

## 1. QuillBot में नया क्या है?
- **AI Plagiarism Checker:** अब यह सीधा AI generated content भी detect कर सकता है।
- **Co-Writer Mode:** Text rewrite करने के साथ-साथ ये आपके लिए नया text suggest भी करता है।
- **Multi-language Support:** अब यह Hindi और English (Indian) को भी बेहतरीन ढंग से process करता है।

## 2. Use Cases
- **Students & Bloggers:** Plagiarism से बचने के लिए articles को paraphrase करने में।
- **Professionals:** Mails को "Formal" या "Creative" tone में change करने में।`
  },
  {
    slug: 'midjourney-guide-2026',
    title: 'Midjourney Guide: Text से Real Photos कैसे बनाएँ?',
    category: 'AI Tools',
    author: 'AITechNews Desk',
    image: '/images/blog/google_turboquant_tech.png',
    content: `Midjourney 2026 में Image Generation का king है। इसकी photos बिल्कुल असली DSLR जैसी लगती हैं।

## 1. Midjourney V6/V7 में नया क्या है?
- **Perfect Text Generation:** अब images के अंदर आप जो text (boards/signs) लिखवाना चाहें, वो बिना गलती के आता है।
- **Ultra-Realism:** Skin textures, lighting और shadows 100% human-like लग रहे हैं।
- **Inpainting (Vary Region):** Photo के किसी एक हिस्से को select करके सिर्फ़ उसे बदल सकते हैं।

## 2. Use Cases
- **Graphic Designers:** Logos, website mockups और creative banners बनाने के लिए। Prompt: "A hyper-realistic photo of..."
- **Marketers:** Ads के लिए copyright-free unique images तैयार करना।`
  },
  {
    slug: 'heygen-guide-2026',
    title: 'HeyGen Video AI: बिना camera के Videos कैसे बनाएँ?',
    category: 'AI Tools',
    author: 'AITechNews Desk',
    image: '/images/blog/agentic_ai_explained.png',
    content: `HeyGen ने YouTube और Instagram Reels की दुनिया बदल दी है। आपको बस script लिखनी है, AI avatar खुद बोल कर video बना देगा।

## 1. HeyGen में नया क्या है?
- **Instant Avatar:** सिर्फ़ 2 मिनट का अपना video upload करें, और ये आपकी exact digital copy (आवाज़ और लिप्सिंग के साथ) बना देगा।
- **Video Translation:** किसी भी English video को Hindi या Spanish में आपकी ही आवाज़ में translate कर देता है।

## 2. Use Cases
- **YouTubers & Creators:** बिना setup और lighting के daily content बनाना।
- **Marketing & HR:** Company के training videos और Product demos बनाना।`
  },
  {
    slug: 'leonardo-guide-2026',
    title: 'Leonardo AI Guide: Midjourney का Best Free Alternative',
    category: 'AI Tools',
    author: 'AITechNews Desk',
    image: '/images/blog/india_ai_boom.png',
    content: `जो लोग Midjourney का subscription नहीं ले सकते, उनके लिए Leonardo AI बेहतरीन free platform है।

## 1. Leonardo AI में नया क्या है?
- **Motion (Video Generation):** अब आप generated images को 3 second के video animation में बदल सकते हैं।
- **Real-time Canvas:** आप left में drawing करेंगे और right में AI उसे real-time में HD photo में बदल देगा।

## 2. Use Cases
- **Game Developers:** Game assets, characters और backgrounds free में design करना।
- **Social Media:** Daily Posts और Instagram content के लिए free credits का इस्तेमाल।`
  },
  {
    slug: 'runway-guide-2026',
    title: 'Runway ML (Gen-3): Text लिख कर Hollywood Videos बनाएँ!',
    category: 'AI Tools',
    author: 'AITechNews Desk',
    image: '/images/blog/google_turboquant_tech.png',
    content: `Runway ML video generation की field में revolution ला रहा है। Gen-3 Alpha model text-to-video में एकदम realistic outputs दे रहा है।

## 1. Runway Gen-3 में नया क्या है?
- **Precise Camera Control:** "Pan right", "Zoom in" जैसे director-level text commands अब काम करते हैं।
- **Motion Brush:** Photo upload करें, सिर्फ़ पानी या बादलों पर brush फेरें, और सिर्फ़ वही हिस्सा video में हिलने लगेगा।

## 2. Use Cases
- **Filmmakers & Editors:** B-rolls, VFX और stock footage बिना पैसे खर्च किए generate करना।
- **Ad Agencies:** Product commercials के लिए mind-bending visuals तैयार करना।`
  },
  {
    slug: 'gamma-guide-2026',
    title: 'Gamma App Review: 1 Minute में AI से PPT बनाएँ',
    category: 'AI Tools',
    author: 'AITechNews Desk',
    image: '/images/blog/claude-mythos-5-gpt-battle.jpg',
    content: `PowerPoint का ज़माना पुराना हो गया है। Gamma App एक prompt से पूरी presentation, website या document design कर देता है।

## 1. Gamma में नया क्या है?
- **Custom Theming:** आप अपनी company का logo और colors देंगे, और ये पूरी PPT उसी theme में ढाल देगा।
- **Interactive Blocks:** अब slides के अंदर live websites, videos और GIFs AI खुद embed कर देता है।

## 2. Use Cases
- **Startup Founders:** Investors के लिए Pitch decks मिनटों में तैयार करना।
- **Students & Teachers:** School/College assignments के लिए visually appealing presentations बनाना।`
  },
  {
    slug: 'notion-guide-2026',
    title: 'Notion AI: आपका personal AI Assistant aur Workspace',
    category: 'AI Tools',
    author: 'AITechNews Desk',
    image: '/images/blog/agentic_ai_explained.png',
    content: `Notion पहले से ही best note-taking app था, लेकिन Notion Q and A (Notion AI) के आने के बाद ये एक second-brain बन गया है।

## 1. Notion AI में नया क्या है?
- **Workspace Q&A:** आप पूछ सकते हैं "Last week marketing meeting में क्या तय हुआ था?" और AI आपके हज़ारों notes पढ़ कर جواب दे देगा।
- **Auto-Formatting:** Rough notes लिखें और AI उसे table, format या bullet points में बदल देगा।

## 2. Use Cases
- **Teams & Companies:** Project management, task tracking aur documents 정리 करना।
- **Content Creators:** Content calendar बनाना और articles/scripts को same jagah पर AI से revise करवाना।`
  },
  {
    slug: 'tome-guide-2026',
    title: 'Tome AI: Slides generation aur Business Storytelling',
    category: 'AI Tools',
    author: 'AITechNews Desk',
    image: '/images/blog/india_ai_boom.png',
    content: `Tome AI business storytelling के लिए बनाया गया है। यह सिर्फ bullets नहीं बनाता, बल्कि proper narrative और 3D images generate करता है।

## 1. Tome में नया क्या है?
- **DALL-E 3 Integrated:** Slides के बगल में जो photo लगती है, वो AI खुद DALL-E से बना कर लगाता है।
- **Data to Story:** अपना excel data paste करें, और ये उसे charts और stories में बदल देगा।

## 2. Use Cases
- **Sales Teams:** Clients के लिए personalized sales pitches create करना।
- **Marketers:** Campaigns और portfolios को impressive तरीके से पेश करना।`
  },
  {
    slug: 'github-copilot-guide-2026',
    title: 'GitHub Copilot Review: Coders की AI नौकरी?',
    category: 'AI Tools',
    author: 'AITechNews Desk',
    image: '/images/blog/google_turboquant_tech.png',
    content: `Microsoft का GitHub Copilot अब दुनिया के 80% developers का साझीदार बन चूका है।

## 1. Copilot (GPT-4o) में नया क्या है?
- **Copilot Chat:** VS Code के अंदर ही ChatGPT बैठा है। आप कह सकते हैं "Explain this function" या "Write unit tests for this file"।
- **Context-Aware:** ये आपके पूरे project structure को समझ कर code suggest करता है, सिर्फ एक file को नहीं।

## 2. Use Cases
- **Software Engineers:** Routine code (boilerplate) लिखने का समय 50% से ज़्यादा कम करना।
- **Beginners:** Code सीखते वक़्त live errors को explain करवाना और fixes माँगना।`
  },
  {
    slug: 'cursor-guide-2026',
    title: 'Cursor IDE: क्या ये VS Code को Replace कर देगा?',
    category: 'AI Tools',
    author: 'AITechNews Desk',
    image: '/images/blog/agentic_ai_explained.png',
    content: `Cursor एक VS Code का fork है जो AI-first है। इसे ख़ास AI coding के लिए ही design किया गया है।

## 1. Cursor में नया क्या है?
- **Composer Mode:** CTRL+K दबाएँ, इसे बताएँ क्या बनाना है (e.g., "Add a login page"), और यह multiple files में एक साथ code लिख देगा!
- **Auto-import Docs:** आप इसे 3rd party libraries का link (e.g., Stripe API) दे सकते हैं और ये उस library के rules पढ़कर code लिखेगा।

## 2. Use Cases
- **Web Developers:** OpenAI और Claude 3.5 Sonnet का इस्तेमाल करके बिजली की रफ़्तार से full-stack projects तैयार करना।`
  },
  {
    slug: 'elevenlabs-guide-2026',
    title: 'ElevenLabs Guide: सबसे असली लगने वाला AI Voice Generator',
    category: 'AI Tools',
    author: 'AITechNews Desk',
    image: '/images/blog/claude-mythos-5-gpt-battle.jpg',
    content: `ElevenLabs ने TTS (Text-to-Speech) को नया रूप दिया है। इसकी आवाज़ में साँस लेने और भावनाएं (emotion) 100% असली लगती हैं।

## 1. ElevenLabs में नया क्या है?
- **Speech-to-Speech:** अपनी ही ख़राब आवाज़ record करें, और AI उसे किसी Hollywood actor की professional आवाज़ में बदल देगा।
- **Sound Effects:** अब सिर्फ आवाज़ ही नहीं, "Dog barking" या "Car crash" लिखकर आप Foley sounds भी generate کر सकते हैं।

## 2. Use Cases
- **Faceless YouTubers & Podcasters:** बिना mic ख़रीदे premium level के voiceovers तैयार करना।
- **Audiobook Creators:** Text books को professional audiobooks में Convert करना।`
  },
  {
    slug: 'suno-guide-2026',
    title: 'Suno AI review: Text से पूरे गाने (Music) कैसे बनाएँ?',
    category: 'AI Tools',
    author: 'AITechNews Desk',
    image: '/images/blog/india_ai_boom.png',
    content: `Suno V3/V4 ने music industry में खलबली मचा दी है। यह सिर्फ beats नहीं, बल्कि lyrics, vocals और instruments सब generate करता है।

## 1. Suno AI में नया क्या है?
- **Full 4-Minute Songs:** अब आप एक prompt में पूरा 4 मिनट का गाना (Verse, Chorus, Bridge) के साथ produce कर सकते हैं।
- **Audio Input:** कोई भी धुन गुनगुना कर (humming) upload करें, और Suno उसे एक proper studio song में बदल देगा।

## 2. Use Cases
- **Content Creators:** Copyright-free background music और theme songs बनाना।
- **Casual Users:** दोस्तों के जन्मदिन पर उनके नाम से personalized funny गाने बनाना।`
  }
];

const targetDir = path.join(__dirname, 'src', 'content', 'blog');

articles.forEach(article => {
  // Correctly extract the first line and sanitize any double quotes for YAML excerpts
  const shortExcerpt = article.content.split('\n')[0].replace(/"/g, "'");
  
  const mdContent = "---\ntitle: \"" + article.title + "\"\ndate: \"" + new Date().toISOString().split('T')[0] + "\"\ncategory: \"" + article.category + "\"\nexcerpt: \"" + shortExcerpt + "\"\nimage: \"" + article.image + "\"\nauthor: \"" + article.author + "\"\n---\n" + article.content + "\n";

  fs.writeFileSync(path.join(targetDir, article.slug + '.md'), mdContent);
  console.log("Created/Fixed " + article.slug + ".md");
});
