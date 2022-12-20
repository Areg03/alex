/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['am', 'en'],
    defaultLocale: 'am',
    localeDetection: false,
  },
}

module.exports = nextConfig
