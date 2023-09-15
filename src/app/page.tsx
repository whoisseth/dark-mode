/** @format */

"use client";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex min-h-screen w-full items-center  transition-all justify-center flex-col gap-8 p-10 ">
      <p className="font-bold text-4xl">next-themes Example</p>

      {/* select themes */}
      <section className="flex gap-2 items-center">
        <select
          onChange={(e) => setTheme(e.target.value)}
          value={theme}
          name=""
          id=""
          className="border-2  dark rounded p-1 "
        >
          <option value="dark">Dark Mode</option>
          <option value="light">Light Mode</option>
          <option value="system">System</option>
        </select>
        <p>{theme}</p>
      </section>

      {/* buttons */}
      <section className="flex gap-4">
        <button
          onClick={() => setTheme("dark")}
          className="border-[1px]   bg-black dark:bg-white text-white dark:text-black dark:!border-white rounded-md !border-black transition-all  px-4 py-2 focus:ring-4 "
        >
          Dark Mode
        </button>
        <button
          onClick={() => setTheme("light")}
          className="border-[1px]   bg-white dark:bg-black text-black dark:text-white dark:!border-white rounded-md  transition-all !border-black  px-4 py-2  focus:ring-4  "
        >
          Light Mode
        </button>
      </section>
    </main>
  );
}
