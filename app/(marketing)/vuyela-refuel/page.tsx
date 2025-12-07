'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation';

export default function VuyelaRefuelPage() {
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
                <span className="block">Vuyela Refuel</span>
                <span className="block text-yellow-400">Energy Services</span>
              </h1>
            </motion.div>
            <motion.div 
              className="space-y-3 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
                Premium 50ppm diesel with quality assurance testing and guaranteed purity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative mt-8 sm:mt-12 lg:mt-16 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
            {/* Image Placeholder - Replace with actual image: /images/vuyela-refuel-hero.jpg */}
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Hero Image Placeholder</p>
                <p className="text-xs mt-1">Recommended: 1920x800px - Fuel delivery or storage facility</p>
              </div>
            </div>
            {/* Uncomment when image is ready:
            <Image
              src="/images/vuyela-refuel-hero.jpg"
              alt="Vuyela Refuel energy services"
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
                    Premium Quality Energy Solutions
                  </h2>
                  <div className="h-1 w-24 bg-yellow-400 mb-6"></div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Vuyela Refuel provides premium 50ppm diesel with rigorous quality assurance testing and guaranteed purity. We understand that the quality of fuel directly impacts your operations, which is why we maintain the highest standards in every delivery.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our commitment to quality extends beyond just supplying fuel. We provide comprehensive energy solutions tailored to your specific needs, ensuring your fleet and equipment operate at peak efficiency with clean, reliable fuel.
                  </p>
                </div>
                <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                  {/* Image Placeholder - Replace with actual image: /images/vuyela-refuel-quality.jpg */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Quality Assurance Image</p>
                      <p className="text-xs mt-1">Recommended: 800x600px - Fuel testing or quality check</p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/vuyela-refuel-quality.jpg"
                    alt="Quality assurance testing"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">50ppm Premium Diesel</h3>
                  <p className="text-gray-600 leading-relaxed">
                    High-quality 50 parts per million diesel meeting the strictest environmental and performance standards.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Quality Assurance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive testing and quality checks ensure guaranteed purity and performance in every delivery.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Reliable Supply</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Consistent availability and reliable delivery schedules to keep your operations running smoothly.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Quality Assurance & Testing
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Every batch undergoes rigorous testing to ensure premium quality and guaranteed purity.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <ScrollAnimation>
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Premium 50ppm Diesel</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our premium 50ppm (parts per million) diesel exceeds industry standards, providing clean, efficient fuel that reduces emissions and extends engine life. Perfect for modern diesel engines requiring low-sulfur fuel.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Exceeds industry standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Reduced emissions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Extended engine life</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Optimal performance</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="relative w-full h-64 lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-xl">
                  {/* Image Placeholder - Replace with actual image: /images/fuel-quality-testing.jpg */}
                  <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                    <div className="text-center text-yellow-700">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Quality Testing Image</p>
                      <p className="text-xs mt-1">Recommended: 800x600px - Laboratory testing or quality check</p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/fuel-quality-testing.jpg"
                    alt="Fuel quality assurance testing"
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
                  {/* Image Placeholder - Replace with actual image: /images/fuel-delivery.jpg */}
                  <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <div className="text-center text-orange-700">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Fuel Delivery Image</p>
                      <p className="text-xs mt-1">Recommended: 800x600px - Fuel truck delivery</p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/fuel-delivery.jpg"
                    alt="Fuel delivery service"
                    fill
                    className="object-cover object-center"
                  />
                  */}
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg order-1 lg:order-2">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Guaranteed Purity</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our comprehensive quality assurance program includes batch testing, purity verification, and certification. Every delivery comes with quality documentation, giving you complete confidence in the fuel you receive.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Batch testing protocols</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Purity verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Quality certification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Complete documentation</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Why Choose Vuyela Refuel
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <ScrollAnimation>
                <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl">
                  {/* Image Placeholder - Replace with actual image: /images/fuel-storage.jpg */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-16 h-16 mx-auto mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      <p className="text-sm font-medium">Storage Facility Image</p>
                      <p className="text-xs mt-1 text-white/90">Recommended: 800x500px - Fuel storage tanks</p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/fuel-storage.jpg"
                    alt="Fuel storage facility"
                    fill
                    className="object-cover object-center"
                  />
                  */}
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Operational Benefits</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Clean, high-quality fuel reduces maintenance costs, improves fuel efficiency, and minimizes downtime. Your equipment performs better and lasts longer when powered by premium fuel.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Reduced maintenance costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Improved fuel efficiency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Minimized downtime</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Extended equipment life</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-serif font-bold text-amber-700 mb-2">50ppm</div>
                  <div className="text-gray-600 font-medium">Premium Diesel</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-serif font-bold text-amber-700 mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Quality Tested</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-serif font-bold text-amber-700 mb-2">24/7</div>
                  <div className="text-gray-600 font-medium">Supply Availability</div>
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
                  Ready for Premium Energy Solutions?
                </h2>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                  Partner with Vuyela Refuel for guaranteed quality and reliable fuel supply.
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

