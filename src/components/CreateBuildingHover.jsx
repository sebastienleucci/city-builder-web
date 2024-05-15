import { PreResidential, PreCommercial, PreIndustrial, PreRoad } from "./ListBuildingHover"

export const CreateBuildingHover = ({ type, coord, size }) => {
	const buildingsType = {
		residential: PreResidential,
		industrial: PreIndustrial,
		commercial: PreCommercial,
		road: PreRoad,
	}
	const BuildingType = buildingsType[type]

	return <BuildingType {...{ coord, size }} />
}
