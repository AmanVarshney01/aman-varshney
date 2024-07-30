import db from '@astrojs/db'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import expressiveCode from 'astro-expressive-code'
import { defineConfig } from 'astro/config'

export default defineConfig({
	site: 'https://amanvarshney.tech/',
	integrations: [
		expressiveCode({
			plugins: [pluginLineNumbers()],
			themes: ['poimandres', 'github-light'],
			useDarkModeMediaQuery: true,
			styleOverrides: {
				codeFontSize: '0.95rem'
			}
		}),
		mdx(),
		tailwind(),
		sitemap(),
		db()
	],
	output: 'hybrid',
	adapter: vercel({
		webAnalytics: {
			enabled: true
		},
		imageService: true
	}),
	experimental: {
		serverIslands: true,
		actions: true
	},
	prefetch: true
})
