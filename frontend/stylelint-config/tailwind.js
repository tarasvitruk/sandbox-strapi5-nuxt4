import tailwindRules from './rules/tailwind.js';

/** @type {import('stylelint').Config} */
export default {
	extends: [
		'./',
	],
	rules: {
		...tailwindRules,
	},
	overrides: [
		{
			files: [ '*.vue', '**/*.vue' ],
			rules: {
				...tailwindRules,
			},
		},
	],
};
