'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation';

export default function VuyelaFreightPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#2a2a2a] overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 py-8">
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-serif font-bold text-white leading-tight tracking-tight">
                <span className="block">Vuyela Freight</span>
                <span className="block text-yellow-400">Forwarding & Clearing</span>
              </h1>
            </motion.div>
            <motion.div 
              className="space-y-3 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
                Ocean freight management, customs clearing, and global trade facilitation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative mt-8 sm:mt-12 lg:mt-16 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
            {/* Image Placeholder - Replace with actual image: /images/vuyela-freight-hero.jpg */}
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Hero Image Placeholder</p>
                <p className="text-xs mt-1">Recommended: 1920x800px - Port operations or shipping vessels</p>
              </div>
            </div>
            {/* Uncomment when image is ready:
            <Image
              src="/images/vuyela-freight-hero.jpg"
              alt="Vuyela Freight ocean freight operations"
              fill
              className="object-cover object-center"
              priority
              fetchPriority="high"
            />
            */}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                    Global Trade Facilitation
                  </h2>
                  <div className="h-1 w-24 bg-yellow-400 mb-6"></div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Vuyela Freight provides complete ocean freight management and customs clearing services. We specialize in facilitating global trade through strategic partnerships with major shipping lines worldwide, ensuring seamless movement of goods across borders.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our expertise extends to managing customer ocean freight transportation and accommodating various shipment sizes, from single containers to full vessel loads. We handle all documentation, customs clearance, and port coordination to ensure smooth operations.
                  </p>
                </div>
                <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                  {/* Image Placeholder - Replace with actual image: /images/vuyela-freight-global.jpg */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Global Trade Image</p>
                      <p className="text-xs mt-1">Recommended: 800x600px - World map or port operations</p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/vuyela-freight-global.jpg"
                    alt="Global trade facilitation"
                    fill
                    className="object-cover object-center"
                  />
                  */}
                </div>
              </div>
            </ScrollAnimation>

            {/* Key Features Grid */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Ocean Freight</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Strategic partnerships with major shipping lines worldwide. We manage your ocean freight transportation efficiently.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Customs Clearing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Expert customs clearing services with full documentation support and regulatory compliance.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Trade Facilitation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Complete package of freight forwarding services to facilitate smooth global trade operations.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Comprehensive Freight Services
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  End-to-end ocean freight and customs clearing solutions.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <ScrollAnimation>
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Ocean Freight Management</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Complete package of freight forwarding services. Strategic partnerships with major shipping lines worldwide. We manage customer ocean freight transportation and accommodate various shipment sizes, from single containers to full vessel loads.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Strategic shipping line partnerships</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Single container to full vessel loads</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Vessel booking coordination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Port terminal coordination</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="relative w-full h-64 lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-xl">
                  {/* Image Placeholder - Replace with actual image: /images/ocean-freight.jpg */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center text-blue-700">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Ocean Freight Image</p>
                      <p className="text-xs mt-1">Recommended: 800x600px - Shipping vessels or port</p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/ocean-freight.jpg"
                    alt="Ocean freight operations"
                    fill
                    className="object-cover object-center"
                  />
                  */}
                </div>
              </ScrollAnimation>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <ScrollAnimation>
                <div className="relative w-full h-64 lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                  {/* Image Placeholder - Replace with actual image: /images/customs-clearing.jpg */}
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <div className="text-center text-green-700">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Customs Clearing Image</p>
                      <p className="text-xs mt-1">Recommended: 800x600px - Documentation or customs process</p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/customs-clearing.jpg"
                    alt="Customs clearing services"
                    fill
                    className="object-cover object-center"
                  />
                  */}
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg order-1 lg:order-2">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Customs Clearing & Documentation</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Expert customs clearing services with comprehensive documentation support. Our team ensures full regulatory compliance and smooth clearance processes, reducing delays and minimizing complications at borders.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Full documentation support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Regulatory compliance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Maputo Corridor expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Import/Export management</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Maputo Corridor Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Maputo Corridor Expertise
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Specialized expertise in the Maputo Corridor for seamless cross-border trade between South Africa and Mozambique.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <ScrollAnimation>
                <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl">
                  {/* Image Placeholder - Replace with actual image: /images/maputo-corridor.jpg */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-16 h-16 mx-auto mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm font-medium">Maputo Corridor Image</p>
                      <p className="text-xs mt-1 text-white/90">Recommended: 800x500px - Border crossing or route</p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/maputo-corridor.jpg"
                    alt="Maputo Corridor route"
                    fill
                    className="object-cover object-center"
                  />
                  */}
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Cross-Border Specialization</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our deep understanding of the Maputo Corridor regulations, procedures, and route optimization enables efficient cross-border operations. We navigate the complexities of international trade with ease.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Route optimization expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Border clearance efficiency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Regulatory knowledge</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Established relationships</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -mr-48 -mt-48"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Ready to Facilitate Your Global Trade?
                </h2>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                  Partner with Vuyela Freight for expert ocean freight and customs clearing services.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <a
                    href="/quote"
                    className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-10 py-4 text-lg font-semibold text-[#1a1a1a] shadow-lg transition-all hover:bg-yellow-300 hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    Get a Quote
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-white bg-transparent px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#1a1a1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
}

