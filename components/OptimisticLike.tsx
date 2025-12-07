'use client';

import { useOptimistic, useTransition, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Optimistic Like Component
 * 
 * Demonstrates the "Zero-Latency" UI pattern using React's useOptimistic hook.
 * The UI updates instantly (0ms perceived latency) before the server action
 * completes, creating a premium, responsive feel.
 * 
 * Features:
 * - Instant UI feedback on click (optimistic update)
 * - Haptic feedback via navigator.vibrate
 * - Physics-based animation with critically damped spring
 * - Automatic reconciliation with server state
 * - Error handling with rollback
 * 
 * Pattern:
 * 1. User clicks → UI updates immediately (optimistic)
 * 2. Server action executes in background
 * 3. Server response confirms or corrects the optimistic state
 * 
 * This creates the illusion of zero latency even with network delays.
 */

interface OptimisticLikeProps {
  /**
   * Initial like state from server
   */
  initialLiked: boolean;
  /**
   * Initial like count from server
   */
  initialCount: number;
  /**
   * Server action to toggle like
   * Should return the new state: { liked: boolean, count: number }
   */
  toggleLike: () => Promise<{ liked: boolean; count: number }>;
  /**
   * Optional label for accessibility
   */
  label?: string;
}

type LikeState = {
  liked: boolean;
  count: number;
  pending?: boolean;
};

export function OptimisticLike({
  initialLiked,
  initialCount,
  toggleLike,
  label = 'Like',
}: OptimisticLikeProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  // Optimistic state management
  const [optimisticState, addOptimistic] = useOptimistic<LikeState, LikeState>(
    { liked: initialLiked, count: initialCount },
    (currentState, optimisticValue) => {
      // Merge optimistic update with current state
      return {
        ...currentState,
        ...optimisticValue,
        pending: true,
      };
    }
  );

  const handleClick = () => {
    // Clear any previous errors
    setError(null);

    // Haptic feedback (if supported)
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(50); // 50ms vibration
      } catch (e) {
        // Vibration not supported or blocked
      }
    }

    // Calculate optimistic state (what we expect the server to return)
    const newLiked = !optimisticState.liked;
    const newCount = newLiked
      ? optimisticState.count + 1
      : Math.max(0, optimisticState.count - 1);

    // Apply optimistic update immediately (0ms latency)
    addOptimistic({
      liked: newLiked,
      count: newCount,
    });

    // Start server action in background
    startTransition(async () => {
      try {
        const result = await toggleLike();

        // Server action completed - the optimistic state will be replaced
        // with the actual server state automatically by React
        // If there's a mismatch, React will reconcile it
        if (result.liked !== newLiked || result.count !== newCount) {
          // Server returned different state - this is rare but possible
          // React will handle the reconciliation automatically
          console.log('Server state differs from optimistic state:', {
            optimistic: { liked: newLiked, count: newCount },
            server: result,
          });
        }
      } catch (err) {
        // Error occurred - revert optimistic state
        setError('Failed to update like. Please try again.');
        // The optimistic state will be reverted automatically
        // by React when the component re-renders with the original state
        console.error('Error toggling like:', err);
      }
    });
  };

  // Spring physics for icon animation
  const springConfig = {
    type: 'spring' as const,
    stiffness: 400,
    damping: 25,
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleClick}
        disabled={isPending}
        aria-label={`${optimisticState.liked ? 'Unlike' : 'Like'} ${label}`}
        aria-pressed={optimisticState.liked}
        className={`
          relative flex items-center justify-center
          w-16 h-16 rounded-full
          transition-colors duration-200
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400
          ${
            optimisticState.liked
              ? 'bg-red-50 hover:bg-red-100'
              : 'bg-gray-100 hover:bg-gray-200'
          }
          ${isPending ? 'opacity-50 cursor-wait' : 'cursor-pointer'}
          ${error ? 'ring-2 ring-red-500' : ''}
        `}
      >
        {/* Heart Icon with Physics Animation */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={optimisticState.liked ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={2}
          className={`
            w-8 h-8
            ${optimisticState.liked ? 'text-red-500' : 'text-gray-600'}
            transition-colors duration-200
          `}
          animate={{
            scale: optimisticState.pending ? [1, 1.3, 1] : 1,
          }}
          transition={springConfig}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </motion.svg>

        {/* Pending Indicator */}
        {optimisticState.pending && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-yellow-400 border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )}
      </button>

      {/* Count Display */}
      <div className="text-sm font-semibold text-gray-700">
        {optimisticState.count}
        <span className="sr-only">likes</span>
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-600 text-center max-w-[200px]"
          role="alert"
        >
          {error}
        </motion.div>
      )}

      {/* Debug Info (remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="text-xs text-gray-400 mt-2 text-center">
          <div>Pending: {optimisticState.pending ? 'Yes' : 'No'}</div>
          <div>Liked: {optimisticState.liked ? 'Yes' : 'No'}</div>
        </div>
      )}
    </div>
  );
}

/**
 * Example Server Action (for reference)
 * 
 * This would typically be in a separate file (e.g., app/actions/like.ts)
 * 
 * 'use server';
 * 
 * export async function toggleLikeAction(itemId: string) {
 *   // Simulate database operation
 *   await new Promise(resolve => setTimeout(resolve, 2000));
 *   
 *   // Update database
 *   const newState = await db.likes.toggle(itemId);
 *   
 *   // Revalidate cache
 *   revalidatePath('/feed');
 *   
 *   return {
 *     liked: newState.liked,
 *     count: newState.count,
 *   };
 * }
 */

