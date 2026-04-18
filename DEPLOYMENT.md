# 🚀 GameHub Deployment Guide

This guide will help you deploy your GameHub gaming platform to production.

## 📋 Pre-Deployment Checklist

- [ ] All games tested and working
- [ ] SEO metadata configured
- [ ] Environment variables set up
- [ ] AdSense account created (optional)
- [ ] Domain name purchased (optional)
- [ ] Git repository created

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Built specifically for Next.js
- Automatic deployments from Git
- Free SSL certificates
- Global CDN
- Serverless functions support
- Free tier available

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/gamehub.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Configure:
     - Framework Preset: Next.js
     - Root Directory: `frontend`
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Add Environment Variables:
     ```
     NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
     NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
     ```
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify

**Steps:**

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Choose your repository
   - Configure:
     - Base directory: `frontend`
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Add Environment Variables in Site Settings
   - Click "Deploy site"

### Option 3: Self-Hosted (VPS)

**Requirements:**
- Ubuntu/Debian VPS
- Node.js 18+
- Nginx
- PM2

**Steps:**

1. **Install Dependencies**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   
   # Install Nginx
   sudo apt install -y nginx
   ```

2. **Clone and Build**
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/gamehub.git
   cd gamehub/frontend
   npm install
   npm run build
   ```

3. **Configure PM2**
   ```bash
   pm2 start npm --name "gamehub" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## 🔧 Environment Variables

Create a `.env.local` file in the `frontend` directory:

```env
# Production URL
NEXT_PUBLIC_BASE_URL=https://your-domain.com

# Google AdSense (Get from AdSense dashboard)
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX

# Google Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 💰 Google AdSense Setup

### Step 1: Create AdSense Account

1. Go to [google.com/adsense](https://www.google.com/adsense)
2. Sign up with your Google account
3. Enter your website URL
4. Complete the application form

### Step 2: Add AdSense Code

1. Get your AdSense Publisher ID (ca-pub-XXXXXXXXXXXXXXXX)
2. Add it to your environment variables:
   ```env
   NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
   ```
3. The AdSense script is already integrated in the layout

### Step 3: Create Ad Units

1. In AdSense dashboard, go to "Ads" → "By ad unit"
2. Create these ad units:
   - **Display Ad** (for sidebar) - Get the data-ad-slot ID
   - **In-article Ad** (for content) - Get the data-ad-slot ID
   - **Multiplex Ad** (for related content) - Get the data-ad-slot ID

3. Update ad slot IDs in your components:
   - `frontend/src/app/game/[id]/page.tsx` - Update `dataAdSlot` values
   - `frontend/src/app/page.tsx` - Update `dataAdSlot` values

### Step 4: AdSense Approval Tips

**Requirements:**
- ✅ Original, high-quality content
- ✅ Easy navigation
- ✅ At least 20-30 pages of content
- ✅ Privacy Policy page
- ✅ About page
- ✅ Contact information
- ✅ Mobile-friendly design
- ✅ Fast loading speed
- ✅ No prohibited content

**Timeline:**
- Application review: 1-2 weeks
- May require site improvements
- Check email for updates

**After Approval:**
- Ads will start showing automatically
- Monitor performance in AdSense dashboard
- Optimize ad placements for better revenue

## 📊 Post-Deployment

### 1. Verify Deployment
- [ ] Homepage loads correctly
- [ ] All 20 games are accessible
- [ ] Images load properly
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] SEO metadata present

### 2. Submit to Search Engines

**Google Search Console:**
```
1. Go to search.google.com/search-console
2. Add your property
3. Verify ownership
4. Submit sitemap: https://your-domain.com/sitemap.xml
```

**Bing Webmaster Tools:**
```
1. Go to bing.com/webmasters
2. Add your site
3. Verify ownership
4. Submit sitemap
```

### 3. Monitor Performance

**Tools to Use:**
- Google Analytics (traffic)
- Google Search Console (SEO)
- Google AdSense (revenue)
- Vercel Analytics (performance)

### 4. Optimize

- Enable caching
- Compress images
- Minify CSS/JS (automatic with Next.js)
- Use CDN for static assets
- Monitor Core Web Vitals

## 🔒 Security Checklist

- [ ] HTTPS enabled (SSL certificate)
- [ ] Environment variables secured
- [ ] CORS configured properly
- [ ] Security headers added
- [ ] Rate limiting implemented
- [ ] Regular updates scheduled

## 📈 SEO Checklist

- [ ] Sitemap submitted to search engines
- [ ] robots.txt configured
- [ ] Meta tags on all pages
- [ ] Open Graph tags added
- [ ] Structured data (JSON-LD) implemented
- [ ] Mobile-friendly test passed
- [ ] Page speed optimized

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Check image URLs are accessible
- Verify `next.config.ts` has correct domains
- Check CORS settings

### AdSense Not Showing
- Verify AdSense account is approved
- Check environment variable is set
- Wait 24-48 hours after approval
- Check browser console for errors

### Slow Performance
- Enable Next.js Image Optimization
- Use CDN for static assets
- Implement caching strategies
- Optimize database queries

## 📞 Support

If you encounter issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Vercel documentation](https://vercel.com/docs)
3. Check [AdSense Help Center](https://support.google.com/adsense)

## 🎉 Success!

Your GameHub is now live! Share it with the world and start earning with AdSense.

**Next Steps:**
- Promote on social media
- Submit to game directories
- Create backlinks
- Regular content updates
- Monitor analytics and optimize
