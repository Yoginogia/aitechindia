import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { AFFILIATE_TAG } from '@/data/deals';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

// Auto-port original AI generated cover imagery into the static public dir
const copyGeneratedImages = () => {
    try {
        const destDir = path.join(process.cwd(), 'public', 'images', 'blog');
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
        
        const srcDir = 'C:\\Users\\amit\\.gemini\\antigravity\\brain\\dae6f3ae-4629-466a-9c66-e684d7c34310';
        if (fs.existsSync(srcDir)) {
            const files = fs.readdirSync(srcDir);
            const mappings: Record<string, string> = {
                'nothing_fold_1': 'nothing-fold-1.png',
                'apple_gpt_ios': 'apple-gpt.png',
                'ethereum_zero_fees': 'ethereum-zero.png',
                'tesla_model_2_india': 'tesla-model-2.png',
                'iphone_18_pro_max': 'iphone-18-pro.png',
                'pixel_10_pro': 'pixel-10-pro.png'
            };
            files.forEach(file => {
                Object.keys(mappings).forEach(key => {
                    if (file.includes(key)) {
                        fs.copyFileSync(path.join(srcDir, file), path.join(destDir, mappings[key]));
                    }
                });
            });
        }
    } catch(e) { console.error('Image sync error:', e); }
};
copyGeneratedImages();

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
            };
        });

    // Sort posts by date descending
    return allPostsData.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        if (dateA < dateB) {
            return 1;
        } else if (dateA > dateB) {
            return -1;
        }
        return 0;
    });
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
