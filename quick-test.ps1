# Quick Test Script - Check Backend & Frontend

Write-Host "🔍 Testing GamePortal Setup..." -ForegroundColor Cyan
Write-Host ""

# Test 1: Check Backend
Write-Host "Test 1: Checking Backend (Port 8080)..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:8080" -UseBasicParsing -TimeoutSec 5
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Backend is running on port 8080" -ForegroundColor Green
        Write-Host "   Response: $($response.Content)" -ForegroundColor Gray
    }
} catch {
    Write-Host "❌ Backend is NOT running on port 8080" -ForegroundColor Red
    Write-Host "   Solution: Run this command in a new terminal:" -ForegroundColor Yellow
    Write-Host "   cd backend" -ForegroundColor White
    Write-Host "   python -m uvicorn app.main:app --reload --port 8080" -ForegroundColor White
}

Write-Host ""

# Test 2: Check Frontend
Write-Host "Test 2: Checking Frontend (Port 3000)..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000" -UseBasicParsing -TimeoutSec 5
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Frontend is running on port 3000" -ForegroundColor Green
    }
} catch {
    Write-Host "❌ Frontend is NOT running on port 3000" -ForegroundColor Red
    Write-Host "   Solution: Run this command in a new terminal:" -ForegroundColor Yellow
    Write-Host "   cd frontend" -ForegroundColor White
    Write-Host "   npm run dev" -ForegroundColor White
}

Write-Host ""

# Test 3: Check Login API
Write-Host "Test 3: Testing Login API..." -ForegroundColor Yellow
try {
    $body = @{
        email = "admin@gamehub.com"
        password = "admin123"
    } | ConvertTo-Json

    $response = Invoke-WebRequest -Uri "http://localhost:8080/api/v1/admin/login" `
        -Method POST `
        -ContentType "application/json" `
        -Body $body `
        -UseBasicParsing `
        -TimeoutSec 5

    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Login API is working" -ForegroundColor Green
        $data = $response.Content | ConvertFrom-Json
        Write-Host "   Token received: $($data.access_token.Substring(0, 20))..." -ForegroundColor Gray
    }
} catch {
    Write-Host "❌ Login API failed" -ForegroundColor Red
    Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor Gray
}

Write-Host ""

# Test 4: Check Ports
Write-Host "Test 4: Checking Port Usage..." -ForegroundColor Yellow
$port8080 = Get-NetTCPConnection -LocalPort 8080 -ErrorAction SilentlyContinue
$port3000 = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue

if ($port8080) {
    Write-Host "✅ Port 8080 is in use (Backend)" -ForegroundColor Green
} else {
    Write-Host "❌ Port 8080 is free (Backend not running)" -ForegroundColor Red
}

if ($port3000) {
    Write-Host "✅ Port 3000 is in use (Frontend)" -ForegroundColor Green
} else {
    Write-Host "❌ Port 3000 is free (Frontend not running)" -ForegroundColor Red
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "📋 Summary" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Make sure both Backend and Frontend are running" -ForegroundColor White
Write-Host "2. Go to: http://localhost:3000/admin/login" -ForegroundColor White
Write-Host "3. Login with: admin@gamehub.com / admin123" -ForegroundColor White
Write-Host "4. Dashboard should work! ✅" -ForegroundColor White
Write-Host ""
