export const PreResidential = ({ coord, size }) => {
	return (
		<mesh scale={0.5} position={[coord.x - size / 2, 0.25, coord.y - size / 2]}>
			<boxGeometry rotation={[0, 0, 0]} />
			<meshStandardMaterial opacity={0.9} transparent={true} />
		</mesh>
	)
}
export const PreIndustrial = ({ coord, size }) => {
	return (
		<mesh scale={[0.4, 1.2, 0.4]} position={[coord.x - size / 2, 0.6, coord.y - size / 2]}>
			<boxGeometry rotation={[0, 0, 0]} />
			<meshStandardMaterial opacity={0.9} transparent={true} />
		</mesh>
	)
}
export const PreCommercial = ({ coord, size }) => {
	return (
		<mesh scale={[0.6, 0.8, 0.6]} position={[coord.x - size / 2, 0.4, coord.y - size / 2]}>
			<boxGeometry rotation={[0, 0, 0]} />
			<meshStandardMaterial opacity={0.9} transparent={true} />
		</mesh>
	)
}
export const PreRoad = ({ coord, size }) => {
	return (
		<mesh scale={[1, 0.1, 0.5]} position={[coord.x - size / 2, 0.05, coord.y - size / 2]}>
			<boxGeometry rotation={[0, 0, 0]} />
			<meshStandardMaterial opacity={0.9} transparent={true} />
		</mesh>
	)
}

export const DestroyBuildingHover = ({ coord, size }) => {
	return (
		<mesh scale={[1, 1.5, 1]} position={[coord.x - size / 2, 0.6, coord.y - size / 2]}>
			<boxGeometry rotation={[0, 0, 0]} />
			<meshStandardMaterial opacity={0.5} color={"red"} transparent={true} />
		</mesh>
	)
}
