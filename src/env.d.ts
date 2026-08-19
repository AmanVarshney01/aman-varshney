/// <reference path="../.astro/actions.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module 'cloudflare:workers' {
	export const env: Record<string, unknown>
}
