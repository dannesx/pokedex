export default interface Pokemon {
	id: number
	name: string
	types: [{
		slot: number
		type: {
			name: string;
		}
	}, ({
		slot: number
		type: {
			name: string;
		};
	} | undefined)?]
}
