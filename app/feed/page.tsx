import Link from 'next/link';

/**
 * Dummy Product Feed Page
 * Demonstrates the intercepting route pattern
 * In production, this would fetch data from Sanity or another CMS
 */
const dummyProducts = [
  {
    id: '1',
    title: 'Road Freight Services',
    description: 'Specialized bulk and break-bulk transportation with side tippers and tautliners.',
    image: '/images/road-freight.png',
    category: 'Logistics',
  },
  {
    id: '2',
    title: 'Global Trade Services',
    description: 'Expert import/export management and clearing services for seamless cross-border trade.',
    image: '/images/global-trade.png',
    category: 'Trade',
  },
  {
    id: '3',
    title: 'Supply Chain Outsourcing',
    description: 'Complete fleet management and Just-In-Time (JIT) solutions.',
    image: '/images/supply-chain.png',
    category: 'Outsourcing',
  },
  {
    id: '4',
    title: 'Project Cargo',
    description: 'Specialized handling of abnormal loads and oversized cargo.',
    image: '/images/project-cargo.png',
    category: 'Specialized',
  },
  {
    id: '5',
    title: 'Bulk Warehousing',
    description: 'Elandsfontein facility with stockpiling, containerization, and bonded warehouse.',
    image: '/images/warehousing.png',
    category: 'Storage',
  },
  {
    id: '6',
    title: 'Energy Services',
    description: 'Premium 50ppm diesel with quality assurance testing and guaranteed purity.',
    image: '/images/refuel.png',
    category: 'Energy',
  },
];

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Click on any service to view details in a modal while maintaining the feed context.
          </p>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyProducts.map((product) => (
            <Link
              key={product.id}
              href={`/feed/${product.id}`}
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-yellow-400/50 hover:-translate-y-1"
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-400/10 text-yellow-700 border border-yellow-400/20">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition-colors duration-300">
                  <svg
                    className="w-8 h-8 text-white group-hover:text-[#1a1a1a] transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-yellow-400 transition-colors duration-300">
                  {product.title}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center text-[#1a1a1a] font-semibold group-hover:text-yellow-400 transition-colors duration-300">
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              This demonstrates the intercepting route pattern. Clicking a service opens it in a modal while keeping the feed visible.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

