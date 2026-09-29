import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono, Google_Sans_Flex } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/app/lib/site";
import { UI_BOOT_SCRIPT } from "@/app/lib/ui";
import UiToggle from "@/app/components/UiToggle";
import "./globals.css";
import "./m3.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Material 3 Expressive's typeface — used only by the new UI.
const googleSans = Google_Sans_Flex({
  variable: "--font-google-sans",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "ROND"],
  // next/font has no metrics for this family yet, so no auto fallback.
  adjustFontFallback: false,
  fallback: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TetraNoodle · Root-cause intelligence for the age of AI",
    template: "%s · TetraNoodle",
  },
  description:
    "AI Merge finds the root pattern beneath every persistent problem, then builds the human capacity to change it for good.",
  applicationName: "TetraNoodle",
  authors: [{ name: "Manuj Aggarwal" }],
  creator: "TetraNoodle Technologies",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TetraNoodle · Root-cause intelligence for the age of AI",
    description:
      "AI Merge finds the pattern beneath the problem, then builds the human capacity to change it for good.",
    url: SITE_URL,
    siteName: "TetraNoodle",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TetraNoodle · Root-cause intelligence for the age of AI",
    description:
      "AI Merge finds the pattern beneath the problem, then builds the human capacity to change it for good.",
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
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="indigo"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${geistMono.variable} ${googleSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: UI_BOOT_SCRIPT }} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-[color:var(--color-ink)] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm"
        >
          Skip to content
        </a>
        {children}
        <UiToggle />
        <Analytics />
      </body>
    </html>
  );
}
