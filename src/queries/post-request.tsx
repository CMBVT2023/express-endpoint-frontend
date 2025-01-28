"use client"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { URLContext } from "@/utils/context-provider";

type PostData = {
    model: string;
    make: string;
    year: number;
}

interface UsePostRequestProps {
    associatedKeyString: string;
    endpointString: string;
}

export default function usePostRequest({associatedKeyString, endpointString}: UsePostRequestProps) {
    const baseURL = useContext(URLContext);
    const serverURL = `${baseURL}/${endpointString}`
    const clientQuery = useQueryClient();

    const {error, mutateAsync, isSuccess} = useMutation({
        mutationFn: makePostRequest,
        onSuccess: refetchData
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

    function refetchData() {
        clientQuery.invalidateQueries({queryKey: [associatedKeyString]})
    }

    return {error, mutateAsync, isSuccess}
}
