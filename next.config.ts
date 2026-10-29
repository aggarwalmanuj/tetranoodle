import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 defaults to q75, which softens portraits and fine detail.
    // The loader snaps every <Image> to the closest allowed value, so this
    // one entry makes all photography encode at 90.
    qualities: [90],
    formats: ["image/avif", "image/webp"],
  },
  // "Results" was renamed back to "Case Studies": keep the old /results
  // links and search results working.
  async redirects() {
    return [
      { source: "/results", destination: "/case-studies", permanent: true },
      {
        source: "/results/:slug",
        destination: "/case-studies/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
