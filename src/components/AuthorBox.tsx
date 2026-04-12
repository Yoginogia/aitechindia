import { BadgeCheck, ExternalLink } from "lucide-react";

interface AuthorBoxProps {
  author: string;
  authorRole: string;
  category?: string;
}

const AUTHOR_PROFILES: Record<string, {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  twitter?: string;
}> = {
  "Rahul Sharma": {
    name: "Rahul Sharma",
    role: "Senior Tech Editor",
    bio: "8+ सालों से tech journalism में हैं। Smartphones और AI में specialization है। IIT Delhi alumni.",
    avatar: "/images/authors/rahul-sharma.png",
    twitter: "https://twitter.com/aitechnews",
  },
  "Priya Singh": {
    name: "Priya Singh",
    role: "Crypto & Fintech Writer",
    bio: "Blockchain और Web3 की expert। 5 साल का crypto market analysis experience। Delhi University से Economics.",
    avatar: "/images/authors/priya-singh.png",
    twitter: "https://twitter.com/aitechnews",
  },
  "Amit Verma": {
    name: "Amit Verma",
    role: "AI & Software Analyst",
    bio: "AI tools और SaaS products को deep-dive करते हैं। Ex-Infosys software engineer। Passionate about making tech accessible.",
    avatar: "/images/authors/amit-verma.png",
  },
};

// Pick the right author based on category
function getAuthorProfile(author: string, category?: string) {
  // Try exact name match
  if (AUTHOR_PROFILES[author]) return AUTHOR_PROFILES[author];
  
  // Fall back to category-based assignment
  if (category === "Crypto" || category === "Web3") return AUTHOR_PROFILES["Priya Singh"];
  if (category === "AI" || category === "AI Tools" || category === "Software") return AUTHOR_PROFILES["Amit Verma"];
  return AUTHOR_PROFILES["Rahul Sharma"];
}

export default function AuthorBox({ author, authorRole, category }: AuthorBoxProps) {
  const profile = getAuthorProfile(author, category);
  
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="mt-12 p-6 rounded-2xl border border-border/40 bg-secondary/20 backdrop-blur flex flex-col sm:flex-row gap-5 items-start sm:items-center">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-extrabold text-xl shrink-0 shadow-lg">
        {initials}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <span className="font-bold text-base text-foreground">{profile.name}</span>
          <span className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">
            <BadgeCheck className="w-3.5 h-3.5" /> Verified Author
          </span>
        </div>
        <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
          {profile.role} · AITechNews
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {profile.bio}
        </p>
      </div>

      {/* Twitter/Social Link */}
      {profile.twitter && (
        <a
          href={profile.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-1.5 text-xs font-bold border border-border/50 px-3 py-2 rounded-lg hover:bg-secondary hover:border-primary/50 transition-colors text-muted-foreground hover:text-foreground"
        >
          Follow <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
}
