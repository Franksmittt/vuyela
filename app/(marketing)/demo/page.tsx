'use client';

import { OptimisticLike } from '@/components/OptimisticLike';
import { MotionWrapper } from '@/components/MotionWrapper';
import { StaggeredMotion } from '@/components/MotionWrapper';

/**
 * Demo Page for Phase 3 Components
 * 
 * Showcases:
 * - OptimisticLike component with zero-latency UI
 * - MotionWrapper with physics-based animations
 * - StaggeredMotion for sequential animations
 */

// Mock server action for demonstration
async function mockToggleLike(): Promise<{ liked: boolean; count: number }> {
  // Simulate server delay (2 seconds)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // In production, this would be a real server action:
  // 'use server';
  // export async function toggleLike() { ... }

  // Mock response - in real app, this would come from database
  return {
    liked: true,
    count: 42,
  };
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header with Motion */}
        <MotionWrapper>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Phase 3: Alive Interface
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Demonstrating Zero-Latency UI, Physics-Based Motion, and Focus Management
            </p>
          </div>
        </MotionWrapper>

        {/* Optimistic Like Demo */}
        <MotionWrapper delay={0.2}>
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Optimistic UI Pattern
            </h2>
            <p className="text-gray-600 mb-6">
              Click the like button to see instant feedback (0ms latency) before the server
              responds. The UI updates optimistically, then reconciles with the server state.
            </p>
            <div className="flex justify-center">
              <OptimisticLike
                initialLiked={false}
                initialCount={0}
                toggleLike={mockToggleLike}
                label="this demo"
              />
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Features:</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Instant UI update (optimistic state)</li>
                <li>Haptic feedback on click (vibration)</li>
                <li>Physics-based icon animation</li>
                <li>Automatic server state reconciliation</li>
                <li>Error handling with rollback</li>
              </ul>
            </div>
          </section>
        </MotionWrapper>

        {/* Motion Wrapper Demo */}
        <MotionWrapper delay={0.4}>
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Physics-Based Motion
            </h2>
            <p className="text-gray-600 mb-6">
              These cards animate in with critically damped spring physics (stiffness: 400,
              damping: 25) when they enter the viewport.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <MotionWrapper key={item} delay={item * 0.1}>
                  <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="font-serif font-bold text-gray-900 mb-2">
                      Card {item}
                    </h3>
                    <p className="text-sm text-gray-600">
                      This card animates in with spring physics when it enters the viewport.
                    </p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </section>
        </MotionWrapper>

        {/* Staggered Motion Demo */}
        <MotionWrapper delay={0.6}>
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Staggered Animations
            </h2>
            <p className="text-gray-600 mb-6">
              These items animate in sequence with a staggered delay, creating a cascading
              effect.
            </p>
            <StaggeredMotion staggerDelay={0.1}>
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="p-4 mb-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white font-bold">
                      {item}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Item {item}</h3>
                      <p className="text-sm text-gray-600">
                        Animates in sequence with {item * 0.1}s delay
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredMotion>
          </section>
        </MotionWrapper>

        {/* Focus Management Info */}
        <MotionWrapper delay={0.8}>
          <section className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">Focus Management</h3>
            <p className="text-sm text-blue-700">
              Navigate between pages using the header links. Notice how focus automatically
              moves to the main content area (#main-content) after each navigation, ensuring
              screen reader users are aware of the route change.
            </p>
          </section>
        </MotionWrapper>
      </div>
    </div>
  );
}

