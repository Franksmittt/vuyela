'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface PillarCardV2Props {
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  supportingCopy: string;
  icon: React.ReactNode;
  delay?: number;
}

export function PillarCardV2({
  title,
  description,
  metricLabel,
  metricValue,
  supportingCopy,
  icon,
  delay = 0,
}: PillarCardV2Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(pointerY, [0, 1], [8, -8]),
    { stiffness: 150, damping: 25 }
  );

  const rotateY = useSpring(
    useTransform(pointerX, [0, 1], [-8, 8]),
    { stiffness: 150, damping: 25 }
  );

  const luxuryEase = [0.43, 0.13, 0.23, 0.96] as const;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = cardRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    pointerX.set(x);
    pointerY.set(y);
  };

  const resetPointer = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: luxuryEase }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
    >
      <motion.div
        className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white via-white to-gray-50/50 border border-gray-200/50 overflow-hidden group"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Animated glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(0deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Top section: Icon and Metric */}
          <div className="flex items-start justify-between mb-6">
            <motion.div
              className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:text-[#1a1a1a] transition-all duration-300"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {icon}
            </motion.div>

            <div className="text-right">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-1">
                {metricLabel}
              </p>
              <p className="text-3xl font-serif font-bold text-[#1a1a1a]">
                {metricValue}
              </p>
            </div>
          </div>

          {/* Middle section: Title and Description */}
          <div className="flex-1 space-y-4 mb-6">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">
                Pillar
              </p>
              <h3 className="text-2xl font-serif font-bold text-gray-900">
                {title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
            <p className="text-sm text-gray-500">
              {supportingCopy}
            </p>
          </div>

          {/* Bottom: CTA */}
          <motion.div
            className="flex items-center gap-2 text-[#1a1a1a] font-semibold text-sm uppercase tracking-wide pt-4 border-t border-gray-100 mt-auto"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <span>See Operational Proof</span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

