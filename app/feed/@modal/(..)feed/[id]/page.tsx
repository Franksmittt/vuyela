'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

/**
 * Intercepting Route Modal
 * This component intercepts navigation to /feed/[id] and displays it in a modal
 * The (..)feed syntax means: intercept routes at the same level as feed
 */
const productData: Record<string, {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
  features: string[];
  pricing?: string;
}> = {
  '1': {
    id: '1',
    title: 'Road Freight Services',
    description: 'Specialized bulk and break-bulk transportation.',
    fullDescription: 'Our road freight services provide specialized bulk and break-bulk transportation with side tippers and tautliners. We ensure reliable delivery across South Africa and beyond, with 24/7 operations and real-time tracking.',
    image: '/images/road-freight.png',
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
    fullDescription: 'Expert import/export management and clearing services. Specialized expertise in the Maputo Corridor for seamless cross-border trade. We handle all customs documentation and ensure compliance with international trade regulations.',
    image: '/images/global-trade.png',
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
    fullDescription: 'Complete fleet management and Just-In-Time (JIT) solutions. Optimize your operations with our integrated supply chain expertise. We handle everything from route planning to delivery execution.',
    image: '/images/supply-chain.png',
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
    fullDescription: 'Specialized handling of abnormal loads and oversized cargo. Expert coordination for complex project logistics. We have the equipment and expertise to handle even the most challenging transport requirements.',
    image: '/images/project-cargo.png',
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
    fullDescription: 'Elandsfontein facility with stockpiling, containerization, bagging, and bonded warehouse. Our state-of-the-art facility provides secure storage and handling for bulk commodities with 24/7 surveillance.',
    image: '/images/warehousing.png',
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
    fullDescription: 'Premium 50ppm diesel with quality assurance testing and guaranteed purity. Vuyela Refuel ensures you get the highest quality fuel for your operations, with comprehensive testing and certification.',
    image: '/images/refuel.png',
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

export default function ProductModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const product = productData[id];

  if (!product) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl p-8 max-w-md mx-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The requested product could not be found.</p>
          <button
            onClick={() => router.back()}
            className="w-full px-4 py-2 bg-[#1a1a1a] text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => router.back()}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 lg:p-12">
          {/* Header */}
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

          {/* Features Grid */}
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

          {/* CTA */}
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

