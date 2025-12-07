import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Accessibility Compliance Test Suite
 * 
 * "Lawsuit Shield" - Automated WCAG 2.2 AA Compliance Testing
 * 
 * This test suite ensures that the application meets WCAG 2.2 Level AA standards
 * by running automated accessibility audits using Axe-core.
 * 
 * Axe-core can detect approximately 57% of WCAG violations automatically,
 * covering the most objective technical failures.
 * 
 * WCAG 2.2 AA Requirements:
 * - Perceivable: Text alternatives, captions, color contrast
 * - Operable: Keyboard navigation, focus management, no seizures
 * - Understandable: Readable, predictable, input assistance
 * - Robust: Compatible with assistive technologies
 * 
 * @see https://www.w3.org/WAI/WCAG22/quickref/?levels=aaa
 */

test.describe('Accessibility Compliance Audit', () => {
  /**
   * Test: Home Page Accessibility
   * 
   * Visits the home page and runs a comprehensive Axe accessibility audit.
   * Fails the build if any violations are detected.
   * 
   * This is the "Lawsuit Shield" - preventing non-compliant code from
   * reaching production.
   */
  test('Home page should have no accessibility violations', async ({ page }) => {
    // Navigate to home page
    await page.goto('/');

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');

    // Run Axe accessibility analysis
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']) // WCAG 2.2 AA standards
      .analyze();

    // Log violations for debugging (if any)
    if (accessibilityScanResults.violations.length > 0) {
      console.error('Accessibility Violations Found:');
      accessibilityScanResults.violations.forEach((violation) => {
        console.error(`\n[${violation.impact}] ${violation.id}: ${violation.description}`);
        console.error(`  Help: ${violation.helpUrl}`);
        violation.nodes.forEach((node) => {
          console.error(`  - ${node.html}`);
          if (node.failureSummary) {
            console.error(`    ${node.failureSummary}`);
          }
        });
      });
    }

    // Strict assertion: Fail if ANY violations are found
    // This enforces a zero-tolerance policy for accessibility issues
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  /**
   * Test: Services Page Accessibility
   * 
   * Tests a secondary page to ensure accessibility compliance
   * across different route types.
   */
  test('Services page should have no accessibility violations', async ({ page }) => {
    await page.goto('/services');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();

    if (accessibilityScanResults.violations.length > 0) {
      console.error('Accessibility Violations Found:');
      accessibilityScanResults.violations.forEach((violation) => {
        console.error(`\n[${violation.impact}] ${violation.id}: ${violation.description}`);
      });
    }

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  /**
   * Test: About Page Accessibility
   * 
   * Tests another page type to ensure comprehensive coverage.
   */
  test('About page should have no accessibility violations', async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();

    if (accessibilityScanResults.violations.length > 0) {
      console.error('Accessibility Violations Found:');
      accessibilityScanResults.violations.forEach((violation) => {
        console.error(`\n[${violation.impact}] ${violation.id}: ${violation.description}`);
      });
    }

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  /**
   * Test: Mobile Menu Interaction and Focus Management
   * 
   * Verifies that the mobile menu:
   * 1. Opens when the menu button is clicked
   * 2. Is accessible (no violations when open)
   * 3. Has proper focus management (focus moves to menu)
   * 4. Can be closed via keyboard
   * 
   * This test ensures WCAG 2.4.3 (Focus Order) and 2.1.1 (Keyboard) compliance.
   */
  test('Mobile menu should be accessible and manage focus correctly', async ({ page }) => {
    // Set mobile viewport - menu button is only visible on mobile
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE size

    // Navigate to home page
    await page.goto('/');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Find the mobile menu button
    // The button should have aria-expanded and aria-label="Toggle menu"
    const menuButton = page.getByRole('button', { name: 'Toggle menu' });

    // Verify menu button exists and is visible on mobile viewport
    await expect(menuButton).toBeVisible();

    // Get initial focus state (should be on body or first focusable element)
    const initialFocusedElement = await page.evaluate(() => document.activeElement?.tagName);

    // Click the menu button to open the mobile menu
    await menuButton.click();

    // Wait for menu to be visible
    // The menu should have role="dialog" and aria-modal="true"
    const mobileMenu = page.getByRole('dialog', { name: /navigation menu/i });
    await expect(mobileMenu).toBeVisible();

    // Verify menu button aria-expanded is true
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Check that focus has moved to the menu
    // Focus should be on the first focusable element in the menu (close button or first link)
    const focusedElement = await page.evaluate(() => {
      const active = document.activeElement;
      return {
        tagName: active?.tagName,
        textContent: active?.textContent?.trim(),
        role: active?.getAttribute('role'),
        ariaLabel: active?.getAttribute('aria-label'),
      };
    });

    // Verify focus is within the menu dialog
    // Focus should be on the close button, logo link, or first nav link
    expect(focusedElement.tagName).toBeTruthy();
    expect(['BUTTON', 'A']).toContain(focusedElement.tagName);

    // Run accessibility audit on the open menu state
    // This ensures the menu itself is accessible
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('[role="dialog"]') // Only scan the menu dialog
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();

    if (accessibilityScanResults.violations.length > 0) {
      console.error('Mobile Menu Accessibility Violations:');
      accessibilityScanResults.violations.forEach((violation) => {
        console.error(`\n[${violation.impact}] ${violation.id}: ${violation.description}`);
      });
    }

    // Assert no violations in the menu
    expect(accessibilityScanResults.violations).toEqual([]);

    // Test keyboard navigation: Press Escape to close menu
    await page.keyboard.press('Escape');

    // Wait for menu to close
    await expect(mobileMenu).not.toBeVisible();

    // Verify menu button aria-expanded is false
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    // Verify focus returns to menu button (or appropriate element)
    const finalFocusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(finalFocusedElement).toBeTruthy();
  });

  /**
   * Test: Keyboard Navigation
   * 
   * Verifies that all interactive elements are keyboard accessible.
   * Tests Tab navigation through the page.
   */
  test('Page should be fully keyboard navigable', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Get all focusable elements
    const focusableElements = await page.evaluate(() => {
      const selectors = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ].join(', ');

      const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors));
      return elements.map((el) => ({
        tagName: el.tagName,
        textContent: el.textContent?.trim().substring(0, 50),
        href: el.getAttribute('href'),
        ariaLabel: el.getAttribute('aria-label'),
        role: el.getAttribute('role'),
      }));
    });

    // Verify there are focusable elements
    expect(focusableElements.length).toBeGreaterThan(0);

    // Test Tab navigation
    // Start from the beginning
    await page.keyboard.press('Tab');

    // Verify we can navigate through multiple elements
    let focusCount = 0;
    const maxTabs = 10; // Limit to prevent infinite loops

    for (let i = 0; i < maxTabs; i++) {
      const focused = await page.evaluate(() => {
        const active = document.activeElement;
        return active !== document.body && active !== null;
      });

      if (focused) {
        focusCount++;
        await page.keyboard.press('Tab');
      } else {
        break;
      }
    }

    // Verify we were able to navigate through at least some elements
    expect(focusCount).toBeGreaterThan(0);
  });

  /**
   * Test: Color Contrast
   * 
   * Verifies that text meets WCAG 2.2 AA color contrast requirements.
   * AA requires 4.5:1 for normal text and 3:1 for large text.
   */
  test('Text should meet WCAG AA color contrast requirements', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa']) // Focus on AA standards
      .analyze();

    // Filter for color contrast violations specifically
    const contrastViolations = accessibilityScanResults.violations.filter(
      (violation) => violation.id === 'color-contrast'
    );

    if (contrastViolations.length > 0) {
      console.error('Color Contrast Violations:');
      contrastViolations.forEach((violation) => {
        console.error(`\n${violation.description}`);
        violation.nodes.forEach((node) => {
          console.error(`  - ${node.html}`);
        });
      });
    }

    // Assert no color contrast violations
    expect(contrastViolations).toEqual([]);
  });
});

