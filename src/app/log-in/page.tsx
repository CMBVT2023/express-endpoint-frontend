import Link from "next/link";
import UserLogIn from "./container/UserLogIn";

export default function LogIn() {
  return (
    <div className="px-4 py-4 flex flex-col items-center gap-4">
      <UserLogIn />
      <Link href={"/register"}>Create Account</Link>
    </div>
  );
}
