import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import Ticker from "@/components/Ticker";
import ChatbotWidget from "@/components/ChatbotWidget";
import { getSortedPostsData } from "@/lib/markdown";
import NewsTicker from "@/components/NewsTicker";
import ProgressBar from "@/components/ProgressBar";
import DealToast from "@/components/DealToast";
import OneSignalSetup from "@/components/OneSignalSetup";

const GA_ID = "G-9MKDQQ6NEH";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aitechnews.co.in'),
  title: "AITechNews | AI & Tech News",
  description: "Stay ahead with the latest AI updates, tech news, and gadget reviews.",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "AITechNews | AI & Tech News",
    description: "Stay ahead with the latest AI updates, tech news, and gadget reviews.",
    url: "https://aitechnews.co.in",
    siteName: "AITechNews",
    type: "website",
    images: [{ url: '/logo.png', width: 512, height: 512 }],
  },
  verification: {
    google: ["3H46EQM6yQLN5t6Rz23LKdbixyPRPvsCRSfst2hUOH4", "L8GtQ7nuM_yn1OJV7x5mwpcLjyIjl3MM08B48HuYp_Q"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3543763798528021"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="ait-theme"
            disableTransitionOnChange
        >
            <Ticker />
            <Navbar />
            <NewsTicker posts={getSortedPostsData().slice(0, 3)} />
            <ProgressBar />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <DealToast />
            <WhatsAppButton />
            <ChatbotWidget />
            <Footer />
            <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" strategy="afterInteractive" />
            <OneSignalSetup />
        </ThemeProvider>
      </body>
    </html>
  );
}
