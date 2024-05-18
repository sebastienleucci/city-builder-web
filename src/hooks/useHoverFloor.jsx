import { useCallback } from "react"
import { useMouseDown } from "../store/MouseStateStore"

export const useHoverFloor = ({ setHovered, setColor, spawnAsset }) => {
	// Mouse enter
	const handlePointerEnter = useCallback(() => {
		// Update if mouse is down
		const mouseDown = useMouseDown.getState().mouse
		//Always
		if (!mouseDown) {
			setHovered(true)
		}
		// Do the tricks
		if (!spawnAsset && !mouseDown) {
			setColor("red")
		}
	}, [setHovered, setColor, spawnAsset])

	const handlePointerOut = useCallback(() => {
		//Always
		setHovered(false)
		// Do the tricks
		if (!spawnAsset) {
			setColor("greenyellow")
		}
	}, [setHovered, setColor, spawnAsset])

	return { handlePointerEnter, handlePointerOut }
}
