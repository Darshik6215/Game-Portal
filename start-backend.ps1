# Start Backend Server on Port 8080

Write-Host "🚀 Starting GamePortal Backend..." -ForegroundColor Cyan
Write-Host ""

# Navigate to backend directory
Set-Location -Path "backend"

# Check if virtual environment exists
if (Test-Path "venv") {
    Write-Host "✅ Virtual environment found" -ForegroundColor Green
    
    # Activate virtual environment
    Write-Host "🔧 Activating virtual environment..." -ForegroundColor Yellow
    & "venv\Scripts\Activate.ps1"
} else {
    Write-Host "⚠️  Virtual environment not found. Using global Python." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🌐 Starting server on http://localhost:8080" -ForegroundColor Cyan
Write-Host "📚 API docs available at http://localhost:8080/docs" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Start the server
python -m uvicorn app.main:app --reload --port 8080
