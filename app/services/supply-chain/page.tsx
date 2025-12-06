import Link from 'next/link';

export default function SupplyChain() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-[#1a1a1a] overflow-hidden py-12 sm:py-0">
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
                Supply Chain Outsourcing
              </h1>
            </div>
            <div className="space-y-3 max-w-3xl mx-auto animate-fade-in-delay">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
                Transform Your Operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-12">
            <Link href="/services" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium mb-6 inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              Complete fleet management and Just-In-Time (JIT) solutions. Transform your supply chain operations by transferring assets off your balance sheet while maintaining operational excellence and reducing risk.
            </p>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Fleet Management</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We take over your drivers and vehicles, reducing your liability and HR burden. Complete operational control with dedicated account management, allowing you to focus on your core business.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Driver and vehicle management</li>
                <li>Reduced HR and liability burden</li>
                <li>Dedicated account management</li>
                <li>Operational oversight and reporting</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Just-In-Time (JIT) Delivery</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Inventory optimization through precise JIT delivery into mines and production facilities. Reduce warehousing costs and improve cash flow with synchronized delivery schedules.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Production line synchronization</li>
                <li>Inventory cost reduction</li>
                <li>Working capital optimization</li>
                <li>Precision timing and coordination</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Process Optimization</h2>
              <p className="text-gray-700 leading-relaxed">
                Strategic focus on cost reduction and risk transfer. Transform your logistics from a capital-intensive operation to a streamlined service, converting fixed costs into variable costs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Value Proposition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Asset Off-Balance Sheet</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Reduced HR & Liability Burden</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Inventory Cost Reduction</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Operational Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let&apos;s discuss how we can transform your operations.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-10 py-4 text-lg font-semibold text-[#1a1a1a] shadow-lg transition-all hover:bg-yellow-300 hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}

