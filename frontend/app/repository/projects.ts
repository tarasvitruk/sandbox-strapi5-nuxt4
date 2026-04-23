import type { Api, Projects } from '~/types/api';

// const { $i18n } = useNuxtApp();
// const locale = $i18n.locale.value as Locale;
// http://localhost:1337/api/projects?locale=en&populate=imageMain&populate=imageAdditional1&populate=imageAdditional2

export const projects = (fetch: Api) => ({
	async get (params?: { locale?: string }): Promise<Projects> {
		return fetch('/projects', {
			query: {
				locale: params?.locale,
				populate: 'imageMain',
				sort: 'publishedAt:desc',
			},
		});
	},

	async getLatest (params?: { locale?: string }): Promise<Projects> {
		return fetch('/projects', {
			query: {
				locale: params?.locale,
				populate: 'imageMain',
				sort: 'publishedAt:desc',
				'pagination[limit]': '3',
			},
		});
	},

	async getOther (params?: { locale?: string; excludeId?: number }): Promise<Projects> {
		return fetch('/projects', {
			query: {
				locale: params?.locale,
				populate: 'imageMain',
				sort: 'publishedAt:desc',
				'pagination[limit]': '3',
				'filters[id][$ne]': params?.excludeId,
			},
		});
	},

	async getOne (params?: { slug?: string; locale?: string }): Promise<Projects> {
		return fetch('/projects', {
			query: {
				'filters[slug][$eq]': params?.slug,
				locale: params?.locale,
				populate: [ 'imageMain', 'imageAdditional1', 'imageAdditional2' ],
			},
		});
	},
});
