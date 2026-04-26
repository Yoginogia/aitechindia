import os

updates = {
    "ai-google-40b-investment-anthropic-2026-04-25.md": "/images/blog/google_anthropic.png",
    "ai-comfyui-500m-valuation-2026-04-25.md": "/images/blog/comfyui_valuation.png",
    "gadgets-samsung-galaxy-z-fold-8-leaks-2026-04-25.md": "/images/blog/samsung_z_fold_8.png",
    "gadgets-nothing-phone-3-april-update-2026-04-25.md": "/images/blog/nothing_phone_3.png",
    "gadgets-mercedes-cla-ev-india-launch-2026-04-25.md": "/images/blog/mercedes_cla_ev.png",
    "gadgets-tesla-free-supercharging-offer-2026-04-25.md": "/images/blog/tesla_supercharger.png",
    "deals-whatsapp-jio-airtel-recharge-2026-04-25.md": "/images/blog/whatsapp-meta-ai-2026.webp",
    "deals-amazon-tech-week-sale-2026-04-25.md": "/images/blog/budget_student_laptop.webp",
    "crypto-us-authorities-freeze-344m-iran-2026-04-25.md": "/images/blog/crypto_crash.webp",
}

blog_dir = "src/content/blog"

for filename, new_image in updates.items():
    filepath = os.path.join(blog_dir, filename)
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        import re
        content = re.sub(r'image: ".*"', f'image: "{new_image}"', content)
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {filename} with image {new_image}")
