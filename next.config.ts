import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? "/website-shineindiasolutions" : "",
  assetPrefix: isProd ? "/website-shineindiasolutions/" : "",
};

export default nextConfig;
