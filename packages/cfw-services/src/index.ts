import { WorkerEntrypoint } from 'cloudflare:workers';
import type { Env } from './env';

export class ServiceWorker extends WorkerEntrypoint<Env> {
	// Currently, entrypoints without a named handler are not supported
	async fetch(request: Request) {
		return new Response(null, { status: 404 });
	}

	async hello() {
		return 'hello world'
	}
}
