import { Canvas } from "@react-three/fiber"
import World from "./World"

function App() {
	return (
		<div id='canvas-container' className='h-[100dvh] bg-emerald-200'>
			<Canvas shadows camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
				<World />
			</Canvas>
		</div>
	)
}

export default App
