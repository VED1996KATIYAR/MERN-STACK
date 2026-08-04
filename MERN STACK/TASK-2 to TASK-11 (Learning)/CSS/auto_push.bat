@echo off
echo Uploading to GitHub...

git add .
git commit -m "Manual Backup"
git push origin main

echo.
echo Done!
pause