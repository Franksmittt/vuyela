'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation';

export default function VuyelaBulkPage() {
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
                <span className="block">Vuyela Bulk</span>
                <span className="block text-yellow-400">Warehousing & Handling</span>
              </h1>
            </motion.div>
            <motion.div 
              className="space-y-3 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
                Elandsfontein facility with stockpiling, containerization, bagging, and bonded warehouse.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative mt-8 sm:mt-12 lg:mt-16 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
            {/* Image Placeholder - Replace with actual image: /images/vuyela-bulk-hero.jpg */}
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Hero Image Placeholder</p>
                <p className="text-xs mt-1">Recommended: 1920x800px - Elandsfontein facility aerial view</p>
              </div>
            </div>
            {/* Uncomment when image is ready:
            <Image
              src="/images/vuyela-bulk-hero.jpg"
              alt="Vuyela Bulk Elandsfontein facility"
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
                    State-of-the-Art Bulk Handling Facility
                  </h2>
                  <div className="h-1 w-24 bg-yellow-400 mb-6"></div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Established in 2022 at City Deep, Vuyela Bulk focuses on stockpiling, storage, and packing of 6m and 12m containers for vessel bookings. Our Elandsfontein facility is strategically located to serve major ports and rail networks.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We successfully manage rail and road logistics to Durban to meet vessel stacks, ensuring seamless coordination from warehouse to port. Our comprehensive facility includes stockpiling areas, containerization capabilities, bagging plants, and bonded warehouse facilities.
                  </p>
                </div>
                <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                  {/* Image Placeholder - Replace with actual image: /images/vuyela-bulk-facility.jpg */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Facility Image Placeholder</p>
                      <p className="text-xs mt-1">Recommended: 800x600px - Warehouse and yard operations</p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/vuyela-bulk-facility.jpg"
                    alt="Vuyela Bulk facility operations"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Stockpiling & Storage</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Extensive yard space for bulk commodities including Chrome, Manganese, Iron Ore, and Coal with daily inventory reporting.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Containerization</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Specialized packing of 6m and 12m containers for vessel bookings with container handling equipment.
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
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Bonded Warehouse</h3>
                  <p className="text-gray-600 leading-relaxed">
                    SARS registered bond area for customs clearing and forwarding with cash flow benefits.
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
                  Comprehensive Handling Solutions
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  End-to-end bulk handling services from stockpiling to containerization.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <ScrollAnimation>
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Stockpiling & Management</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Extensive yard space for the stockpiling of bulk commodities including Chrome (Concentrate & ROM), Manganese, Iron Ore, and Coal. We manage stockpiles to prevent contamination and ensure accurate inventory levels via daily reporting.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Daily inventory reporting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Contamination prevention protocols</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Full yard camera coverage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>SOLAS certified weighbridges</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="relative w-full h-64 lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-xl">
                  {/* Image Placeholder - Replace with actual image: /images/stockpiling.jpg */}
                  <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <div className="text-center text-amber-700">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Stockpiling Image</p>
                      <p className="text-xs mt-1">Recommended: 800x600px - Mineral stockpiles</p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/stockpiling.jpg"
                    alt="Bulk commodity stockpiling"
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
                  {/* Image Placeholder - Replace with actual image: /images/containerization.jpg */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center text-blue-700">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Containerization Image</p>
                      <p className="text-xs mt-1">Recommended: 800x600px - Container packing operations</p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/containerization.jpg"
                    alt="Container packing operations"
                    fill
                    className="object-cover object-center"
                  />
                  */}
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg order-1 lg:order-2">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Containerization & Bagging</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Specialists in the containerization of bulk minerals. Our facility includes a bagging plant capable of handling various commodities based on specific customer requirements. Container handling equipment owned by Vuyela Group.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>6m and 12m container packing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Bagging facility for various commodities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Owned container handling equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Vessel booking coordination</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Facility Capabilities
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <ScrollAnimation>
                <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl">
                  {/* Image Placeholder - Replace with actual image: /images/weighbridge.jpg */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-16 h-16 mx-auto mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm font-medium">Weighbridge Image</p>
                      <p className="text-xs mt-1 text-white/90">Recommended: 800x500px - SOLAS certified weighbridge</p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/weighbridge.jpg"
                    alt="SOLAS certified weighbridge"
                    fill
                    className="object-cover object-center"
                  />
                  */}
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl">
                  {/* Image Placeholder - Replace with actual image: /images/yard-cameras.jpg */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-16 h-16 mx-auto mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm font-medium">Security & Monitoring Image</p>
                      <p className="text-xs mt-1 text-white/90">Recommended: 800x500px - Yard camera surveillance</p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/yard-cameras.jpg"
                    alt="Yard camera surveillance system"
                    fill
                    className="object-cover object-center"
                  />
                  */}
                </div>
              </ScrollAnimation>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-serif font-bold text-amber-700 mb-2">24/7</div>
                  <div className="text-gray-600 font-medium">Yard Surveillance</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-serif font-bold text-amber-700 mb-2">SOLAS</div>
                  <div className="text-gray-600 font-medium">Certified Weighbridges</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-serif font-bold text-amber-700 mb-2">6m & 12m</div>
                  <div className="text-gray-600 font-medium">Container Sizes</div>
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
                  Ready for Your Bulk Handling Needs?
                </h2>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                  Partner with Vuyela Bulk for comprehensive warehousing and handling solutions.
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

