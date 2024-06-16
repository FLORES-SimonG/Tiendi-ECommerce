"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex items-center h-screen p-16  bg-gradient-to-b from-transparent from-10%  via-customColorPrimary via-30% to-transparent to-100%">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
            404
          </h2>
          <p className="text-2xl md:text-3xl text-white">
            No encontramos lo que buscabas
          </p>
          <Link
            href="/"
            className="px-8 py-4 text-xl font-semibold rounded bg-customColorPrimary text-gray-50 hover:bg-customColorTertiary transition-colors"
          >
            Volver al Home
          </Link>
        </div>
      </div>
    </main>
  );
}
