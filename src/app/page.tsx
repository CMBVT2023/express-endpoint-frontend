"use client"
import Image from "next/image";
import { FormEvent, FormEventHandler, useRef } from "react";
import { ReactFormState } from "react-dom/client";

export default function Home() {
  const makeRef = useRef<HTMLInputElement | null>(null)
  const modelRef = useRef<HTMLInputElement | null>(null)
  const yearRef = useRef<HTMLInputElement | null>(null)
  
  function quickCheck(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    console.log('Submit Works')
    console.log(`
        ${makeRef.current.value}
        ${modelRef.current.value}
        ${yearRef.current.value}
      `)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header>Home</header>
        <main>
          <form onSubmit={quickCheck}>
            <h1>Create New Car</h1>
            <label htmlFor="make-input">Make:</label>
            <input ref={makeRef} id="make-input" placeholder="Make" type="text"/>

            <label htmlFor="model-input">Model:</label>
            <input ref={modelRef} id="model-input" placeholder="Model" type="text"/>

            <label htmlFor="year-input">Year:</label>
            <input ref={yearRef} id="year-input" placeholder="Year" type="number"/>

            <input type="submit"/>
          </form>
        </main>
        <footer>Add any links here</footer>
    </div>
  );
}
