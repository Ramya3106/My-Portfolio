# Netlify Deployment Guide

## **Fixed Issues:**

### **1. Asset Paths**
- **Problem**: Assets were using absolute paths (`/assets/...`)
- **Solution**: Changed `base: "/"` to `base: "./"` in `vite.config.js`
- **Result**: Assets now use relative paths (`./assets/...`)

### **2. Routing Configuration**
- **Problem**: Netlify didn't know how to handle client-side routing
- **Solution**: Created `netlify.toml` with proper redirects
- **Result**: All routes now serve `index.html`

## **Files Created/Updated:**

1. **`netlify.toml`** - Main Netlify configuration
2. **`public/_redirects`** - Fallback redirects
3. **`vite.config.js`** - Updated for relative asset paths

## **Deployment Steps:**

### **Step 1: Push Changes to GitHub**
```bash
git add .
git commit -m "Fix Netlify deployment: update asset paths and add netlify.toml"
git push origin master
```

### **Step 2: Deploy on Netlify**
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set these exact settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18` (or let Netlify auto-detect)

### **Step 3: Verify Deployment**
1. Check the build logs in Netlify dashboard
2. Visit your site URL
3. Test navigation between sections

## **Configuration Files Explained:**

### **netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### **public/_redirects:**
```
/*    /index.html   200
```

### **vite.config.js (Updated):**
```js
export default defineConfig({
  plugins: [react()],
  base: "./",  // Changed from "/" to "./"
  // ... rest of config
});
```

## **Troubleshooting:**

### **If Still Getting 404:**
1. **Check Build Logs**: Go to Netlify dashboard → Deploys → Latest deploy
2. **Verify Build Success**: Should show "Build successful"
3. **Check File Structure**: Ensure `dist/index.html` exists
4. **Clear Cache**: In Netlify dashboard → Site settings → Build & deploy → Clear cache

### **If Assets Not Loading:**
1. **Check Asset Paths**: Should be `./assets/...` not `/assets/...`
2. **Verify Build Output**: Assets should be in `dist/assets/`
3. **Check Network Tab**: Look for 404 errors on assets

### **If Routing Not Working:**
1. **Check Redirects**: Ensure `netlify.toml` has the redirect rule
2. **Test Direct URLs**: Try visiting `/about`, `/skills`, etc.
3. **Check Console**: Look for JavaScript errors

## **Testing Locally:**
```bash
npm run build
npm run preview
```

## **Common Issues & Solutions:**

### **Issue 1: "Build Failed"**
- Check Node.js version (use 18)
- Ensure all dependencies are installed
- Check for syntax errors in code

### **Issue 2: "Assets 404"**
- Verify `base: "./"` in `vite.config.js`
- Check that assets are in `dist/assets/`
- Clear Netlify cache

### **Issue 3: "Page Not Found"**
- Ensure `netlify.toml` has redirect rule
- Check that `public/_redirects` exists
- Verify `dist/index.html` exists

## **Verification Checklist:**

- [ ] Build succeeds locally: `npm run build`
- [ ] `dist/index.html` exists and has relative asset paths
- [ ] `netlify.toml` is in root directory
- [ ] `public/_redirects` exists
- [ ] Netlify build succeeds
- [ ] Site loads without 404 errors
- [ ] Navigation between sections works
- [ ] Assets (CSS/JS) load correctly

Your portfolio should now deploy successfully on Netlify! 🎉 