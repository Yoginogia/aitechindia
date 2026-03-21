'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function WhatsAppButton() {
    return (
        <Link
            href="https://whatsapp.com/channel/0029Vb7j7XpF6smwzVoHDP0I"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
        >
            <div className="relative flex items-center justify-center">
                <MessageCircle className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
            </div>
            <span className="font-semibold hidden sm:block whitespace-nowrap">Join Channel</span>
        </Link>
    );
}
