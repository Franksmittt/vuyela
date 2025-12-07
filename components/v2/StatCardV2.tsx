'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatCardV2Props {
  value: string | number;
  label: string;
  icon: React.ReactNode;
  delay?: number;
  animateValue?: boolean;
}

export function StatCardV2({ value, label, icon, delay = 0, animateValue = false }: StatCardV2Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const luxuryEase = [0.43, 0.13, 0.23, 0.96] as const;

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: luxuryEase }}
    >
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/5 hover:border-yellow-400/20 transition-all duration-500 backdrop-blur-sm">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="mb-6 inline-flex p-3 rounded-xl bg-yellow-400/10 border border-yellow-400/20"
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              backgroundColor: 'rgba(250, 204, 21, 0.15)'
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <div className="text-yellow-400">
              {icon}
            </div>
          </motion.div>

          {/* Value */}
          <motion.div
            className="text-5xl md:text-6xl font-serif font-bold text-white mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: delay + 0.2, ease: luxuryEase }}
          >
            {value}
          </motion.div>

          {/* Label */}
          <p className="text-sm text-white/60 uppercase tracking-wider font-medium">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

