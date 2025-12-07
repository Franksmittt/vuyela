'use client';

import { HeroSectionV2 } from '@/components/v2/HeroSectionV2';
import { TrustMarqueeV2 } from '@/components/v2/TrustMarqueeV2';
import { SectionHeaderV2 } from '@/components/v2/SectionHeaderV2';
import { FeatureCardV2 } from '@/components/v2/FeatureCardV2';
import { PillarCardV2 } from '@/components/v2/PillarCardV2';
import { StatCardV2 } from '@/components/v2/StatCardV2';
import { motion } from 'framer-motion';

export default function HomeV2() {
  const complianceBadges = [
    { title: 'B-BBEE', subtitle: 'Level 1' },
    { title: 'NBCRFLI', subtitle: 'Compliant' },
    { title: 'Transnet', subtitle: 'Vendor' },
    { title: 'GIT', subtitle: 'Insured' },
  ];

  const featurePillars = [
    {
      title: 'Reliability',
      description: 'We understand that delays cost money. Our systems, from 24/7 yard surveillance to real-time tracking, are designed to ensure speed and efficiency. We are aligned with strategic partners to ensure that capacity is always available, regardless of market fluctuations.',
      metricLabel: 'OTIF',
      metricValue: '98.5%',
      supportingCopy: '300+ loads per month orchestrated with live control-room oversight and predictive maintenance windows.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Integrity',
      description: 'We pride ourselves on an honest, hands-on approach. Our directors are involved in the daily operations, ensuring that the promises we make are the promises we keep. Full compliance with NBCRFLI, GIT insurance, and Transnet vendor standards.',
      metricLabel: 'Compliance',
      metricValue: '100%',
      supportingCopy: 'Digitized certification trail, automated expiry alerts, and executive access through the Vuyela Compliance Vault.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Expertise',
      description: '20+ years of mining-born logistics experience. From abnormal loads to JIT manufacturing runs, we architect the entire risk transfer process. Well-trained staff with years of experience in the commodity and mining sector.',
      metricLabel: 'Years',
      metricValue: '20+',
      supportingCopy: 'Dedicated route engineers, Maputo Corridor specialists, and an enterprise network of vetted owner-drivers.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const services = [
    {
      title: 'Road Freight',
      description: 'Specialized bulk and break-bulk transportation with side tippers and tautliners. Reliable delivery across South Africa and beyond.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: 'Global Trade Services',
      description: 'Expert import/export management and clearing services. Specialized expertise in the Maputo Corridor for seamless cross-border trade.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Supply Chain Outsourcing',
      description: 'Complete fleet management and Just-In-Time (JIT) solutions. Optimize your operations with our integrated supply chain expertise.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Project Cargo',
      description: 'Specialized handling of abnormal loads and oversized cargo. Expert coordination for complex project logistics.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
  ];

  const stats = [
    {
      value: '98.5%',
      label: 'On-Time-In-Full',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: '300+',
      label: 'Monthly Loads',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      value: '20+',
      label: 'Years Experience',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: '3,000+',
      label: 'Food Parcels',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <HeroSectionV2 />

      {/* Trust Marquee */}
      <TrustMarqueeV2 badges={complianceBadges} />

      {/* Introduction Section */}
      <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <SectionHeaderV2
            title="The Science of Reliability"
            subtitle="Logistics is more than transportation; it is the science of reliability. At Vuyela Group, we have evolved from a single-truck operation into a premier multi-disciplinary logistics partner specializing in solving complex African supply chain challenges."
            accent="Reliability"
            delay={0.2}
          />

          {/* Four Divisions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: 'Vuyela Logistics',
                description: 'Strategic road haulage with owned fleet, 24/7 operations, and cross-border expertise.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                )
              },
              {
                title: 'Vuyela Bulk',
                description: 'Elandsfontein facility with stockpiling, containerization, bagging, and bonded warehouse.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                )
              },
              {
                title: 'Vuyela Freight',
                description: 'Ocean freight management, customs clearing, and global trade facilitation.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Vuyela Refuel',
                description: 'Premium 50ppm diesel with quality assurance testing and guaranteed purity.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((division, index) => (
              <FeatureCardV2
                key={division.title}
                title={division.title}
                description={division.description}
                icon={division.icon}
                delay={0.4}
                index={index}
              />
            ))}
          </div>

          {/* Value Proposition Card */}
          <motion.div
            className="relative rounded-3xl p-12 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Lasting Solutions, Not Just Deliveries
              </h3>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                We don&apos;t just move cargo; we provide lasting solutions to the South African transport market. Whether you&apos;re moving chrome, manganese, or general freight, you&apos;re partnered with a team that treats your business as their own.
              </p>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: '98.5%', label: 'OTIF' },
                  { value: '300+', label: 'Loads/Month' },
                  { value: '60+', label: 'Staff' },
                ].map((stat, i) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl font-serif font-bold text-yellow-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionHeaderV2
            title="The Vuyela Difference"
            subtitle="Built on three pillars that define our commitment to excellence and your success."
            delay={0.2}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featurePillars.map((pillar, index) => (
              <PillarCardV2 key={pillar.title} {...pillar} delay={0.4 + index * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-[#1a1a1a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionHeaderV2
            title="Our Services"
            subtitle="Comprehensive logistics solutions tailored to your unique supply chain needs."
            delay={0.2}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {services.map((service, index) => (
              <FeatureCardV2
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={0.4}
                index={index}
              />
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-yellow-400/50 hover:bg-yellow-400/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionHeaderV2
            title="Performance by Numbers"
            subtitle="Quantifiable results that demonstrate our commitment to excellence."
            delay={0.2}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <StatCardV2
                key={stat.label}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                delay={0.4 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-12 max-w-2xl mx-auto">
              Partner with Vuyela Group and experience the difference that precision, integrity, and unwavering commitment makes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/quote"
                className="px-10 py-5 bg-yellow-400 text-[#0a0a0a] font-semibold rounded-xl"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(250, 204, 21, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                Get a Quote
              </motion.a>
              <motion.a
                href="/contact"
                className="px-10 py-5 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
