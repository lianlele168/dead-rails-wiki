import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Indexed by Google on 2026-08-25, then removed without a redirect in
        // the 2026-09-19 data rewrite (71cd8ba) — an indexed URL must never
        // 404. Points at the successor calculator.
        source: "/cargo-trade-calculator",
        destination: "/calculator",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
