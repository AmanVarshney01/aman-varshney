import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import db from "@astrojs/db";
import {
  transformerNotationHighlight,
  transformerMetaHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";

export default defineConfig({
  site: "https://amanvarshney.tech/",
  integrations: [solidJs(), mdx(), tailwind(), sitemap(), db()],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      langs: ["markdown", "cpp"],
      // BUG Transformer not working
      transformers: [
        transformerNotationHighlight(),
        transformerMetaHighlight(),
        transformerNotationDiff(),
      ],
    },
  },
});
