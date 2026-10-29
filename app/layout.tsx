import type { Metadata, Viewport } from "next";
import { Google_Sans_Flex } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/app/lib/site";
import Ripple from "@/app/components/Ripple";
import "./globals.css";

// Google Sans Flex: one confident family for display and text, with the
// optical-size axis so large headings tighten and small text opens up.
const googleSans = Google_Sans_Flex({
  variable: "--font-google-sans",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
  // next/font has no metrics for this family yet, so no auto fallback.
  adjustFontFallback: false,
  fallback: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TetraNoodle · AI that knows your business and keeps it private",
    template: "%s · TetraNoodle",
  },
  description:
    "A private AI built around your data and the tools you already use, with AI agents that take on the work you choose. You approve every step. Building software since 2000.",
  applicationName: "TetraNoodle",
  authors: [{ name: "Manuj Aggarwal" }],
  creator: "TetraNoodle Technologies",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TetraNoodle · AI that knows your business and keeps it private",
    description:
      "A private AI built around your data and the tools you already use, with AI agents that take on the work you choose. You approve every step. Building software since 2000.",
    url: SITE_URL,
    siteName: "TetraNoodle",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TetraNoodle · AI that knows your business and keeps it private",
    description:
      "A private AI built around your data and the tools you already use, with AI agents that take on the work you choose. You approve every step. Building software since 2000.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f6f2",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={googleSans.variable}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-[color:var(--color-ink)] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm"
        >
          Skip to content
        </a>
        {children}
        <Ripple />
        <Analytics />
      </body>
    </html>
  );
}
