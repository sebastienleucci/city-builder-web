import { useState } from "react"
import { useGameMode } from "../store/GameModeStore"

export const useHoverBuilding = () => {
	const [color, setColor] = useState("greenyellow")

	//Handle hover
	const handlePointerEnter  = (e) => {
		e.stopPropagation()
		if (useGameMode.getState().gameMode === "destroy") {
			setColor("red")
		}
	}
	const handlePointerOut  = (e) => {
		e.stopPropagation()
		if (useGameMode.getState().gameMode === "destroy") {
			setColor("greenyellow")
		}
	}
	return [color, handlePointerEnter, handlePointerOut]
}
