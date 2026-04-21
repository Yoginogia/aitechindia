import os
from PIL import Image
import glob

def compress_images(directory):
    # Find all PNG files
    pattern = os.path.join(directory, '*.png')
    png_files = glob.glob(pattern)
    
    total_saved = 0
    
    print(f"Found {len(png_files)} PNG files to compress in {directory}")
    
    for filepath in png_files:
        original_size = os.path.getsize(filepath)
        
        try:
            with Image.open(filepath) as img:
                # Convert to RGB if it has alpha channel (to allow standard JPEG compression if we wanted to change format, 
                # but to save PNG we can just reduce quality/colors or resize)
                
                # Resize if image is too large
                max_size = (800, 800)
                img.thumbnail(max_size, Image.Resampling.LANCZOS)
                
                # Save optimized PNG
                # PIL png compression doesn't reduce size massively like webp, but resizing helps.
                # Let's save as optimized PNG
                img.save(filepath, format="PNG", optimize=True)
                
            new_size = os.path.getsize(filepath)
            saved = original_size - new_size
            total_saved += saved
            
            print(f"Compressed {os.path.basename(filepath)}: {original_size/1024:.0f}KB -> {new_size/1024:.0f}KB (Saved {saved/1024:.0f}KB)")
            
        except Exception as e:
            print(f"Error processing {filepath}: {e}")
            
    print(f"\nTotal space saved: {total_saved / (1024*1024):.2f} MB")

if __name__ == "__main__":
    blog_dir = os.path.join(os.getcwd(), 'public', 'images', 'blog')
    compress_images(blog_dir)
