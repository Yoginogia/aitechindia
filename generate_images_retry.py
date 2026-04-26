import os
import requests
import urllib.parse
from PIL import Image
from io import BytesIO
import re
import time
import random

articles = [
    {
        "file": "src/content/blog/crypto-263m-crypto-scam-us-doj-imposes-70-month-sentence-2026-04-26.md",
        "prompt": "cybersecurity padlock over glowing bitcoin, dark web hacker theme, gavel hitting bitcoin, legal action, 8k",
        "name": "crypto_scam_doj"
    },
    {
        "file": "src/content/blog/crypto-cftc-sues-new-york-over-bid-to-apply-gambling-laws-2026-04-26.md",
        "prompt": "bitcoin mixed with casino chips, legal gavel, neon lighting, financial regulation concept, 8k",
        "name": "crypto_gambling_law"
    },
    {
        "file": "src/content/blog/gadgets-bovensiepen-zagato-motor-sports-new-price-2026-04-26.md",
        "prompt": "sleek hyper-realistic sports car in a studio, luxury automotive, neon accents, dramatic lighting, 8k",
        "name": "zagato_sports_car"
    },
    {
        "file": "src/content/blog/gadgets-byd-atto-3-new-gen-630km-range-2026-04-26.md",
        "prompt": "modern futuristic electric SUV driving through neon city, glowing blue energy, hyper-realistic, 8k",
        "name": "byd_atto_3"
    },
    {
        "file": "src/content/blog/gadgets-renault-bridger-new-engine-2026-04-26.md",
        "prompt": "powerful glowing automotive engine block, futuristic mechanic studio, hyper-detailed, 8k",
        "name": "renault_engine"
    },
    {
        "file": "src/content/blog/software-freelancers-divided-on-the-impact-of-ai-2026-04-26.md",
        "prompt": "person working on a laptop with an AI hologram floating, modern workspace, cinematic lighting, 8k",
        "name": "freelancers_ai_impact"
    }
]

for item in articles:
    print(f"Generating image for {item['name']}...")
    encoded_prompt = urllib.parse.quote(item['prompt'])
    
    success = False
    for attempt in range(5):
        seed = random.randint(1, 100000)
        url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=1280&height=720&nologo=true&seed={seed}&model=flux"
        try:
            response = requests.get(url, timeout=45)
            if response.status_code == 200 and len(response.content) > 10000:
                img = Image.open(BytesIO(response.content))
                img_path = f"public/images/blog/{item['name']}.webp"
                img.save(img_path, format='WEBP', quality=85)
                print(f"Saved {img_path}")
                
                # Update Markdown
                try:
                    with open(item['file'], 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    new_content = re.sub(r'image: ".*?"', f'image: "/images/blog/{item["name"]}.webp"', content)
                    
                    with open(item['file'], 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated Markdown for {item['name']}")
                except FileNotFoundError:
                    print(f"Could not find {item['file']}")
                
                success = True
                break
            else:
                print(f"Attempt {attempt+1} failed: {response.status_code}")
        except Exception as e:
            print(f"Attempt {attempt+1} error: {e}")
            
        time.sleep(5)
        
    if not success:
        print(f"Failed to generate {item['name']} after 5 attempts.")

print('Done')
