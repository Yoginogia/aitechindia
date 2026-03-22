'use client';

import { useState, useRef, useEffect } from "react";

const PHONES = [
  {
    id: "samsung-s26-ultra",
    name: "Samsung Galaxy S26 Ultra",
    price: "₹1,39,999",
    score: 9.0,
    badge: "Best Overall",
    specs: {
      camera:    { value: "200MP AI Quad", score: 10 },
      battery:   { value: "5000mAh", score: 8 },
      ram:       { value: "12GB / 16GB", score: 9 },
      display:   { value: "6.9\" AMOLED 120Hz Privacy", score: 10 },
      charging:  { value: "60W Wired + 25W Wireless", score: 8 },
      processor: { value: "Snapdragon 8 Elite Gen 5", score: 10 },
      storage:   { value: "256GB / 512GB / 1TB", score: 10 },
      os:        { value: "Android 16 (7 yrs updates)", score: 10 },
    },
    pros: ["Privacy Display — unique feature", "S Pen included free", "Best-in-class AI camera", "IP68 + Gorilla Armor 2"],
    cons: ["Heavy at 228g", "60W charging slow vs rivals", "Very expensive"],
    verdict: "2026 ka sabse feature-rich Android flagship. Privacy Display aur S Pen isko alag banate hain. Power users ke liye #1.",
    amazon: "https://amzn.to/s26ultra", flipkart: "https://flipkart.com/s26ultra",
  },
  {
    id: "xiaomi-17-ultra",
    name: "Xiaomi 17 Ultra",
    price: "₹1,39,999",
    score: 9.1,
    badge: "Best Camera",
    specs: {
      camera:    { value: "200MP Leica 1-inch + Mech Zoom", score: 10 },
      battery:   { value: "6000mAh", score: 9 },
      ram:       { value: "16GB", score: 10 },
      display:   { value: "6.73\" LTPO AMOLED 120Hz 3500nit", score: 10 },
      charging:  { value: "90W Wired + 50W Wireless", score: 10 },
      processor: { value: "Snapdragon 8 Elite Gen 5", score: 10 },
      storage:   { value: "512GB / 1TB", score: 9 },
      os:        { value: "Android 16 + HyperOS 3", score: 8 },
    },
    pros: ["World's first mechanical continuous zoom", "1-inch Leica sensor", "90W ultra-fast charging", "6000mAh massive battery"],
    cons: ["HyperOS has ads/bloatware", "Limited service centers", "No S Pen"],
    verdict: "Camera mein koi match nahi. Leica 1-inch sensor + mechanical zoom photography ke liye game changer. MWC 2026 Best in Show.",
    amazon: "https://amzn.to/xiaomi17ultra", flipkart: "https://flipkart.com/xiaomi17ultra",
  },
  {
    id: "oneplus-15",
    name: "OnePlus 15",
    price: "₹72,999",
    score: 8.6,
    badge: null,
    specs: {
      camera:    { value: "50MP Hasselblad Triple", score: 8 },
      battery:   { value: "6100mAh", score: 9 },
      ram:       { value: "12GB / 16GB", score: 9 },
      display:   { value: "6.82\" BOE LTPO OLED 120Hz", score: 9 },
      charging:  { value: "100W Wired + 50W Wireless", score: 10 },
      processor: { value: "Snapdragon 8 Elite Gen 5", score: 10 },
      storage:   { value: "256GB / 512GB", score: 8 },
      os:        { value: "OxygenOS 15 (Android 16)", score: 9 },
    },
    pros: ["100W insane fast charging", "Hasselblad camera tuning", "Clean OxygenOS", "Great battery life"],
    cons: ["Camera not ultra-flagship grade", "Plastic back on base variant"],
    verdict: "Best mid-flagship value. 100W charging se 0-100% sirf 28 minutes. Android purists ki first choice.",
    amazon: "https://amzn.to/oneplus15", flipkart: "https://flipkart.com/oneplus15",
  },
  {
    id: "oneplus-15r",
    name: "OnePlus 15R",
    price: "₹51,999",
    score: 8.2,
    badge: "Best Value",
    specs: {
      camera:    { value: "50MP Triple Camera", score: 7 },
      battery:   { value: "7400mAh", score: 10 },
      ram:       { value: "12GB", score: 8 },
      display:   { value: "6.7\" AMOLED 120Hz", score: 8 },
      charging:  { value: "80W SuperVOOC", score: 9 },
      processor: { value: "Snapdragon 8s Gen 4", score: 8 },
      storage:   { value: "128GB / 256GB", score: 7 },
      os:        { value: "OxygenOS 15 (Android 16)", score: 9 },
    },
    pros: ["7400mAh monster battery", "80W fast charging", "Clean OxygenOS", "IP65 rating"],
    cons: ["Camera not flagship-grade", "8s Gen 4 (not full Gen 5)"],
    verdict: "Best battery phone under ₹60K. Heavy users aur travelers ke liye ideal. Value for money unbeatable.",
    amazon: "https://amzn.to/oneplus15r", flipkart: "https://flipkart.com/oneplus15r",
  },
  {
    id: "nothing-phone-4a-pro",
    name: "Nothing Phone (4a) Pro",
    price: "₹48,990",
    score: 8.0,
    badge: null,
    specs: {
      camera:    { value: "50MP + 50MP Dual", score: 8 },
      battery:   { value: "5200mAh", score: 8 },
      ram:       { value: "12GB", score: 8 },
      display:   { value: "6.67\" AMOLED 120Hz 2400nit", score: 8 },
      charging:  { value: "65W Wired", score: 8 },
      processor: { value: "Snapdragon 7s Gen 3", score: 7 },
      storage:   { value: "256GB", score: 8 },
      os:        { value: "Nothing OS 3.5 (Android 16)", score: 9 },
    },
    pros: ["New Glyph Bar LED unique", "50MP telephoto lens", "Very clean fast software", "Lightweight design"],
    cons: ["Mid-range processor", "Limited India service centers", "No wireless charging"],
    verdict: "Mid-range mein design aur software ka sabse achha combo. Glyph notifications genuinely useful hain.",
    amazon: "https://amzn.to/nothing4apro", flipkart: "https://flipkart.com/nothing4apro",
  },
  {
    id: "nothing-phone-4a",
    name: "Nothing Phone (4a)",
    price: "₹31,999",
    score: 7.6,
    badge: "Best Under 35K",
    specs: {
      camera:    { value: "50MP + 8MP Dual", score: 7 },
      battery:   { value: "5000mAh", score: 8 },
      ram:       { value: "8GB / 12GB", score: 7 },
      display:   { value: "6.67\" AMOLED 120Hz", score: 8 },
      charging:  { value: "50W Wired", score: 7 },
      processor: { value: "Snapdragon 7s Gen 3", score: 7 },
      storage:   { value: "128GB / 256GB", score: 7 },
      os:        { value: "Nothing OS 3.5 (Android 16)", score: 9 },
    },
    pros: ["Glyph Interface unique", "Very clean software", "3 Android updates promised", "Lightweight 190g"],
    cons: ["No telephoto camera", "No wireless charging", "Average processor for gaming"],
    verdict: "₹32K mein sabse premium feel dene wala phone. Students aur design lovers ke liye perfect pick.",
    amazon: "https://amzn.to/nothing4a", flipkart: "https://flipkart.com/nothing4a",
  },
  {
    id: "iqoo-15r",
    name: "iQOO 15R",
    price: "₹44,998",
    score: 8.3,
    badge: "Best Gaming",
    specs: {
      camera:    { value: "50MP Sony IMX882 + 8MP", score: 7 },
      battery:   { value: "6400mAh", score: 9 },
      ram:       { value: "8GB / 12GB", score: 8 },
      display:   { value: "6.77\" AMOLED 144Hz 4500nit", score: 9 },
      charging:  { value: "120W FlashCharge", score: 10 },
      processor: { value: "Snapdragon 8 Gen 4", score: 9 },
      storage:   { value: "128GB / 256GB", score: 7 },
      os:        { value: "FunTouchOS 15 (Android 16)", score: 7 },
    },
    pros: ["120W lightning charging", "144Hz gaming display", "Snapdragon 8 Gen 4 full chip", "6400mAh battery"],
    cons: ["FunTouchOS has bloatware", "Camera average", "Heavy at 215g"],
    verdict: "Gamers ke liye best phone under ₹50K. 144Hz + 8 Gen 4 + 120W charging — no compromise on performance.",
    amazon: "https://amzn.to/iqoo15r", flipkart: "https://flipkart.com/iqoo15r",
  },
  {
    id: "vivo-x300-ultra",
    name: "Vivo X300 Ultra",
    price: "₹79,990",
    score: 8.8,
    badge: null,
    specs: {
      camera:    { value: "200MP + 200MP Dual Ultra", score: 10 },
      battery:   { value: "7000mAh", score: 10 },
      ram:       { value: "12GB / 16GB", score: 9 },
      display:   { value: "6.82\" LTPO OLED 120Hz 2K", score: 9 },
      charging:  { value: "120W Wired + 50W Wireless", score: 10 },
      processor: { value: "Snapdragon 8 Elite Gen 5", score: 10 },
      storage:   { value: "256GB / 512GB", score: 9 },
      os:        { value: "OriginOS 5 (Android 16)", score: 7 },
    },
    pros: ["Dual 200MP cameras — world first", "7000mAh massive battery", "120W insane charging", "IP69 waterproof"],
    cons: ["OriginOS not popular in India", "Heavy at 230g", "Expected India launch Q2 2026"],
    verdict: "Battery + Camera ka ultimate combo. 7000mAh + dual 200MP = power users ke liye dream phone. India mein April-May aane ki umeed.",
    amazon: "https://amzn.to/vivox300ultra", flipkart: "https://flipkart.com/vivox300ultra",
  },
  {
    id: "redmi-note-15-pro",
    name: "Xiaomi Redmi Note 15 Pro",
    price: "₹29,999",
    score: 7.8,
    badge: "Best Under 30K",
    specs: {
      camera:    { value: "200MP OIS Primary", score: 9 },
      battery:   { value: "5500mAh", score: 8 },
      ram:       { value: "8GB / 12GB", score: 8 },
      display:   { value: "6.67\" AMOLED 120Hz 2100nit", score: 8 },
      charging:  { value: "90W HyperCharge", score: 9 },
      processor: { value: "MediaTek Dimensity 7300", score: 7 },
      storage:   { value: "128GB / 256GB", score: 7 },
      os:        { value: "MIUI 16 (Android 16)", score: 7 },
    },
    pros: ["200MP camera under ₹30K — incredible", "90W fast charging", "Beautiful AMOLED display", "IP64 splash resistant"],
    cons: ["MIUI has ads", "Mid-range processor", "No telephoto camera"],
    verdict: "₹30K mein 200MP camera — value unmatched. Budget buyers ke liye clear winner. Camera is the star.",
    amazon: "https://amzn.to/redminote15pro", flipkart: "https://flipkart.com/redminote15pro",
  },
  {
    id: "motorola-signature",
    name: "Motorola Edge 60 Signature",
    price: "₹52,999",
    score: 8.1,
    badge: null,
    specs: {
      camera:    { value: "50MP Sony + 50MP Telephoto", score: 8 },
      battery:   { value: "4700mAh", score: 7 },
      ram:       { value: "12GB", score: 8 },
      display:   { value: "6.67\" pOLED 144Hz", score: 9 },
      charging:  { value: "68W Wired + 15W Wireless", score: 8 },
      processor: { value: "Snapdragon 8s Gen 4", score: 8 },
      storage:   { value: "256GB", score: 8 },
      os:        { value: "Android 16 (3 yr clean updates)", score: 9 },
    },
    pros: ["Vegan leather premium build", "Clean stock Android", "3 years OS updates confirmed", "144Hz smooth display"],
    cons: ["Battery life average", "Not the best camera in segment", "Limited brand recognition"],
    verdict: "Premium feel at mid-range price. Vegan leather back aur stock Android isko alag banate hain. Professionals ke liye good choice.",
    amazon: "https://amzn.to/motoedge60sig", flipkart: "https://flipkart.com/motoedge60sig",
  },
];

const RELATED = [
  { a: "Samsung Galaxy S26 Ultra", b: "Xiaomi 17 Ultra" },
  { a: "Nothing Phone (4a) Pro", b: "iQOO 15R" },
  { a: "OnePlus 15", b: "Vivo X300 Ultra" },
  { a: "Nothing Phone (4a)", b: "Xiaomi Redmi Note 15 Pro" },
  { a: "OnePlus 15R", b: "iQOO 15R" },
  { a: "Xiaomi 17 Ultra", b: "Vivo X300 Ultra" },
];

const SPEC_LABELS: Record<string, string> = {
  camera: "Camera", battery: "Battery", ram: "RAM",
  display: "Display", charging: "Charging",
  processor: "Processor", storage: "Storage", os: "OS",
};

type PhoneType = typeof PHONES[0] | null;

function ScoreRing({ score, size = 56 }: { score: number, size?: number }) {
  const r = size / 2 - 6;
  const circ = 2 * Math.PI * r;
  const fill = (score / 10) * circ;
  const color = score >= 8.5 ? "#1D9E75" : score >= 7.5 ? "#EF9F27" : "#E24B4A";
  return (
    <svg width={size} height={size} style={{ display: "block" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#e5e5e5" strokeWidth="4"/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="4"
        strokeDasharray={`${fill} ${circ}`} strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{transition:"stroke-dasharray .6s ease"}}/>
      <text x={size/2} y={size/2+1} textAnchor="middle" dominantBaseline="central"
        style={{fontSize:"13px",fontWeight:600,fill:color,fontFamily:"inherit"}}>{score}</text>
    </svg>
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
      if (value) setQ(value.name);
  }, [value]);
  const filtered = PHONES.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase()) && p !== value
  );
  return (
    <div ref={ref} style={{position:"relative",flex:1}}>
      <input value={q}
        onChange={e => { setQ(e.target.value); setOpen(true); onChange(null); }}
        onFocus={() => setOpen(true)}
        placeholder={placeholder}
        style={{width:"100%",padding:"10px 14px",border:"1.5px solid var(--border)",
          borderRadius:"10px",fontSize:"14px",background:"var(--bg-card)",
          color:"var(--text)",outline:"none",fontFamily:"inherit"}}/>
      {open && q.length > 0 && filtered.length > 0 && (
        <div style={{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,
          background:"var(--bg-card)",border:"1px solid var(--border)",
          borderRadius:"10px",zIndex:100,overflow:"hidden",
          boxShadow:"0 8px 24px rgba(0,0,0,0.12)"}}>
          {filtered.map(p => (
            <div key={p.id}
              onClick={() => { onChange(p); setQ(p.name); setOpen(false); }}
              style={{padding:"10px 14px",cursor:"pointer",fontSize:"13px",
                color:"var(--text)",borderBottom:"1px solid var(--border-light)",
                transition:"background .15s",display:"flex",
                justifyContent:"space-between",alignItems:"center"}}
              onMouseOver={e=>e.currentTarget.style.background="var(--bg-hover)"}
              onMouseOut={e=>e.currentTarget.style.background="transparent"}>
              <span>{p.name}</span>
              <span style={{fontSize:"12px",color:"var(--accent)",fontWeight:600}}>{p.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CompareClient() {
  const [phoneA, setPhoneA] = useState<PhoneType>(PHONES[0]);
  const [phoneB, setPhoneB] = useState<PhoneType>(PHONES[1]);

  const winner = phoneA && phoneB ? (phoneA.score >= phoneB.score ? phoneA : phoneB) : null;
  const getWinner = (key: string) => {
    if (!phoneA || !phoneB) return null;
    const sa = phoneA.specs[key as keyof typeof phoneA.specs]?.score ?? 0, sb = phoneB.specs[key as keyof typeof phoneB.specs]?.score ?? 0;
    if (sa === sb) return "tie";
    return sa > sb ? "a" : "b";
  };

  return (
    <div className="cp-inner pt-6">
      <div className="cp-hero">
        <div className="cp-eye">Phone Compare Tool</div>
        <h1 className="cp-h1">Kaunsa phone lena chahiye?</h1>
        <p className="cp-sub">2 phones chunkar side-by-side compare karo — real specs, AITechNews scores aur expert verdict ke saath.</p>
      </div>

      <div className="phones-count">{PHONES.length} phones available — March 2026 updated</div>

      <div className="search-row">
        <PhoneSearch value={phoneA} onChange={setPhoneA} placeholder="Pehla phone dhundho..."/>
        <div className="vs-badge">VS</div>
        <PhoneSearch value={phoneB} onChange={setPhoneB} placeholder="Doosra phone dhundho..."/>
      </div>

      {phoneA && phoneB && (<>
        <div className="score-cards">
          {[phoneA, phoneB].map((p) => (
            <div key={p.id} className={`score-card ${p === winner ? "winner" : ""}`}>
              {p === winner && <div className="winner-tag">Best Pick</div>}
              <ScoreRing score={p.score}/>
              <div style={{flex:1,minWidth:0}}>
                {p.badge && <div className="sc-badge">{p.badge}</div>}
                <div className="sc-name">{p.name}</div>
                <div className="sc-price">{p.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="spec-section">
          <div className="spec-header">
            <div className="spec-hcell">Spec</div>
            <div className="spec-hcell">{phoneA.name.split(" ").slice(0,3).join(" ")}</div>
            <div className="spec-hcell">{phoneB.name.split(" ").slice(0,3).join(" ")}</div>
          </div>
          {Object.keys(SPEC_LABELS).map(key => {
            const w = getWinner(key);
            return (
              <div key={key} className="spec-row">
                <div className="spec-label">{SPEC_LABELS[key as keyof typeof SPEC_LABELS]}</div>
                <div className={`spec-val ${w==="a"?"win":""}`}>{phoneA.specs[key as keyof typeof phoneA.specs]?.value}</div>
                <div className={`spec-val ${w==="b"?"win":""}`}>{phoneB.specs[key as keyof typeof phoneB.specs]?.value}</div>
              </div>
            );
          })}
        </div>

        <div className="verdict-card">
          <div className="vd-title">AITechNews Verdict</div>
          <div className="vd-winner">{winner!.name} wins — {winner!.score}/10</div>
          <div className="vd-text">{winner!.verdict}</div>
        </div>

        <div className="pros-cons">
          {[phoneA, phoneB].map(p => (
            <div key={p.id} className="pc-wrap">
              <div className="pc-card">
                <div className="pc-head pro">{p.name.split(" ")[0]} pros</div>
                {p.pros.map(x => <div key={x} className="pc-item">{x}</div>)}
              </div>
              <div className="pc-card">
                <div className="pc-head con">Cons</div>
                {p.cons.map(x => <div key={x} className="pc-item">{x}</div>)}
              </div>
            </div>
          ))}
        </div>

        <div className="buy-section">
          <div className="buy-title">Sabse saste mein kharidein</div>
          <div className="buy-grid">
            {[phoneA, phoneB].map(p => (
              <div key={p.id} className="buy-item">
                <div className="buy-phone-name">{p.name}</div>
                <div className="buy-btns">
                  <a href={p.amazon} target="_blank" rel="noopener noreferrer" className="buy-btn amz">Amazon</a>
                  <a href={p.flipkart} target="_blank" rel="noopener noreferrer" className="buy-btn fk">Flipkart</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>)}

      <div className="rel-title">Popular comparisons</div>
      <div className="rel-grid">
        {RELATED.map((r, i) => (
          <div key={i} className="rel-card"
            onClick={() => {
              const a = PHONES.find(p => p.name.includes(r.a.split(" ")[1])) || PHONES.find(p=>p.name===r.a);
              const b = PHONES.find(p => p.name.includes(r.b.split(" ")[1])) || PHONES.find(p=>p.name===r.b);
              if(a) setPhoneA(a); if(b) setPhoneB(b);
              window.scrollTo({top:0,behavior:"smooth"});
            }}>
            <div className="rel-names">{r.a} vs {r.b}</div>
            <div className="rel-cta">Compare karo →</div>
          </div>
        ))}
      </div>
    </div>
  );
}
