import Link from 'next/link';

export default function RoadFreight() {
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
                Road Freight Solutions
              </h1>
            </div>
            <div className="space-y-3 max-w-3xl mx-auto animate-fade-in-delay">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
                Reliable Transportation Across South Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
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
              Our road freight services form the foundation of Vuyela Logistics. With specialized equipment and proven expertise, we deliver reliable transportation solutions for bulk commodities and break-bulk cargo across South Africa and beyond.
            </p>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Dry Bulk Logistics</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Specialized transport for high-volume mineral commodities. Our fleet of 34-ton side tippers and interlink combinations are purpose-built for mining operations, handling thermal coal, coking coal, chrome, and manganese with precision and reliability.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>34-ton side tippers for bulk commodities</li>
                <li>Interlink combinations for high-volume transport</li>
                <li>Stockpile management and weighbridge operations</li>
                <li>Dust suppression protocols</li>
                <li>RtMS accredited fleet</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Break-Bulk Transport</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Palletized goods and industrial equipment transport using tautliners (curtain siders) and flat decks. Ideal for FMCG, retail distribution, and containerized cargo.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Tautliners (curtain siders) for palletized goods</li>
                <li>Flat decks for containerized or abnormal loads</li>
                <li>Temperature-controlled options available</li>
                <li>Flexible scheduling and routing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Cross-Border Operations</h2>
              <p className="text-gray-700 leading-relaxed">
                Expert navigation of SADC trade routes with full compliance and documentation support. Seamless cross-border movements through key corridors including N1 (Zimbabwe/Zambia), N4 (Mozambique), and N3 (Durban Export routes).
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Live Satellite Tracking</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 Control Room Monitoring</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">RtMS Accredited Fleet</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Weighbridge Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Request a quote for your road freight needs today.
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

