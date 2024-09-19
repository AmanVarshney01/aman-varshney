/** @type {import('tailwindcss').Config} */
export default {
	daisyui: {
		themes: ['lofi', 'black'],
		darkTheme: 'black'
	},
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {}
	},
	darkMode: ['class', "[data-theme='black']"],
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
