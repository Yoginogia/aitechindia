import { getSortedDictionary } from '@/data/dictionary';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, BookOpen, Tag } from 'lucide-react';

const CATEGORY_COLORS: Record<string, string> = {
  'AI': 'bg-violet-500/10 text-violet-400 border-violet-500/30',
  'Mobile': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'Hardware': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  'Crypto': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  'General Tech': 'bg-green-500/10 text-green-400 border-green-500/30',
};

export async function generateStaticParams() {
  const dictionary = getSortedDictionary();
  return dictionary.map(term => ({ slug: term.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dictionary = getSortedDictionary();
  const term = dictionary.find(t => t.slug === slug);
  if (!term) return { title: 'Term Not Found | AITechNews' };

  return {
    title: `${term.term} Kya Hota Hai? | AITechNews Dictionary`,
    description: term.definition.substring(0, 155),
    alternates: { canonical: `/dictionary/${slug}` },
    openGraph: {
      title: `${term.term} — आसान हिंदी में मतलब`,
      description: term.definition.substring(0, 155),
      url: `https://aitechnews.co.in/dictionary/${slug}`,
      siteName: 'AITechNews',
      type: 'article',
    },
  };
}

export default async function DictionaryTermPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dictionary = getSortedDictionary();
  const termIndex = dictionary.findIndex(t => t.slug === slug);
  if (termIndex === -1) return notFound();

  const term = dictionary[termIndex];
  const prevTerm = termIndex > 0 ? dictionary[termIndex - 1] : null;
  const nextTerm = termIndex < dictionary.length - 1 ? dictionary[termIndex + 1] : null;
  const relatedTerms = dictionary
    .filter(t => t.category === term.category && t.slug !== slug)
    .slice(0, 5);

  // JSON-LD DefinedTerm schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'AITechNews Tech & AI Dictionary',
      url: 'https://aitechnews.co.in/dictionary',
    },
    url: `https://aitechnews.co.in/dictionary/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-border/30 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-4xl py-3">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/dictionary" className="hover:text-foreground transition-colors">Dictionary</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium truncate">{term.term}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Term Card */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-3xl border border-border/40 bg-card/50 backdrop-blur p-8">
                {/* Category Badge */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${CATEGORY_COLORS[term.category] || 'bg-secondary text-muted-foreground border-border'}`}>
                    <Tag className="w-3 h-3" /> {term.category}
                  </span>
                  <span className="text-xs text-muted-foreground">AITechNews Dictionary</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2 text-foreground">
                  {term.term}
                </h1>
                <p className="text-sm text-muted-foreground mb-6">Hinglish mein simple explanation 👇</p>

                {/* Definition Box */}
                <div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-2xl p-6">
                  <div className="flex gap-3">
                    <BookOpen className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">
                      {term.definition}
                    </p>
                  </div>
                </div>
              </div>

              {/* Prev / Next Navigation */}
              <div className="grid grid-cols-2 gap-4">
                {prevTerm ? (
                  <Link href={`/dictionary/${prevTerm.slug}`} className="group p-4 rounded-xl border border-border/40 bg-card/30 hover:border-primary/50 hover:bg-primary/5 transition-all">
                    <span className="text-[10px] font-bold uppercase text-muted-foreground">← Previous</span>
                    <p className="text-sm font-bold text-foreground mt-1 group-hover:text-primary transition-colors line-clamp-2">{prevTerm.term}</p>
                  </Link>
                ) : <div />}
                {nextTerm ? (
                  <Link href={`/dictionary/${nextTerm.slug}`} className="group p-4 rounded-xl border border-border/40 bg-card/30 hover:border-primary/50 hover:bg-primary/5 transition-all text-right">
                    <span className="text-[10px] font-bold uppercase text-muted-foreground">Next →</span>
                    <p className="text-sm font-bold text-foreground mt-1 group-hover:text-primary transition-colors line-clamp-2">{nextTerm.term}</p>
                  </Link>
                ) : <div />}
              </div>
            </div>

            {/* Sidebar: Related Terms */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border/40 bg-card/40 p-5">
                <h2 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  Related {term.category} Terms
                </h2>
                <div className="space-y-2">
                  {relatedTerms.map(related => (
                    <Link
                      key={related.slug}
                      href={`/dictionary/${related.slug}`}
                      className="block p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <p className="text-sm font-semibold group-hover:text-primary transition-colors">{related.term}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{related.definition.substring(0, 60)}...</p>
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/dictionary" className="flex items-center justify-center gap-2 w-full p-3 rounded-xl border border-border/40 bg-secondary/20 hover:bg-secondary/40 text-sm font-bold transition-colors">
                📖 View Full Dictionary
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
