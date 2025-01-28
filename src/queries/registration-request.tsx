"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { URLContext } from "@/utils/url-context-provider";
import { useContext } from "react";
import storeUserLogin from "@/api/store-user-login";
import { redirect } from "next/navigation";
import { UserSessionData } from "@/utils/typescript-types";

type UserData = {
  userName: string;
  userKey: string;
};

export default function useRegistration() {
  const baseURL = useContext(URLContext);
  const serverURL = `${baseURL}/register`;

  const { error, mutateAsync, isSuccess } = useMutation({
    mutationFn: makePostRequest,
    onSuccess: saveUser,
  });

  async function makePostRequest(requestBody: UserData) {
    const { userName, userKey } = requestBody;
    const response = await axios({
      method: "post",
      url: serverURL,
      data: {
        userName,
        userKey,
      },
    });
    return response.data;
  }

  async function saveUser(responseData: UserSessionData) {
    // Stored the user's authentication token in cookies
    const isUserTokenStored = await storeUserLogin(responseData);

    // If the token is stored successfully the user is returned to the home page.
    if (isUserTokenStored) redirect("/");
  }

  return { error, mutateAsync, isSuccess };
}
