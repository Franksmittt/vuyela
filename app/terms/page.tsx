export default function Terms() {
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
                Terms of Service
              </h1>
            </div>
            <div className="space-y-3 max-w-3xl mx-auto animate-fade-in-delay">
              <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <p className="text-sm text-gray-500 mb-4">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using the services of Vuyela Logistics (Pty) Ltd, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">2. Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vuyela Logistics provides logistics and transportation services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Road freight and transportation</li>
                  <li>Global trade services and customs clearing</li>
                  <li>Supply chain outsourcing</li>
                  <li>Project cargo and abnormal load handling</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">3. Service Agreements</h2>
                <p className="text-gray-700 leading-relaxed">
                  All services are subject to separate service agreements that will be provided upon engagement. These terms supplement, but do not replace, the specific terms outlined in individual service contracts.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">4. Pricing and Payment</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pricing for services will be provided in writing through quotes or service agreements. Payment terms are as specified in individual contracts, typically:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Payment is due within the terms specified in your service agreement</li>
                  <li>Late payments may incur interest charges</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">5. Liability and Insurance</h2>
                <p className="text-gray-700 leading-relaxed">
                  Vuyela Logistics maintains comprehensive Goods in Transit (GIT) insurance. Our liability is limited as per the terms of individual service agreements and applicable South African law. Specific insurance coverage details are available upon request.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">6. Compliance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All services are provided in compliance with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>South African transport regulations</li>
                  <li>NBCRFLI (National Bargaining Council for the Road Freight and Logistics Industry) requirements</li>
                  <li>B-BBEE compliance standards</li>
                  <li>Transnet vendor requirements</li>
                  <li>All applicable customs and trade regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  To the maximum extent permitted by law, Vuyela Logistics shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">8. Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  Either party may terminate service agreements in accordance with the terms specified in individual contracts. Termination does not affect any rights or obligations that have accrued prior to termination.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">9. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes shall be subject to the exclusive jurisdiction of South African courts.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">10. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:legal@vuyelalogistics.co.za" className="text-yellow-400 hover:text-yellow-300">legal@vuyelalogistics.co.za</a></p>
                  <p className="text-gray-700 mb-2"><strong>Company:</strong> Vuyela Logistics (Pty) Ltd</p>
                  <p className="text-gray-700"><strong>Registration:</strong> K2019/377070/07</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

