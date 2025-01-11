import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				jua: ['Jua', 'sans-serif'], // Font for Navbar, Footer, and Buttons
				lilita: ['Lilita One', 'cursive'], // Font for Cookie Card text
			},
		},
	},

	plugins: [],
} satisfies Config;
