import type { AppRouter } from '@4tmr/trpc-server';
import { createTRPCProxyClient, httpLink } from '@trpc/client';

type HttpLinkParams = Parameters<typeof httpLink>[0];
// 从 HttpLinkParams 提取 fetch 的类型
type FetchFunctionType = HttpLinkParams['fetch'];

export const createApiClient = ({ endpoint, customFetch }: { endpoint: string; customFetch?: FetchFunctionType }) => {
	const url = `${endpoint}/api/v1/trpc`;
	const headers = {
		'x-app-source': 'trpc'
	};
	let link;
	if (customFetch) {
		link = httpLink({
			url,
			headers,
			fetch: async (url, options) => {
				return await customFetch(url, {
					...options,
					signal: options?.signal || undefined
				});
			}
		});
	} else {
		link = httpLink({
			url,
			headers
		});
	}
	return createTRPCProxyClient<AppRouter>({
		links: [link]
	});
};
