/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				bug: '#8CB230',
				bugbg: '#8BD674',
				dark: '#58575F',
				darkbg: '#6F6E78',
				dragon: '#0F6AC0',
				dragonbg: '#7383B9',
				electric: '#EED535',
				electricbg: '#F2CB55',
				fairy: '#ED6EC7',
				fairybg: '#EBA8C3',
				fighting: '#D04164',
				fightingbg: '#EB4971',
				fire: '#FD7D24',
				firebg: '#FFA756',
				flying: '#748FC9',
				flyingbg: '#83A2E3',
				ghost: '#556AAE',
				ghostbg: '#8571BE',
				grass: '#62B957',
				grassbg: '#8BBE8A',
				ground: '#DD7748',
				groundbg: '#F78551',
				ice: '#61CEC0',
				icebg: '#91D8DF',
				normal: '#9DA0AA',
				normalbg: '#B5B9C4',
				poison: '#A552CC',
				poisonbg: '#9F6E97',
				psychic: '#EA5D60',
				psychicbg: '#FF6568',
				rock: '#BAAB82',
				rockbg: '#D4C294',
				steel: '#417D9A',
				steelbg: '#4C91B2',
				water: '#4A90DA',
				waterbg: '#58ABF6',
				white: '#ffffff',
				black: '#17171B',
				gray: '#747476',
				number: '#17171B99',
				default_input: '#F2F2F2',
				pressed_input: '#E2E2E2',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0},
					'100%': { opacity: 1}
				}
			},
			animation: {
				fadeIn: 'fadeIn 0.3s ease 0s 1 normal forwards;'
			}
		},
	},
	plugins: [],
}
