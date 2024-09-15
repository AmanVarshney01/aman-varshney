import db from '@astrojs/db'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import expressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'
import pagefind from 'astro-pagefind'
import { defineConfig } from 'astro/config'

export default defineConfig({
	site: 'https://amanvarshney.tech/',
	integrations: [
		expressiveCode({
			plugins: [pluginLineNumbers()],
			themes: ['vitesse-black', 'vitesse-light'],
			useDarkModeMediaQuery: true,
			themeCssSelector: () => "[data-theme='lofi']"
		}),
		mdx(),
		tailwind(),
		sitemap(),
		db(),
		icon({
			iconDir: 'src/assets/icons'
		}),
		pagefind()
	],
	output: 'hybrid',
	adapter: vercel({
		webAnalytics: {
			enabled: true
		},
		imageService: true
	}),
	experimental: {
		serverIslands: true
	},
	prefetch: true
})
