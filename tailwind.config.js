/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			gridTemplateRows: {
				// Simple 8 row grid
				'game-field':
					'repeat(3, 80px)',
			},
			gridTemplateColumns: {
				'game-field':
					'repeat(3, 80px)',
			},
		},
		plugins: [],
	},
}
