import { OrbitControls, SoftShadows } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function Experience() {
	const box = useRef()

	useFrame((state, delta) => {
		box.current.rotation.y += delta * 0.2
	})

	return (
		<>
			<OrbitControls makeDefault />
			{/* <SoftShadows size={10} frustum={3} samples={10} /> */}
			<directionalLight castShadow intensity={2} position={[1, 2, 3]} />
			<ambientLight intensity={0.2} />

			<mesh castShadow scale={0.5} position-y={1}>
				<sphereGeometry />
				<meshStandardMaterial color='red' />
			</mesh>
			<mesh castShadow scale={0.75} position-y={1} position-x={2} ref={box}>
				<boxGeometry />
				<meshStandardMaterial color='red' />
			</mesh>
			<mesh receiveShadow scale={5} rotation-x={-Math.PI * 0.5}>
				<planeGeometry rotation={[0, 0, 0]} />
				<meshStandardMaterial color='greenyellow' />
			</mesh>
		</>
	)
}

