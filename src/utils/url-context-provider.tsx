"use client"
import { createContext } from "react"

interface ContextProviderProps {
    children: React.ReactNode
}

export const URLContext = createContext<string | null>(null) 

export default function URLContextProvider({children}: ContextProviderProps) {
    return (
        <URLContext.Provider value="http://localhost:5000">
            {children}
        </URLContext.Provider>
    )
}
