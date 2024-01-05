import { useContext } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import { PokemonContext } from '../contexts/PokemonContext'
import { useNavigate } from 'react-router-dom'
import ProfileDetails from '../components/ProfileDetails'

function Profile() {
	const { pokemon } = useContext(PokemonContext)
	const mainType = pokemon.types[0].type.name
	const navigate = useNavigate()

	if (!pokemon) navigate('/')

	return (
		<main
			className={`relative grid grid-cols-1 grid-rows-[256px_1fr] min-h-screen bg-${mainType}bg`}
		>
			<ProfileHeader />
			<ProfileDetails />
		</main>
	)
}
export default Profile
