import Badge from './Badge'
import Pokemon from '../interfaces/Pokemon'
import { useContext } from 'react'
import { PokemonContext } from '../contexts/PokemonContext'
import { useNavigate } from 'react-router-dom'

function Card({ pokemon }: { pokemon: Pokemon }) {
	const mainType = pokemon.types[0].type.name
	const formatedID = String(pokemon.id).padStart(3, '0')
	const sourceImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

	const navigate = useNavigate()

	const { selectPokemon } = useContext(PokemonContext)

	const handleClick = () => {
		selectPokemon(pokemon.id)
		navigate('/profile')
	}

	return (
		<div
			id={pokemon.name}
			className={`bg-${mainType}bg p-4 rounded-xl relative shadow-lg mb-8 animate-fadeIn`}
			onClick={handleClick}
		>
			<h4 className="text-number">#{formatedID}</h4>
			<h2 className="text-white capitalize mb-1">{pokemon.name}</h2>
			<div className="inline-flex gap-2">
				{pokemon.types.map(slot => (
					<Badge type={slot?.type.name} key={slot?.slot} />
				))}
			</div>
			<img
				src={sourceImg}
				alt={pokemon.name}
				className="absolute max-w-32 bottom-1 right-1 z-50"
			/>
			<img
				src="/assets/patterns/6x3.svg"
				alt="6x3 pattern"
				className="absolute top-2 left-24"
			/>
			<img
				src="/assets/patterns/pokeball-card.svg"
				alt="pokeball pattern"
				className="absolute top-0 right-0 "
			/>
		</div>
	)
}
export default Card
