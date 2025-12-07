# Accessibility Testing Suite

## Overview

This test suite implements automated WCAG 2.2 AA compliance testing using Playwright and Axe-core. It serves as the "Lawsuit Shield" - preventing non-compliant code from reaching production.

## Running Tests

### Run All Tests
```bash
npm run test
```

### Run Only Accessibility Tests
```bash
npm run test:a11y
```

### Run Tests with UI Mode (Interactive)
```bash
npm run test:ui
```

### Run Tests in Headed Mode (See Browser)
```bash
npm run test:headed
```

## Test Coverage

### 1. Home Page Accessibility
- Visits `/` and runs comprehensive Axe audit
- Fails if any WCAG 2.2 AA violations are detected

### 2. Services Page Accessibility
- Tests secondary page accessibility
- Ensures compliance across different route types

### 3. About Page Accessibility
- Tests another page type for comprehensive coverage

### 4. Mobile Menu Interaction
- Verifies menu opens/closes correctly
- Tests focus management (WCAG 2.4.3)
- Verifies keyboard accessibility (WCAG 2.1.1)
- Ensures menu is accessible when open

### 5. Keyboard Navigation
- Verifies all interactive elements are keyboard accessible
- Tests Tab navigation through the page

### 6. Color Contrast
- Verifies text meets WCAG AA contrast requirements (4.5:1 for normal text)

## CI/CD Integration

The tests are configured to:
- Fail the build if any violations are found
- Run on multiple browsers (Chromium, Firefox, WebKit)
- Run on mobile devices (Mobile Chrome, Mobile Safari)
- Generate HTML reports for review

## Fixing Violations

When a test fails:
1. Check the console output for violation details
2. Review the HTML report: `npx playwright show-report`
3. Fix the violation in the code
4. Re-run the test to verify the fix

## Zero-Tolerance Policy

The test suite uses strict assertions:
```typescript
expect(accessibilityScanResults.violations).toEqual([]);
```

This means **any** violation will fail the build, enforcing a zero-tolerance policy for accessibility issues.

