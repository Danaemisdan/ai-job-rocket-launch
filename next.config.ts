import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    // @ts-ignore - buildActivity is valid but types might be strict
    buildActivity: false,
    appIsrStatus: false,
  },
};

export default nextConfig;
