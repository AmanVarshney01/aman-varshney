import type { Project } from './types'

export const projects: Project[] = [
	{
		name: 'Create Better T Stack',
		description:
			'A modern CLI tool for scaffolding end-to-end type-safe TypeScript projects with best practices and customizable configurations',
		githubLink: 'https://github.com/better-t-stack/create-better-t-stack',
		liveLink: 'https://better-t-stack.pages.dev/',
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
		name: 'TopStudz',
		description:
			'A modern student study management platform that helps track, optimize study habits with session tracking, group collaboration, and AI analytics.',
		githubLink: 'https://github.com/amanvarshney01/topstudz',
		liveLink: 'https://topstudz.vercel.app/',
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
		name: 'Oxabags',
		description: 'An ecommerce platform using Next.js, Shadcn/UI, Razorpay, and Sanity.io.',
		githubLink: 'https://github.com/AmanVarshney01/oxabags',
		liveLink: 'https://www.oxabags.com/',
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
		name: 'Hack Track',
		description:
			'A project tracker for team collaboration utilizing Next.js, Shadcn/UI, and Supabase.',
		githubLink: 'https://github.com/AmanVarshney01/Hack-Track',
		liveLink: 'https://hack-track.vercel.app/',
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
		name: 'GLA App Reimagined',
		description: 'A prototype app for GLA University built with React Native.',
		githubLink: 'https://github.com/AmanVarshney01/gla-app-reimagined',
		techUsed: [
			{ name: 'Typescript', icon: 'typescript' },
			{ name: 'React Native', icon: 'react' },
			{ name: 'Expo', icon: 'expo' },
			{ name: 'Nativewind', icon: 'tailwind' }
		]
	}
]
