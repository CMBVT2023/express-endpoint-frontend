"use client";
import checkUserLogin from "@/api/check-user-login";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import deleteUserLogin from "@/api/delete-user-login";

interface LoginCheckProps {
  children: React.ReactNode;
}

export default function LoginCheck({ children }: LoginCheckProps) {
  // Pulls the current page the user is on.
  const pageName = usePathname();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  // Every time the user changes pages, this check is reran to ensure their log-in is still valid.
  useEffect(() => {
    // Checks if the user has a stored session cookie containing their account info and if not they are redirected to the login page.
    async function checkAuth() {
      if (pageName === "/log-in" || pageName === "/register") return;
      const isLoggedIn = await checkUserLogin();

      if (!isLoggedIn) {
        redirect("log-in");
      }

      setIsUserLoggedIn(isLoggedIn);
    }

    checkAuth();
  }, [pageName]);

  async function handleSignOut() {
    // Checks that the user's cookie is successfully deleted before changing signin status and redirecting user.
    const isUserSignedOut = await deleteUserLogin();

    if (isUserSignedOut) {
      setIsUserLoggedIn(false);
      redirect("log-in");
    }
  }

  return (
    <>
      <header className="flex gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"add-car"}>Add</Link>
        {isUserLoggedIn ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <Link href={"log-in"}>Login</Link>
        )}
      </header>
      {children}
    </>
  );
}
