import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());

// for fix

if (process.env.NODE_ENV === 'development' && !process.env.CI && !process.env.VERCEL) {
  await import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
}