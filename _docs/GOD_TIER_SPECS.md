# GOD-TIER NEXT.JS SPECIFICATIONS (THE BIBLE)

## 1. IRON DOME SECURITY
- **CSP Strategy:** Strict Content-Security-Policy with `nonce` generation.
- **Header Injection:** X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin.
- **Ad-Blocker Evasion:** Use Middleware to rewrite `/_sys/telemetry` -> external analytics endpoints.

## 2. GOD-TIER CSS (TAILWIND V4)
- **Fluid Typography:** Use `clamp(min, val, max)` for all font sizes.
- **Logical Properties:** Use `margin-inline-start` instead of `margin-left` for RTL support.
- **Variables:** Define semantic colors in OKLCH format in `globals.css` via `@theme`.

## 3. THE PAGE BUILDER (SANITY/CMS)
- **Polymorphic Array:** A `pageBuilder` array field that accepts strictly typed objects (Hero, FAQ, Features).
- **Visual Editing:** Must support Vercel Visual Editing / Sanity Presentation mode (click-to-edit).

## 4. FORENSIC SEO
- **Indexing:** Use Google Indexing API for instant service page updates.
- **Sitemap Sharding:** Split sitemaps into chunks of 25,000 URLs.
- **Metadata:** Use `generateMetadata` with parent template inheritance (`%s | Brand`).

## 5. ALIVE UX (MOTION)
- **Optimistic UI:** Use `useOptimistic` hook for immediate feedback (0ms latency).
- **Physics:** Framer Motion spring config: `{ stiffness: 400, damping: 25 }`.
- **Focus:** `RouteFocusGuard` must trigger on pathname change to fix silent navigation focus loss.

