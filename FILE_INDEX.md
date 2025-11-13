# 📚 Project File Index

Quick reference guide to all files in the Cyber Heist project.

---

## 🎯 Core Application Files

### `/server.js` (Backend)
**Purpose**: Main Express server with Socket.io integration  
**Lines**: ~160  
**Key Functions**:
- REST API endpoints for heist creation/retrieval
- WebSocket event handlers for real-time updates
- In-memory data storage using Map
- Participant tracking and room management

**API Endpoints**:
- `POST /api/heist/create` - Create new heist
- `GET /api/heist/:heistId` - Get heist details
- `GET /api/heist/:heistId/room/:roomNumber` - Get room details

---

## 🎨 Frontend Files (`/public/`)

### `/public/index.html` (Landing Page)
**Purpose**: Home page with join/create options  
**Key Elements**:
- Glitch-effect title
- Join heist input field
- Create heist button & modal
- Loading overlay

### `/public/dashboard.html` (Organizer View)
**Purpose**: Control panel for heist organizers  
**Key Features**:
- Display all room links
- Real-time participant tracking
- Copy-to-clipboard functionality
- Live WebSocket updates

### `/public/room.html` (Participant View)
**Purpose**: Individual breakout room page  
**Key Features**:
- Join form with name input
- Participant grid display
- Real-time team member updates
- Avatar generation

### `/public/styles.css` (Styling)
**Purpose**: Complete cyberpunk theme  
**Lines**: ~700+  
**Includes**:
- Color scheme variables
- Glitch animations
- Responsive layouts
- Component styles (buttons, cards, modals)
- Grid background animation

### `/public/app.js` (Client Logic)
**Purpose**: Frontend JavaScript for landing page  
**Key Functions**:
- `showCreateModal()` - Display heist creation modal
- `createHeist()` - POST request to create heist
- `joinHeist()` - Navigate to existing heist
- Modal management & keyboard events

---

## 📋 Configuration Files

### `/package.json`
**Purpose**: Node.js project configuration  
**Dependencies**:
```json
{
  "express": "^4.18.2",
  "socket.io": "^4.7.2",
  "uuid": "^9.0.1"
}
```
**Scripts**:
- `start` → `node server.js`
- `dev` → `nodemon server.js`

### `/package-lock.json`
**Purpose**: Lock file for exact dependency versions  
**Total Packages**: 121

### `/.gitignore`
**Purpose**: Git exclusion rules  
**Excludes**:
- node_modules/
- .env
- *.log
- .DS_Store

### `/.do/app.yaml`
**Purpose**: DigitalOcean App Platform configuration  
**Specifies**:
- Build/run commands
- Instance size
- Environment variables
- Routes & health checks

---

## 📖 Documentation Files

### `/Readme.md` (Main Documentation)
**Sections**:
1. Project overview
2. Features list
3. Tech stack
4. Quick start guide
5. Deployment instructions
6. API reference
7. Customization guide

**Length**: ~300 lines

### `/DEPLOYMENT.md` (Deployment Guide)
**Contents**:
- Step-by-step DigitalOcean setup
- GitHub integration
- CLI deployment with doctl
- Environment configuration
- Troubleshooting tips

**Target Audience**: DevOps/Deployment

### `/TESTING.md` (Testing Guide)
**Contents**:
- Local testing checklist
- Feature testing scenarios
- Real-time update verification
- Browser compatibility tests
- Performance testing
- Known limitations

**Test Cases**: 10+ scenarios

### `/PROJECT_SUMMARY.md` (Complete Overview)
**Contents**:
- Full file structure
- Feature implementation status
- Technology stack details
- User journey descriptions
- Future enhancements
- Success metrics

**Purpose**: Onboarding & reference

### `/VISUAL_GUIDE.md` (UI Documentation)
**Contents**:
- ASCII art page layouts
- Color scheme reference
- Animation descriptions
- Component hierarchy
- Responsive design notes

**Purpose**: Design reference

---

## 🛠 Utility Files

### `/start.sh` (Quick Start Script)
**Purpose**: One-command server startup  
**Permissions**: Executable (`chmod +x`)  
**Actions**:
1. Check if node_modules exists
2. Run npm install if needed
3. Start server with npm start

**Usage**: `./start.sh`

---

## 📊 File Statistics

```
Total Files:        16
Total Lines:        ~2,500+
Dependencies:       121 packages
Documentation:      6 files
Code Files:         5 files
Config Files:       5 files
```

### File Size Breakdown
| File | Type | Size |
|------|------|------|
| styles.css | CSS | ~20KB |
| server.js | JS | ~5KB |
| dashboard.html | HTML | ~4KB |
| room.html | HTML | ~5KB |
| app.js | JS | ~3KB |

---

## 🗺️ File Dependencies

```
server.js
├── express
├── socket.io
└── uuid

index.html
└── app.js
    └── styles.css

dashboard.html
└── socket.io (client)
    └── styles.css

room.html
└── socket.io (client)
    └── styles.css
```

---

## 📂 Directory Structure

```
cyber_hiest/
├── .do/                    # Deployment configs
│   └── app.yaml
├── .gitignore             # Git exclusions
├── node_modules/          # Dependencies (not committed)
├── public/                # Static assets
│   ├── index.html
│   ├── dashboard.html
│   ├── room.html
│   ├── styles.css
│   └── app.js
├── server.js              # Main server
├── package.json           # Project config
├── package-lock.json      # Dependency lock
├── start.sh              # Quick start script
├── Readme.md             # Main docs
├── DEPLOYMENT.md         # Deploy guide
├── TESTING.md            # Test guide
├── PROJECT_SUMMARY.md    # Full overview
└── VISUAL_GUIDE.md       # UI reference
```

---

## 🔍 Quick Find

**Need to...**

| Task | File to Edit |
|------|-------------|
| Change colors | `public/styles.css` (lines 1-15) |
| Add API endpoint | `server.js` (after line 40) |
| Modify landing page | `public/index.html` |
| Update room limit | `server.js` (line 32) |
| Add WebSocket event | `server.js` (lines 70-150) |
| Change port | `server.js` (line 9) |
| Customize theme | `public/styles.css` |
| Add dashboard feature | `public/dashboard.html` |
| Update deployment config | `.do/app.yaml` |

---

## 🚀 File Loading Order

**Browser Page Load Sequence**:

1. **Landing Page**:
   ```
   index.html → styles.css → app.js
   ```

2. **Dashboard Page**:
   ```
   dashboard.html → styles.css → socket.io → inline JS
   ```

3. **Room Page**:
   ```
   room.html → styles.css → socket.io → inline JS
   ```

**Server Startup**:
```
server.js → require(express) → require(socket.io) → require(uuid) → listen(3000)
```

---

## 📝 Version Control

**Committed to Git**:
- ✅ All source code
- ✅ Documentation
- ✅ Configuration files
- ✅ Package.json/lock

**Ignored by Git**:
- ❌ node_modules/
- ❌ .env
- ❌ *.log
- ❌ .DS_Store

---

## 🎯 Critical Files (Don't Delete!)

| File | Impact if Deleted |
|------|-------------------|
| `server.js` | ❌ App won't run |
| `package.json` | ❌ Dependencies lost |
| `public/styles.css` | ⚠️ No styling |
| `public/index.html` | ❌ No entry point |
| `.do/app.yaml` | ⚠️ Can't deploy to DO |

---

## 🔄 File Update Frequency

**High (frequently edited)**:
- `server.js` - Adding features
- `public/styles.css` - UI tweaks
- `public/dashboard.html` - Feature additions

**Medium (occasionally edited)**:
- `public/app.js` - New functionality
- `Readme.md` - Documentation updates
- `package.json` - New dependencies

**Low (rarely edited)**:
- `.gitignore` - Set once
- `start.sh` - Stable
- `.do/app.yaml` - Deployment config

---

**Last Updated**: Project Complete  
**Total Development Time**: Single session  
**Status**: ✅ Production Ready
