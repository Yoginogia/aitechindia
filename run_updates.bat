@echo off
echo Starting updates...

if not exist "public\images\thumbnails" mkdir "public\images\thumbnails"

echo Copying custom AI thumbnails...
copy /Y "C:\Users\amit\.gemini\antigravity\brain\dae6f3ae-4629-466a-9c66-e684d7c34310\iphone_18_pro_leak_*.png" "public\images\thumbnails\iphone_18_pro_leak.png"
copy /Y "C:\Users\amit\.gemini\antigravity\brain\dae6f3ae-4629-466a-9c66-e684d7c34310\openai_gpt_5_launch_*.png" "public\images\thumbnails\openai_gpt_5_launch.png"
copy /Y "C:\Users\amit\.gemini\antigravity\brain\dae6f3ae-4629-466a-9c66-e684d7c34310\bitcoin_all_time_high_*.png" "public\images\thumbnails\bitcoin_all_time_high.png"
copy /Y "C:\Users\amit\.gemini\antigravity\brain\dae6f3ae-4629-466a-9c66-e684d7c34310\tesla_model_2_ev_*.png" "public\images\thumbnails\tesla_model_2_ev.png"

echo Thumbnails copied successfully!

echo.
echo Pushing changes to GitHub for Vercel deployment...
git add .
git commit -m "Update homepage with premium custom AI thumbnails and setup live CoinGecko API for the crypto ticker"
git push origin main

echo.
echo =======================================================
echo Deployment process started! Vercel will update your live site in 1-2 minutes.
echo =======================================================
pause
