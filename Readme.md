# 🤖 Cyber Heist - Team Coordination Platform

A real-time web application for coordinating team "heists" with instant breakout room creation. Features a cyberpunk-themed interface with WebSocket support for live updates.

![Cyberpunk Theme](https://img.shields.io/badge/Theme-Cyberpunk-00ffff)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![Socket.io](https://img.shields.io/badge/Real--time-Socket.io-blue)

---

## 🎯 Features

- **Instant Room Creation**: Generate multiple breakout rooms with one click
- **Real-time Updates**: Live participant tracking using WebSocket
- **Cyberpunk UI**: High-contrast, neon-themed interface
- **Simple Sharing**: Copy-paste room links for easy distribution
- **No Database Required**: In-memory storage for MVP (can be extended)
- **DigitalOcean Ready**: Optimized for App Platform deployment

---

## 🛠 Technical Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend**: Node.js with Express
- **Real-time**: Socket.io
- **Styling**: Custom Cyberpunk CSS theme
- **Storage**: In-memory Map (upgradeable to MongoDB/Redis)

---

## 📋 User Flows

### Landing Page (`/`)
1. **Join Existing Heist**: Enter Heist ID to access dashboard
2. **Create New Heist**: Configure room count and generate links

### Organizer Dashboard (`/dashboard/:heistId`)
- View all breakout rooms
- See live participant counts
- Copy individual or all room links
- Real-time participant updates

### Participant Room (`/heist/:heistId/room/:roomNumber`)
- Enter name/codename to join
- View other team members in real-time
- Clean, focused interface for team coordination

---

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager

### Installation

1. **Clone/Navigate to the project**
```bash
cd /Users/sagar/Documents/DO/Projects/cyber_hiest
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the server**
```bash
npm start
```

4. **For development (with auto-reload)**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:3000
```

---

## 📁 Project Structure

```
cyber_hiest/
├── server.js              # Express server & Socket.io setup
├── package.json           # Dependencies & scripts
├── public/
│   ├── index.html        # Landing page
│   ├── dashboard.html    # Organizer dashboard
│   ├── room.html         # Participant room view
│   ├── styles.css        # Cyberpunk theme styles
│   └── app.js            # Client-side JavaScript
└── Readme.md             # This file
```

---

## 🎮 How to Use

### For Organizers

1. Visit the home page
2. Click **"CREATE HEIST"**
3. Enter number of breakout rooms (1-50)
4. Optionally add your name
5. Click **"DEPLOY HEIST"**
6. Share the generated room links with participants

### For Participants

1. Receive a room link from organizer
2. Enter your name/codename
3. Click **"JOIN ROOM"**
4. See other team members in real-time

---

## 🌐 Deployment to DigitalOcean App Platform

### Method 1: Using GitHub

1. Push code to GitHub repository
2. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
3. Click **"Create App"**
4. Select your GitHub repository
5. Configure:
   - **Build Command**: `npm install`
   - **Run Command**: `npm start`
   - **Port**: `3000` (or use `${PORT}`)
6. Click **"Deploy"**

### Method 2: Using DigitalOcean CLI (doctl)

```bash
# Install doctl if not already installed
brew install doctl  # macOS

# Authenticate
doctl auth init

# Create app spec file (app.yaml)
# Then deploy
doctl apps create --spec app.yaml
```

### Sample `app.yaml` for DigitalOcean

```yaml
name: cyber-heist
services:
- name: web
  github:
    repo: YOUR_USERNAME/cyber_hiest
    branch: main
  build_command: npm install
  run_command: npm start
  environment_slug: node-js
  http_port: 3000
  instance_count: 1
  instance_size_slug: basic-xxs
  routes:
  - path: /
```

### Environment Variables (if needed)

```bash
PORT=3000  # Auto-configured by DigitalOean
NODE_ENV=production
```

---

## 🔧 Configuration

### Port Configuration
The server uses `process.env.PORT` or defaults to `3000`. DigitalOcean automatically sets the PORT variable.

### Room Limits
Default: 1-50 rooms per heist. Modify in `server.js`:
```javascript
if (!roomCount || roomCount < 1 || roomCount > 50) {
  // Adjust the 50 to your desired max
}
```

---

## 🔐 Security Considerations

⚠️ **Current MVP Limitations:**
- No authentication/authorization
- In-memory storage (data lost on restart)
- No rate limiting
- Room links are guessable

**For Production:**
- Add authentication (JWT, OAuth)
- Implement rate limiting
- Use persistent storage (MongoDB, Redis)
- Add room passwords/access codes
- Implement HTTPS
- Add CORS configuration

---

## 🎨 Customization

### Change Theme Colors
Edit `public/styles.css` CSS variables:
```css
:root {
    --primary-cyan: #00ffff;
    --primary-magenta: #ff00ff;
    --primary-yellow: #ffff00;
    /* ... modify as needed */
}
```

### Add More Features
- Persistent storage: Replace `Map` with MongoDB
- Chat functionality: Extend Socket.io events
- Room passwords: Add authentication layer
- Timer/countdown: Add to dashboard

---

## 📊 API Endpoints

### REST API

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/heist/create` | Create new heist |
| GET | `/api/heist/:heistId` | Get heist details |
| GET | `/api/heist/:heistId/room/:roomNumber` | Get room details |

### WebSocket Events

**Client → Server:**
- `join-room`: Join a specific room
- `join-dashboard`: Subscribe to dashboard updates

**Server → Client:**
- `room-update`: Participant list changed
- `heist-update`: Heist data updated
- `error`: Error message

---

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Dependencies not installing:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Socket.io connection issues:**
- Check firewall settings
- Ensure WebSocket support in proxy/load balancer
- Verify CORS configuration

---

## 📝 License

MIT License - feel free to use for personal or commercial projects

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📞 Support

For issues or questions:
- Create an issue on GitHub
- Check existing documentation
- Review DigitalOcean App Platform docs

---

**Built with ❤️ for team coordination**