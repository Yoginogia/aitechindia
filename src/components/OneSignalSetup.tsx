"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    OneSignalDeferred: any[];
  }
}

export default function OneSignalSetup() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      window.OneSignalDeferred = window.OneSignalDeferred || [];
      window.OneSignalDeferred.push(async function(OneSignal: any) {
        await OneSignal.init({
          appId: "ed3d4c93-11e6-4452-b4fc-51b8b560e6bb", // True Push Notification ID
          safari_web_id: "", 
          notifyButton: {
            enable: true,             // Shows the bell icon
            size: 'medium',           
            theme: 'default',         
            position: 'bottom-left',  
            offset: {
                bottom: '100px',      // Leaves space for Deals popups
                left: '20px'
            },
            colors: {
                'circle.background': '#6366f1', // primary color
                'circle.foreground': 'white',
            },
            text: {
                'tip.state.unsubscribed': 'Tech News की नोटिफिकेशन चालू करें',
                'tip.state.subscribed': 'आपने सब्सक्राइब किया हुआ है',
                'tip.state.blocked': 'नोटिफिकेशन ब्लॉक हो गए हैं',
                'message.prenotify': 'टेक्नोलॉजी की सबसे ताज़ा ख़बरें सबसे पहले पाने के लिए सब्सक्राइब करें',
                'message.action.subscribed': 'धन्यवाद! अब आपको हर ब्रेकिंग न्यूज़ तुरंत मिलेगी',
                'message.action.resubscribed': 'आपने फिर से सब्सक्राइब कर लिया है',
                'message.action.unsubscribed': 'नोटिफिकेशन बंद कर दिए गए हैं',
                'dialog.main.title': 'क्या आप न्यूज़ नोटिफिकेशन चाहते हैं?',
                'dialog.main.button.subscribe': 'हा, बिल्कुल!',
                'dialog.main.button.unsubscribe': 'बंद करें',
            }
          },
          allowLocalhostAsSecureOrigin: true, // Useful during development
        });
        
        // Auto prompt immediately on page load
        OneSignal.Slidedown.promptPush();
      });
    }
  }, []);

  return null; // This is a headless logic component
}
