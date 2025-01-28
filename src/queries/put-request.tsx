"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { URLContext } from "@/utils/url-context-provider";
import getUserLogin from "@/api/get-user-login";

type PutData = {
  model: string;
  make: string;
  year: number;
  id: number;
};

interface UsePutRequestProps {
  associatedKeyString: string;
  endpointString: string;
}

export default function usePutRequest({
  associatedKeyString,
  endpointString,
}: UsePutRequestProps) {
  const baseURL = useContext(URLContext);
  const serverURL = `${baseURL}/${endpointString}`;
  const clientQuery = useQueryClient();

  const { error, mutateAsync, isSuccess } = useMutation({
    mutationFn: makePostRequest,
    onSuccess: refetchData,
  });

  async function makePostRequest(requestBody: PutData) {
    const userLogin = await getUserLogin();
    const {
      make: newMake,
      model: newModel,
      year: newYear,
      id: dbID,
    } = requestBody;
    const response = await axios({
      method: "put",
      url: serverURL,
      data: {
        newModel,
        newMake,
        newYear,
        dbID,
      },
      headers: {
        authorization: userLogin,
      },
    });
    return response.data;
  }

  function refetchData() {
    // Triggers a refetch of the main get request.
    clientQuery.invalidateQueries({ queryKey: [associatedKeyString] });
  }

  return { error, mutateAsync, isSuccess };
}
