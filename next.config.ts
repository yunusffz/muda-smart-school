import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aynuunaurwugqbuhwxbx.supabase.co",
      },
    ],
  },
};

export default nextConfig;
