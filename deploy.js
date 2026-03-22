const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Finalizing the Master Plan... Processing updates...');

try {
    const destBlog = path.join(__dirname, 'public', 'images', 'blog');
    const destDeals = path.join(__dirname, 'public', 'images', 'deals');
    
    if (!fs.existsSync(destBlog)) fs.mkdirSync(destBlog, { recursive: true });
    if (!fs.existsSync(destDeals)) fs.mkdirSync(destDeals, { recursive: true });
    
    const srcDir = 'C:\\Users\\amit\\.gemini\\antigravity\\brain\\dae6f3ae-4629-466a-9c66-e684d7c34310';
    if (fs.existsSync(srcDir)) {
        console.log('📸 Found AI Image Vault. Moving files to project...');
        const files = fs.readdirSync(srcDir);
        
        // Exact mappings based on generated timestamps
        const mappings = {
            'iphone_18_pro_max': 'iphone-18-pro.png',
            'pixel_10_pro': 'pixel-10-pro.png',
            'nothing_fold_1': 'nothing-fold-1.png',
            'apple_gpt_ios': 'apple-gpt.png',
            'ethereum_zero_fees': 'ethereum-zero.png',
            'tesla_model_2_india': 'tesla-model-2.png'
        };
        
        let copiedCount = 0;
        files.forEach(file => {
            Object.keys(mappings).forEach(key => {
                if (file.includes(key)) {
                    fs.copyFileSync(path.join(srcDir, file), path.join(destBlog, mappings[key]));
                    copiedCount++;
                }
            });
        });
        console.log('✅ Ported ' + copiedCount + ' original feature images directly into Native System.');
    }

    console.log('🌐 Committing all UI Fixes and Pushing to Vercel via GitHub...');
    execSync('git add . && git commit -m "Complete Dark/Light Mode UX Overhaul + Custom AI Smartphone Imagery" && git push origin main', { stdio: 'inherit' });
    
    console.log('');
    console.log('🏆 MASTER PLAN EXECUTED SUCCESFULLY! Vercel is deploying right now!');
    console.log('Please wait 2 minutes and refresh aitechnews.co.in.');

} catch (err) {
    if (err.message && err.message.includes('working tree clean')) {
        console.log('⚠️ Code is already up to date on GitHub. Refresh Vercel shortly.');
    } else {
        console.error('❌ Error during deployment:', err.message);
    }
}
