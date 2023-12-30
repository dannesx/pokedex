import { PokemonContext } from './contexts/PokemonContext'
import { useContext } from 'react'
import Card from './components/Card'

function App() {
	const { pokemon } = useContext(PokemonContext)

	return (
		<div>
			<Card pokemon={pokemon} />
		</div>
	)
}
export default App
