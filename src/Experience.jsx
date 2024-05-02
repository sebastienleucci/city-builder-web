import { OrbitControls, RoundedBox, SoftShadows } from "@react-three/drei"
import React, { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"

export default function Experience() {
	return (
		<>
			{/* Base Controls */}
			<OrbitControls makeDefault />
			<directionalLight castShadow intensity={2} position={[1, 2, 3]} />
			<ambientLight intensity={0.2} />
			{/* <SoftShadows size={10} frustum={3} samples={10} /> */}

			{/* World */}
			<CreateCity size={10} />

			{/* <BaseMeshExample /> */}
		</>
	)
}

function createBaseGrid(size) {
	return Array.from({ length: size }, (_, x) => Array.from({ length: size }, (_, y) => ({ x, y })))
}

const CreateCity = ({ size }) => {
	const myGrid = createBaseGrid(size)
	const flatGrid = myGrid.flat()

	return (
		<React.Fragment>
			{flatGrid.map((coord, index) => (
				<mesh
					key={index}
					receiveShadow
					scale={1}
					rotation-x={-Math.PI * 0.5}
					position={[coord.x - size / 2, 0, coord.y - size / 2]}
				>
					<planeGeometry rotation={[0, 0, 0]} />
					<meshStandardMaterial color='greenyellow' />
				</mesh>
			))}
		</React.Fragment>
	)
}

/* <RoundedBox key={index} args={[1, 0.25, 1]} radius={0.01} position={[coord.x - size / 2, 0, coord.y - size / 2]}>
	<meshLambertMaterial attach='material' color='grey' />
</RoundedBox> */
// const CreateCity = (size) => {
// 	const myGrid = createBaseGrid(size)

// 	return (
// 		<>
// 			{myGrid.flat().map((coord, index) => (

// 				<RoundedBox key={index} args={[1, 0.25, 1]} radius={0.01}>
// 					<meshLambertMaterial attach='material' color={"grey"} />
// 				</RoundedBox>
// 			))}
// 		</>
// 	)
// }

const BaseMeshExample = () => {
	const box = useRef()

	useFrame((state, delta) => {
		box.current.rotation.y += delta * 0.2
	})

	return (
		<>
			<mesh receiveShadow scale={5} rotation-x={-Math.PI * 0.5}>
				<planeGeometry rotation={[0, 0, 0]} />
				<meshStandardMaterial color='greenyellow' />
			</mesh>
			<mesh castShadow scale={0.3} position-y={1}>
				<sphereGeometry />
				<meshStandardMaterial color='red' />
			</mesh>
			<mesh castShadow scale={0.6} position-y={1} position-x={2} ref={box}>
				<boxGeometry />
				<meshStandardMaterial color='red' />
			</mesh>
		</>
	)
}
