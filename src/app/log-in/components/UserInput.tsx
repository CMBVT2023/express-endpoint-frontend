import { RefObject } from "react";

interface UserInputProps {
    labelName: string;
    inputRef: RefObject<HTMLInputElement | null>;
    inputType: string;
}

export default function UserInput({labelName, inputRef, inputType}: UserInputProps) {
    return (
        <>
            <label htmlFor={`input-${labelName}`}>{labelName}</label>
            <input ref={inputRef} id={`input-${labelName}`} placeholder="labelName" type={inputType} />
        </>
    )
}