# 🧩 Puzzle System Documentation

## Overview

Each room in the Cyber Heist application now includes an interactive puzzle that participants must solve together. Puzzles are designed to encourage teamwork and problem-solving.

---

## 📋 Puzzle Features

- **12 Unique Puzzles**: Different types of challenges
- **Difficulty Levels**: EASY, MEDIUM, HARD
- **Step-by-Step Guides**: Clear instructions for solving
- **Countdown Timer**: Time limit for each puzzle
- **Hint System**: Toggle hints when needed
- **Real-time Notifications**: Alert team when puzzle is solved
- **Consistent Assignment**: Same room always gets the same puzzle

---

## 🎯 Puzzle Types Included

### 1. ENCRYPTED MESSAGE (Easy)
- **Type**: Number to Letter decoding
- **Answer**: HEIST
- **Time**: 5 minutes

### 2. BINARY BREACH (Medium)
- **Type**: Binary to ASCII conversion
- **Answer**: CODE
- **Time**: 7 minutes

### 3. CIPHER MATRIX (Easy)
- **Type**: Caesar cipher
- **Answer**: HACK
- **Time**: 4 minutes

### 4. MATH SEQUENCE (Medium)
- **Type**: Pattern recognition
- **Answer**: FORTY TWO (or 42)
- **Time**: 6 minutes

### 5. LOGIC GRID (Hard)
- **Type**: Coordinate decoding
- **Answer**: VIRUS
- **Time**: 8 minutes

### 6. REVERSE ENGINEERING (Easy)
- **Type**: Word reversal
- **Answer**: ROOT
- **Time**: 3 minutes

### 7. KEYPAD CODE (Medium)
- **Type**: Phone keypad decoding
- **Answer**: DATA
- **Time**: 5 minutes

### 8. PATTERN RECOGNITION (Easy)
- **Type**: Word association
- **Answer**: NODE (or PORT, MESH)
- **Time**: 4 minutes

### 9. MORSE CODE MYSTERY (Hard)
- **Type**: Morse code decoding
- **Answer**: CRYPT
- **Time**: 10 minutes

### 10. WORD PUZZLE (Easy)
- **Type**: First letter extraction
- **Answer**: BYTE
- **Time**: 3 minutes

### 11. HEX DECODER (Medium)
- **Type**: Hexadecimal to ASCII
- **Answer**: KEY
- **Time**: 6 minutes

### 12. RIDDLE BREACH (Easy)
- **Type**: Logic riddle
- **Answer**: KEYBOARD
- **Time**: 5 minutes

---

## 🎮 How Puzzles Work

### For Participants

1. **Join the Room**: Enter your name to access the puzzle
2. **Read the Challenge**: Each puzzle has a title and description
3. **Follow the Steps**: Step-by-step instructions guide you
4. **Use Hints**: Click "SHOW HINT" if you're stuck
5. **Submit Answer**: Enter your solution (1-2 words)
6. **Get Feedback**: Instant validation of your answer

### Puzzle Assignment

- Each room number gets a **consistent puzzle**
- Room 1 → Puzzle 1, Room 2 → Puzzle 2, etc.
- If more rooms than puzzles, it cycles (Room 13 → Puzzle 1)

---

## 🔧 Technical Implementation

### Files Structure

```
/public/puzzles.js       - Puzzle data and validation logic
/public/room.html        - Room view with puzzle UI
/public/styles.css       - Puzzle styling
/server.js               - WebSocket event handling
```

### Key Functions

#### puzzles.js

```javascript
// Get puzzle for specific room
getPuzzleForRoom(roomNumber)

// Get random puzzle
getRandomPuzzle()

// Validate user answer
validateAnswer(userAnswer, correctAnswer, alternatives)
```

#### room.html

```javascript
// Load and display puzzle
loadPuzzle()

// Start countdown timer
startTimer()

// Show/hide hint
toggleHint()

// Submit and validate answer
submitAnswer()
```

---

## 🎨 Puzzle UI Components

### Puzzle Section Elements

1. **Header**
   - Puzzle icon (🧩)
   - Difficulty badge
   - Countdown timer

2. **Content**
   - Title (e.g., "ENCRYPTED MESSAGE")
   - Description
   - Step-by-step instructions
   - Hint button
   - Answer input field

3. **Feedback**
   - Success: Green with checkmark
   - Error: Red with X
   - Warning: Yellow for time alerts

---

## ⏱️ Timer System

### Behavior

- **Green**: More than 3 minutes remaining
- **Yellow**: 1-3 minutes remaining
- **Red**: Less than 1 minute
- **Continues**: Timer keeps running after time's up
- **Still Solvable**: Can submit answers after timer expires

### Time Limits by Difficulty

- **EASY**: 3-5 minutes
- **MEDIUM**: 5-7 minutes
- **HARD**: 8-10 minutes

---

## 💡 Hint System

### How It Works

- Hidden by default
- Click "💡 SHOW HINT" to reveal
- Click again to hide
- Provides contextual clues
- Doesn't give away the answer

### Example Hints

- "A = 1, B = 2, C = 3..."
- "Use binary to ASCII conversion"
- "Caesar cipher with shift of 3"

---

## ✅ Answer Validation

### Features

- **Case Insensitive**: "HEIST" = "heist"
- **Whitespace Ignored**: "FORTY TWO" = "FORTYTWO"
- **Alternative Answers**: Some puzzles accept multiple correct answers
- **Instant Feedback**: Immediate validation on submit

### Examples

```javascript
// Primary answer
answer: "HEIST"

// With alternatives
answer: "KEYBOARD"
alternativeAnswers: ["KEYS"]

// Number answers
answer: "FORTY TWO"
alternativeAnswers: ["42", "FORTYTWO"]
```

---

## 🔔 Real-time Features

### WebSocket Events

#### puzzle-solved (Client → Server)
```javascript
socket.emit('puzzle-solved', {
  heistId: 'a3f7b2c1',
  roomNumber: 1,
  solvedBy: 'Agent-007',
  timeTaken: 180 // seconds
});
```

#### puzzle-solved (Server → Clients)
```javascript
socket.on('puzzle-solved', (data) => {
  // Notify team members
  showFeedback(`🎊 ${data.solvedBy} solved the puzzle!`);
});
```

#### puzzle-solved-notification (Server → Dashboard)
```javascript
// Organizer sees which rooms solved puzzles
{
  roomNumber: 1,
  solvedBy: 'Agent-007',
  timeTaken: 180
}
```

---

## 🎓 Adding New Puzzles

### Template

```javascript
{
  id: 13,
  title: "YOUR PUZZLE NAME",
  difficulty: "EASY", // or MEDIUM, HARD
  description: "Brief description of the challenge",
  steps: [
    "Step 1: First instruction",
    "Step 2: Second instruction",
    "Step 3: Final instruction"
  ],
  hint: "Helpful clue without giving it away",
  answer: "SOLUTION",
  alternativeAnswers: ["ALT1", "ALT2"], // optional
  timeLimit: 300 // seconds
}
```

### Add to PUZZLES Array

1. Open `/public/puzzles.js`
2. Add new puzzle object to `PUZZLES` array
3. Save and reload

---

## 🎯 Best Practices

### Creating Good Puzzles

✅ **Clear Instructions**: Step-by-step guide
✅ **Fair Difficulty**: Solvable within time limit
✅ **Themed**: Cyber/tech related
✅ **Short Answers**: 1-2 words maximum
✅ **Helpful Hints**: Guide without revealing
✅ **Test It**: Solve it yourself first

❌ **Avoid**:
- Obscure knowledge
- Overly complex math
- Extremely long answers
- Impossible time limits

---

## 📊 Puzzle Statistics

### Current Collection

- Total Puzzles: **12**
- Easy: **6**
- Medium: **4**
- Hard: **2**
- Average Time Limit: **5 minutes**
- Answer Length: **1-2 words**

### Answer Types

- Text: 10 puzzles
- Numbers: 1 puzzle
- Either: 1 puzzle

---

## 🐛 Troubleshooting

### Common Issues

**Timer not starting:**
- Check browser console for errors
- Ensure `puzzles.js` is loaded

**Answer not validating:**
- Check spelling (case-insensitive)
- Remove extra spaces
- Try alternative answer if available

**Hint not showing:**
- Click the hint button
- Check if puzzle loaded correctly

**Puzzle not loading:**
- Verify room number is valid
- Check `puzzles.js` file exists
- Look for JavaScript errors

---

## 🔄 Future Enhancements

Potential additions:

- [ ] User-submitted puzzles
- [ ] Leaderboard with solve times
- [ ] Difficulty selection
- [ ] Collaborative solving stats
- [ ] Puzzle categories
- [ ] Multi-step complex puzzles
- [ ] Image-based puzzles
- [ ] Audio clues
- [ ] Dynamic puzzle generation

---

## 📝 Examples in Action

### Easy Puzzle Flow

1. **Participant sees**: "ENCRYPTED MESSAGE"
2. **Reads steps**: "Each number = letter position"
3. **Sees code**: "8-5-9-19-20"
4. **Clicks hint**: "A = 1, B = 2..."
5. **Decodes**: H(8) E(5) I(9) S(19) T(20)
6. **Enters**: "HEIST"
7. **Success**: "🎉 CORRECT!"

### Medium Puzzle Flow

1. **Challenge**: "BINARY BREACH"
2. **Code**: "01000011 01001111 01000100 01000101"
3. **Hint**: "Binary to ASCII"
4. **Solves**: C-O-D-E
5. **Submits**: "CODE"
6. **Team notified**: "Agent-007 solved it!"

---

## 🎊 Success Metrics

### Puzzle Effectiveness

- **Engagement**: Do teams work together?
- **Completion Rate**: How many puzzles solved?
- **Average Time**: Are limits reasonable?
- **Hint Usage**: Are puzzles too hard?

---

**Puzzles add an engaging challenge to each room! 🧩**
