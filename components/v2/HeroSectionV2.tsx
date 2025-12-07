'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export function HeroSectionV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Physics-based parallax transforms
  const backgroundY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    { stiffness: 100, damping: 30 }
  );

  const contentY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 150]),
    { stiffness: 100, damping: 30 }
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [1, 0]),
    { stiffness: 100, damping: 30 }
  );

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0.9]),
    { stiffness: 100, damping: 30 }
  );

  const luxuryEase = [0.43, 0.13, 0.23, 0.96] as const; // Premium cubic bezier

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(250, 204, 21, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(250, 204, 21, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(250, 204, 21, 0.05) 0%, transparent 50%)
            `,
            y: backgroundY
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          y: backgroundY
        }}
      />

      {/* Floating particles effect */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400/20 rounded-full blur-sm"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Main content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10"
        style={{ y: contentY, opacity, scale }}
      >
        <div className="max-w-6xl mx-auto text-center space-y-8 py-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: luxuryEase }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(250, 204, 21, 0.5)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-yellow-400 uppercase tracking-wider">
                Premium Logistics Solutions
              </span>
            </motion.div>
          </motion.div>

          {/* Main headline with split animation */}
          <div className="space-y-4">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[0.95] tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {['Locally', 'Invested'].map((word, i) => (
                <motion.span
                  key={word}
                  className="block"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + i * 0.15,
                    ease: luxuryEase,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.95] tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.span
                className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto]"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  backgroundPosition: ['0% center', '200% center'],
                }}
                transition={{ duration: 0.8, delay: 0.75, ease: luxuryEase }}
              >
                Globally Connected
              </motion.span>
            </motion.h2>
          </div>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: luxuryEase }}
          >
            From the heart of Elandsfontein to the ports of the world, Vuyela Group orchestrates precision logistics that power African commerce.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: luxuryEase }}
          >
            <motion.a
              href="/quote"
              className="group relative px-8 py-4 bg-yellow-400 text-[#0a0a0a] font-semibold rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get a Quote
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            </motion.a>

            <motion.a
              href="/contact"
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Contact Us
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.div
              className="flex flex-col items-center gap-2 text-white/40 text-xs uppercase tracking-widest"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span>Scroll</span>
              <motion.div
                className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
                animate={{ height: [32, 24, 32] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

