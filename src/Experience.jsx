import { OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei"
import React from "react"
import { CreateFloor } from "./components/CreateFloor"
import { GlobalUi } from "./GlobalUi.jsx"
import { Canvas } from "@react-three/fiber"
import { GlobalMouse } from "./components/GlobalMouse.jsx"
import { Perf } from "r3f-perf"

export default function Experience() {

	return (
		<main id='canvas-container' className='h-[100dvh] bg-emerald-200'>
			<GlobalUi />
			<GlobalMouse />
			<Canvas shadows camera={{ fov: 45, near: 0.1, far: 200, position: [8, 10, 8] }}>
				{/* Base Controls */}
				<OrbitControls dampingFactor={0.1} rotateSpeed={0.2} panSpeed={0.2} />
				<directionalLight castShadow intensity={2} position={[1, 2, 3]} />
				<ambientLight intensity={0.2} />
                <Perf />
				{/* World */}
				<CreateFloor size={8} />
			</Canvas>
		</main>
	)
}
