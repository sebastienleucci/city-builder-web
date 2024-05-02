import React from "react"
import ReactDOM from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div id='canvas-container' className='h-[100dvh] bg-emerald-200'>
			<Canvas shadows camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
				<Experience />
			</Canvas>
		</div>
	</React.StrictMode>
)
