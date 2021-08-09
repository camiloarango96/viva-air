module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#EF3054',
			},

			borderRadius: {
				custom: '0.313rem',
			},
		},
	},
	variants: {},
	plugins: [],
};
