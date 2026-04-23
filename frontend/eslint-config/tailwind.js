import tailwindPlugin from 'eslint-plugin-tailwindcss';
import tailwindRules from './rules/tailwind.js';

export default [
	{
		plugins: {
			tailwindcss: tailwindPlugin,
		},
		rules: {
			...tailwindRules,
		},
	},
];
