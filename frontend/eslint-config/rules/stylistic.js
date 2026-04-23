const	arrowParens = true;
const blockSpacing = true;
const braceStyle = 'stroustrup';
const commaDangle = 'always-multiline';
const indent = 'tab';
const quoteProps = 'as-needed';
const quotes = 'single';
const semi = true;

export default {
	// Spacing
	'@stylistic/array-bracket-spacing': [ 'error', 'always' ],
	'@stylistic/arrow-spacing': [ 'error', { after: true, before: true } ],
	'@stylistic/block-spacing': [ 'error', blockSpacing ? 'always' : 'never' ],
	'@stylistic/comma-spacing': [ 'error', { after: true, before: false } ],
	'@stylistic/computed-property-spacing': [ 'error', 'never', { enforceForClassMembers: true } ],
	'@stylistic/function-call-spacing': [ 'error', 'never' ],
	'@stylistic/generator-star-spacing': 'error',
	'@stylistic/key-spacing': [ 'error', { afterColon: true, beforeColon: false } ],
	'@stylistic/keyword-spacing': [ 'error', { after: true, before: true } ],
	'@stylistic/no-mixed-spaces-and-tabs': 'error',
	'@stylistic/no-multi-spaces': 'error',
	'@stylistic/no-trailing-spaces': 'error',
	'@stylistic/no-whitespace-before-property': 'error',
	'@stylistic/object-curly-spacing': [ 'error', 'always' ],
	'@stylistic/rest-spread-spacing': [ 'error', 'never' ],
	'@stylistic/semi-spacing': [ 'error', { after: true, before: false } ],
	'@stylistic/space-before-blocks': [ 'error', 'always' ],
	'@stylistic/space-before-function-paren': [ 'error', { anonymous: 'always', asyncArrow: 'always', named: 'always' } ],
	'@stylistic/space-in-parens': [ 'error', 'never' ],
	'@stylistic/space-infix-ops': 'error',
	'@stylistic/space-unary-ops': [ 'error', { nonwords: false, words: true } ],
	'@stylistic/spaced-comment': [ 'error', 'always' ],
	'@stylistic/switch-colon-spacing': [ 'error', { after: true, before: false } ],
	'@stylistic/template-curly-spacing': [ 'error', 'always' ],
	'@stylistic/template-tag-spacing': [ 'error', 'always' ],
	'@stylistic/type-annotation-spacing': 'error',
	'@stylistic/type-generic-spacing': 'error',
	'@stylistic/type-named-tuple-spacing': 'error',
	'@stylistic/yield-star-spacing': [ 'error', 'both' ],
	// Line breaks
	'@stylistic/array-bracket-newline': [ 'error', 'consistent' ],
	'@stylistic/array-element-newline': [ 'error', 'consistent' ],
	'@stylistic/eol-last': [ 'error', 'always' ],
	'@stylistic/function-call-argument-newline': [ 'error', 'consistent' ],
	'@stylistic/function-paren-newline': [ 'error', 'multiline' ],
	'@stylistic/implicit-arrow-linebreak': 'off',
	'@stylistic/linebreak-style': [ 'error', 'unix' ],
	'@stylistic/lines-around-comment': [ 'error', { beforeBlockComment: true, afterBlockComment: false } ],
	'@stylistic/lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: true } ],
	'@stylistic/multiline-ternary': 'off',
	'@stylistic/newline-per-chained-call': 'off',
	'@stylistic/object-curly-newline': [ 'error', { consistent: true } ],
	'@stylistic/object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: true } ],
	'@stylistic/operator-linebreak': [ 'error', 'after', { overrides: { '?': 'before', ':': 'before' } } ],
	'@stylistic/padding-line-between-statements': 'off',
	// Brackets
	'@stylistic/arrow-parens': [ 'error', arrowParens ? 'always' : 'as-needed', { requireForBlockBody: true } ],
	'@stylistic/brace-style': [ 'error', braceStyle, { allowSingleLine: false } ],
	'@stylistic/new-parens': 'error',
	'@stylistic/no-extra-parens': 'off',
	'@stylistic/wrap-iife': [ 'error', 'inside' ],
	'@stylistic/wrap-regex': 'off',
	// Indent
	'@stylistic/indent': [ 'error', indent ],
	'@stylistic/indent-binary-ops': [ 'error', indent ],
	// Quotes
	'@stylistic/quote-props': [ 'error', quoteProps ],
	'@stylistic/quotes': [ 'error', quotes, { avoidEscape: true } ],
	// Commas
	'@stylistic/comma-dangle': [ 'error', commaDangle ],
	'@stylistic/comma-style': [ 'error', 'last' ],
	// Semis
	'@stylistic/no-extra-semi': 'error',
	'@stylistic/semi': [ 'error', semi ? 'always' : 'never' ],
	'@stylistic/semi-style': [ 'error', 'last' ],
	// Operators
	'@stylistic/dot-location': [ 'error', 'property' ],
	'@stylistic/no-mixed-operators': [ 'error', { allowSamePrecedence: true } ],
	// Comments
	'@stylistic/lines-comment-position': 'off',
	'@stylistic/multiline-comment-style': [ 'error', 'separate-lines', { checkJSDoc: false } ],
	// Disallow
	'@stylistic/no-confusing-arrow': 'error',
	'@stylistic/no-floating-decimal': 'error',
	'@stylistic/no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 0, maxEOF: 0 } ],
	'@stylistic/no-tabs': indent === 'tab' ? 'off' : 'error',
	// Misc.
	'@stylistic/max-len': 'off',
	'@stylistic/max-statements-per-line': [ 'error', { max: 1 } ],
	'@stylistic/member-delimiter-style': [ 'error', {
		multiline: {
			delimiter: semi ? 'semi' : 'none',
			requireLast: semi,
		},
		multilineDetection: 'brackets',
		overrides: {
			interface: {
				multiline: {
					delimiter: semi ? 'semi' : 'none',
					requireLast: semi,
				},
			},
		},
		singleline: { delimiter: semi ? 'semi' : 'comma' },
	} ],
	'@stylistic/nonblock-statement-body-position': [ 'error', 'beside' ],
	'@stylistic/one-var-declaration-per-line': 'off',
	'@stylistic/padded-blocks': [ 'error', { blocks: 'never', classes: 'never', switches: 'never' } ],
};
