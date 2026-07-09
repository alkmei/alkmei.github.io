import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      image: image().optional(),
      link: z.string().optional(),
      sourceLink: z.string().optional(),
      dateRange: z.string().optional(),
    }),
});

export const collections = {
  projects,
};
