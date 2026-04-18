"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();

  return (
    <nav className="w-full bg-background text-foreground border-b border-foreground/20">

      {/* CONTENEDOR SUPERIOR */}
      <div className="w-full px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-xl font-semibold">
          {lang === "es" ? "Mi Portfolio" : "My Portfolio"}
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
        <li>
          <a href="#inicio" className="cursor-pointer hover:opacity-70 transition">
            {lang === "es" ? "Inicio" : "Start"}
          </a>
        </li>

        <li>
          <a href="#sobremi" className="cursor-pointer hover:opacity-70 transition">
            {lang === "es" ? "Sobre Mí" : "About Me"}
          </a>
        </li>

        <li>
          <a href="#experiencia" className="cursor-pointer hover:opacity-70 transition">
            {lang === "es" ? "Experiencia" : "Experience"}
          </a>
        </li>

        <li>
          <a href="#estudios" className="cursor-pointer hover:opacity-70 transition">
            {lang === "es" ? "Estudios" : "Education"}
          </a>
        </li>

        <li>
          <a href="#habilidades" className="cursor-pointer hover:opacity-70 transition">
            {lang === "es" ? "Habilidades" : "Skills"}
          </a>
        </li>

         <li>
          <a href="#contacto" className="cursor-pointer hover:opacity-70 transition">
            {lang === "es" ? "Contacto" : "Contact Me"}
          </a>
        </li>

        <li>
          <a href="https://github.com/Vichotte" className="cursor-pointer hover:opacity-70 transition">
            {lang === "es" ? "Extras" : "Extras"}
          </a>
        </li>

        <LanguageToggle />
        <ThemeToggle />
      </ul>

      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-base font-medium">
          <li><a href="#inicio" className="hover:opacity-70 transition">Inicio</a></li>
          <li><a href="#sobremi" className="hover:opacity-70 transition">Sobre Mí</a></li>
          <li><a href="#experiencia" className="hover:opacity-70 transition">Experiencia</a></li>
          <li><a href="#estudios" className="hover:opacity-70 transition">Estudios</a></li>
          <li><a href="#habilidades" className="hover:opacity-70 transition">Habilidades</a></li>
           <li><a href="#contacto" className="hover:opacity-70 transition">Contacto</a></li>
          <li className="hover:opacity-70 transition">Extras</li>
          {/* ÚNICO BOTÓN DE TEMA TAMBIÉN AQUÍ */}
          <LanguageToggle />
          <ThemeToggle />
        </ul>
      )}
    </nav>
  );
}
