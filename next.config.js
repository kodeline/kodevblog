/** @type {import('next').NextConfig} */

const dns = require("dns");
dns.setDefaultResultOrder("ipv4first")

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  }
}

module.exports = nextConfig




