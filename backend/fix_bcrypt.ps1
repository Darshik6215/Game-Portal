# Bcrypt Fix Script for Windows PowerShell
Write-Host "🔧 Fixing bcrypt compatibility issue..." -ForegroundColor Cyan

# Step 1: Uninstall problematic packages
Write-Host "`n📦 Step 1: Uninstalling old packages..." -ForegroundColor Yellow
pip uninstall passlib bcrypt -y

# Step 2: Clear cache
Write-Host "`n🧹 Step 2: Clearing Python cache..." -ForegroundColor Yellow
if (Test-Path "__pycache__") {
    Remove-Item -Recurse -Force "__pycache__"
}
if (Test-Path "app\__pycache__") {
    Remove-Item -Recurse -Force "app\__pycache__"
}
if (Test-Path "app\core\__pycache__") {
    Remove-Item -Recurse -Force "app\core\__pycache__"
}
if (Test-Path "app\api\__pycache__") {
    Remove-Item -Recurse -Force "app\api\__pycache__"
}

# Step 3: Install updated requirements
Write-Host "`n📥 Step 3: Installing updated requirements..." -ForegroundColor Yellow
pip install -r requirements.txt

# Step 4: Verify installation
Write-Host "`n✅ Step 4: Verifying installation..." -ForegroundColor Yellow
$bcryptVersion = pip show bcrypt | Select-String "Version"
Write-Host $bcryptVersion -ForegroundColor Green

# Step 5: Check if passlib is removed
$passlibCheck = pip list | Select-String "passlib"
if ($passlibCheck) {
    Write-Host "⚠️  Warning: passlib is still installed!" -ForegroundColor Red
} else {
    Write-Host "✅ passlib successfully removed" -ForegroundColor Green
}

Write-Host "`n🎉 Fix complete! You can now start the server:" -ForegroundColor Green
Write-Host "   uvicorn app.main:app --reload --port 8080" -ForegroundColor Cyan
