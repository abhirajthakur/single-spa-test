/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.library = "profileApp";
      config.output.libraryTarget = "umd";
      config.output.globalObject = "this";
      config.output.publicPath = "http://localhost:8502/_next/";
    }
    return config;
  },
  output: "standalone",
};

export default nextConfig;
