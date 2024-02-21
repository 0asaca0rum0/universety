/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: "anonymous",
  env: {
    BACK_URL: process.env.BACK_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
