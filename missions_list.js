

 {
      "id": "mission_01", "title": "Mission 1: The Prometheus Breach", "type": "Red Team / Intrusion", "difficulty": "Easy",
      "briefing": "Authorized penetration test on the Prometheus legacy server. Goal: Gain root access.",
      "steps": [
        {"step_id": 1, "title": "Reconnaissance", "question": "Scanning target 192.168.1.50. Which Nmap flag detects OS and Services?", "input_type": "text", "validation": {"accepted_answers": ["-A", "-sV", "-O"]}, "hint": "Use the 'Aggressive' or 'Service Version' flag."},
        {"step_id": 2, "title": "Port Enumeration", "question": "Port 80 is open. You view source code. What are you looking for in the HTML?", "input_type": "multiple_choice", "options": [{"label": "API keys", "value": "api"}, {"label": "Comments", "value": "comments"}], "validation": {"correct_value": "comments"}, "hint": "Developers leave TODOs in comments."},
        {"step_id": 3, "title": "Credentials Found", "question": "Found: 'admin / Start123'. You login. What file extension executes code on PHP servers?", "input_type": "text", "validation": {"accepted_answers": [".php", "php"]}, "hint": "Hypertext Preprocessor."},
        {"step_id": 4, "title": "Bypassing Filters", "question": "The server blocks .php. What alternative extension might bypass this?", "input_type": "text", "validation": {"accepted_answers": [".php5", ".phtml", ".php3"]}, "hint": "Try phtml."},
        {"step_id": 5, "title": "The Reverse Shell", "question": "File uploaded. What Netcat command listens on port 4444?", "input_type": "text", "validation": {"accepted_answers": ["nc -lvnp 4444", "nc -l -p 4444"]}, "hint": "Listen Verbose Numeric Port."},
        {"step_id": 6, "title": "Privilege Escalation", "question": "You can run /usr/bin/python as root. How do you spawn a shell?", "input_type": "text", "validation": {"accepted_answers": ["import os; os.system('/bin/sh')"]}, "hint": "Import OS module."},
        {"step_id": 7, "title": "Looting", "question": "You are Root. What command reads flag.txt?", "input_type": "text", "validation": {"accepted_answers": ["cat flag.txt"]}, "hint": "Concatenate."}
      ]
    },
    # --- MISSION 2 ---
    {
      "id": "mission_02", "title": "Mission 2: Project Nightshade", "type": "Blue Team / Forensics", "difficulty": "Intermediate",
      "briefing": "Workstation compromised via suspicious download. Analyze the evidence.",
      "steps": [
        {"step_id": 1, "title": "The Alert", "question": "User downloaded 'Invoice.pdf.exe'. Why the double extension?", "input_type": "text", "validation": {"accepted_answers": ["Hide file type", "Trick users"]}, "hint": "Windows hides extensions by default."},
        {"step_id": 2, "title": "Hash Analysis", "question": "You have the file hash. Which site is the standard for checking malware hashes?", "input_type": "text", "validation": {"accepted_answers": ["VirusTotal"]}, "hint": "Owned by Google."},
        {"step_id": 3, "title": "Process Investigation", "question": "Which PowerShell command lists running processes?", "input_type": "text", "validation": {"accepted_answers": ["Get-Process", "tasklist", "ps"]}, "hint": "Get-Process."},
        {"step_id": 4, "title": "Network Connection", "question": "What command shows network connections mapped to PIDs?", "input_type": "text", "validation": {"accepted_answers": ["netstat -ano", "netstat"]}, "hint": "Network Statistics."},
        {"step_id": 5, "title": "Persistence", "question": "Where does malware hide to start on reboot?", "input_type": "multiple_choice", "options": [{"label": "Registry Run Key", "value": "run"}, {"label": "Documents", "value": "doc"}], "validation": {"correct_value": "run"}, "hint": "HKLM...Run"},
        {"step_id": 6, "title": "Decoding", "question": "Decode Base64: `aGFja2VyLmNvbQ==`.", "input_type": "text", "validation": {"accepted_answers": ["hacker.com"]}, "hint": "Ends with =."},
        {"step_id": 7, "title": "Containment", "question": "What is the immediate containment step?", "input_type": "multiple_choice", "options": [{"label": "Block Network/DNS", "value": "block"}, {"label": "Watch it", "value": "watch"}], "validation": {"correct_value": "block"}, "hint": "Cut the connection."}
      ]
    },
    # --- MISSION 3 ---
    {
      "id": "mission_03", "title": "Mission 3: The Silicon Siege", "type": "Physical / Social Eng", "difficulty": "Hard",
      "briefing": "Physically infiltrate a facility to plant a listening device.",
      "steps": [
        {"step_id": 1, "title": "Cloning", "question": "What tool clones RFID access cards?", "input_type": "text", "validation": {"accepted_answers": ["Proxmark3", "Flipper Zero"]}, "hint": "Proxmark."},
        {"step_id": 2, "title": "Entry", "question": "Following someone through a door is called?", "input_type": "text", "validation": {"accepted_answers": ["Tailgating", "Piggybacking"]}, "hint": "Like a tail."},
        {"step_id": 3, "title": "Pretext", "question": "You pretend to be HVAC repair. This is:", "input_type": "text", "validation": {"accepted_answers": ["Pretexting"]}, "hint": "Creating a scenario."},
        {"step_id": 4, "title": "Lockpicking", "question": "Tool used with a tension wrench to lift pins?", "input_type": "text", "validation": {"accepted_answers": ["Pick", "Rake"]}, "hint": "Lock pick."},
        {"step_id": 5, "title": "Baiting", "question": "Leaving a USB drive on the floor is called?", "input_type": "text", "validation": {"accepted_answers": ["Baiting", "USB Drop"]}, "hint": "Like fishing."},
        {"step_id": 6, "title": "Keylogger", "question": "Where do you install a hardware keylogger?", "input_type": "multiple_choice", "options": [{"label": "Between Keyboard and PC", "value": "kb"}], "validation": {"correct_value": "kb"}, "hint": "Intercepts USB."},
        {"step_id": 7, "title": "Exfiltration", "question": "Tool to trick a PIR motion sensor?", "input_type": "text", "validation": {"accepted_answers": ["Compressed Air", "Canned Air"]}, "hint": "Cold air clouds."}
      ]
    },
    {
      "id": "mission_04", "title": "Mission 4: The Wireless War", "type": "Network Security", "difficulty": "Intermediate",
      "briefing": "Audit the corporate Wi-Fi network 'Corp_Secure'.",
      "steps": [
        {"step_id": 1, "title": "Mode", "question": "Switch Wi-Fi card to what mode to capture packets?", "input_type": "text", "validation": {"accepted_answers": ["Monitor", "Monitor Mode"]}, "hint": "Not Managed."},
        {"step_id": 2, "title": "Handshake", "question": "What 4-step exchange contains the password hash?", "input_type": "text", "validation": {"accepted_answers": ["Handshake", "4-way handshake"]}, "hint": "WPA Handshake."},
        {"step_id": 3, "title": "Deauth", "question": "Attack to disconnect users?", "input_type": "text", "validation": {"accepted_answers": ["Deauth", "Deauthentication"]}, "hint": "Kick them off."},
        {"step_id": 4, "title": "Wordlist", "question": "Famous Kali Linux wordlist?", "input_type": "text", "validation": {"accepted_answers": ["rockyou.txt", "rockyou"]}, "hint": "RockYou."},
        {"step_id": 5, "title": "Evil Twin", "question": "Creating a fake AP with the same name?", "input_type": "text", "validation": {"accepted_answers": ["Evil Twin"]}, "hint": "Identical copy."},
        {"step_id": 6, "title": "Phishing", "question": "Fake login page shown on connection?", "input_type": "text", "validation": {"accepted_answers": ["Captive Portal"]}, "hint": "Like hotels."},
        {"step_id": 7, "title": "WIPS", "question": "System that detects Evil Twins?", "input_type": "multiple_choice", "options": [{"label": "WIPS", "value": "wips"}], "validation": {"correct_value": "wips"}, "hint": "Wireless Intrusion Prevention."}
      ]
    },
    # --- MISSION 5 ---
    {
      "id": "mission_05", "title": "Mission 5: The Crypto Challenge", "type": "Cryptography", "difficulty": "Expert",
      "briefing": "Break layers of encryption to read the syndicate's message.",
      "steps": [
        {"step_id": 1, "title": "Binary", "question": "Decode: 01001000 01001001", "input_type": "text", "validation": {"accepted_answers": ["HI", "Hi"]}, "hint": "ASCII."},
        {"step_id": 2, "title": "Caesar", "question": "Decode 'URRW' (Shift -3).", "input_type": "text", "validation": {"accepted_answers": ["ROOT", "root"]}, "hint": "R-S-T-U."},
        {"step_id": 3, "title": "Hex", "question": "Decode: 50 61 73 73", "input_type": "text", "validation": {"accepted_answers": ["Pass", "PASS"]}, "hint": "Hex to Text."},
        {"step_id": 4, "title": "Vigenere", "question": "Cipher using a Keyword?", "input_type": "text", "validation": {"accepted_answers": ["Vigenere"]}, "hint": "Polyalphabetic."},
        {"step_id": 5, "title": "Hashing", "question": "Can you reverse MD5 without brute force?", "input_type": "multiple_choice", "options": [{"label": "No, it's one-way", "value": "no"}], "validation": {"correct_value": "no"}, "hint": "Hashing is destructive."},
        {"step_id": 6, "title": "RSA", "question": "Can you decrypt with a Public Key?", "input_type": "multiple_choice", "options": [{"label": "No", "value": "no"}], "validation": {"correct_value": "no"}, "hint": "Need Private key."},
        {"step_id": 7, "title": "History", "question": "Machine used to break Enigma?", "input_type": "text", "validation": {"accepted_answers": ["Bombe", "The Bombe"]}, "hint": "Alan Turing."}
      ]
    },
    # --- MISSION 6 ---
    {
      "id": "mission_06", "title": "Mission 6: The Poisoned Package", "type": "AppSec / Supply Chain", "difficulty": "Intermediate",
      "briefing": "Malicious library detected in build pipeline.",
      "steps": [
        {"step_id": 1, "title": "List Packages", "question": "Command to list node packages?", "input_type": "text", "validation": {"accepted_answers": ["npm list", "npm ls"]}, "hint": "npm list."},
        {"step_id": 2, "title": "Typosquatting", "question": "Using `color-v2` instead of `colors` is called?", "input_type": "text", "validation": {"accepted_answers": ["Typosquatting"]}, "hint": "Typing error."},
        {"step_id": 3, "title": "Eval", "question": "Found `eval(base64)`. This is:", "input_type": "multiple_choice", "options": [{"label": "Malicious", "value": "mal"}], "validation": {"correct_value": "mal"}, "hint": "Executes hidden code."},
        {"step_id": 4, "title": "CVE", "question": "Database of vulnerabilities?", "input_type": "text", "validation": {"accepted_answers": ["CVE"]}, "hint": "Common Vuln & Exposures."},
        {"step_id": 5, "title": "Uninstall", "question": "Command to remove package?", "input_type": "text", "validation": {"accepted_answers": ["npm uninstall color-v2"]}, "hint": "uninstall."},
        {"step_id": 6, "title": "Locking", "question": "File that locks versions?", "input_type": "text", "validation": {"accepted_answers": ["package-lock.json"]}, "hint": "lock.json"},
        {"step_id": 7, "title": "SCA", "question": "Tool that scans dependencies?", "input_type": "text", "validation": {"accepted_answers": ["SCA"]}, "hint": "Software Composition Analysis."}
      ]
    },
    # --- MISSION 7 ---
    {
      "id": "mission_07", "title": "Mission 7: The Insider", "type": "DLP / Insider Threat", "difficulty": "Hard",
      "briefing": "Investigate employee data theft.",
      "steps": [
        {"step_id": 1, "title": "Logs", "question": "Office entry at 3AM Sunday is:", "input_type": "multiple_choice", "options": [{"label": "Anomaly", "value": "yes"}], "validation": {"correct_value": "yes"}, "hint": "Not normal."},
        {"step_id": 2, "title": "DLP", "question": "System to stop printing/USB theft?", "input_type": "text", "validation": {"accepted_answers": ["DLP", "Data Loss Prevention"]}, "hint": "Loss Prevention."},
        {"step_id": 3, "title": "USB ID", "question": "Unique ID for USB hardware?", "input_type": "text", "validation": {"accepted_answers": ["Device Instance ID", "Serial Number"]}, "hint": "UID."},
        {"step_id": 4, "title": "Exfiltration", "question": "Moving data OUT of network?", "input_type": "text", "validation": {"accepted_answers": ["Exfiltration"]}, "hint": "Exit."},
        {"step_id": 5, "title": "Stego", "question": "Hiding files in images?", "input_type": "text", "validation": {"accepted_answers": ["Steganography"]}, "hint": "Stego."},
        {"step_id": 6, "title": "Legal Hold", "question": "Preserving data for court?", "input_type": "text", "validation": {"accepted_answers": ["Legal Hold"]}, "hint": "Hold."},
        {"step_id": 7, "title": "PoLP", "question": "Principle limiting access?", "input_type": "text", "validation": {"accepted_answers": ["Least Privilege"]}, "hint": "Minimum access."}
      ]
    },
    # --- MISSION 8 ---
    {
      "id": "mission_08", "title": "Mission 8: The Leaky Bucket", "type": "Cloud Security", "difficulty": "Intermediate",
      "briefing": "Secure an exposed AWS S3 bucket.",
      "steps": [
        {"step_id": 1, "title": "S3", "question": "S3 stands for?", "input_type": "text", "validation": {"accepted_answers": ["Simple Storage Service"]}, "hint": "Simple Storage."},
        {"step_id": 2, "title": "Public", "question": "If anyone can list files, permission is?", "input_type": "text", "validation": {"accepted_answers": ["Public", "Anonymous"]}, "hint": "Everyone."},
        {"step_id": 3, "title": "PII", "question": "SSNs and Emails are?", "input_type": "text", "validation": {"accepted_answers": ["PII"]}, "hint": "Personal info."},
        {"step_id": 4, "title": "Block", "question": "AWS feature to stop this?", "input_type": "multiple_choice", "options": [{"label": "Block Public Access", "value": "block"}], "validation": {"correct_value": "block"}, "hint": "Block Public Access."},
        {"step_id": 5, "title": "Policy", "question": "JSON doc controlling access?", "input_type": "text", "validation": {"accepted_answers": ["Bucket Policy"]}, "hint": "Policy."},
        {"step_id": 6, "title": "Encryption", "question": "AWS service for keys?", "input_type": "text", "validation": {"accepted_answers": ["KMS"]}, "hint": "Key Mgmt Service."},
        {"step_id": 7, "title": "Logging", "question": "AWS Audit logs?", "input_type": "text", "validation": {"accepted_answers": ["CloudTrail"]}, "hint": "CloudTrail."}
      ]
    },
    # --- MISSION 9 ---
    {
      "id": "mission_09", "title": "Mission 9: Android Anatomy", "type": "Mobile Security", "difficulty": "Advanced",
      "briefing": "Reverse engineer a malicious APK.",
      "steps": [
        {"step_id": 1, "title": "Format", "question": "Android file extension?", "input_type": "text", "validation": {"accepted_answers": ["APK", ".apk"]}, "hint": "APK."},
        {"step_id": 2, "title": "Decompile", "question": "Tool to decompile APK?", "input_type": "text", "validation": {"accepted_answers": ["APKTool", "JADX"]}, "hint": "APKTool."},
        {"step_id": 3, "title": "Manifest", "question": "File defining permissions?", "input_type": "text", "validation": {"accepted_answers": ["AndroidManifest.xml"]}, "hint": "Manifest."},
        {"step_id": 4, "title": "C2", "question": "Server controlling malware?", "input_type": "text", "validation": {"accepted_answers": ["C2", "Command and Control"]}, "hint": "Command & Control."},
        {"step_id": 5, "title": "Obfuscation", "question": "Renaming variables to 'a', 'b'?", "input_type": "text", "validation": {"accepted_answers": ["Obfuscation"]}, "hint": "Hiding code logic."},
        {"step_id": 6, "title": "Overlay", "question": "Fake window over banking app?", "input_type": "text", "validation": {"accepted_answers": ["Overlay Attack", "Tapjacking"]}, "hint": "Overlay."},
        {"step_id": 7, "title": "Protect", "question": "Google Play scanner?", "input_type": "text", "validation": {"accepted_answers": ["Play Protect"]}, "hint": "Play Protect."}
      ]
    },
    # --- MISSION 10 ---
    {
      "id": "mission_10", "title": "Mission 10: Zero Trust", "type": "Architecture", "difficulty": "Expert",
      "briefing": "Prove how Zero Trust saved the CEO's laptop.",
      "steps": [
        {"step_id": 1, "title": "Motto", "question": "Zero Trust motto?", "input_type": "text", "validation": {"accepted_answers": ["Never Trust, Always Verify"]}, "hint": "Verify Explicitly."},
        {"step_id": 2, "title": "MFA", "question": "Code from phone required?", "input_type": "text", "validation": {"accepted_answers": ["MFA", "2FA"]}, "hint": "Multi-Factor."},
        {"step_id": 3, "title": "TPM", "question": "Chip storing crypto keys?", "input_type": "text", "validation": {"accepted_answers": ["TPM"]}, "hint": "Trusted Platform Module."},
        {"step_id": 4, "title": "Segmentation", "question": "Isolating network zones?", "input_type": "text", "validation": {"accepted_answers": ["Micro-segmentation"]}, "hint": "Segmentation."},
        {"step_id": 5, "title": "EDR", "question": "Agent handling detection?", "input_type": "text", "validation": {"accepted_answers": ["EDR"]}, "hint": "Endpoint Detection."},
        {"step_id": 6, "title": "Least Priv", "question": "No Admin rights?", "input_type": "text", "validation": {"accepted_answers": ["Least Privilege"]}, "hint": "Lowest access."},
        {"step_id": 7, "title": "MDM", "question": "System for remote wipe?", "input_type": "text", "validation": {"accepted_answers": ["MDM"]}, "hint": "Mobile Device Mgmt."}
      ]
    }
  ]
}
