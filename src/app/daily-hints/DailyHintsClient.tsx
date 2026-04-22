'use client';

import { useState } from 'react';
import { Lightbulb, Eye, EyeOff, CheckCircle, HelpCircle, Sparkles, Calendar, Brain, Grid3X3, Type, Puzzle } from 'lucide-react';

// ── Today's date helper ──
function getTodayStr() {
  return new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

type PuzzleData = {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  description: string;
  hints: string[];
  answer: string;
  explanation: string;
};

// Today's puzzle data — update daily
const PUZZLES: PuzzleData[] = [
  {
    id: 'wordle',
    name: 'Wordle',
    icon: <Type className="w-5 h-5" />,
    color: 'text-green-500',
    bgGradient: 'from-green-500/20 to-emerald-500/20',
    description: '5 अक्षरों का अंग्रेज़ी शब्द ढूंढो — आज का Wordle Answer & Hints',
    hints: [
      '🟡 Hint 1: इस शब्द में 2 vowels (स्वर) हैं',
      '🟢 Hint 2: शब्द "S" से शुरू होता है',
      '🔵 Hint 3: ये एक common English word है जिसका मतलब "store" या "दुकान" से related है',
      '🟣 Hint 4: इसमें letter "H" भी है',
      '🔴 Hint 5: _ H _ _ _',
    ],
    answer: 'SHELF',
    explanation: 'SHELF — मतलब "शेल्फ" (अलमारी/रैक)। ये एक बहुत common English word है जो daily life में use होता है।',
  },
  {
    id: 'connections',
    name: 'NYT Connections',
    icon: <Grid3X3 className="w-5 h-5" />,
    color: 'text-purple-500',
    bgGradient: 'from-purple-500/20 to-pink-500/20',
    description: '16 शब्दों को 4 ग्रुप्स में बाँटो — आज के Connections Hints',
    hints: [
      '🟡 Yellow Group (Easy): ये सब "Time Periods" (समय अवधि) से जुड़े हैं',
      '🟢 Green Group (Medium): ये सब "Musical Instruments" (संगीत वाद्ययंत्र) हैं',
      '🔵 Blue Group (Hard): ये सब शब्द "LIGHT" से पहले आ सकते हैं (__ LIGHT)',
      '🟣 Purple Group (Tricky): ये सब "Famous Brands" (ब्रांड्स) के नाम हैं जिनमें जानवरों के नाम छुपे हैं',
    ],
    answer: 'Yellow: ERA, EPOCH, AGE, PERIOD | Green: DRUM, FLUTE, HARP, VIOLIN | Blue: DAY, FLASH, HIGH, SPOT | Purple: JAGUAR, PUMA, DOVE, MUSTANG',
    explanation: 'Purple group सबसे tricky था — JAGUAR (car), PUMA (shoes), DOVE (soap), MUSTANG (car) — सब brands हैं जिनके नाम जानवरों पर हैं!',
  },
  {
    id: 'strands',
    name: 'NYT Strands',
    icon: <Puzzle className="w-5 h-5" />,
    color: 'text-blue-500',
    bgGradient: 'from-blue-500/20 to-cyan-500/20',
    description: 'Grid में छुपे theme-based शब्द ढूंढो — आज के Strands Hints',
    hints: [
      '🟡 Hint 1: आज का Theme "Kitchen" (रसोई) से related है',
      '🟢 Hint 2: पहला शब्द "SPOON" है — ऊपर left corner से शुरू होता है',
      '🔵 Hint 3: एक शब्द "PLATE" है',
      '🟣 Hint 4: Spangram (बड़ा शब्द) "COOKWARE" है',
    ],
    answer: 'Theme: Kitchen Items | Words: SPOON, FORK, PLATE, BOWL, PAN, LADLE | Spangram: COOKWARE',
    explanation: 'आज का theme Kitchen Items था। Spangram "COOKWARE" grid के एक कोने से दूसरे कोने तक जाता है।',
  },
];

function PuzzleCard({ puzzle }: { puzzle: PuzzleData }) {
  const [revealedHints, setRevealedHints] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="rounded-2xl border border-border/30 bg-card/50 backdrop-blur overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className={`bg-gradient-to-r ${puzzle.bgGradient} p-5 border-b border-border/20`}>
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl bg-background/50 backdrop-blur flex items-center justify-center ${puzzle.color} shadow`}>
            {puzzle.icon}
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">{puzzle.name}</h2>
            <p className="text-xs text-muted-foreground">{puzzle.description}</p>
          </div>
        </div>
      </div>

      {/* Hints Section */}
      <div className="p-5 space-y-3">
        <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-yellow-500" /> Hints (एक-एक करके देखें)
        </h3>

        <div className="space-y-2">
          {puzzle.hints.map((hint, i) => (
            <div key={i}>
              {i < revealedHints ? (
                <div className="p-3 rounded-xl bg-secondary/30 border border-border/20 text-sm text-foreground animate-in fade-in slide-in-from-top-2 duration-300">
                  {hint}
                </div>
              ) : i === revealedHints ? (
                <button
                  onClick={() => setRevealedHints(prev => prev + 1)}
                  className="w-full p-3 rounded-xl border border-dashed border-primary/30 bg-primary/5 text-sm font-medium text-primary hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" /> Hint {i + 1} देखें
                </button>
              ) : (
                <div className="p-3 rounded-xl bg-secondary/10 border border-border/10 text-sm text-muted-foreground/40 flex items-center justify-center gap-2">
                  <EyeOff className="w-3 h-3" /> Hint {i + 1} (locked)
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Answer Section */}
        <div className="pt-3 border-t border-border/20">
          {showAnswer ? (
            <div className="space-y-3 animate-in fade-in duration-300">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Answer
                </p>
                <p className="text-base font-bold text-foreground">{puzzle.answer}</p>
              </div>
              <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10">
                <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-1">
                  <Brain className="w-3 h-3" /> Explanation
                </p>
                <p className="text-sm text-muted-foreground">{puzzle.explanation}</p>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowAnswer(true)}
              className="w-full p-3 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/20 text-sm font-bold text-primary hover:from-primary/30 hover:to-purple-500/30 transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-4 h-4" /> Answer देखें (Spoiler!)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DailyHintsClient() {
  return (
    <div className="min-h-screen bg-grid">
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-8">
        <div className="absolute top-0 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-56 h-56 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-1.5 text-sm font-semibold text-yellow-600 dark:text-yellow-400 mb-6">
              <Calendar className="w-4 h-4" /> {getTodayStr()}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              🧩 Daily Puzzle <span className="gradient-text">Hints & Answers</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              Wordle, NYT Connections, और Strands — आज के सारे hints और answers एक जगह! 🎯
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <div className="container mx-auto px-4 md:px-8 max-w-5xl mb-8">
        <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 flex items-center gap-3 text-sm">
          <HelpCircle className="w-5 h-5 text-primary shrink-0" />
          <p className="text-muted-foreground">
            <strong className="text-foreground">कैसे खेलें?</strong> — Hint buttons पर क्लिक करके एक-एक करके clues देखें। जब तक ज़रूरत हो hints लें, बाकी खुद solve करें! 💪
          </p>
        </div>
      </div>

      {/* Puzzle Cards */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {PUZZLES.map(puzzle => (
              <PuzzleCard key={puzzle.id} puzzle={puzzle} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="rounded-2xl border border-border/30 bg-card/30 p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">📖 Daily Puzzle Hints — रोज़ यहाँ मिलेंगे!</h2>
            <div className="prose prose-sm prose-invert max-w-none text-muted-foreground space-y-3">
              <p>
                अगर आप रोज़ <strong>Wordle</strong>, <strong>NYT Connections</strong>, या <strong>NYT Strands</strong> खेलते हैं, तो ये page आपके लिए बना है! 
                हम रोज़ यहाँ updated hints और answers डालते हैं — <strong>Hindi + English</strong> में ताकि आपको आसानी से समझ आ जाए।
              </p>
              <p>
                <strong>Wordle</strong> में आपको 6 tries में एक 5-letter word guess करना होता है। <strong>Connections</strong> में 16 words को 4 groups में बाँटना होता है। 
                और <strong>Strands</strong> में एक grid में theme-based words ढूंढने होते हैं। ये तीनों games New York Times (NYT) के हैं और पूरी दुनिया में बहुत popular हैं।
              </p>
              <p>
                💡 <strong>Pro Tip:</strong> पहले खुद try करें, फिर hints लें। इससे brain exercise भी होती है और मज़ा भी आता है!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
