import type { Metadata, Viewport } from "next";
import { Google_Sans_Flex } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/app/lib/site";
import Ripple from "@/app/components/Ripple";
import "./globals.css";

// Material 3 Expressive's typeface, with the optical-size and roundness axes.
const googleSans = Google_Sans_Flex({
  variable: "--font-google-sans",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "ROND"],
  // next/font has no metrics for this family yet, so no auto fallback.
  adjustFontFallback: false,
  fallback: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TetraNoodle · Your own AI. Private, secure, actually yours.",
    template: "%s · TetraNoodle",
  },
  description:
    "Your own private AI, for individuals and organizations: agents that run the work that doesn’t need you, and a private vault that holds your intelligence.",
  applicationName: "TetraNoodle",
  authors: [{ name: "Manuj Aggarwal" }],
  creator: "TetraNoodle Technologies",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TetraNoodle · Your own AI. Private, secure, actually yours.",
    description:
      "Your own private AI, for individuals and organizations: agents that run the work that doesn’t need you, and a private vault that holds your intelligence.",
    url: SITE_URL,
    siteName: "TetraNoodle",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TetraNoodle · Your own AI. Private, secure, actually yours.",
    description:
      "Your own private AI, for individuals and organizations: agents that run the work that doesn’t need you, and a private vault that holds your intelligence.",
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
  themeColor: "#fdf8ff",
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
