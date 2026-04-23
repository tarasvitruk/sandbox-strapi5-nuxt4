import * as api from '~/repository';
import type { Api } from '~/types/api';

export const apiRepository = (fetch: Api) => ({
	apiProjects: api.projects(fetch),
	apiContactForm: api.contactForm(fetch),
});
