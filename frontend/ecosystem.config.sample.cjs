/* eslint-disable no-undef */

module.exports = {
	apps: [
		{
			name: 'sandbox-nuxt3',
			exec_mode: 'cluster',
			instances: 1, // 'max'
			env_production: {
				NODE_ENV: 'production',
				PORT: 3000,
				BASE_URL: '',
				API_BASE_URL: '',
			},
			script: './.output/server/index.mjs',
			args: 'start',
		},
	],
};
