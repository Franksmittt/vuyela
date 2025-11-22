import Link from 'next/link';

export default function ProjectCargo() {
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
                Project Cargo
              </h1>
            </div>
            <div className="space-y-3 max-w-3xl mx-auto animate-fade-in-delay">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
                Specialized Heavy Transport Solutions
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
              Specialized handling of abnormal loads and oversized cargo. Expert coordination for complex project logistics requiring precision, planning, and regulatory compliance.
            </p>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Abnormal Loads</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Expert handling of oversized and overweight cargo requiring special permits, route planning, and escort coordination. We manage all regulatory requirements and ensure safe transport.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Oversized and overweight cargo handling</li>
                <li>Special permit management</li>
                <li>Route planning and surveys</li>
                <li>Escort coordination</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Specialized Equipment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Transport of heavy machinery, industrial equipment, and project-specific cargo with custom loading and securing solutions. Our team ensures proper handling from origin to destination.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Heavy machinery transport</li>
                <li>Industrial equipment handling</li>
                <li>Custom loading solutions</li>
                <li>Specialized securing protocols</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Project Coordination</h2>
              <p className="text-gray-700 leading-relaxed">
                End-to-end project logistics management, from planning and permits to delivery and installation support. We coordinate all aspects of complex project cargo movements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Project Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Permit Management</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Route Planning & Surveys</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Escort Coordination</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Have a Project Cargo Need?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us for specialized project logistics solutions.
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

