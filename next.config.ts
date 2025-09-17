import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://192.168.0.134:3000"],
  experimental: {
    // your other experimental stuff
  },
};

export default nextConfig;
