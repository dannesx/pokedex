import { ReactNode, useState, createContext, useEffect } from 'react'
import Pokemon from '../interfaces/Pokemon'

interface PokemonContext {
	pokemon: Pokemon
}

export const PokemonContext = createContext({} as PokemonContext)

export function PokemonProvider({ children }: { children: ReactNode }) {
	const [pokemon, setPokemon] = useState({} as Pokemon)

	useEffect(() => {
		const fetchPokemon = async () => {
			const response = await fetch('/bulbasaur.json')
			const json = await response.text()
			const data = await JSON.parse(json)

			setPokemon(data)
		}

		fetchPokemon()
	}, [])
	return (
		<PokemonContext.Provider value={{ pokemon }}>
			{children}
		</PokemonContext.Provider>
	)
}
