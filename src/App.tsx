import { PokemonContext } from './contexts/PokemonContext'
import { useContext } from 'react'
import Card from './components/Card'
import Loading from './components/Loading'

function App() {
	const { pokemon, loading } = useContext(PokemonContext)

	return <main className="p-10">{loading ? <Loading /> : <Card pokemon={pokemon} />}</main>
}
export default App
