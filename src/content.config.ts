import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localized = z.object({ fa: z.string(), de: z.string(), en: z.string() });

// One file per post. Each post holds all three languages side by side.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    kind: z.enum(['event', 'news']),
    date: z.coerce.date(),
    title: localized,
    summary: localized,
    color: z.enum(['pomegranate', 'firuzeh', 'saffron']).default('pomegranate'),
    // Optional photo in /public, e.g. /images/yalda.jpg. Falls back to an illustration.
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { posts };
