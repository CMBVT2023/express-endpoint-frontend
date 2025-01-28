import checkUserLogin from "@/api/check-user-login";
import CarsList from "./containers/cars-list";
import { redirect } from "next/navigation";

export default async function Home() {
  // Checks if the user is logged in
  const isUserLoggedIn = await checkUserLogin();
  // Redirects user to login page if no valid login is found
  if (!isUserLoggedIn) redirect('log-in')

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main>
            <CarsList />
        </main>
    </div>
  );
}
