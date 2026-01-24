/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",           // Use standalone for APK builds with dynamic routes
  // basePath: "/Rumonge-English-Center",
  // assetPrefix: "/Rumonge-English-Center/",
  images: {
    unoptimized: true,            // required for static assets
  },
};

module.exports = nextConfig;
