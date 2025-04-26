import type { NextConfig } from "next";

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Enable image optimization for MDX content
  images: {
    domains: ['your-image-domain.com'],
  },
}

module.exports = withMDX(nextConfig)
