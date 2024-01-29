import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { rehypeGithubAlerts } from "rehype-github-alerts";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  devToolbar: {
    enabled: false,
  },
  markdown: {
    shikiConfig: {
      theme: "monokai",
      wrap: true,
    },
    smartypants: false,
    rehypePlugins: [rehypeGithubAlerts, rehypeSlug, rehypeAutolinkHeadings],
  },
  integrations: [tailwind(), icon(), sitemap()],
});
