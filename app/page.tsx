'use client';

import { motion } from 'framer-motion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#1a1a1a] overflow-hidden py-16 sm:py-0">
        {/* Subtle background pattern/texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 py-8">
            {/* Main Headline */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-serif font-bold text-white leading-tight tracking-tight">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Redefining Logistics
                </motion.span>
                <motion.span 
                  className="block text-yellow-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Across Africa
                </motion.span>
              </h1>
            </motion.div>

            {/* Subheadline - Vision Statement */}
            <motion.div 
              className="space-y-3 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
                Locally Invested, Globally Connected
              </p>
              <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                Crafting seamless supply chain solutions with precision, integrity, and unwavering commitment to excellence.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="/quote"
                className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-8 py-3 text-base font-semibold text-[#1a1a1a] shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                whileHover={{ scale: 1.05, backgroundColor: '#facc15' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Begin Your Journey
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Animated Badges Loop */}
      <section className="bg-white border-b border-gray-100 overflow-hidden">
        <div className="py-8">
          {/* Animated Badges - Endless Loop */}
          <div className="relative">
            <div className="flex items-center animate-truck-scroll">
              {/* Badges Container - Set 1 */}
              <div className="flex items-center gap-8 sm:gap-12">
                {/* B-BBEE Badge */}
                <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                  <div className="text-xs font-semibold text-gray-700 uppercase tracking-wider">B-BBEE</div>
                  <div className="text-xs text-gray-500">Level 1</div>
                </div>
                
                {/* Connection Line */}
                <div className="w-8 h-0.5 bg-gray-300"></div>
                
                {/* NBCRFLI Badge */}
                <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                  <div className="text-xs font-semibold text-gray-700 uppercase tracking-wider">NBCRFLI</div>
                  <div className="text-xs text-gray-500">Compliant</div>
                </div>
                
                {/* Connection Line */}
                <div className="w-8 h-0.5 bg-gray-300"></div>
                
                {/* Transnet Badge */}
                <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                  <div className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Transnet</div>
                  <div className="text-xs text-gray-500">Vendor</div>
                </div>
                
                {/* Connection Line */}
                <div className="w-8 h-0.5 bg-gray-300"></div>
                
                {/* GIT Insurance Badge */}
                <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                  <div className="text-xs font-semibold text-gray-700 uppercase tracking-wider">GIT</div>
                  <div className="text-xs text-gray-500">Insured</div>
                </div>
              </div>
              
              {/* Badges Container - Set 2 (Duplicate for seamless loop) */}
              <div className="flex items-center gap-8 sm:gap-12 ml-12">
                {/* Connection Line */}
                <div className="w-8 h-0.5 bg-gray-300"></div>
                
                {/* B-BBEE Badge */}
                <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                  <div className="text-xs font-semibold text-gray-700 uppercase tracking-wider">B-BBEE</div>
                  <div className="text-xs text-gray-500">Level 1</div>
                </div>
                
                {/* Connection Line */}
                <div className="w-8 h-0.5 bg-gray-300"></div>
                
                {/* NBCRFLI Badge */}
                <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                  <div className="text-xs font-semibold text-gray-700 uppercase tracking-wider">NBCRFLI</div>
                  <div className="text-xs text-gray-500">Compliant</div>
                </div>
                
                {/* Connection Line */}
                <div className="w-8 h-0.5 bg-gray-300"></div>
                
                {/* Transnet Badge */}
                <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                  <div className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Transnet</div>
                  <div className="text-xs text-gray-500">Vendor</div>
                </div>
                
                {/* Connection Line */}
                <div className="w-8 h-0.5 bg-gray-300"></div>
                
                {/* GIT Insurance Badge */}
                <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                  <div className="text-xs font-semibold text-gray-700 uppercase tracking-wider">GIT</div>
                  <div className="text-xs text-gray-500">Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-28">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                The Vuyela Difference
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Built on three pillars that define our commitment to excellence and your success.
              </p>
            </div>
          </ScrollAnimation>

          {/* Feature Cards */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Reliability Card */}
            <StaggerItem>
              <motion.div 
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Reliability</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  <span className="font-semibold text-[#1a1a1a]">98.5% On-Time-In-Full</span> delivery rate across 300+ monthly loads. Your cargo arrives when promised, every time.
                </p>
              </div>
                <motion.div 
                  className="absolute bottom-8 left-8 right-8 h-0.5 bg-gray-100"
                  whileHover={{ backgroundColor: '#facc15' }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.div>
            </StaggerItem>

            {/* Integrity Card */}
            <StaggerItem>
              <motion.div 
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Integrity</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Full compliance with <span className="font-semibold text-[#1a1a1a]">NBCRFLI, GIT insurance, and Transnet</span> vendor standards. Trust built on transparency and accountability.
                </p>
              </div>
                <motion.div 
                  className="absolute bottom-8 left-8 right-8 h-0.5 bg-gray-100"
                  whileHover={{ backgroundColor: '#facc15' }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.div>
            </StaggerItem>

            {/* Expertise Card */}
            <StaggerItem>
              <motion.div 
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Expertise</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  <span className="font-semibold text-[#1a1a1a]">Over 20 years</span> of combined experience in logistics, from one truck to a full fleet operation. Proven track record of excellence.
                </p>
              </div>
                <motion.div 
                  className="absolute bottom-8 left-8 right-8 h-0.5 bg-gray-100"
                  whileHover={{ backgroundColor: '#facc15' }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-28">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Comprehensive logistics solutions tailored to your unique supply chain needs.
              </p>
            </div>
          </ScrollAnimation>

          {/* Services Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {/* Road Freight */}
            <StaggerItem>
              <motion.div 
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 overflow-hidden"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:bg-yellow-400/10 transition-colors duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-7 h-7 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Road Freight</h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Specialized bulk and break-bulk transportation with side tippers and tautliners. Reliable delivery across South Africa and beyond.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Bulk Commodities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Side Tippers & Tautliners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Cross-Border Transport</span>
                  </li>
                </ul>
              </div>
              </motion.div>
            </StaggerItem>

            {/* Global Trade Services */}
            <StaggerItem>
              <motion.div 
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 overflow-hidden"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:bg-yellow-400/10 transition-colors duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-7 h-7 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Global Trade Services</h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Expert import/export management and clearing services. Specialized expertise in the Maputo Corridor for seamless cross-border trade.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Import/Export Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Customs Clearing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Maputo Corridor Expertise</span>
                  </li>
                </ul>
              </div>
              </motion.div>
            </StaggerItem>

            {/* Supply Chain Outsourcing */}
            <StaggerItem>
              <motion.div 
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 overflow-hidden"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:bg-yellow-400/10 transition-colors duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-7 h-7 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Supply Chain Outsourcing</h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Complete fleet management and Just-In-Time (JIT) solutions. Optimize your operations with our integrated supply chain expertise.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Fleet Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Just-In-Time (JIT) Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Process Optimization</span>
                  </li>
                </ul>
              </div>
              </motion.div>
            </StaggerItem>

            {/* Project Cargo */}
            <StaggerItem>
              <motion.div 
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 overflow-hidden"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:bg-yellow-400/10 transition-colors duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-7 h-7 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Project Cargo</h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Specialized handling of abnormal loads and oversized cargo. Expert coordination for complex project logistics.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Abnormal Loads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Oversized Cargo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Specialized Equipment</span>
                  </li>
                </ul>
              </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>

          {/* CTA */}
          <ScrollAnimation delay={0.2}>
            <div className="mt-16 text-center">
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-md border-2 border-[#1a1a1a] bg-transparent px-8 py-3 text-base font-semibold text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a]"
            >
              Explore All Services
            </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-28">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Specialized logistics solutions for diverse sectors across South Africa and beyond.
              </p>
            </div>
          </ScrollAnimation>

          {/* Industries Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {/* Mining & Resources - Featured */}
            <StaggerItem className="md:col-span-2 lg:col-span-2">
              <motion.div 
                className="group relative bg-[#1a1a1a] border border-[#1a1a1a] rounded-2xl p-8 lg:p-12 overflow-hidden"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full -mr-32 -mt-32 group-hover:bg-yellow-400/10 transition-colors duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-lg bg-yellow-400 flex items-center justify-center mb-6 group-hover:bg-yellow-300 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Mining & Resources</h3>
                <p className="text-white/80 leading-relaxed text-lg mb-6">
                  Pit-to-port solutions for bulk commodities. Specialized expertise in thermal coal, coking coal, chrome, and manganese transport. Proven track record in high-volume mining logistics.
                </p>
                <ul className="space-y-3 text-base text-white/70 mb-8">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">•</span>
                    <span>Bulk Commodity Transport</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">•</span>
                    <span>Stockpile Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">•</span>
                    <span>Weighbridge Operations</span>
                  </li>
                </ul>
                <a
                  href="/industries/mining"
                  className="inline-flex items-center text-white font-semibold group-hover:text-yellow-400 transition-colors duration-300"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              </motion.div>
            </StaggerItem>

            {/* FMCG & Retail */}
            <StaggerItem>
              <motion.div 
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 overflow-hidden"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:bg-yellow-400/10 transition-colors duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-7 h-7 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">FMCG & Retail</h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Efficient distribution networks for fast-moving consumer goods. Reliable supply chain solutions for retail operations.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Distribution Networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Retail Logistics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Warehouse Solutions</span>
                  </li>
                </ul>
                <a
                  href="/industries/fmcg"
                  className="inline-flex items-center text-[#1a1a1a] font-semibold group-hover:text-yellow-400 transition-colors duration-300"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              </motion.div>
            </StaggerItem>

            {/* Agriculture */}
            <StaggerItem>
              <motion.div 
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 overflow-hidden"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:bg-yellow-400/10 transition-colors duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-7 h-7 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Agriculture</h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Specialized transport for agricultural products. Temperature-controlled and time-sensitive solutions for fresh produce.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Produce Transport</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Cold Chain Logistics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Grain & Commodities</span>
                  </li>
                </ul>
                <a
                  href="/industries/agriculture"
                  className="inline-flex items-center text-[#1a1a1a] font-semibold group-hover:text-yellow-400 transition-colors duration-300"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              </motion.div>
            </StaggerItem>

            {/* Construction & Infrastructure */}
            <StaggerItem>
              <motion.div 
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 overflow-hidden"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:bg-yellow-400/10 transition-colors duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-7 h-7 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Construction & Infrastructure</h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Heavy equipment and material transport for construction projects. Specialized solutions for infrastructure development.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Heavy Equipment Transport</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Building Materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Project Logistics</span>
                  </li>
                </ul>
                <a
                  href="/industries/construction"
                  className="inline-flex items-center text-[#1a1a1a] font-semibold group-hover:text-yellow-400 transition-colors duration-300"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              </motion.div>
            </StaggerItem>

            {/* Manufacturing */}
            <StaggerItem>
              <motion.div 
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 overflow-hidden"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:bg-yellow-400/10 transition-colors duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-7 h-7 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Manufacturing</h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Just-in-time delivery solutions for manufacturing operations. Streamlined supply chain management for production facilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>JIT Delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Raw Materials Transport</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Component Logistics</span>
                  </li>
                </ul>
                <a
                  href="/industries/manufacturing"
                  className="inline-flex items-center text-[#1a1a1a] font-semibold group-hover:text-yellow-400 transition-colors duration-300"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              </motion.div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#1a1a1a] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Section Header */}
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-28">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Performance by Numbers
              </h2>
              <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                Quantifiable results that demonstrate our commitment to excellence.
              </p>
            </div>
          </ScrollAnimation>

          {/* Stats Grid */}
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Stat 1 - OTIF Rate */}
            <StaggerItem>
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-yellow-400/10 border border-yellow-400/20 group-hover:bg-yellow-400/20 transition-colors duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-400 mb-2">98.5%</div>
              <div className="text-xs sm:text-sm lg:text-base text-white/70 uppercase tracking-wider font-medium">On-Time-In-Full</div>
                <div className="text-xs text-white/50 mt-1">Delivery Rate</div>
              </motion.div>
            </StaggerItem>

            {/* Stat 2 - Monthly Loads */}
            <StaggerItem>
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-yellow-400/10 border border-yellow-400/20 group-hover:bg-yellow-400/20 transition-colors duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-400 mb-2">300+</div>
              <div className="text-xs sm:text-sm lg:text-base text-white/70 uppercase tracking-wider font-medium">Monthly Loads</div>
                <div className="text-xs text-white/50 mt-1">Consistent Volume</div>
              </motion.div>
            </StaggerItem>

            {/* Stat 3 - Years Experience */}
            <StaggerItem>
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-yellow-400/10 border border-yellow-400/20 group-hover:bg-yellow-400/20 transition-colors duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-400 mb-2">20+</div>
              <div className="text-xs sm:text-sm lg:text-base text-white/70 uppercase tracking-wider font-medium">Years Experience</div>
                <div className="text-xs text-white/50 mt-1">Proven Expertise</div>
              </motion.div>
            </StaggerItem>

            {/* Stat 4 - Community Impact */}
            <StaggerItem>
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-yellow-400/10 border border-yellow-400/20 group-hover:bg-yellow-400/20 transition-colors duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-400 mb-2">3,000+</div>
              <div className="text-xs sm:text-sm lg:text-base text-white/70 uppercase tracking-wider font-medium">Food Parcels</div>
                <div className="text-xs text-white/50 mt-1">Community Impact</div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              {/* Content */}
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                  Ready to Transform Your Supply Chain?
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Partner with Vuyela Logistics and experience the difference that precision, integrity, and unwavering commitment makes.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <motion.a
                    href="/quote"
                    className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-10 py-4 text-lg font-semibold text-[#1a1a1a] shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                    whileHover={{ scale: 1.05, backgroundColor: '#facc15' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    Get a Quote
                  </motion.a>
                  <motion.a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md border-2 border-[#1a1a1a] bg-transparent px-10 py-4 text-lg font-semibold text-[#1a1a1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a]"
                    whileHover={{ scale: 1.05, backgroundColor: '#1a1a1a', color: '#ffffff' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    Contact Us
                  </motion.a>
                </div>

                {/* Trust Statement */}
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 max-w-xl mx-auto">
                    Trusted by leading companies across South Africa. Join the network of businesses that rely on Vuyela for their logistics needs.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}

