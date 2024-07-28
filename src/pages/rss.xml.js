import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
const parser = new MarkdownIt()

export async function GET(context) {
	const blogs = await getCollection('blogs')
	return rss({
		title: 'Aman Varshney',
		description: 'Portfolio of Aman Varshney',
		site: context.site,
		items: blogs.map((blog) => ({
			title: blog.data.title,
			pubDate: blog.data.date,
			content: sanitizeHtml(parser.render(blog.body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
			}),
			link: `/blog/${blog.slug}/`
		})),
		customData: `<language>en-us</language>`
	})
}
