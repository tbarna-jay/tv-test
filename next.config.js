/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiUrl: "https://api.tvmaze.com",
    REGENERATION_TIME: 60 * 5,
  },
  swcMinify: true,
  experimental: {
    reactRemoveProperties: true,
  },
};

module.exports = nextConfig;
