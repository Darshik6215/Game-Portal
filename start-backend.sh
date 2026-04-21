#!/bin/bash

# Start Backend Server on Port 8080

echo "🚀 Starting GamePortal Backend..."
echo ""

# Navigate to backend directory
cd backend

# Check if virtual environment exists
if [ -d "venv" ]; then
    echo "✅ Virtual environment found"
    
    # Activate virtual environment
    echo "🔧 Activating virtual environment..."
    source venv/bin/activate
else
    echo "⚠️  Virtual environment not found. Using global Python."
fi

echo ""
echo "🌐 Starting server on http://localhost:8080"
echo "📚 API docs available at http://localhost:8080/docs"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the server
python -m uvicorn app.main:app --reload --port 8080
