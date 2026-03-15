"use client";

import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex flex-1 w-full max-w-5xl mx-auto flex-col py-20 px-6 sm:px-16">

        {/* SECCIÓN INICIO */}
        <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10">

          {/* Texto */}
          <div className="flex flex-col gap-4 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold">
              Marcos Jiménez Vicho
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium opacity-80">
              IT Support Assistant & Backend Developer
            </h2>

            <div className="flex gap-4 mt-4">
              <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:opacity-80 transition">
                Descargar CV
              </button>

              <button className="px-6 py-3 rounded-full bg-yellow-400 text-black font-medium hover:opacity-80 transition">
                Contáctame
              </button>
            </div>
          </div>

          {/* Imagen */}
          <div className="w-full md:w-auto flex justify-center">
            <Image
              src="/img/my-photo.jpg"
              alt="Foto de perfil"
              width={350}
              height={350}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
        </section>

        {/* RESTO DEL CONTENIDO QUE YA TENÍAS */}
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
