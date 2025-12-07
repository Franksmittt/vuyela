'use client';

import { Partytown } from '@builder.io/partytown/react';
import Script from 'next/script';

/**
 * Third Party Scripts Component
 * 
 * Implements Partytown to offload heavy third-party scripts (Analytics, GTM, etc.)
 * to a Web Worker, preventing them from blocking the main thread.
 * 
 * Performance Benefits:
 * - Main thread remains responsive (better INP)
 * - Third-party scripts don't block page rendering
 * - Analytics and tracking run in background worker
 * - Zero impact on Core Web Vitals
 * 
 * How It Works:
 * 1. Partytown creates a Web Worker
 * 2. Third-party scripts are proxied to the worker
 * 3. DOM access is synchronized via postMessage
 * 4. Main thread stays free for user interactions
 * 
 * Note: @builder.io/partytown is deprecated in favor of @qwik.dev/partytown
 * Consider migrating in future updates.
 */

interface ThirdPartyScriptsProps {
  /**
   * Google Analytics Measurement ID
   * Leave empty to disable GA
   */
  gaId?: string;
  /**
   * Google Tag Manager Container ID
   * Leave empty to disable GTM
   */
  gtmId?: string;
  /**
   * Enable debug mode (logs to console)
   */
  debug?: boolean;
}

export function ThirdPartyScripts({
  gaId,
  gtmId,
  debug = false,
}: ThirdPartyScriptsProps) {
  return (
    <>
      {/* Partytown Configuration */}
      <Partytown
        config={{
          debug,
          forward: ['dataLayer.push'], // Forward GTM dataLayer events to worker
          resolveUrl: (url) => {
            // Proxy analytics domains to worker
            if (url.hostname === 'www.googletagmanager.com' || 
                url.hostname === 'www.google-analytics.com' ||
                url.hostname === 'www.googleadservices.com') {
              return url;
            }
            return null; // Don't proxy other domains
          },
        }}
      />

      {/* Google Analytics (via Partytown) */}
      {gaId && (
        <>
          <Script
            id="ga-init"
            type="text/partytown"
            strategy="worker"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          <Script
            type="text/partytown"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="worker"
          />
        </>
      )}

      {/* Google Tag Manager (via Partytown) */}
      {gtmId && (
        <>
          <Script
            id="gtm-init"
            type="text/partytown"
            strategy="worker"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  'gtm.start': new Date().getTime(),
                  event: 'gtm.js'
                });
              `,
            }}
          />
          <Script
            type="text/partytown"
            src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
            strategy="worker"
          />
        </>
      )}

      {/* GTM Noscript Fallback (for users with JS disabled) */}
      {gtmId && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            aria-hidden="true"
          />
        </noscript>
      )}

      {/* Example: Custom Analytics Event (via Partytown) */}
      {gaId && (
        <Script
          id="ga-custom-events"
          type="text/partytown"
          strategy="worker"
          dangerouslySetInnerHTML={{
            __html: `
              // Example: Track page views
              if (typeof window !== 'undefined' && window.dataLayer) {
                window.dataLayer.push({
                  event: 'page_view',
                  page_path: window.location.pathname,
                  page_title: document.title,
                });
              }
            `,
          }}
        />
      )}
    </>
  );
}

/**
 * Usage Example:
 * 
 * ```tsx
 * // In app/layout.tsx
 * import { ThirdPartyScripts } from '@/components/ThirdPartyScripts';
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <head>
 *         <ThirdPartyScripts
 *           gaId="G-XXXXXXXXXX" // Your GA Measurement ID
 *           gtmId="GTM-XXXXXXX"  // Your GTM Container ID
 *           debug={process.env.NODE_ENV === 'development'}
 *         />
 *       </head>
 *       <body>{children}</body>
 *     </html>
 *   );
 * }
 * ```
 * 
 * Environment Variables:
 * - NEXT_PUBLIC_GA_ID: Google Analytics Measurement ID
 * - NEXT_PUBLIC_GTM_ID: Google Tag Manager Container ID
 */

