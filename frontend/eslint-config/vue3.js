import typescriptConfig from './typescript.js';
import vueRules from './rules/vue3.js';
import typescriptRules from './rules/typescript.js';
import vueParser from 'vue-eslint-parser';
import vuePlugin from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

export default [
	...typescriptConfig,
	...vuePlugin.configs['flat/base'],
	{
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
				ecmaVersion: 'latest',
				extraFileExtensions: [ '.vue' ],
				sourceType: 'module',
			},
		},
	},
	{
		files: [ '**/*.vue' ],
		plugins: {
			vue: vuePlugin,
		},
		languageOptions: {
			parser: vueParser,
		},
		rules: {
			...typescriptRules,
			...vueRules,
		},
	},
	{
		files: [ '**/*.ts', '**/*.vue' ],
		...tseslint.configs.disableTypeChecked,
	},
];
