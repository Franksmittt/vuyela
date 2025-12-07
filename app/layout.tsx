import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import { RouteFocusGuard } from '@/components/RouteFocusGuard';
import { defaultMetadata } from '@/lib/seo';
import SchemaScript from '@/components/SchemaScript';

/**
 * Font Configuration with CLS Prevention
 * 
 * adjustFontFallback: true (default, but explicit for clarity)
 * - Generates font metrics from the actual font file
 * - Creates a fallback font with matching metrics (size-adjust)
 * - Prevents Cumulative Layout Shift (CLS) by reserving correct space
 * - The fallback font matches the dimensions of the custom font
 * 
 * display: 'swap'
 * - Shows fallback font immediately while custom font loads
 * - Swaps to custom font when ready
 * - Prevents FOIT (Flash of Invisible Text)
 * - Improves perceived performance
 * 
 * Without adjustFontFallback, the browser uses default fallback metrics,
 * which often differ from the custom font, causing layout shift when
 * the custom font loads and replaces the fallback.
 */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: true, // Explicitly enable CLS prevention
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: true, // Explicitly enable CLS prevention
});

/**
 * Root Layout Metadata
 * 
 * Uses the defaultMetadata from lib/seo.ts which includes:
 * - Dynamic title template: '%s | Vuyela Logistics'
 * - Comprehensive Open Graph tags
 * - Twitter Card metadata
 * - Canonical URLs
 * - SEO-optimized defaults
 */
export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {/* JSON-LD Structured Data - Knowledge Graph */}
        <SchemaScript type="organization" />
        <SchemaScript type="website" />
        {/* Skip to Content Link - WCAG 2.4.1 Bypass Blocks */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-yellow-400 focus:text-[#1a1a1a] focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Route Focus Guard - Manages focus on navigation */}
        <Suspense fallback={null}>
          <RouteFocusGuard />
        </Suspense>

        {/* Main Content Wrapper - Target for focus management */}
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>
      </body>
    </html>
  );
}

