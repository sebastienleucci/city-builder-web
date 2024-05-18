import React, { useState, forwardRef } from "react"
import { useGameMode } from "../store/GameModeStore"
import { CreateBuilding } from "./CreateBuilding"
import { CreateBuildingHover } from "./CreateBuildingHover"
import { useHoverFloor } from "../hooks/useHoverFloor"
import { DestroyBuildingHover } from "./ListBuildingHover"

export const TileFloor = forwardRef(({ index, coord, size }, ref) => {
	/*
	// Work but only on desktop find a solution to trigger one time before a click and it's fine unless it won't work on mobile
	// const [gameMode, setGameMode] = useState(useGameMode((state) => state.gameMode))
	// const gameMode = useGameMode((state) => state.gameMode)
	// const buildingType = useGameMode.getState().elementType
    */

	//From Zustand re-render everytime gameMode/bulidingType Change
	const gameMode = useGameMode((state) => state.gameMode)
	const buildingType = useGameMode((state) => state.elementType)

	//Set States
	const [color, setColor] = useState("greenyellow")
	const [hovered, setHovered] = useState(false)
	const [spawnAsset, setSpawnAsset] = useState(false)
	const [spawnType, setSpawnType] = useState("")

	//Hover Pointer section
	const { handlePointerEnter, handlePointerOut } = useHoverFloor({ setHovered, setColor, spawnAsset })

	//Handle Spawn
	const handleClick = () => {
		if (gameMode === "build" && spawnAsset === false) {
			setSpawnAsset(true)
			setSpawnType(buildingType)
			setColor("greenyellow")
		}
		if (gameMode === "destroy" && spawnAsset === true) {
			setSpawnAsset(false)
		}
	}

	return (
		<>
			<mesh
				receiveShadow
				scale={1}
				rotation-x={-Math.PI * 0.5}
				position={[coord.x - size / 2, 0, coord.y - size / 2]}
				onPointerEnter={handlePointerEnter}
				onPointerOut={handlePointerOut}
				onClick={handleClick}
				ref={ref}
			>
				<planeGeometry />
				<meshStandardMaterial color={color} />
			</mesh>
			{!spawnAsset && hovered && gameMode === "build" && (
				<CreateBuildingHover type={buildingType} {...{ coord, size }} />
			)}
			{spawnAsset && hovered && gameMode === "destroy" && (
				<DestroyBuildingHover type={buildingType} {...{ coord, size }} />
			)}
			{spawnAsset && <CreateBuilding type={spawnType} {...{ coord, size }} />}
		</>
	)
})
