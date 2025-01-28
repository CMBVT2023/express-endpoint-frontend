"use client";
import { createContext } from "react";

interface ContextProviderProps {
  children: React.ReactNode;
}

export const URLContext = createContext<string | null>(null);

export default function URLContextProvider({ children }: ContextProviderProps) {
  return (
    // Wraps all child elements in a context provider to allow access to the url value to make it easier to change later.
    <URLContext.Provider value="http://localhost:5000">
      {children}
    </URLContext.Provider>
  );
}
