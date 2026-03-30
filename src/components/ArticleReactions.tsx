"use client";

import { useState, useEffect } from "react";
import { ThumbsUp, Flame, Lightbulb, Heart } from "lucide-react";

export default function ArticleReactions({ slug }: { slug: string }) {
    const [reactions, setReactions] = useState({ likes: 0, fire: 0, mindblown: 0 });
    const [userVoted, setUserVoted] = useState<string | null>(null);

    // Load initial fake counts based on slug hash so it looks active
    useEffect(() => {
        const slugHash = slug.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
        setReactions({
            likes: 42 + (slugHash % 30),
            fire: 15 + (slugHash % 25),
            mindblown: 8 + (slugHash % 15)
        });

        const savedVote = localStorage.getItem(`voted_${slug}`);
        if (savedVote) {
            setUserVoted(savedVote);
        }
    }, [slug]);

    const handleVote = (type: 'likes' | 'fire' | 'mindblown') => {
        if (userVoted) return; // Prevent double voting
        
        setReactions(prev => ({ ...prev, [type]: prev[type] + 1 }));
        setUserVoted(type);
        localStorage.setItem(`voted_${slug}`, type);
        
        // Add a small celebration animation effect here if desired
    };

    return (
        <div className="my-10 p-6 rounded-3xl border border-border/40 bg-card/30 backdrop-blur-sm flex flex-col items-center justify-center space-y-4">
            <h3 className="text-lg font-bold text-foreground">Aapko yeh article kaisa laga? 👇</h3>
            <div className="flex items-center gap-4 sm:gap-6">
                
                <button 
                    onClick={() => handleVote('likes')}
                    disabled={userVoted !== null}
                    className={`group flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl transition-all duration-300 ${userVoted === 'likes' ? 'bg-blue-500/20 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'bg-secondary/50 hover:bg-secondary border border-transparent'}`}
                >
                    <div className={`p-3 rounded-full ${userVoted === 'likes' ? 'bg-blue-500 text-white' : 'bg-background text-muted-foreground group-hover:text-blue-500'}`}>
                        <ThumbsUp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground">{reactions.likes}</span>
                </button>

                <button 
                    onClick={() => handleVote('fire')}
                    disabled={userVoted !== null}
                    className={`group flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl transition-all duration-300 ${userVoted === 'fire' ? 'bg-orange-500/20 border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.2)]' : 'bg-secondary/50 hover:bg-secondary border border-transparent'}`}
                >
                    <div className={`p-3 rounded-full ${userVoted === 'fire' ? 'bg-orange-500 text-white' : 'bg-background text-muted-foreground group-hover:text-orange-500'}`}>
                        <Flame className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground">{reactions.fire}</span>
                </button>

                <button 
                    onClick={() => handleVote('mindblown')}
                    disabled={userVoted !== null}
                    className={`group flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl transition-all duration-300 ${userVoted === 'mindblown' ? 'bg-purple-500/20 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]' : 'bg-secondary/50 hover:bg-secondary border border-transparent'}`}
                >
                    <div className={`p-3 rounded-full ${userVoted === 'mindblown' ? 'bg-purple-500 text-white' : 'bg-background text-muted-foreground group-hover:text-purple-500'}`}>
                        <Lightbulb className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground">{reactions.mindblown}</span>
                </button>

            </div>
            {userVoted && (
                <p className="text-xs text-primary font-medium animate-in fade-in zoom-in duration-300 pt-2">
                    <Heart className="w-3 h-3 inline mr-1" /> Thank you for voting!
                </p>
            )}
        </div>
    );
}
