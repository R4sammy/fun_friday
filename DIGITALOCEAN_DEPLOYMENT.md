# DigitalOcean App Platform Deployment Guide

## Prerequisites
- DigitalOcean account (sign up at https://cloud.digitalocean.com)
- GitHub repository (✅ Already done: https://github.com/R4sammy/fun_friday)
- Code pushed to GitHub (✅ Complete)

## Deployment Options

### Option 1: Deploy via DigitalOcean Dashboard (Recommended for first-time)

1. **Log in to DigitalOcean**
   - Go to https://cloud.digitalocean.com
   - Sign in to your account

2. **Create New App**
   - Click "Create" → "Apps" (or go to Apps section)
   - Click "Create App"

3. **Connect GitHub Repository**
   - Choose "GitHub" as source
   - Authorize DigitalOcean to access your GitHub account
   - Select repository: `R4sammy/fun_friday`
   - Select branch: `main`
   - Check "Autodeploy" to deploy on every push
   - Click "Next"

4. **Configure Resources**
   - DigitalOcean will auto-detect your Node.js app
   - **Build Command**: `npm install`
   - **Run Command**: `npm start`
   - **HTTP Port**: `3000`
   - Click "Next"

5. **Environment Variables** (Optional)
   - Add if needed:
     - `NODE_ENV` = `production`
   - Click "Next"

6. **App Info**
   - **App Name**: `cyber-heist` (or your preferred name)
   - **Region**: Select closest to your users (e.g., `New York`, `San Francisco`, `London`)
   - Click "Next"

7. **Review and Launch**
   - Review pricing (Basic plan starts at $5/month)
   - Click "Create Resources"

8. **Wait for Deployment**
   - Initial deployment takes 3-5 minutes
   - You'll see build logs in real-time
   - Once complete, you'll get a live URL (e.g., `https://cyber-heist-xxxxx.ondigitalocean.app`)

---

### Option 2: Deploy via doctl CLI (Advanced)

1. **Install doctl**
   ```bash
   # macOS
   brew install doctl
   
   # Or download from: https://github.com/digitalocean/doctl/releases
   ```

2. **Authenticate**
   ```bash
   doctl auth init
   # Enter your DigitalOcean API token when prompted
   # Get token from: https://cloud.digitalocean.com/account/api/tokens
   ```

3. **Deploy using app.yaml**
   ```bash
   cd /Users/sagar/Documents/DO/Projects/cyber_hiest
   doctl apps create --spec .do/app.yaml
   ```

4. **Monitor Deployment**
   ```bash
   # List your apps
   doctl apps list
   
   # Get app details (replace APP_ID with your app ID)
   doctl apps get APP_ID
   
   # View deployment logs
   doctl apps logs APP_ID
   ```

---

### Option 3: Deploy via GitHub Integration (Easiest for updates)

Once you've deployed via Option 1 or 2:

1. **Make changes to your code**
2. **Commit and push to GitHub**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```
3. **Automatic deployment** - DigitalOcean will automatically detect changes and redeploy!

---

## Post-Deployment

### Access Your App
- Your app will be available at: `https://cyber-heist-xxxxx.ondigitalocean.app`
- Share this URL with your team!

### Custom Domain (Optional)
1. Go to your app in DigitalOcean dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain (e.g., `cyberhiest.com`)
4. Update DNS records as instructed

### Monitor Your App
- **Logs**: View in DigitalOcean dashboard or via `doctl apps logs`
- **Metrics**: CPU, Memory, Bandwidth usage
- **Alerts**: Set up alerts for downtime

### Scaling
- Go to "Settings" → "Resources"
- Increase instance count for more concurrent users
- Upgrade instance size for better performance

---

## Important Notes

### WebSocket Support
✅ Your app uses Socket.io for real-time communication
- DigitalOcean App Platform supports WebSockets
- No additional configuration needed
- Ensure HTTP port is set to 3000

### Environment Variables
Current configuration:
- `NODE_ENV` = `production`

Add more if needed via dashboard or app.yaml

### Cost Estimate
- **Basic (512 MB RAM, 1 vCPU)**: $5/month
- **Professional (1 GB RAM, 1 vCPU)**: $12/month
- Includes 40 GB outbound bandwidth

### Troubleshooting

**Build Fails:**
- Check build logs in dashboard
- Verify `package.json` has all dependencies
- Ensure Node.js version compatibility

**App Won't Start:**
- Verify `npm start` command works locally
- Check HTTP port is 3000
- Review runtime logs

**WebSocket Connection Issues:**
- Ensure you're using `wss://` (secure WebSocket) in production
- Update `room.html` and `dashboard.html` Socket.io connection URLs

---

## Quick Start Checklist

- [ ] DigitalOcean account created
- [ ] Code pushed to GitHub (✅ Done)
- [ ] Log in to DigitalOcean dashboard
- [ ] Create new App
- [ ] Connect GitHub repo: `R4sammy/fun_friday`
- [ ] Configure build/run commands
- [ ] Launch deployment
- [ ] Test the live URL
- [ ] Share with team!

---

## Need Help?
- DigitalOcean Docs: https://docs.digitalocean.com/products/app-platform/
- Community: https://www.digitalocean.com/community
- Support: https://cloud.digitalocean.com/support

**Your app is ready to deploy! 🚀**
