/*
 * @Author: Jin Black
 * @Date: 2024-08-22 14:22:35
 * @LastEditors: Jin Black
 * @LastEditTime: 2024-10-30 15:42:36
 * @FilePath: /core/packages/trpc-server/src/index.ts
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
import { router } from './libs/trpc';
import { publicProcedure } from './libs/trpc';

export const appRouter = router({
	test: publicProcedure.query(async () => {
		return 'hello world'
	})
});

export type AppRouter = typeof appRouter;
