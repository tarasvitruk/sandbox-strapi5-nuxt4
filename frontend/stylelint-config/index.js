import coreRules from './rules/core.js';
import stylisticRules from './rules/stylistic.js';
import orderRules from './rules/order.js';
import vueRules from './rules/vue.js';
import pluginStylistic from '@stylistic/stylelint-plugin';
import pluginStylelintOrder from 'stylelint-order';

/** @type {import('stylelint').Config} */
export default {
	plugins: [
		pluginStylistic,
		pluginStylelintOrder,
	],
	rules: {
		...coreRules,
		...orderRules,
		...stylisticRules,
	},
	overrides: [
		{
			files: [ '*.vue', '**/*.vue' ],
			customSyntax: 'postcss-html',
			rules: {
				...vueRules,
			},
		},
	],
};
