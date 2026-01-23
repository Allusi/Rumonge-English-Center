/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",               // enables static export
  basePath: "/Rumonge-English-Center",
  assetPrefix: "/Rumonge-English-Center/",
  images: {
    unoptimized: true,            // required for GitHub Pages
  },
};

module.exports = nextConfig;
