'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation';

export default function VuyelaLogisticsPage() {
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
                <span className="block">Vuyela Logistics</span>
                <span className="block text-yellow-400">Road Freight Solutions</span>
              </h1>
            </motion.div>
            <motion.div 
              className="space-y-3 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
                Strategic road haulage with owned fleet, 24/7 operations, and cross-border expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative mt-8 sm:mt-12 lg:mt-16 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/Gemini_Generated_Image_s1tr8ns1tr8ns1tr.png"
              alt="Vuyela Logistics fleet in action"
              fill
              className="object-cover object-center"
              priority
              fetchPriority="high"
            />
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
                    Strategic Road Haulage Excellence
                  </h2>
                  <div className="h-1 w-24 bg-yellow-400 mb-6"></div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Vuyela Logistics specializes in strategic road haulage with our owned fleet, ensuring reliable transportation across South Africa and beyond. Our 24/7 operations and cross-border expertise make us the trusted partner for your critical logistics needs.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Whether you&apos;re moving bulk commodities, break-bulk cargo, or require specialized transport solutions, our experienced team and modern fleet are equipped to handle your requirements with precision and care.
                  </p>
                </div>
                <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/Gemini_Generated_Image_d4iy7od4iy7od4iy.png"
                    alt="Vuyela Logistics owned fleet"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </ScrollAnimation>

            {/* Key Features Grid */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Owned Fleet</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Complete control with our owned fleet of side tippers, tautliners, and specialized transport vehicles.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">24/7 Operations</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Round-the-clock operations ensure your cargo moves when it needs to, with constant monitoring and support.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Cross-Border Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Specialized knowledge of cross-border regulations and routes, particularly the Maputo Corridor.
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
                  Our Road Freight Services
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Comprehensive road transport solutions tailored to your specific cargo requirements.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <ScrollAnimation>
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Bulk Commodities</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Specialized transportation of bulk commodities using 34-ton side tippers and interlink combinations. Perfect for mining operations and bulk material handling.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Chrome, Manganese, Iron Ore, Coal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Side Tippers & Interlinks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Large Volume Handling</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="relative w-full h-64 lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/Gemsdsdini_Generated_Image_9wg6469wg6469wg6.png"
                    alt="Bulk commodities transportation"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </ScrollAnimation>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <ScrollAnimation>
                <div className="relative w-full h-64 lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                  <Image
                    src="/images/Gemini_Generated_Image_9wg6469wg6469wg6.png"
                    alt="Break-bulk transportation"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg order-1 lg:order-2">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Break-Bulk Transport</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Flexible break-bulk transport solutions using tautliners and flat decks. Ideal for general freight and mixed cargo requirements.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Tautliners & Flat Decks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>General Freight</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Flexible Loading Options</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Operational Excellence
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <ScrollAnimation>
                <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/Geasasamini_Generated_Image_xafpv1xafpv1xafp.png"
                    alt="24/7 operations"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/Gemiasdasdni_Generated_Image_xafpv1xafpv1xafp.png"
                    alt="Live control room monitoring"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </ScrollAnimation>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-serif font-bold text-amber-700 mb-2">98.5%</div>
                  <div className="text-gray-600 font-medium">On-Time-In-Full Rate</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-serif font-bold text-amber-700 mb-2">300+</div>
                  <div className="text-gray-600 font-medium">Monthly Loads</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-serif font-bold text-amber-700 mb-2">24/7</div>
                  <div className="text-gray-600 font-medium">Operations Support</div>
                </div>
              </StaggerItem>
            </StaggerContainer>
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
                  Ready to Move Your Cargo?
                </h2>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                  Partner with Vuyela Logistics for reliable, efficient road freight solutions.
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

