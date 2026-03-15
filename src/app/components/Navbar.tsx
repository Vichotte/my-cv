"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-background text-foreground border-b border-foreground/20">

      {/* CONTENEDOR SUPERIOR */}
      <div className="w-full px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-xl font-semibold">
          Mi Portfolio
        </div>

        {/* HAMBURGUESA (solo móvil) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* MENÚ DESKTOP */}
        <ul className="hidden md:flex gap-6 text-base font-medium items-center">
          <li className="cursor-pointer hover:opacity-70 transition">Inicio</li>
          <li className="cursor-pointer hover:opacity-70 transition">Sobre Mí</li>
          <li className="cursor-pointer hover:opacity-70 transition">Experiencia</li>
          <li className="cursor-pointer hover:opacity-70 transition">Habilidades</li>
          <li className="cursor-pointer hover:opacity-70 transition">Contacto</li>
          <li className="cursor-pointer hover:opacity-70 transition">Extras</li>

          {/* ÚNICO BOTÓN DE TEMA */}
          <ThemeToggle />
        </ul>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-base font-medium">
          <li className="cursor-pointer hover:opacity-70 transition">Inicio</li>
          <li className="cursor-pointer hover:opacity-70 transition">Sobre Mí</li>
          <li className="cursor-pointer hover:opacity-70 transition">Experiencia</li>
          <li className="cursor-pointer hover:opacity-70 transition">Habilidades</li>
          <li className="cursor-pointer hover:opacity-70 transition">Contacto</li>
          <li className="cursor-pointer hover:opacity-70 transition">Extras</li>

          {/* ÚNICO BOTÓN DE TEMA TAMBIÉN AQUÍ */}
          <ThemeToggle />
        </ul>
      )}

    </nav>
  );
}
