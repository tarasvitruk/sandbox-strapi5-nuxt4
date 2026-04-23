import { checker } from 'vite-plugin-checker';

export default defineNuxtConfig({
	compatibilityDate: '2025-04-19',

	// ssr: false,

	devtools: {
		enabled: true,
	},

	modules: [
		'@vueuse/nuxt',
		'@nuxtjs/tailwindcss',
		'nuxt-svgo',
		'@nuxtjs/i18n',
		'@nuxtjs/sitemap',
		'nuxt-strapi-blocks-renderer',
	],

	css: [ '~/assets/css/main.css' ],

	app: {
		head: {
			meta: [
				{
					name: 'robots',
					content: process.env.ENV === 'production' ? 'index, follow' : 'noindex, nofollow',
				},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1, viewport-fit=cover',
				},
				{
					name: 'og:type',
					content: 'website',
				},
				{
					name: 'og:site_name',
					content: 'Tarvit',
				},
				{
					name: 'msapplication-TileColor',
					content: '#2b5797',
				},
				{
					name: 'theme-color',
					content: '#000000',
				},
			],
			link: [
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: '/apple-touch-icon.png',
				},
				{
					rel: 'icon',
					sizes: '32x32',
					href: '/favicon-32x32.png',
				},
				{
					rel: 'icon',
					sizes: '16x16',
					href: '/favicon-16x16.png',
				},
				{
					rel: 'manifest',
					href: '/site.webmanifest',
				},
				{
					rel: 'mask-icon',
					href: '/safari-pinned-tab.svg',
					color: '#5bbad5',
				},
			],
		},
	},

	svgo: {
		autoImportPath: './assets/svg/',
		defaultImport: 'component',
		global: false,
		svgoConfig: {
			multipass: true,
			plugins: [
				{
					name: 'removeViewBox',
					// params: {
					//   overrides: {
					//     // customize default plugin options
					//     inlineStyles: {
					//       onlyMatchedOnce: false,
					//     },

					//     // or disable plugins
					//     removeDoctype: false,
					//     removeViewBox: true,
					//   },
					// },
				},
			],
		},
	},

	runtimeConfig: {
		apiInternalUrl: process.env.API_INTERNAL_URL,
		public: {
			apiBaseUrl: process.env.API_BASE_URL,
			domainUrl: process.env.DOMAIN_URL,
		},
	},

	i18n: {
		defaultLocale: 'en',
		baseUrl: process.env.DOMAIN_URL || 'http://localhost:3000',
		langDir: 'locales',
		restructureDir: 'i18n',
		strategy: 'prefix',
		detectBrowserLanguage: false,
		// debug: true,
		// lazy: false,
		// detectBrowserLanguage: false,
		// differentDomains: false,
		// skipSettingLocaleOnNavigate: true,
		// detectBrowserLanguage: {
		// 	useCookie: true,
		// 	cookieKey: 'i18n_redirected',
		// 	redirectOn: 'root',
		// },
		locales: [
			{
				name: 'English',
				code: 'en',
				language: 'en-US',
				countryCode: 'EN',
				file: 'en.json',
				// domain: process.env.BASE_URL_EN,
			},
			{
				name: 'Українська',
				code: 'uk',
				language: 'uk-UA',
				countryCode: 'UA',
				file: 'uk.json',
				// domain: process.env.BASE_URL_UK,
			},
			{
				name: 'Čeština',
				code: 'cs',
				language: 'cs-CZ',
				countryCode: 'CZ',
				file: 'cs.json',
				// domain: process.env.BASE_URL_CS,
			},
		],
	},

	postcss: {
		plugins: {
			'postcss-import': {},
			'tailwindcss/nesting': {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	typescript: {
		strict: true,
		typeCheck: true,
	},

	vite: {
		plugins: [
			checker({
				enableBuild: false,
				vueTsc: false,
				eslint: {
					lintCommand: 'eslint --ignore-pattern public .',
					useFlatConfig: true,
					dev: {
						logLevel: [ 'error' ],
					},
				},
				stylelint: {
					lintCommand: 'stylelint --ignore-path .gitignore **/*.{css,vue}',
					dev: {
						overrideConfig: {
							quietDeprecationWarnings: true,
						},
					},
				},
			}),
		],
	},

	imports: {
		dirs: [
			'composables/forms',
		],
	},
});
