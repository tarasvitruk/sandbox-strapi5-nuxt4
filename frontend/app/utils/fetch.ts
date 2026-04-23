export const HTTP_ERRORS: Record<number, { name: string; description: string }> = {
	400: {
		name: 'Bad Request',
		description: 'The request cannot be processed. Check the input and try again.',
	},
	401: {
		name: 'Unauthorized',
		description: 'Login is required to access this resource.',
	},
	403: {
		name: 'Forbidden',
		description: 'You do not have access to this content.',
	},
	404: {
		name: 'Not Found',
		description: 'The requested page was not found.',
	},
	405: {
		name: 'Method Not Allowed',
		description: 'This action is not allowed.',
	},
	406: {
		name: 'Not Acceptable',
		description: 'The requested format is not supported.',
	},
	408: {
		name: 'Request Timeout',
		description: 'The request took too long. Please try again later.',
	},
	409: {
		name: 'Conflict',
		description: 'There was a conflict with the current state of the content.',
	},
	410: {
		name: 'Gone',
		description: 'The requested content is no longer available.',
	},
	500: {
		name: 'Internal Server Error',
		description: 'An unexpected error occurred. Please try again later.',
	},
	501: {
		name: 'Not Implemented',
		description: 'This feature is not available yet.',
	},
	502: {
		name: 'Bad Gateway',
		description: 'An invalid response was received from another server.',
	},
	503: {
		name: 'Service Unavailable',
		description: 'The service is temporarily unavailable. Please try again later.',
	},
	504: {
		name: 'Gateway Timeout',
		description: 'The request took too long. Please try again later.',
	},
	505: {
		name: 'HTTP Version Not Supported',
		description: 'The used HTTP version is not supported.',
	},
} as const;

export const withLoading = async <T>(loading: Ref<boolean>, fn: () => T | Promise<T>): Promise<T> => {
	try {
		loading.value = true;
		return await fn();
	}
	finally {
		loading.value = false;
	}
};
