'use client';

import { motion } from 'framer-motion';

interface TrustBadge {
  title: string;
  subtitle: string;
}

interface TrustMarqueeV2Props {
  badges: TrustBadge[];
}

export function TrustMarqueeV2({ badges }: TrustMarqueeV2Props) {
  const marqueeCopies = Array.from({ length: 3 });

  return (
    <section className="relative bg-[#0a0a0a] border-y border-white/5 overflow-hidden py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-16"
        animate={{
          x: [0, -50],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        }}
      >
        {marqueeCopies.map((_, copyIndex) => (
          <div key={copyIndex} className="flex items-center gap-16 flex-shrink-0">
            {badges.map((badge, idx) => (
              <motion.div
                key={`${badge.title}-${copyIndex}-${idx}`}
                className="flex items-center gap-4 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white/90 uppercase tracking-[0.2em]">
                    {badge.title}
                  </span>
                  <span className="text-xs text-white/50 uppercase tracking-wider">
                    {badge.subtitle}
                  </span>
                </div>
                <div className="w-px h-8 bg-white/10" />
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

