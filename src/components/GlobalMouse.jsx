import { useMouseDown } from "../store/MouseStateStore"
import { useEffect } from "react"

export const GlobalMouse = () => {
	const { setMouse } = useMouseDown()
    
	useEffect(() => {
		const handleMouseDown = () => {
			setMouse(true)
		}

		const handleMouseUp = () => {
			setMouse(false)
		}

		window.addEventListener("mousedown", handleMouseDown)
		window.addEventListener("mouseup", handleMouseUp)

		return () => {
			window.removeEventListener("mousedown", handleMouseDown)
			window.removeEventListener("mouseup", handleMouseUp)
		}
	}, [setMouse])

	return null
}
