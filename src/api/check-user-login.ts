"use server"
import { cookies } from "next/headers";

export default async function checkUserLogin() {
    try {
        const cookieStore = await cookies();
    
        return cookieStore.has("user") ? true : false;
    } catch (error) {
        console.error(error)
    }
}
