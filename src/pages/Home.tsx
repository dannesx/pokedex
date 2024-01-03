import { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../contexts/PokemonContext'
import Card from '../components/Card'
import Header from '../components/Header'
import Loading from '../components/Loading'
import TopPage from '../components/TopPage'

function Home() {
	const [scrolled, setScrolled] = useState(false)
	const { pokemons, loading, nextPagination, query } =
		useContext(PokemonContext)

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			if (entries.some(entry => entry.isIntersecting) && !query) {
				nextPagination()
			}
		})
		const flag = document.querySelector('#flag')
		if (flag) observer.observe(flag)

		return () => observer.disconnect()
	}, [nextPagination])

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 500)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<section className="relative">
			<img
				src="/assets/patterns/pokeball.svg"
				alt="pokeball"
				className="absolute -z-50 -top-12"
			/>
			<Header />
			{loading ? (
				<Loading />
			) : pokemons.length ? (
				pokemons.map(pokemon => <Card pokemon={pokemon} key={pokemon.id} />)
			) : (
				<p className="text-center text-gray">Pókemon not found 😢</p>
			)}
			<div className="invisible" id="flag"></div>
			{scrolled ? <TopPage /> : null}
		</section>
	)
}
export default Home
