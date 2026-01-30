import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aynuunaurwugqbuhwxbx.supabase.co",
      },
      {
        protocol: "https",
        hostname: "fgfqalcklhqhtilgyapm.supabase.co",
      },
    ],
  },
};

export default nextConfig;
