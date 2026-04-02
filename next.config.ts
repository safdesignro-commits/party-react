import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
  serverExternalPackages: ['sharp', 'graphql'],
}

export default withPayload(nextConfig)
