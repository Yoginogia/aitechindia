import os
from PIL import Image
import glob

def convert_to_webp(blog_img_dir, md_content_dir):
    pattern = os.path.join(blog_img_dir, '*.png')
    png_files = glob.glob(pattern)
    
    print(f"Found {len(png_files)} PNG files to convert to WEBP.")
    
    # 1. Convert Images
    for filepath in png_files:
        try:
            filename = os.path.basename(filepath)
            webp_filepath = os.path.splitext(filepath)[0] + '.webp'
            
            with Image.open(filepath) as img:
                # Convert to RGB if needed
                img = img.convert('RGB')
                # Resize if > 800px width
                if img.width > 800:
                    ratio = 800.0 / img.width
                    new_size = (800, int(img.height * ratio))
                    img = img.resize(new_size, Image.Resampling.LANCZOS)
                
                # Save as WEBP
                img.save(webp_filepath, 'webp', quality=65)
                print(f"Created {os.path.basename(webp_filepath)}")
                
            # Remove original PNG
            os.remove(filepath)
            
        except Exception as e:
            print(f"Error processing {filepath}: {e}")

    # 2. Update Markdown files
    md_pattern = os.path.join(md_content_dir, '**/*.md')
    md_files = glob.glob(md_pattern, recursive=True)
    
    for filepath in md_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if '.png' in content:
            # Replace local path extensions
            new_content = content.replace('.png', '.webp')
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated references in {os.path.basename(filepath)}")

if __name__ == "__main__":
    blog_img_dir = os.path.join(os.getcwd(), 'public', 'images', 'blog')
    md_content_dir = os.path.join(os.getcwd(), 'src', 'content', 'blog')
    convert_to_webp(blog_img_dir, md_content_dir)
