"use client";

import dynamic from "next/dynamic";

// Lazy-load non-critical client widgets (don't block initial page render)
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });
const ChatbotWidget = dynamic(() => import("@/components/ChatbotWidget"), { ssr: false });
const OneSignalSetup = dynamic(() => import("@/components/OneSignalSetup"), { ssr: false });
const StickySocialShare = dynamic(() => import("@/components/StickySocialShare"), { ssr: false });
const InstallPrompt = dynamic(() => import("@/components/InstallPrompt"), { ssr: false });
const Ticker = dynamic(() => import("@/components/Ticker"), { ssr: false });

export function LazyFloatingWidgets() {
    return (
        <>
            <WhatsAppButton />
            <ChatbotWidget />
            <OneSignalSetup />
            <StickySocialShare />
            <InstallPrompt />
        </>
    );
}

export function LazyTicker() {
    return <Ticker />;
}
