import {
  defineCollection,
  z,
  type CollectionEntry,
  getCollection,
} from "astro:content";

const faqs = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine((img) => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

export type FaqEntry = CollectionEntry<"faqs">;
export type EntryFilter<TEntry> = (entry: TEntry) => boolean;

export function getFaqs(filter?: EntryFilter<FaqEntry>) {
  return getCollection("faqs", filter);
}

export const collections = { faqs };
