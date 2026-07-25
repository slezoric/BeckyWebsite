import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — deploys to Netlify as plain files, no server runtime.
  output: "export",
  // next/image can't optimize at runtime on a static host.
  images: { unoptimized: true },
  // Emit folder/index.html routes so Netlify serves clean URLs without redirects.
  trailingSlash: true,
};

export default nextConfig;
