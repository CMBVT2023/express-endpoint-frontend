'use server'

import { ResponseData } from "@/utils/typescript-types";
import { cookies } from "next/headers"

export default async function storeUserLogin(data: ResponseData) {
    try {
        const storedCookies = await cookies();
    
        storedCookies.set('user', `${data.jwt}`)
    
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}