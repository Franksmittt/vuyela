'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface PillarCardProps {
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  supportingCopy: string;
  icon: React.ReactNode;
}

export function PillarCard({
  title,
  description,
  metricLabel,
  metricValue,
  supportingCopy,
  icon,
}: PillarCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), {
    stiffness: 120,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 20,
  });

  const glowX = useTransform(pointerX, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(pointerY, [-0.5, 0.5], ['0%', '100%']);
  const glowPosition = useMotionTemplate`${glowX} ${glowY}`;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = cardRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    pointerX.set(x);
    pointerY.set(y);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="precision-card group h-full flex flex-col"
      style={{ rotateX, rotateY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
    >
      {/* Dynamic glow */}
      <motion.div
        aria-hidden="true"
        className="precision-card__glow"
        style={{ backgroundPosition: glowPosition }}
      />

      {/* Grid overlay */}
      <div className="precision-card__grid" aria-hidden="true" />

      <div className="precision-card__content flex-1 flex flex-col">
        <div className="flex items-center justify-between gap-6">
          <div className="precision-card__icon">
            {icon}
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400">
              {metricLabel}
            </p>
            <p className="text-3xl font-serif font-semibold text-[#1a1a1a]">
              {metricValue}
            </p>
          </div>
        </div>

        <div className="space-y-4 flex-1">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Pillar
            </p>
            <h3 className="text-2xl font-serif font-bold text-[#111]">{title}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">{description}</p>
          <p className="text-sm text-gray-500">{supportingCopy}</p>
        </div>

        <motion.div
          className="precision-card__cta mt-auto"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <span>See Operational Proof</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 12h14m0 0-6-6m6 6-6 6"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}


