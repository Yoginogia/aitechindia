"use client";

import { useState, useMemo } from 'react';
import { Search, BrainCircuit, Cpu, Smartphone, Bitcoin, X } from 'lucide-react';
import { TechTerm } from '@/data/dictionary';

// Icons for Category visually
const CategoryIcon = ({ category }: { category: string }) => {
  switch(category) {
    case 'AI': return <BrainCircuit className="w-4 h-4 text-purple-500" />;
    case 'Hardware': return <Cpu className="w-4 h-4 text-blue-500" />;
    case 'Mobile': return <Smartphone className="w-4 h-4 text-emerald-500" />;
    case 'Crypto': return <Bitcoin className="w-4 h-4 text-orange-500" />;
    default: return <Search className="w-4 h-4 text-gray-500" />;
  }
};

export default function DictionaryClient({ initialData }: { initialData: TechTerm[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const ALPHABETS = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  // Memoized Filtering Logic for Performance
  const filteredData = useMemo(() => {
    let results = initialData;

    // Filter by Alphabet Jump
    if (selectedLetter) {
        results = results.filter(term => term.term.toUpperCase().startsWith(selectedLetter));
    }

    // Filter by Text Search
    if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        results = results.filter(term => 
            term.term.toLowerCase().includes(query) || 
            term.definition.toLowerCase().includes(query) ||
            term.category.toLowerCase().includes(query)
        );
    }

    return results;
  }, [searchQuery, selectedLetter, initialData]);

  return (
    <div className="space-y-10">
      
      {/* Smart Search Bar */}
      <div className="relative max-w-2xl mx-auto z-20 -mt-20">
        <div className="flex bg-card/80 backdrop-blur-3xl border-2 border-primary/20 p-2 rounded-2xl shadow-2xl focus-within:border-primary transition-colors duration-300 shadow-primary/10">
          <div className="pl-4 pr-3 flex items-center justify-center">
            <Search className="w-5 h-5 text-muted-foreground" />
          </div>
          <input 
            type="text" 
            placeholder="Search ANY Tech Word (e.g. ChatGPT, LLM, Neural)..."
            className="w-full bg-transparent border-none outline-none py-3 text-lg text-foreground placeholder-muted-foreground focus:ring-0"
            value={searchQuery}
            onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedLetter(null); // Clear alphabet filter if user starts typing
            }}
          />
          {searchQuery && (
            <button 
                onClick={() => setSearchQuery('')}
                className="pr-4 pl-2 flex items-center justify-center text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* A-Z Alphabet Filter */}
      <div className="bg-card border border-border/50 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Jump to Alphabet</h3>
          <div className="h-px flex-1 bg-border/50"></div>
          {selectedLetter && (
             <button 
                className="text-xs text-primary font-bold hover:underline"
                onClick={() => setSelectedLetter(null)}
             >
                Clear Filter
             </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
            {ALPHABETS.map(letter => (
                <button
                   key={letter}
                   onClick={() => {
                       setSelectedLetter(letter === selectedLetter ? null : letter);
                       setSearchQuery(""); // Clear text search if alphabet clicked
                   }}
                   className={`w-9 h-9 md:w-10 md:h-10 rounded-lg font-bold transition-all text-sm md:text-base flex items-center justify-center border-2 ${
                       selectedLetter === letter 
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30 scale-110' 
                        : 'bg-background border-border/40 text-foreground hover:border-primary/50 hover:text-primary active:scale-95'
                   }`}
                >
                    {letter}
                </button>
            ))}
        </div>
      </div>

      {/* Dictionary Results Grid */}
      <div className="pt-4">
         {filteredData.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-2xl border border-dashed border-border">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-30" />
                <h3 className="text-xl font-bold text-foreground mb-2">"{searchQuery}" नहीं मिला</h3>
                <p className="text-muted-foreground">यह टेक शब्द अभी डिक्शनरी में नहीं है। हम इसे जल्द ही जोड़ेंगे!</p>
                <button 
                   className="mt-6 px-6 py-2 bg-primary/10 text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-colors"
                   onClick={() => { setSearchQuery(""); setSelectedLetter(null); }}
                >
                    सारे शब्द देखें
                </button>
            </div>
         ) : (
            <>
              <div className="flex items-center gap-2 mb-6 px-2">
                 <h2 className="text-lg font-bold text-foreground">
                    {selectedLetter ? `Words starting with '${selectedLetter}'` : searchQuery ? 'Search Results' : 'All Dictionary Words'}
                 </h2>
                 <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-bold">
                    {filteredData.length} terms
                 </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredData.map(term => (
                      <div 
                         key={term.term} 
                         className="group relative bg-card rounded-2xl p-6 border border-border/40 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden"
                      >
                         <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                            <CategoryIcon category={term.category} />
                         </div>
                         
                         <div className="flex items-center gap-2 mb-3">
                            <CategoryIcon category={term.category} />
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{term.category}</span>
                         </div>
                         
                         <h3 className="text-xl font-black text-foreground mb-3">{term.term}</h3>
                         <p className="text-muted-foreground text-sm leading-relaxed">{term.definition}</p>
                         
                         <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                      </div>
                  ))}
              </div>
            </>
         )}
      </div>

    </div>
  );
}
