---
title: "Supply Chain Attack VSCode: वीएस कोड और डेवलपर्स पर साइबर हमला, दुर्भावनापूर्ण पैकेज लीक! 🛡️💻"
date: "2026-06-29"
category: "Software"
trending: false
excerpt: "Cybersecurity researchers ne VS Code aur packages me ek naya supply chain attack detect kiya hai jo hijacked npm aur Go packages ke zariye malware phelata hai."
image: "/images/blog/supply-chain-attack-hijacked-npm-go-packages-vscode.webp"
readingTime: "3 min read"
author: "Rahul Sharma"
authorRole: "Senior Tech Editor"
---

सॉफ्टवेयर डेवलपर्स (Software developers) जो अपनी कोडिंग के लिए विजुअल स्टूडियो कोड (VS Code) का उपयोग करते हैं, उनके लिए सुरक्षा से जुड़ी एक बेहद चिंताजनक खबर आई है। साइबर सुरक्षा शोधकर्ताओं ने एक बड़े और चतुर **Supply Chain Attack** का खुलासा किया है, जो सीधे डेवलपर्स के कंप्यूटरों को निशाना बना रहा है।

इस हमले के तहत, हैकर्स ने लोकप्रिय **npm (Node Package Manager)** और **Go** रिपॉजिटरी में सेंध लगाकर कुछ बेहद सामान्य रूप से उपयोग होने वाले पैकेजेस को हाईजैक (Hijack) कर लिया है। इन पैकेजेस में दुर्भावनापूर्ण कोड (Malicious code) डाला गया है जो वीएस कोड के टास्क मैनेजर के जरिए डेवलपर्स के सिस्टम में गुप्त रूप से इन्फॉर्मेशन स्टीलर (Info-stealer) इंस्टॉल कर देता है।

## कैसे काम करता है यह हमला? (The Anatomy of the Attack)

सुरक्षा रिपोर्ट के अनुसार, यह **Supply Chain Attack VSCode** बेहद जटिल और अदृश्य तरीके से काम करता है:

1. **Hijacked Packages:** हैकर्स ने डेवलपर्स द्वारा रोज उपयोग किए जाने वाले लोकप्रिय पैकेजेस के 'क्लोन' बनाए हैं या मौजूदा कमजोर पैकेजेस को हाईजैक किया है।
2. **Hidden VS Code Tasks:** जब कोई डेवलपर इनमें से किसी पैकेज को डाउनलोड करता है और उस फोल्डर को वीएस कोड में खोलता है, तो वीएस कोड की 'ऑटो-रन टास्क' (Auto-run tasks) सुविधा का दुरुपयोग करके बैकग्राउंड में एक स्क्रिप्ट चलती है।
3. **Python Info-Stealer:** यह स्क्रिप्ट सिस्टम में एक गुप्त पायथन-बेस्ड इन्फॉर्मेशन स्टीलर डाउनलोड करती है, जो डेवलपर के कंप्यूटर से ब्राउज़र क्रेडेंशियल्स, एपीआई की (API Keys), क्रिप्टोकरेंसी वॉलेट्स और संवेदनशील गिटहब (GitHub) डेटा को चुराकर हैकर के सर्वर पर भेज देती है।

## India Angle: भारतीय आईटी सेक्टर और टेक हब्स के लिए बड़ा खतरा

* **Risk to Indian IT Hubs:** बेंगलुरु, हैदराबाद, पुणे और नोएडा जैसे भारतीय आईटी हब्स में काम करने वाले लाखों सॉफ्टवेयर इंजीनियर्स रोजाना वीएस कोड और npm पैकेजेस का उपयोग करते हैं। भारत में ओपन-सोर्स पैकेजेस का उपयोग बहुत अधिक है, जिससे भारतीय डेवलपर्स इस हमले के प्रति अत्यधिक संवेदनशील हो जाते हैं।
* **Corporate Espionage Risk:** कई भारतीय सॉफ्टवेयर कंपनियां अमेरिकी और यूरोपीय ग्राहकों के लिए प्रोजेक्ट्स पर काम करती हैं। अगर किसी भारतीय डेवलपर का सिस्टम हैक होता है, तो अंतरराष्ट्रीय ग्राहकों का सेंसिटिव सोर्स कोड भी लीक हो सकता है, जो कानूनी और आर्थिक रूप से भारी पड़ सकता है।
* **Lack of Local Package Audits:** कई भारतीय स्टार्टअप्स में ओपन-सोर्स कोड के इस्तेमाल को लेकर कड़े ऑडिट नियम (Dependency scanning) नहीं हैं, जिससे इस तरह के मालिशियस कोड आसानी से प्रोडक्शन एनवायरनमेंट में पहुंच जाते हैं।

## सुरक्षा के उपाय: खुद को कैसे बचाएं?

* **Disable Auto-Task Execution:** वीएस कोड की सेटिंग्स में जाकर `task.autoDetect` और ऑटो-रन सेटिंग्स को तुरंत बंद (Disable) करें ताकि फोल्डर खोलते ही कोई स्क्रिप्ट अपने-आप रन न हो सके।
* **Use Package Auditors:** अपने प्रोजेक्ट्स में `npm audit` या विशेष डिपेंडेंसी फायरवॉल (Dependency Firewall) टूल्स का उपयोग करें जो किसी भी संदिग्ध पैकेज को इंस्टॉल होने से पहले ब्लॉक कर देते हैं।
* **Check Package Reputation:** कोई भी नया लाइब्रेरी या पैकेज इंस्टॉल करने से पहले उसके डाउनलोड काउंट, गिटहब स्टार्स और हालिया कमिट्स को ध्यान से देखें।

## Conclusion (निष्कर्ष)

ओपन-सोर्स कोडिंग की दुनिया जितनी आसान है, उतनी ही खतरनाक भी होती जा रही है। यह नया **Supply Chain Attack VSCode** डेवलपर्स को यह याद दिलाने के लिए काफी है कि उन्हें कोडिंग करते समय सुरक्षा को अपनी सर्वोच्च प्राथमिकता बनाना होगा।

<!-- [!NOTE] AI Image Prompt: Glowing digital code block with warning shields, corrupted lines of code leaking malware bugs, dark cyber security theme. -->

<!--
## Web Story Brief
- Vehicle/Technology Name: VS Code Supply Chain Attack
- Biggest Highlight: Researchers uncover a major supply chain attack targeting VS Code developers using hijacked npm and Go packages.
- Range/Battery Feature: Utilizes hidden VS Code tasks to run automated, malicious Python-based information stealers.
- Price or Availability: Discovered on June 29, 2026, impacting developers globally who use open-source package repositories.
- India Impact: Poses a severe threat to developers in tech hubs like Bangalore and Pune, potentially compromising sensitive client source codes.
-->
