import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/demangan-carwash",
  assetPrefix: "/demangan-carwash/",
};

export default nextConfig;
