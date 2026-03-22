const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\amit\\.gemini\\antigravity\\brain\\dae6f3ae-4629-466a-9c66-e684d7c34310';
const destDir = path.join(__dirname, 'public', 'images', 'blog');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);

const mappings = {
    'nothing_fold_1': 'nothing-fold-1.png',
    'apple_gpt_ios': 'apple-gpt.png',
    'ethereum_zero_fees': 'ethereum-zero.png',
    'tesla_model_2_india': 'tesla-model-2.png'
};

files.forEach(file => {
    Object.keys(mappings).forEach(key => {
        if (file.includes(key)) {
            fs.copyFileSync(path.join(srcDir, file), path.join(destDir, mappings[key]));
            console.log('Successfully Copied: ' + mappings[key]);
        }
    });
});
