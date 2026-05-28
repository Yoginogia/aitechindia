import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getSortedPostsData } from "@/lib/markdown";
import ProgressBar from "@/components/ProgressBar";
import NewsTicker from "@/components/NewsTicker";
import { LazyFloatingWidgets, LazyTicker } from "@/components/LazyWidgets";

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
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
    languages: {
      'hi-IN': '/',
      'en-IN': '/',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: "AITechNews | AI & Tech News",
    description: "Stay ahead with the latest AI updates, tech news, and gadget reviews.",
    images: ['/logo.png'],
  },
  other: {
    'google-news-publication': 'AITechNews',
    'news_keywords': 'AI, Tech, Smartphones, 5G, Crypto, Gadgets, India',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" suppressHydrationWarning>
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
          strategy="lazyOnload"
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
            <LazyTicker />
            <Navbar />
            <NewsTicker posts={getSortedPostsData().filter(post => post.category !== 'Crypto').slice(0, 3)} />
            <ProgressBar />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <LazyFloatingWidgets />
            <Footer />
            <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" strategy="afterInteractive" />
        </ThemeProvider>
      </body>
    </html>
  );
}
