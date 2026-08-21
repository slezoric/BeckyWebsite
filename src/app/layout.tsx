import type { Metadata } from "next";
import { Ephesis, Mulish } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { versioned } from "@/lib/asset-version";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

// preload is off deliberately. Next was preloading the latin-ext subsets
// (~50KB across both faces), which this site never uses — its text is plain
// Latin. The latin files it does need are fetched from the stylesheet as
// normal, so nothing is lost and every page load is 50KB lighter.
const ephesis = Ephesis({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ephesis",
  display: "swap",
  preload: false,
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.discipline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.discipline}`,
    description: site.description,
    url: site.url,
    // The card people see when the site is shared in a message or a post.
    // Without it every share renders a blank grey rectangle, which is a poor
    // first impression at exactly the moment someone is recommending her.
    // Regenerate with: python3 scripts/brand_assets.py
    images: [
      {
        // Versioned by content hash: preview caches key on the URL, so a
        // changed picture at an unchanged address is never re-fetched.
        url: versioned("/images/og-image.png"),
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.discipline}`,
    description: site.description,
    images: [versioned("/images/og-image.png")],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-scroll-behavior tells Next the smooth scrolling in globals.css is
    // deliberate, so it doesn't warn about route transitions.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${ephesis.variable} ${mulish.variable}`}
    >
      <head>
        {/* If JS is disabled, scroll-reveal content must still be visible. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col bg-base text-cream antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-base-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        {/* The music toggle now lives in SiteHeader — it was a floating
            button here, which overlapped the page text on phones. */}
        <StructuredData />
        <Analytics />
      </body>
    </html>
  );
}
