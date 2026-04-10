'use client';

import React, { useState, useMemo } from 'react';
import { Smartphone, Star, Zap, Battery, Cpu, Filter, ExternalLink, CheckCircle2, TrendingUp, Award, Sparkles, AlertTriangle, ThumbsUp, ThumbsDown, Scale, X, Check } from 'lucide-react';
import Link from 'next/link';

interface Phone {
  id: string;
  name: string;
  brand: string;
  price: number;
  priceDisplay: string;
  score: number;
  badge?: string;
  image: string;
  specs: {
    processor: string;
    ram: string;
    display: string;
    camera: string;
    battery: string;
    charging: string;
    os: string;
  };
  highlights: string[];
  category: 'budget' | 'midrange' | 'premium' | 'flagship';
  amazon: string;
  flipkart: string;
  pros: string[];
  cons: string[];
  verdict: string;
  useCases?: string[];
}

// Fallback image used if any phone image fails to load
const FALLBACK = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80';

const ALL_PHONES: Phone[] = [
  // ─── Under ₹10K ───────────────────────────────────────────────────────────
  {
    id: 'redmi-14c',
    name: 'Redmi 14C', brand: 'Xiaomi', price: 9499, priceDisplay: '₹9,499',
    score: 8.2, badge: 'Best Under 10K',
    image: '/images/phones/redmi-14c.jpg',
    specs: { processor: 'Helio G85', ram: '4GB/6GB', display: '6.88" HD+ 90Hz', camera: '50MP', battery: '5160mAh', charging: '18W', os: 'HyperOS (Android 14)' },
    highlights: ['50MP Camera at ₹9.5K', '5160mAh Long Battery', '128GB/256GB Storage', '90Hz Smooth Display'],
    category: 'budget',
    amazon: 'https://www.amazon.in/s?k=Redmi+14C&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Redmi+14C',
    pros: ['₹10K के अंदर 50MP कैमरा मिलना बहुत बड़ी बात', 'बैटरी बैकअप शानदार है (2 दिन Easy)', 'Storage 256GB तक मिलता है'],
    cons: ['Processor थोड़ा पुराना लगता है', 'HD+ display है, FHD नहीं'],
    verdict: '₹10,000 से कम में Redmi 14C सबसे balanced phone है। Camera और Battery दोनों solid हैं।',
    useCases: ['All-Rounder', 'Battery'],
  },
  {
    id: 'realme-c61',
    name: 'Realme C61', brand: 'Realme', price: 8999, priceDisplay: '₹8,999',
    score: 7.8, badge: 'Fastest Charging',
    image: '/images/phones/realme-c61.jpg',
    specs: { processor: 'Unisoc T612', ram: '4GB/6GB', display: '6.74" HD+ 90Hz', camera: '32MP', battery: '5000mAh', charging: '33W SuperVOOC', os: 'Realme UI' },
    highlights: ['33W Fast Charging under ₹9K', 'Clean Realme UI', 'Bright Display Outdoors', 'Light & Slim Design'],
    category: 'budget',
    amazon: 'https://www.amazon.in/s?k=Realme+C61&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Realme+C61',
    pros: ['₹9K में 33W फ़ास्ट चार्जिंग मिलना Rare है', 'डिज़ाइन स्लिम और लाइटवेट है', 'Clean UI बिना ज़्यादा Bloatware'],
    cons: ['Unisoc प्रोसेसर heavy games नहीं चला पाएगा', 'कैमरा 32MP है, 50MP नहीं'],
    verdict: 'Fast Charging पसंद है तो Realme C61 इस बजट में सबसे अच्छा ऑप्शन है।',
    useCases: ['Battery'],
  },
  {
    id: 'samsung-a06',
    name: 'Samsung Galaxy A06', brand: 'Samsung', price: 9999, priceDisplay: '₹9,999',
    score: 7.6, badge: 'Best Brand Trust',
    image: '/images/phones/samsung-a06.jpg',
    specs: { processor: 'Exynos 850', ram: '4GB/6GB', display: '6.7" LCD 90Hz', camera: '50MP + 2MP', battery: '5000mAh', charging: '25W', os: 'One UI 6 Core' },
    highlights: ['Samsung Brand Reliability', '25W Charging at ₹10K', '50MP Camera', 'Best After-Sales Service'],
    category: 'budget',
    amazon: 'https://www.amazon.in/s?k=Samsung+Galaxy+A06&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Samsung+Galaxy+A06',
    pros: ['Samsung का ब्रांड ट्रस्ट और After-sales सर्विस', '25W चार्जिंग इस रेंज में अच्छी है', 'One UI Core काफी स्मूथ है'],
    cons: ['Exynos 850 चिप काफी पुरानी है', 'Display brightness कम है'],
    verdict: 'अगर Brand Trust और Service Center Network priority है, तो Samsung A06 सेफ़ चॉइस है।',
    useCases: ['Trust & Brand'],
  },

  // ─── Under ₹15K ───────────────────────────────────────────────────────────
  {
    id: 'realme-narzo-70-pro',
    name: 'Realme Narzo 70 Pro 5G', brand: 'Realme', price: 14499, priceDisplay: '₹14,499',
    score: 8.9, badge: '⭐ Best Under 15K',
    image: '/images/phones/realme-narzo-70-pro.jpg',
    specs: { processor: 'Dimensity 7050 5G', ram: '8GB', display: '6.67" AMOLED 120Hz', camera: '50MP Sony OIS', battery: '5000mAh', charging: '67W SuperVOOC', os: 'Realme UI 5' },
    highlights: ['67W Charging under ₹15K!', '5G Future-Proof', 'AMOLED 120Hz Display', 'Sony OIS Camera'],
    category: 'budget',
    amazon: 'https://www.amazon.in/s?k=Realme+Narzo+70+Pro+5G&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Realme+Narzo+70+Pro+5G',
    pros: ['67W चार्जिंग ₹15K में Unbeatable है', 'AMOLED 120Hz डिस्प्ले colors बेहतरीन', '5G Support से Future-proof है'],
    cons: ['HyperOS में कुछ Ads आ सकते हैं', 'Ultrawide कैमरा नहीं है'],
    verdict: '₹15K के अंदर Narzo 70 Pro 5G overall best phone है — Charging, Display, और 5G तीनों मिलते हैं।',
    useCases: ['All-Rounder', 'Battery'],
  },
  {
    id: 'redmi-note-14',
    name: 'Redmi Note 14', brand: 'Xiaomi', price: 14999, priceDisplay: '₹14,999',
    score: 8.7, badge: 'Best Camera',
    image: '/images/phones/redmi-note-14.jpg',
    specs: { processor: 'Dimensity 7025', ram: '6GB/8GB', display: '6.67" AMOLED 120Hz 2100nits', camera: '108MP + 8MP', battery: '5500mAh', charging: '33W Turbo', os: 'HyperOS' },
    highlights: ['108MP Highest Resolution', 'IP64 Water Resistant', '2100 nits Bright AMOLED', '5500mAh Battery'],
    category: 'budget',
    amazon: 'https://www.amazon.in/s?k=Redmi+Note+14&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Redmi+Note+14',
    pros: ['108MP कैमरा इस प्राइस में सबसे ज़्यादा Resolution', 'IP64 Splash Proof बारिश में भी Safe', '2100 nits धूप में भी साफ दिखता है'],
    cons: ['33W चार्जिंग Competitors से Slow है', 'HyperOS में प्री-इंस्टॉल्ड Ads आते हैं'],
    verdict: 'Camera और Display priority है तो Redmi Note 14 बेस्ट है। बस Fast Charging थोड़ी कम है।',
    useCases: ['Camera', 'Display'],
  },
  {
    id: 'samsung-m15-5g',
    name: 'Samsung Galaxy M15 5G', brand: 'Samsung', price: 13999, priceDisplay: '₹13,999',
    score: 8.3, badge: '6yr Updates',
    image: '/images/phones/samsung-m15-5g.jpg',
    specs: { processor: 'Dimensity 6100+ 5G', ram: '4GB/6GB', display: '6.5" Super AMOLED 90Hz', camera: '50MP + 5MP + 2MP', battery: '6000mAh', charging: '25W', os: 'One UI 6 (6yr updates)' },
    highlights: ['6 Years OS Updates!', '6000mAh Largest Battery', '5G Network Ready', 'Samsung Super AMOLED'],
    category: 'budget',
    amazon: 'https://www.amazon.in/s?k=Samsung+Galaxy+M15+5G&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Samsung+Galaxy+M15+5G',
    pros: ['6000mAh बैटरी — इस रेंज में सबसे ज़्यादा', '6 साल OS Updates की गारंटी', 'Samsung Super AMOLED बेहतरीन'],
    cons: ['25W चार्जिंग 6000mAh बैटरी को चार्ज करने में समय लगेगा', 'प्रोसेसर Gaming के लिए कमज़ोर'],
    verdict: 'लॉन्ग-टर्म यूज़ और बेस्ट बैटरी के लिए — Samsung M15 5G बेमिसाल है।',
    useCases: ['Battery', 'Long-term'],
  },
  {
    id: 'iqoo-z9x',
    name: 'iQOO Z9x', brand: 'iQOO', price: 13999, priceDisplay: '₹13,999',
    score: 8.1, badge: 'Best Gaming',
    image: '/images/phones/iqoo-z9x.jpg',
    specs: { processor: 'Snapdragon 6 Gen 1', ram: '4GB/6GB', display: '6.72" LCD 120Hz', camera: '50MP Sony', battery: '6000mAh', charging: '44W FlashCharge', os: 'FunTouchOS 14' },
    highlights: ['Snapdragon 6 Gen 1 Gaming', '44W Fast Charging', '6000mAh Huge Battery', 'V2e Gaming Chip'],
    category: 'budget',
    amazon: 'https://www.amazon.in/s?k=iQOO+Z9x&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=iQOO+Z9x',
    pros: ['Snapdragon 6 Gen 1 — Budget Gaming King', '6000mAh बैटरी + 44W चार्जिंग कॉम्बो', 'V2e चिप से Gaming smooth होती है'],
    cons: ['LCD Display है, AMOLED नहीं', 'FunTouchOS में Bloatware ज़्यादा है'],
    verdict: 'Budget में BGMI और Free Fire खेलना है? iQOO Z9x से बेहतर कोई ऑप्शन नहीं।',
    useCases: ['Gaming', 'Battery'],
  },

  {
    id: 'poco-x7-neo',
    name: 'POCO X7 Neo 5G', brand: 'POCO', price: 14499, priceDisplay: '₹14,499',
    score: 8.5, badge: 'Budget Gaming Best',
    image: '/images/phones/poco-x7-neo.jpg',
    specs: { processor: 'Dimensity 7050', ram: '8GB', display: '6.67" FHD+ AMOLED 120Hz', camera: '50MP OIS', battery: '5000mAh', charging: '33W Fast', os: 'HyperOS' },
    highlights: ['Dimensity 7050 Gaming', '120Hz Fast AMOLED', '50MP OIS Camera', 'Stereo Speakers'],
    category: 'budget',
    amazon: 'https://www.amazon.in/s?k=Poco+X7+Neo&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Poco+X7+Neo',
    pros: ['₹15K में AMOLED + 120Hz बहुत रेयर है', 'Dimensity 7050 से BGMI में Lag नहीं होता', 'OIS Camera होने से stable video आती है'],
    cons: ['डिज़ाइन थोड़ा बेसिक है', 'HyperOS प्री-एप्प्स के साथ आता है'],
    verdict: 'अगर अंडर 15K में शुद्ध गेमिंग और शानदार स्क्रीन चाहिए, तो POCO X7 Neo 5G से बेहतर फिलहाल कुछ नहीं।',
    useCases: ['Gaming', 'Display'],
  },
  {
    id: 'cmf-phone-2a',
    name: 'CMF Phone (2a)', brand: 'Nothing', price: 14999, priceDisplay: '₹14,999',
    score: 8.4, badge: 'No Ads UI',
    image: '/images/phones/cmf-phone-2a.jpg',
    specs: { processor: 'Dimensity 7020', ram: '6GB/8GB', display: '6.7" OLED 120Hz', camera: '50MP + 8MP', battery: '5000mAh', charging: '33W', os: 'Nothing OS 3.0' },
    highlights: ['Nothing OS Clean UI', 'Interchangeable Back Case', 'No Ads or Bloatware', '50MP Dual Camera'],
    category: 'budget',
    amazon: 'https://www.amazon.in/s?k=CMF+Phone+2a&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=CMF+Phone+2a',
    pros: ['Nothing OS 3.0 जीरो ऐड्स और ब्लोटवेयर के साथ', 'पीछे के कवर बदलने वाला यूनीक डिज़ाइन', 'काफी हल्का (Lightweight) और हैंडी है'],
    cons: ['बॉक्स में चार्जर नहीं मिलता है', 'प्रोसेसर हैवी गेमिंग के लिए नहीं है'],
    verdict: 'अगर बजट 15 हज़ार है और आपको iPhone जैसी क्लीन सॉफ्टवेयर फील चाहिए, तो ये फोन ले लें।',
    useCases: ['Clean Software', 'Design'],
  },

  // ─── Under ₹20–25K ────────────────────────────────────────────────────────
  {
    id: 'oneplus-nord-5',
    name: 'OnePlus Nord 5', brand: 'OnePlus', price: 24999, priceDisplay: '₹24,999',
    score: 8.0, badge: 'Clean Software',
    image: '/images/phones/oneplus-nord-5.jpg',
    specs: { processor: 'Snapdragon 7s Gen 3', ram: '8GB/12GB', display: '6.67" AMOLED 120Hz', camera: '50MP OIS', battery: '5500mAh', charging: '80W', os: 'OxygenOS 15' },
    highlights: ['OxygenOS — No Bloatware', '80W SuperVOOC', '4 Year Updates', 'Premium Design'],
    category: 'midrange',
    amazon: 'https://www.amazon.in/s?k=OnePlus+Nord+5&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=OnePlus+Nord+5',
    pros: ['OxygenOS सबसे Clean Android Experience देता है', '80W चार्जिंग — 30 मिनट में Full', 'प्रीमियम Glass-Metal डिज़ाइन'],
    cons: ['Ultrawide Camera Missing है', 'IP Rating सिर्फ Splash Proof है'],
    verdict: 'Clean software और fast charging चाहिए तो OnePlus Nord 5 ₹25K में बेस्ट पिक है।',
    useCases: ['Clean Software', 'All-Rounder'],
  },
  {
    id: 'redmi-note-15-pro',
    name: 'Redmi Note 15 Pro', brand: 'Xiaomi', price: 22999, priceDisplay: '₹22,999',
    score: 7.8, badge: 'Budget Camera King',
    image: '/images/phones/redmi-note-15-pro.jpg',
    specs: { processor: 'Dimensity 7300', ram: '8GB/12GB', display: '6.67" AMOLED 120Hz', camera: '200MP OIS', battery: '5500mAh', charging: '90W HyperCharge', os: 'HyperOS' },
    highlights: ['200MP Camera Under ₹23K', '90W Fast Charging', 'Bright AMOLED Display', 'IP64 Splash Proof'],
    category: 'midrange',
    amazon: 'https://www.amazon.in/s?k=Redmi+Note+15+Pro&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Redmi+Note+15+Pro',
    pros: ['200MP Camera ₹23K में — Unreal Value', '90W HyperCharge बहुत तेज़ है', 'AMOLED Display Colors शानदार हैं'],
    cons: ['Dimensity 7300 heavy gaming में गर्म होता है', 'HyperOS में Ads आते हैं'],
    verdict: 'फोटोग्राफी पसंद है? ₹25K से कम में 200MP Camera सिर्फ Redmi Note 15 Pro में मिलेगा।',
    useCases: ['Camera'],
  },

  // ─── Under ₹30K ───────────────────────────────────────────────────────────
  {
    id: 'iqoo-neo-10',
    name: 'iQOO Neo 10', brand: 'iQOO', price: 29999, priceDisplay: '₹29,999',
    score: 9.1, badge: 'Best Value',
    image: '/images/phones/iqoo-neo-10.jpg',
    specs: { processor: 'Snapdragon 8 Gen 3', ram: '8GB/12GB', display: '6.78" AMOLED 144Hz', camera: '50MP Sony', battery: '6400mAh', charging: '120W', os: 'Android 15' },
    highlights: ['SD 8 Gen 3 under ₹30K', '120W Ultra Fast Charging', '6400mAh Battery', '144Hz AMOLED'],
    category: 'midrange',
    amazon: 'https://www.amazon.in/s?k=iQOO+Neo+10&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=iQOO+Neo+10',
    pros: ['Snapdragon 8 Gen 3 ₹30K में — बेहतरीन Value', '120W चार्जिंग — 15 मिनट में 50%', '144Hz AMOLED Smoothness का बाप'],
    cons: ['FunTouchOS में Bloatware है', 'Camera Average है इस Price में'],
    verdict: 'Performance और Charging Speed चाहिए तो ₹30K में iQOO Neo 10 का कोई तोड़ नहीं।',
    useCases: ['Gaming', 'Battery'],
  },
  {
    id: 'motorola-edge-60-pro',
    name: 'Motorola Edge 60 Pro', brand: 'Motorola', price: 27999, priceDisplay: '₹27,999',
    score: 8.1, badge: 'Best Display',
    image: '/images/phones/motorola-edge-60-pro.jpg',
    specs: { processor: 'Dimensity 8350', ram: '12GB', display: '6.7" pOLED 144Hz', camera: '50MP+50MP+10MP', battery: '5000mAh', charging: '68W', os: 'Hello UI' },
    highlights: ['144Hz Curved pOLED', 'Triple 50MP Cameras', 'IP69 Waterproof', 'Near-Stock Android'],
    category: 'midrange',
    amazon: 'https://www.amazon.in/s?k=Motorola+Edge+60+Pro&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Motorola+Edge+60+Pro',
    pros: ['144Hz Curved pOLED Display — Immersive Experience', 'Triple 50MP Camera System बहुत Sharp', 'Near-Stock Android — Clean और Fast'],
    cons: ['Dimensity 8350 Flagship Chip नहीं है', 'Wireless चार्जिंग नहीं है'],
    verdict: 'Display और Clean Software Priority है? Motorola Edge 60 Pro ₹30K में Hidden Gem है।',
    useCases: ['Display', 'Clean Software'],
  },
  {
    id: 'samsung-a56',
    name: 'Samsung Galaxy A56 5G', brand: 'Samsung', price: 27999, priceDisplay: '₹27,999',
    score: 7.9, badge: 'Long-Term Pick',
    image: '/images/phones/samsung-a56.jpg',
    specs: { processor: 'Exynos 1580', ram: '8GB/12GB', display: '6.7" Super AMOLED 120Hz', camera: '50MP OIS + 12MP', battery: '5000mAh', charging: '45W', os: 'One UI 7' },
    highlights: ['6 Years OS Updates!', 'MicroSD Card Support', 'IP67 Water Resistant', 'Samsung Brand Trust'],
    category: 'midrange',
    amazon: 'https://www.amazon.in/s?k=Samsung+Galaxy+A56+5G&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Samsung+Galaxy+A56+5G',
    pros: ['6 साल OS Updates — लॉन्ग-टर्म में सबसे Safe', 'IP67 Waterproof — बारिश में Tension Free', 'MicroSD Support अभी भी है'],
    cons: ['Exynos 1580 Mid-range Chip है', '45W चार्जिंग Competitors से धीमी'],
    verdict: 'Samsung Brand Trust + 6 Year Updates + IP67 चाहिए? A56 5G से बढ़िया Safe Bet नहीं मिलेगा।',
    useCases: ['Long-term', 'Trust & Brand'],
  },

  // ─── Under ₹50K ───────────────────────────────────────────────────────────
  {
    id: 'realme-gt-7-pro',
    name: 'Realme GT 7 Pro', brand: 'Realme', price: 44999, priceDisplay: '₹44,999',
    score: 9.0, badge: 'Performance King',
    image: '/images/phones/realme-gt-7-pro.jpg',
    specs: { processor: 'Snapdragon 8 Elite', ram: '12GB/16GB', display: '6.78" AMOLED 120Hz', camera: '50MP Sony LYT-808', battery: '6500mAh', charging: '120W+50W Wireless', os: 'Realme UI 6' },
    highlights: ['Snapdragon 8 Elite Chip!', '120W+50W Wireless', 'IP69 Military Grade', '6500mAh Giant Battery'],
    category: 'premium',
    amazon: 'https://www.amazon.in/s?k=Realme+GT+7+Pro&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Realme+GT+7+Pro',
    pros: ['Snapdragon 8 Elite ₹45K में — Flagship Performance', '120W Wired + 50W Wireless चार्जिंग', 'IP69 Military-grade Durability'],
    cons: ['Realme UI में Bloatware ज़्यादा है', 'Camera Premium Flagships से पीछे है'],
    verdict: 'Raw Performance और Durability चाहिए? Realme GT 7 Pro पैसा वसूल है।',
    useCases: ['Gaming'],
  },
  {
    id: 'oneplus-15r',
    name: 'OnePlus 15R', brand: 'OnePlus', price: 42999, priceDisplay: '₹42,999',
    score: 8.8, badge: 'Best Battery',
    image: '/images/phones/oneplus-15r.jpg',
    specs: { processor: 'Snapdragon 8s Gen 4', ram: '12GB', display: '6.7" BOE AMOLED 120Hz', camera: '50MP Triple', battery: '7400mAh', charging: '80W SuperVOOC', os: 'OxygenOS 15' },
    highlights: ["7400mAh — India's Best Battery", '80W Fast Charging', 'OxygenOS — No Bloatware', 'Excellent Thermals'],
    category: 'premium',
    amazon: 'https://www.amazon.in/s?k=OnePlus+15R&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=OnePlus+15R',
    pros: ['7400mAh — India का सबसे बड़ा Battery वाला Phone', 'OxygenOS Clean और Ad-free है', 'Thermal Management Excellent है'],
    cons: ['Secondary Cameras Average हैं', 'Full Flagship Chip इसमें नहीं है'],
    verdict: 'Travel करते हो और बैटरी जल्दी खत्म हो जाती है? OnePlus 15R ले लो, 2 दिन चलेगा।',
    useCases: ['Battery', 'Clean Software'],
  },
  {
    id: 'iqoo-15r',
    name: 'iQOO 15R', brand: 'iQOO', price: 38999, priceDisplay: '₹38,999',
    score: 8.7, badge: 'Best Gaming',
    image: '/images/phones/iqoo-15r.jpg',
    specs: { processor: 'Snapdragon 8 Gen 4', ram: '8GB/12GB', display: '6.77" AMOLED 144Hz', camera: '50MP Sony IMX882', battery: '6400mAh', charging: '120W FlashCharge', os: 'FunTouchOS 15' },
    highlights: ['SD 8 Gen 4 Gaming Beast', '120W Lightning Charging', '144Hz Gaming Display', '6-Layer Vapor Cooling'],
    category: 'premium',
    amazon: 'https://www.amazon.in/s?k=iQOO+15R&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=iQOO+15R',
    pros: ['SD 8 Gen 4 + 120W = Gaming का Ultimate Combo', '144Hz Display Gaming के लिए Perfect', '6-Layer Vapor Cooling कभी गर्म नहीं होने देता'],
    cons: ['कैमरा सिर्फ Average है', 'FunTouchOS Bloatware भरा है'],
    verdict: 'BGMI/GTA सब Max Settings पर खेलना है? iQOO 15R गेमर्स का Dream Phone है।',
    useCases: ['Gaming'],
  },
  {
    id: 'nothing-4a-pro',
    name: 'Nothing Phone (4a) Pro', brand: 'Nothing', price: 41999, priceDisplay: '₹41,999',
    score: 8.3, badge: 'Best Design',
    image: '/images/phones/nothing-4a-pro.jpg',
    specs: { processor: 'Snapdragon 7s Gen 3', ram: '12GB', display: '6.67" AMOLED 120Hz', camera: '50MP + 50MP Telephoto', battery: '5200mAh', charging: '65W', os: 'Nothing OS 3.5' },
    highlights: ['Glyph Bar LED Unique', '50MP Telephoto Camera', 'Nothing OS Clean & Fast', 'Transparent Design Icon'],
    category: 'premium',
    amazon: 'https://www.amazon.in/s?k=Nothing+Phone+4a+Pro&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Nothing+Phone+4a+Pro',
    pros: ['Glyph Bar LED पूरी इंडस्ट्री में Unique है', 'Nothing OS बहुत Clean और Fast है', 'Transparent Design देखने में Premium लगता है'],
    cons: ['Processor Mid-range है (7s Gen 3)', '65W चार्जिंग Competitors से कम है'],
    verdict: 'Design और Unique Look चाहिए? Nothing Phone (4a) Pro से Stylish कोई Phone नहीं है।',
    useCases: ['Design', 'Clean Software'],
  },

  {
    id: 'vivo-v50-pro',
    name: 'Vivo V50 Pro', brand: 'Vivo', price: 39999, priceDisplay: '₹39,999',
    score: 8.8, badge: 'Portrait King',
    image: '/images/phones/vivo-v50-pro.jpg',
    specs: { processor: 'Dimensity 8250', ram: '8GB/12GB', display: '6.78" Curved AMOLED 120Hz', camera: '50MP Zeiss + 50MP UW', battery: '5500mAh', charging: '80W FlashCharge', os: 'Funtouch OS 15' },
    highlights: ['Zeiss Portrait Camera', 'Aura Light 3.0', 'Curved Super Thin Design', '50MP Eye AF Selfie'],
    category: 'premium',
    amazon: 'https://www.amazon.in/s?k=Vivo+V50+Pro&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Vivo+V50+Pro',
    pros: ['Zeiss के पोर्ट्रेट मोड्स DSLR लेवल की ब्लरिंग देते हैं', 'डिज़ाइन बहुत पतला और प्रीमियम है', '50MP का फ्रंट कैमरा व्लॉगिंग के लिए बेस्ट है'],
    cons: ['मोनो स्पीकर (Mono speaker) है, स्टीरियो नहीं', 'सॉफ्टवेयर (Funtouch) अभी भी थोड़ा Cluttered है'],
    verdict: 'अगर आपका मेन गोल Instagram Reels और Portrait Photos खींचना है, तो Vivo V50 Pro बेस्ट है।',
    useCases: ['Camera', 'Design'],
  },
  {
    id: 'ai-nova-flip',
    name: 'AI+ Nova Flip 5G', brand: 'Nothing', price: 59999, priceDisplay: '₹59,999',
    score: 9.2, badge: 'Best Foldable',
    image: '/images/blog/ai-nova-flip-5g.png',
    specs: { processor: 'Dimensity 8300 Ultra', ram: '8GB', display: '6.9" LTPO AMOLED 144Hz + 3.4" Cover', camera: '50MP OIS + 13MP UW', battery: '4300mAh', charging: '65W Fast', os: 'Clean Android + AI Tools' },
    highlights: ['Premium Flip Design', '50MP Main / Selfie Camera', 'Local AI Translation', 'Dual AMOLED Screens'],
    category: 'premium',
    amazon: 'https://www.amazon.in/s?k=Nova+Flip+5G&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Nova+Flip+5g',
    pros: ['कवर स्क्रीन से ही 50MP सेल्फी ली जा सकती है', 'Samsung Z Flip के मुकाबले बहुत सस्ता', 'Live Call Translation जैसा AI फीचर इनबिल्ट है'],
    cons: ['बैटरी 4300mAh है, नॉर्मल फोंस से कम है', 'प्रोसेसर मिड-रेंज है (Snapdragon 8 Gen 3 नहीं है)'],
    verdict: '60 हज़ार के बजट में यह सबसे कूल दिखने वाला AI Flip स्मार्टफोन है। (Highly Recommended)',
    useCases: ['Design', 'Premium', 'Camera'],
  },

  // ─── Flagship ─────────────────────────────────────────────────────────────
  {
    id: 'oneplus-15',
    name: 'OnePlus 15', brand: 'OnePlus', price: 64999, priceDisplay: '₹64,999',
    score: 8.6, badge: 'Flagship Killer',
    image: '/images/phones/oneplus-15.jpg',
    specs: { processor: 'Snapdragon 8 Elite', ram: '12GB/16GB', display: '6.82" BOE LTPO OLED', camera: '50MP Hasselblad', battery: '6100mAh', charging: '100W + 50W Wireless', os: 'OxygenOS 15' },
    highlights: ['100W Fastest in Class', 'Hasselblad Camera Tuning', 'LTPO OLED Display', 'Clean OxygenOS'],
    category: 'flagship',
    amazon: 'https://www.amazon.in/s?k=OnePlus+15&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=OnePlus+15',
    pros: ['100W चार्जिंग — 28 मिनट में Full Charge', 'Hasselblad Camera Tuning प्रीमियम Colors', 'OxygenOS सबसे Smooth Android Experience'],
    cons: ['Samsung/Apple के मुकाबले Camera थोड़ा पीछे', 'Base Variant में Plastic Frame है'],
    verdict: 'Flagship Experience चाहिए Samsung के Price बिना? OnePlus 15 Flagship Killer है।',
    useCases: ['Camera', 'Charging'],
  },
  {
    id: 'samsung-s26-ultra',
    name: 'Samsung Galaxy S26 Ultra', brand: 'Samsung', price: 129999, priceDisplay: '₹1,29,999',
    score: 9.0, badge: 'Best Overall',
    image: '/images/phones/samsung-s26-ultra.jpg',
    specs: { processor: 'Snapdragon 8 Elite Gen 5', ram: '12GB/16GB', display: '6.9" AMOLED 120Hz', camera: '200MP AI Quad', battery: '5000mAh', charging: '60W + 25W Wireless', os: 'Android 16 (7yr)' },
    highlights: ['200MP AI Camera', 'S Pen Included', 'Privacy Display', '7 Years Updates'],
    category: 'flagship',
    amazon: 'https://www.amazon.in/s?k=Samsung+Galaxy+S26+Ultra&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Samsung+Galaxy+S26+Ultra',
    pros: ['200MP AI Camera — Best in Android', 'S Pen Included — Note-taking King', '7 साल Updates बेजोड़ Long-term Value'],
    cons: ['बहुत भारी (228g) और Expensive है', '60W चार्जिंग Rivals से Slow है'],
    verdict: 'पैसा कोई issue नहीं है? Samsung Galaxy S26 Ultra 2026 का Ultimate Android King है।',
    useCases: ['Camera', 'Premium'],
  },
  {
    id: 'google-pixel-10',
    name: 'Google Pixel 10', brand: 'Google', price: 65999, priceDisplay: '₹65,999',
    score: 8.9, badge: 'Best AI Camera',
    image: '/images/phones/pixel-10.jpg',
    specs: { processor: 'Tensor G5', ram: '12GB', display: '6.3" Actua OLED 120Hz', camera: '50MP + 48MP UW', battery: '4700mAh', charging: '45W', os: 'Android 16 (7yr OS)' },
    highlights: ['Amazing Pixel Camera', 'Tensor G5 Performance', 'Gemini AI Integration', 'Compact 6.3" Size'],
    category: 'flagship',
    amazon: 'https://www.amazon.in/s?k=Google+Pixel+10&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=Google+Pixel+10',
    pros: ['कैमरा क्वालिटी (खासकर Night Sight) अनबीटेबल है', 'स्टॉक एंड्राइड और 7 साल के अपडेट्स', 'जेमिनी AI फीचर्स सिस्टम में deeply integrated हैं'],
    cons: ['गेमिंग परफॉरमेंस SD8 Gen 4 जितनी फ़ास्ट नहीं', 'बैटरी चार्जिंग स्पीड सिर्फ 45W है'],
    verdict: 'क्लीन एंड्राइड और बेस्ट कैमरा फोटोग्राफी के लिए Pixel 10 से बेहतर कुछ भी नहीं।',
    useCases: ['Camera', 'Clean Software'],
  },
  {
    id: 'apple-iphone-17',
    name: 'Apple iPhone 17', brand: 'Apple', price: 69900, priceDisplay: '₹69,900',
    score: 9.3, badge: 'Best iOS Phone',
    image: '/images/phones/iphone-17.jpg',
    specs: { processor: 'A19 Bionic', ram: '8GB', display: '6.1" Super Retina XDR 120Hz', camera: '48MP Dual Camera', battery: '3800mAh', charging: 'MagSafe 25W', os: 'iOS 19' },
    highlights: ['Finally 120Hz in Base Model', 'Apple Intelligence Ready', 'A19 Supreme Chip', 'Best Video Recording'],
    category: 'flagship',
    amazon: 'https://www.amazon.in/s?k=iPhone+17&tag=aitechnews-21',
    flipkart: 'https://www.flipkart.com/search?q=iPhone+17',
    pros: ['फाइनली बेसिक मॉडल में 120Hz (ProMotion) मिल रहा है', 'यूट्यूबर्स/क्रिएटर्स के लिए वीडियो रिकॉर्डिंग किंग', 'रीसेल वैल्यू (Resale value) सबसे तगड़ी है'],
    cons: ['बॉक्स में ना चार्जर है, ना ही फास्ट चार्जिंग (25W Only)', 'स्टोरेज अभी भी बेस 128GB है जो कम है'],
    verdict: 'अगर 70 हज़ार में पहली बार Apple ईकोसिस्टम में आना है, तो 120Hz डिस्प्ले वाला iPhone 17 परफेक्ट है।',
    useCases: ['Premium', 'Camera', 'Long-term'],
  },
];

const BUDGETS = [
  { label: 'All', max: Infinity },
  { label: 'Under ₹10K', max: 10000 },
  { label: 'Under ₹15K', max: 15000 },
  { label: 'Under ₹20K', max: 20000 },
  { label: 'Under ₹25K', max: 25000 },
  { label: 'Under ₹30K', max: 30000 },
  { label: 'Under ₹40K', max: 40000 },
  { label: 'Under ₹50K', max: 50000 },
  { label: '₹1L+', max: Infinity },
];

const BRANDS = ['All', 'Samsung', 'OnePlus', 'iQOO', 'Realme', 'Motorola', 'Nothing', 'Xiaomi'];
const USE_CASES = ['All', 'All-Rounder', 'Gaming', 'Camera', 'Battery', 'Clean Software', 'Premium'];
type SortKey = 'score' | 'price_asc' | 'price_desc';

function PhoneCard({ phone, compareList, toggleCompare }: { phone: Phone, compareList: Phone[], toggleCompare: (p: Phone) => void }) {
  const scoreColor = phone.score >= 9 ? 'text-emerald-400' : phone.score >= 8.5 ? 'text-primary' : 'text-amber-400';
  const scoreBg   = phone.score >= 9 ? 'bg-emerald-400/10' : phone.score >= 8.5 ? 'bg-primary/10' : 'bg-amber-400/10';
  const isComparing = compareList.some(p => p.id === phone.id);
  const canCompare = compareList.length < 2 || isComparing;

  return (
    <div className="group glass rounded-2xl border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col">

      {/* ── Phone Image (plain <img> — no Next.js domain restrictions) ── */}
      <div className="relative h-48 bg-gradient-to-br from-secondary/40 to-background overflow-hidden flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={phone.image}
          alt={phone.name}
          width={200}
          height={200}
          className="max-h-44 w-auto object-contain p-3 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK; }}
        />
        {phone.badge && (
          <div className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary text-white shadow-lg z-10">
            {phone.badge}
          </div>
        )}
        <div className={`absolute top-3 right-3 ${scoreBg} ${scoreColor} font-black text-sm px-2.5 py-1 rounded-full border border-current/20 z-10`}>
          {phone.score.toFixed(1)}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-5">
        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{phone.brand}</div>
        <h3 className="font-bold text-base text-foreground leading-tight mb-1 group-hover:text-primary transition-colors">{phone.name}</h3>
        <div className="text-xl font-black text-primary mb-3">{phone.priceDisplay}</div>

        <ul className="space-y-1.5 mb-4 flex-1">
          {phone.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />{h}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-secondary/30 rounded-lg p-2 text-center">
            <Battery className="w-3.5 h-3.5 text-primary mx-auto mb-1" />
            <div className="text-[9px] font-bold text-muted-foreground">{phone.specs.battery}</div>
          </div>
          <div className="bg-secondary/30 rounded-lg p-2 text-center">
            <Zap className="w-3.5 h-3.5 text-amber-400 mx-auto mb-1" />
            <div className="text-[9px] font-bold text-muted-foreground">{phone.specs.charging}</div>
          </div>
          <div className="bg-secondary/30 rounded-lg p-2 text-center">
            <Cpu className="w-3.5 h-3.5 text-blue-400 mx-auto mb-1" />
            <div className="text-[9px] font-bold text-muted-foreground leading-tight truncate">
              {phone.specs.processor.split(' ').slice(-2).join(' ')}
            </div>
          </div>
        </div>

        {/* Verdict Block */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 mb-3">
          <h4 className="text-[11px] font-bold text-primary mb-1 flex items-center gap-1"><Sparkles className="w-3 h-3" /> Our Verdict</h4>
          <p className="text-[11px] text-muted-foreground leading-relaxed">{phone.verdict}</p>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-emerald-500/5 rounded-lg p-2.5 border border-emerald-500/10">
            <h5 className="text-[10px] font-bold text-emerald-500 mb-1.5 flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> Pros</h5>
            <ul className="space-y-1">
              {phone.pros.slice(0, 2).map((p, i) => (
                <li key={i} className="text-[10px] text-muted-foreground flex items-start gap-1"><span className="text-emerald-500 mt-0.5">✓</span> {p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-500/5 rounded-lg p-2.5 border border-red-500/10">
            <h5 className="text-[10px] font-bold text-red-500 mb-1.5 flex items-center gap-1"><ThumbsDown className="w-3 h-3" /> Cons</h5>
            <ul className="space-y-1">
              {phone.cons.slice(0, 2).map((c, i) => (
                <li key={i} className="text-[10px] text-muted-foreground flex items-start gap-1"><span className="text-red-500 mt-0.5">✗</span> {c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-2 mb-2">
          <Link href={`/blog/${phone.id}-review`}
            className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-primary/20 to-purple-500/20 hover:from-primary/30 hover:to-purple-500/30 text-primary text-xs font-bold py-2.5 px-3 rounded-xl transition-all hover:-translate-y-0.5 border border-primary/20">
            <Sparkles className="w-3 h-3" /> Detailed Review
          </Link>
          <button 
            onClick={() => toggleCompare(phone)}
            disabled={!canCompare}
            className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-2 rounded-xl transition-all hover:-translate-y-0.5 border ${isComparing ? 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30' : 'bg-secondary/40 text-muted-foreground hover:bg-secondary/70 border-border/50'} ${!canCompare && 'opacity-50 cursor-not-allowed'}`}>
            {isComparing ? <><Check className="w-3 h-3" /> Added</> : <><Scale className="w-3 h-3" /> VS Compare</>}
          </button>
        </div>

        <div className="flex gap-2">
          <a href={phone.amazon} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#FF9900] hover:bg-[#FF9900]/90 text-black text-xs font-bold py-2.5 px-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-sm">
            <ExternalLink className="w-3 h-3" /> Amazon
          </a>
          <a href={phone.flipkart} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#2874F0] hover:bg-[#2874F0]/90 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-sm">
            <ExternalLink className="w-3 h-3" /> Flipkart
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BestPhonesClient() {
  const [maxBudget,  setMaxBudget]  = useState(Infinity);
  const [budgetLabel, setBudgetLabel] = useState('All');
  const [brand, setBrand] = useState('All');
  const [useCase, setUseCase] = useState('All');
  const [sort,  setSort]  = useState<SortKey>('score');
  
  // Compare State
  const [compareList, setCompareList] = useState<Phone[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const toggleCompare = (phone: Phone) => {
    if (compareList.some(p => p.id === phone.id)) {
      setCompareList(compareList.filter(p => p.id !== phone.id));
    } else {
      if (compareList.length < 2) setCompareList([...compareList, phone]);
    }
  };

  const filtered = useMemo(() => {
    let phones = ALL_PHONES.filter(p => {
      const inBudget = budgetLabel === '₹1L+' ? p.price >= 75000 : p.price <= maxBudget;
      const inBrand  = brand === 'All' || p.brand === brand;
      const inUseCase = useCase === 'All' || (p.useCases && p.useCases.includes(useCase));
      return inBudget && inBrand && inUseCase;
    });
    if (sort === 'score')      phones = [...phones].sort((a, b) => b.score - a.score);
    else if (sort === 'price_asc')  phones = [...phones].sort((a, b) => a.price - b.price);
    else if (sort === 'price_desc') phones = [...phones].sort((a, b) => b.price - a.price);
    return phones;
  }, [maxBudget, budgetLabel, brand, useCase, sort]);

  const topPick = filtered[0];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">

      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
          <Award className="h-4 w-4" /> Expert Picks 2026
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-foreground">
          Best Phones <span className="gradient-text">India 2026</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Budget set karo, brand choose karo — expert system aapko India ka best phone recommend karega with Amazon &amp; Flipkart direct links.
        </p>
        <div className="mt-5 flex justify-center gap-6 text-xs font-medium text-muted-foreground">
          <span className="flex items-center gap-1.5"><Smartphone className="h-3.5 w-3.5 text-primary" /> {ALL_PHONES.length} Phones</span>
          <span className="flex items-center gap-1.5"><TrendingUp className="h-3.5 w-3.5 text-primary" /> Updated April 2026</span>
          <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-primary" /> Expert Scored</span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-secondary/20 border border-border/50 rounded-2xl p-5 md:p-6 mb-10 space-y-5">
        <div className="flex items-center gap-2 text-sm font-bold text-foreground">
          <Filter className="w-4 h-4 text-primary" /> Filter Phones
        </div>
        <div>
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">🎯 Use Case (Specialty) 🔥</div>
          <div className="flex flex-wrap gap-2 mb-5">
            {USE_CASES.map(uc => (
              <button key={uc}
                onClick={() => setUseCase(uc)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${useCase === uc ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25' : 'bg-secondary/40 text-muted-foreground hover:bg-secondary/70 hover:text-foreground'}`}>
                {uc === 'Gaming' ? '🎮 Gaming' : uc === 'Camera' ? '📸 Camera' : uc === 'Battery' ? '🔋 Battery' : uc === 'Clean Software' ? '✨ Clean Software' : uc === 'Premium' ? '💎 Premium' : uc === 'All-Rounder' ? '⭐ All-Rounder' : 'All'}
              </button>
            ))}
          </div>

          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">💰 Budget</div>
          <div className="flex flex-wrap gap-2">
            {BUDGETS.map(b => (
              <button key={b.label}
                onClick={() => { setMaxBudget(b.max); setBudgetLabel(b.label); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${budgetLabel === b.label ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'bg-secondary/40 text-muted-foreground hover:bg-secondary/70 hover:text-foreground'}`}>
                {b.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[160px]">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">📱 Brand</div>
            <select value={brand} onChange={e => setBrand(e.target.value)}
              className="w-full bg-background border border-border/60 text-foreground text-sm rounded-xl px-3 py-2.5 outline-none focus:border-primary transition-colors">
              {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
          <div className="flex-1 min-w-[160px]">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">🔃 Sort By</div>
            <select value={sort} onChange={e => setSort(e.target.value as SortKey)}
              className="w-full bg-background border border-border/60 text-foreground text-sm rounded-xl px-3 py-2.5 outline-none focus:border-primary transition-colors">
              <option value="score">⭐ Best Score</option>
              <option value="price_asc">💰 Price: Low to High</option>
              <option value="price_desc">💎 Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Top Pick Banner */}
      {topPick && (
        <div className="bg-gradient-to-r from-primary/10 via-purple-500/5 to-transparent border border-primary/30 rounded-2xl p-5 md:p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-primary">AITechNews Top Pick</div>
              <div className="font-black text-foreground">{topPick.name}</div>
            </div>
          </div>
          <div className="flex-1 text-sm text-muted-foreground">
            {topPick.priceDisplay} — Score {topPick.score}/10 — {topPick.highlights[0]}
          </div>
          <a href={topPick.amazon} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-primary/90 transition-colors shrink-0">
            Best Deal <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-muted-foreground font-medium">
          <span className="text-foreground font-bold">{filtered.length} phones</span> match your filters
        </div>
        <Link href="/compare" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
          Compare any 2 phones →
        </Link>
      </div>

      {/* Phone Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(phone => <PhoneCard key={phone.id} phone={phone} compareList={compareList} toggleCompare={toggleCompare} />)}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <Smartphone className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="font-bold text-foreground mb-2">Is filter mein koi phone nahi mila</p>
          <p className="text-sm">Budget ya brand filter change karein</p>
        </div>
      )}

      {/* Floating Compare Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-lg bg-background/80 backdrop-blur-xl border border-primary/30 shadow-2xl shadow-primary/20 rounded-2xl p-4 flex items-center justify-between animate-in slide-in-from-bottom-10">
          <div className="flex gap-3">
            {compareList.map(p => (
              <div key={p.id} className="relative w-12 h-12 rounded-lg bg-secondary/50 border border-border flex items-center justify-center overflow-hidden">
                <img src={p.image} alt={p.name} className="w-10 h-10 object-contain" />
                <button onClick={() => toggleCompare(p)} className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white p-0.5 shadow-sm">
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            {compareList.length === 1 && (
              <div className="w-12 h-12 rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-muted-foreground/50" />
              </div>
            )}
          </div>
          
          {compareList.length === 2 ? (
            <button onClick={() => setShowCompareModal(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary/30 flex items-center gap-2">
              <Scale className="w-4 h-4" /> Compare Now
            </button>
          ) : (
            <div className="text-xs font-medium text-muted-foreground">
              Select 1 more to compare
            </div>
          )}
        </div>
      )}

      {/* Compare Modal */}
      {showCompareModal && compareList.length === 2 && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-background border border-border/50 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
            
            <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border/50 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-xl font-extrabold flex items-center gap-2">
                <Scale className="w-5 h-5 text-primary" /> VS Comparison
              </h2>
              <button onClick={() => setShowCompareModal(false)} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/70 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-[80px_1fr_1fr] md:grid-cols-[120px_1fr_1fr] gap-4 mb-8">
                {/* Headers */}
                <div className="flex flex-col justify-end pb-4 font-bold text-xs text-muted-foreground tracking-wider uppercase">Specs</div>
                {compareList.map((p, i) => (
                  <div key={p.id} className="text-center">
                    <img src={p.image} alt={p.name} className="h-24 mx-auto object-contain mb-3 drop-shadow-md" />
                    <div className="text-xs text-primary font-bold uppercase mb-1">{p.brand}</div>
                    <h3 className="font-bold text-sm md:text-base leading-tight mb-2">{p.name}</h3>
                    <div className="text-xl font-black">{p.priceDisplay}</div>
                  </div>
                ))}

                {/* Rows */}
                {[
                  { label: "Processor", key: "processor" },
                  { label: "Display", key: "display" },
                  { label: "Camera", key: "camera" },
                  { label: "Battery", key: "battery" },
                  { label: "Charging", key: "charging" },
                  { label: "Software", key: "os" }
                ].map((spec, i) => (
                  <React.Fragment key={spec.key}>
                     <div className={`flex items-center text-xs font-bold text-muted-foreground uppercase p-3 rounded-l-xl ${i%2===0 ? 'bg-secondary/30' : ''}`}>{spec.label}</div>
                     <div className={`flex items-center justify-center text-center p-3 text-sm font-semibold ${i%2===0 ? 'bg-secondary/30' : ''}`}>{compareList[0].specs[spec.key as keyof Phone['specs']]}</div>
                     <div className={`flex items-center justify-center text-center p-3 text-sm font-semibold rounded-r-xl ${i%2===0 ? 'bg-secondary/30' : ''}`}>{compareList[1].specs[spec.key as keyof Phone['specs']]}</div>
                  </React.Fragment>
                ))}
              </div>

              {/* Pros Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {compareList.map(p => (
                  <div key={p.id} className="border border-border/50 rounded-2xl p-4 bg-secondary/10">
                    <h4 className="font-bold text-sm mb-3 border-b border-border/50 pb-2">{p.name}</h4>
                    <div className="text-xs font-bold text-emerald-500 mb-2">PROS</div>
                    <ul className="mb-4 space-y-1.5 text-xs text-muted-foreground">{p.pros.map((pro, i) => <li key={i}>✓ {pro}</li>)}</ul>
                    <div className="text-xs font-bold text-red-500 mb-2">CONS</div>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">{p.cons.map((con, i) => <li key={i}>✗ {con}</li>)}</ul>
                  </div>
                ))}
              </div>

              {/* Verdict */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
                 <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Which one to buy?</h4>
                 <p className="text-sm md:text-base font-semibold leading-relaxed">
                   Agar aap <span className="text-primary font-bold">{compareList[0].highlights[0]}</span> dhund rahe hain, toh <span className="font-bold">{compareList[0].name}</span> pick karein.<br/><br/>
                   Lekin agar <span className="text-primary font-bold">{compareList[1].highlights[0]}</span> priority hai, toh <span className="font-bold">{compareList[1].name}</span> better choice hai.
                 </p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Blog Links */}
      <div className="mt-16 pt-12 border-t border-border/30">
        <h2 className="text-2xl font-bold text-center mb-8">📖 Budget-wise Expert Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { budget: 'Under ₹20,000', desc: 'Best phones for tight budgets in India 2026', link: '/blog/best-phones-under-20000-india-2026', color: 'from-emerald-500/10' },
            { budget: 'Under ₹30,000', desc: 'Sweet-spot mid-range phones with flagship features', link: '/blog/best-phones-under-30000-india-2026', color: 'from-blue-500/10' },
            { budget: 'Under ₹50,000', desc: 'Premium-tier phones without flagship price', link: '/blog/best-phones-under-50000-india-2026', color: 'from-purple-500/10' },
          ].map(item => (
            <Link key={item.budget} href={item.link}
              className={`group bg-gradient-to-br ${item.color} to-transparent border border-border/40 hover:border-primary/50 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300`}>
              <div className="text-lg font-black text-foreground mb-2 group-hover:text-primary transition-colors">{item.budget}</div>
              <div className="text-sm text-muted-foreground mb-4">{item.desc}</div>
              <span className="text-xs font-bold text-primary">Read Full Guide →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
