import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import expressiveCode from 'astro-expressive-code'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	site: 'https://amanv.dev/',
	integrations: [
		expressiveCode({
			plugins: [pluginLineNumbers()],
			themes: ['vitesse-dark'],
			styleOverrides: {
				borderRadius: '8px',
				borderColor: '#252530',
				codeBackground: '#1c1c24',
				codeFontFamily: "'Geist Mono', 'Cascadia Code', 'Menlo', monospace",
				codeFontSize: '0.88rem',
				frames: {
					shadowColor: 'transparent',
					editorBackground: '#1c1c24',
					terminalBackground: '#1c1c24',
					terminalTitlebarBackground: '#141415',
					editorTabBarBackground: '#141415'
				},
				lineNumbers: {
					foreground: '#606079'
				}
			}
		}),
		mdx(),
		sitemap()
	],
	adapter: cloudflare({
		imageService: 'compile'
	}),
	vite: {
		plugins: [tailwindcss()]
	}
})
