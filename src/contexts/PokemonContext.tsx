import { ReactNode, useState, createContext, useEffect } from 'react'
import Pokemon from '../interfaces/Pokemon'

interface PokemonContext {
	pokemons: Pokemon[]
	loading: boolean
}

export const PokemonContext = createContext({} as PokemonContext)

export function PokemonProvider({ children }: { children: ReactNode }) {
	const [pokemons, setPokemons] = useState([] as Pokemon[])
	const [loading, setLoading] = useState(true)
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'

	useEffect(() => {
		const fetchPokemon = async () => {
			const response = await fetch(url)
			const json = await response.text()
			const data = await JSON.parse(json)

			const promises = data.results.map(async (pokemon: { url: string }) => {
				const response = await fetch(pokemon.url)
				const json = await response.text()
				const data = await JSON.parse(json)
				return data
			})

			try {
				const responses = await Promise.all(promises)
				setPokemons([...responses])
				setLoading(false)
			} catch (error) {
				console.error('Erro ao buscar Pokémon:', error)
				// Trate o erro aqui, como exibir uma mensagem de erro
			}
		}

		fetchPokemon()
	}, [])

	return (
		<PokemonContext.Provider value={{ pokemons, loading }}>
			{children}
		</PokemonContext.Provider>
	)
}
