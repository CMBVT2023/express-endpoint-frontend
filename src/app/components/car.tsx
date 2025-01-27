import { CarObject } from "@/utils/typescript-types"
import Link from "next/link"
import DeleteButton from "./delete-button";

export default function Car(props: CarObject) {
    const editCarQueryData = {...props};

    return (
        <div className="grid grid-cols-5">
            <h2>{props.make}</h2>
            <h2>{props.model}</h2>
            <h2>{props.year}</h2>
            <Link href={{
                pathname: "edit-car",
                query: editCarQueryData
            }}>Edit</Link>
            <DeleteButton id={props.id}/>
        </div>
    )
}
