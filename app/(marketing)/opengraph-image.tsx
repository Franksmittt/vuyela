/**
 * Open Graph Image Generator
 * 
 * Dynamically generates Open Graph images at the Edge runtime.
 * Uses Next.js ImageResponse to create branded social media cards.
 * 
 * This file generates OG images for all pages in the (marketing) route group.
 * The image is generated server-side at request time, ensuring it's always
 * up-to-date with the latest content.
 */

import { ImageResponse } from 'next/og';

// Edge runtime for optimal performance
export const runtime = 'edge';

// Image metadata
export const alt = 'Vuyela Logistics';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

/**
 * Generate Open Graph Image
 * 
 * Creates a branded social media card with:
 * - Gradient background
 * - Company logo/name
 * - Dynamic page title (if available)
 * - Professional design
 */
export default async function Image() {
  // Try to get dynamic title from request
  // For now, we'll use a default design
  // In a real implementation, you could parse the URL to get page-specific titles

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Main Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            textAlign: 'center',
          }}
        >
          {/* Logo/Company Name */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <span
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#ffffff',
                fontFamily: 'serif',
                letterSpacing: '-2px',
              }}
            >
              Vuyela
            </span>
            <span
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#facc15',
                fontFamily: 'serif',
                letterSpacing: '-2px',
                marginLeft: '12px',
              }}
            >
              Group
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '32px',
              color: '#e5e5e5',
              fontWeight: '500',
              marginTop: '20px',
              maxWidth: '900px',
              lineHeight: '1.4',
            }}
          >
            Locally Invested, Globally Connected
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '24px',
              color: '#a3a3a3',
              fontWeight: '400',
              marginTop: '30px',
              maxWidth: '800px',
            }}
          >
            Comprehensive Logistics Solutions Across South Africa
          </div>

          {/* Decorative Element */}
          <div
            style={{
              width: '200px',
              height: '4px',
              background: 'linear-gradient(90deg, transparent, #facc15, transparent)',
              marginTop: '50px',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

