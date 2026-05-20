import AdSensePlaceholder from './AdSensePlaceholder';

export default function InlineAd({ slotId }: { slotId?: string }) {
    return <AdSensePlaceholder slotId={slotId || "INLINE_DEFAULT"} height="120px" />;
}
