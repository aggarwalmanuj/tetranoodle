import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General rule for all bots
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/*.json$"],
      },
      // Explicitly welcome major search & AI crawlers — visibility in
      // AI-generated answers is directly aligned with an AI consulting brand.
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "GPTBot", // OpenAI web crawler
        allow: "/",
      },
      {
        userAgent: "PerplexityBot", // Perplexity search
        allow: "/",
      },
      {
        userAgent: "ClaudeBot", // Anthropic web crawler
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
