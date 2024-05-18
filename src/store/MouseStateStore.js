import { create } from "zustand"

export const useMouseDown = create((set) => ({
	mouse: false,
	setMouse: (newMouse) => set({ mouse: newMouse }),
}))
