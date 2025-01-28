"use client"
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { URLContext } from "@/utils/url-context-provider";
import { useContext } from "react";
import { UserData } from "@/utils/typescript-types";
import storeUserLogin from "@/api/store-user-login";
import { redirect } from "next/navigation"; 

type UserData = {
    userName: string;
    userKey: string;
}

export default function useLogIn() {
    const baseURL = useContext(URLContext);
    const serverURL = `${baseURL}/log-in`;

    const {error, mutateAsync, isSuccess} = useMutation({
        mutationFn: makePostRequest,
        onSuccess: saveUser
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

    async function saveUser(responseData: ResponseData) {
        const isUserTokenStored = await storeUserLogin(responseData);

        if (isUserTokenStored) redirect('/')
    }

    return {error, mutateAsync, isSuccess}
}
