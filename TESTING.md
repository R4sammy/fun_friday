# 🧪 Testing Guide for Cyber Heist

## Local Testing Checklist

### 1. Start the Server

```bash
npm start
```

Expected output:
```
🤖 Cyber Heist server running on port 3000
```

### 2. Test the Landing Page

1. Open browser to: `http://localhost:3000`
2. Verify:
   - [ ] Cyberpunk theme loads correctly
   - [ ] "CYBER HEIST" glitch effect animates
   - [ ] "Join Active Heist" input field is visible
   - [ ] "Create Heist" button is visible
   - [ ] Animated grid background displays

### 3. Test Heist Creation

1. Click **"CREATE HEIST"** button
2. Modal should appear with:
   - [ ] Organizer name input (optional)
   - [ ] Room count input (default: 5)
3. Enter test values:
   - Organizer: "Test Organizer"
   - Rooms: 3
4. Click **"DEPLOY HEIST"**
5. Should redirect to dashboard at `/dashboard/[heist-id]`

### 4. Test Organizer Dashboard

On the dashboard, verify:
- [ ] Heist ID is displayed
- [ ] "ACTIVE" status badge shows
- [ ] Organizer name appears
- [ ] Created timestamp shows
- [ ] 3 room cards are displayed
- [ ] Each room shows:
  - Room number
  - Participant count (0 👥)
  - Full invite link
  - Copy button (📋)
- [ ] "COPY ALL LINKS" button works

**Test Copy Functionality:**
1. Click copy button on Room 1
2. Button should change to ✓ briefly
3. Paste clipboard - link should be there

### 5. Test Room Joining

1. Copy a room link from dashboard
2. Open in new browser tab/window (or incognito mode)
3. Should see Room page with:
   - [ ] "BREAKOUT ROOM" header
   - [ ] Correct room number
   - [ ] Heist ID displayed
   - [ ] Name input field
4. Enter name: "Agent Smith"
5. Click **"JOIN ROOM"**
6. Verify:
   - [ ] Participant card appears with your name
   - [ ] Avatar with first letter shows
   - [ ] "YOU" badge is visible
   - [ ] Participant count shows 1

### 6. Test Real-time Updates

**Keep dashboard open and room page open in separate tabs:**

1. Join the same room from another browser/incognito tab
2. Enter different name: "Agent Jones"
3. Verify in **Room Page**:
   - [ ] New participant appears automatically
   - [ ] Count updates to 2
4. Verify in **Dashboard**:
   - [ ] Room's participant badge updates to 2 👥
   - [ ] Participant chips appear
5. Close one room tab
6. Verify:
   - [ ] Participant disappears from room list
   - [ ] Count decrements

### 7. Test Multiple Rooms

1. Open 2-3 different room links in separate tabs
2. Join each with different names
3. Verify:
   - [ ] Each room shows only its participants
   - [ ] Dashboard shows participants in correct rooms
   - [ ] Counts are accurate per room

### 8. Test Join by Heist ID

1. From landing page, enter the Heist ID
2. Click **"ACCESS"**
3. Should redirect to dashboard
4. Verify all data is preserved

### 9. Test Navigation

1. From room page, click "← Back to Home"
2. Should return to landing page
3. From dashboard, click "← BACK TO HOME"
4. Should return to landing page

### 10. Test Error Handling

1. Try joining with invalid Heist ID
2. Should show error: "Heist not found"
3. Try creating heist with 0 rooms
4. Should show validation error
5. Try creating heist with 51 rooms
6. Should show validation error

---

## Mobile Testing

1. Open on mobile device (or use browser dev tools)
2. Verify:
   - [ ] Responsive layout works
   - [ ] Text is readable
   - [ ] Buttons are tappable
   - [ ] Glitch effects don't cause performance issues

---

## Performance Testing

### Test with Many Participants

1. Create heist with 10 rooms
2. Join 20+ participants across rooms
3. Verify:
   - [ ] No lag in updates
   - [ ] All participants visible
   - [ ] Dashboard responsive

### Test Room Limits

1. Create heist with 50 rooms (max)
2. Verify all rooms display correctly
3. Dashboard should handle scrolling

---

## Browser Compatibility

Test on:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## WebSocket Testing

1. Open browser dev console (F12)
2. Go to Network tab
3. Filter by "WS" (WebSocket)
4. Join a room
5. Verify:
   - [ ] WebSocket connection establishes
   - [ ] Messages sent/received on join/leave
   - [ ] No connection errors

---

## Expected Issues (Known Limitations)

✓ **Data persists only while server running**
   - Restarting server clears all heists
   - Expected behavior for MVP

✓ **Heist IDs are short UUIDs**
   - First segment of UUID for easier sharing
   - May have collisions with many heists

✓ **No authentication**
   - Anyone with link can join
   - Expected for MVP

---

## Success Criteria

All tests passing means:
- ✅ App is ready for deployment
- ✅ Core functionality works
- ✅ Real-time updates functional
- ✅ User experience is smooth

---

## Next Steps After Testing

1. Fix any bugs found
2. Deploy to DigitalOcean (see DEPLOYMENT.md)
3. Test on production URL
4. Share with team!

---

**Happy Testing! 🚀**
