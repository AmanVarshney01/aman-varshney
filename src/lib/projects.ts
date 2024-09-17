import amanvarshney from '@/assets/project-images/aman-varshney.webp'
import aman_varshney from '@/assets/project-images/amanvarshney.webp'
import glaappreimagined from '@/assets/project-images/gla-app-reimagined.webp'
import hackTrack from '@/assets/project-images/hack-track.webp'
import oxabags from '@/assets/project-images/oxabags-ecommerce.webp'
import suggestmeaman from '@/assets/project-images/suggestmeaman.webp'
import type { Project } from './types'

export const projects: Project[] = [
	{
		image: hackTrack,
		name: 'Hack Track',
		subDescription: 'Project Tracker with team collaboration',
		description: 'Project Tracker with team collaboration using Next.js, Shadcn/UI, and Supabase.',
		githubLink: 'https://github.com/AmanVarshney01/Hack-Track',
		liveLink: 'https://hack-track.vercel.app/',
		isFeatured: true,
		loading: 'eager',
		alias: 'hack-track',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'Next.js', icon: 'next' },
			{ name: 'Supabase', icon: 'supabase' },
			{ name: 'Tailwind', icon: 'tailwind' },
			{ name: 'Shadcn/UI', icon: 'shadcn' },
			{ name: 'Vercel', icon: 'vercel' }
		]
	},
	{
		image: oxabags,
		name: 'Oxabags Ecommerce',
		subDescription: 'A Zero Cost Ecommerce Site',
		description: 'An ecommerce site using Next.js, Shadcn/UI, Razorpay, and Sanity.io',
		githubLink: 'https://github.com/AmanVarshney01/oxabags',
		liveLink: 'https://www.oxabags.com/',
		isFeatured: true,
		loading: 'eager',
		alias: 'oxabags',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'Next.js', icon: 'next' },
			{ name: 'Razorpay', icon: 'razorpay' },
			{ name: 'Sanity.io', icon: 'sanity' },
			{ name: 'Tailwind', icon: 'tailwind' },
			{ name: 'Shadcn/UI', icon: 'shadcn' },
			{ name: 'Cloudflare', icon: 'cloudflare' }
		]
	},
	{
		image: glaappreimagined,
		name: 'Gla App Reimagined',
		subDescription: 'A GLA University app Prototype',
		description: 'A Gla app prototype using React Native',
		githubLink: 'https://github.com/AmanVarshney01/gla-app-reimagined',
		loading: 'eager',
		isFeatured: true,
		alias: 'gla-app-reimagined',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'React Native', icon: 'react' },
			{ name: 'Expo', icon: 'expo' },
			{ name: 'Nativewind', icon: 'tailwind' }
		]
	},
	{
		image: amanvarshney,
		name: 'Portfolio',
		subDescription: 'minimal portfolio with blog and guestbook',
		description: 'My Portfolio using Astro and Tailwind CSS',
		githubLink: 'https://github.com/AmanVarshney01/aman-varshney',
		liveLink: 'https://www.amanvarshney.tech/',
		loading: 'lazy',
		alias: 'portfolio',
		techUsed: [
			{ name: 'Astro', icon: 'astro' },
			{ name: 'Tailwind', icon: 'tailwind' },
			{ name: 'Vercel', icon: 'vercel' }
		]
	},
	{
		image: aman_varshney,
		name: '3D Portfolio',
		subDescription: 'My 3D Portfolio',
		description: 'A 3D portfolio using Next.js and Three.js',
		githubLink: 'https://github.com/AmanVarshney01/amanvarshney',
		liveLink: 'https://aman-varshney.vercel.app/',
		loading: 'lazy',
		alias: 'portfolio-3d',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'Next.js', icon: 'next' },
			{ name: 'Three.js', icon: 'three' },
			{ name: 'Tailwind', icon: 'tailwind' },
			{ name: 'Vercel', icon: 'vercel' }
		]
	},
	{
		image: suggestmeaman,
		name: 'Suggest Me Aman',
		subDescription: 'Movie recommendations',
		description: 'Movie recommendations using Svelte',
		githubLink: 'https://github.com/AmanVarshney01/SuggestMeAman',
		liveLink: 'https://suggestmeaman.vercel.app/',
		loading: 'lazy',
		alias: 'suggest-me-aman',
		techUsed: [
			{ name: 'Svelte', icon: 'svelte' },
			{ name: 'Tailwind', icon: 'tailwind' },
			{ name: 'Vercel', icon: 'vercel' }
		]
	}
]
