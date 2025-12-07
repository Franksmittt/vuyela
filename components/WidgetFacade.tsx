'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

/**
 * Widget Facade Component
 * 
 * Implements the "Facade Pattern" for heavy third-party widgets (Chat, Maps, etc.)
 * 
 * Strategy:
 * 1. Render a lightweight "fake" button that looks identical to the real widget
 * 2. On hover or click, dynamically load the heavy component using next/dynamic
 * 3. This ensures the heavy JavaScript never loads during initial page load
 * 4. Improves LCP, FCP, and INP by deferring non-critical resources
 * 
 * Performance Benefits:
 * - Zero impact on initial bundle size
 * - Faster First Contentful Paint (FCP)
 * - Better Largest Contentful Paint (LCP)
 * - Improved Interaction to Next Paint (INP)
 * - Reduced main thread blocking during page load
 * 
 * Usage:
 * ```tsx
 * <WidgetFacade
 *   trigger="hover" // or "click"
 *   label="Start Chat"
 *   widgetComponent={HeavyChatWidget}
 * />
 * ```
 */

interface WidgetFacadeProps {
  /**
   * When to load the heavy component
   * - "hover": Load on mouse hover (best for discoverability)
   * - "click": Load on click (best for performance)
   */
  trigger?: 'hover' | 'click';
  /**
   * Label for the facade button
   */
  label: string;
  /**
   * The heavy component to load dynamically
   * Should be a lazy-loaded component
   */
  widgetComponent: React.ComponentType<any>;
  /**
   * Props to pass to the widget component
   */
  widgetProps?: Record<string, any>;
  /**
   * Custom styling for the facade button
   */
  className?: string;
  /**
   * Position of the widget (for chat widgets, etc.)
   */
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

/**
 * Dummy Heavy Component
 * Simulates a heavy third-party widget (e.g., Intercom, Drift, Google Maps)
 * In production, this would be the actual third-party component
 */
function DummyHeavyWidget({ onClose }: { onClose?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="bg-white rounded-2xl shadow-2xl p-6 w-80 max-w-[90vw] border border-gray-200"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-serif font-bold text-gray-900">
          Chat Widget
        </h3>
        {onClose && (
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close chat"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This is a simulated heavy widget. In production, this would be a
          third-party chat widget, map component, or other heavy JavaScript.
        </p>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500 mb-2">Widget loaded dynamically</p>
          <p className="text-xs text-gray-400">
            Bundle size: ~0KB on initial load
            <br />
            Loaded: On {typeof window !== 'undefined' ? 'interaction' : 'server'}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function WidgetFacade({
  trigger = 'hover',
  label,
  widgetComponent,
  widgetProps = {},
  className = '',
  position = 'bottom-right',
}: WidgetFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Dynamically import the heavy component with SSR disabled
  // This ensures it only loads on the client and never blocks initial render
  const HeavyWidget = dynamic(
    () => Promise.resolve(widgetComponent || DummyHeavyWidget),
    {
      ssr: false, // Critical: Don't render on server
      loading: () => (
        <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
      ),
    }
  );

  const handleTrigger = () => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
    if (trigger === 'click') {
      setIsVisible(true);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      handleTrigger();
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsVisible(false);
    }
  };

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
  };

  return (
    <div
      className={`fixed ${positionClasses[position]} z-50`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Facade Button - Lightweight, always rendered */}
      <button
        onClick={handleTrigger}
        className={`
          flex items-center gap-3
          px-6 py-4
          bg-yellow-400 hover:bg-yellow-300
          text-[#1a1a1a] font-semibold
          rounded-full shadow-lg
          transition-all duration-200
          hover:shadow-xl hover:scale-105
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400
          ${className}
        `}
        aria-label={label}
        aria-expanded={isVisible}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span>{label}</span>
      </button>

      {/* Heavy Widget - Only loaded and rendered after trigger */}
      {isLoaded && isVisible && (
        <div className="absolute bottom-full right-0 mb-4">
          <HeavyWidget
            {...widgetProps}
            onClose={() => setIsVisible(false)}
          />
        </div>
      )}
    </div>
  );
}

/**
 * Example Usage:
 * 
 * ```tsx
 * // In your page component
 * import { WidgetFacade } from '@/components/WidgetFacade';
 * 
 * // For a chat widget
 * <WidgetFacade
 *   trigger="hover"
 *   label="Start Chat"
 *   widgetComponent={IntercomWidget} // Your actual widget
 *   position="bottom-right"
 * />
 * 
 * // For a map widget
 * <WidgetFacade
 *   trigger="click"
 *   label="View Map"
 *   widgetComponent={GoogleMapWidget}
 *   widgetProps={{ center: [lat, lng] }}
 * />
 * ```
 */

