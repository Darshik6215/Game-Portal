#!/bin/bash
# Fix bcrypt compatibility issue by removing passlib

echo "🔧 Fixing bcrypt compatibility issue..."

# Uninstall passlib and bcrypt
echo "📦 Uninstalling passlib and bcrypt..."
pip uninstall passlib bcrypt -y

# Reinstall from requirements.txt
echo "📦 Installing dependencies from requirements.txt..."
pip install -r requirements.txt

# Clean Python cache
echo "🧹 Cleaning Python cache..."
find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
find . -type f -name "*.pyc" -delete 2>/dev/null || true

echo "✅ Fix complete! Now run: uvicorn app.main:app --reload --port 8080"
