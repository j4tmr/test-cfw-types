/**
 * Welcome to Cloudflare Workers! This is your first Durable Objects application.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your Durable Object in action
 * - Run `npm run deploy` to publish your application
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/durable-objects
 */
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@4tmr/trpc-server';
import { createContext, type Env } from '@4tmr/cfw-api';

export default {
	/**
	 * This is the standard fetch handler for a Cloudflare Worker
	 *
	 * @param request - The request submitted to the Worker from the client
	 * @param env - The interface to reference bindings declared in wrangler.toml
	 * @param ctx - The execution context of the Worker
	 * @returns The response to be sent back to the client
	 */
	async fetch(request, env, ctx): Promise<Response> {
		return fetchRequestHandler({
			endpoint: '/api/v1/trpc',
			req: request,
			router: appRouter,
			createContext: (opts) => createContext({ env, ...opts })
		});
	}
} satisfies ExportedHandler<Env>;
