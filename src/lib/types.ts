export type Project = {
	image: ImageMetadata
	name: string
	subDescription: string
	description: string
	githubLink: string
	liveLink?: string
	isFeatured?: boolean
	loading: 'eager' | 'lazy'
	alias: string
	techUsed: { name: string; icon?: string }[]
	note?: string
	showImage?: boolean
}
