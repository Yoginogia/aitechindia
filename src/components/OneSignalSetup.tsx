"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    OneSignalDeferred: any[];
  }
}

export default function OneSignalSetup() {
  useEffect(() => {
    // Only run on client side — delay 30s to avoid popup overload on mobile
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        window.OneSignalDeferred = window.OneSignalDeferred || [];
        window.OneSignalDeferred.push(async function(OneSignal: any) {
          await OneSignal.init({
            appId: "ed3d4c93-11e6-4452-b4fc-51b8b560e6bb",
            allowLocalhostAsSecureOrigin: true,
          });
          
          // Let the OneSignal Dashboard rules trigger the prompts automatically
          // as manually calling Slidedown.promptPush() can cause conflicts if not configured in the dashboard.
        });
      }, 30000); // 30 second delay

      return () => clearTimeout(timer);
    }
  }, []);

  return null; // This is a headless logic component
}
