import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};


// import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());

if (process.env.NODE_ENV === 'development' && !process.env.VERCEL) {
  // fire-and-forget, no await at top level
  import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
}

export default nextConfig;