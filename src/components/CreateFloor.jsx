import React from "react"
import { TileFloor } from "./TileFloor"
// import grid from "../assets/json/grid-4.json"
import grid from "../assets/json/grid-9.json"
import { useRef } from "react"
import { RoundedBox } from "@react-three/drei"

export const CreateFloor = ({ size }) => {
	const flatGrid = grid.baseGrid
	// Create refs array to store refs of each TileFloor component
	const tileFloorRefs = useRef([])

	return (
		<React.Fragment>
			{flatGrid.map((coord, index) => (
				<TileFloor
					key={index}
					index={index}
					coord={coord}
					size={size}
					ref={(el) => (tileFloorRefs.current[index] = el)}
				/>
			))}
			<RoundedBox onClick={() => console.log(tileFloorRefs)} />
		</React.Fragment>
	)
}

/* 
Si besoin de créer via createBaseGrid !
const myGrid = createBaseGrid(size)
const flatGrid = myGrid.flat()
*/

// function createBaseGrid(size) {
// 	return Array.from({ length: size }, (_, x) => Array.from({ length: size }, (_, y) => ({ x, y })))
// }
