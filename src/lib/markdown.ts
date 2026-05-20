import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { AFFILIATE_TAG } from '@/data/deals';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

// In-memory cache for sorted posts data (avoids re-reading 532+ files on every call)
let _cachedPosts: PostData[] | null = null;
let _cacheTimestamp = 0;
const CACHE_TTL_MS = 60_000; // 1 minute cache in dev, effectively permanent in production build

export type PostData = {
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    image?: string;
    readingTime?: string;
    contentHtml?: string;
    author?: string;
    authorRole?: string;
    authorImage?: string;
    toc?: { id: string, text: string, level: number }[];
    amazon?: string;
    flipkart?: string;
};

// Default reading speed = 200 words per minute
function calculateReadingTime(text: string): string {
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / 200);
    return `${time} min read`;
}

// Permanently fixes: "Objects are not valid as a React child (found: [object Date])"
// Any YAML date like `date: 2026-04-17` (unquoted) gets parsed as Date object by gray-matter.
// This helper converts it safely to a human-readable string.
function sanitizeFrontmatter(data: Record<string, any>): Record<string, any> {
    const sanitized = { ...data };
    if (sanitized.date instanceof Date) {
        sanitized.date = sanitized.date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    } else if (sanitized.date !== undefined) {
        sanitized.date = String(sanitized.date);
    }
    return sanitized;
}

function getAuthorProfile(category: string, matterData: Record<string, any>) {
    // Use frontmatter values if present, otherwise use honest editorial team attribution
    const author = matterData.author || 'AITechNews Editorial';
    const authorRole = matterData.authorRole || 'Tech News Desk';
    const authorImage = matterData.authorImage || 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=100&h=100&q=80';
    return { author, authorRole, authorImage };
}

export function getSortedPostsData(): PostData[] {
    // Return cached data if still valid (prevents reading 532+ files multiple times per render)
    const now = Date.now();
    if (_cachedPosts && (now - _cacheTimestamp) < CACHE_TTL_MS) {
        return _cachedPosts;
    }

    if (!fs.existsSync(contentDirectory)) {
        fs.mkdirSync(contentDirectory, { recursive: true });
        return [];
    }

    // Get file names under /content/blog
    const fileNames = fs.readdirSync(contentDirectory);
    const allPostsData = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map((fileName) => {
            // Remove ".md" from file name to get slug
            const slug = fileName.replace(/\.md$/, '');

            // Read markdown file as string
            const fullPath = path.join(contentDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);
            const readingTime = calculateReadingTime(matterResult.content);

            const category = matterResult.data.category || 'Tech';
            const { author, authorRole, authorImage } = getAuthorProfile(category, matterResult.data);

            // Sanitize frontmatter to ensure date is always a string (not a Date object)
            const safeData = sanitizeFrontmatter(matterResult.data);

            // Combine the data with the slug
            return {
                slug,
                readingTime,
                author,
                authorRole,
                authorImage,
                ...(safeData as { title: string; date: string; category: string; excerpt: string, image?: string }),
                // Ensure required fields always have a value (some old articles may lack them)
                category: safeData.category || category || 'Tech',
                excerpt: safeData.excerpt || safeData.title || '',
                title: safeData.title || slug,
            };
        });

    // Sort posts by date descending
    const sorted = allPostsData.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        if (dateA < dateB) {
            return 1;
        } else if (dateA > dateB) {
            return -1;
        }
        return 0;
    });

    // Cache the result
    _cachedPosts = sorted;
    _cacheTimestamp = now;
    return sorted;
}

export function getAllPostSlugs() {
    if (!fs.existsSync(contentDirectory)) return [];
    const fileNames = fs.readdirSync(contentDirectory);

    return fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map((fileName) => {
            return {
                slug: fileName.replace(/\.md$/, ''),
            };
        });
}

export async function getPostData(slug: string): Promise<PostData> {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    // Replace ${AFFILIATE_TAG} placeholder with the actual central ID
    const rawContent = matterResult.content.split('${AFFILIATE_TAG}').join(AFFILIATE_TAG);
    
    const processedContent = await remark()
        .use(html)
        .process(rawContent);
        
    let contentHtml = processedContent.toString();
    
    // Inject internal links to boost SEO
    contentHtml = injectInternalLinks(contentHtml, slug);
    
    // Inject dynamic in-article Adsense ads
    contentHtml = injectAds(contentHtml);
    
    // Auto-generate TOC and inject IDs into HTML headings
    const toc: { id: string, text: string, level: number }[] = [];
    contentHtml = contentHtml.replace(/<h([23])>(.*?)<\/h\1>/g, (match, level, text) => {
        const cleanText = text.replace(/<[^>]*>?/gm, ''); // Remove inline HTML from heading text
        let id = cleanText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        if (!id) id = `heading-${Math.floor(Math.random() * 1000)}`;
        
        toc.push({ id, text: cleanText, level: parseInt(level) });
        return `<h${level} id="${id}" class="scroll-mt-24">${text}</h${level}>`;
    });

    const readingTime = calculateReadingTime(matterResult.content);

    const category = matterResult.data.category || 'Tech';
    const { author, authorRole, authorImage } = getAuthorProfile(category, matterResult.data);

    // Sanitize frontmatter to ensure date is always a string (not a Date object)
    const safeData = sanitizeFrontmatter(matterResult.data);

    // Combine the data with the id and contentHtml
    return {
        slug,
        contentHtml,
        readingTime,
        author,
        authorRole,
        authorImage,
        toc,
        ...(safeData as { title: string; date: string; category: string; excerpt: string, image?: string }),
    };
}


function escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function injectInternalLinks(html: string, currentSlug: string): string {
    const links = [
        { keyword: 'Vision Agent', slug: 'tencent-vision-agents-physical-ai-robotic-revolutions' },
        { keyword: 'Vision Agents', slug: 'tencent-vision-agents-physical-ai-robotic-revolutions' },
        { keyword: 'XPeng Robotaxi', slug: 'xpeng-robotaxi-launch-autonomous-driving-china' },
        { keyword: 'BMW Bidirectional', slug: 'bmw-bidirectional-charging-ev-grid-integration' },
        { keyword: 'Moto G37 Power', slug: 'motorola-moto-g37-power-launch-price-specifications' },
        { keyword: 'Google I/O 2026', slug: 'google-io-2026-gemini-intelligence-search-android-updates' },
        { keyword: 'Gemini Intelligence', slug: 'google-io-2026-gemini-intelligence-search-android-updates' },
        { keyword: 'Microsoft Patch Tuesday', slug: 'microsoft-patch-tuesday-critical-cve-bug-fixes-list' },
        { keyword: 'Echo Protocol', slug: 'crypto-market-extreme-fear-echo-hack-2026-05-19' },
        { keyword: 'Amazon Great Summer Sale', slug: 'deals-amazon-flipkart-summer-tech-sale-2026-05-19' },
        { keyword: 'Flipkart Sale', slug: 'deals-amazon-flipkart-summer-tech-sale-2026-05-19' },
        { keyword: 'Echo', slug: 'crypto-market-extreme-fear-echo-hack-2026-05-19' },
        { keyword: 'Tencent', slug: 'tencent-vision-agents-physical-ai-robotic-revolutions' }
    ];

    const activeLinks = links.filter(l => l.slug !== currentSlug);
    activeLinks.sort((a, b) => b.keyword.length - a.keyword.length);

    const tokens = html.split(/(<[^>]+>)/g);
    const linkedKeywords = new Set();
    let inAnchor = false;

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (token.startsWith('<')) {
            if (token.toLowerCase().startsWith('<a ') || token.toLowerCase() === '<a>') {
                inAnchor = true;
            } else if (token.toLowerCase() === '</a>') {
                inAnchor = false;
            }
        } else {
            if (!inAnchor) {
                let text = token;
                for (const link of activeLinks) {
                    if (linkedKeywords.has(link.keyword)) continue;

                    const regex = new RegExp(`(?<=^|[^a-zA-Z0-9\\u0900-\\u097F])(${escapeRegExp(link.keyword)})(?=$|[^a-zA-Z0-9\\u0900-\\u097F])`, 'i');
                    const replaced = text.replace(regex, `<a href="/blog/${link.slug}" class="text-primary hover:underline font-medium">$1</a>`);
                    if (replaced !== text) {
                        text = replaced;
                        linkedKeywords.add(link.keyword);
                        if (link.keyword === 'Vision Agent') linkedKeywords.add('Vision Agents');
                        if (link.keyword === 'Vision Agents') linkedKeywords.add('Vision Agent');
                    }
                }
                tokens[i] = text;
            }
        }
    }

    return tokens.join('');
}

function injectAds(html: string): string {
    const paragraphs = html.split('</p>');
    
    // Insert after 3rd paragraph (index 2), meaning prepend to index 3
    if (paragraphs.length > 3) {
        const adHtml1 = `
<div class="w-full relative mx-auto my-8 flex items-center justify-center bg-zinc-900/50 border border-dashed border-primary/20 rounded-2xl overflow-hidden p-6" style="min-height: 120px;">
    <div class="absolute top-2 right-3 text-[10px] uppercase font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
        Advertisement
    </div>
    <div class="flex flex-col items-center justify-center opacity-60">
        <span class="text-sm font-semibold text-muted-foreground font-mono">Google AdSense - Middle Ad 1</span>
        <span class="text-xs text-muted-foreground/60 mt-1 font-mono">Slot ID: INLINE_MID_1</span>
    </div>
</div>\\n`;
        paragraphs[3] = adHtml1 + paragraphs[3];
    }

    // Insert after 6th paragraph (index 5), meaning prepend to index 6
    if (paragraphs.length > 6) {
        const adHtml2 = `
<div class="w-full relative mx-auto my-8 flex items-center justify-center bg-zinc-900/50 border border-dashed border-primary/20 rounded-2xl overflow-hidden p-6" style="min-height: 120px;">
    <div class="absolute top-2 right-3 text-[10px] uppercase font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
        Advertisement
    </div>
    <div class="flex flex-col items-center justify-center opacity-60">
        <span class="text-sm font-semibold text-muted-foreground font-mono">Google AdSense - Middle Ad 2</span>
        <span class="text-xs text-muted-foreground/60 mt-1 font-mono">Slot ID: INLINE_MID_2</span>
    </div>
</div>\\n`;
        paragraphs[6] = adHtml2 + paragraphs[6];
    }

    return paragraphs.join('</p>');
}
