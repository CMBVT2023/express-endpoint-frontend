"use client"
import usePutRequest from "@/queries/put-request"; 
import type { CarObject } from "@/utils/typescript-types"
import { FormEvent, useEffect, useState } from "react";
import UserInput from "../components/UserInput";
import { redirect } from "next/navigation";

export default function EditForm(props: Omit<CarObject, "deleted_flag">) {
    const { mutateAsync, error, isSuccess } = usePutRequest({associatedKeyString: "allCars", endpointString: "car"})
    const [ carMake, setCarMake ] = useState<string>(props.make)
    const [ carModel, setCarModel ] = useState<string>(props.model)
    const [ carYear, setCarYear ] = useState<string>(props.year.toString())

    useEffect(() => {
        if (isSuccess) redirect('/')
    }, [isSuccess])

    function quickCheck(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        
        if (carMake && carModel && carYear) {
            mutateAsync({
                make: carMake,
                model: carModel,
                year: parseInt(carYear),
                id: props.id
            })
        }
    }

    return (
        <>
            {error && <h2>{error.message}</h2>}
            <form onSubmit={quickCheck} className="flex flex-col justify-center items-center">
                <UserInput labelName="Make" value={carMake} alter={setCarMake} />
                <UserInput labelName="Model" value={carModel} alter={setCarModel} />
                <UserInput labelName="Year" value={carYear} alter={setCarYear} />
                <input type="submit" value="Edit Entry"/>
            </form>
        </>
    )
}
