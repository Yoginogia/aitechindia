import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true, // 301 redirect — Google will update its index
      },
    ];
  },
};

export default nextConfig;
