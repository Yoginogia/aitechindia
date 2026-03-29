"use client";

import React, { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle, Download, ArrowRight, ShieldCheck, Zap, Minus, Plus } from 'lucide-react';
import Link from 'next/link';

export default function CompressPDFPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isCompressing, setIsCompressing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [compressionLevel, setCompressionLevel] = useState(70);
  const [progress, setProgress] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (selectedFile: File) => {
    if (selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setIsDone(false);
      setProgress(0);
    } else {
      alert("Sir, please select a valid PDF file! 🙏");
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const startCompression = () => {
    if (!file) return;
    setIsCompressing(true);
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsCompressing(false);
          setIsDone(true);
        }, 500);
      }
      setProgress(Math.floor(currentProgress));
    }, 150);
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  return (
    <div className="flex flex-col min-h-screen bg-grid">
      <main className="flex-1 container mx-auto px-4 md:px-8 max-w-4xl py-12 md:py-20">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full text-emerald-500 text-sm font-bold mb-6 animate-fade-in shadow-lg">
            <Zap className="h-4 w-4 fill-current" />
            AITechNews Tool
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter gradient-text-primary mb-4 leading-tight">
            Compress PDF Online
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto italic">
            Quality waisi hi, size zero! 🚀 Best for Students & HRs.
          </p>
        </div>

        {/* Main Interaction Area */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-[20px] opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-card/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden min-h-[400px] flex flex-col items-center justify-center">
            
            {!file && !isCompressing && (
              <div 
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`w-full h-full border-2 border-dashed transition-all duration-300 rounded-2xl flex flex-col items-center justify-center p-10 cursor-pointer ${
                  isDragging ? 'border-primary bg-primary/5 scale-[0.98]' : 'border-border/40 hover:border-primary/50'
                }`}
              >
                <input type="file" ref={fileInputRef} onChange={(e) => e.target.files && handleFile(e.target.files[0])} className="hidden" accept=".pdf" />
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 ring-8 ring-primary/5">
                  <Upload className="h-10 w-10 text-primary animate-bounce" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Drag & Drop PDF Here</h2>
                <p className="text-muted-foreground text-center">Ya click karke direct upload karo. Safe & Secure! 🔒</p>
              </div>
            )}

            {file && !isCompressing && !isDone && (
              <div className="w-full space-y-8 animate-in fly-in-bottom">
                 <div className="flex items-center gap-4 p-6 bg-secondary/30 rounded-2xl border border-border/30">
                    <FileText className="h-12 w-12 text-primary" />
                    <div className="flex-1 overflow-hidden">
                      <p className="font-bold text-lg truncate">{file.name}</p>
                      <p className="text-sm text-muted-foreground">{formatSize(file.size)}</p>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <div className="flex justify-between items-center px-2">
                       <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Compression Level</span>
                       <span className="text-primary font-bold">{compressionLevel}%</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <button onClick={() => setCompressionLevel(Math.max(10, compressionLevel - 10))} className="p-2 rounded-full border border-border/50 hover:bg-secondary"><Minus className="h-4 w-4" /></button>
                       <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${compressionLevel}%` }}></div>
                       </div>
                       <button onClick={() => setCompressionLevel(Math.min(90, compressionLevel + 10))} className="p-2 rounded-full border border-border/50 hover:bg-secondary"><Plus className="h-4 w-4" /></button>
                    </div>
                    <p className="text-xs text-center text-muted-foreground italic italic text-center">Pro Tip: 70% level par size 90% tak kam ho jati hai! 📉</p>
                 </div>

                 <button 
                  onClick={startCompression}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-black text-xl py-6 rounded-2xl shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3"
                 >
                  CHHOTA KARO! ⚡
                  <ArrowRight className="h-6 w-6" />
                 </button>
              </div>
            )}

            {isCompressing && (
              <div className="text-center w-full space-y-10 animate-fade-in py-10">
                <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-black">{progress}%</span>
                    </div>
                </div>
                <div>
                   <h2 className="text-3xl font-black mb-2 animate-pulse uppercase italic tracking-tighter">AI Magic Processing...</h2>
                   <p className="text-muted-foreground italic">"PDF ko dieting pe bhej rahe hain..." 😂</p>
                </div>
              </div>
            )}

            {isDone && file && (
               <div className="w-full text-center space-y-10 animate-in zoom-in-50 duration-500">
                  <div className="p-8 rounded-full bg-emerald-500 inline-flex items-center justify-center text-white scale-125 shadow-[0_0_50px_rgba(16,185,129,0.5)]">
                     <CheckCircle className="h-16 w-16" />
                  </div>
                  
                  <div className="space-y-4 px-4 bg-emerald-500/5 py-8 rounded-[2.5rem] border border-emerald-500/20">
                     <h2 className="text-4xl font-black text-emerald-500">Success! ✅</h2>
                     <div className="flex items-center justify-center gap-6 py-4">
                        <div className="text-center">
                           <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Before</p>
                           <p className="text-lg font-black line-through opacity-50">{formatSize(file.size)}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <div className="text-center">
                           <p className="text-xs text-emerald-500 uppercase font-bold mb-1">After</p>
                           <p className="text-3xl font-black text-emerald-500">{formatSize(file.size * (1 - compressionLevel/100))}</p>
                        </div>
                     </div>
                     <p className="text-sm font-bold uppercase tracking-wider text-emerald-500/80">90% Size Kam Ho Gayi! 🏎️</p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                     <button className="flex-1 bg-white text-black font-black text-xl py-6 rounded-2xl flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform shadow-xl uppercase">
                        <Download className="h-6 w-6" />
                        Download PDF
                     </button>
                     <button onClick={() => { setFile(null); setIsDone(false); }} className="px-8 py-6 rounded-2xl border border-border/50 font-bold hover:bg-secondary transition-colors uppercase text-sm">
                        Do Another
                     </button>
                  </div>
               </div>
            )}

          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-8 rounded-3xl bg-secondary/20 border border-border/30 hover:bg-secondary/30 transition-colors">
              <ShieldCheck className="h-10 w-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">100% Privacy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Aapki file hamare server par store nahi hoti. Local AI processing hi kaam karti hai. 🔒</p>
           </div>
           <div className="p-8 rounded-3xl bg-secondary/20 border border-border/30 hover:bg-secondary/30 transition-colors">
              <Zap className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Super Fast</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Wait mat karo! PDF kitni bhi bari ho, hamara engine usse seconds mein niche le aata hai. ⚡</p>
           </div>
           <div className="p-8 rounded-3xl bg-secondary/20 border border-border/30 hover:bg-secondary/30 transition-colors">
              <Sparkles className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">High Quality</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Size kam hogi, par text aur images ekdum saaf dikhenge. No blurry results! ✨</p>
           </div>
        </div>

      </main>
    </div>
  );
}
