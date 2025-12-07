'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

/**
 * Motion Wrapper Component
 * 
 * Provides physics-based motion animations using Framer Motion with
 * "Critically Damped" spring physics. This creates natural, premium-feeling
 * animations that respond to user interactions.
 * 
 * Physics Configuration:
 * - Stiffness: 400 (high responsiveness, professional feel)
 * - Damping: 25 (critically damped - no oscillation, smooth landing)
 * 
 * Animation Behavior:
 * - Elements animate in from below (Y-axis translate) with fade-in (opacity)
 * - Animation triggers when element enters viewport (Intersection Observer)
 * - Smooth, interruptible motion that feels natural
 * 
 * Usage:
 * ```tsx
 * <MotionWrapper>
 *   <YourContent />
 * </MotionWrapper>
 * ```
 */
interface MotionWrapperProps {
  children: ReactNode;
  /**
   * Delay before animation starts (in seconds)
   * Useful for staggered animations
   */
  delay?: number;
  /**
   * Custom spring configuration
   * Defaults to critically damped: { stiffness: 400, damping: 25 }
   */
  springConfig?: {
    stiffness: number;
    damping: number;
  };
  /**
   * Initial Y offset (in pixels)
   * Default: 20px
   */
  yOffset?: number;
  /**
   * Disable viewport detection and animate immediately
   */
  immediate?: boolean;
}

export function MotionWrapper({
  children,
  delay = 0,
  springConfig = { stiffness: 400, damping: 25 },
  yOffset = 20,
  immediate = false,
}: MotionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // Only animate once when first entering viewport
    margin: '-50px', // Start animation slightly before element is fully visible
  });

  // Spring configuration for critically damped motion
  const spring = {
    type: 'spring' as const,
    stiffness: springConfig.stiffness,
    damping: springConfig.damping,
  };

  // Animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ...spring,
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={immediate || isInView ? 'visible' : 'hidden'}
      variants={variants}
      style={{ willChange: 'transform, opacity' }} // Performance hint for browser
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered Motion Container
 * 
 * Wrapper for creating staggered animations across multiple children.
 * Each child will animate in sequence with a configurable delay.
 * 
 * Usage:
 * ```tsx
 * <StaggeredMotion staggerDelay={0.1}>
 *   <MotionWrapper>Item 1</MotionWrapper>
 *   <MotionWrapper>Item 2</MotionWrapper>
 *   <MotionWrapper>Item 3</MotionWrapper>
 * </StaggeredMotion>
 * ```
 */
interface StaggeredMotionProps {
  children: ReactNode;
  /**
   * Delay between each child animation (in seconds)
   * Default: 0.1s
   */
  staggerDelay?: number;
  /**
   * Spring configuration
   */
  springConfig?: {
    stiffness: number;
    damping: number;
  };
}

export function StaggeredMotion({
  children,
  staggerDelay = 0.1,
  springConfig = { stiffness: 400, damping: 25 },
}: StaggeredMotionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px',
  });

  const spring = {
    type: 'spring' as const,
    stiffness: springConfig.stiffness,
    damping: springConfig.damping,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        ...spring,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: spring,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

