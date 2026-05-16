---
title: "Pwn2Own Berlin 2026: Windows 11 और Microsoft Exchange हैक! भारतीय यूज़र्स पर क्या खतरा? 🔓💻"
date: "2026-05-16"
category: "Software"
excerpt: "दुनिया की सबसे बड़ी हैकिंग प्रतियोगिता 'Pwn2Own Berlin 2026' के दूसरे दिन, एथिकल हैकर्स ने Windows 11 और Microsoft Exchange में गंभीर सुरक्षा खामियां (Vulnerabilities) ढूंढ निकालीं। जानिए भारतीय यूज़र्स को क्या करना चाहिए।"
image: "/images/blog/software-ivanti-zero-day-2026-05-08.png"
readingTime: "6 min read"
---

## Pwn2Own क्या है? (What is Pwn2Own?)

**Pwn2Own** दुनिया की सबसे प्रतिष्ठित (Prestigious) **एथिकल हैकिंग प्रतियोगिता (Ethical Hacking Competition)** है, जिसे **Trend Micro** की **Zero Day Initiative (ZDI)** द्वारा आयोजित किया जाता है। इसमें दुनिया भर के टॉप हैकर्स और सिक्योरिटी रिसर्चर्स (Security Researchers) को चुनौती दी जाती है कि वे लोकप्रिय सॉफ्टवेयर (Windows, Chrome, Exchange, Linux आदि) में **Zero-Day Vulnerabilities** ढूंढें।

अगर हैकर सफलतापूर्वक किसी सॉफ्टवेयर को हैक कर लेता है, तो उसे **लाखों डॉलर का इनाम (Prize Money)** और **हैक किया गया डिवाइस** मिलता है — इसीलिए इसका नाम "Pwn2Own" (हैक करो और अपना करो) है!

---

## इस बार क्या हुआ? Berlin 2026 Day 2 (What Happened?)

**Pwn2Own Berlin 2026** के दूसरे दिन (Day 2) कई बड़े सॉफ्टवेयर हैक किए गए। सबसे चौंकाने वाली बात यह है कि **Microsoft के दो सबसे ज़्यादा इस्तेमाल होने वाले प्रोडक्ट्स** — Windows 11 और Exchange Server — दोनों हैक हुए।

### हैकिंग स्कोरबोर्ड (Day 2 Results)

| **प्रोडक्ट (Product)** | **खोजी गई खामियां (Vulnerabilities Found)** | **इनाम (Prize)** |
| :--- | :--- | :--- |
| **Windows 11** | **5** Zero-Day Bugs | $300,000+ |
| **Microsoft Exchange** | **6** Zero-Day Bugs | $400,000+ |
| **Red Hat Linux (Workstation)** | **4** Zero-Day Bugs | $200,000+ |
| **VMware ESXi** | 3 Zero-Day Bugs | $250,000+ |
| **Mozilla Firefox** | 2 Zero-Day Bugs | $100,000+ |

कुल मिलाकर, Day 2 में **$1.2 मिलियन+ (~₹10 करोड़)** की प्राइज़ मनी बांटी गई!

---

## Windows 11 में क्या खामी मिली? (Windows 11 Vulnerabilities)

हैकर्स ने Windows 11 में **5 अलग-अलग Zero-Day** बग्स ढूंढे, जिनमें से सबसे गंभीर (Critical) थे:

1.  **Privilege Escalation Bug** — एक सामान्य यूज़र (Normal User) अपने आप को **Administrator** बना सकता है, बिना पासवर्ड जाने।
2.  **Kernel-Level RCE (Remote Code Execution)** — हैकर इंटरनेट के ज़रिए आपके कंप्यूटर पर कोड रन कर सकता है।
3.  **Sandbox Escape** — ब्राउज़र (Browser) की सुरक्षित दीवार (Sandbox) को तोड़कर सिस्टम तक पहुंचना।

### Microsoft Exchange की खामियां

Microsoft Exchange (ईमेल सर्वर) में **6 Zero-Day** मिले, जिनमें:
*   **Pre-Authentication RCE** — बिना लॉगिन किए सर्वर पर कोड रन करना
*   **SSRF (Server-Side Request Forgery)** — सर्वर को धोखा देकर इंटरनल नेटवर्क एक्सेस करना

---

## भारतीय यूज़र्स और कंपनियों पर क्या खतरा? (India Impact)

भारत में **Windows 11** सबसे ज़्यादा इस्तेमाल होने वाला डेस्कटॉप OS है, और **Microsoft Exchange** भारत की हज़ारों कंपनियों, बैंकों, और सरकारी संस्थानों (Government Agencies) में ईमेल सर्विस चलाता है।

### खतरे का स्तर (Threat Level)

| **सेक्टर** | **खतरा (Risk Level)** | **कारण** |
| :--- | :--- | :--- |
| **बैंकिंग/BFSI** | 🔴 Critical | Exchange सर्वर पर संवेदनशील डेटा |
| **सरकारी दफ़्तर** | 🔴 Critical | Windows 11 + Exchange दोनों प्रभावित |
| **IT कंपनियां** | 🟡 High | अधिकतर Cloud पर माइग्रेट हो चुकी हैं |
| **सामान्य यूज़र** | 🟡 High | Windows 11 अपडेट ज़रूरी |

---

## क्या करें? स्टेप-बाय-स्टेप गाइड (What Should You Do?)

### 1. Windows Update तुरंत करें
Settings → Windows Update → Check for Updates → अभी इंस्टॉल करें। Microsoft Pwn2Own के बाद 90 दिन के अंदर पैच (Patch) रिलीज़ करता है, लेकिन इस बार **Emergency Patch** जल्दी आने की उम्मीद है।

### 2. Exchange Server अपडेट करें (IT Admins)
अगर आपकी कंपनी On-premise Exchange चलाती है, तो तुरंत Microsoft Security Response Center (MSRC) की वेबसाइट पर जाएं और लेटेस्ट Cumulative Update (CU) इंस्टॉल करें।

### 3. एंटीवायरस/EDR सॉल्यूशन एक्टिव रखें
Windows Defender, CrowdStrike, या SentinelOne जैसे Endpoint Detection & Response (EDR) टूल्स को एक्टिव और अपडेटेड रखें।

### 4. MFA (Multi-Factor Authentication) ऑन करें
अपने सभी Microsoft अकाउंट्स पर **2-Factor Authentication** ज़रूर ऑन करें — यह सबसे सस्ता और सबसे असरदार (Effective) सुरक्षा उपाय है।

---

## निष्कर्ष (Conclusion)

Pwn2Own जैसी प्रतियोगिताएं दरअसल **अच्छी बात** हैं — क्योंकि ये बग्स **एथिकल हैकर्स** ने ढूंढे हैं, क्रिमिनल हैकर्स ने नहीं। Microsoft को अब ये बग्स 90 दिन में पैच करने होंगे। लेकिन भारतीय यूज़र्स को इंतज़ार नहीं करना चाहिए — **अभी अपने Windows और Exchange को अपडेट करें!** साइबर सुरक्षा में देरी = ख़तरा। 🛡️💻
