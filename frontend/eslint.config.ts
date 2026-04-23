import vue3 from './eslint-config/vue3.js';
import tailwind from './eslint-config/tailwind.js';

export default [
	...vue3,
	...tailwind,
	{
		ignores: [
			'app/types/api/**/*',
			'tailwind.config.ts',
			'eslint.config.ts',
		],
	},
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: process.cwd(),
			},
		},
	},
];
