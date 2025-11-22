export default function Services() {
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
                <span className="block">Our Services</span>
                <span className="block text-yellow-400">Your Solutions</span>
              </h1>
            </div>
            <div className="space-y-3 max-w-3xl mx-auto animate-fade-in-delay">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
                Comprehensive Logistics Solutions
              </p>
              <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                Tailored supply chain solutions designed to meet your unique operational needs and exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Road Freight Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#1a1a1a] mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Road Freight
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mb-8"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Specialized bulk and break-bulk transportation solutions across South Africa and beyond. Our fleet of side tippers and tautliners ensures reliable delivery of your cargo, whether it&apos;s bulk commodities or palletized goods.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Dry Bulk Logistics</h3>
                    <p className="text-gray-600 leading-relaxed">Specialized transport for high-volume mineral commodities including thermal coal, coking coal, chrome, and manganese. Our 34-ton side tippers and interlink combinations are purpose-built for mining operations.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Break-Bulk Transport</h3>
                    <p className="text-gray-600 leading-relaxed">Palletized goods and industrial equipment transport using tautliners (curtain siders) and flat decks for containerized or abnormal loads.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Cross-Border Operations</h3>
                  <p className="text-gray-600 leading-relaxed">Expert navigation of SADC trade routes with full compliance and documentation support for seamless cross-border movements.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Live Satellite Tracking</span>
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
                  <span className="text-gray-700">RtMS Accredited Fleet</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Dust Suppression Protocols</span>
                </div>
                <div className="flex items-center md:col-span-2">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Weighbridge Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Trade Services Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#1a1a1a] mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Global Trade Services
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mb-8"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Expert import/export management and customs clearing services. Specialized expertise in the Maputo Corridor, offering a strategic alternative to congested ports.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Customs Clearing</h3>
                    <p className="text-gray-600 leading-relaxed">Expert handling of HS Code classification, VAT deferment, and bonded cargo. Full presence at key nodes: Durban Harbour, Cape Town, and Maputo Corridor.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Cross-Border Road Freight</h3>
                    <p className="text-gray-600 leading-relaxed">Specialized expertise in key trade corridors: N1 (Zimbabwe/Zambia), N4 (Mozambique), and N3 (Durban Export routes).</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Maputo Corridor Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">Strategic alternative to Durban port congestion. Proven track record in efficient cross-border operations through Mozambique.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Trade Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Import/Export Management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Freight Forwarding</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Documentation & Compliance</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Multi-Port Access</span>
                </div>
                <div className="flex items-center md:col-span-2">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">SADC Trade Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Outsourcing Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#1a1a1a] mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Supply Chain Outsourcing
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mb-8"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Complete fleet management and Just-In-Time (JIT) solutions. Transform your supply chain operations by transferring assets off your balance sheet while maintaining operational excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Fleet Management</h3>
                    <p className="text-gray-600 leading-relaxed">We take over your drivers and vehicles, reducing your liability and HR burden. Complete operational control with dedicated account management.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Just-In-Time (JIT) Delivery</h3>
                    <p className="text-gray-600 leading-relaxed">Inventory optimization through precise JIT delivery into mines and production facilities. Reduce warehousing costs and improve cash flow.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Process Optimization</h3>
                  <p className="text-gray-600 leading-relaxed">Strategic focus on cost reduction and risk transfer. Transform your logistics from a capital-intensive operation to a streamlined service.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Value Proposition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Asset Off-Balance Sheet</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Reduced HR & Liability Burden</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Dedicated Account Management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Inventory Cost Reduction</span>
                </div>
                <div className="flex items-center md:col-span-2">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Operational Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Cargo Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#1a1a1a] mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Project Cargo
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mb-8"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Specialized handling of abnormal loads and oversized cargo. Expert coordination for complex project logistics requiring precision, planning, and regulatory compliance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Abnormal Loads</h3>
                    <p className="text-gray-600 leading-relaxed">Expert handling of oversized and overweight cargo requiring special permits, route planning, and escort coordination.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Specialized Equipment</h3>
                    <p className="text-gray-600 leading-relaxed">Transport of heavy machinery, industrial equipment, and project-specific cargo with custom loading and securing solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Project Coordination</h3>
                  <p className="text-gray-600 leading-relaxed">End-to-end project logistics management, from planning and permits to delivery and installation support.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Project Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Permit Management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Route Planning & Surveys</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Escort Coordination</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom Loading Solutions</span>
                </div>
                <div className="flex items-center md:col-span-2">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Installation Support</span>
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
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Let&apos;s discuss how our comprehensive logistics solutions can transform your operations.
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

