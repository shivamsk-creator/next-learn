"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14 bg-black text-white">
      <h2>Home Page</h2>
      <button onClick={() => router.push("/login")}>Go to Login Page</button>
      <button onClick={() => router.push("/about")}>Go to About Page</button>
      <Link href="/login">Login Page</Link>
      <Link href="/about">About Page</Link>
      <Link href="/studentlist">Student List</Link>
    </main>
  );
}
