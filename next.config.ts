import type { NextConfig } from "next"
import { securityHeaders } from "./lib/security-headers"

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders(process.env.NODE_ENV === "development") }]
  },
}

export default nextConfig
