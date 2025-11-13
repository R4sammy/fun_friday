# 🧩 Example Puzzle Walkthrough

## Puzzle #1: ENCRYPTED MESSAGE

This is a complete example of how a puzzle appears and works in the room.

---

## 📺 Visual Layout

```
╔════════════════════════════════════════════════════════════╗
║                    BREAKOUT ROOM                           ║
║                       ROOM 1                               ║
║                Heist ID: a3f7b2c1                         ║
╚════════════════════════════════════════════════════════════╝

┌────────────────────────────────────────────────────────────┐
│ ✓ Connected as: Agent-007                                  │
└────────────────────────────────────────────────────────────┘

╔════════════════════════════════════════════════════════════╗
║ 🧩 MISSION PUZZLE              [EASY]    ⏱️ 05:00         ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║  ENCRYPTED MESSAGE                                         ║
║  Decode the intercepted transmission                       ║
║                                                            ║
║  → SOLUTION STEPS:                                         ║
║  ┌──────────────────────────────────────────────────────┐ ║
║  │ 1. Each number represents a letter's position in     │ ║
║  │    the alphabet                                      │ ║
║  │ 2. Decode: 8-5-9-19-20                              │ ║
║  │ 3. Combine the letters to form the answer           │ ║
║  └──────────────────────────────────────────────────────┘ ║
║                                                            ║
║  [ 💡 SHOW HINT ]                                          ║
║                                                            ║
║  ENTER SOLUTION:                                           ║
║  ┌─────────────────────────┐  ┌─────────┐                ║
║  │ _____________________   │  │ SUBMIT  │                ║
║  └─────────────────────────┘  └─────────┘                ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

┌────────────────────────────────────────────────────────────┐
│ 👥 ACTIVE TEAM MEMBERS (3)                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│  │    A     │  │    T     │  │    N     │                │
│  │ Agent-007│  │ Trinity  │  │   Neo    │                │
│  │   YOU    │  │          │  │          │                │
│  └──────────┘  └──────────┘  └──────────┘                │
└────────────────────────────────────────────────────────────┘

              [← LEAVE ROOM]
```

---

## 🎮 Step-by-Step Solving Process

### Initial State
- Timer: **05:00** (green)
- Hint: Hidden
- Answer field: Empty

---

### Step 1: Read the Challenge

**Participant sees:**
```
ENCRYPTED MESSAGE
Decode the intercepted transmission
```

**Thinks:** "Okay, I need to decode something"

---

### Step 2: Read Instructions

```
1. Each number represents a letter's position in alphabet
2. Decode: 8-5-9-19-20
3. Combine the letters to form the answer
```

**Participant understands:**
- Numbers = letters
- A=1, B=2, C=3... Z=26
- Need to convert: 8-5-9-19-20

---

### Step 3: Use Hint (Optional)

**Clicks**: 💡 SHOW HINT

**Reveals:**
```
💡 A = 1, B = 2, C = 3...
```

**Now it's clear!**

---

### Step 4: Decode

**Manual decoding:**
```
8  → H (8th letter)
5  → E (5th letter)
9  → I (9th letter)
19 → S (19th letter)
20 → T (20th letter)
```

**Answer:** H-E-I-S-T = **HEIST**

---

### Step 5: Submit Answer

**Participant types:** `heist`  
**Clicks:** SUBMIT

---

### Step 6: Success!

```
╔════════════════════════════════════════╗
║  🎉 CORRECT! Puzzle solved!           ║
╚════════════════════════════════════════╝
```

**Timer stops** at: 03:47  
**Answer field** disabled  
**Team notified**: "Agent-007 solved the puzzle!"

---

## 🎬 Alternative Scenarios

### Scenario A: Wrong Answer

**Participant types:** `heits` (typo)  
**Clicks:** SUBMIT

**Feedback:**
```
╔════════════════════════════════════════╗
║  ❌ Incorrect. Try again!             ║
╚════════════════════════════════════════╝
```

- Answer field cleared
- Can try again
- Timer continues

---

### Scenario B: Time Runs Out

**Timer reaches:** 00:00 (red)

**Warning shown:**
```
╔════════════════════════════════════════╗
║  ⏰ Time's up! But you can still      ║
║     solve it.                          ║
╚════════════════════════════════════════╝
```

- Can still submit answers
- No penalty
- Encourages completion

---

### Scenario C: Multiple Team Members

**Agent-007 solving:**
```
Types: "heist"
Clicks: SUBMIT
→ ✅ Success!
```

**Trinity & Neo see:**
```
╔════════════════════════════════════════╗
║  🎊 Agent-007 solved the puzzle!      ║
╚════════════════════════════════════════╝
```

**All participants:**
- See the success message
- Know who solved it
- Celebrate together!

---

## 🎨 Color States

### Timer Colors

```
05:00 → 🟢 GREEN  (plenty of time)
02:59 → 🟡 YELLOW (getting close)
00:59 → 🔴 RED    (almost up!)
00:00 → 🔴 RED    (expired)
```

### Answer Feedback

```
✅ Success → GREEN background
❌ Error   → RED background
⏰ Warning → YELLOW background
```

---

## 📱 Mobile View

```
┌──────────────────────────┐
│ BREAKOUT ROOM            │
│ ROOM 1                   │
│ Heist ID: a3f7b2c1      │
└──────────────────────────┘

┌──────────────────────────┐
│ ✓ Connected: Agent-007   │
└──────────────────────────┘

┌──────────────────────────┐
│ 🧩 MISSION PUZZLE        │
│ [EASY]      ⏱️ 05:00    │
├──────────────────────────┤
│ ENCRYPTED MESSAGE        │
│ Decode transmission      │
│                          │
│ → STEPS:                 │
│ 1. Numbers = letters     │
│ 2. Decode: 8-5-9-19-20  │
│ 3. Combine letters       │
│                          │
│ [ 💡 SHOW HINT ]         │
│                          │
│ SOLUTION:                │
│ [__________________]     │
│ [     SUBMIT      ]      │
└──────────────────────────┘

┌──────────────────────────┐
│ 👥 TEAM (3)              │
│ [A] [T] [N]             │
│ Agent-007, Trinity, Neo  │
└──────────────────────────┘
```

---

## 🎯 Complete Example: All 12 Puzzles

### Quick Solve Guide

**Puzzle 1 - ENCRYPTED MESSAGE**
```
Code: 8-5-9-19-20
Answer: HEIST
Method: Number = alphabet position
```

**Puzzle 2 - BINARY BREACH**
```
Code: 01000011 01001111 01000100 01000101
Answer: CODE
Method: Binary to ASCII
```

**Puzzle 3 - CIPHER MATRIX**
```
Code: KDFN
Answer: HACK
Method: Shift back 3 letters
```

**Puzzle 4 - MATH SEQUENCE**
```
Sequence: 2, 6, 12, 20, 30, ?
Answer: FORTY TWO (or 42)
Method: Gaps increase by 2
```

**Puzzle 5 - LOGIC GRID**
```
Grid: A1=V, A2=I, A3=R, B1=U, B2=S
Path: B2→A2→B2→A1
Answer: VIRUS
```

**Puzzle 6 - REVERSE ENGINEERING**
```
Code: TOOR
Answer: ROOT
Method: Read backwards
```

**Puzzle 7 - KEYPAD CODE**
```
Code: 3-2-8-2
Answer: DATA
Method: Phone keypad (3=DEF, 2=ABC...)
```

**Puzzle 8 - PATTERN RECOGNITION**
```
Words: NET, WEB, LINK, ?
Answer: NODE
Method: Internet terms
```

**Puzzle 9 - MORSE CODE**
```
Code: -.-. .-. -.-- .--. -
Answer: CRYPT
Method: Morse to letters
```

**Puzzle 10 - WORD PUZZLE**
```
Phrase: "Bringing Your Technology Everyday"
Answer: BYTE
Method: First letters
```

**Puzzle 11 - HEX DECODER**
```
Code: 4B 45 59
Answer: KEY
Method: Hex to ASCII
```

**Puzzle 12 - RIDDLE BREACH**
```
Riddle: "Keys but no locks, space but no room"
Answer: KEYBOARD
Method: Logic riddle
```

---

## 🎊 Success Message Examples

**When solved:**
```
┌─────────────────────────────────────┐
│  🎉 CORRECT! Puzzle solved!         │
│  Time taken: 3 minutes 47 seconds   │
│  Great work, Agent-007!              │
└─────────────────────────────────────┘
```

**Team notification:**
```
┌─────────────────────────────────────┐
│  🎊 Agent-007 solved the puzzle!    │
│  Congratulations to the team!        │
└─────────────────────────────────────┘
```

---

**This is exactly how puzzles appear and work in the Cyber Heist app! 🧩**
