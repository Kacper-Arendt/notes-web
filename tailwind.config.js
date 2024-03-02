/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					light: '#7573FD',
					DEFAULT: '#5E5CE6',
					dark: '#4745CF',
				},
			},
			boxShadow: {
				normal: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			},
		},
	},
	plugins: [],
};
