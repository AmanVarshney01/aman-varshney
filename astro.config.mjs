import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import solidJs from '@astrojs/solid-js'
import vercel from '@astrojs/vercel/serverless'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import db from '@astrojs/db'
import {
	transformerNotationDiff,
	transformerNotationHighlight,
	transformerNotationFocus,
	transformerNotationWordHighlight
} from '@shikijs/transformers'
import { addCopyButton } from 'shiki-transformer-copy-button'

export default defineConfig({
	site: 'https://amanvarshney.tech/',
	integrations: [solidJs(), mdx(), tailwind(), sitemap(), db()],
	output: 'hybrid',
	adapter: vercel({
		webAnalytics: {
			enabled: true
		},
		imageService: true
	}),
	markdown: {
		shikiConfig: {
			theme: 'vitesse-dark',
			// themes: {
			// 	light: 'vitesse-light',
			// 	dark: 'vitesse-dark'
			// },
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
	}
})
