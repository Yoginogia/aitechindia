import CompareClient from './CompareClient';

export const metadata = {
    title: 'Compare Mobile Phones in India | AITechNews',
    description: 'Side-by-side compare karo top smartphones ke specs, scores, pros & cons — AITechNews expert verdict ke saath.',
};

export default function ComparePage() {
    return (
        <div className="compare-page">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@700&display=swap');
                .compare-page {
                    --accent:#1D9E75; --accent-light:#E1F5EE; --accent-dark:#085041;
                    --warn:#EF9F27; --warn-light:#FAEEDA; --red:#E24B4A; --red-light:#FCEBEB;
                    font-family: 'DM Sans', sans-serif;
                    min-height: 100vh;
                }
                .dark .compare-page {
                    --text:#f0ede8; --text-muted:#9c9a92;
                    --bg:transparent; --bg-card:#232320; --bg-hover:#2a2a27;
                    --border:rgba(255,255,255,0.12); --border-light:rgba(255,255,255,0.06);
                }
                .compare-page {
                    --text:#1a1a1a; --text-muted:#6b6a66;
                    --bg:transparent; --bg-card:#ffffff; --bg-hover:#f5f4f0;
                    --border:rgba(0,0,0,0.1); --border-light:rgba(0,0,0,0.05);
                    color: var(--text);
                }
                .cp-inner { max-width: 900px; margin: 0 auto; padding: 0 16px 60px; }
                .cp-hero { padding: 32px 0 24px; }
                .cp-eyebrow { font-size: 11px; letter-spacing: .12em; text-transform: uppercase;
                    color: var(--accent); font-weight: 600; margin-bottom: 8px; }
                .cp-h1 { font-family: 'Syne', sans-serif; font-size: clamp(22px,5vw,36px);
                    font-weight: 700; line-height: 1.15; color: var(--text); margin-bottom: 8px; }
                .cp-sub { font-size: 14px; color: var(--text-muted); }
                .search-row { display: flex; gap: 12px; align-items: center;
                    margin: 20px 0 28px; flex-wrap: wrap; }
                .cp-search-input {
                    width:100%; padding:10px 14px; border:1.5px solid var(--border);
                    border-radius:10px; font-size:14px; background:var(--bg-card);
                    color:var(--text); outline:none; transition:border-color .2s;
                    font-family:inherit;
                }
                .cp-search-input:hover, .cp-search-input:focus { border-color: var(--accent); }
                .cp-dropdown {
                    position:absolute;top:calc(100% + 4px);left:0;right:0;
                    background:var(--bg-card);border:1px solid var(--border);
                    border-radius:10px;z-index:100;overflow:hidden;
                    box-shadow:0 8px 24px rgba(0,0,0,0.12);
                }
                .cp-dropdown-item {
                    padding:10px 14px;cursor:pointer;font-size:13px;
                    color:var(--text);border-bottom:1px solid var(--border-light);
                    transition:background .15s; display:flex; justify-content:space-between;
                    align-items:center;
                }
                .cp-dropdown-item:hover { background: var(--bg-hover); }
                .vs-badge { width: 36px; height: 36px; border-radius: 50%;
                    background: var(--bg-card); border: 1.5px solid var(--border);
                    display: flex; align-items: center; justify-content: center;
                    font-size: 11px; font-weight: 700; color: var(--text-muted);
                    flex-shrink: 0; }
                .score-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
                .score-card { background: var(--bg-card); border: 1.5px solid var(--border);
                    border-radius: 14px; padding: 18px; display: flex; gap: 14px;
                    align-items: center; position: relative; overflow: hidden;
                    transition: border-color .2s; }
                .score-card.winner { border-color: var(--accent); }
                .score-card.winner::before { content: ''; position: absolute; top: 0; left: 0;
                    right: 0; height: 3px; background: var(--accent); }
                .winner-tag { position: absolute; top: 10px; right: 10px;
                    background: var(--accent-light); color: var(--accent-dark);
                    font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 20px; }
                .score-info { flex: 1; min-width: 0; }
                .sc-badge { display: inline-block; font-size: 10px; font-weight: 600;
                    padding: 2px 8px; border-radius: 20px; margin-bottom: 6px;
                    background: var(--warn-light); color: #633806; }
                .sc-name { font-size: 14px; font-weight: 600; color: var(--text);
                    margin-bottom: 3px; line-height: 1.3; }
                .sc-price { font-size: 13px; color: var(--accent); font-weight: 600; }
                .spec-section { background: var(--bg-card); border: 1px solid var(--border);
                    border-radius: 14px; overflow: hidden; margin-bottom: 16px; }
                .spec-header { display: grid; grid-template-columns: 2fr 3fr 3fr;
                    padding: 10px 16px; background: var(--bg-hover);
                    border-bottom: 1px solid var(--border); }
                .spec-hcell { font-size: 11px; font-weight: 600; color: var(--text-muted);
                    letter-spacing: .05em; text-transform: uppercase; }
                .spec-hcell:not(:first-child) { text-align: center; }
                .spec-row { display: grid; grid-template-columns: 2fr 3fr 3fr;
                    padding: 11px 16px; border-bottom: 1px solid var(--border-light);
                    align-items: center; transition: background .15s; }
                .spec-row:last-child { border-bottom: none; }
                .spec-row:hover { background: var(--bg-hover); }
                .spec-label { font-size: 12px; color: var(--text-muted); font-weight: 500; }
                .spec-val { font-size: 13px; color: var(--text); text-align: center; padding: 0 4px; }
                .spec-val.win { color: var(--accent); font-weight: 600; }
                .spec-val.win::after { content: ' ✓'; font-size: 10px; }
                .verdict-card { background: var(--accent-light); border: 1px solid #5DCAA5;
                    border-radius: 14px; padding: 18px; margin-bottom: 16px; }
                .vd-header { display: flex; gap: 10px; align-items: center; margin-bottom: 14px; }
                .vd-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
                .vd-title { font-size: 12px; font-weight: 700; color: var(--accent-dark);
                    letter-spacing: .08em; text-transform: uppercase; }
                .vd-winner { font-size: 16px; font-weight: 700; color: var(--accent-dark); margin-bottom: 6px; }
                .vd-text { font-size: 13px; color: #0F6E56; line-height: 1.6; }
                .pros-cons { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px; }
                .pc-card { background: var(--bg-card); border: 1px solid var(--border);
                    border-radius: 12px; padding: 14px; }
                .pc-head { font-size: 11px; font-weight: 700; letter-spacing: .1em;
                    text-transform: uppercase; margin-bottom: 10px; }
                .pc-head.pro { color: var(--accent); }
                .pc-head.con { color: var(--red); }
                .pc-item { font-size: 12px; color: var(--text-muted); padding: 4px 0;
                    border-bottom: 1px solid var(--border-light); line-height: 1.4; }
                .pc-item:last-child { border-bottom: none; }
                .pc-item::before { content: '• '; }
                .buy-section { background: var(--bg-card); border: 1px solid var(--border);
                    border-radius: 14px; padding: 18px; margin-bottom: 24px; }
                .buy-title { font-size: 13px; font-weight: 600; color: var(--text);
                    margin-bottom: 14px; }
                .buy-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
                .buy-item { display: flex; flex-direction: column; gap: 7px; }
                .buy-phone-name { font-size: 11px; color: var(--text-muted); font-weight: 500; }
                .buy-btns { display: flex; gap: 6px; }
                .buy-btn { flex: 1; padding: 9px 0; border-radius: 8px; font-size: 12px;
                    font-weight: 600; text-align: center; text-decoration: none;
                    transition: opacity .15s, transform .1s; display: block; }
                .buy-btn:hover { opacity: .88; transform: translateY(-1px); }
                .buy-btn:active { transform: scale(.97); }
                .buy-btn.amz { background: #FF9900; color: #111; }
                .buy-btn.fk { background: #2874F0; color: #fff; }
                .related-section { margin-top: 8px; }
                .rel-title { font-size: 14px; font-weight: 600; color: var(--text); margin-bottom: 12px; }
                .rel-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 8px; }
                .rel-card { background: var(--bg-card); border: 1px solid var(--border);
                    border-radius: 10px; padding: 12px 14px; cursor: pointer;
                    transition: border-color .2s, background .2s; text-decoration: none;
                    display: block; }
                .rel-card:hover { border-color: var(--accent); background: var(--accent-light); }
                .rel-names { font-size: 12px; font-weight: 500; color: var(--text); margin-bottom: 4px; }
                .rel-cta { font-size: 11px; color: var(--accent); font-weight: 600; }
                @media (max-width: 540px) {
                    .score-cards { grid-template-columns: 1fr; }
                    .pros-cons { grid-template-columns: 1fr; }
                    .buy-grid { grid-template-columns: 1fr; }
                    .rel-grid { grid-template-columns: 1fr; }
                    .spec-row { grid-template-columns: 1.5fr 2fr 2fr; }
                }
            `}</style>
            <CompareClient />
        </div>
    );
}
