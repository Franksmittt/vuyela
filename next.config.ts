import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  // Explicitly set the project root to silence multiple lockfile warning
  outputFileTracingRoot: path.join(__dirname),
  
  // Optimize compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'], // Keep errors and warnings
    } : false,
  },
  
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    // Reduce image optimization memory usage
    minimumCacheTTL: 60,
  },
  
  // Experimental optimizations
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  /**
   * React Strict Mode
   * 
   * Enables React's strict mode, which:
   * - Double-renders components in development to catch side effects
   * - Identifies components with unsafe lifecycles
   * - Warns about legacy string ref API usage
   * - Detects unexpected side effects
   * - Detects legacy context API
   * 
   * Critical for Hydration Safety:
   * - Helps catch hydration mismatches during development
   * - Forces components to be idempotent (same input = same output)
   * - Prevents bugs that cause server/client HTML differences
   * 
   * This is essential for catching bugs that could cause:
   * - Hydration errors in production
   * - Layout shifts
   * - Accessibility issues from mismatched DOM
   */
  reactStrictMode: true,
};

export default nextConfig;

