import { ReactNode, useState, createContext, useEffect } from 'react'
import Pokemon from '../interfaces/Pokemon'

interface PokemonContext {
	pokemons: Pokemon[]
	loading: boolean
	query: string
	handleQuery: (data: string) => void
	nextPagination: () => void
}

export const PokemonContext = createContext({} as PokemonContext)

export function PokemonProvider({ children }: { children: ReactNode }) {
	const [apiList, setApiList] = useState([] as Pokemon[])
	const [pokemons, setPokemons] = useState([] as Pokemon[])
	const [loading, setLoading] = useState(true)
	const [query, setQuery] = useState('')
	const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
	const [nextUrl, setNextUrl] = useState('')
	const [fetchTimes, setFetchTimes] = useState(0)

	useEffect(() => {
		const fetchPokemon = async () => {
			const response = await fetch(url)
			const json = await response.text()
			const data = await JSON.parse(json)

			setNextUrl(data.next)

			const promises = data.results.map(async (pokemon: { url: string }) => {
				const response = await fetch(pokemon.url)
				const json = await response.text()
				const data = await JSON.parse(json)
				return data
			})

			try {
				const responses = await Promise.all(promises)
				setPokemons(prev => [...prev, ...responses])
				setApiList(prev => [...prev, ...responses])
				setLoading(false)
			} catch (error) {
				console.error('Erro ao buscar Pokémon:', error)
				// Trate o erro aqui, como exibir uma mensagem de erro
			}
		}
		if (fetchTimes == 0) {
			setFetchTimes(prev => prev + 1)
			return
		}
		fetchPokemon()
	}, [url, fetchTimes])

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

	const handleQuery = (data: string) => {
		setQuery(data)
		console.log(data)
	}

	const nextPagination = () => {
		setUrl(nextUrl)
	}

	return (
		<PokemonContext.Provider
			value={{ pokemons, loading, query, handleQuery, nextPagination }}
		>
			{children}
		</PokemonContext.Provider>
	)
}
