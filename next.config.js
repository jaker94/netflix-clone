/** @type {import('next').NextConfig}  */

const nextConfig = {
  transpilePackages: ['@stripe/firestore-stripe-payments'],
  reactStrictMode: true,
  images: {
    domains: [`rb.gy`, `image.tmdb.org`]
  }
}

module.exports = nextConfig;