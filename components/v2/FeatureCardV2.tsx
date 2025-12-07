'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FeatureCardV2Props {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  index?: number;
}

export function FeatureCardV2({ title, description, icon, delay = 0, index = 0 }: FeatureCardV2Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const luxuryEase = [0.43, 0.13, 0.23, 0.96] as const;
  const staggerDelay = delay + index * 0.1;

  return (
    <motion.div
      ref={ref}
      className="group relative h-full"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: staggerDelay, ease: luxuryEase }}
    >
      <motion.div
        className="relative h-full p-8 rounded-3xl bg-white border border-gray-200/50 overflow-hidden"
        whileHover={{ 
          y: -12,
          transition: { type: 'spring', stiffness: 300, damping: 25 }
        }}
        style={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <motion.div
            className="mb-6 w-16 h-16 rounded-2xl bg-[#1a1a1a] flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:text-[#1a1a1a] transition-all duration-300"
            whileHover={{ 
              rotate: [0, -5, 5, -5, 0],
              scale: 1.05
            }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-[#1a1a1a] transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed flex-1 mb-6">
            {description}
          </p>

          {/* Link */}
          <motion.div
            className="flex items-center gap-2 text-[#1a1a1a] font-semibold text-sm uppercase tracking-wide mt-auto"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <span>Learn More</span>
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

        {/* Hover border effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-yellow-400/0 group-hover:border-yellow-400/30 transition-colors duration-500 pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}

