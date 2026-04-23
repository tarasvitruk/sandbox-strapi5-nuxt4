import type { Api, ContactForm, ContactFormRequest } from '~/types/api';

export const contactForm = (fetch: Api) => ({
	async create ({ body }: {
		body: ContactFormRequest;
	}): Promise<ContactForm> {
		return fetch('/contact-forms', {
			method: 'POST',
			body,
		});
	},
});
