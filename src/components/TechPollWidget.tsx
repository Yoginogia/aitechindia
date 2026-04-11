"use client";
import { useState } from "react";
import { BarChart3, CheckCircle2 } from "lucide-react";

export default function TechPollWidget() {
  const [voted, setVoted] = useState<number | null>(null);

  const pollOptions = [
    { id: 1, text: "Apple iPhone 18 Series", percent: 45, color: "bg-blue-500" },
    { id: 2, text: "Samsung Galaxy S26", percent: 25, color: "bg-green-500" },
    { id: 3, text: "Xiaomi / Redmi Note 16", percent: 20, color: "bg-orange-500" },
    { id: 4, text: "Other Brands", percent: 10, color: "bg-zinc-500" },
  ];

  return (
    <div className="rounded-2xl border border-border/30 bg-card/40 p-5 backdrop-blur shadow-sm card-glow">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-bold text-lg">Tech Poll 📊</h3>
      </div>
      <p className="text-sm text-foreground mb-4 font-medium leading-snug">
        2026 में आप कौन सा स्मार्टफोन ब्रांड अपग्रेड करना चाहेंगे?
      </p>

      <div className="space-y-3">
        {pollOptions.map((opt) => {
          const isSelected = voted === opt.id;
          return (
            <div key={opt.id} className="relative">
              <button
                onClick={() => setVoted(opt.id)}
                disabled={voted !== null}
                className={`w-full relative z-10 text-left px-4 py-2.5 rounded-lg border text-sm font-medium transition-all flex items-center justify-between ${
                  isSelected ? "border-primary text-primary" : "border-border/50 hover:bg-white/5 text-foreground"
                } ${voted !== null && !isSelected ? "opacity-70" : ""}`}
              >
                <span>{opt.text}</span>
                {voted !== null && (
                  <span className="flex items-center gap-2 text-xs font-bold">
                    {isSelected && <CheckCircle2 className="w-4 h-4" />}
                    {opt.percent}%
                  </span>
                )}
              </button>
              {voted !== null && (
                <div
                  className={`absolute top-0 left-0 bottom-0 rounded-lg opacity-20 ${opt.color}`}
                  style={{ width: `${opt.percent}%`, transition: "width 1s ease-out" }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4 pt-4 border-t border-border/20 text-xs text-muted-foreground text-center">
        {voted ? "Thank you! Over 12,400+ people voted." : "Select an option to view live results."}
      </div>
    </div>
  );
}
