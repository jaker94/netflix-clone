/** @type {import('next').NextConfig}  */

const nextConfig = {
  transpilePackages: ['@stripe/firestore-stripe-payments']
}

module.exports = nextConfig;