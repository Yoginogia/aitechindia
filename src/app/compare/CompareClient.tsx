'use client';

import { useState, useRef, useEffect } from "react";

const PHONES = [
  {
    id: "samsung-s26-ultra",
    name: "Samsung Galaxy S26 Ultra",
    price: "₹1,39,999",
    score: 8.2,
    image: "/images/phones/samsung-s26-ultra.png",
    badge: null,
    specs: {
      camera: { value: "200MP AI", score: 9 },
      battery: { value: "5000mAh", score: 9 },
      ram: { value: "12GB", score: 9 },
      display: { value: "6.9\" AMOLED 120Hz", score: 8 },
      charging: { value: "45W Fast", score: 9 },
      processor: { value: "Snapdragon 8 Elite", score: 9 },
      storage: { value: "256GB / 512GB", score: 8 },
      os: { value: "Android 16", score: 8 },
    },
    pros: ["Best-in-class zoom camera", "S Pen included", "Huge battery"],
    cons: ["Very heavy (228g)", "Bulky design", "Expensive"],
    verdict: "Power users aur camera enthusiasts ke liye best choice. S Pen bonus hai.",
    amazon: "https://amzn.to/samsung-s26-ultra",
    flipkart: "https://flipkart.com/samsung-s26-ultra",
  },
  {
    id: "iphone-18-pro",
    name: "iPhone 18 Pro",
    price: "₹1,34,900",
    score: 8.7,
    image: "/images/phones/iphone-18-pro.png",
    badge: "Editor's Pick",
    specs: {
      camera: { value: "48MP ProVision", score: 10 },
      battery: { value: "4685mAh", score: 7 },
      ram: { value: "8GB", score: 7 },
      display: { value: "6.3\" ProMotion 120Hz", score: 9 },
      charging: { value: "30W MagSafe", score: 7 },
      processor: { value: "A19 Pro", score: 10 },
      storage: { value: "256GB / 512GB / 1TB", score: 10 },
      os: { value: "iOS 19", score: 9 },
    },
    pros: ["Best video camera on any phone", "Smoothest performance", "Premium build"],
    cons: ["Smaller battery", "Less RAM", "No fast charging"],
    verdict: "Overall best experience. Ecosystem mein ho toh no-brainer. Video creators ke liye #1.",
    amazon: "https://amzn.to/iphone-18-pro",
    flipkart: "https://flipkart.com/iphone-18-pro",
  },
  {
    id: "oneplus-15r",
    name: "OnePlus 15R",
    price: "₹51,999",
    score: 8.0,
    image: "/images/phones/oneplus-15r.png",
    badge: "Best Value",
    specs: {
      camera: { value: "50MP Triple", score: 7 },
      battery: { value: "7400mAh", score: 10 },
      ram: { value: "12GB", score: 9 },
      display: { value: "6.7\" AMOLED 120Hz", score: 8 },
      charging: { value: "80W SuperVOOC", score: 10 },
      processor: { value: "Snapdragon 8s Gen 4", score: 8 },
      storage: { value: "128GB / 256GB", score: 7 },
      os: { value: "OxygenOS 15", score: 8 },
    },
    pros: ["Monster 7400mAh battery", "80W ultra-fast charging", "Clean OxygenOS"],
    cons: ["Camera not flagship-grade", "Plastic back", "No IP69"],
    verdict: "Best budget-flagship. Battery life unbeatable. Heavy users ke liye ideal.",
    amazon: "https://amzn.to/oneplus-15r",
    flipkart: "https://flipkart.com/oneplus-15r",
  },
  {
    id: "nothing-phone-3",
    name: "Nothing Phone (3)",
    price: "₹44,999",
    score: 7.8,
    image: "/images/phones/nothing-phone-3.png",
    badge: null,
    specs: {
      camera: { value: "50MP Dual", score: 7 },
      battery: { value: "5000mAh", score: 9 },
      ram: { value: "12GB", score: 9 },
      display: { value: "6.67\" OLED 120Hz", score: 8 },
      charging: { value: "65W", score: 9 },
      processor: { value: "Snapdragon 8 Gen 3", score: 8 },
      storage: { value: "256GB", score: 8 },
      os: { value: "Nothing OS 3.0", score: 8 },
    },
    pros: ["Unique Glyph Interface", "Clean fast software", "Great value"],
    cons: ["Camera average", "Limited service centers in India", "Niche brand"],
    verdict: "Design-conscious users ke liye perfect. Glyph notifications genuinely useful hain.",
    amazon: "https://amzn.to/nothing-phone-3",
    flipkart: "https://flipkart.com/nothing-phone-3",
  },
  {
    id: "pixel-9-pro",
    name: "Google Pixel 9 Pro",
    price: "₹1,06,999",
    score: 8.4,
    image: "/images/phones/pixel-9-pro.png",
    badge: null,
    specs: {
      camera: { value: "50MP Zeiss", score: 10 },
      battery: { value: "5060mAh", score: 8 },
      ram: { value: "16GB", score: 10 },
      display: { value: "6.3\" LTPO OLED", score: 9 },
      charging: { value: "37W", score: 7 },
      processor: { value: "Tensor G5", score: 8 },
      storage: { value: "128GB / 256GB / 512GB", score: 9 },
      os: { value: "Android 16", score: 10 },
    },
    pros: ["Best AI photo processing", "7 years OS updates", "Purest Android"],
    cons: ["Tensor chip runs warm", "Expensive for specs", "Limited India availability"],
    verdict: "AI features aur camera processing mein sabse aage. Long-term value best hai.",
    amazon: "https://amzn.to/pixel-9-pro",
    flipkart: "https://flipkart.com/pixel-9-pro",
  },
];

const RELATED = [
  { a: "Samsung Galaxy S26 Ultra", b: "iPhone 18 Pro Max" },
  { a: "Nothing Phone (3)", b: "OnePlus 15R" },
  { a: "Pixel 9 Pro", b: "iPhone 18 Pro" },
  { a: "Samsung Galaxy M17e 5G", b: "Redmi Note 14 Pro" },
];

const SPEC_LABELS: Record<string, string> = {
  camera: "Camera",
  battery: "Battery",
  ram: "RAM",
  display: "Display",
  charging: "Charging",
  processor: "Processor",
  storage: "Storage",
  os: "OS",
};

function ScoreRing({ score, size = 56 }: { score: number; size?: number }) {
  const r = size / 2 - 6;
  const circ = 2 * Math.PI * r;
  const fill = (score / 10) * circ;
  const color = score >= 8.5 ? "#1D9E75" : score >= 7.5 ? "#EF9F27" : "#E24B4A";
  return (
    <svg width={size} height={size} style={{ display: "block" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#e5e5e5" strokeWidth="4"/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="4"
        strokeDasharray={`${fill} ${circ}`} strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`} style={{transition:"stroke-dasharray .6s ease"}}/>
      <text x={size/2} y={size/2+1} textAnchor="middle" dominantBaseline="central"
        style={{fontSize:"13px",fontWeight:600,fill:color,fontFamily:"inherit"}}>{score}</text>
    </svg>
  );
}

type PhoneType = typeof PHONES[number] | null;

function PhoneSearch({ value, onChange, placeholder }: { value: PhoneType; onChange: (p: PhoneType) => void; placeholder: string }) {
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
      <input
        value={q}
        onChange={e => { setQ(e.target.value); setOpen(true); onChange(null); }}
        onFocus={() => setOpen(true)}
        placeholder={placeholder}
        className="cp-search-input"
      />
      {open && q.length > 0 && filtered.length > 0 && (
        <div className="cp-dropdown">
          {filtered.map(p => (
            <div key={p.id}
              onClick={() => { onChange(p); setQ(p.name); setOpen(false); }}
              className="cp-dropdown-item"
            >
              <span>{p.name}</span>
              <span style={{fontSize:"12px",color:"var(--text-muted)",fontWeight:500}}>{p.price}</span>
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

  const winner = phoneA && phoneB
    ? (phoneA.score >= phoneB.score ? phoneA : phoneB)
    : null;

  const getSpecWinner = (key: string) => {
    if (!phoneA || !phoneB) return null;
    const sa = phoneA.specs[key as keyof typeof phoneA.specs]?.score ?? 0;
    const sb = phoneB.specs[key as keyof typeof phoneB.specs]?.score ?? 0;
    if (sa === sb) return "tie";
    return sa > sb ? "a" : "b";
  };

  return (
    <div className="cp-inner">
      <div className="cp-hero">
        <div className="cp-eyebrow">Phone Compare Tool</div>
        <h1 className="cp-h1">Kaunsa phone lena chahiye?</h1>
        <p className="cp-sub">2 phones chunkar side-by-side compare karo — specs, scores aur expert verdict ke saath.</p>
      </div>

      <div className="search-row">
        <PhoneSearch value={phoneA} onChange={setPhoneA} placeholder="Pehla phone dhundho..."/>
        <div className="vs-badge">VS</div>
        <PhoneSearch value={phoneB} onChange={setPhoneB} placeholder="Doosra phone dhundho..."/>
      </div>

      {phoneA && phoneB && (
        <>
          <div className="score-cards">
            {[phoneA, phoneB].map((p) => (
              <div key={p.id} className={`score-card ${p === winner ? "winner" : ""}`}>
                {p === winner && <div className="winner-tag">Best Pick</div>}
                <ScoreRing score={p.score}/>
                <div className="score-info">
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
              <div className="spec-hcell">{phoneA.name.split(" ").slice(0,2).join(" ")}</div>
              <div className="spec-hcell">{phoneB.name.split(" ").slice(0,2).join(" ")}</div>
            </div>
            {Object.keys(SPEC_LABELS).map(key => {
              const w = getSpecWinner(key);
              return (
                <div key={key} className="spec-row">
                  <div className="spec-label">{SPEC_LABELS[key]}</div>
                  <div className={`spec-val ${w === "a" ? "win" : ""}`}>
                    {phoneA.specs[key as keyof typeof phoneA.specs]?.value}
                  </div>
                  <div className={`spec-val ${w === "b" ? "win" : ""}`}>
                    {phoneB.specs[key as keyof typeof phoneB.specs]?.value}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="verdict-card">
            <div className="vd-header">
              <div className="vd-dot"/>
              <div className="vd-title">AITechNews Verdict</div>
            </div>
            <div className="vd-winner">
              {winner!.name} — {winner!.score}/10
            </div>
            <div className="vd-text">{winner!.verdict}</div>
          </div>

          <div className="pros-cons">
            {[phoneA, phoneB].map(p => (
              <div key={p.id}>
                <div className="pc-card" style={{marginBottom:"8px"}}>
                  <div className="pc-head pro">{p.name.split(" ")[0]} — Pros</div>
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
                    <a href={p.amazon} target="_blank" rel="noopener noreferrer" className="buy-btn amz">
                      Amazon
                    </a>
                    <a href={p.flipkart} target="_blank" rel="noopener noreferrer" className="buy-btn fk">
                      Flipkart
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="related-section">
        <div className="rel-title">Aur compare karo</div>
        <div className="rel-grid">
          {RELATED.map((r, i) => (
            <div key={i} className="rel-card"
              onClick={() => {
                const a = PHONES.find(p => p.name.includes(r.a.split(" ")[1]));
                const b = PHONES.find(p => p.name.includes(r.b.split(" ")[1]));
                if (a) setPhoneA(a);
                if (b) setPhoneB(b);
                window.scrollTo({top:0,behavior:"smooth"});
              }}>
              <div className="rel-names">{r.a} vs {r.b}</div>
              <div className="rel-cta">Compare karo →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
