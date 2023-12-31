import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://amanvarshney.tech/",
  integrations: [solidJs(), mdx(), tailwind(), sitemap()],
  output: "hybrid",
  adapter: vercel({
    speedInsights: {
      enabled: true,
    },
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
  markdown: {
    syntaxHighlight: "prism",
  },
});
