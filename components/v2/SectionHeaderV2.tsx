'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionHeaderV2Props {
  title: string;
  subtitle?: string;
  accent?: string;
  delay?: number;
}

export function SectionHeaderV2({ title, subtitle, accent, delay = 0 }: SectionHeaderV2Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const luxuryEase = [0.43, 0.13, 0.23, 0.96] as const;

  return (
    <motion.div
      ref={ref}
      className="text-center max-w-4xl mx-auto mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: luxuryEase }}
    >
      <motion.h2
        className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      >
        {title.split(' ').map((word, i) => {
          const isAccentWord = accent && word.toLowerCase().includes(accent.toLowerCase());
          return (
            <motion.span
              key={i}
              className="inline-block mr-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: delay + 0.3 + i * 0.1 }}
            >
              {isAccentWord ? (
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  {word}
                </span>
              ) : (
                word
              )}
            </motion.span>
          );
        })}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="text-xl text-white/60 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Accent line */}
      <motion.div
        className="h-px w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-8"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.6 }}
      />
    </motion.div>
  );
}

