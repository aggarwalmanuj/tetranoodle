import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tetranoodle.com"),
  title: {
    default: "TetraNoodle · Root-cause intelligence for the age of AI",
    template: "%s · TetraNoodle",
  },
  description:
    "AI Merge finds the root pattern beneath every persistent problem, then builds the human capacity to change it for good.",
  applicationName: "TetraNoodle",
  authors: [{ name: "Manuj Aggarwal" }],
  creator: "TetraNoodle Technologies",
  openGraph: {
    title: "TetraNoodle · Root-cause intelligence for the age of AI",
    description:
      "AI Merge finds the pattern beneath the problem, then builds the human capacity to change it for good.",
    url: "https://tetranoodle.com",
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
  robots: { index: true, follow: true },
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
      className={`${inter.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-[color:var(--color-ink)] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
