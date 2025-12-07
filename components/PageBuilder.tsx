'use client';

import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';
import type { SanityImageSource } from '@sanity/image-url';

/**
 * Page Builder Block Types
 * These types match the Sanity schema definitions
 */
type HeroBlock = {
  _type: 'hero';
  title: string;
  subtitle?: string;
  image?: {
    asset: SanityImageSource;
    alt?: string;
  };
  cta?: {
    text?: string;
    link?: string;
  };
};

type FeatureItem = {
  title: string;
  description?: string;
  icon?: string;
  image?: {
    asset: SanityImageSource;
    alt?: string;
  };
};

type FeaturesBlock = {
  _type: 'features';
  title: string;
  description?: string;
  items: FeatureItem[];
};

type FAQItem = {
  question: string;
  answer: string;
};

type FAQBlock = {
  _type: 'faq';
  title: string;
  description?: string;
  items: FAQItem[];
};

type PageBuilderBlock = HeroBlock | FeaturesBlock | FAQBlock;

interface PageBuilderProps {
  blocks: PageBuilderBlock[];
}

/**
 * Hero Block Component
 */
function Hero({ block }: { block: HeroBlock }) {
  const imageUrl = block.image?.asset ? urlFor(block.image.asset).width(1920).height(1080).url() : null;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#2a2a2a] overflow-hidden">
      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageUrl}
            alt={block.image?.alt || block.title}
            fill
            className="object-cover opacity-20"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
        </div>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6 py-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
            {block.title}
          </h1>
          {block.subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
              {block.subtitle}
            </p>
          )}
          {block.cta?.text && block.cta?.link && (
            <div className="pt-4">
              <a
                href={block.cta.link}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-10 py-4 text-lg font-semibold text-[#1a1a1a] shadow-lg transition-all hover:bg-yellow-300 hover:shadow-xl hover:scale-105"
              >
                {block.cta.text}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * Features Block Component
 */
function Features({ block }: { block: FeaturesBlock }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            {block.title}
          </h2>
          {block.description && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {block.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {block.items.map((item, index) => {
            const imageUrl = item.image?.asset ? urlFor(item.image.asset).width(400).height(300).url() : null;

            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:border-yellow-400/50"
              >
                {imageUrl ? (
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={item.image?.alt || item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      fetchPriority="low"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : item.icon ? (
                  <div className="w-14 h-14 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                ) : null}

                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-600 leading-relaxed text-base flex-grow">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * FAQ Block Component
 */
function FAQ({ block }: { block: FAQBlock }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            {block.title}
          </h2>
          {block.description && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {block.description}
            </p>
          )}
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {block.items.map((item, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-yellow-400/50"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-serif font-bold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <svg
                  className="w-5 h-5 text-gray-400 group-open:text-yellow-400 transition-transform group-open:rotate-180 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Page Builder Component
 * Polymorphic component that renders different block types based on _type
 */
export default function PageBuilder({ blocks }: PageBuilderProps) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <>
      {blocks.map((block, index) => {
        switch (block._type) {
          case 'hero':
            return <Hero key={index} block={block as HeroBlock} />;
          case 'features':
            return <Features key={index} block={block as FeaturesBlock} />;
          case 'faq':
            return <FAQ key={index} block={block as FAQBlock} />;
          default:
            // TypeScript exhaustiveness check
            const _exhaustive: never = block;
            console.warn(`Unknown block type: ${(_exhaustive as PageBuilderBlock)._type}`);
            return null;
        }
      })}
    </>
  );
}

