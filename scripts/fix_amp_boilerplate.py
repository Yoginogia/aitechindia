import os
import re

official_boilerplate = '<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>'

# Regex to find any <style amp-boilerplate>...</noscript> block.
pattern = re.compile(r'<style amp-boilerplate>.*?</noscript>', re.DOTALL)

web_stories_dir = r"c:\Users\amit\Documents\New project\aitechindia_repo\public\web-stories"

fixed_count = 0
added_count = 0
total_count = 0

for filename in os.listdir(web_stories_dir):
    if filename.endswith(".html"):
        total_count += 1
        filepath = os.path.join(web_stories_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Check if the official boilerplate is exactly in the file
        if official_boilerplate in content:
            continue
            
        # Try to replace it if it's there but malformed
        if re.search(pattern, content):
            new_content, count = re.subn(pattern, official_boilerplate, content)
            if count > 0:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Fixed malformed boilerplate in: {filename}")
                fixed_count += 1
        else:
            # Missing completely! Insert it before </head>
            if "</head>" in content:
                new_content = content.replace("</head>", f"  {official_boilerplate}\n</head>")
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Added missing boilerplate in: {filename}")
                added_count += 1
            else:
                print(f"WARNING: Could not find </head> in {filename}")

print(f"Processed {total_count} files. Fixed {fixed_count} files. Added {added_count} files.")
