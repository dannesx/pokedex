import { useContext } from 'react'
import { PokemonContext } from '../contexts/PokemonContext'
import { Link } from 'react-router-dom'
import Badge from './Badge'

function ProfileHeader() {
	const { pokemon } = useContext(PokemonContext)
	// const mainType = pokemon.types[0].type.name
	const formatedID = String(pokemon.id).padStart(3, '0')
	const sourceImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

	return (
		<header className="relative grid pb-8 place-items-center">
			<Link to="/">
				<img
					src="/assets/icons/back.svg"
					alt="back to home"
					className="absolute inset-0 rounded-full transition hover:bg-white/5 p-3 translate-x-5 translate-y-5"
				/>
			</Link>

			<div className="inline-flex items-center gap-8">
				<img src={sourceImg} alt={pokemon.name} className="max-w-32" />

				<div>
					<h4 className="text-number">#{formatedID}</h4>
					<h2 className="text-white capitalize mb-1">{pokemon.name}</h2>
					<div className="inline-flex gap-2">
						{pokemon.types.map(slot => (
							<Badge type={slot?.type.name} key={slot?.slot} />
						))}
					</div>
				</div>
			</div>
		</header>
	)
}
export default ProfileHeader
