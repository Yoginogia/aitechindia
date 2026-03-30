import { Metadata } from 'next';
import DictionaryClient from './DictionaryClient';
import { getSortedDictionary } from '@/data/dictionary';

export const metadata: Metadata = {
  title: 'Tech & AI Dictionary (Hinglish) | AITechNews',
  description: 'आसान हिंदी भाषा में सीखें AI, Metaverse, Web3, और टेक्नोलॉजी के सभी मुश्किल शब्दों (Tech Terms) का मतलब।',
  openGraph: {
    title: 'A-Z Tech & AI Dictionary in Hindi',
    description: 'Tech Glossary: ChatGPT, LLM, Neural Networks और अन्य टेक शब्दों का हिंदी अर्थ समझें।',
    url: 'https://aitechnews.co.in/dictionary',
    siteName: 'AITechNews',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function DictionaryPage() {
  const initialDictionary = getSortedDictionary();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/30 py-16 md:py-24 border-b border-border relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-500 to-purple-500">
             A-Z Tech Dictionary
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
             मुश्किल टेक्नोलॉजी (Tech) और AI शब्दों का सबसे आसान हिंदी (Hinglish) मतलब समझें। जो सर्च करना हो, टाइप करें!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-12 flex-1">
         <DictionaryClient initialData={initialDictionary} />
      </div>
    </div>
  );
}
