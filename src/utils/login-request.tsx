"use client"
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { URLContext } from "@/utils/context-provider";
import { useContext } from "react";
import saveUserLogin from "./user-cookies";

type UserData = {
    userName: string;
    userKey: string;
}

export default function useLogIn() {
    const baseURL = useContext(URLContext);
    const serverURL = `${baseURL}/log-in`;

    const {error, mutateAsync, isSuccess} = useMutation({
        mutationFn: makePostRequest
    })

    async function makePostRequest(requestBody: UserData) {
        const {userName, userKey} = requestBody;
        const response = await axios({
            method: "post",
            url: serverURL,
            data: {
                userName, 
                userKey
            }
        })
        return response.data;
    }

    return {error, mutateAsync, isSuccess}
}
