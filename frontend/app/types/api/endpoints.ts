/* eslint-disable */

import * as s from './schemas';

import type { FetchOptions, FetchResponse } from 'ofetch';
import type {ContactFormRequest} from "./schemas";

export type CommonOptions = Omit<FetchOptions, 'body' | 'method' | 'query'>;

export type Api = {
	(path: '/projects', options?: CommonOptions & { query?: { locale?: string; populate?: string | string[] | object; sort?: string; 'pagination[limit]'?: string; 'filters[id][$ne]'?: number; 'filters[slug][$eq]'?: string; } }): Promise<s.Projects>;
	raw(path: '/projects', options?: CommonOptions & { query?: { locale?: string; populate?: string | string[] | object; sort?: string; 'pagination[limit]'?: string; 'filters[id][$ne]'?: number; 'filters[slug][$eq]'?: string; } }): Promise<FetchResponse<s.Projects>>;

	(path: '/contact-forms', options: CommonOptions & { method: 'POST'; body: s.ContactFormRequest }): Promise<s.ContactForm>;
	raw(path: '/contact-forms', options: CommonOptions & { method: 'POST'; body: s.ContactFormRequest }): Promise<FetchResponse<s.ContactForm>>;

	// (path: `/games/${number}`, options?: CommonOptions): Promise<s.Game>;
	// raw(path: `/games/${number}`, options?: CommonOptions): Promise<FetchResponse<s.Game>>;
	//
	// (path: `/games/${number}`, options: CommonOptions & { method: 'PUT'; body: s.GameRequest }): Promise<s.Game>;
	// raw(path: `/games/${number}`, options: CommonOptions & { method: 'PUT'; body: s.GameRequest }): Promise<FetchResponse<s.Game>>;
	//
	// (path: '/games', options: CommonOptions & { query: p.GetGamesParams }): Promise<s.Game[]>;
	// raw(path: '/games', options: CommonOptions & { query: p.GetGamesParams }): Promise<FetchResponse<s.Game[]>>;
	//
	// (path: '/games', options: CommonOptions & { method: 'POST'; body: s.GameRequest }): Promise<s.Game>;
	// raw(path: '/games', options: CommonOptions & { method: 'POST'; body: s.GameRequest }): Promise<FetchResponse<s.Game>>;
};
