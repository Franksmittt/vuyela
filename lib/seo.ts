import type { Metadata } from 'next';

/**
 * SEO Helper Functions
 * 
 * Standardizes metadata generation across the application.
 * Ensures consistent SEO metadata structure and Open Graph tags.
 */

export interface SEOConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
}

const defaultImage = '/images/og-default.png';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vuyelalogistics.co.za';
const siteName = 'Vuyela Logistics';

/**
 * Generates standardized metadata for a page
 * 
 * @param config - SEO configuration object
 * @returns Next.js Metadata object
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    image = defaultImage,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    keywords,
  } = config;

  // Construct full image URL
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl;

  const metadata: Metadata = {
    title: {
      template: '%s | Vuyela Logistics',
      default: title,
    },
    description,
    keywords: keywords?.join(', '),
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      type,
      siteName,
      title,
      description,
      url: pageUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: pageUrl,
    },
  };

  return metadata;
}

/**
 * Generates page title with template
 * 
 * @param title - Page title
 * @returns Formatted title with template
 */
export function generateTitle(title: string): string {
  return `${title} | Vuyela Logistics`;
}

/**
 * Generates canonical URL
 * 
 * @param path - Page path (e.g., '/about')
 * @returns Full canonical URL
 */
export function generateCanonical(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${cleanPath}`;
}

/**
 * Default metadata for the site
 */
export const defaultMetadata: Metadata = {
  title: {
    template: '%s | Vuyela Logistics',
    default: 'Vuyela Logistics - Locally Invested, Globally Connected',
  },
  description: 'Vuyela Group provides comprehensive logistics solutions through Vuyela Logistics, Vuyela Bulk, Vuyela Freight, and Vuyela Refuel. Professional supply chain management across South Africa and beyond.',
  metadataBase: new URL(siteUrl),
  keywords: [
    'logistics',
    'supply chain',
    'freight',
    'transport',
    'South Africa',
    'Vuyela Logistics',
    'Vuyela Bulk',
    'Vuyela Freight',
    'Vuyela Refuel',
  ],
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_ZA',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vuyelalogistics',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

