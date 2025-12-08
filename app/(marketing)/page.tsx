import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_1.png"
            alt="Vuyela Group"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-black/30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 py-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
              <span className="block">Locally Invested.</span>
              <span className="block text-yellow-400">Globally Connected.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-snug">
              From the heart of Elandsfontein to the ports of the world, Vuyela Group is the custodian of your supply chain.
            </p>
            <div className="pt-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-10 py-4 text-lg font-semibold text-[#1a1a1a] hover:bg-yellow-300 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              The Science of <span className="text-yellow-400">Reliability</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Logistics is more than transportation; it is the science of reliability. At Vuyela Group, we have evolved from a single-truck operation into a premier multi-disciplinary logistics partner.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive logistics solutions tailored to your unique supply chain needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Road Freight</h3>
              <p className="text-gray-600 mb-4">
                Specialized bulk and break-bulk transportation with side tippers and tautliners.
              </p>
              <Link href="/services/road-freight" className="text-[#1a1a1a] font-semibold hover:text-yellow-400">
                Learn More →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Global Trade Services</h3>
              <p className="text-gray-600 mb-4">
                Expert import/export management and clearing services.
              </p>
              <Link href="/services/global-trade" className="text-[#1a1a1a] font-semibold hover:text-yellow-400">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Partner with Vuyela Group and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-10 py-4 text-lg font-semibold text-[#1a1a1a] hover:bg-yellow-300 transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#1a1a1a] px-10 py-4 text-lg font-semibold text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
