"use client"
import { FormEvent, useRef } from "react";
import UserInput from "../components/UserInput";
import usePostRequest from "@/utils/post-request";

export default function AddForm() {
    const makeRef = useRef<HTMLInputElement | null>(null)
    const modelRef = useRef<HTMLInputElement | null>(null)
    const yearRef = useRef<HTMLInputElement | null>(null)
    const {data, error, mutateAsync: addNewCar, isSuccess} = usePostRequest({associatedKeyString: 'addCar', endpointString: 'car'})

    function quickCheck(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        
        if (makeRef.current && modelRef.current && yearRef.current) {
            addNewCar({
                make: makeRef?.current?.value,
                model: modelRef?.current?.value,
                year: parseInt(yearRef?.current?.value)
            })
        }
      }

      const RenderForm = () => {
        return data && isSuccess ?
            <h1>Car Entry Created</h1> :
            <form onSubmit={quickCheck} className="flex flex-col justify-center items-center">
                <UserInput inputRef={makeRef} labelName="Make"/>
                <UserInput inputRef={modelRef} labelName="Model"/>
                <UserInput inputRef={yearRef} labelName="Year"/>
                <input type="submit" value="Create New Entry"/>
            </form>
      }

    return (
        <>
            {error && <h1>{error.message}</h1>}
            <RenderForm />
        </>
    )
}
