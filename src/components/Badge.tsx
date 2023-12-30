interface Props {
	type: string
}

function Badge({ type }: Props) {
	return (
		<div className={`inline-flex items-center gap-1 py-1 px-2 bg-${type}bg rounded`}>
			<img src={`/assets/types/${type}.svg`} alt={type} className="text-white fill-white w-4"/>
			<span className="font-bold capitalize text-white leading-none text-xs">{type}</span>
		</div>
	)
}
export default Badge
