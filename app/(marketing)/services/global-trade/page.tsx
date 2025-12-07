import Link from 'next/link';
import Image from 'next/image';

export default function GlobalTrade() {
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
                Global Trade Services
              </h1>
            </div>
            <div className="space-y-3 max-w-3xl mx-auto animate-fade-in-delay">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
                Seamless Cross-Border Logistics
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
              Expert import/export management and customs clearing services. Specialized expertise in the Maputo Corridor, offering a strategic alternative to congested ports and ensuring seamless cross-border trade.
            </p>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Customs Clearing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Expert handling of HS Code classification, VAT deferment, and bonded cargo. Full presence at key nodes including Durban Harbour, Cape Town, and the Maputo Corridor.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>HS Code classification and documentation</li>
                <li>VAT deferment and customs duty management</li>
                <li>Bonded cargo handling</li>
                <li>Multi-port access and coordination</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Maputo Corridor Expertise</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Strategic alternative to Durban port congestion. Our proven track record in efficient cross-border operations through Mozambique makes us the preferred partner for Maputo Corridor logistics.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                <li>N4 route expertise and optimization</li>
                <li>Komatipoort/Ressano Garcia border crossing</li>
                <li>Mozambique documentation and compliance</li>
                <li>Faster transit times vs. traditional routes</li>
              </ul>
              
              {/* Strategic Planning Image */}
              <div className="relative rounded-xl overflow-hidden border border-gray-200 group mb-8">
                <Image
                  src="/images/planning.png"
                  alt="Vuyela Logistics strategic route planning - Maputo Corridor expertise"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Cross-Border Road Freight</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Specialized expertise in key trade corridors: N1 (Zimbabwe/Zambia), N4 (Mozambique), and N3 (Durban Export routes). Full compliance with SADC trade regulations and documentation requirements.
              </p>
              
              {/* Cross-Border Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="relative rounded-xl overflow-hidden border border-gray-200 group">
                  <Image
                    src="/images/border.png"
                    alt="Vuyela Logistics cross-border operations - SADC trade route expertise"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="relative rounded-xl overflow-hidden border border-gray-200 group">
                  <Image
                    src="/images/border 2.png"
                    alt="Vuyela Logistics border crossing operations - Efficient cross-border logistics"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Trade Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Import/Export Management</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Freight Forwarding</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Documentation & Compliance</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">SADC Trade Network</span>
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
            Need Global Trade Support?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let us handle your import/export logistics.
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

