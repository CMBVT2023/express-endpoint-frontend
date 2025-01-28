"use client"
import checkUserLogin from "@/api/check-user-login"
import { redirect } from "next/navigation";
import { useEffect } from "react"
import { usePathname  } from "next/navigation";

interface LoginCheckProps {
    children: React.ReactNode
}

export default function LoginCheck({children}: LoginCheckProps) {
    // Pulls the current page the user is on.
    const pageName = usePathname();

    // Every time the user changes pages, this check is reran to ensure their log-in is still valid.
    useEffect(() => {
        // Checks if the user has a stored session cookie containing their account info and if not they are redirected to the login page.
        async function checkAuth() {
            const isLoggedIn = await checkUserLogin();

            if (!isLoggedIn) {
                redirect('log-in')
            }
        }

        checkAuth()
    }, [pageName])

    return (
        <>
            {children}
        </>
    )
}
