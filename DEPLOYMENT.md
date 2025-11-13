# Cyber Heist - Quick Deployment Guide

## 🚀 Deploy to DigitalOcean in 3 Steps

### Step 1: Prepare Your Repository

1. **Initialize Git (if not already done)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Cyber Heist app"
   ```

2. **Push to GitHub**
   ```bash
   # Create a new repo on GitHub first, then:
   git remote add origin https://github.com/YOUR_USERNAME/cyber_hiest.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on DigitalOcean App Platform

#### Option A: Using Web Interface

1. Go to https://cloud.digitalocean.com/apps
2. Click **"Create App"**
3. Choose **"GitHub"** as source
4. Select your repository and branch
5. DigitalOcean will auto-detect it as a Node.js app
6. Review settings:
   - **Build Command**: `npm install`
   - **Run Command**: `npm start`
   - **Port**: `3000`
7. Choose plan (Basic tier works fine)
8. Click **"Next"** → **"Create Resources"**

#### Option B: Using CLI

1. **Install doctl**
   ```bash
   # macOS
   brew install doctl
   
   # Or download from: https://docs.digitalocean.com/reference/doctl/how-to/install/
   ```

2. **Authenticate**
   ```bash
   doctl auth init
   # Enter your DigitalOcean API token
   ```

3. **Create app from spec**
   ```bash
   # Update .do/app.yaml with your GitHub repo details first
   doctl apps create --spec .do/app.yaml
   ```

4. **Check deployment status**
   ```bash
   doctl apps list
   ```

### Step 3: Access Your Live App

Once deployed, DigitalOcean will provide a URL like:
```
https://cyber-heist-xxxxx.ondigitalocean.app
```

Your app is now live! 🎉

---

## 📝 Post-Deployment Checklist

- [ ] Test heist creation
- [ ] Test room joining
- [ ] Verify real-time updates work
- [ ] Test on mobile devices
- [ ] Share the URL with your team

---

## 🔄 Updating Your App

After making code changes:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

DigitalOcean will automatically redeploy your app!

---

## 💰 Cost Estimate

**Basic Plan**: ~$5/month
- Perfect for small teams
- Handles ~100 concurrent users
- Auto-scaling available

**Upgrade Later**: Scale up as needed

---

## 🐛 Common Issues

**Build fails?**
- Check package.json is committed
- Ensure all dependencies are listed

**App won't start?**
- Verify run command is `npm start`
- Check server.js uses `process.env.PORT`

**WebSocket issues?**
- Ensure HTTP protocol is set correctly
- Check firewall rules allow WebSocket

---

## 📚 Useful Commands

```bash
# View app info
doctl apps list

# View app logs
doctl apps logs <APP_ID> --follow

# Update app
doctl apps update <APP_ID> --spec .do/app.yaml

# Delete app
doctl apps delete <APP_ID>
```

---

**Questions?** Check DigitalOcean's [App Platform docs](https://docs.digitalocean.com/products/app-platform/)
