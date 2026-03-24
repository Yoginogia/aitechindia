@echo off
title AITechNews — Auto Deploy
color 0A

echo ==========================================
echo   AITechNews — Git Auto Deploy Script
echo ==========================================
echo.

echo [1/3] Staging all changes...
git add .
echo Done!
echo.

echo [2/3] Committing with timestamp...
for /f "tokens=1-3 delims=/ " %%a in ("%date%") do set mydate=%%c-%%b-%%a
for /f "tokens=1-2 delims=: " %%a in ("%time%") do set mytime=%%a:%%b
git commit -m "Auto deploy: %mydate% %mytime% IST"
echo Done!
echo.

echo [3/3] Pushing to GitHub (Vercel will auto-deploy)...
git push origin main
echo.

echo ==========================================
echo   SUCCESS! Vercel par deploy ho raha hai.
echo   Check: https://vercel.com/dashboard
echo ==========================================
echo.
pause
