"use client";
import { useState, useEffect } from "react";
import { UserCircle, ThumbsUp, Reply } from "lucide-react";

interface Comment {
  id: string;
  name: string;
  text: string;
  time: string;
  likes: number;
}

export default function LiveComments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");
  const [isClient, setIsClient] = useState(false);

  // Load from local storage
  useEffect(() => {
    setIsClient(true);
    const existing = localStorage.getItem(`comments_${slug}`);
    if (existing) {
      setComments(JSON.parse(existing));
    } else {
      // Default fake comment to start
      const defaultComment = {
        id: "1",
        name: "Aman Gupta",
        text: "Bahut badhiya article hai! Is topic par aur bhi jankari chahiye thi.",
        time: "2 hours ago",
        likes: 14,
      };
      setComments([defaultComment]);
      localStorage.setItem(`comments_${slug}`, JSON.stringify([defaultComment]));
    }
  }, [slug]);

  const handlePost = () => {
    if (!newText.trim()) return;
    const finalName = newName.trim() || 'Anonymous User';
    
    const newComment: Comment = {
      id: Date.now().toString(),
      name: finalName,
      text: newText,
      time: "Just now",
      likes: 0,
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(`comments_${slug}`, JSON.stringify(updated));
    setNewText("");
    setNewName("");
  };

  const handleLike = (id: string) => {
    const updated = comments.map(c => {
      if (c.id === id) return { ...c, likes: c.likes + 1 };
      return c;
    });
    setComments(updated);
    localStorage.setItem(`comments_${slug}`, JSON.stringify(updated));
  };

  if (!isClient) return null;

  return (
    <div className="mt-16 pt-8 border-t border-border/30 mb-12">
      <h3 className="text-2xl font-bold tracking-tight mb-8">Join the Discussion ({comments.length} Comments)</h3>
      
      <div className="flex gap-3 md:gap-4 mb-10">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
          <UserCircle className="w-6 h-6 text-muted-foreground" />
        </div>
        <div className="flex-1 space-y-3">
          <input 
            type="text" 
            placeholder="Your Name (Optional)" 
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full md:max-w-[250px] bg-background border border-border/50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <textarea 
            className="w-full bg-background border border-border/50 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none min-h-[100px]" 
            placeholder="What are your thoughts? Join the conversation..."
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          ></textarea>
          <div className="flex justify-end">
            <button 
              onClick={handlePost}
              disabled={!newText.trim()}
              className="bg-primary hover:bg-primary/90 disabled:opacity-50 text-primary-foreground px-6 py-2 rounded-lg font-bold text-sm transition-colors"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0 text-white font-bold text-xs">
               {comment.name.substring(0,2).toUpperCase()}
            </div>
            <div>
              <div className="bg-secondary/30 rounded-2xl rounded-tl-none p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm">{comment.name}</span>
                  <span className="text-xs text-muted-foreground">{comment.time}</span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap">{comment.text}</p>
              </div>
              <div className="flex items-center gap-4 mt-2 ml-2 text-xs text-muted-foreground font-medium">
                <button 
                  onClick={() => handleLike(comment.id)} 
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  <ThumbsUp className="w-3.5 h-3.5" /> {comment.likes > 0 && comment.likes}
                </button>
                <button className="hover:text-primary transition-colors flex items-center gap-1">
                   <Reply className="w-3.5 h-3.5" /> Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
