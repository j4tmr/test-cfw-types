import { initTRPC } from '@trpc/server';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import type { Env } from './env';

export const createContext = (opts: FetchCreateContextFnOptions & { env: Env }) => {
	return {
		req: opts.req,
		resHeaders: opts.resHeaders,
		env: opts.env
	};
};

const t = initTRPC.context<typeof createContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
