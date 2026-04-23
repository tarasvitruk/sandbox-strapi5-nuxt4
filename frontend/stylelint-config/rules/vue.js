export default {
	'value-keyword-case': [
		'lower',
		{
			ignoreFunctions: [ 'v-bind' ],
			camelCaseSvgKeywords: true,
		},
	],
	'selector-pseudo-class-no-unknown': [
		true,
		{
			ignorePseudoClasses: [ 'deep', 'global', 'slotted' ],
		},
	],
	'selector-pseudo-element-no-unknown': [
		true,
		{
			ignorePseudoElements: [ 'v-deep', 'v-global', 'v-slotted' ],
		},
	],
};
