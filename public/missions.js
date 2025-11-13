// All Available Missions for Cyber Heist
// Properly formatted JSON data

const MISSIONS = {
  "missions": [
    {
      "id": "mission_obsidian_ledger",
      "title": "Operation Obsidian Ledger",
      "type": "Data Exfiltration",
      "difficulty": "Hard",
      "briefing": "Retrieve the encrypted hard drive and exfiltrate undetected from OmniCorp Server Farm, Sub-Level 4.",
      "timer_settings": {
        "enabled": true,
        "duration_seconds": 300,
        "time_up_message": "CRITICAL FAILURE. Security team has arrived. Mission aborted.",
        "penalty_per_hint": 30
      },
      "steps": [
        {
          "step_id": 1,
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
          "step_id": 2,
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
          "step_id": 3,
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
          "step_id": 4,
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
          "step_id": 5,
          "title": "The Vault Tumblers",
          "location": "Vault Door",
          "narrative": "The lock requires three specific turns.\n1. Turn Right to the degrees in a right angle.\n2. Turn Left to the square root of 144.\n3. Turn Right to the hours in a full day.",
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
          "step_id": 6,
          "title": "The Weight Sensor",
          "location": "Vault Interior",
          "narrative": "The drive weighs exactly 1.2kg. You must swap it with sandbags of equal weight.\nBag A: 0.45kg\nBag B: 0.75kg\nBag C: 0.30kg",
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
          "step_id": 7,
          "title": "The Exfiltration",
          "location": "Exit Airlock",
          "narrative": "The final escape code is a 'Callback Sequence'. Combine:\n1. First digit of Step 1 answer (1).\n2. First number of Step 5 answer (90 -> 9).\n3. Second number of Step 5 answer (12 -> 1).\n4. Third number of Step 5 answer (24 -> 2).",
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
    },
    {
      "id": "mission_01",
      "title": "Mission 1: The Prometheus Breach",
      "type": "Red Team / Intrusion",
      "difficulty": "Easy",
      "briefing": "Authorized penetration test on the Prometheus legacy server. Goal: Gain root access.",
      "timer_settings": {
        "enabled": true,
        "duration_seconds": 300,
        "time_up_message": "Time's up! Security detected your activities.",
        "penalty_per_hint": 30
      },
      "steps": [
        {"step_id": 1, "title": "Reconnaissance", "location": "Remote Terminal", "narrative": "You're targeting 192.168.1.50. Time to scan and identify the server.", "question": "Scanning target 192.168.1.50. Which Nmap flag detects OS and Services?", "input_type": "text", "placeholder": "Enter Nmap flag...", "validation": {"accepted_answers": ["-A", "-sV", "-O"], "success_message": "Scan complete. Services identified.", "fail_message": "Invalid flag."}, "hint": "Use the 'Aggressive' or 'Service Version' flag."},
        {"step_id": 2, "title": "Port Enumeration", "location": "Web Interface", "narrative": "Port 80 is open, serving a web page. Time to dig into the source code.", "question": "Port 80 is open. You view source code. What are you looking for in the HTML?", "input_type": "multiple_choice", "options": [{"label": "API keys", "value": "api"}, {"label": "Comments", "value": "comments"}], "validation": {"correct_value": "comments", "success_message": "Found useful comments!", "fail_message": "Look deeper."}, "hint": "Developers leave TODOs in comments."},
        {"step_id": 3, "title": "Credentials Found", "location": "Login Portal", "narrative": "In the comments you found credentials: 'admin / Start123'. You successfully log in!", "question": "You're logged in. What file extension executes code on PHP servers?", "input_type": "text", "placeholder": "File extension...", "validation": {"accepted_answers": [".php", "php"], "success_message": "Correct. PHP files execute server-side.", "fail_message": "Incorrect file type."}, "hint": "Hypertext Preprocessor."},
        {"step_id": 4, "title": "Bypassing Filters", "location": "Upload Interface", "narrative": "The server has upload functionality, but it blocks .php files. Time to get creative.", "question": "The server blocks .php. What alternative extension might bypass this?", "input_type": "text", "placeholder": "Alternative extension...", "validation": {"accepted_answers": [".php5", ".phtml", ".php3"], "success_message": "Filter bypassed!", "fail_message": "Still blocked."}, "hint": "Try phtml."},
        {"step_id": 5, "title": "The Reverse Shell", "location": "Command Execution", "narrative": "You've uploaded your malicious file. Now set up a listener to catch the connection.", "question": "File uploaded. What Netcat command listens on port 4444?", "input_type": "text", "placeholder": "nc command...", "validation": {"accepted_answers": ["nc -lvnp 4444", "nc -l -p 4444"], "success_message": "Listener active. Shell caught!", "fail_message": "Connection failed."}, "hint": "Listen Verbose Numeric Port."},
        {"step_id": 6, "title": "Privilege Escalation", "location": "Shell Access", "narrative": "You have shell access but limited permissions. Found that /usr/bin/python runs as root.", "question": "You can run /usr/bin/python as root. How do you spawn a shell?", "input_type": "text", "placeholder": "Python command...", "validation": {"accepted_answers": ["import os; os.system('/bin/sh')", "import os;os.system('/bin/sh')"], "success_message": "Root shell spawned!", "fail_message": "Command failed."}, "hint": "Import OS module."},
        {"step_id": 7, "title": "Looting", "location": "Root Access", "narrative": "You are now root! Time to capture the flag and prove your success.", "question": "You are Root. What command reads flag.txt?", "input_type": "text", "placeholder": "Command...", "validation": {"accepted_answers": ["cat flag.txt", "cat /root/flag.txt"], "success_message": "Flag captured! Mission complete.", "fail_message": "File not found."}, "hint": "Concatenate."}
      ]
    },
    {
      "id": "mission_02",
      "title": "Mission 2: Project Nightshade",
      "type": "Blue Team / Forensics",
      "difficulty": "Intermediate",
      "briefing": "Workstation compromised via suspicious download. Analyze the evidence and contain the threat.",
      "timer_settings": {
        "enabled": true,
        "duration_seconds": 300,
        "time_up_message": "Malware has spread to other systems!",
        "penalty_per_hint": 30
      },
      "steps": [
        {"step_id": 1, "title": "The Alert", "location": "Security Console", "narrative": "An employee downloaded 'Invoice.pdf.exe'. Your antivirus flagged it as suspicious.", "question": "User downloaded 'Invoice.pdf.exe'. Why the double extension?", "input_type": "text", "placeholder": "Reason...", "validation": {"accepted_answers": ["Hide file type", "Trick users", "Hide extension"], "success_message": "Correct. Classic social engineering.", "fail_message": "Think about deception."}, "hint": "Windows hides extensions by default."},
        {"step_id": 2, "title": "Hash Analysis", "location": "Forensics Lab", "narrative": "You extracted the file hash. Time to check if it's known malware.", "question": "You have the file hash. Which site is the standard for checking malware hashes?", "input_type": "text", "placeholder": "Website name...", "validation": {"accepted_answers": ["VirusTotal", "virustotal"], "success_message": "Hash submitted. 47/70 engines flagged as malicious.", "fail_message": "Incorrect service."}, "hint": "Owned by Google."},
        {"step_id": 3, "title": "Process Investigation", "location": "Compromised Workstation", "narrative": "The malware is running. You need to identify the malicious process.", "question": "Which PowerShell command lists running processes?", "input_type": "text", "placeholder": "PowerShell command...", "validation": {"accepted_answers": ["Get-Process", "tasklist", "ps"], "success_message": "Process list retrieved.", "fail_message": "Invalid command."}, "hint": "Get-Process."},
        {"step_id": 4, "title": "Network Connection", "location": "Network Analysis", "narrative": "The process is communicating with an external server. Find the connection.", "question": "What command shows network connections mapped to PIDs?", "input_type": "text", "placeholder": "Command...", "validation": {"accepted_answers": ["netstat -ano", "netstat"], "success_message": "Connection found: 192.53.172.91:8080", "fail_message": "Try again."}, "hint": "Network Statistics."},
        {"step_id": 5, "title": "Persistence", "location": "Registry Analysis", "narrative": "The malware needs to survive reboots. Check common persistence locations.", "question": "Where does malware hide to start on reboot?", "input_type": "multiple_choice", "options": [{"label": "Registry Run Key", "value": "run"}, {"label": "Documents", "value": "doc"}], "validation": {"correct_value": "run", "success_message": "Found malware in Run key!", "fail_message": "Check again."}, "hint": "HKLM...Run"},
        {"step_id": 6, "title": "Decoding", "location": "Code Analysis", "narrative": "Found an encoded string in the malware: `aGFja2VyLmNvbQ==`", "question": "Decode Base64: `aGFja2VyLmNvbQ==`", "input_type": "text", "placeholder": "Decoded text...", "validation": {"accepted_answers": ["hacker.com"], "success_message": "Domain decoded successfully.", "fail_message": "Incorrect decoding."}, "hint": "Ends with =."},
        {"step_id": 7, "title": "Containment", "location": "Incident Response", "narrative": "You've identified the threat. Time to contain it before it spreads further.", "question": "What is the immediate containment step?", "input_type": "multiple_choice", "options": [{"label": "Block Network/DNS", "value": "block"}, {"label": "Watch it", "value": "watch"}], "validation": {"correct_value": "block", "success_message": "Threat contained. Network blocked.", "fail_message": "Quick action needed!"}, "hint": "Cut the connection."}
      ]
    },
    {
      "id": "mission_03",
      "title": "Mission 3: The Silicon Siege",
      "type": "Physical / Social Engineering",
      "difficulty": "Hard",
      "briefing": "Physically infiltrate a high-security facility to plant a listening device.",
      "timer_settings": {
        "enabled": true,
        "duration_seconds": 300,
        "time_up_message": "Security guards spotted you!",
        "penalty_per_hint": 30
      },
      "steps": [
        {"step_id": 1, "title": "Cloning", "location": "Parking Lot", "narrative": "You need to clone an employee's RFID access card to enter the building.", "question": "What tool clones RFID access cards?", "input_type": "text", "placeholder": "Tool name...", "validation": {"accepted_answers": ["Proxmark3", "Flipper Zero", "Proxmark"], "success_message": "Card cloned successfully.", "fail_message": "Wrong tool."}, "hint": "Proxmark."},
        {"step_id": 2, "title": "Entry", "location": "Main Entrance", "narrative": "An employee is entering. You casually walk through the door behind them.", "question": "Following someone through a door is called?", "input_type": "text", "placeholder": "Attack name...", "validation": {"accepted_answers": ["Tailgating", "Piggybacking"], "success_message": "You're inside!", "fail_message": "Try again."}, "hint": "Like a tail."},
        {"step_id": 3, "title": "Pretext", "location": "Lobby", "narrative": "Security asks what you're doing. You show fake credentials claiming to be HVAC repair.", "question": "You pretend to be HVAC repair. This is:", "input_type": "text", "placeholder": "Technique...", "validation": {"accepted_answers": ["Pretexting"], "success_message": "They believe you. Access granted.", "fail_message": "Not quite."}, "hint": "Creating a scenario."},
        {"step_id": 4, "title": "Lockpicking", "location": "Server Room Door", "narrative": "The server room is locked. Time to pick it.", "question": "Tool used with a tension wrench to lift pins?", "input_type": "text", "placeholder": "Tool...", "validation": {"accepted_answers": ["Pick", "Rake", "Lock pick"], "success_message": "Lock picked!", "fail_message": "Incorrect tool."}, "hint": "Lock pick."},
        {"step_id": 5, "title": "Baiting", "location": "Office Floor", "narrative": "You drop a USB drive labeled 'Salary Data 2025' near the finance department.", "question": "Leaving a USB drive on the floor is called?", "input_type": "text", "placeholder": "Attack type...", "validation": {"accepted_answers": ["Baiting", "USB Drop"], "success_message": "Someone will plug it in soon...", "fail_message": "Think about luring."}, "hint": "Like fishing."},
        {"step_id": 6, "title": "Keylogger", "location": "Executive Office", "narrative": "You're in the CFO's office. Time to install a hardware keylogger.", "question": "Where do you install a hardware keylogger?", "input_type": "multiple_choice", "options": [{"label": "Between Keyboard and PC", "value": "kb"}, {"label": "Inside monitor", "value": "mon"}], "validation": {"correct_value": "kb", "success_message": "Keylogger installed.", "fail_message": "Wrong location."}, "hint": "Intercepts USB."},
        {"step_id": 7, "title": "Exfiltration", "location": "Exit Route", "narrative": "Mission complete. You need to exit through a hallway with PIR motion sensors.", "question": "Tool to trick a PIR motion sensor?", "input_type": "text", "placeholder": "Tool...", "validation": {"accepted_answers": ["Compressed Air", "Canned Air"], "success_message": "Sensors fooled. Clean exit!", "fail_message": "Alarm triggered!"}, "hint": "Cold air clouds."}
      ]
    },
    {
      "id": "mission_04",
      "title": "Mission 4: The Wireless War",
      "type": "Network Security",
      "difficulty": "Intermediate",
      "briefing": "Audit the corporate Wi-Fi network 'Corp_Secure'.",
      "timer_settings": {
        "enabled": true,
        "duration_seconds": 300,
        "time_up_message": "Network admin detected your activities!",
        "penalty_per_hint": 30
      },
      "steps": [
        {"step_id": 1, "title": "Mode", "location": "Remote Location", "narrative": "You need to capture Wi-Fi packets to analyze the network.", "question": "Switch Wi-Fi card to what mode to capture packets?", "input_type": "text", "placeholder": "Mode name...", "validation": {"accepted_answers": ["Monitor", "Monitor Mode"], "success_message": "Interface in monitor mode.", "fail_message": "Wrong mode."}, "hint": "Not Managed."},
        {"step_id": 2, "title": "Handshake", "location": "Packet Analysis", "narrative": "You're listening to network traffic to capture authentication data.", "question": "What 4-step exchange contains the password hash?", "input_type": "text", "placeholder": "Exchange name...", "validation": {"accepted_answers": ["Handshake", "4-way handshake", "WPA Handshake", "4 way handshake"], "success_message": "Handshake captured!", "fail_message": "Keep looking."}, "hint": "WPA Handshake."},
        {"step_id": 3, "title": "Deauth", "location": "Active Attack", "narrative": "Force users to reconnect so you can capture their handshake.", "question": "Attack to disconnect users?", "input_type": "text", "placeholder": "Attack type...", "validation": {"accepted_answers": ["Deauth", "Deauthentication"], "success_message": "Users disconnected. Handshakes captured.", "fail_message": "Try again."}, "hint": "Kick them off."},
        {"step_id": 4, "title": "Wordlist", "location": "Password Cracking", "narrative": "Time to crack the captured WPA handshake using a dictionary attack.", "question": "Famous Kali Linux wordlist?", "input_type": "text", "placeholder": "Filename...", "validation": {"accepted_answers": ["rockyou.txt", "rockyou"], "success_message": "Wordlist loaded. Cracking in progress...", "fail_message": "Wrong file."}, "hint": "RockYou."},
        {"step_id": 5, "title": "Evil Twin", "location": "Rogue Access Point", "narrative": "Set up a fake access point to intercept user traffic.", "question": "Creating a fake AP with the same name?", "input_type": "text", "placeholder": "Attack name...", "validation": {"accepted_answers": ["Evil Twin"], "success_message": "Evil Twin AP deployed!", "fail_message": "Incorrect."}, "hint": "Identical copy."},
        {"step_id": 6, "title": "Phishing", "location": "Credential Harvesting", "narrative": "Users are connecting to your fake AP. Show them a fake login page.", "question": "Fake login page shown on connection?", "input_type": "text", "placeholder": "Portal type...", "validation": {"accepted_answers": ["Captive Portal", "Portal", "Captive"], "success_message": "Captive portal active. Credentials incoming...", "fail_message": "Not quite."}, "hint": "Like hotels."},
        {"step_id": 7, "title": "WIPS", "location": "Defense Mechanism", "narrative": "The security team has a system to detect your Evil Twin attack.", "question": "System that detects Evil Twins?", "input_type": "multiple_choice", "options": [{"label": "WIPS", "value": "wips"}, {"label": "IDS", "value": "ids"}], "validation": {"correct_value": "wips", "success_message": "Correct! Time to evade WIPS...", "fail_message": "Wrong system."}, "hint": "Wireless Intrusion Prevention."}
      ]
    },
    {
      "id": "mission_05",
      "title": "Mission 5: The Crypto Challenge",
      "type": "Cryptography",
      "difficulty": "Expert",
      "briefing": "Break layers of encryption to read the syndicate's message.",
      "timer_settings": {
        "enabled": true,
        "duration_seconds": 300,
        "time_up_message": "Message self-destructed!",
        "penalty_per_hint": 30
      },
      "steps": [
        {"step_id": 1, "title": "Binary", "location": "Layer 1", "narrative": "The first layer is binary encoded.", "question": "Decode: 01001000 01001001", "input_type": "text", "placeholder": "Decoded text...", "validation": {"accepted_answers": ["HI", "Hi"], "success_message": "Layer 1 decoded!", "fail_message": "Check your ASCII table."}, "hint": "ASCII."},
        {"step_id": 2, "title": "Caesar", "location": "Layer 2", "narrative": "Next layer uses a classic substitution cipher.", "question": "Decode 'URRW' (Shift -3).", "input_type": "text", "placeholder": "Decoded word...", "validation": {"accepted_answers": ["ROOT", "root"], "success_message": "Caesar cipher broken!", "fail_message": "Shift backwards."}, "hint": "R-S-T-U."},
        {"step_id": 3, "title": "Hex", "location": "Layer 3", "narrative": "Hexadecimal encoding detected.", "question": "Decode: 50 61 73 73", "input_type": "text", "placeholder": "Decoded text...", "validation": {"accepted_answers": ["Pass", "PASS"], "success_message": "Hex decoded successfully!", "fail_message": "Convert hex to text."}, "hint": "Hex to Text."},
        {"step_id": 4, "title": "Vigenere", "location": "Layer 4", "narrative": "This cipher uses a keyword for encryption.", "question": "Cipher using a Keyword?", "input_type": "text", "placeholder": "Cipher name...", "validation": {"accepted_answers": ["Vigenere"], "success_message": "Vigenere cipher identified!", "fail_message": "Think polyalphabetic."}, "hint": "Polyalphabetic."},
        {"step_id": 5, "title": "Hashing", "location": "Crypto Theory", "narrative": "You found an MD5 hash. Can you decrypt it directly?", "question": "Can you reverse MD5 without brute force?", "input_type": "multiple_choice", "options": [{"label": "Yes", "value": "yes"}, {"label": "No, it's one-way", "value": "no"}], "validation": {"correct_value": "no", "success_message": "Correct! Hashing is one-way.", "fail_message": "Think about hash properties."}, "hint": "Hashing is destructive."},
        {"step_id": 6, "title": "RSA", "location": "Public Key Crypto", "narrative": "RSA public key found. Can you decrypt the message with it?", "question": "Can you decrypt with a Public Key?", "input_type": "multiple_choice", "options": [{"label": "Yes", "value": "yes"}, {"label": "No", "value": "no"}], "validation": {"correct_value": "no", "success_message": "Correct! Need the private key.", "fail_message": "Review asymmetric encryption."}, "hint": "Need Private key."},
        {"step_id": 7, "title": "History", "location": "Final Challenge", "narrative": "The last clue references WWII cryptography history.", "question": "Machine used to break Enigma?", "input_type": "text", "placeholder": "Machine name...", "validation": {"accepted_answers": ["Bombe", "The Bombe"], "success_message": "Message fully decrypted! Mission complete.", "fail_message": "Think Bletchley Park."}, "hint": "Alan Turing."}
      ]
    },
    {
      "id": "mission_06",
      "title": "Mission 6: The Poisoned Package",
      "type": "AppSec / Supply Chain",
      "difficulty": "Intermediate",
      "briefing": "Malicious library detected in build pipeline.",
      "timer_settings": {
        "enabled": true,
        "duration_seconds": 300,
        "time_up_message": "Malicious code deployed to production!",
        "penalty_per_hint": 30
      },
      "steps": [
        {"step_id": 1, "title": "List Packages", "location": "Development Environment", "narrative": "First, audit all installed packages in the project.", "question": "Command to list node packages?", "input_type": "text", "placeholder": "npm command...", "validation": {"accepted_answers": ["npm list", "npm ls"], "success_message": "Package list retrieved.", "fail_message": "Wrong command."}, "hint": "npm list."},
        {"step_id": 2, "title": "Typosquatting", "location": "Package Analysis", "narrative": "Found suspicious package 'color-v2' instead of the legitimate 'colors'.", "question": "Using `color-v2` instead of `colors` is called?", "input_type": "text", "placeholder": "Attack name...", "validation": {"accepted_answers": ["Typosquatting"], "success_message": "Typosquatting attack identified!", "fail_message": "Think about spelling tricks."}, "hint": "Typing error."},
        {"step_id": 3, "title": "Eval", "location": "Code Review", "narrative": "Reviewing the malicious package source code.", "question": "Found `eval(base64)`. This is:", "input_type": "multiple_choice", "options": [{"label": "Safe", "value": "safe"}, {"label": "Malicious", "value": "mal"}], "validation": {"correct_value": "mal", "success_message": "Red flag detected!", "fail_message": "Eval executes arbitrary code."}, "hint": "Executes hidden code."},
        {"step_id": 4, "title": "CVE", "location": "Vulnerability Database", "narrative": "Check if this vulnerability has been reported.", "question": "Database of vulnerabilities?", "input_type": "text", "placeholder": "Database name...", "validation": {"accepted_answers": ["CVE"], "success_message": "CVE database searched.", "fail_message": "Standard vuln database."}, "hint": "Common Vuln & Exposures."},
        {"step_id": 5, "title": "Uninstall", "location": "Remediation", "narrative": "Remove the malicious package immediately.", "question": "Command to remove package?", "input_type": "text", "placeholder": "Full command...", "validation": {"accepted_answers": ["npm uninstall color-v2", "npm remove color-v2"], "success_message": "Malicious package removed!", "fail_message": "Include package name."}, "hint": "uninstall."},
        {"step_id": 6, "title": "Locking", "location": "Prevention", "narrative": "Prevent future unauthorized package changes.", "question": "File that locks versions?", "input_type": "text", "placeholder": "Filename...", "validation": {"accepted_answers": ["package-lock.json"], "success_message": "Dependencies locked.", "fail_message": "Think about npm lock files."}, "hint": "lock.json"},
        {"step_id": 7, "title": "SCA", "location": "Security Tooling", "narrative": "Implement automated dependency scanning.", "question": "Tool that scans dependencies?", "input_type": "text", "placeholder": "Tool type...", "validation": {"accepted_answers": ["SCA", "Software Composition Analysis"], "success_message": "SCA tool deployed. Supply chain secured!", "fail_message": "Software Composition..."}, "hint": "Software Composition Analysis."}
      ]
    },
    {
      "id": "mission_07",
      "title": "Mission 7: The Insider",
      "type": "DLP / Insider Threat",
      "difficulty": "Hard",
      "briefing": "Investigate employee data theft.",
      "timer_settings": {
        "enabled": true,
        "duration_seconds": 300,
        "time_up_message": "Evidence destroyed!",
        "penalty_per_hint": 30
      },
      "steps": [
        {"step_id": 1, "title": "Logs", "location": "Security Operations Center", "narrative": "Badge logs show unusual activity.", "question": "Office entry at 3AM Sunday is:", "input_type": "multiple_choice", "options": [{"label": "Normal", "value": "no"}, {"label": "Anomaly", "value": "yes"}], "validation": {"correct_value": "yes", "success_message": "Suspicious activity flagged!", "fail_message": "Review typical work hours."}, "hint": "Not normal."},
        {"step_id": 2, "title": "DLP", "location": "Prevention Systems", "narrative": "The company needs to prevent data exfiltration.", "question": "System to stop printing/USB theft?", "input_type": "text", "placeholder": "System name...", "validation": {"accepted_answers": ["DLP", "Data Loss Prevention"], "success_message": "DLP system identified.", "fail_message": "Data Loss..."}, "hint": "Loss Prevention."},
        {"step_id": 3, "title": "USB ID", "location": "Device Forensics", "narrative": "A USB drive was used. Track it down.", "question": "Unique ID for USB hardware?", "input_type": "text", "placeholder": "ID type...", "validation": {"accepted_answers": ["Device Instance ID", "Serial Number", "Device ID"], "success_message": "USB device tracked.", "fail_message": "Every device has unique ID."}, "hint": "UID."},
        {"step_id": 4, "title": "Exfiltration", "location": "Network Analysis", "narrative": "Large data transfer detected leaving the network.", "question": "Moving data OUT of network?", "input_type": "text", "placeholder": "Process name...", "validation": {"accepted_answers": ["Exfiltration"], "success_message": "Exfiltration detected!", "fail_message": "Think about data leaving."}, "hint": "Exit."},
        {"step_id": 5, "title": "Stego", "location": "Image Analysis", "narrative": "Employee sent images via email. Hidden data suspected.", "question": "Hiding files in images?", "input_type": "text", "placeholder": "Technique...", "validation": {"accepted_answers": ["Steganography", "Stego"], "success_message": "Hidden files found in images!", "fail_message": "Data hiding technique."}, "hint": "Stego."},
        {"step_id": 6, "title": "Legal Hold", "location": "Legal Department", "narrative": "Case going to court. Preserve all evidence.", "question": "Preserving data for court?", "input_type": "text", "placeholder": "Process name...", "validation": {"accepted_answers": ["Legal Hold"], "success_message": "Evidence preserved.", "fail_message": "Legal requirement."}, "hint": "Hold."},
        {"step_id": 7, "title": "PoLP", "location": "Root Cause Analysis", "narrative": "Employee had admin access they didn't need.", "question": "Principle limiting access?", "input_type": "text", "placeholder": "Principle...", "validation": {"accepted_answers": ["Least Privilege"], "success_message": "Access controls improved. Insider threat mitigated!", "fail_message": "Minimum necessary access."}, "hint": "Minimum access."}
      ]
    },
    {
      "id": "mission_08",
      "title": "Mission 8: The Leaky Bucket",
      "type": "Cloud Security",
      "difficulty": "Intermediate",
      "briefing": "Secure an exposed AWS S3 bucket.",
      "timer_settings": {
        "enabled": true,
        "duration_seconds": 300,
        "time_up_message": "Data breach reported in media!",
        "penalty_per_hint": 30
      },
      "steps": [
        {"step_id": 1, "title": "S3", "location": "AWS Console", "narrative": "Reviewing the cloud storage service.", "question": "S3 stands for?", "input_type": "text", "placeholder": "Full name...", "validation": {"accepted_answers": ["Simple Storage Service"], "success_message": "Correct! AWS S3 identified.", "fail_message": "Amazon's object storage."}, "hint": "Simple Storage."},
        {"step_id": 2, "title": "Public", "location": "Bucket Permissions", "narrative": "Anyone can list the bucket files. This is a problem.", "question": "If anyone can list files, permission is?", "input_type": "text", "placeholder": "Access level...", "validation": {"accepted_answers": ["Public", "Anonymous"], "success_message": "Public access confirmed!", "fail_message": "Think open access."}, "hint": "Everyone."},
        {"step_id": 3, "title": "PII", "location": "Data Classification", "narrative": "Bucket contains Social Security Numbers and emails.", "question": "SSNs and Emails are?", "input_type": "text", "placeholder": "Data type...", "validation": {"accepted_answers": ["PII", "Personally Identifiable Information"], "success_message": "Sensitive data identified!", "fail_message": "Personal information."}, "hint": "Personal info."},
        {"step_id": 4, "title": "Block", "location": "S3 Settings", "narrative": "Apply AWS security feature to prevent public access.", "question": "AWS feature to stop this?", "input_type": "multiple_choice", "options": [{"label": "Block Public Access", "value": "block"}, {"label": "Delete Bucket", "value": "del"}], "validation": {"correct_value": "block", "success_message": "Public access blocked!", "fail_message": "AWS has a specific feature."}, "hint": "Block Public Access."},
        {"step_id": 5, "title": "Policy", "location": "IAM Configuration", "narrative": "Define who can access the bucket using JSON.", "question": "JSON doc controlling access?", "input_type": "text", "placeholder": "Document type...", "validation": {"accepted_answers": ["Bucket Policy", "Policy"], "success_message": "Access policy configured.", "fail_message": "Controls permissions."}, "hint": "Policy."},
        {"step_id": 6, "title": "Encryption", "location": "Data Protection", "narrative": "Encrypt data at rest using AWS key management.", "question": "AWS service for keys?", "input_type": "text", "placeholder": "Service name...", "validation": {"accepted_answers": ["KMS", "Key Management Service"], "success_message": "Encryption enabled with KMS!", "fail_message": "Key Management..."}, "hint": "Key Mgmt Service."},
        {"step_id": 7, "title": "Logging", "location": "Audit Trail", "narrative": "Track all API calls for security auditing.", "question": "AWS Audit logs?", "input_type": "text", "placeholder": "Service name...", "validation": {"accepted_answers": ["CloudTrail"], "success_message": "Logging enabled. S3 bucket secured!", "fail_message": "Trail of events."}, "hint": "CloudTrail."}
      ]
    },
    {
      "id": "mission_09",
      "title": "Mission 9: Android Anatomy",
      "type": "Mobile Security",
      "difficulty": "Advanced",
      "briefing": "Reverse engineer a malicious APK.",
      "timer_settings": {
        "enabled": true,
        "duration_seconds": 300,
        "time_up_message": "Malware spread to other devices!",
        "penalty_per_hint": 30
      },
      "steps": [
        {"step_id": 1, "title": "Format", "location": "File Analysis", "narrative": "You received a suspicious Android application.", "question": "Android file extension?", "input_type": "text", "placeholder": "Extension...", "validation": {"accepted_answers": ["APK", ".apk", "apk"], "success_message": "APK file identified.", "fail_message": "Android Package."}, "hint": "APK."},
        {"step_id": 2, "title": "Decompile", "location": "Reverse Engineering", "narrative": "Extract the source code from the compiled APK.", "question": "Tool to decompile APK?", "input_type": "text", "placeholder": "Tool name...", "validation": {"accepted_answers": ["APKTool", "JADX"], "success_message": "APK decompiled successfully!", "fail_message": "Popular RE tool."}, "hint": "APKTool."},
        {"step_id": 3, "title": "Manifest", "location": "Permission Analysis", "narrative": "Check what permissions the app requests.", "question": "File defining permissions?", "input_type": "text", "placeholder": "Filename...", "validation": {"accepted_answers": ["AndroidManifest.xml", "Manifest"], "success_message": "Manifest analyzed. Suspicious permissions found!", "fail_message": "XML configuration file."}, "hint": "Manifest."},
        {"step_id": 4, "title": "C2", "location": "Network Traffic", "narrative": "App is communicating with a remote server.", "question": "Server controlling malware?", "input_type": "text", "placeholder": "Server type...", "validation": {"accepted_answers": ["C2", "Command and Control", "C&C"], "success_message": "C2 server identified!", "fail_message": "Command & Control."}, "hint": "Command & Control."},
        {"step_id": 5, "title": "Obfuscation", "location": "Code Analysis", "narrative": "Variable names are meaningless: 'a', 'b', 'c'...", "question": "Renaming variables to 'a', 'b'?", "input_type": "text", "placeholder": "Technique...", "validation": {"accepted_answers": ["Obfuscation"], "success_message": "Code obfuscation detected!", "fail_message": "Hiding code meaning."}, "hint": "Hiding code logic."},
        {"step_id": 6, "title": "Overlay", "location": "Attack Vector", "narrative": "Malware displays fake login screen over banking apps.", "question": "Fake window over banking app?", "input_type": "text", "placeholder": "Attack type...", "validation": {"accepted_answers": ["Overlay Attack", "Tapjacking"], "success_message": "Overlay attack identified!", "fail_message": "Fake UI layer."}, "hint": "Overlay."},
        {"step_id": 7, "title": "Protect", "location": "Defense Mechanism", "narrative": "Google's built-in malware scanner for Play Store.", "question": "Google Play scanner?", "input_type": "text", "placeholder": "Service name...", "validation": {"accepted_answers": ["Play Protect"], "success_message": "Malware analysis complete!", "fail_message": "Built into Play Store."}, "hint": "Play Protect."}
      ]
    },
    {
      "id": "mission_10",
      "title": "Mission 10: Zero Trust",
      "type": "Architecture",
      "difficulty": "Expert",
      "briefing": "Prove how Zero Trust saved the CEO's laptop.",
      "timer_settings": {
        "enabled": true,
        "duration_seconds": 300,
        "time_up_message": "CEO credentials compromised!",
        "penalty_per_hint": 30
      },
      "steps": [
        {"step_id": 1, "title": "Motto", "location": "Security Philosophy", "narrative": "The core principle of Zero Trust architecture.", "question": "Zero Trust motto?", "input_type": "text", "placeholder": "Motto...", "validation": {"accepted_answers": ["Never Trust, Always Verify", "Never Trust Always Verify", "Always Verify", "Verify Explicitly"], "success_message": "Zero Trust principle established!", "fail_message": "Verify everything."}, "hint": "Verify Explicitly."},
        {"step_id": 2, "title": "MFA", "location": "Authentication", "narrative": "CEO needs code from phone in addition to password.", "question": "Code from phone required?", "input_type": "text", "placeholder": "Auth type...", "validation": {"accepted_answers": ["MFA", "2FA", "Multi-Factor Authentication", "Two-Factor Authentication", "Multi Factor", "Two Factor"], "success_message": "MFA enforced!", "fail_message": "Multiple factors."}, "hint": "Multi-Factor."},
        {"step_id": 3, "title": "TPM", "location": "Hardware Security", "narrative": "Laptop has dedicated chip for cryptographic operations.", "question": "Chip storing crypto keys?", "input_type": "text", "placeholder": "Chip name...", "validation": {"accepted_answers": ["TPM", "Trusted Platform Module"], "success_message": "TPM chip validated!", "fail_message": "Trusted Platform..."}, "hint": "Trusted Platform Module."},
        {"step_id": 4, "title": "Segmentation", "location": "Network Architecture", "narrative": "Internal network divided into isolated security zones.", "question": "Isolating network zones?", "input_type": "text", "placeholder": "Technique...", "validation": {"accepted_answers": ["Micro-segmentation", "Segmentation", "Microsegmentation", "Network Segmentation"], "success_message": "Network segmented!", "fail_message": "Micro level zones."}, "hint": "Segmentation."},
        {"step_id": 5, "title": "EDR", "location": "Endpoint Protection", "narrative": "Security agent running on CEO's laptop.", "question": "Agent handling detection?", "input_type": "text", "placeholder": "Solution type...", "validation": {"accepted_answers": ["EDR", "Endpoint Detection and Response", "Endpoint Detection", "XDR"], "success_message": "EDR deployed!", "fail_message": "Endpoint Detection..."}, "hint": "Endpoint Detection."},
        {"step_id": 6, "title": "Least Priv", "location": "Access Control", "narrative": "CEO doesn't have admin rights on their own laptop.", "question": "No Admin rights?", "input_type": "text", "placeholder": "Principle...", "validation": {"accepted_answers": ["Least Privilege"], "success_message": "Least Privilege enforced!", "fail_message": "Minimum necessary."}, "hint": "Lowest access."},
        {"step_id": 7, "title": "MDM", "location": "Device Management", "narrative": "Laptop stolen! IT remotely wipes all company data.", "question": "System for remote wipe?", "input_type": "text", "placeholder": "System type...", "validation": {"accepted_answers": ["MDM", "Mobile Device Management"], "success_message": "Zero Trust architecture validated. CEO protected!", "fail_message": "Mobile Device..."}, "hint": "Mobile Device Mgmt."}
      ]
    }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MISSIONS };
}
