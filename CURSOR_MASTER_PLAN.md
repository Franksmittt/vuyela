# CURSOR_MASTER_PLAN.md
> **Project:** Next.js Enterprise "Rolls Royce" Implementation
> **Role:** Senior Next.js Architect & DevOps Manager
> **Objective:** Implement forensic-level SEO, "God-Tier" Responsive Design, Zero Trust Security, and "Alive" UX into an existing Next.js 15 App Router project.

---

## 🛑 READ THIS FIRST (Protocol)
This is a **dependency-aware** execution plan. Do not skip phases.
1. **Infrastructure (Phase 1)** must exist before **UI (Phase 3)**.
2. **CMS Data (Phase 2)** must exist before **SEO Metadata (Phase 4)**.
3. **Performance (Phase 5)** is the final polish.

---

## 🏗️ Phase 1: The Sovereign Foundation (Security, Middleware & CSS Architecture)
**Goal:** Establish the "Iron Dome" security layer and the mathematical CSS foundation before building UI components.
**Dependencies:** None. This is the root dependency.

### ✅ Checklist
- [ ] **Iron Dome Middleware:** Implement strict CSP (Content Security Policy) with Nonces and Header injection.
- [ ] **Route Groups:** Reorganize `app/` into `(marketing)` and `(app)` to isolate bundles.
- [ ] **God-Tier CSS:** Configure Tailwind v4 with `@theme` for fluid typography (`clamp()`) and logical properties.

### 🤖 Cursor Prompt 01 (Copy & Paste this into Composer)
> Act as a Senior DevOps Engineer. I need to establish the 'Iron Dome' security and routing foundation.
>
> 1. **Middleware & Security:** Create or update `middleware.ts`. Implement a Content Security Policy (CSP) that generates a cryptographic nonce for every request. Inject this nonce into the headers. Implement a 'Proxy' logic that allows us to rewrite requests for ad-blocker evasion (e.g., rewriting `/_sys/telemetry` to an external analytics provider).
> 2. **Folder Structure:** Reorganize the `app/` directory into Route Groups: `(marketing)` for public pages and `(dashboard)` for authenticated routes to ensure bundle isolation.
> 3. **God-Tier CSS:** Update `app/globals.css` using Tailwind v4 syntax. Define fluid typography variables using `clamp()` logic (slope-intercept) for `text-fluid-base` through `text-fluid-3xl` ensuring mathematical scaling from 320px to 1280px viewports. Define OKLCH semantic color variables.
>
> Output the code for `middleware.ts`, the folder tree structure, and `app/globals.css`.

---

## 💾 Phase 2: The Data Engine (CMS & Routing Architecture)
**Goal:** Build the content modeling and advanced routing logic.
**Dependencies:** Phase 1 (Folder Structure is required).

### ✅ Checklist
- [ ] **Sanity/CMS Page Builder:** Create a "Polymorphic" schema (`pageBuilder` array) for drag-and-drop page composition.
- [ ] **Parallel Routes:** Implement `default.tsx` and `@slot` logic for complex layouts.
- [ ] **On-Demand ISR:** Create the webhook revalidation route (`/api/revalidate`) for instant updates.

### 🤖 Cursor Prompt 02 (Copy & Paste this into Composer)
> Act as a Data Architect. We need to implement the 'Composable Content' and 'Advanced Routing' strategies.
>
> 1. **CMS Schema:** Create a TypeScript schema (or mock interface) for a 'Page Builder' pattern. Define a `pageBuilder` array that accepts modules like 'Hero', 'FeatureGrid', and 'CallToAction'. Ensure these are structured objects, not HTML blobs.
> 2. **Contextual Routing:** Implement a Parallel and Intercepted Route pattern for a 'Product Feed'. Create a structure where clicking a product item opens it in a Modal (intercepted route) while maintaining the feed context in the background.
> 3. **ISR Strategy:** Create a Route Handler `app/api/revalidate/route.ts` that accepts a webhook secret and a tag/path, calling `revalidatePath()` to enable On-Demand Incremental Static Regeneration.

---

## 🎨 Phase 3: The Alive Interface (UX, A11y & Motion)
**Goal:** Build the component library using "Headless" primitives and Physics-based motion.
**Dependencies:** Phase 1 (CSS variables), Phase 2 (CMS data types).

### ✅ Checklist
- [ ] **Headless A11y:** Implement `RouteFocusGuard` to manage focus on navigation.
- [ ] **Physics Motion:** Create a generic `MotionWrapper` using Framer Motion (Spring Physics: Stiffness 400).
- [ ] **Optimistic UI:** Implement a `LikeButton` or `SaveForm` using `useOptimistic` for 0ms latency.

### 🤖 Cursor Prompt 03 (Copy & Paste this into Composer)
> Act as a Principal Product Designer. Implement the 'Alive Interface' and 'Lawsuit-Proof' accessibility components.
>
> 1. **Focus Guard:** Create a client component `RouteFocusGuard.tsx` that triggers on pathname changes and moves focus to a `#main-content` wrapper to fix Next.js silent navigation issues.
> 2. **Optimistic UI:** Create a `LikeButton.tsx` that uses `useOptimistic` and `useTransition`. It should update the UI instantly (Zero-Latency) before the server action resolves. Add haptic feedback (`navigator.vibrate`) on click.
> 3. **Physics Motion:** Wrap the icon state changes in `framer-motion` using a spring config with Stiffness: 400 and Damping: 25 (Critically Damped).

---

## 🔮 Phase 4: The Semantic Oracle (Advanced SEO & Metadata)
**Goal:** Implement the "Forensic" SEO strategy including dynamic graph data and sitemap partitioning.
**Dependencies:** Phase 2 (Routes must exist).

### ✅ Checklist
- [ ] **Dynamic Metadata:** Implement `generateMetadata` with parent inheritance logic (`%s | Brand`).
- [ ] **JSON-LD Graph:** Inject a strict Knowledge Graph (Organization > Service > Review).
- [ ] **Edge Open Graph:** Create `opengraph-image.tsx` using `ImageResponse`.

### 🤖 Cursor Prompt 04 (Copy & Paste this into Composer)
> Act as a Technical SEO Architect. We need to implement the 'Semantic Oracle' strategy.
>
> 1. **Graph JSON-LD:** Create a component `SchemaScript.tsx` that generates a nested JSON-LD graph (Organization -> WebSite -> WebPage). It should accept dynamic data props.
> 2. **Edge OG Images:** Create an `opengraph-image.tsx` file for a dynamic route. Use `ImageResponse` to generate a branded social card at the Edge, fetching the page title dynamically.
> 3. **Sitemap Sharding:** Implement `app/sitemap.ts` using `generateSitemaps`. Write logic to shard the sitemap into chunks of 25,000 URLs to prevent timeouts.

---

## ⚡ Phase 5: Forensic Performance & Analytics
**Goal:** Optimize the Critical Rendering Path and implement server-side analytics.
**Dependencies:** Phase 3 (Components), Phase 4 (Metadata).

### ✅ Checklist
- [ ] **Font Fallback:** Configure `next/font` with `adjustFontFallback` to eliminate CLS.
- [ ] **Facade Pattern:** Build a `WidgetFacade` for heavy third-party scripts (Chat/Maps).
- [ ] **Partytown:** Offload GTM/Analytics to a Web Worker.

### 🤖 Cursor Prompt 05 (Copy & Paste this into Composer)
> Act as a Performance Engineer. Implement 'Forensic Resource Orchestration'.
>
> 1. **Facade Pattern:** Create a `WidgetFacade.tsx` component. It should render a static, lightweight placeholder button initially. On hover/interaction, use `next/dynamic` with `ssr: false` to load the heavy third-party component.
> 2. **LCP Optimization:** Write a code snippet showing how to apply `priority` AND `fetchPriority="high"` to the Hero image, and explicitly set `fetchPriority="low"` for non-critical images.
> 3. **Partytown:** Setup the configuration to offload GTM or Analytics scripts to a web worker using `@builder.io/partytown`.

---

## 🛡️ Phase 6: Automated Immunity (QA & Testing)
**Goal:** Lock down the quality with "Lawsuit-Proof" automated testing.
**Dependencies:** All previous phases.

### ✅ Checklist
- [ ] **A11y Automation:** Setup Playwright with `axe-core` to fail builds on accessibility errors.
- [ ] **Hydration Audit:** verify `reactStrictMode` is on.

### 🤖 Cursor Prompt 06 (Copy & Paste this into Composer)
> Act as a QA Engineer. Implement the 'Automated Immunity' testing suite.
>
> 1. **Accessibility Pipeline:** Create a Playwright test file `tests/a11y.spec.ts`. Import `@axe-core/playwright`. Write a test that visits the home page and the product page, runs the Axe analyzer, and strictly asserts `expect(results.violations).toEqual([])`.
> 2. **Hydration Safety:** Review `next.config.js` and ensure `reactStrictMode` is enabled to catch hydration mismatches during development.