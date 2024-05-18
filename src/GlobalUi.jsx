import { ButtonCreateElement } from "./components/ButtonCreateElement"
import { useGameMode } from "./store/GameModeStore"

export const GlobalUi = () => {

	return (
		<div className='absolute top-0 left-0 w-full z-10 pointer-events-none'>
			<Header />
			<ul className='flex flex-col w-min pointer-events-auto'>
				<ButtonCreateElement icon={"/icons/cursor-2.svg"} type='' mode='play' />
				<ButtonCreateElement icon={"/icons/home-1.svg"} type='residential' mode='build' />
				<ButtonCreateElement icon={"/icons/box.svg"} type='industrial' mode='build' />
				<ButtonCreateElement icon={"/icons/shopping-bags.svg"} type='commercial' mode='build' />
				<ButtonCreateElement icon={"/icons/flip-vertical.svg"} type='road' mode='build' />
				<ButtonCreateElement icon={"/icons/layer-off-1.svg"} type='' mode='destroy' />
			</ul>
		</div>
	)
}

const Header = () => {
	const gameMode = useGameMode((state) => state.gameMode)
	const elementType = useGameMode((state) => state.elementType)
	return (
		<div className='absolute left-1/2 -translate-x-1/2 min-w-44'>
			<h1>City Builder</h1>
			<p>Game Mode : {gameMode}</p>
			<p>Type : {elementType}</p>
		</div>
	)
}
