/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000, // ms
      aggregateTimeout: 500, // ms
      ignored: ["node_modules"], 
    }
    return config;
  },
}

module.exports = nextConfig
