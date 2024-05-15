import React from "react"
import { TileFloor } from "./TileFloor"
import grid from "../assets/json/grid-4.json"

export const CreateFloor = ({ size }) => {
	/* 
    Si besoin de créer via createBaseGrid !
	const myGrid = createBaseGrid(size)
	const flatGrid = myGrid.flat()
    */
	const flatGrid = grid.baseGrid

	return (
		<React.Fragment>
			{flatGrid.map((coord, index) => (
				<TileFloor key={index} {...{ coord, size }} />
			))}
		</React.Fragment>
	)
}

// function createBaseGrid(size) {
// 	return Array.from({ length: size }, (_, x) => Array.from({ length: size }, (_, y) => ({ x, y })))
// }
