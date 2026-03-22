import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

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
                'tesla_model_2_india': 'tesla-model-2.png'
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
};

// Default reading speed = 200 words per minute
function calculateReadingTime(text: string): string {
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / 200);
    return `${time} min read`;
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

            // Combine the data with the slug
            return {
                slug,
                readingTime,
                author: matterResult.data.author || 'Amit Sharma',
                authorRole: matterResult.data.authorRole || 'Senior Tech Analyst',
                authorImage: matterResult.data.authorImage || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80',
                ...(matterResult.data as { title: string; date: string; category: string; excerpt: string, image?: string }),
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
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    const readingTime = calculateReadingTime(matterResult.content);

    // Combine the data with the id and contentHtml
    return {
        slug,
        contentHtml,
        readingTime,
        author: matterResult.data.author || 'Amit Sharma',
        authorRole: matterResult.data.authorRole || 'Senior Tech Analyst',
        authorImage: matterResult.data.authorImage || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80',
        ...(matterResult.data as { title: string; date: string; category: string; excerpt: string, image?: string }),
    };
}
