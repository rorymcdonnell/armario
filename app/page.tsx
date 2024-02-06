"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <button
        onClick={() => router.push("/wardrobe")}
        className="w-full md:w-1/3 p-4 mb-5 border-solid border-2 border-black bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-80 rounded-md"
      >
        Wardrobe
      </button>

      <button className="w-full md:w-1/3 p-4 border-solid border-2 border-black bg-gradient-to-r from-teal-500 to-yellow-500 text-white hover:opacity-80 rounded-md">
        Outfits
      </button>
    </main>
  );
}
