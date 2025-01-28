"use server"
import { cookies } from "next/headers";

export default async function checkUserLogin() {
    try {
        const cookieStore = await cookies();
    
        return cookieStore.has("user");
    } catch (error) {
        console.error(error)
    }


}