import { useContext } from 'react'
import { PokemonContext } from '../contexts/PokemonContext'
import Card from '../components/Card'
import Header from '../components/Header'

function Home() {
	const { pokemons } = useContext(PokemonContext)
	return (
		<section className="relative">
			<img src="/assets/patterns/pokeball.svg" alt="pokeball" className='absolute -z-50 -top-12'/>
			<Header />
			{pokemons.map(pokemon => (
				<Card pokemon={pokemon} key={pokemon.id} />
			))}
		</section>
	)
}
export default Home
