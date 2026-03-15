"use client";

import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-background text-foreground sm:items-start">

        <ThemeToggle />

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
            To get started, edit the page.tsx file.
          </h1>

          <p className="max-w-md text-lg leading-8 opacity-80">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js"
              className="font-medium underline"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn"
              className="font-medium underline"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>

        {/* Evitar hydration mismatch */}
        {mounted && (
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">

            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full 
                         bg-foreground text-background px-5 transition-all hover:opacity-80 
                         md:w-[158px]"
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </a>

            <a
              className="flex h-12 w-full items-center justify-center rounded-full 
                         border border-foreground px-5 transition-all hover:bg-foreground 
                         hover:text-background md:w-[158px]"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>

          </div>
        )}

      </main>
    </div>
  );
}
