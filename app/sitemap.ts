/**
 * Dynamic Sitemap Generator
 * 
 * Generates sitemaps using Next.js generateSitemaps function.
 * Supports sitemap sharding for large sites (chunks of 25,000 URLs).
 * 
 * This implementation:
 * - Fetches pages from Sanity CMS (if available)
 * - Generates static routes
 * - Creates sitemap index for multiple sitemaps
 * - Prevents timeouts by sharding large sitemaps
 */

import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vuyelalogistics.co.za';

/**
 * Maximum URLs per sitemap (Google's limit is 50,000, but 25,000 is safer)
 */
const MAX_URLS_PER_SITEMAP = 25000;

/**
 * Static routes that should always be included
 */
const staticRoutes: Array<{ url: string; changefreq: string; priority: number; lastModified?: Date }> = [
  { url: '', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/services/road-freight', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/supply-chain', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/project-cargo', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/global-trade', changefreq: 'monthly', priority: 0.8 },
  { url: '/vuyela-logistics', changefreq: 'monthly', priority: 0.9 },
  { url: '/vuyela-bulk', changefreq: 'monthly', priority: 0.9 },
  { url: '/vuyela-freight', changefreq: 'monthly', priority: 0.9 },
  { url: '/vuyela-refuel', changefreq: 'monthly', priority: 0.9 },
  { url: '/industries', changefreq: 'monthly', priority: 0.7 },
  { url: '/network', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/quote', changefreq: 'monthly', priority: 0.8 },
  { url: '/compliance', changefreq: 'monthly', priority: 0.6 },
  { url: '/privacy', changefreq: 'yearly', priority: 0.3 },
  { url: '/terms', changefreq: 'yearly', priority: 0.3 },
];

/**
 * Fetch dynamic pages from Sanity CMS
 * 
 * This queries Sanity for all published pages and returns them
 * in a format suitable for the sitemap.
 */
async function fetchSanityPages(): Promise<
  Array<{ url: string; changefreq: string; priority: number; lastModified?: Date }>
> {
  // Check if Sanity is configured
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    // Return empty array if Sanity is not configured
    return [];
  }

  try {
    // Dynamically import Sanity client only if configured
    const { client } = await import('@/lib/sanity.client');
    
    // Check if client is available
    if (!client) {
      return [];
    }
    
    // Query Sanity for all published pages
    // Adjust this query based on your Sanity schema
    const query = `*[_type == "page" && defined(slug.current)] {
      "slug": slug.current,
      _updatedAt
    }`;

    const pages = await client.fetch<Array<{ slug: string; _updatedAt: string }>>(query, {}, {
      next: {
        revalidate: 3600, // Revalidate every hour
      },
    });

    return pages.map((page) => ({
      url: `/${page.slug}`,
      changefreq: 'monthly' as const,
      priority: 0.7,
      lastModified: page._updatedAt ? new Date(page._updatedAt) : undefined,
    }));
  } catch (error) {
    console.error('Error fetching Sanity pages:', error);
    // Return empty array if Sanity is not configured or fails
    return [];
  }
}

/**
 * Generate sitemap index
 * 
 * Returns an array of sitemap IDs. Each ID will be used to generate
 * a separate sitemap file. This allows sharding for large sites.
 */
export async function generateSitemaps(): Promise<Array<{ id: number }>> {
  // Fetch all routes (static + dynamic)
  const staticRoutesList = staticRoutes;
  const dynamicRoutes = await fetchSanityPages();
  const allRoutes = [...staticRoutesList, ...dynamicRoutes];

  // Calculate number of sitemaps needed
  const numberOfSitemaps = Math.ceil(allRoutes.length / MAX_URLS_PER_SITEMAP);

  // If we have fewer routes than the limit, return a single sitemap
  if (numberOfSitemaps <= 1) {
    return [{ id: 0 }];
  }

  // Return array of sitemap IDs
  return Array.from({ length: numberOfSitemaps }, (_, i) => ({ id: i }));
}

/**
 * Generate sitemap entries for a specific sitemap ID
 * 
 * @param id - Sitemap ID (from generateSitemaps)
 * @param ctx - Context with sitemap index (optional)
 */
export default async function sitemap(
  id: number,
  ctx?: { sitemaps?: Array<{ id: number }> }
): Promise<MetadataRoute.Sitemap> {
  // Fetch all routes
  const staticRoutesList = staticRoutes;
  const dynamicRoutes = await fetchSanityPages();
  const allRoutes = [...staticRoutesList, ...dynamicRoutes];

  // Get sitemaps from context or generate them
  const sitemaps = ctx?.sitemaps || await generateSitemaps();

  // If we only have one sitemap, return all routes
  if (sitemaps.length === 1) {
    return allRoutes.map((route) => ({
      url: `${siteUrl}${route.url}`,
      lastModified: route.lastModified || new Date(),
      changeFrequency: route.changefreq as 'daily' | 'weekly' | 'monthly' | 'yearly',
      priority: route.priority,
    }));
  }

  // Calculate slice for this sitemap
  const startIndex = id * MAX_URLS_PER_SITEMAP;
  const endIndex = Math.min(startIndex + MAX_URLS_PER_SITEMAP, allRoutes.length);
  const routesForThisSitemap = allRoutes.slice(startIndex, endIndex);

  return routesForThisSitemap.map((route) => ({
    url: `${siteUrl}${route.url}`,
    lastModified: route.lastModified || new Date(),
    changeFrequency: route.changefreq as 'daily' | 'weekly' | 'monthly' | 'yearly',
    priority: route.priority,
  }));
}
