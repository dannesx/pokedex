import { Search } from "./Inputs"

function Header() {
	return (
		<header className="mb-10">
			<div className="flex gap-5 justify-end mb-8">
				<img src="/assets/icons/generation.svg" alt="generation" />
				<img src="/assets/icons/sort.svg" alt="sort" />
				<img src="/assets/icons/filter.svg" alt="filter" />
			</div>

			<h1>Pokédex</h1>
			<p className="text-gray mb-6">
				Search for Pokémon by name or using the National Pokédex number.
			</p>

			<Search />
		</header>
	)
}
export default Header
