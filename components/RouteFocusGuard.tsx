'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Route Focus Guard Component
 * 
 * Fixes the "Silent Navigation" issue in Next.js App Router by managing
 * keyboard focus on route changes. When the pathname changes, focus is
 * moved to the main content area (#main-content) to ensure screen reader
 * users are aware of the navigation and can immediately interact with
 * the new content.
 * 
 * WCAG 2.2 AA Compliance:
 * - 2.4.3 Focus Order: Ensures logical focus order after navigation
 * - 2.4.1 Bypass Blocks: Works with skip-to-content link
 * 
 * @see https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html
 */
export function RouteFocusGuard() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialMount = useRef(true);
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    // Skip focus management on initial mount to prevent stealing focus
    // from elements that should receive focus on page load (e.g., skip links)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      previousPathname.current = pathname;
      return;
    }

    // Only manage focus if the pathname actually changed
    // (not just a re-render or search param change)
    if (previousPathname.current === pathname) {
      return;
    }

    previousPathname.current = pathname;

    // Small delay to ensure DOM has updated after route change
    // This is necessary because Next.js App Router updates are async
    const timeoutId = setTimeout(() => {
      // Find the main content element
      const mainContent = document.getElementById('main-content');

      if (mainContent) {
        // Make the element focusable if it isn't already
        if (!mainContent.hasAttribute('tabIndex')) {
          mainContent.setAttribute('tabIndex', '-1');
        }

        // Move focus to main content
        mainContent.focus();

        // Optional: Scroll to top of main content smoothly
        // This helps visual users as well
        mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Fallback: If main-content doesn't exist, focus the body
        // This should not happen if layout is properly structured
        console.warn(
          'RouteFocusGuard: #main-content element not found. ' +
          'Ensure your layout wraps children in <main id="main-content">'
        );
      }
    }, 100); // 100ms delay to allow Next.js to complete the route transition

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname, searchParams]);

  // This component doesn't render anything
  return null;
}

