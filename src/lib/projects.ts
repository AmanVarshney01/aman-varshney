import amanvarshney from '../assets/project/aman-varshney.webp'
import aman_varshney from '../assets/project/amanvarshney.webp'
import glaappreimagined from '../assets/project/gla-app-reimagined.webp'
import hackTrack from '../assets/project/hack-track.webp'
import oxabags from '../assets/project/oxabags-ecommerce.webp'
import suggestmeaman from '../assets/project/suggestmeaman.webp'
import topstudz from '../assets/project/topstudz.webp'
import bettertstack from '../assets/project/better-t-stack.webp'
import type { Project } from './types'

export const projects: Project[] = [
	{
		image: bettertstack,
		name: 'Create Better T Stack',
		description:
			'An interactive CLI tool to quickly scaffold full-stack TypeScript applications with React, Hono, and tRPC. Provides a modern, type-safe development experience with the best tools from the TypeScript ecosystem.',
		subDescription: 'CLI for scaffolding modern TypeScript full-stack applications.',
		githubLink: 'https://github.com/better-t-stack/create-better-t-stack',
		liveLink: 'https://www.npmjs.com/package/create-better-t-stack',
		loading: 'eager',
		isFeatured: true,
		alias: 'better-t-stack',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'React', icon: 'react' },
			{ name: 'Tanstack Router' },
			{ name: 'tRPC' },
			{ name: 'Hono' },
			{ name: 'Tailwind', icon: 'tailwind' },
			{ name: 'Shadcn/UI', icon: 'shadcn' },
			{ name: 'Turborepo' },
			{ name: 'Tauri' },
			{ name: 'Drizzle' },
			{ name: 'Prisma' }
		]
	},
	{
		image: topstudz,
		name: 'TopStudz',
		subDescription: 'Modern student study management platform',
		description:
			'TopStudz is a modern student study management platform designed to help students track, optimize, and improve their study habits with features like study session tracking, group collaboration, and AI-powered performance analytics.',
		githubLink: 'https://github.com/amanvarshney01/topstudz',
		liveLink: 'https://topstudz.vercel.app/',
		loading: 'eager',
		isFeatured: true,
		alias: 'topstudz',
		techUsed: [
			{ name: 'TypeScript', icon: 'typescript' },
			{ name: 'Next.js', icon: 'next' },
			{ name: 'TailwindCSS', icon: 'tailwind' },
			{ name: 'Convex' },
			{ name: 'Shadcn/ui', icon: 'shadcn' },
			{ name: 'Google Gemini' }
		]
	},
	{
		image: oxabags,
		name: 'Oxabags',
		subDescription: 'Ecommerce site developed with Next.js, Sanity.io, and Razorpay.',
		description: 'An ecommerce platform using Next.js, Shadcn/UI, Razorpay, and Sanity.io.',
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
		image: hackTrack,
		name: 'Hack Track',
		subDescription:
			'Team collaboration project tracker built with Next.js, Shadcn/UI, and Supabase.',
		description:
			'A project tracker for team collaboration utilizing Next.js, Shadcn/UI, and Supabase.',
		githubLink: 'https://github.com/AmanVarshney01/Hack-Track',
		liveLink: 'https://hack-track.vercel.app/',
		isFeatured: false,
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
		image: glaappreimagined,
		name: 'GLA App Reimagined',
		subDescription: 'Prototype app for GLA University built with React Native.',
		description: 'A prototype app for GLA University built with React Native.',
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
		subDescription: 'Minimal portfolio with blog and guestbook.',
		description:
			'A minimal portfolio featuring a blog and guestbook, built with Astro and Tailwind CSS.',
		githubLink: 'https://github.com/AmanVarshney01/aman-varshney',
		liveLink: 'https://www.amanvarshney.work/',
		loading: 'eager',
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
		subDescription: '3D portfolio website.',
		description: 'A 3D portfolio website built with Next.js and Three.js.',
		githubLink: 'https://github.com/AmanVarshney01/amanvarshney',
		liveLink: 'https://aman-varshney.vercel.app/',
		loading: 'eager',
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
		subDescription: 'Movie recommendation app.',
		description: 'A movie recommendation app built with Svelte.',
		githubLink: 'https://github.com/AmanVarshney01/SuggestMeAman',
		liveLink: 'https://suggestmeaman.vercel.app/',
		loading: 'eager',
		alias: 'suggest-me-aman',
		techUsed: [
			{ name: 'Svelte', icon: 'svelte' },
			{ name: 'Tailwind', icon: 'tailwind' },
			{ name: 'Vercel', icon: 'vercel' }
		]
	}
]
