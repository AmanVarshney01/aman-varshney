import cloudflare from '@astrojs/cloudflare'
import db from '@astrojs/db'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import expressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	site: 'https://amanv.dev/',
	integrations: [
		expressiveCode({
			plugins: [pluginLineNumbers()],
			themes: ['vitesse-dark', 'vitesse-light']
		}),
		mdx(),
		sitemap(),
		db(),
		icon({
			iconDir: 'src/assets/icons'
		})
	],
	adapter: cloudflare({
		imageService: 'compile'
	}),
	vite: {
		plugins: [tailwindcss()]
	}
})
