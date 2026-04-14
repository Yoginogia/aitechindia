'use client';

import { useState, useRef, useEffect } from "react";
import { Search, Smartphone, CheckCircle2, ShoppingCart, TrendingUp, AlertTriangle } from "lucide-react";
import Image from "next/image";

interface PhoneSpec { value: string; score: number; }
interface Phone {
  id: string;
  name: string;
  price: string;
  score: number;
  badge: string;
  image: string;
  specs: {
    camera: PhoneSpec; battery: PhoneSpec; ram: PhoneSpec;
    display: PhoneSpec; charging: PhoneSpec; processor: PhoneSpec;
    storage: PhoneSpec; os: PhoneSpec;
  };
  pros: string[];
  cons: string[];
  verdict: string;
  amazon: string;
  flipkart: string;
}

const PHONES: Phone[] = [
  {
    id: "samsung-s26-ultra",
    name: "Samsung Galaxy S26 Ultra",
    price: "₹1,39,999",
    score: 9.0,
    badge: "Best Overall",
    image: "/images/phones/samsung-s26-ultra.png",
    specs: {
      camera:    { value: "200MP AI Quad", score: 10 },
      battery:   { value: "5000mAh", score: 8 },
      ram:       { value: "12GB / 16GB", score: 9 },
      display:   { value: "6.9\" AMOLED 120Hz", score: 10 },
      charging:  { value: "60W Wired + 25W Wireless", score: 8 },
      processor: { value: "Snapdragon 8 Elite Gen 5", score: 10 },
      storage:   { value: "256GB / 512GB / 1TB", score: 10 },
      os:        { value: "Android 16 (7 yrs OS)", score: 10 },
    },
    pros: ["Privacy Display feature", "S Pen included", "Best-in-class AI camera", "Gorilla Armor 2"],
    cons: ["Heavy at 228g", "60W charging is slow vs rivals", "Very expensive"],
    verdict: "2026 ka sabse feature-rich Android flagship. Ultimate power users ke liye #1 pasand.",
    amazon: "https://amzn.to/s26ultra", flipkart: "https://flipkart.com/s26ultra",
  },
  {
    id: "iphone-16-pro-max",
    name: "Apple iPhone 16 Pro Max",
    price: "₹1,59,900",
    score: 9.2,
    badge: "Top Rated",
    image: "/images/phones/iphone-16-pro-max.png",
    specs: {
      camera:    { value: "48MP + 12MP + 5x Zoom", score: 10 },
      battery:   { value: "4685mAh", score: 8 },
      ram:       { value: "8GB", score: 8 },
      display:   { value: "6.9\" Super Retina XDR 120Hz", score: 10 },
      charging:  { value: "30W Wired + 15W MagSafe", score: 7 },
      processor: { value: "Apple A18 Pro", score: 10 },
      storage:   { value: "256GB / 512GB / 1TB", score: 10 },
      os:        { value: "iOS 18 (6 yrs updates)", score: 10 },
    },
    pros: ["A18 Pro fastest mobile chip", "Best video recording globally", "Camera Control button", "Premium titanium build"],
    cons: ["Most expensive on list", "No fast charging", "USB 3 only on Pro", "iOS ecosystem lock-in"],
    verdict: "Duniya ka sabse powerful smartphone chip. Video creators aur Apple fans ke liye ultimate choice.",
    amazon: "https://amzn.to/iphone16promax", flipkart: "https://flipkart.com/iphone16promax",
  },
  {
    id: "xiaomi-17-ultra",
    name: "Xiaomi 17 Ultra",
    price: "₹1,39,999",
    score: 9.1,
    badge: "Best Camera",
    image: "/images/phones/xiaomi-17-ultra.png",
    specs: {
      camera:    { value: "200MP Leica 1-inch", score: 10 },
      battery:   { value: "6000mAh", score: 9 },
      ram:       { value: "16GB", score: 10 },
      display:   { value: "6.73\" LTPO AMOLED 120Hz", score: 10 },
      charging:  { value: "90W Wired + 50W Wireless", score: 10 },
      processor: { value: "Snapdragon 8 Elite Gen 5", score: 10 },
      storage:   { value: "512GB / 1TB", score: 9 },
      os:        { value: "HyperOS 3 (Android 16)", score: 8 },
    },
    pros: ["Mechanical continuous zoom", "1-inch Leica sensor", "90W ultra-fast charging", "Monster 6000mAh battery"],
    cons: ["HyperOS bloatware", "Limited service centers", "Extremely bulky camera bump"],
    verdict: "Camera mein koi match nahi. Photography enthusiasts ke liye undisputed king of 2026.",
    amazon: "https://amzn.to/xiaomi17ultra", flipkart: "https://flipkart.com/xiaomi17ultra",
  },
  {
    id: "google-pixel-10-pro",
    name: "Google Pixel 10 Pro",
    price: "₹1,09,999",
    score: 8.9,
    badge: "Smartest AI",
    image: "/images/phones/google-pixel-10-pro.png",
    specs: {
      camera:    { value: "50MP Main + 48MP Zoom", score: 10 },
      battery:   { value: "5100mAh", score: 8 },
      ram:       { value: "16GB", score: 10 },
      display:   { value: "6.7\" Actua LTPO 120Hz", score: 9 },
      charging:  { value: "45W Wired", score: 7 },
      processor: { value: "Google Tensor G5 (TSMC)", score: 9 },
      storage:   { value: "256GB / 512GB", score: 9 },
      os:        { value: "Android 16 (Google AI)", score: 10 },
    },
    pros: ["Best-in-class clean AI", "TSMC built Tensor G5", "Industry leading skin tone camera", "7 years feature drops"],
    cons: ["Charging speed is average", "India availability (limited colors)"],
    verdict: "Agar aapko clean Android aur smartest AI features chahiye, toh Pixel 10 Pro se behtar kuch nahi.",
    amazon: "https://amzn.to/pixel10pro", flipkart: "https://flipkart.com/pixel10pro",
  },
  {
    id: "vivo-x300-ultra",
    name: "Vivo X300 Ultra",
    price: "₹79,990",
    score: 8.8,
    badge: "Monster Specs",
    image: "/images/phones/vivo-x300-ultra.png",
    specs: {
      camera:    { value: "Dual 200MP System", score: 10 },
      battery:   { value: "7000mAh", score: 10 },
      ram:       { value: "12GB / 16GB", score: 9 },
      display:   { value: "6.82\" LTPO OLED 2K", score: 9 },
      charging:  { value: "120W Wired", score: 10 },
      processor: { value: "Snapdragon 8 Elite Gen 5", score: 10 },
      storage:   { value: "256GB / 512GB", score: 9 },
      os:        { value: "OriginOS 5", score: 7 },
    },
    pros: ["Dual 200MP cameras", "7000mAh massive battery outlasts everything", "120W charging", "IP69 waterproof"],
    cons: ["OS UX can be polarizing", "Heavy at 230g", "India launch still pending (Q2)"],
    verdict: "Battery + Camera ka ultimate pinnacle. Power users ke liye dream device. Worth the wait.",
    amazon: "https://amzn.to/vivox300ultra", flipkart: "https://flipkart.com/vivox300ultra",
  },
  {
    id: "oneplus-15",
    name: "OnePlus 15",
    price: "₹72,999",
    score: 8.6,
    badge: "Flagship Killer",
    image: "/images/phones/oneplus-15.png",
    specs: {
      camera:    { value: "50MP Hasselblad Triple", score: 8 },
      battery:   { value: "6100mAh", score: 9 },
      ram:       { value: "12GB / 16GB", score: 9 },
      display:   { value: "6.82\" BOE LTPO OLED", score: 9 },
      charging:  { value: "100W Wired + 50W Wireless", score: 10 },
      processor: { value: "Snapdragon 8 Elite Gen 5", score: 10 },
      storage:   { value: "256GB / 512GB", score: 8 },
      os:        { value: "OxygenOS 15", score: 9 },
    },
    pros: ["100W insane fast charging", "Hasselblad tuning", "Clean OxygenOS", "Premium glass-metal build"],
    cons: ["Camera falls short of Ultra rivals", "Plastic frame on base variant"],
    verdict: "Best mid-flagship value. 0-100% sirf 28 minutes mein. Android purists ki first choice.",
    amazon: "https://amzn.to/oneplus15", flipkart: "https://flipkart.com/oneplus15",
  },
  {
    id: "nothing-fold-1",
    name: "Nothing Fold (1)",
    price: "₹1,24,999",
    score: 8.7,
    badge: "Innovation Award",
    image: "/images/phones/nothing-fold-1.png",
    specs: {
      camera:    { value: "50MP Triple System", score: 8 },
      battery:   { value: "4800mAh Dual Cell", score: 8 },
      ram:       { value: "12GB / 16GB", score: 9 },
      display:   { value: "8\" Foldable LTPO", score: 10 },
      charging:  { value: "66W Wired", score: 8 },
      processor: { value: "Snapdragon 8 Elite Gen 5", score: 10 },
      storage:   { value: "512GB", score: 9 },
      os:        { value: "Nothing OS 3.5 Fold", score: 9 },
    },
    pros: ["Transparent hinge design", "Unique Glyph interface for fold", "Thinnest foldable in India", "Clean Nothing software"],
    cons: ["First-gen foldable concerns", "Camera zoom is limited"],
    verdict: "Nothing ka pehla foldable hi masterpiece hai. Design aur performance ka perfect sangam.",
    amazon: "https://amzn.to/nothingfold1", flipkart: "https://flipkart.com/nothingfold1",
  },
  {
    id: "realme-gt-7-pro",
    name: "Realme GT 7 Pro",
    price: "₹59,999",
    score: 8.5,
    badge: "Speed King",
    image: "/images/phones/realme-gt-7-pro.png",
    specs: {
      camera:    { value: "50MP Sony LYT-808 Triple", score: 8 },
      battery:   { value: "6500mAh", score: 9 },
      ram:       { value: "12GB / 16GB", score: 9 },
      display:   { value: "6.78\" AMOLED 120Hz", score: 9 },
      charging:  { value: "120W SuperDart + 50W Wireless", score: 10 },
      processor: { value: "Snapdragon 8 Elite", score: 10 },
      storage:   { value: "256GB / 512GB", score: 8 },
      os:        { value: "Realme UI 6 (Android 15)", score: 7 },
    },
    pros: ["120W charging under ₹60K", "Snapdragon 8 Elite flagship chip", "6500mAh giant battery", "IP69 waterproof rating"],
    cons: ["Realme UI has bloatware", "Camera falls behind premium rivals", "Bulk & weight issue"],
    verdict: "₹60K ke neeche Snapdragon 8 Elite milna kisi dream se kam nahi. Charging speed unbeatable hai.",
    amazon: "https://amzn.to/realmegt7pro", flipkart: "https://flipkart.com/realmegt7pro",
  },
  {
    id: "motorola-edge-60-pro",
    name: "Motorola Edge 60 Pro",
    price: "₹34,999",
    score: 8.1,
    badge: "Hidden Gem",
    image: "/images/phones/motorola-edge-60-pro.png",
    specs: {
      camera:    { value: "50MP + 50MP + 10MP Triple", score: 8 },
      battery:   { value: "5000mAh", score: 8 },
      ram:       { value: "12GB", score: 8 },
      display:   { value: "6.7\" pOLED 144Hz Curved", score: 9 },
      charging:  { value: "68W TurboPower Wired", score: 8 },
      processor: { value: "Dimensity 8350", score: 8 },
      storage:   { value: "256GB", score: 8 },
      os:        { value: "Hello UI (Android 15, 3yr updates)", score: 9 },
    },
    pros: ["144Hz curved pOLED display under ₹35K", "Triple 50MP cameras", "Ultra-clean near-stock Android", "Military-grade IP69 rating"],
    cons: ["Dimensity 8350 not a flagship chip", "No wireless charging", "Limited after-sales support"],
    verdict: "₹35K mein 144Hz pOLED + clean software. Display aur software experience mein sabse aage is price par.",
    amazon: "https://amzn.to/motoedge60pro", flipkart: "https://flipkart.com/motoedge60pro",
  },
  {
    id: "iqoo-neo-10",
    name: "iQOO Neo 10",
    price: "₹29,999",
    score: 8.3,
    badge: "Best Under 30K",
    image: "/images/phones/iqoo-neo-10.png",
    specs: {
      camera:    { value: "50MP Sony LYT-600 + 8MP", score: 8 },
      battery:   { value: "6400mAh", score: 9 },
      ram:       { value: "8GB / 12GB", score: 8 },
      display:   { value: "6.78\" AMOLED 144Hz", score: 9 },
      charging:  { value: "120W FlashCharge", score: 10 },
      processor: { value: "Snapdragon 8 Gen 3", score: 9 },
      storage:   { value: "128GB / 256GB", score: 8 },
      os:        { value: "FunTouchOS 15 (Android 15)", score: 7 },
    },
    pros: ["Snapdragon 8 Gen 3 under ₹30K", "120W ultra-fast charging", "144Hz AMOLED display", "6400mAh beast battery"],
    cons: ["FunTouchOS kuch bloaty hai", "Only 2 rear cameras", "Average build quality"],
    verdict: "₹30K budget mein Snapdragon 8 Gen 3 aur 120W charging? iQOO Neo 10 simply unbeatable value deta hai.",
    amazon: "https://amzn.to/iqooneo10", flipkart: "https://flipkart.com/iqooneo10",
  },
  {
    id: "samsung-galaxy-a56",
    name: "Samsung Galaxy A56 5G",
    price: "₹38,999",
    score: 7.9,
    badge: "Safe Choice",
    image: "/images/phones/samsung-galaxy-a56.png",
    specs: {
      camera:    { value: "50MP OIS + 12MP + 5MP", score: 8 },
      battery:   { value: "5000mAh", score: 8 },
      ram:       { value: "8GB / 12GB", score: 8 },
      display:   { value: "6.7\" Super AMOLED 120Hz", score: 9 },
      charging:  { value: "45W Wired", score: 7 },
      processor: { value: "Exynos 1580", score: 7 },
      storage:   { value: "128GB / 256GB (expandable)", score: 9 },
      os:        { value: "One UI 7 (Android 15, 6yr updates)", score: 10 },
    },
    pros: ["6 years OS updates guarantee", "MicroSD card support", "IP67 water resistance", "Super AMOLED bright display"],
    cons: ["Exynos 1580 is mid-range only", "45W charging is slow vs rivals", "No telephoto camera"],
    verdict: "Samsung trust + 6 saal ke updates + microSD — long-term value ke liye ₹40K mein best safe bet.",
    amazon: "https://amzn.to/samsunggalaxya56", flipkart: "https://flipkart.com/samsunggalaxya565g",
  },
  {
    id: "oneplus-15r",
    name: "OnePlus 15R",
    price: "₹51,999",
    score: 8.2,
    badge: "Best Battery",
    image: "/images/phones/oneplus-15r.png",
    specs: {
      camera:    { value: "50MP Triple", score: 7 },
      battery:   { value: "7400mAh", score: 10 },
      ram:       { value: "12GB", score: 8 },
      display:   { value: "6.7\" AMOLED 120Hz", score: 8 },
      charging:  { value: "80W SuperVOOC", score: 9 },
      processor: { value: "Snapdragon 8s Gen 4", score: 8 },
      storage:   { value: "128GB / 256GB", score: 7 },
      os:        { value: "OxygenOS 15", score: 9 },
    },
    pros: ["7400mAh monster battery", "80W fast charging", "Clean software", "Excellent thermal management"],
    cons: ["Average secondary cameras", "Not using full Gen 5 flagship chip"],
    verdict: "Battery enthusiasts aur travelers ke liye perfect. Value for money aspect is unbeatable.",
    amazon: "https://amzn.to/oneplus15r", flipkart: "https://flipkart.com/oneplus15r",
  },
  {
    id: "iqoo-15r",
    name: "iQOO 15R",
    price: "₹44,998",
    score: 8.3,
    badge: "Best Gaming",
    image: "/images/phones/iqoo-15r.png",
    specs: {
      camera:    { value: "50MP Sony IMX882 + 8MP", score: 7 },
      battery:   { value: "6400mAh", score: 9 },
      ram:       { value: "8GB / 12GB", score: 8 },
      display:   { value: "6.77\" AMOLED 144Hz", score: 9 },
      charging:  { value: "120W FlashCharge", score: 10 },
      processor: { value: "Snapdragon 8 Gen 4", score: 9 },
      storage:   { value: "128GB / 256GB", score: 7 },
      os:        { value: "FunTouchOS 15", score: 7 },
    },
    pros: ["120W lightning charging", "144Hz dedicated gaming display", "Top-tier gaming performance", "6400mAh battery"],
    cons: ["FunTouchOS has bloatware", "Camera strictly average", "Bulky and heavy at 215g"],
    verdict: "Gamers ke liye best phone under ₹50K. 144Hz + 8 Gen 4 + 120W charging = absolute beast.",
    amazon: "https://amzn.to/iqoo15r", flipkart: "https://flipkart.com/iqoo15r",
  },
  {
    id: "redmi-note-15-pro",
    name: "Xiaomi Redmi Note 15 Pro",
    price: "₹29,999",
    score: 7.8,
    badge: "Budget King",
    image: "/images/phones/redmi-note-15-pro.png",
    specs: {
      camera:    { value: "200MP OIS Primary", score: 9 },
      battery:   { value: "5500mAh", score: 8 },
      ram:       { value: "8GB / 12GB", score: 8 },
      display:   { value: "6.67\" AMOLED 120Hz", score: 8 },
      charging:  { value: "90W HyperCharge", score: 9 },
      processor: { value: "MediaTek Dimensity 7300", score: 7 },
      storage:   { value: "128GB / 256GB", score: 7 },
      os:        { value: "HyperOS (Android 16)", score: 7 },
    },
    pros: ["200MP camera under ₹30K", "90W fast charging", "Beautiful bright AMOLED display", "IP64 splash resistant"],
    cons: ["OS has pre-installed ads", "Mid-range processor only", "Useless 2MP macro lens"],
    verdict: "₹30K mein 200MP camera gives it unmatched value. Budget camera lovers ke liye clear winner.",
    amazon: "https://amzn.to/redminote15pro", flipkart: "https://flipkart.com/redminote15pro",
  },
  {
    id: "google-pixel-10-pro",
    name: "Google Pixel 10 Pro",
    price: "₹1,09,999",
    score: 8.9,
    badge: "Smartest AI",
    image: "/images/phones/google-pixel-10-pro.png",
    specs: {
      camera:    { value: "50MP Main + 48MP Zoom", score: 10 },
      battery:   { value: "5100mAh", score: 8 },
      ram:       { value: "16GB", score: 10 },
      display:   { value: "6.7\" Actua LTPO 120Hz", score: 9 },
      charging:  { value: "45W Wired", score: 7 },
      processor: { value: "Google Tensor G5 (TSMC)", score: 9 },
      storage:   { value: "256GB / 512GB", score: 9 },
      os:        { value: "Android 16 (Google AI)", score: 10 },
    },
    pros: ["Best-in-class clean AI", "TSMC built Tensor G5", "Industry leading skin tone camera", "7 years feature drops"],
    cons: ["Charging speed is average", "India availability (limited colors)"],
    verdict: "Agar aapko clean Android aur smartest AI features chahiye, toh Pixel 10 Pro se behtar kuch nahi.",
    amazon: "https://amzn.to/pixel10pro", flipkart: "https://flipkart.com/pixel10pro",
  },
  {
    id: "nothing-fold-1",
    name: "Nothing Fold (1)",
    price: "₹1,24,999",
    score: 8.7,
    badge: "Innovation Award",
    image: "/images/phones/nothing-fold-1.png",
    specs: {
      camera:    { value: "50MP Triple System", score: 8 },
      battery:   { value: "4800mAh Dual Cell", score: 8 },
      ram:       { value: "12GB / 16GB", score: 9 },
      display:   { value: "8\" Foldable LTPO", score: 10 },
      charging:  { value: "66W Wired", score: 8 },
      processor: { value: "Snapdragon 8 Elite Gen 5", score: 10 },
      storage:   { value: "512GB", score: 9 },
      os:        { value: "Nothing OS 3.5 Fold", score: 9 },
    },
    pros: ["Transparent hinge design", "Unique Glyph interface for fold", "Thinnest foldable in India", "Clean Nothing software"],
    cons: ["First-gen foldable concerns", "Camera zoom is limited"],
    verdict: "Nothing ka pehla foldable hi masterpiece hai. Design aur performance ka perfect sangam.",
    amazon: "https://amzn.to/nothingfold1", flipkart: "https://flipkart.com/nothingfold1",
  },
  // ════════════════════════════════════════
  // 🆕 NEW LAUNCHES — APRIL 2026
  // ════════════════════════════════════════
  {
    id: "infinix-note-60-pro",
    name: "Infinix Note 60 Pro",
    price: "₹14,999",
    score: 7.6,
    badge: "🆕 New Launch",
    image: "/images/phones/redmi-note-15-pro.png",
    specs: {
      camera:    { value: "108MP + 13MP + 2MP Triple", score: 8 },
      battery:   { value: "6500mAh + 45W Charging", score: 9 },
      ram:       { value: "8GB RAM", score: 7 },
      display:   { value: "6.78\" Active Matrix AMOLED 120Hz", score: 9 },
      charging:  { value: "45W Fast Charging", score: 7 },
      processor: { value: "MediaTek Helio G100 Ultra", score: 7 },
      storage:   { value: "256GB (Expandable)", score: 8 },
      os:        { value: "XOS 14 (Android 14)", score: 6 },
    },
    pros: ["Active Matrix AMOLED under ₹15K (rare!)", "6500mAh big battery", "108MP triple camera", "256GB storage out of box"],
    cons: ["XOS 14 has bloatware", "Helio G100 is mid-range only", "15W less charging vs rivals", "No 5G connectivity"],
    verdict: "₹15K mein Active Matrix AMOLED display milna bahut rare hai. Display aur storage ke liye best choice.",
    amazon: `https://www.amazon.in/s?k=infinix+note+60+pro&tag=aitechnews-21`,
    flipkart: "https://www.flipkart.com/search?q=infinix+note+60+pro",
  },
  {
    id: "realme-narzo-100-lite-5g",
    name: "Realme Narzo 100 Lite 5G",
    price: "₹13,499 से",
    score: 7.5,
    badge: "🆕 Just Launched",
    image: "/images/phones/realme-gt-7-pro.png",
    specs: {
      camera:    { value: "13MP Rear + 5MP Front", score: 5 },
      battery:   { value: "7000mAh Titan Battery", score: 10 },
      ram:       { value: "4GB / 6GB RAM", score: 6 },
      display:   { value: "6.8\" LCD 144Hz, 900 nits", score: 8 },
      charging:  { value: "15W + Reverse + Bypass", score: 5 },
      processor: { value: "MediaTek Dimensity 6300 (5nm)", score: 7 },
      storage:   { value: "64GB / 128GB (Expandable)", score: 7 },
      os:        { value: "Realme UI 7.0 (Android 16)", score: 8 },
    },
    pros: ["7000mAh Titan Battery — 3 days life!", "144Hz 6.8\" display under ₹14K", "5G + Android 16 + IP64", "Military-grade durability certified"],
    cons: ["Only 13MP main camera — weak", "15W slow charging (7000mAh ke liye)", "LCD panel (not AMOLED)", "Limited RAM options (4GB/6GB only)"],
    verdict: "Battery life mein king — 7000mAh wala ₹13K ka phone mil paana miracle hai. Travelers aur outdoor users ke liye #1.",
    amazon: `https://www.amazon.in/s?k=realme+narzo+100+lite+5g&tag=aitechnews-21`,
    flipkart: "https://www.flipkart.com/search?q=realme+narzo+100+lite+5g",
  },
  // ════════════════════════════════════════
  // 💰 BUDGET SEGMENT (₹10K - ₹20K)
  // ════════════════════════════════════════
  {
    id: "redmi-note-15",
    name: "Redmi Note 15 5G",
    price: "₹14,999",
    score: 7.5,
    badge: "Best Under 15K",
    image: "/images/phones/redmi-note-15-pro.png",
    specs: {
      camera:    { value: "108MP Triple Camera", score: 8 },
      battery:   { value: "5000mAh", score: 8 },
      ram:       { value: "6GB / 8GB", score: 7 },
      display:   { value: "6.67\" AMOLED 120Hz", score: 8 },
      charging:  { value: "45W Fast Charge", score: 7 },
      processor: { value: "Snapdragon 4s Gen 2", score: 7 },
      storage:   { value: "128GB / 256GB", score: 8 },
      os:        { value: "HyperOS 2 (Android 15)", score: 7 },
    },
    pros: ["108MP AMOLED display under ₹15K", "45W fast charging", "Snapdragon chipset", "IR blaster + side fingerprint"],
    cons: ["Average video quality", "HyperOS ads issue", "No OIS"],
    verdict: "₹15K ke budget mein AMOLED + 108MP + 45W charging dena ek bada value proposition hai.",
    amazon: "https://amzn.to/redminote15", flipkart: "https://flipkart.com/redminote15",
  },
  {
    id: "realme-narzo-70-pro",
    name: "Realme Narzo 70 Pro",
    price: "₹17,999",
    score: 7.4,
    badge: "Camera King Budget",
    image: "/images/phones/realme-gt-7-pro.png",
    specs: {
      camera:    { value: "50MP Sony IMX890 OIS", score: 9 },
      battery:   { value: "5000mAh", score: 8 },
      ram:       { value: "8GB / 12GB", score: 7 },
      display:   { value: "6.67\" Super AMOLED 120Hz", score: 8 },
      charging:  { value: "67W SuperDart", score: 8 },
      processor: { value: "Dimensity 7050", score: 7 },
      storage:   { value: "128GB / 256GB", score: 7 },
      os:        { value: "Realme UI 5 (Android 14)", score: 7 },
    },
    pros: ["Sony IMX890 OIS sensor under ₹18K", "67W fast charging", "Super AMOLED display", "Premium design"],
    cons: ["Bloatware present", "Heating under gaming load", "Average ultra-wide camera"],
    verdict: "₹18K mein Sony IMX890 OIS sensor wala best camera phone — photography lovers ke liye dream pick.",
    amazon: "https://amzn.to/narzo70pro", flipkart: "https://flipkart.com/narzo70pro",
  },
  {
    id: "samsung-galaxy-m15-5g",
    name: "Samsung Galaxy M15 5G",
    price: "₹11,999",
    score: 7.2,
    badge: "Best Battery 10K",
    image: "/images/phones/samsung-galaxy-a56.png",
    specs: {
      camera:    { value: "50MP + 5MP + 2MP Triple", score: 7 },
      battery:   { value: "6000mAh", score: 10 },
      ram:       { value: "4GB / 6GB", score: 6 },
      display:   { value: "6.5\" Super AMOLED 90Hz", score: 8 },
      charging:  { value: "25W Fast Charging", score: 6 },
      processor: { value: "Exynos 1330", score: 6 },
      storage:   { value: "128GB (expandable)", score: 8 },
      os:        { value: "One UI 6 (Android 14, 4yr updates)", score: 9 },
    },
    pros: ["6000mAh 2-day battery", "Super AMOLED display under ₹12K", "4 years OS updates", "MicroSD support"],
    cons: ["Exynos 1330 is not fast", "Only 25W charging", "Camera performance average"],
    verdict: "₹12K mein Samsung ka trust + 6000mAh battery + AMOLED + 4 saal ke updates gives outstanding long-term value.",
    amazon: "https://amzn.to/galaxym15", flipkart: "https://flipkart.com/galaxym15",
  },
  {
    id: "poco-x7-neo",
    name: "Poco X7 Neo 5G",
    price: "₹19,999",
    score: 7.6,
    badge: "Gaming Under 20K",
    image: "/images/phones/iqoo-neo-10.png",
    specs: {
      camera:    { value: "108MP Triple Camera", score: 8 },
      battery:   { value: "5110mAh", score: 8 },
      ram:       { value: "8GB / 12GB", score: 8 },
      display:   { value: "6.67\" AMOLED 120Hz", score: 9 },
      charging:  { value: "45W HyperCharge", score: 7 },
      processor: { value: "MediaTek Dimensity 7025 Ultra", score: 7 },
      storage:   { value: "128GB / 256GB", score: 8 },
      os:        { value: "HyperOS (Android 15)", score: 7 },
    },
    pros: ["AMOLED display 120Hz under ₹20K", "108MP camera", "Gorilla Glass protection", "Stereo speakers"],
    cons: ["HyperOS bloatware concern", "Gaming chip is not flagship level", "No wireless charging"],
    verdict: "₹20K ke budget me AMOLED + stereo speakers + 108MP combo milna bahut rare hai. POCO X7 Neo clear value winner hai.",
    amazon: "https://amzn.to/pocox7neo", flipkart: "https://flipkart.com/pocox7neo",
  },
];

const RELATED = [
  { a: "Apple iPhone 16 Pro Max", b: "Samsung Galaxy S26 Ultra" },
  { a: "iQOO Neo 10", b: "Xiaomi Redmi Note 15 Pro" },
  { a: "OnePlus 15", b: "Realme GT 7 Pro" },
  { a: "Samsung Galaxy M15 5G", b: "Redmi Note 15 5G" },
  { a: "Poco X7 Neo 5G", b: "Realme Narzo 70 Pro" },
  { a: "iQOO 15R", b: "OnePlus 15R" },
  { a: "Google Pixel 10 Pro", b: "Xiaomi 17 Ultra" },
  { a: "Samsung Galaxy A56 5G", b: "OnePlus 15R" },
  { a: "Infinix Note 60 Pro", b: "Realme Narzo 100 Lite 5G" },
  { a: "Infinix Note 60 Pro", b: "Redmi Note 15 5G" },
  { a: "Realme Narzo 100 Lite 5G", b: "Samsung Galaxy M15 5G" },
];

const SPEC_LABELS: Record<string, string> = {
  camera: "Camera", battery: "Battery", ram: "RAM",
  display: "Display", charging: "Charging",
  processor: "Processor", storage: "Storage", os: "Software",
};

type PhoneType = Phone | null;

function ScoreRing({ score }: { score: number }) {
  const isExcellent = score >= 8.5;
  const isGood = score >= 7.5;
  
  return (
    <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 shrink-0">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
        <path
          className="stroke-muted"
          strokeWidth="3"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={`${isExcellent ? 'stroke-primary' : isGood ? 'stroke-amber-500' : 'stroke-red-500'} transition-all duration-1000 ease-out`}
          strokeWidth="3"
          strokeDasharray={`${score * 10}, 100`}
          strokeLinecap="round"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <span className={`text-sm md:text-base font-bold ${isExcellent ? 'text-primary' : isGood ? 'text-amber-500' : 'text-red-500'}`}>
          {score.toFixed(1)}
        </span>
      </div>
    </div>
  );
}

function PhoneSearch({ value, onChange, placeholder }: { value: PhoneType, onChange: (p: PhoneType) => void, placeholder: string }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState(value?.name || "");
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const h = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  
  useEffect(() => {
      if (value) setQ(value.name ?? '');
  }, [value]);
  
  const filtered = PHONES.filter(p =>
    (p.name ?? '').toLowerCase().includes(q.toLowerCase()) && p !== value
  );
  
  return (
    <div ref={ref} className="relative flex-1 min-w-[240px]">
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <input 
          value={q}
          onChange={e => { setQ(e.target.value); setOpen(true); onChange(null); }}
          onFocus={() => { setOpen(true); setQ(""); }}
          placeholder={placeholder}
          className="w-full pl-11 pr-4 py-3.5 bg-secondary/30 hover:bg-secondary/50 focus:bg-background border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl text-sm font-medium outline-none transition-all shadow-sm"
        />
      </div>
      
      {open && filtered.length > 0 && (
        <div className="absolute top-[calc(100%+8px)] left-0 right-0 glass backdrop-blur-xl border border-border/50 rounded-xl z-50 overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-2">
          <div className="max-h-[300px] overflow-y-auto">
            {filtered.map(p => (
              <div 
                key={p.id}
                onClick={() => { onChange(p); setQ(p.name ?? ''); setOpen(false); }}
                className="flex items-center justify-between px-4 py-3.5 cursor-pointer hover:bg-primary/10 border-b border-border/30 last:border-0 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 overflow-hidden">
                    <Smartphone className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-semibold text-sm group-hover:text-primary transition-colors">{p.name}</span>
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">{p.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CompareClient() {
  const [phoneA, setPhoneA] = useState<PhoneType>(PHONES[0]);
  const [phoneB, setPhoneB] = useState<PhoneType>(PHONES[1]);

  const winner = phoneA && phoneB ? ((phoneA.score ?? 0) >= (phoneB.score ?? 0) ? phoneA : phoneB) : null;
  const getWinner = (key: string) => {
    if (!phoneA || !phoneB) return null;
    const specKey = key as keyof Phone['specs'];
    const sa = phoneA.specs?.[specKey]?.score ?? 0;
    const sb = phoneB.specs?.[specKey]?.score ?? 0;
    if (sa === sb) return "tie";
    return sa > sb ? "a" : "b";
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20 animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <div className="text-center mb-12 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 hover:bg-primary/20 transition-colors">
          <Smartphone className="h-4 w-4" />
          Ultimate Phone Compare Tool
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
          Kaunsa smartphone <span className="gradient-text">lena chahiye?</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Select any two phones below to compare detailed specs, read pros and cons, and see our expert AITechNews verdict based on real-world tests.
        </p>
        <div className="mt-6 flex justify-center gap-4 text-xs font-medium text-muted-foreground">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {PHONES.length} Phones Listed</span>
          <span className="flex items-center gap-1.5"><TrendingUp className="h-3.5 w-3.5 text-primary" /> Latest 2026 Models</span>
        </div>
      </div>

      {/* Selectors */}
      <div className="flex flex-col md:flex-row items-center gap-4 bg-secondary/20 p-4 md:p-6 rounded-3xl border border-border/50 shadow-sm mb-12">
        <PhoneSearch value={phoneA} onChange={setPhoneA} placeholder="Select first smartphone..." />
        
        <div className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-background border shadow-sm border-border z-10 -my-2 md:-mx-2 text-muted-foreground font-black text-xs tracking-widest relative overflow-hidden">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-br from-muted-foreground to-foreground">VS</span>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
        </div>
        
        <PhoneSearch value={phoneB} onChange={setPhoneB} placeholder="Select second smartphone..." />
      </div>

      {phoneA && phoneB && (
        <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-500">
          
          {/* Quick Score Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[phoneA, phoneB].map((p) => (
              <div 
                key={p.id} 
                className={`relative p-6 glass rounded-3xl border transition-all duration-300 flex flex-col md:flex-row items-center gap-5 hover:-translate-y-1 hover:shadow-xl ${
                  p === winner 
                    ? "border-primary/50 shadow-primary/10" 
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                {/* Winner Crown */}
                {p === winner && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-primary to-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg shadow-primary/30 border border-white/20 whitespace-nowrap z-10">
                    AITechNews Winner 🏆
                  </div>
                )}
                
                <div className="w-full md:w-auto flex justify-center">
                  <div className="relative w-28 h-28 rounded-xl overflow-hidden bg-secondary/50 p-2 border border-border/50 shadow-inner">
                    <Image 
                      src={p.image ?? ''} 
                      alt={p.name ?? ''} 
                      fill 
                      priority={p === phoneA || p === phoneB}
                      className="object-contain p-2 hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                </div>
                
                <ScoreRing score={p.score ?? 0} />
                
                <div className="flex-1 min-w-0">
                  {p.badge && (
                    <span className="inline-block px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-wider mb-2">
                      {p.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-bold tracking-tight text-foreground truncate">{p.name}</h3>
                  <div className="text-primary font-black mt-1 text-lg">{p.price}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Verdict Box */}
          <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <CheckCircle2 className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Expert Verdict
              </div>
              <h4 className="text-2xl font-black text-foreground mb-3">
                {winner!.name} takes the crown.
              </h4>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {winner!.verdict}
              </p>
            </div>
          </div>

          {/* Detailed Spec Comparison */}
          <div className="glass rounded-3xl border border-border/50 overflow-hidden shadow-sm">
            <div className="grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-secondary/50 border-b border-border/50 px-4 md:px-6 py-4">
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Specifications</div>
              <div className="text-xs md:text-sm font-bold text-center truncate px-2">{phoneA.name}</div>
              <div className="text-xs md:text-sm font-bold text-center truncate px-2">{phoneB.name}</div>
            </div>
            
            <div className="divide-y divide-border/30">
              {Object.keys(SPEC_LABELS).map((key, index) => {
                const specKey = key as keyof Phone['specs'];
                const w = getWinner(key);
                return (
                  <div 
                    key={key} 
                    className={`grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] px-4 md:px-6 py-4 items-center transition-colors hover:bg-secondary/20 ${index % 2 === 0 ? 'bg-background/30' : ''}`}
                  >
                    <div className="text-xs md:text-sm font-semibold text-muted-foreground">
                      {SPEC_LABELS[key]}
                    </div>
                    
                    <div className={`text-xs md:text-sm text-center px-2 py-1.5 rounded-lg mx-1 flex flex-col items-center justify-center min-h-[44px] ${w === "a" ? "bg-primary/10 text-primary font-bold" : "text-foreground"}`}>
                      {phoneA.specs?.[specKey]?.value}
                      {w === "a" && <span className="block mt-1"><CheckCircle2 className="w-3.5 h-3.5" /></span>}
                    </div>
                    
                    <div className={`text-xs md:text-sm text-center px-2 py-1.5 rounded-lg mx-1 flex flex-col items-center justify-center min-h-[44px] ${w === "b" ? "bg-primary/10 text-primary font-bold" : "text-foreground"}`}>
                      {phoneB.specs?.[specKey]?.value}
                      {w === "b" && <span className="block mt-1"><CheckCircle2 className="w-3.5 h-3.5" /></span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[phoneA, phoneB].map((p) => (
              <div key={p.id} className="space-y-4">
                <div className="glass rounded-2xl border border-border/50 p-5 p-6">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">
                    <CheckCircle2 className="w-4 h-4" /> {(p.name ?? '').split(" ")[0]} Pros
                  </h4>
                  <ul className="space-y-3">
                    {(p.pros ?? []).map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-emerald-500/50 mt-0.5">•</span>
                        <span className="leading-snug">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="glass rounded-2xl border border-border/50 p-5 p-6 bg-red-500/5">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-red-500 uppercase tracking-widest mb-4">
                    <AlertTriangle className="w-4 h-4" /> Cons
                  </h4>
                  <ul className="space-y-3">
                    {(p.cons ?? []).map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-red-500/50 mt-0.5">•</span>
                        <span className="leading-snug">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Buying Links */}
          <div className="glass rounded-3xl border border-border/50 p-6 md:p-8">
            <h3 className="text-lg font-bold flex items-center gap-2 mb-6">
              <ShoppingCart className="w-5 h-5 text-primary" /> Where to buy?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[phoneA, phoneB].map((p) => (
                <div key={p.id} className="bg-secondary/30 p-4 rounded-2xl border border-border/50">
                  <div className="text-xs font-semibold text-muted-foreground mb-3">{p.name} Prices</div>
                  <div className="flex gap-3">
                    <a href={p.amazon} target="_blank" rel="noopener noreferrer" 
                       className="flex-1 flex items-center justify-center gap-2 bg-[#FF9900] hover:bg-[#FF9900]/90 text-black font-bold py-3 px-4 rounded-xl transition-transform hover:-translate-y-0.5 active:translate-y-0 text-sm shadow-sm">
                      Amazon
                    </a>
                    <a href={p.flipkart} target="_blank" rel="noopener noreferrer" 
                       className="flex-1 flex items-center justify-center gap-2 bg-[#2874F0] hover:bg-[#2874F0]/90 text-white font-bold py-3 px-4 rounded-xl transition-transform hover:-translate-y-0.5 active:translate-y-0 text-sm shadow-sm">
                      Flipkart
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Suggested Comparisons */}
      <div className="mt-16 pt-12 border-t border-border/30">
        <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Popular Comparisons</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {RELATED.map((r, i) => (
            <button
              key={i}
              onClick={() => {
                const a = PHONES.find(p => (p.name ?? '').includes(r.a.split(" ")[1])) || PHONES.find(p => p.name === r.a);
                const b = PHONES.find(p => (p.name ?? '').includes(r.b.split(" ")[1])) || PHONES.find(p => p.name === r.b);
                if(a) setPhoneA(a); 
                if(b) setPhoneB(b);
                window.scrollTo({top: 0, behavior: "smooth"});
              }}
              className="group text-left p-5 bg-secondary/20 hover:bg-secondary/40 rounded-2xl border border-border/30 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">VS Comparison</span>
              </div>
              <div className="font-semibold text-sm text-foreground/90 leading-tight">
                {r.a}
              </div>
              <div className="text-muted-foreground text-[10px] my-1 opacity-60">vs</div>
              <div className="font-semibold text-sm text-foreground/90 leading-tight">
                {r.b}
              </div>
              <div className="mt-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                View Specs &rarr;
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
