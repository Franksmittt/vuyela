import Image from 'next/image';

export default function Compliance() {
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
                Compliance & Safety
              </h1>
            </div>
            <div className="space-y-3 max-w-3xl mx-auto animate-fade-in-delay">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
                Committed to Excellence
              </p>
              <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                Our commitment to compliance, safety, and regulatory excellence ensures your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Certifications */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Verified compliance with industry standards and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* B-BBEE Level 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">B-BBEE Level 1</h3>
              <p className="text-gray-600 text-sm mb-4">Broad-Based Black Economic Empowerment</p>
              <p className="text-gray-500 text-xs">Highest level of B-BBEE certification, demonstrating our commitment to transformation and empowerment.</p>
            </div>

            {/* NBCRFLI Compliant */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">NBCRFLI Compliant</h3>
              <p className="text-gray-600 text-sm mb-4">National Bargaining Council</p>
              <p className="text-gray-500 text-xs">Full compliance with road freight and logistics industry standards and labor regulations.</p>
            </div>

            {/* Transnet Vendor */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Transnet Vendor</h3>
              <p className="text-gray-600 text-sm mb-4">Approved State Entity Supplier</p>
              <p className="text-gray-500 text-xs">Registered vendor with Transnet, approved for state-owned enterprise contracts.</p>
            </div>

            {/* GIT Insurance */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">GIT Insured</h3>
              <p className="text-gray-600 text-sm mb-4">Goods in Transit Insurance</p>
              <p className="text-gray-500 text-xs">Comprehensive insurance coverage for all goods in transit, protecting your cargo throughout the journey.</p>
            </div>

            {/* RtMS Accredited */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">RtMS Accredited</h3>
              <p className="text-gray-600 text-sm mb-4">Road Transport Management System</p>
              <p className="text-gray-500 text-xs mb-4">Accredited fleet management system ensuring load optimization, driver wellness, and vehicle maintenance standards.</p>
              <div className="relative rounded-lg overflow-hidden border border-gray-200 mt-4">
                <Image
                  src="/images/rtmscompliance.png"
                  alt="Vuyela Logistics RtMS compliance certification - Road Transport Management System"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </div>

            {/* Tax Clearance */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Tax Compliant</h3>
              <p className="text-gray-600 text-sm mb-4">SARS Tax Clearance</p>
              <p className="text-gray-500 text-xs">Current tax clearance certificate, ensuring compliance with South African Revenue Service requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Statistics */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Safety Performance
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our commitment to safety is reflected in our performance metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-5xl font-serif font-bold text-yellow-400 mb-2">98.5%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">On-Time-In-Full (OTIF)</div>
              <p className="text-gray-600 text-sm">Consistent delivery performance across all routes and cargo types.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-5xl font-serif font-bold text-yellow-400 mb-2">0</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Lost Time Injuries</div>
              <p className="text-gray-600 text-sm">Zero lost time injury frequency rate (LTIFR) in the past 12 months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLAS VGM Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                SOLAS VGM Compliance
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mx-auto mb-8"></div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-200 mb-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Understanding SOLAS VGM (Verified Gross Mass)</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Since July 1, 2016, the International Maritime Organization (IMO) has enforced SOLAS VGM regulations. This mandates that the weight of every packed export container must be verified before it can be loaded onto a ship. This was introduced to prevent stack collapses and vessel instability caused by overweight containers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">No VGM, No Load</strong>—we ensure you never face that risk.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">How Vuyela Complies</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Method 1 Weighing</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Vuyela employs Method 1 weighing (weighing the packed and sealed container) using our SOLAS-certified weighbridges in Elandsfontein. We generate the VGM certificate on your behalf, ensuring seamless acceptance at the port terminal.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">SOLAS-Certified Weighbridges</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our on-site weighbridges are SOLAS certified, ensuring that every export container leaves our yard with a Verified Gross Mass (VGM). This prevents costly delays at the port and ensures compliance with international maritime safety regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonded Warehouse Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                SARS Bonded Warehouse
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mx-auto mb-8"></div>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 mb-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">What is a Bonded Warehouse?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A customs and excise storage warehouse (Bond Store) is a secured facility where dutiable goods can be stored without the immediate payment of import duties and VAT. Vuyela operates a SARS-registered Bond Facility, offering importers significant strategic advantages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cash Flow Relief</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You can import goods and defer duty payments for up to two years. You only pay the duty when you remove the goods for local consumption.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Re-Export Flexibility</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If you import goods into South Africa destined for re-export to neighboring countries, storing them in our Bond Store means you never pay SA duties, avoiding the complex and lengthy duty drawback process.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Secure Storage</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your bonded cargo is held in a strictly controlled, secure environment under the supervision of our customs experts, with full yard camera coverage and strict access control.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 mt-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Just-in-Time Inventory</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Import bulk stock when exchange rates are favorable, hold it in our bond store, and draw it down only as your customers order it. This strategic approach optimizes cash flow and reduces inventory carrying costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Certificates */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-200 text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Request Certificates</h2>
            <p className="text-gray-600 mb-6">
              Need copies of our compliance certificates? Contact us to request B-BBEE certificates, insurance documentation, tax clearance, or other compliance documents.
            </p>
            <a
              href="mailto:compliance@vuyelalogistics.co.za"
              className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-8 py-3 text-base font-semibold text-[#1a1a1a] shadow-lg transition-all hover:bg-yellow-300 hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              Request Certificates
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

