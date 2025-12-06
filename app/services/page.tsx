'use client';

import { motion } from 'framer-motion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#2a2a2a] overflow-hidden py-12 sm:py-0">
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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 mb-6">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-serif font-bold text-white leading-tight tracking-tight">
                <span className="block">Our Services</span>
                <span className="block text-yellow-400">Your Solutions</span>
              </h1>
            </motion.div>
            <motion.div 
              className="space-y-3 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
                Complete Logistics Solutions for Ores & Minerals
              </p>
              <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                Bulk and break-bulk imports and exports, warehousing, containerization, and transport logistics. Services offered are customer specific—each customer treated as if only one.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Comprehensive Service Portfolio
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                From bulk warehousing to ocean freight management, we provide end-to-end logistics solutions tailored to your specific needs.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {[
              {
                title: 'Bulk Warehousing & Handling',
                description: 'Stockpiling, storage, and management of bulk commodities including Chrome (Concentrate & ROM), Manganese, Iron Ore, and Coal. Full yard camera coverage and SOLAS certified weighbridges.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                link: '/services/road-freight'
              },
              {
                title: 'Containerization',
                description: 'Specialized packing of 6m and 12m containers for vessel bookings. Bagging facility for various commodities based on customer requirements. Container handling equipment owned by Vuyela Group.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                link: '/services/road-freight'
              },
              {
                title: 'Transport Logistics',
                description: 'Own fleet operations for road freight. Specialized transport for bulk commodities using 34-ton side tippers and interlink combinations. Break-bulk transport using tautliners and flat decks.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
                link: '/services/road-freight'
              },
              {
                title: 'Ocean Freight Management',
                description: 'Complete package of freight forwarding services. Strategic partnerships with major shipping lines worldwide. We manage customer ocean freight transportation and accommodate various shipment sizes.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                link: '/services/global-trade'
              },
              {
                title: 'Bond Facility (SARS)',
                description: 'Registered Bond Area for customs clearing and forwarding. Access to customs clearing expertise. Benefits include cash flow relief, re-export flexibility, and just-in-time inventory management.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                link: '/compliance'
              },
              {
                title: 'Intermodal Services',
                description: 'Solutions to move containers by rail and road. Daily movement to and from South Africa\'s major ports. Single container or whole train load services with speed and efficiency.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                link: '/services/road-freight'
              }
            ].map((service) => (
              <StaggerItem key={service.title}>
                <motion.div 
                  className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:border-yellow-400/50 overflow-hidden h-full flex flex-col"
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:bg-yellow-400/10 transition-colors duration-300"></div>
                  <div className="relative flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300 text-white group-hover:text-[#1a1a1a]">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    <Link 
                      href={service.link}
                      className="inline-flex items-center text-[#1a1a1a] font-semibold group-hover:text-yellow-400 transition-colors duration-300 mt-auto"
                    >
                      Learn More
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Vuyela Bulk Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 mb-6">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Vuyela Bulk: Warehousing & Handling
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Established in 2022 at City Deep, focusing on stockpiling, storage, and packing of 6m and 12m containers for vessel bookings. Successfully managing rail and road logistics to Durban to meet vessel stacks.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <ScrollAnimation>
                <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg">
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
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Containerization & Bagging</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Specialists in the containerization of bulk minerals. Our facility includes a bagging plant capable of handling various commodities based on specific customer requirements.
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
                      <span>SOLAS certified weighbridges</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation>
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-8 lg:p-12 border border-gray-800 text-white">
                <h3 className="text-3xl font-serif font-bold text-white mb-6">Multi-Modal Solutions</h3>
                <p className="text-lg text-white/90 leading-relaxed mb-8">
                  Vuyela Group offers its customers solutions to move containers by rail and road. We move containers daily to and from South Africa&apos;s major Ports. Vuyela Group can offer customers a service to move a single container or a whole train load of containers with speed and efficiency.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-yellow-400 mb-2">Rail</div>
                    <p className="text-sm text-white/70">Container movement by rail</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-yellow-400 mb-2">Road</div>
                    <p className="text-sm text-white/70">Road haul to Durban port</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-yellow-400 mb-2">Port</div>
                    <p className="text-sm text-white/70">Vessel stack coordination</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Lead Logistics Provider Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 mb-6">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Lead Logistics Provider (LLP)
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  A &quot;one-stop&quot; total solution. Vuyela negotiates rates and secures necessary capacity with various preferred service providers (warehousing, rail, road, and sea) and offers a comprehensive solution at a single consolidated rate.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <ScrollAnimation>
                <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Complete Service Offering</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The customer has no contractual relationship with primary service providers. Vuyela offers a single point of contact and assumes full responsibility for efficient planning and management of the total logistics function.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Consolidated rates across all services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Single point of contact</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Full accountability</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Value to Your Business</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This aids the customer in addressing key performance areas in their own businesses and ensures that logistics costs are consolidated for ease of management. Total peace of mind knowing Vuyela Group is delivering on your behalf.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Simplified management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Cost consolidation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>End-to-end control</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Rail Operations Management Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 mb-6">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Rail Operations Management
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Under this model, the customer maintains their own contractual relationship and account with primary service providers. Vuyela Group is contracted to perform a management and monitoring role, often dealing directly with service providers on the customer&apos;s behalf.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="bg-white rounded-3xl p-8 lg:p-12 border-2 border-gray-200 shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Daily Monitoring & Reporting</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Vuyela Group has a sound relationship with Transnet and the road freight industry. Using our expertise and relationship contacts, every container and rail wagon is strictly monitored daily and daily reporting is made to the customer. Continuous monitoring is done until the entire shipment has arrived at the destination or stacked, while ensuring that the highest levels of services are met.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Daily Container Monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Rail Wagon Tracking</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Daily Customer Reporting</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Continuous Monitoring Until Delivery</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Intermodal Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 mb-6">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Intermodal Services
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Vuyela Group offers its customers solutions to move containers by rail and road. We move containers daily to and from South Africa&apos;s major Ports.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollAnimation>
                <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Import Containers</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The management of containers that enter through South African Ports to either a local or over border (SADC) destination.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Local distribution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>SADC cross-border delivery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Customs clearing support</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Export Containers</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The management of containers leaving through South African Ports, from either local or over border (SADC) destinations.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Vessel booking coordination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Port terminal stacking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">•</span>
                      <span>Documentation & compliance</span>
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
                  Ready to Optimize Your Supply Chain?
                </h2>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                  Services offered are customer specific—each customer treated as if only one. Let&apos;s discuss how our comprehensive logistics solutions can transform your operations.
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
