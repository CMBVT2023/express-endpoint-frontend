"use server"
import { cookies } from "next/headers";

export default async function deleteUserLogin() {
    try {
        const cookieStore = await cookies();
    
        cookieStore.delete("user");

        // Checks that the user current login was removed and if not an error is thrown.
        const isUserRemoved = cookieStore.has("user");
        if (!isUserRemoved) throw new Error("Failed to remove user!")

        return true;
    } catch (error) {
        console.error(error)
    }
}
