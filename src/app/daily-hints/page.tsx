import DailyHintsClient from './DailyHintsClient';

export const metadata = {
  title: 'Wordle Answer Today, NYT Connections & Strands Hints | AITechNews',
  description: 'आज का Wordle Answer, NYT Connections Hints, और NYT Strands Hints — सब एक जगह! Hindi + English में daily puzzle solutions, tips और explanations।',
  alternates: { canonical: '/daily-hints' },
  keywords: ['wordle answer today', 'wordle hints today', 'nyt connections hints today', 'nyt connections answers', 'nyt strands hints today', 'daily puzzle answers'],
};

export default function DailyHintsPage() {
  return <DailyHintsClient />;
}
