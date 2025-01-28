"use server"
import { cookies } from "next/headers";

export default async function getUserLogin() {
    try {
        const cookieStore = await cookies();
    
        const userCookie = cookieStore.get('user');
        return userCookie?.value;
    } catch (error) {
        console.error(error)
    }
}
