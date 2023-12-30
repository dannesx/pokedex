export default interface Pokemon {
	name: string
	types: [{
		type: {
			name: string;
		}
	}, ({
		type: {
			name: string;
		};
	} | undefined)?]
}
