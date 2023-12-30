import { ReactNode, useState, createContext, useEffect } from 'react'
import Pokemon from '../interfaces/Pokemon'

interface PokemonContext {
	pokemon: Pokemon
	loading: boolean
}

export const PokemonContext = createContext({} as PokemonContext)

export function PokemonProvider({ children }: { children: ReactNode }) {
	const [pokemon, setPokemon] = useState({} as Pokemon)
	const [loading, setLoading] = useState(true)
	const url = 'https://pokeapi.co/api/v2/pokemon/1'

	useEffect(() => {
		const fetchPokemon = async () => {
			const response = await fetch(url)
			const json = await response.text()
			const data = await JSON.parse(json)

			setPokemon(data)
		}

		fetchPokemon()
	}, [])

	useEffect(() => {
		pokemon.name ? setLoading(false) : setLoading(true)
	}, [pokemon])

	return (
		<PokemonContext.Provider value={{ pokemon, loading }}>
			{children}
		</PokemonContext.Provider>
	)
}
