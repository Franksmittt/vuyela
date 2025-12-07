import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

// Sanity configuration
// Only create client if project ID is configured
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01', // Use current date (YYYY-MM-DD) to target the latest API version
      useCdn: process.env.NODE_ENV === 'production', // Set to false if statically generating pages, using ISR or using the Sanity CDN
      perspective: 'published', // 'published' or 'previewDrafts'
    })
  : null;

// Image URL builder for Sanity images
const builder = client ? imageUrlBuilder(client) : null;

/**
 * Helper function to generate image URLs from Sanity image sources
 * @param source - Sanity image source (from Sanity image field)
 * @returns Image URL string
 */
export function urlFor(source: SanityImageSource) {
  if (!builder) {
    throw new Error('Sanity client is not configured. Please set NEXT_PUBLIC_SANITY_PROJECT_ID environment variable.');
  }
  return builder.image(source);
}

/**
 * Fetch data from Sanity with optional query parameters
 */
export async function sanityFetch<T>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
}): Promise<T> {
  if (!client) {
    throw new Error('Sanity client is not configured. Please set NEXT_PUBLIC_SANITY_PROJECT_ID environment variable.');
  }
  return client.fetch<T>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  });
}

