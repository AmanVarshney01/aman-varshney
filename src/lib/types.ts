export type Project = {
	name: string
	description: string
	githubLink: string
	liveLink?: string
	loading: 'eager' | 'lazy'
	alias: string
	techUsed: { name: string; icon?: string }[]
}
