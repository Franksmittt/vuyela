export default function Industries() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-[#1a1a1a] overflow-hidden py-12 sm:py-0">
        {/* Subtle background pattern/texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 py-8">
            <div className="space-y-3 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-serif font-bold text-white leading-tight tracking-tight">
                <span className="block">Industries We Serve</span>
                <span className="block text-yellow-400">Specialized Solutions</span>
              </h1>
            </div>
            <div className="space-y-3 max-w-3xl mx-auto animate-fade-in-delay">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
                Tailored Logistics for Every Sector
              </p>
              <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                From mining operations to retail distribution, we deliver specialized logistics solutions designed for your industry&apos;s unique challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mining & Resources Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#1a1a1a] mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Mining & Resources
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mb-8"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Pit-to-port solutions for bulk commodities. Specialized expertise in thermal coal, coking coal, chrome, and manganese transport. Proven track record in high-volume mining logistics with 98.5% On-Time-In-Full delivery rates.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Bulk Commodity Transport</h3>
                    <p className="text-gray-600 leading-relaxed">High-volume mineral transport using 34-ton side tippers and interlink combinations. Specialized handling for thermal coal, coking coal, chrome, manganese, and iron ore.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Stockpile Management</h3>
                    <p className="text-gray-600 leading-relaxed">Integrated stockpile operations with accurate tracking and reporting. Weighbridge compliance and dust suppression protocols ensure environmental and operational standards.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Weighbridge Operations</h3>
                  <p className="text-gray-600 leading-relaxed">Precise weight verification and documentation. Full compliance with mining weighbridge requirements and regulatory standards.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Why Mining Companies Choose Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">RtMS Accredited Fleet</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Transnet Vendor Status</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 Control Room Monitoring</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Community Relations Expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FMCG & Retail Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#1a1a1a] mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                FMCG & Retail
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mb-8"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Efficient distribution networks for fast-moving consumer goods. Reliable supply chain solutions that keep retail shelves stocked and customers satisfied.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Distribution Networks</h3>
                    <p className="text-gray-600 leading-relaxed">Nationwide distribution capabilities with strategic depot locations. Optimized routes for maximum efficiency and cost-effectiveness.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Retail Logistics</h3>
                    <p className="text-gray-600 leading-relaxed">Time-sensitive delivery solutions for retail operations. Tautliner and curtain sider fleets for palletized goods and temperature-controlled cargo.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Warehouse Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">Integrated warehouse and distribution services. Cross-docking, inventory management, and fulfillment solutions tailored to your needs.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Fast Turnaround Times</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Temperature-Controlled Options</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-Time Tracking</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Flexible Scheduling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agriculture Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#1a1a1a] mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Agriculture
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mb-8"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Specialized transport for agricultural products. Temperature-controlled and time-sensitive solutions ensuring fresh produce reaches markets in optimal condition.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Produce Transport</h3>
                    <p className="text-gray-600 leading-relaxed">Fresh produce logistics with temperature-controlled vehicles. Time-sensitive delivery to maintain product quality and reduce spoilage.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Cold Chain Logistics</h3>
                    <p className="text-gray-600 leading-relaxed">Maintained temperature control throughout the supply chain. Specialized equipment for perishable goods requiring specific temperature ranges.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Grain & Commodities</h3>
                  <p className="text-gray-600 leading-relaxed">Bulk grain transport and commodity logistics. Specialized handling for agricultural bulk commodities with proper storage and handling protocols.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Agricultural Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Temperature Monitoring</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Harvest Season Support</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Market Access Routes</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Quality Preservation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction & Infrastructure Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#1a1a1a] mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Construction & Infrastructure
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mb-8"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Heavy equipment and material transport for construction projects. Specialized solutions for infrastructure development requiring precision, planning, and regulatory compliance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Heavy Equipment Transport</h3>
                    <p className="text-gray-600 leading-relaxed">Specialized handling of construction machinery, excavators, and heavy equipment. Abnormal load permits and escort coordination for oversized cargo.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Building Materials</h3>
                    <p className="text-gray-600 leading-relaxed">Reliable transport of construction materials including cement, steel, aggregates, and prefabricated components. Just-in-time delivery to construction sites.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Project Logistics</h3>
                  <p className="text-gray-600 leading-relaxed">End-to-end project coordination from planning to delivery. Route surveys, permit management, and installation support for complex infrastructure projects.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Construction Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Abnormal Load Expertise</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Site Access Planning</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">JIT Material Delivery</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Multi-Site Coordination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#1a1a1a] mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Manufacturing
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mb-8"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Just-in-time delivery solutions for manufacturing operations. Streamlined supply chain management that reduces inventory costs and improves production efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">JIT Delivery</h3>
                    <p className="text-gray-600 leading-relaxed">Precision timing for production line requirements. Inventory optimization through synchronized delivery schedules that match your manufacturing cycles.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Raw Materials Transport</h3>
                    <p className="text-gray-600 leading-relaxed">Reliable supply of raw materials to production facilities. Bulk and break-bulk solutions tailored to your material handling requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Component Logistics</h3>
                  <p className="text-gray-600 leading-relaxed">Specialized handling of manufacturing components and sub-assemblies. Secure transport with proper packaging and handling protocols.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Manufacturing Advantages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Inventory Cost Reduction</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Production Line Synchronization</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Supply Chain Visibility</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Dedicated Account Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#1a1a1a] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Ready to Optimize Your Industry Logistics?
              </h2>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Let&apos;s discuss how our specialized solutions can transform your supply chain operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <a
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-10 py-4 text-lg font-semibold text-[#1a1a1a] shadow-lg transition-all hover:bg-yellow-300 hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                >
                  Get a Quote
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#1a1a1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

