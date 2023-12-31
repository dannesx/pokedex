import { useContext } from 'react'
import { PokemonContext } from '../contexts/PokemonContext'
import Card from '../components/Card'
import Header from '../components/Header'
import Loading from '../components/Loading'

function Home() {
	const { pokemons, loading } = useContext(PokemonContext)
	return (
		<section className="relative">
			<img
				src="/assets/patterns/pokeball.svg"
				alt="pokeball"
				className="absolute -z-50 -top-12"
			/>
			<Header />
			{loading ? (
				<Loading />
			) : (
				pokemons.map(pokemon => <Card pokemon={pokemon} key={pokemon.id} />)
			)}
		</section>
	)
}
export default Home
