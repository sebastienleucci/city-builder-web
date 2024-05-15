import { OrbitControls } from "@react-three/drei"
import React from "react"
import { CreateFloor } from "./components/CreateFloor"
import { GlobalUi } from "./GlobalUi.jsx"
import { Canvas } from "@react-three/fiber"
export default function Experience() {
    return (
		<main id='canvas-container' className='h-[100dvh] bg-emerald-200'>
			<GlobalUi />

			<Canvas shadows camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
				{/* Base Controls */}
				<OrbitControls makeDefault />
				<directionalLight castShadow intensity={2} position={[1, 2, 3]} />
				<ambientLight intensity={0.2} />
				{/* World */}
				<CreateFloor size={4} />
			</Canvas>
		</main>
	)
}
