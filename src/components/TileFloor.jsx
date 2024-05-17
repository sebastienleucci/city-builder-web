import React, { useState } from "react"
import { useGameMode } from "../store/GameModeStore"
import { CreateBuilding } from "./CreateBuilding"
import { CreateBuildingHover } from "./CreateBuildingHover"

export const TileFloor = ({ index, coord, size }) => {
	//Get Mode and Type Global Values
	const gameMode = useGameMode.getState().gameMode
	const buildingType = useGameMode.getState().elementType
	//Set States
	const [color, setColor] = useState("greenyellow")
	const [hovered, setHovered] = useState(false)
	const [spawnAsset, setSpawnAsset] = useState(false)
	const [spawnType, setSpawnType] = useState("")

	//Hover Pointer section
	const onPointerEnter = (e) => {
		e.stopPropagation()
		if (!spawnAsset) {
			setColor("red")
			setHovered(true)
		}
	}
	const onPointerOut = (e) => {
		e.stopPropagation()
		if (!spawnAsset) {
			setHovered(false)
			setColor("greenyellow")
		}
	}

    //Handle Spawn
	const handleSpawnAsset = () => {
		if (gameMode === "build" && spawnAsset === false) {
			setSpawnAsset(true)
			setSpawnType(buildingType)
			setColor("greenyellow")
		}
	}
	//Handle Destroy
	const handleDestroyAsset = () => {
		setSpawnAsset(false)
	}

	return (
		<>
			<mesh
				receiveShadow
				scale={1}
				rotation-x={-Math.PI * 0.5}
				position={[coord.x - size / 2, 0, coord.y - size / 2]}
				onPointerEnter={onPointerEnter}
				onPointerOut={onPointerOut}
				onClick={handleSpawnAsset}
			>
				<planeGeometry />
				<meshStandardMaterial color={color} />
			</mesh>
			{!spawnAsset && hovered && gameMode === "build" && (
				<CreateBuildingHover type={buildingType} {...{ coord, size }} />
			)}
			{spawnAsset && <CreateBuilding type={spawnType} {...{ coord, size, handleDestroyAsset }} />}
		</>
	)
}

// const gameMode = useGameMode((state) => state.gameMode)
// const buildingType = useGameMode((state) => state.buildingType)
