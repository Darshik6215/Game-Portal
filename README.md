# 🎮 Game Portal

A modern, full-stack gaming platform built with Next.js 14 and FastAPI, featuring 20+ HTML5 games, admin dashboard, analytics, and more.

## ✨ Features

### 🎯 Core Features
- **20+ HTML5 Games** - Curated collection of popular browser games
- **Dynamic Game Pages** - SEO-optimized individual game pages
- **Related Games System** - Smart game recommendations
- **Responsive Design** - Works perfectly on all devices
- **Fast Performance** - Optimized with Next.js 14 and Turbopack

### 🔐 Admin Panel
- **Secure Authentication** - JWT-based login system
- **Dashboard** - Overview of games, views, and user stats
- **Game Management** - Add, edit, and manage games
- **Category Management** - Organize games by categories
- **Analytics Dashboard** - Real-time insights with interactive charts
- **Settings Panel** - Configure site settings

### 📊 Analytics & Monitoring
- **Google Analytics 4** - Track user behavior and traffic
- **Custom Charts** - Page views, top games, user activity
- **Real-time Stats** - Live user count and activity
- **Traffic Sources** - Understand where users come from

### 💰 Monetization Ready
- **Google AdSense Integration** - Multiple ad placements
- **Ad Components** - Banner, sidebar, and in-article ads
- **Ad-friendly Layout** - Optimized for revenue

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Netlify / Vercel

### Backend
- **Framework**: FastAPI (Python)
- **Database**: MongoDB with Beanie ODM
- **Authentication**: JWT with bcrypt
- **API Docs**: Swagger UI / ReDoc
- **Deployment**: Any Python hosting

## 📁 Project Structure

```
Game-Portal/
├── frontend/                 # Next.js frontend
│   ├── src/
│   │   ├── app/             # App router pages
│   │   │   ├── admin/       # Admin panel
│   │   │   ├── game/[id]/   # Dynamic game pages
│   │   │   └── ...
│   │   ├── components/      # React components
│   │   │   ├── admin/       # Admin components
│   │   │   ├── ads/         # AdSense components
│   │   │   ├── analytics/   # Chart components
│   │   │   └── layout/      # Layout components
│   │   ├── lib/             # Utilities
│   │   └── types/           # TypeScript types
│   ├── public/
│   │   └── data/
│   │       └── games.json   # Game database
│   └── package.json
│
├── backend/                  # FastAPI backend
│   ├── app/
│   │   ├── api/             # API routes
│   │   │   └── v1/
│   │   │       └── endpoints/
│   │   ├── core/            # Core functionality
│   │   │   ├── config.py    # Configuration
│   │   │   └── security.py  # Auth & security
│   │   ├── models/          # Database models
│   │   └── main.py          # FastAPI app
│   ├── requirements.txt
│   └── .env
│
└── Documentation/
    ├── README.md            # This file
    ├── PROJECT_STATUS.md    # Project completion status
    ├── DEPLOYMENT.md        # Deployment guide
    ├── NETLIFY_DEPLOY.md    # Netlify-specific guide
    └── ...
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Python 3.9+ (3.13 recommended)
- MongoDB (local or Atlas)
- Git

### 1. Clone Repository

```bash
git clone https://github.com/Darshik6215/Game-Portal.git
cd Game-Portal
```

### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
.\venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
# Copy from .env.example and configure:
# - MONGODB_URL
# - SECRET_KEY
# - ADMIN_EMAIL
# - ADMIN_PASSWORD

# Start backend server
uvicorn app.main:app --reload --port 8080
```

Backend will run on: http://localhost:8080

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
# Copy from .env.example and configure:
# - NEXT_PUBLIC_API_URL=http://localhost:8080
# - NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Start development server
npm run dev
```

Frontend will run on: http://localhost:3000

## 🔑 Default Admin Credentials

```
Email: admin@gamehub.com
Password: admin123
```

**⚠️ IMPORTANT**: Change these credentials in production!

## 📚 API Documentation

Once the backend is running, visit:
- **Swagger UI**: http://localhost:8080/docs
- **ReDoc**: http://localhost:8080/redoc

### Available Endpoints

#### Admin Authentication
- `POST /api/v1/admin/register` - Register new admin
- `POST /api/v1/admin/login` - Login
- `GET /api/v1/admin/me` - Get current user
- `POST /api/v1/admin/logout` - Logout
- `GET /api/v1/admin/stats` - Get dashboard stats

## 🎮 Games Included

20 popular HTML5 games across multiple categories:
- Action: Subway Surfers, Temple Run, Stickman Hook
- Puzzle: 2048, Candy Crush, Tetris
- Sports: Basketball Stars, Football Legends
- Racing: Moto X3M, Hill Climb Racing
- And more!

## 🌐 Deployment

### Frontend (Netlify)
1. Connect your GitHub repository
2. Build command: `cd frontend && npm run build`
3. Publish directory: `frontend/.next`
4. Add environment variables

See `NETLIFY_DEPLOY.md` for detailed instructions.

### Backend (Python Hosting)
- Railway
- Render
- Heroku
- DigitalOcean App Platform

See `DEPLOYMENT.md` for detailed instructions.

## 📊 Environment Variables

### Frontend (.env)
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Backend (.env)
```env
MONGODB_URL=mongodb://localhost:27017
DATABASE_NAME=gameportal
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
ADMIN_EMAIL=admin@gamehub.com
ADMIN_PASSWORD=admin123
ADMIN_NAME=Admin User
```

## 🧪 Testing

### Frontend
```bash
cd frontend
npm run build  # Test production build
npm run lint   # Run linter
```

### Backend
```bash
cd backend
# Backend is running, test endpoints at:
# http://localhost:8080/docs
```

## 📝 Documentation Files

- `PROJECT_STATUS.md` - Complete project status and features
- `DEPLOYMENT.md` - General deployment guide
- `NETLIFY_DEPLOY.md` - Netlify deployment guide
- `ADMIN_PANEL_SETUP.md` - Admin panel documentation
- `AUTH_SETUP.md` - Authentication setup guide
- `ANALYTICS_SETUP.md` - Analytics integration guide
- `ADSENSE_GUIDE.md` - AdSense setup guide
- `BCRYPT_FIX.md` - Bcrypt compatibility fix
- `LOGIN_FIX.md` - Login issue troubleshooting
- `REGISTER_API.md` - Registration API documentation
- `ENV_SETUP.md` - Environment variables guide

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Darshik**
- GitHub: [@Darshik6215](https://github.com/Darshik6215)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- FastAPI for the high-performance backend
- All game developers for the HTML5 games
- Open source community

## 📞 Support

For support, email your-email@example.com or open an issue on GitHub.

---

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by Darshik
