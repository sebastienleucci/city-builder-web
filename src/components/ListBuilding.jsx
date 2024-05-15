export const Residential = ({ coord, size }) => {
	return (
		<mesh scale={0.5} position={[coord.x - size / 2, 0.25, coord.y - size / 2]}>
			<boxGeometry rotation={[0, 0, 0]} />
			<meshStandardMaterial color={"green"} />
		</mesh>
	)
}
export const Industrial = ({ coord, size }) => {
	return (
		<mesh scale={[0.4, 1.2, 0.4]} position={[coord.x - size / 2, 0.6, coord.y - size / 2]}>
			<boxGeometry rotation={[0, 0, 0]} />
			<meshStandardMaterial color={"green"} />
		</mesh>
	)
}
export const Commercial = ({ coord, size }) => {
	return (
		<mesh scale={[0.6, 0.8, 0.6]} position={[coord.x - size / 2, 0.4, coord.y - size / 2]}>
			<boxGeometry rotation={[0, 0, 0]} />
			<meshStandardMaterial color={"green"} />
		</mesh>
	)
}
export const Road = ({ coord, size }) => {
	return (
		<mesh scale={[1, 0.1, 0.5]} position={[coord.x - size / 2, 0.05, coord.y - size / 2]}>
			<boxGeometry rotation={[0, 0, 0]} />
			<meshStandardMaterial color={"green"} />
		</mesh>
	)
}
