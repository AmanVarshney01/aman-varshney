import { createClient } from '@libsql/client/web'
import { sql } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/libsql'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { getSecret } from 'astro:env/server'

export const Guestbook = sqliteTable('Guestbook', {
	id: integer('_id').primaryKey(),
	name: text('name').notNull(),
	message: text('message').notNull(),
	published: text('published')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`)
})

export function getDb() {
	const url = getSecret('ASTRO_DB_REMOTE_URL')
	const authToken = getSecret('ASTRO_DB_APP_TOKEN')
	if (!url || !authToken) {
		throw new Error('Missing ASTRO_DB_REMOTE_URL or ASTRO_DB_APP_TOKEN')
	}
	// The web client speaks hrana-over-http, which works on Cloudflare Workers
	return drizzle(createClient({ url: url.replace(/^libsql:\/\//, 'https://'), authToken }))
}
