/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'rb.gy',],
    remotePatterns: [{
      protocol: "https",
       hostname: "rb.gy",
       port:'',
      pathname:'/p2hphi'
    }],
  }
   
}
