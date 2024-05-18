import { useState } from "react"
import { useGameMode } from "../store/GameModeStore"

export const useHoverBuilding = () => {
	const [color, setColor] = useState("green")

	//Handle hover
	const handlePointerEnter = (e) => {
		if (useGameMode.getState().gameMode !== "destroy") e.stopPropagation() //setColor("red")
	}
	const handlePointerOut = (e) => {
		if (useGameMode.getState().gameMode !== "destroy") e.stopPropagation() //setColor("green")
	}
	return [color, handlePointerEnter, handlePointerOut]
}
