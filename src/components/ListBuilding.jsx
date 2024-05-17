import { useHoverBuilding } from "../hooks/useHoverBuilding"
import { useState, useEffect } from "react"
import { useGameMode } from "../store/GameModeStore"

export const Residential = ({ coord, size, handleDestroyAsset }) => {
	const [color, handlePointerEnter, handlePointerOut] = useHoverBuilding()

	//Handle Click
	const handleClick = () => {
		if (useGameMode.getState().gameMode === "destroy") handleDestroyAsset()
	}

	return (
		<mesh
			scale={0.5}
			position={[coord.x - size / 2, 0.25, coord.y - size / 2]}
			onPointerEnter={handlePointerEnter}
			onPointerOut={handlePointerOut}
			onClick={handleClick}
		>
			<boxGeometry rotation={[0, 0, 0]} />
			<meshStandardMaterial color={color} />
		</mesh>
	)
}

export const Industrial = ({ coord, size, handleDestroyAsset }) => {
	const [color, handlePointerEnter, handlePointerOut] = useHoverBuilding()

	//Handle Click
	const handleClick = () => {
		if (useGameMode.getState().gameMode === "destroy") handleDestroyAsset()
	}
	return (
		<mesh
			scale={[0.4, 1.2, 0.4]}
			position={[coord.x - size / 2, 0.6, coord.y - size / 2]}
			onPointerEnter={handlePointerEnter}
			onPointerOut={handlePointerOut}
			onClick={handleClick}
		>
			<boxGeometry rotation={[0, 0, 0]} />
			<meshStandardMaterial color={color} />
		</mesh>
	)
}
export const Commercial = ({ coord, size, handleDestroyAsset }) => {
	return (
		<mesh scale={[0.6, 0.8, 0.6]} position={[coord.x - size / 2, 0.4, coord.y - size / 2]}>
			<boxGeometry rotation={[0, 0, 0]} />
			<meshStandardMaterial color={"green"} />
		</mesh>
	)
}
export const Road = ({ coord, size, handleDestroyAsset }) => {
	return (
		<mesh scale={[1, 0.1, 0.5]} position={[coord.x - size / 2, 0.05, coord.y - size / 2]}>
			<boxGeometry rotation={[0, 0, 0]} />
			<meshStandardMaterial color={"green"} />
		</mesh>
	)
}
