export default function About() {
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
                <span className="block">Our Story</span>
                <span className="block text-yellow-400">Our Vision</span>
              </h1>
            </div>
            <div className="space-y-3 max-w-3xl mx-auto animate-fade-in-delay">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
                From One Truck to a Trusted Fleet
              </p>
              <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                Built on decades of expertise, driven by integrity, and committed to excellence in every journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                The Journey Begins
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Vuyela Logistics was born from a simple vision: to transform logistics in Africa through unwavering commitment, operational excellence, and genuine partnership. What started as a single truck serving a mining contractor has evolved into a trusted fleet operation, moving essential commodities and powering supply chains across South Africa and beyond.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                While Vuyela Logistics (Pty) Ltd was formally established in 2019, our foundation is built on over 20 years of combined industry expertise. Our founders bring decades of hands-on experience managing cross-border fleets, navigating complex supply chains, and building relationships that stand the test of time.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we move 300+ loads monthly with a 98.5% On-Time-In-Full delivery rate. But numbers only tell part of the story. Our true measure of success lies in the trust we&apos;ve built with clients—from mining giants to local retailers—and our commitment to community resilience, demonstrated during the KZN unrest when we transported 3,000 food parcels to those in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Leadership
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              The visionaries behind Vuyela Logistics, bringing decades of expertise to every decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            {/* Jaco Nagel */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:border-yellow-400/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:bg-yellow-400/10 transition-colors duration-300"></div>
              <div className="relative">
                {/* Photo Placeholder */}
                <div className="w-32 h-32 rounded-full bg-[#1a1a1a] mx-auto mb-6 flex items-center justify-center group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-16 h-16 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 text-center">Jaco Nagel</h3>
                <p className="text-yellow-400 font-semibold text-center mb-6">Managing Director</p>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  With over 20 years of experience managing cross-border fleets across SADC, Jaco brings deep operational expertise to Vuyela Logistics. His hands-on approach to fleet management and client relationships has been instrumental in building the company&apos;s reputation for reliability and excellence.
                </p>
                <div className="text-center">
                  <a
                    href="mailto:jaco@vuyelalogistics.co.za"
                    className="inline-flex items-center text-[#1a1a1a] font-semibold group-hover:text-yellow-400 transition-colors duration-300"
                  >
                    Contact
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Wayne Johnson */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:border-yellow-400/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:bg-yellow-400/10 transition-colors duration-300"></div>
              <div className="relative">
                {/* Photo Placeholder */}
                <div className="w-32 h-32 rounded-full bg-[#1a1a1a] mx-auto mb-6 flex items-center justify-center group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-16 h-16 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 text-center">Wayne Johnson</h3>
                <p className="text-yellow-400 font-semibold text-center mb-6">Executive Director</p>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Wayne specializes in financial structuring for supply chain assets and strategic business development. His expertise in navigating complex logistics operations and building sustainable business models has been crucial in scaling Vuyela from a single truck to a full fleet operation.
                </p>
                <div className="text-center">
                  <a
                    href="mailto:wayne@vuyelalogistics.co.za"
                    className="inline-flex items-center text-[#1a1a1a] font-semibold group-hover:text-yellow-400 transition-colors duration-300"
                  >
                    Contact
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              The principles that guide every decision, every delivery, and every partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Reliability */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:border-yellow-400/30 hover:-translate-y-1">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Reliability</h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  <span className="font-semibold text-[#1a1a1a]">98.5% On-Time-In-Full</span> delivery rate across 300+ monthly loads. Your cargo arrives when promised, every time.
                </p>
                <p className="text-sm text-gray-500">
                  Always be there on time, rain or shine.
                </p>
              </div>
              <div className="absolute bottom-8 left-8 right-8 h-0.5 bg-gray-100 group-hover:bg-yellow-400 transition-colors duration-300"></div>
            </div>

            {/* Integrity */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:border-yellow-400/30 hover:-translate-y-1">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Integrity</h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Full compliance with <span className="font-semibold text-[#1a1a1a]">NBCRFLI, GIT insurance, and Transnet</span> vendor standards. Trust built on transparency and accountability.
                </p>
                <p className="text-sm text-gray-500">
                  Honesty makes things easier.
                </p>
              </div>
              <div className="absolute bottom-8 left-8 right-8 h-0.5 bg-gray-100 group-hover:bg-yellow-400 transition-colors duration-300"></div>
            </div>

            {/* Expertise */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:border-yellow-400/30 hover:-translate-y-1">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white group-hover:text-[#1a1a1a] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Expertise</h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  <span className="font-semibold text-[#1a1a1a]">Over 20 years</span> of combined experience in logistics, from one truck to a full fleet operation. Proven track record of excellence.
                </p>
                <p className="text-sm text-gray-500">
                  Decades of industry knowledge, applied daily.
                </p>
              </div>
              <div className="absolute bottom-8 left-8 right-8 h-0.5 bg-gray-100 group-hover:bg-yellow-400 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#1a1a1a] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Community Impact
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mx-auto mb-8"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-3">Dare to Love Initiative</h3>
                    <p className="text-white/80 leading-relaxed text-lg mb-4">
                      During the KwaZulu-Natal unrest, when communities were in crisis, Vuyela Logistics mobilized immediately. We transported 3,000 food parcels to those in need, operating in challenging conditions to ensure essential supplies reached families across the region.
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      This operation demonstrated not just our fleet capacity and rapid response capability, but our fundamental commitment to being a pillar of community resilience. We don&apos;t just move cargo—we move hope, we move support, and we move forward, together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                Partner With Us
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Experience the difference that decades of expertise, unwavering integrity, and genuine partnership makes.
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
                  className="inline-flex items-center justify-center rounded-md border-2 border-[#1a1a1a] bg-transparent px-10 py-4 text-lg font-semibold text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a]"
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

