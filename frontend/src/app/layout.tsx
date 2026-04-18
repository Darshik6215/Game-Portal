import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdSenseScript from "@/components/ads/AdSenseScript";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GameHub - Play Free Online Games | Best HTML5 Web Games",
  description: "Play the best free online games instantly in your browser. No downloads required! Enjoy action, puzzle, racing, sports, and strategy games. 20+ games available now!",
  keywords: ["free online games", "web games", "HTML5 games", "browser games", "play games online", "no download games"],
  authors: [{ name: "GameHub" }],
  creator: "GameHub",
  publisher: "GameHub",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gamehub.com",
    siteName: "GameHub",
    title: "GameHub - Play Free Online Games",
    description: "Play the best free online games instantly in your browser. Action, puzzle, racing, and more!",
    images: [
      {
        url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "GameHub - Free Online Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GameHub - Play Free Online Games",
    description: "Play the best free online games instantly in your browser. No downloads required!",
    images: ["https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&q=80"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#8b5cf6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GameHub',
    description: 'Play the best free online games instantly in your browser',
    url: 'https://gamehub.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://gamehub.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        <AdSenseScript />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
