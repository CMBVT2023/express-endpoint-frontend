import { cookies } from "next/headers";

type UserLogInData = {
    jwt: string;
    success: boolean;
}

export default async function saveUserLogin(data: UserLogInData) {
    const cookieStorage = await cookies();

    console.log(cookieStorage)
}