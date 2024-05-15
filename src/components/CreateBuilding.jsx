import { Residential, Commercial, Industrial, Road } from "./ListBuilding"

export const CreateBuilding = ({ type, coord, size }) => {
	const buildingsType = {
		residential: Residential,
		industrial: Industrial,
		commercial: Commercial,
		road: Road,
	}
	const BuildingType = buildingsType[type]
    
	return <BuildingType {...{ coord, size }} />
}
