"use client"
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { URLContext } from "./context-provider";

type PostData = {
    model: string;
    make: string;
    year: number;
}

interface UsePostRequestProps {
    keyString: string;
    endpointString: string;
}

export default function usePostRequest({keyString, endpointString}: UsePostRequestProps) {
    const baseURL = useContext(URLContext);
    const serverURL = `${baseURL}/${endpointString}`

    const {data, error, mutateAsync, isSuccess} = useMutation({
        mutationKey: [keyString],
        mutationFn: makePostRequest
    })

    async function makePostRequest(requestBody: PostData) {
        const {make, model, year} = requestBody;
        const response = await axios({
            method: "post",
            url: serverURL,
            data: {
                model,
                make,
                year
            }
        })
        return response.data;
    }

    function alertUser() {

    }

    return {data, error, mutateAsync, isSuccess}
}
