# Portfolio Deployment Guide

## Issues Fixed

The deployment was failing due to several missing configurations:

### 1. Missing Start Script

- **Problem**: Render couldn't find a `start` script to run the application
- **Solution**: Added `"start": "vite preview --host 0.0.0.0 --port $PORT"` to package.json

### 2. Missing Dependencies

- **Problem**: `framer-motion` and `react-scroll` were imported but not in package.json
- **Solution**: Added both dependencies to package.json

### 3. Vite Configuration

- **Problem**: Vite wasn't configured for production deployment
- **Solution**: Updated vite.config.js with proper host and port settings

## Deployment Steps

1. **Push your changes to GitHub**
2. **Connect to Render**:

   - Go to [render.com](https://render.com)
   - Create a new Web Service
   - Connect your GitHub repository
   - Set the following:
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`
     - **Environment**: Node.js

3. **Environment Variables** (optional):
   - `NODE_ENV`: `production`
   - `PORT`: Will be automatically set by Render

## Files Modified

- `package.json`: Added start script and missing dependencies
- `vite.config.js`: Added server and preview configuration
- `render.yaml`: Created deployment configuration file

## Testing Locally

```bash
npm install
npm run build
npm start
```

The application should now deploy successfully on Render!
