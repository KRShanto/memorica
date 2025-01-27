import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "swiperjs.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
