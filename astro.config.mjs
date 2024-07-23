import db from '@astrojs/db'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import {
	transformerNotationDiff,
	transformerNotationFocus,
	transformerNotationHighlight,
	transformerNotationWordHighlight
} from '@shikijs/transformers'
import { defineConfig } from 'astro/config'
import { addCopyButton } from 'shiki-transformer-copy-button'

export default defineConfig({
	site: 'https://amanvarshney.tech/',
	integrations: [mdx(), tailwind(), sitemap(), db()],
	output: 'hybrid',
	adapter: vercel({
		webAnalytics: {
			enabled: true
		},
		imageService: true
	}),
	markdown: {
		shikiConfig: {
			// theme: 'material-theme-ocean',
			themes: {
				light: 'vitesse-light',
				dark: 'vitesse-black'
			},
			defaultColor: false,
			transformers: [
				transformerNotationDiff(),
				transformerNotationHighlight(),
				transformerNotationFocus(),
				transformerNotationWordHighlight(),
				addCopyButton({
					toggle: 1000
				})
			]
		}
	},
	experimental: {
		serverIslands: true,
		actions: true
	}
})
