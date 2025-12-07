// middleware.ts
// Iron Dome Security Middleware - Zero Trust Architecture
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. NONCE GENERATION
  // Generate a cryptographically strong random 128-bit value (base64 encoded)
  // relying on the Web Crypto API available in the Edge Runtime.
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // 2. PROXY LOGIC - Ad-blocker evasion
  // Rewrite requests to /_sys/telemetry to external analytics endpoints
  const url = request.nextUrl.clone();
  if (url.pathname.startsWith('/_sys/telemetry')) {
    // Rewrite to external analytics provider
    // In production, replace with your actual analytics endpoint
    const analyticsUrl = process.env.ANALYTICS_ENDPOINT || 'https://analytics.example.com/telemetry';
    url.href = analyticsUrl + url.search;
    return NextResponse.rewrite(url);
  }

  // 3. CSP CONSTRUCTION
  // We use 'strict-dynamic' to trust scripts loaded by our nonced scripts.
  // In development, 'unsafe-eval' is often required for hot-reloading features.
  const isDev = process.env.NODE_ENV === 'development';

  // Note: Add specific third-party domains to connect-src or img-src as needed
  // (e.g., Vercel Analytics, Clerk Auth, Sentry).
  const cspHeader = `
    default-src 'none';
    script-src 'self' 'nonce-${nonce}' ${isDev ? "'unsafe-eval'" : ''} 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data: https://*.clerk.com https://img.clerk.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    connect-src 'self' https://*.clerk.com https://clerk.com https://*.clerk.accounts.dev;
    upgrade-insecure-requests;
  `;

  // Normalize the CSP string by removing newlines and excessive spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 4. REQUEST HEADER INJECTION
  // We must pass the nonce to the request headers so that Server Components
  // can retrieve it via `headers().get('x-nonce')` to render <script> tags.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

  // 5. RESPONSE CREATION
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // 6. SECURITY HEADER INJECTION
  // These headers are enforced on the response sent back to the client.

  // Content-Security-Policy
  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  );

  // Strict-Transport-Security (HSTS)
  // Max-age: 2 years, include subdomains, preload consent.
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );

  // X-Frame-Options (Anti-Clickjacking)
  response.headers.set('X-Frame-Options', 'DENY');

  // X-Content-Type-Options (Anti-Sniffing)
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // Referrer-Policy (Privacy)
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions-Policy (Feature Lockdown)
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), browsing-topics=()'
  );

  // X-DNS-Prefetch-Control (Privacy)
  response.headers.set('X-DNS-Prefetch-Control', 'on');

  return response;
}

// 7. CONFIGURATION
// Ensure middleware does not run on static assets to preserve cache behavior.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};

