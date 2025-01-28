import checkUserLogin from "@/api/check-user-login";
import CarsList from "./containers/cars-list";
import { redirect } from "next/navigation";

export default async function Home() {
  const isUserLoggedIn = await checkUserLogin();

  if (!isUserLoggedIn) redirect('log-in')

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main>
            <CarsList />
        </main>
    </div>
  );
}
