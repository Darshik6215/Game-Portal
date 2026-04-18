# Environment Variables Setup ✅

## Frontend Environment Configuration

### File: `frontend/.env`

```env
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:8080

# Base URL for production
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Google AdSense (Add your client ID when ready)
# NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX

# Google Analytics (Add your measurement ID when ready)
# NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## ✅ Status: Already Configured!

The `.env` file is already created with the correct configuration.

## 🔧 Environment Variables Explained

### 1. NEXT_PUBLIC_API_URL
- **Purpose**: Backend API base URL
- **Development**: `http://localhost:8080`
- **Production**: Update to your deployed backend URL (e.g., `https://api.yourdomain.com`)

### 2. NEXT_PUBLIC_BASE_URL
- **Purpose**: Frontend base URL for SEO and metadata
- **Development**: `http://localhost:3000`
- **Production**: Update to your domain (e.g., `https://yourdomain.com`)

### 3. NEXT_PUBLIC_ADSENSE_CLIENT_ID (Optional)
- **Purpose**: Google AdSense integration
- **Format**: `ca-pub-XXXXXXXXXXXXXXXX`
- **How to get**: 
  1. Sign up at https://www.google.com/adsense
  2. Get your publisher ID
  3. Uncomment the line and add your ID

### 4. NEXT_PUBLIC_GA_MEASUREMENT_ID (Optional)
- **Purpose**: Google Analytics 4 tracking
- **Format**: `G-XXXXXXXXXX`
- **How to get**:
  1. Create GA4 property at https://analytics.google.com
  2. Get your Measurement ID
  3. Uncomment the line and add your ID

## 🚀 Usage in Code

These variables are automatically available in your Next.js app:

```typescript
// Access in any component or file
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
```

## 🔒 Security Notes

1. ✅ `.env` files are in `.gitignore` - won't be committed to Git
2. ✅ Only `NEXT_PUBLIC_*` variables are exposed to the browser
3. ✅ Never put sensitive keys (API secrets, passwords) in `NEXT_PUBLIC_*` variables
4. ✅ Use `.env.local` for local overrides (also gitignored)

## 📝 For Production Deployment

### Netlify
1. Go to Site Settings → Environment Variables
2. Add each variable:
   - `NEXT_PUBLIC_API_URL` = Your backend URL
   - `NEXT_PUBLIC_BASE_URL` = Your frontend URL
   - `NEXT_PUBLIC_ADSENSE_CLIENT_ID` = Your AdSense ID
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` = Your GA ID

### Vercel
1. Go to Project Settings → Environment Variables
2. Add each variable with the same names

## 🔄 After Changing .env

**IMPORTANT**: Restart the development server for changes to take effect!

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

## ✅ Current Setup

Your current configuration:
- ✅ Backend API: `http://localhost:8080`
- ✅ Frontend: `http://localhost:3000`
- ⏳ AdSense: Not configured (optional)
- ⏳ Analytics: Not configured (optional)

Everything is ready for development! 🎉
