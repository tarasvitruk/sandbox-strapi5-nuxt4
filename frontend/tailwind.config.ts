import type { Config } from 'tailwindcss';
import plugin = require('tailwindcss/plugin');
// import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: [
		'./app/components/**/*.{vue,js}',
		'./app/layouts/**/*.vue',
		'./app/pages/**/*.vue',
		'./app/plugins/**/*.{js,ts}',
		'./app/assets/**/*.css',
	],

	theme: {
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				green: '#00F298',
				greenNew: '#2BE3B7',
				blue: '#07F7F7',
				blueNew: '#13CFDB',
				turquoise: '#00D7BB',
				dark: '#22252C',
				grey: '#313741',
				greyLight: '#f3f4f6',
				red: '#ff0000',
			},
			backgroundImage: {
      	'text-gradient': 'linear-gradient(to right, #2BE3B7, #13CFDB)',
    	},
			fontSize: {
				xxxs: '.5rem',
				xxs: '.675rem',
			},
			fontFamily: {
				sans: ['Open Sans, Ubuntu, Helvetica, Arial, sans-serif'],
			},
			zIndex: {
				1: '1',
				5: '5',
				60: '60',
				70: '70',
				80: '80',
				90: '90',
				100: '100',
				1000: '1000',
				1500: '1500',
			},
			animationDelay: {
				150: '0.15s',
				200: '0.2s',
				250: '0.25s',
				300: '0.3s',
			},
			animation: {
				bggradient: 'bggradient 10s infinite linear',
				menulist: 'menulist 0.5s cubic-bezier(.3,0,0,1) forwards',
				// 'animate-mouse': 'animate-mouse 2s infinite linear',
			},
			keyframes: {
				bggradient: {
					'0%': { transform: 'translateX(0%)' },
					'50%': { transform: 'translateX(-50%)' },
					'100%': { transform: 'translateX(0%)' },
				},
				menulist: {
					'0%': {
						marginTop: '-1rem',
						opacity: '0',
						visibility: 'hidden',
					},
					'50%': {
						marginTop: '0.2rem',
						opacity: '1',
						visibility: 'visible',
					},
					'100%': {
						marginTop: '0',
						opacity: '1',
						visibility: 'visible',
					},
				},
			},
		},
	},
} satisfies Partial<Config>;
