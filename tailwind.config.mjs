/** @type {import('tailwindcss').Config} */
export default {
	daisyui: {
		themes: [
			'lofi',
			{
				black: {
					primary: '#f0f0f0',
					'primary-focus': '#e0e0e0',
					'primary-content': '#1a1a1a',

					secondary: '#e5e5e5',
					'secondary-focus': '#d4d4d4',
					'secondary-content': '#2a2a2a',

					accent: '#94a3b8',
					'accent-focus': '#64748b',
					'accent-content': '#ffffff',

					neutral: '#404040',
					'neutral-focus': '#333333',
					'neutral-content': '#f5f5f5',

					'base-100': '#0a0a0a',
					'base-200': '#141414',
					'base-300': '#1e1e1e',
					'base-content': '#e5e5e5',

					info: '#60a5fa',
					success: '#34d399',
					warning: '#fbbf24',
					error: '#f87171',

					'--rounded-box': '8px',
					'--rounded-btn': '6px',
					'--rounded-badge': '4px',

					'--animation-btn': '0.3s',
					'--animation-input': '0.2s',

					'--btn-text-case': 'normal',
					'--navbar-padding': '.5rem',
					'--border-btn': '1px'
				}
			}
		],
		darkTheme: 'black'
	},
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {}
	},
	darkMode: ['class', '[data-theme="black"]'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
