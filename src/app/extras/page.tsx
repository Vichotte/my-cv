"use client";

import Navbar from "../components/Navbar";
import QuizPMD from "../components/QuizPMD";

export default function ExtrasPage() {
  return (
    <>
      <Navbar />

      <section className="w-full min-h-screen py-20 px-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Test de Personalidad – Pokémon Mundo Misterioso
        </h1>

        <p className="text-lg opacity-80 max-w-2xl text-center mb-10">
          Responde a las preguntas y descubre qué Pokémon serías en Pokémon Mundo Misterioso.
        </p>

        <QuizPMD />
      </section>
    </>
  );
}
