// Cyber Heist Mission Configuration
// Load all available missions

// Import missions data
let MISSIONS_DATA = null;

// Load missions from missions.js
async function loadMissionsData() {
  try {
    const response = await fetch('/missions.js');
    const text = await response.text();
    // Execute the script content to get MISSIONS object
    eval(text);
    MISSIONS_DATA = MISSIONS;
  } catch (error) {
    console.error('Error loading missions:', error);
  }
}

// Get mission by ID
function getMissionById(missionId) {
  if (!MISSIONS_DATA || !MISSIONS_DATA.missions) {
    console.error('Missions not loaded');
    return null;
  }
  return MISSIONS_DATA.missions.find(m => m.id === missionId);
}

// Default mission (for backward compatibility)
const MISSION = {
  "meta": {
    "id": "mission_obsidian_ledger",
    "title": "Operation Obsidian Ledger",
    "target": "OmniCorp Server Farm, Sub-Level 4",
    "objective": "Retrieve the encrypted hard drive and exfiltrate undetected.",
    "difficulty": "Hard",
    "timer_settings": {
      "enabled": true,
      "duration_seconds": 600,
      "time_up_message": "CRITICAL FAILURE. Security team has arrived. Mission aborted.",
      "penalty_per_hint": 30
    }
  },
  "steps": [
    {
      "id": 1,
      "title": "The Service Entrance",
      "location": "Back Alley",
      "narrative": "You are at the back entrance. Thermal imaging shows heat signatures on four specific numbers: 1, 3, 5, and 7. Scratched into the metal frame is the phrase: 'Order from Chaos: strictly ascending.'",
      "question": "What is the 4-digit entry code?",
      "input_type": "numpad",
      "placeholder": "Enter 4-digit code...",
      "hint": "Ascending means lowest to highest. Use all four highlighted numbers in that order.",
      "validation": {
        "accepted_answers": ["1357", "1-3-5-7", "1 3 5 7"],
        "success_message": "Access Granted. Door unlocking.",
        "fail_message": "Error. Biometric mismatch."
      }
    },
    {
      "id": 2,
      "title": "The Laser Hallway",
      "location": "Corridor A",
      "narrative": "The corridor is blocked by a laser grid. The lasers flash in Morse Code. You must step through in the order that spells the founder's name: A-L-A-N.",
      "clues": [
        { "label": "Pattern 1", "value": ".- (A)" },
        { "label": "Pattern 2", "value": "-... (B)" },
        { "label": "Pattern 3", "value": ".-.. (L)" },
        { "label": "Pattern 4", "value": "-. (N)" }
      ],
      "question": "Select the correct sequence of patterns to cross safely:",
      "input_type": "multiple_choice",
      "hint": "You need to spell ALAN. Look at the patterns: A matches Pattern 1, L matches Pattern 3.",
      "options": [
        { "id": "opt_a", "label": "Pattern 1 - 2 - 1 - 4", "value": "1-2-1-4" },
        { "id": "opt_b", "label": "Pattern 1 - 3 - 1 - 4", "value": "1-3-1-4" },
        { "id": "opt_c", "label": "Pattern 3 - 1 - 3 - 4", "value": "3-1-3-4" }
      ],
      "validation": {
        "correct_value": "1-3-1-4",
        "success_message": "Laser grid disabled.",
        "fail_message": "Alarm triggered! Lasers active."
      }
    },
    {
      "id": 3,
      "title": "The Guard Station",
      "location": "Security Desk",
      "narrative": "You need a voice-print password. A sticky note says: 'The answer is what keeps you awake.' A periodic table mug highlights Calcium (20) and Iron (26).",
      "question": "Combine the chemical symbols to form the password:",
      "input_type": "text",
      "placeholder": "e.g., H2O",
      "hint": "The chemical symbol for Calcium is 'Ca'. The symbol for Iron is 'Fe'. Put them together.",
      "validation": {
        "accepted_answers": ["CaFe", "CAFE", "cafe"],
        "success_message": "Voice print accepted.",
        "fail_message": "Invalid chemical compound."
      }
    },
    {
      "id": 4,
      "title": "The Firewall",
      "location": "Vault Terminal",
      "narrative": "You are hacking the terminal. The screen displays the letters: N - O - R - I. The prompt reads: 'I am strong, I am metal. Unscramble me to pass.'",
      "question": "What is the password?",
      "input_type": "text",
      "placeholder": "Enter password...",
      "hint": "It is an anagram. Rearrange the letters N-O-R-I to spell a common metal used in construction.",
      "validation": {
        "accepted_answers": ["IRON", "Iron", "iron"],
        "success_message": "Firewall breached. Lock exposed.",
        "fail_message": "Access Denied."
      }
    },
    {
      "id": 5,
      "title": "The Vault Tumblers",
      "location": "Vault Door",
      "narrative": "The lock requires three specific turns. \n1. Turn Right to the degrees in a right angle. \n2. Turn Left to the square root of 144. \n3. Turn Right to the hours in a full day.",
      "question": "Enter the combination sequence (Format: R-XX, L-XX, R-XX)",
      "input_type": "text",
      "placeholder": "R-00, L-00, R-00",
      "hint": "A right angle is 90 degrees. 12 times 12 is 144. There are 24 hours in a day.",
      "validation": {
        "accepted_answers": ["R-90, L-12, R-24", "R90 L12 R24", "90 12 24"],
        "success_message": "Tumblers aligned. Door opening.",
        "fail_message": "Mechanism jammed."
      }
    },
    {
      "id": 6,
      "title": "The Weight Sensor",
      "location": "Vault Interior",
      "narrative": "The drive weighs exactly 1.2kg. You must swap it with sandbags of equal weight. \nBag A: 0.45kg \nBag B: 0.75kg \nBag C: 0.30kg",
      "question": "Which bags do you place on the sensor?",
      "input_type": "multi_select",
      "hint": "Do the math: 0.45 + 0.75 equals 1.20.",
      "options": [
        { "id": "bag_a", "label": "Bag A (0.45kg)", "value": "A" },
        { "id": "bag_b", "label": "Bag B (0.75kg)", "value": "B" },
        { "id": "bag_c", "label": "Bag C (0.30kg)", "value": "C" }
      ],
      "validation": {
        "correct_set": ["A", "B"],
        "success_message": "Weight matches. No alarm.",
        "fail_message": "Weight discrepancy detected!"
      }
    },
    {
      "id": 7,
      "title": "The Exfiltration",
      "location": "Exit Airlock",
      "narrative": "The final escape code is a 'Callback Sequence'. Combine: \n1. First digit of Step 1 answer (1). \n2. First number of Step 5 answer (90 -> 9). \n3. Second number of Step 5 answer (12 -> 1). \n4. Third number of Step 5 answer (24 -> 2).",
      "question": "What is the final escape code?",
      "input_type": "numpad",
      "placeholder": "----",
      "hint": "Look at your previous answers. Step 1 was 1357 (take the 1). Step 5 was 90, 12, 24 (take the 9, 1, and 2).",
      "validation": {
        "accepted_answers": ["1912"],
        "success_message": "Airlock opening. Mission accomplished.",
        "fail_message": "Containment field active."
      }
    }
  ]
};

// Function to convert mission format
function convertMissionFormat(missionData) {
  return {
    meta: {
      id: missionData.id,
      title: missionData.title,
      target: missionData.type,
      objective: missionData.briefing,
      difficulty: missionData.difficulty,
      timer_settings: missionData.timer_settings
    },
    steps: missionData.steps.map(step => ({
      id: step.step_id,
      title: step.title,
      location: step.location || "",
      narrative: step.narrative || "",
      question: step.question,
      input_type: step.input_type,
      placeholder: step.placeholder || "",
      hint: step.hint || "",
      options: step.options || [],
      clues: step.clues || [],
      validation: step.validation
    }))
  };
}

// Function to get the mission
function getMission() {
  return MISSION;
}

// Function to get mission by ID and convert to proper format
function getMissionByIdFormatted(missionId) {
  const missionData = getMissionById(missionId);
  if (!missionData) {
    return MISSION; // fallback to default
  }
  return convertMissionFormat(missionData);
}

// Function to get specific step
function getStep(stepId) {
  return MISSION.steps.find(step => step.id === stepId);
}

// Function to validate answer based on input type
function validateAnswer(userAnswer, step) {
  const validation = step.validation;
  
  // For text and numpad inputs
  if (step.input_type === 'text' || step.input_type === 'numpad') {
    const normalized = userAnswer.toUpperCase().trim().replace(/\s+/g, '');
    
    for (let acceptedAnswer of validation.accepted_answers) {
      const acceptedNormalized = acceptedAnswer.toUpperCase().trim().replace(/\s+/g, '');
      if (normalized === acceptedNormalized) {
        return { success: true, message: validation.success_message };
      }
    }
    return { success: false, message: validation.fail_message };
  }
  
  // For multiple choice
  if (step.input_type === 'multiple_choice') {
    const normalized = userAnswer.trim();
    if (normalized === validation.correct_value) {
      return { success: true, message: validation.success_message };
    }
    return { success: false, message: validation.fail_message };
  }
  
  // For multi-select
  if (step.input_type === 'multi_select') {
    const selectedSet = Array.isArray(userAnswer) ? userAnswer.sort() : [userAnswer];
    const correctSet = validation.correct_set.sort();
    
    if (JSON.stringify(selectedSet) === JSON.stringify(correctSet)) {
      return { success: true, message: validation.success_message };
    }
    return { success: false, message: validation.fail_message };
  }
  
  return { success: false, message: 'Invalid input type' };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MISSION,
    getMission,
    getMissionById,
    getMissionByIdFormatted,
    loadMissionsData,
    getStep,
    validateAnswer
  };
}
