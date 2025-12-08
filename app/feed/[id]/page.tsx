import { notFound } from 'next/navigation';

/**
 * Direct Route for Product Detail
 * This page is shown when the route is accessed directly (not intercepted)
 * In production, this would fetch data from Sanity or another CMS
 */
const productData: Record<string, {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  features: string[];
}> = {
  '1': {
    id: '1',
    title: 'Road Freight Services',
    description: 'Specialized bulk and break-bulk transportation.',
    fullDescription: 'Our road freight services provide specialized bulk and break-bulk transportation with side tippers and tautliners. We ensure reliable delivery across South Africa and beyond, with 24/7 operations and real-time tracking.',
    category: 'Logistics',
    features: [
      'Bulk Commodities Transport',
      'Side Tippers & Tautliners',
      'Cross-Border Transport',
      '24/7 Operations',
      'Real-Time Tracking',
    ],
  },
  '2': {
    id: '2',
    title: 'Global Trade Services',
    description: 'Expert import/export management.',
    fullDescription: 'Expert import/export management and clearing services. Specialized expertise in the Maputo Corridor for seamless cross-border trade.',
    category: 'Trade',
    features: [
      'Import/Export Management',
      'Customs Clearing',
      'Maputo Corridor Expertise',
      'Documentation Handling',
      'Compliance Assurance',
    ],
  },
  '3': {
    id: '3',
    title: 'Supply Chain Outsourcing',
    description: 'Complete fleet management solutions.',
    fullDescription: 'Complete fleet management and Just-In-Time (JIT) solutions. Optimize your operations with our integrated supply chain expertise.',
    category: 'Outsourcing',
    features: [
      'Fleet Management',
      'Just-In-Time (JIT) Solutions',
      'Process Optimization',
      'Route Planning',
      'Delivery Execution',
    ],
  },
  '4': {
    id: '4',
    title: 'Project Cargo',
    description: 'Specialized handling of abnormal loads.',
    fullDescription: 'Specialized handling of abnormal loads and oversized cargo. Expert coordination for complex project logistics.',
    category: 'Specialized',
    features: [
      'Abnormal Loads',
      'Oversized Cargo',
      'Specialized Equipment',
      'Expert Coordination',
      'Complex Project Logistics',
    ],
  },
  '5': {
    id: '5',
    title: 'Bulk Warehousing',
    description: 'Elandsfontein facility with comprehensive services.',
    fullDescription: 'Elandsfontein facility with stockpiling, containerization, bagging, and bonded warehouse.',
    category: 'Storage',
    features: [
      'Stockpiling',
      'Containerization',
      'Bagging Services',
      'Bonded Warehouse',
      '24/7 Surveillance',
    ],
  },
  '6': {
    id: '6',
    title: 'Energy Services',
    description: 'Premium 50ppm diesel with quality assurance.',
    fullDescription: 'Premium 50ppm diesel with quality assurance testing and guaranteed purity.',
    category: 'Energy',
    features: [
      'Premium 50ppm Diesel',
      'Quality Assurance Testing',
      'Guaranteed Purity',
      'Comprehensive Certification',
      'Reliable Supply',
    ],
  },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // In Next.js 15, params is a Promise
  const { id } = await params;
  const product = productData[id];

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-400/10 text-yellow-700 border border-yellow-400/20 mb-4">
              {product.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <svg
                  className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <a
              href="/quote"
              className="flex-1 inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 text-lg font-semibold text-[#1a1a1a] shadow-lg transition-all hover:bg-yellow-300 hover:shadow-xl"
            >
              Get a Quote
            </a>
            <a
              href="/contact"
              className="flex-1 inline-flex items-center justify-center rounded-xl border-2 border-[#1a1a1a] bg-transparent px-8 py-4 text-lg font-semibold text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

