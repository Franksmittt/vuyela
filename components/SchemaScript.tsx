/**
 * SchemaScript Component
 * 
 * Generates JSON-LD structured data for SEO and Knowledge Graph.
 * Implements a nested graph: Organization > WebSite > WebPage
 * 
 * This component helps search engines understand the site structure
 * and improves rich snippet eligibility in search results.
 */

import type { Organization, WebSite, WebPage, BreadcrumbList } from 'schema-dts';

export interface SchemaScriptProps {
  /**
   * Type of schema to generate
   */
  type: 'organization' | 'website' | 'webpage' | 'breadcrumb';
  /**
   * Dynamic data for the schema
   */
  data?: Partial<Organization | WebSite | WebPage | BreadcrumbList>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vuyelalogistics.co.za';

/**
 * Base Organization schema
 * This represents Vuyela Logistics as a business entity
 */
const baseOrganization: Organization = {
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Vuyela Logistics',
  legalName: 'Vuyela Group',
  url: siteUrl,
    logo: {
      '@type': 'ImageObject' as const,
      url: `${siteUrl}/images/logo.png`,
    },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+27-XXX-XXXX',
    contactType: 'Customer Service',
    areaServed: 'ZA',
    availableLanguage: ['en', 'af', 'zu'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ZA',
    addressLocality: 'South Africa',
  },
  sameAs: [
    // Add social media profiles here
    // 'https://www.linkedin.com/company/vuyela-logistics',
    // 'https://www.facebook.com/vuyelalogistics',
  ],
};

/**
 * Base WebSite schema
 * Represents the website as a whole
 */
const baseWebSite: WebSite = {
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'Vuyela Logistics',
  description: 'Comprehensive logistics solutions across South Africa and beyond',
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
  },
};

/**
 * Generates Organization schema
 */
function generateOrganization(data?: Partial<Organization>): Organization {
  return Object.assign({}, baseOrganization, data || {}) as Organization;
}

/**
 * Generates WebSite schema
 */
function generateWebSite(data?: Partial<WebSite>): WebSite {
  return Object.assign({}, baseWebSite, data || {}) as WebSite;
}

/**
 * Generates WebPage schema
 */
function generateWebPage(
  url: string,
  title: string,
  description?: string,
  data?: Partial<WebPage>
): WebPage {
  return {
    '@type': 'WebPage',
    '@id': `${siteUrl}${url}#webpage`,
    url: `${siteUrl}${url}`,
    name: title,
    description: description || title,
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    about: {
      '@id': `${siteUrl}/#organization`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${siteUrl}/images/og-default.png`,
    },
    ...data,
  };
}

/**
 * Generates BreadcrumbList schema
 */
function generateBreadcrumbList(
  items: Array<{ name: string; url: string }>
): BreadcrumbList {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

/**
 * SchemaScript Component
 * 
 * Renders JSON-LD structured data as a script tag.
 * This helps search engines understand the page structure.
 */
export default function SchemaScript({ type, data }: SchemaScriptProps) {
  let schema: Organization | WebSite | WebPage | BreadcrumbList;

  switch (type) {
    case 'organization':
      schema = generateOrganization(data as Partial<Organization>);
      break;

    case 'website':
      schema = generateWebSite(data as Partial<WebSite>);
      break;

    case 'webpage': {
      const webpageData = data as Partial<WebPage> & {
        url?: string;
        title?: string;
        description?: string;
      };
      schema = generateWebPage(
        webpageData.url || '/',
        webpageData.title || 'Vuyela Logistics',
        webpageData.description,
        webpageData
      );
      break;
    }

    case 'breadcrumb': {
      const breadcrumbData = data as { items?: Array<{ name: string; url: string }> };
      schema = generateBreadcrumbList(
        breadcrumbData.items || [{ name: 'Home', url: '/' }]
      );
      break;
    }

    default:
      schema = baseOrganization;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0),
      }}
    />
  );
}

/**
 * Helper function to generate nested Knowledge Graph
 * Returns Organization, WebSite, and WebPage schemas together
 */
export function generateKnowledgeGraph(config: {
  pageUrl: string;
  pageTitle: string;
  pageDescription?: string;
}) {
  return {
    organization: generateOrganization(),
    website: generateWebSite(),
    webpage: generateWebPage(
      config.pageUrl,
      config.pageTitle,
      config.pageDescription
    ),
  };
}

