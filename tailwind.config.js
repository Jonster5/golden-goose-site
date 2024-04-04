import defaultTheme from 'tailwindcss/defaultTheme';
import scrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Quattrocento', ...defaultTheme.fontFamily.serif],
				sans: ['Quattrocento Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [scrollbar],
};
