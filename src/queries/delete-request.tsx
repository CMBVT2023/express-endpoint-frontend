"use client"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { URLContext } from "@/utils/url-context-provider";

interface UseDeleteRequestProps {
    associatedKeyString: string;
    endpointString: string;
}

export default function useDeleteRequest({associatedKeyString, endpointString}: UseDeleteRequestProps) {
    const baseURL = useContext(URLContext);
    const serverURL = `${baseURL}/${endpointString}`
    const clientQuery = useQueryClient()

    const {error, mutateAsync, isSuccess} = useMutation({
        mutationFn: makePostRequest,
        onSuccess: refetchData
    })

    async function makePostRequest(id: number) {
        const idURL = `${serverURL}/${id}`        
        const response = await axios({
            method: "delete",
            url: idURL,
        })
        return response.data;
    }

    function refetchData() {
        console.log('invalidated')
        clientQuery.invalidateQueries({queryKey: [associatedKeyString]})
    }

    return {error, mutateAsync, isSuccess}
}
