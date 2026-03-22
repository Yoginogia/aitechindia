'use client';

import { useState } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'ai' | 'user', text: string }[]>([
        { role: 'ai', text: 'Hi! I am the AITechNews Assistant 🤖. Do you have any questions about the latest gadgets, AI models, or crypto news?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        const newMessages = [...messages, { role: 'user' as const, text: input }];
        setMessages(newMessages);
        setInput('');

        // Mock AI Response
        setTimeout(() => {
            setMessages([
                ...newMessages,
                { role: 'ai', text: 'Thanks for reaching out! As this is an AI Mock Interface, I am currently not hooked up to a live LLM backend. Stay tuned for Phase 2!' }
            ]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-24 right-6 z-[9999] flex flex-col items-end">
            {/* Chat Window */}
            <div className={`mb-4 w-[350px] sm:w-[400px] h-[500px] bg-secondary/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-blue-500 p-4 flex justify-between items-center text-white">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm leading-tight flex items-center gap-1">AITechNews AI <Sparkles className="w-3 h-3 text-yellow-300" /></h3>
                            <p className="text-[10px] text-white/80">Premium Tech Assistant</p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-full transition-colors">
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex max-w-[85%] ${msg.role === 'user' ? 'ml-auto justify-end' : 'mr-auto justify-start'}`}>
                            <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-primary text-white rounded-br-sm' : 'bg-background text-foreground/90 border border-border/30 rounded-bl-sm'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-3 border-t border-border/30 bg-background/50">
                    <form onSubmit={handleSend} className="relative flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask anything about tech..."
                            className="w-full bg-secondary/50 border border-border/50 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
                        />
                        <button type="submit" disabled={!input.trim()} className="absolute right-2 p-2 bg-primary rounded-full text-white disabled:opacity-50 disabled:bg-muted-foreground transition-all hover:scale-105 active:scale-95">
                            <Send className="w-3.5 h-3.5" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 ${isOpen ? 'bg-secondary border border-border/50 text-foreground' : 'bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-white animate-bounce-slow'}`}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </button>
        </div>
    );
}
