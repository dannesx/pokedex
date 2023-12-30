import Pokemon from '../interfaces/Pokemon'

function Card({ pokemon }: { pokemon: Pokemon }) {


	return (
		<div>
			<h2>{pokemon.name}</h2>
		</div>
	)
}
export default Card
