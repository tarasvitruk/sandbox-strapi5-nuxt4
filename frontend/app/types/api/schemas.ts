/* eslint-disable */
import type { BlockNode } from '#strapi-blocks-renderer/types'

export type ImageFormat = {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: string | null;
	size: number;
	width: number;
	height: number;
	sizeInBytes: number;
};

export type Image = {
	id: number;
	documentId: string;
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: number;
	height: number;
	formats: {
		large?: ImageFormat;
		small?: ImageFormat;
		medium?: ImageFormat;
		thumbnail?: ImageFormat;
	};
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: unknown | null;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
};

export type Project = {
	id: number;
	documentId: string;
	title: string;
	description: string;
	content: BlockNode[];
	slug: string;
	technologies: string[];
	imageMain: Image;
	imageAdditional1: Image;
	imageAdditional2: Image;
	locale: string;
	urlCached?: string;
	urlLive?: string;
};

export type Projects = {
	data: Project[];
};

export type ContactForm = {
	data: {
		id: number;
		documentId: string;
		name: string;
		email: string;
		message: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
	},
	meta: {}
};

export type ContactFormRequest = {
	data: {
		name: string;
		email: string;
		message: string;
	}
};
