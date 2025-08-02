# Vercel Deployment Guide

## 404 Error Fix

The 404 "NOT FOUND" error occurs because Vercel doesn't know how to handle client-side routing in React applications. Here's how to fix it:

### **Files Created/Updated:**

1. **`vercel.json`** - Main configuration file
2. **`public/_redirects`** - Fallback redirects
3. **`vite.config.js`** - Updated build configuration

### **Root Cause:**
Your React app uses client-side routing with state management (`currentSection`), but Vercel tries to serve static files for each route. When a route doesn't exist as a file, it returns 404.

### **Solution:**
The `vercel.json` file tells Vercel to serve `index.html` for all routes, allowing your React app to handle routing on the client side.

## Deployment Steps:

### **Option 1: Vercel CLI (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Set build command: npm run build
# - Set output directory: dist
# - Set install command: npm install
```

### **Option 2: GitHub Integration**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite project
5. Deploy

### **Option 3: Manual Upload**
1. Build your project: `npm run build`
2. Upload the `dist` folder to Vercel
3. Set the root directory to `dist`

## Configuration Files Explained:

### **vercel.json:**
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
```

### **public/_redirects:**
```
/*    /index.html   200
```

## Environment Variables (if needed):
- `NODE_ENV`: `production`
- `VITE_*`: Any Vite environment variables

## Troubleshooting:

1. **Still getting 404?**
   - Make sure `vercel.json` is in the root directory
   - Check that `public/_redirects` exists
   - Clear Vercel cache and redeploy

2. **Build fails?**
   - Check that all dependencies are in `package.json`
   - Ensure `npm run build` works locally

3. **Assets not loading?**
   - Check that `base: "/"` is set in `vite.config.js`
   - Verify asset paths are relative

## Testing Locally:
```bash
npm run build
npm run preview
```

Your portfolio should now deploy successfully on Vercel without 404 errors! 