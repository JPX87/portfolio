import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: false, // Désactivé: babel-plugin-react-compiler n'est pas installé. À installer si désiré.
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
  allowedDevOrigins: ['192.168.1.17'],

};

export default nextConfig;
