import CompareClient from './CompareClient';

export const metadata = {
    title: 'Compare Mobile Phones in India | AITechNews',
    description: 'Side-by-side compare karo top smartphones ke specs, scores, pros & cons — AITechNews expert verdict ke saath.',
};

export default function ComparePage() {
    return (
        <div className="w-full h-full min-h-screen bg-background text-foreground">
            <CompareClient />
        </div>
    );
}
