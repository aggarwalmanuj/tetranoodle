import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "Case Studies" was renamed "Results" — keep old links and search
  // results working.
  async redirects() {
    return [
      { source: "/case-studies", destination: "/results", permanent: true },
      {
        source: "/case-studies/:slug",
        destination: "/results/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
