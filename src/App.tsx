import { PokemonContext } from './contexts/PokemonContext'
import { useContext } from 'react'
import Card from './components/Card'
import Loading from './components/Loading'

function App() {
	const { pokemons, loading } = useContext(PokemonContext)

	return (
		<main className="p-10">
			{loading ? (
				<Loading />
			) : (
				pokemons.map(pokemon => <Card pokemon={pokemon} key={pokemon.id} />)
			)}
		</main>
	)
}
export default App
