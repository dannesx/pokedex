function Search() {
	return (
		<div className="relative">
			<input
				type="text"
				name="search"
				id="search"
				placeholder="What Pokémon are you looking for?"
				className="w-full px-6 py-5 pl-14 bg-default_input rounded-lg focus:bg-pressed_input"
			/>
			<img
				src="/assets/icons/search.svg"
				alt="search"
				className="absolute inset-0 left-6 top-1/2 -translate-y-1/2"
			/>
		</div>
	)
}
export default Search
