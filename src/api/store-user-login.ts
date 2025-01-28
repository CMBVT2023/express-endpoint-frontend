"use server";

import { UserSessionData } from "@/utils/typescript-types";
import { cookies } from "next/headers";

export default async function storeUserLogin(data: UserSessionData) {
  try {
    const storedCookies = await cookies();

    storedCookies.set("user", `${data.jwt}`);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
