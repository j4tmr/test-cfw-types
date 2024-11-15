import { Hyperdrive, Service } from '@cloudflare/workers-types';
import type { ServiceWorker } from '@4tmr/cfw-services';

export interface Env {
	V2DAO_NEXT_PUBLIC_SUPABASE_URL: string;
	V2DAO_NEXT_PUBLIC_SUPABASE_SERVICE_KEY: string;

	DATABASE_CORE: Hyperdrive;
	DATABASE_PROMO: Hyperdrive;

	SERVICES: Service<ServiceWorker>;
}
