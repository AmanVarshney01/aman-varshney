export type Project = {
	name: string
	description: string
	githubLink: string
	liveLink?: string
	techUsed: { name: string; icon?: string }[]
}
