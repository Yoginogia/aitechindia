import UpcomingPhonesClient from './UpcomingPhonesClient';

export const metadata = {
  title: 'Upcoming Phones in India 2026 | AITechNews',
  description: 'भारत में जल्द आने वाले सभी स्मार्टफोन्स की पूरी लिस्ट — Expected Price, Launch Date, और Key Specs। Samsung, Apple, OnePlus, Xiaomi और बाकी सभी ब्रांड्स के upcoming phones।',
  alternates: { canonical: '/upcoming-phones' },
};

export default function UpcomingPhonesPage() {
  return <UpcomingPhonesClient />;
}
