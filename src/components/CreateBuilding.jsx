import { Residential, Commercial, Industrial, Road } from "./ListBuilding"

export const CreateBuilding = ({ type, coord, size, handleDestroyAsset }) => {

	const buildingsType = {
		residential: Residential,
		industrial: Industrial,
		commercial: Commercial,
		road: Road,
	}
	const BuildingType = buildingsType[type]

	return <BuildingType {...{ coord, size, handleDestroyAsset }} />
}
