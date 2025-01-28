'use server'

import { UserData } from "@/utils/typescript-types";
import { cookies } from "next/headers"

export default async function storeUserLogin(userData: UserData) {
    try {
        const storedCookies = await cookies();
    
        storedCookies.set('user', JSON.stringify(userData))
    
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}