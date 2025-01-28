"use client"
import { FormEvent, useEffect, useRef } from "react";
import UserInput from "../components/UserInput";
import useLogIn from "@/queries/login-request";
import { redirect } from "next/navigation";

export default function UserLogIn() {
    const userNameRef = useRef<HTMLInputElement | null>(null)
    const userKeyRef = useRef<HTMLInputElement | null>(null)
    const {error, mutateAsync, isSuccess} = useLogIn();

    useEffect(() => {
        if (isSuccess) redirect('/');
    }, [isSuccess])

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (userNameRef.current && userKeyRef.current) {
            mutateAsync({
                userName: userNameRef?.current?.value,
                userKey: userKeyRef?.current?.value
            })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
            <UserInput inputType="text" labelName="User Name" inputRef={userNameRef}/>
            <UserInput inputType="password" labelName="Password" inputRef={userKeyRef}/>
            <input type="submit" value="Log In" />
        </form>
    )
}
