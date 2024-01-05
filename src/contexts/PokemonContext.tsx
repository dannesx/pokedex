import { ReactNode, useState, createContext, useEffect, useRef } from 'react'
import Pokemon from '../interfaces/Pokemon'

interface PokemonContext {
	pokemons: Pokemon[]
	pokemon: Pokemon
	loading: boolean
	query: string
	id: number
	handleQuery: (data: string) => void
	nextPagination: () => void
	selectPokemon: (id: number) => void
}

export const PokemonContext = createContext({} as PokemonContext)

export function PokemonProvider({ children }: { children: ReactNode }) {
	const [apiList, setApiList] = useState<Pokemon[]>([])
	const [pokemons, setPokemons] = useState<Pokemon[]>([])
	const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon)
	const [loading, setLoading] = useState(true)
	const [id, setId] = useState(1)
	const [query, setQuery] = useState('')
	const apiUrl = useRef('https://pokeapi.co/api/v2/pokemon')
	const count = useRef(0)

	useEffect(() => {
		const interval = setInterval(() => {
			fetchPokemon(apiUrl.current)
			if (apiList.length == count.current) clearInterval(interval)
		}, 500)

		fetchPokemon(apiUrl.current)

		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		if (query) {
			const search = apiList.filter(
				item =>
					item.name.toLowerCase().includes(query) || item.id.toString() == query
			)
			setPokemons(search)
		} else {
			setPokemons(apiList)
		}
	}, [query, apiList])

	useEffect(() => {
		const selectedPokemon = apiList.filter(pokemon => id === pokemon.id).pop()

		if (selectedPokemon) setPokemon(selectedPokemon)
		else setPokemon(apiList[0])
	}, [id, apiList])

	const fetchPokemon = async (url: string) => {
		const response = await fetch(url)
		const json = await response.text()
		const data = await JSON.parse(json)

		apiUrl.current = data.next
		count.current = data.count

		const promises = data.results.map(async (pokemon: { url: string }) => {
			const response = await fetch(pokemon.url)
			const json = await response.text()
			const data = await JSON.parse(json)
			return data
		})

		try {
			const responses = await Promise.all(promises)
			setApiList(prev => [...prev, ...responses])
			setLoading(false)
		} catch (error) {
			console.error('Erro ao buscar Pokémon:', error)
		}
	}

	const handleQuery = (data: string) => {
		setQuery(data)
		console.log(data)
	}

	const nextPagination = () => {
		console.log('Next Page')
	}

	const selectPokemon = (id: number) => {
		setId(id)
	}

	return (
		<PokemonContext.Provider
			value={{
				pokemons,
				pokemon,
				loading,
				query,
				id,
				handleQuery,
				nextPagination,
				selectPokemon,
			}}
		>
			{children}
		</PokemonContext.Provider>
	)
}
