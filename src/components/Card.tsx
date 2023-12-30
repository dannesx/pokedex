import Badge from './Badge'
import Pokemon from '../interfaces/Pokemon'

function Card({ pokemon }: { pokemon: Pokemon }) {
	const mainType = pokemon.types[0].type.name
	const formatedID = String(pokemon.id).padStart(3, '0')
	const sourceImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

	return (
		<div id={pokemon.name} className={`bg-${mainType}bg p-5 rounded-xl relative shadow`}>
			<h4 className="text-number">#{formatedID}</h4>
			<h2 className="text-white capitalize mb-1">{pokemon.name}</h2>
			<div className="inline-flex gap-2">
				{pokemon.types.map(slot => (
					<Badge type={slot?.type.name} key={slot?.slot} />
				))}
			</div>
			<img src={sourceImg} alt={pokemon.name} className='absolute max-w-36 bottom-2 right-2'/>
		</div>
	)
}
export default Card
