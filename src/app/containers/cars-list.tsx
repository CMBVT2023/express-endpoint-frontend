"use client"
import useGetRequest from "@/queries/get-request" 
import Car from "../components/car"
import { CarObject } from "@/utils/typescript-types"

export default function CarsList() {
    const { data, error, isLoading} = useGetRequest({keyString: 'allCars', endpointString: "cars"})

    const RenderCars = () => {
        return isLoading ? <h2>Gathering All Car Data</h2> : 
                <>
                {data && data.map((car: CarObject) => <Car 
                    key={`${car.id}`}
                    make={car.make}
                    model={car.model}
                    year={car.year}
                    deleted_flag={car.deleted_flag}
                    id={car.id}
                    />)}
                </>}


    return (
        <>
            {error && <h2>{error.message}</h2>}
            <RenderCars />
        </>
    )
}
