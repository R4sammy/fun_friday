# 🚀 Mission Start/Abort System

## Overview

The puzzle system now requires all team members to agree before the mission starts. Once started, the room is locked and puzzles appear. Any team member can abort the mission.

---

## 🎯 Mission Flow

### 1. **Waiting Phase** (Initial State)

When participants join a room, they see:

```
┌────────────────────────────────────────┐
│  ⏳ MISSION BRIEFING                  │
│  Waiting for all agents to ready up... │
│                                        │
│  Ready Status: 2 / 3 agents ready     │
│  ✓ Agent-007                          │
│  ✓ Trinity                            │
│                                        │
│  [ 🚀 START MISSION ]                 │
│                                        │
│  All team members must click          │
│  START MISSION to begin               │
└────────────────────────────────────────┘
```

**Features:**
- Shows how many agents are ready
- Displays checkmarks next to ready participants
- Button becomes "START MISSION" (was "Ready")
- New participants can still join
- Room is unlocked

---

### 2. **Ready Up Process**

**Individual Action:**
1. Participant clicks **"🚀 START MISSION"**
2. Button becomes disabled (grayed out)
3. Their name appears in ready list with ✓
4. Counter updates: "3 / 3 agents ready"

**Real-time Updates:**
- All participants see who's ready
- Counter updates live
- Ready indicators show with green checkmarks

**Auto-start Trigger:**
- When ALL participants click ready
- Mission automatically starts
- Puzzle appears for everyone
- Room becomes locked

---

### 3. **Mission Started** (Locked Phase)

Once everyone is ready:

```
┌────────────────────────────────────────┐
│  🧩 MISSION PUZZLE      [EASY] ⏱️ 05:00│
├────────────────────────────────────────┤
│  ENCRYPTED MESSAGE                     │
│  Decode the intercepted transmission  │
│                                        │
│  → SOLUTION STEPS:                     │
│  1. Numbers = letter positions         │
│  2. Decode: 8-5-9-19-20               │
│  3. Combine letters                    │
│                                        │
│  [ 💡 SHOW HINT ]                      │
│                                        │
│  ENTER SOLUTION:                       │
│  [________________] [SUBMIT]           │
│                                        │
│  ─────────────────────────────         │
│  [ ⚠️ ABORT MISSION ]                  │
└────────────────────────────────────────┘
```

**Changes:**
- ✅ Puzzle is now visible
- ✅ Timer starts counting down
- ✅ All puzzle features active
- ✅ **Room is LOCKED** - no new joins allowed
- ✅ **ABORT MISSION** button appears

**Room Lock Behavior:**
- New participants trying to join see:
  ```
  "This room is locked. Mission already in progress."
  ```
- They are redirected to home page
- Existing participants can still work

---

### 4. **Abort Mission**

Any participant can abort:

**Process:**
1. Click **"⚠️ ABORT MISSION"**
2. Confirm dialog appears:
   ```
   "Are you sure you want to ABORT the mission?
    This will fail the mission for everyone!"
   ```
3. If confirmed → Mission fails

**Result for ALL participants:**

```
┌────────────────────────────────────────┐
│                                        │
│  ❌ MISSION FAILED                     │
│                                        │
│  Mission aborted by Agent-007.         │
│  Mission Failed.                       │
│                                        │
│  [ ← RETURN TO BASE ]                  │
│                                        │
└────────────────────────────────────────┘
```

**Effects:**
- Timer stops
- Puzzle becomes inaccessible
- All participants see failure screen
- Shows who aborted the mission
- Cannot resume - must return to home

---

### 5. **Mission Completed**

When puzzle is solved:

```
┌────────────────────────────────────────┐
│                                        │
│  ✅ MISSION COMPLETED                  │
│                                        │
│  Mission completed by Trinity!         │
│  Time: 3:47                           │
│                                        │
│  [ ← RETURN TO BASE ]                  │
│                                        │
└────────────────────────────────────────┘
```

**Effects:**
- Timer stops
- Shows solver and time
- All participants see success
- Can return to home

---

## 🔒 Room Locking System

### When Room Locks

**Trigger:** All participants click "START MISSION"

**What Happens:**
- Room status changes to `LOCKED`
- Server rejects new join attempts
- Late joiners see error message
- Only current participants can interact

### Lock States

| State | New Joins? | Puzzle Visible? | Can Abort? |
|-------|-----------|----------------|-----------|
| WAITING | ✅ Yes | ❌ No | ❌ No |
| STARTED | ❌ No | ✅ Yes | ✅ Yes |
| FAILED | ❌ No | ❌ No | ❌ No |
| COMPLETED | ❌ No | ✅ Yes | ❌ No |

---

## 📡 WebSocket Events

### Client → Server

**ready-for-mission**
```javascript
{
  heistId: 'a3f7b2c1',
  roomNumber: 1,
  userName: 'Agent-007'
}
```

**abort-mission**
```javascript
{
  heistId: 'a3f7b2c1',
  roomNumber: 1,
  userName: 'Agent-007'
}
```

### Server → Client

**ready-update**
```javascript
{
  readyParticipants: ['Agent-007', 'Trinity'],
  totalParticipants: 3
}
```

**mission-started**
```javascript
{
  message: 'All agents ready. Mission started!'
}
```

**mission-aborted**
```javascript
{
  abortedBy: 'Agent-007',
  message: 'Mission aborted by Agent-007. Mission Failed.'
}
```

**room-locked**
```javascript
{
  message: 'This room is locked. Mission already in progress.'
}
```

---

## 🎮 User Experience Examples

### Scenario A: Smooth Start

1. **Trinity joins** → Sees "0 / 1 agents ready"
2. **Neo joins** → Sees "0 / 2 agents ready"
3. **Trinity clicks** START MISSION → "1 / 2 agents ready"
4. **Neo sees** "✓ Trinity" in ready list
5. **Neo clicks** START MISSION → "2 / 2 agents ready"
6. **Both see** Mission auto-starts immediately
7. **Puzzle appears** for both
8. **Room locks** - no more joins

### Scenario B: Late Joiner (Blocked)

1. **Team starts** mission (room locks)
2. **Morpheus tries** to join room
3. **Gets error** "Room is locked. Mission in progress."
4. **Redirected** to home page
5. **Cannot join** this room anymore

### Scenario C: Mission Abort

1. **Mission running** - Timer at 2:30
2. **Agent-007** realizes mistake
3. **Clicks** "ABORT MISSION"
4. **Confirms** abort dialog
5. **All participants** see "MISSION FAILED"
6. **Message shows** "Aborted by Agent-007"
7. **All must** return to base

### Scenario D: Participant Leaves Before Start

1. **3 participants** join room
2. **2 click ready** (2 / 3 ready)
3. **1 participant** leaves room
4. **Counter updates** to (2 / 2 ready)
5. **Mission auto-starts** (all remaining are ready)

---

## 🎨 Visual States

### Ready Button States

```
Normal:    [ 🚀 START MISSION ]
Clicked:   [ 🚀 START MISSION ] (grayed out)
```

### Ready Indicators

```
Not Ready:  (no indicator)
Ready:      ✓ Agent-007 (green)
```

### Mission Status Colors

```
WAITING:    Cyan border
STARTED:    Magenta border (puzzle)
FAILED:     Red border + red glow
COMPLETED:  Green border + green glow
```

---

## 🔧 Technical Implementation

### Server-side (server.js)

**Room Data Structure:**
```javascript
{
  roomId: "room-1",
  roomNumber: 1,
  inviteLink: "/heist/abc123/room/1",
  participants: [...],
  missionStatus: 'WAITING', // WAITING, STARTED, FAILED, COMPLETED
  readyParticipants: ['Agent-007', 'Trinity'],
  locked: false // true when mission starts
}
```

**Event Handlers:**
- `join-room` - Checks if room is locked
- `ready-for-mission` - Adds to ready list, auto-starts when all ready
- `abort-mission` - Sets status to FAILED, broadcasts to all
- `disconnect` - Removes from ready list, updates counts

### Client-side (room.html)

**State Variables:**
```javascript
missionStatus: 'WAITING', // Current mission state
isReady: false,           // Has user clicked ready?
```

**Functions:**
- `readyForMission()` - Emits ready event
- `abortMission()` - Confirms and emits abort
- `showMissionArea(area)` - Switches between UI states

---

## ✅ Benefits

**Security:**
- ✅ Prevents disruption from late joiners
- ✅ Ensures fair start for all participants
- ✅ Abort requires confirmation

**User Experience:**
- ✅ Clear indication of who's ready
- ✅ Auto-start when all ready (no manual trigger needed)
- ✅ Emergency abort option
- ✅ Clear failure messaging

**Team Coordination:**
- ✅ Everyone must agree to start
- ✅ No surprise puzzle appearances
- ✅ Time to discuss strategy
- ✅ Anyone can abort if needed

---

## 📝 Testing Checklist

- [ ] Join room → See waiting area
- [ ] Click START MISSION → Button grays out
- [ ] Ready counter updates correctly
- [ ] All ready → Mission auto-starts
- [ ] Puzzle appears after start
- [ ] Try joining locked room → See error
- [ ] Click ABORT → See confirmation
- [ ] Confirm abort → All see failure
- [ ] Solve puzzle → All see completion
- [ ] Participant leaves before start → Counter adjusts

---

**The mission system ensures coordinated, fair, and secure puzzle gameplay! 🚀**
