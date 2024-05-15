import { useGameMode } from "../store/GameModeStore"

export const ButtonCreateElement = ({ type, icon, mode }) => {
	const { setGameMode, setElementType } = useGameMode()
    
	return (
		<button
			className='hover:cursor-pointer bg-blue-400 p-2 rounded-lg m-2'
			onClick={() => {
				setGameMode(mode)
				setElementType(type)
			}}
		>
			<img src={icon} className='max-w-6' />
		</button>
	)
}
