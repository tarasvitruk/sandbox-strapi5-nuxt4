import type { Api } from '~/types/api';

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();

	const baseURL = import.meta.server
		? `${ config.apiInternalUrl }/api`
		: `${ config.public.apiBaseUrl }/api`;

	const $api = $fetch.create({ baseURL });

	return {
		provide: {
			api: $api as Api,
		},
	};
});
