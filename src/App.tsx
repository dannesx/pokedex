import { PokemonContext } from './contexts/PokemonContext'
import { useContext } from 'react'
import Loading from './components/Loading'
import { Home } from './pages'

function App() {
	const { loading } = useContext(PokemonContext)

	return <main className="p-10">{loading ? <Loading /> : <Home />}</main>
}
export default App
