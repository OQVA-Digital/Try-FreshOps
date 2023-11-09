import { z, defineCollection } from 'astro:content';

const testimonials = defineCollection({
	schema: z.object({
		quoteText: z.string(),
		author: z.string(),
		avatar: z.string(),
	}),
});

export const collections = { 
    'testimonials': testimonials,
};