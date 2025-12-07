import { defineType, defineField } from 'sanity';
import { heroBlock } from './objects/hero';
import { featuresBlock } from './objects/features';
import { faqBlock } from './objects/faq';

/**
 * Page Builder Schema
 * Polymorphic array that accepts different block types
 * Supports drag-and-drop page composition in Sanity Studio
 */
export const pageBuilder = defineType({
  name: 'pageBuilder',
  title: 'Page Builder',
  type: 'array',
  of: [
    {
      type: heroBlock.name,
    },
    {
      type: featuresBlock.name,
    },
    {
      type: faqBlock.name,
    },
  ],
  description: 'Build your page by adding and arranging content blocks',
});

// Export all block types for use in Sanity Studio configuration
export const pageBuilderBlocks = [heroBlock, featuresBlock, faqBlock];

