import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/static";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://amanvarshney.tech/",
  image: {
    domains: ["img.shields.io"],
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [solidJs(), mdx(), tailwind(), sitemap()],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
  markdown: {
    syntaxHighlight: "prism",
  },
});
