"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { URLContext } from "./context-provider";

interface UseGetRequestProps {
    keyString: string;
    endpointString: string;
}

export default function useGetRequest({keyString, endpointString}: UseGetRequestProps) {
    const baseURL = useContext(URLContext);
    const serverURL = `${baseURL}/${endpointString}`
    const {data, error, isLoading} = useQuery({
        queryKey: [keyString],
        queryFn: makeGetRequest,
    })

    async function makeGetRequest() {
        const response = await axios({
            method: "get",
            url: serverURL,
            responseType: 'json'
        })
        return response.data;
    }

    return {data, error, isLoading}
}
