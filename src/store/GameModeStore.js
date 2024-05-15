import { create } from "zustand"

export const useGameMode = create((set) => ({
	gameMode: "play",
	elementType: "",
	setGameMode: (newGameMode) => set({ gameMode: newGameMode }),
	setElementType: (newElementType) => set({ elementType: newElementType }),
}))
