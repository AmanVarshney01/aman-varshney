import cloudflare from '@astrojs/cloudflare'
import db from '@astrojs/db'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import expressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

export default defineConfig({
	site: 'https://www.amanvarshney.work/',
	integrations: [
		expressiveCode({
			plugins: [pluginLineNumbers()],
			themes: ['vitesse-dark', 'vitesse-light'],
			useDarkModeMediaQuery: false,
			themeCssSelector: (themeName) =>
				themeName === 'vitesse-black' ? '[data-theme="black"]' : '[data-theme="lofi"]'
		}),
		mdx(),
		tailwind(),
		sitemap(),
		db(),
		icon({
			iconDir: 'src/assets/icons'
		})
	],
	adapter: cloudflare({
		imageService: 'compile'
	})
})
