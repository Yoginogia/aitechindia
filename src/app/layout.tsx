import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

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
  openGraph: {
    title: "AITechNews | AI & Tech News",
    description: "Stay ahead with the latest AI updates, tech news, and gadget reviews.",
    url: "https://aitechnews.co.in",
    siteName: "AITechNews",
    type: "website",
  },
  verification: {
    google: "3H46EQM6yQLN5t6Rz23LKdbixyPRPvsCRSfst2hUOH4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <Navbar />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
