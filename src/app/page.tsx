"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import SobreMi from "./components/SobreMi";
import Experiencia from "./components/Experiencia";
import { useEffect, useState } from "react";
import Estudios from "./components/Estudios";
import Habilidades from "./components/Habilidades"

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
        <Inicio />
        {/* SECCIONES */}
        <SobreMi />
        <Experiencia />
        <Estudios />
        <Habilidades />

      </main>
    </div>
  );
}
