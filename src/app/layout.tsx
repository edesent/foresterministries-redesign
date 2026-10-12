import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SITE } from "@/config/site";
import "./globals.css";

// Self-hosted: next/font/google fetches at build time, and Vercel's build
// workers intermittently can't reach Google Fonts, which fails the deploy.
const cinzel = localFont({
  variable: "--font-wordmark",
  src: "../fonts/cinzel.woff2",
  weight: "400 700",
  display: "swap",
});

const cormorant = localFont({
  variable: "--font-display",
  src: [
    { path: "../fonts/cormorant.woff2", weight: "400 700", style: "normal" },
    { path: "../fonts/cormorant-italic.woff2", weight: "400 700", style: "italic" },
  ],
  display: "swap",
});

const inter = localFont({
  variable: "--font-sans",
  src: "../fonts/inter.woff2",
  weight: "400 700",
  display: "swap",
});

const SITE_URL = SITE.url;
const SITE_NAME = SITE.name;
const SITE_TAGLINE = SITE.tagline;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE.description,
  applicationName: SITE_NAME,
  keywords: [
    "Stephen Forester",
    "Stephen Forester Ministries",
    "southern gospel singer",
    "gospel concert Michigan",
    "Christian ventriloquist",
    "gospel music ministry",
    "church concert",
    "revival singer",
    "gospel singer Lapeer Michigan",
    "puppet ministry",
    "book a gospel singer",
    "gospel music CDs",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE.description,
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [
      {
        url: "/photos/hero-bridge.jpg",
        width: 1920,
        height: 1080,
        alt: `${SITE.person} — ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE.description,
    images: ["/photos/hero-bridge.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE.shortName,
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: true, email: true, address: true },
  category: "music",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: SITE.themeColorDark,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-ink">{children}</body>
    </html>
  );
}
