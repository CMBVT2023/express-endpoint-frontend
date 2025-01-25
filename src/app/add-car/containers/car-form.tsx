"use client"
import { FormEvent, useRef } from "react";
import UserInput from "../components/UserInput";

export default function CarForm() {
    const makeRef = useRef<HTMLInputElement | null>(null)
    const modelRef = useRef<HTMLInputElement | null>(null)
    const yearRef = useRef<HTMLInputElement | null>(null)

    function quickCheck(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
    
        
      }

    return (
        <form onSubmit={quickCheck} className="flex flex-col justify-center items-center">
            <UserInput inputRef={makeRef} labelName="Make"/>
            <UserInput inputRef={modelRef} labelName="Model"/>
            <UserInput inputRef={yearRef} labelName="Year"/>

            <input type="submit"/>
        </form>
    )
}
