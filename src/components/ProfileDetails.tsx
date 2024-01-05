import { useContext } from "react"
import { PokemonContext } from "../contexts/PokemonContext"

function ProfileDetails() {
    const {pokemon} = useContext(PokemonContext)
	return <section className="bg-white p-8 rounded-t-[40px]">{pokemon.name}</section>
}
export default ProfileDetails
