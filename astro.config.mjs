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
			themes: ['min-dark'],
			styleOverrides: {
				borderRadius: '8px',
				borderColor: '#2a2a2a',
				codeBackground: '#1e1e1e',
				codeFontFamily: "'Geist Mono', 'Cascadia Code', 'Menlo', monospace",
				codeFontSize: '0.88rem',
				frames: {
					shadowColor: 'transparent',
					editorBackground: '#1e1e1e',
					terminalBackground: '#1e1e1e',
					terminalTitlebarBackground: '#161616',
					editorTabBarBackground: '#161616'
				},
				lineNumbers: {
					foreground: '#5c5c5c'
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
