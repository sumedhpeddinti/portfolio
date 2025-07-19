# Quick deploy script for real-time updates
param(
    [Parameter(Mandatory=$true)]
    [string]$message
)

Write-Host "🚀 Deploying changes to live site..." -ForegroundColor Cyan

# Add all changes
git add .

# Commit with provided message
git commit -m $message

# Push to GitHub (triggers automatic Vercel deployment)
git push

Write-Host "✅ Changes pushed to GitHub!" -ForegroundColor Green
Write-Host "🌐 Vercel will automatically deploy in ~30 seconds" -ForegroundColor Yellow
Write-Host "📱 Check your live site for updates!" -ForegroundColor Magenta
