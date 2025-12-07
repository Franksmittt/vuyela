/**
 * Sanity Type Definitions
 * These types match the schema definitions in schemas/
 * Used for TypeScript type safety when working with Sanity data
 */

import type { SanityImageSource } from '@sanity/image-url';

/**
 * Hero Block Type
 */
export interface HeroBlock {
  _type: 'hero';
  _key?: string;
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
}

/**
 * Feature Item Type
 */
export interface FeatureItem {
  _key?: string;
  title: string;
  description?: string;
  icon?: string;
  image?: {
    asset: SanityImageSource;
    alt?: string;
  };
}

/**
 * Features Block Type
 */
export interface FeaturesBlock {
  _type: 'features';
  _key?: string;
  title: string;
  description?: string;
  items: FeatureItem[];
}

/**
 * FAQ Item Type
 */
export interface FAQItem {
  _key?: string;
  question: string;
  answer: string;
}

/**
 * FAQ Block Type
 */
export interface FAQBlock {
  _type: 'faq';
  _key?: string;
  title: string;
  description?: string;
  items: FAQItem[];
}

/**
 * Page Builder Block Union Type
 * This is the polymorphic type that accepts any block type
 */
export type PageBuilderBlock = HeroBlock | FeaturesBlock | FAQBlock;

/**
 * Page Document Type (example)
 * In production, this would be part of your page schema
 */
export interface PageDocument {
  _id: string;
  _type: 'page';
  title: string;
  slug: {
    current: string;
  };
  pageBuilder?: PageBuilderBlock[];
  seo?: {
    title?: string;
    description?: string;
    image?: {
      asset: SanityImageSource;
    };
  };
}

