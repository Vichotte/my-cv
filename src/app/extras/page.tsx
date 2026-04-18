"use client";

import Navbar from "../components/Navbar";
import QuizPMD from "../components/QuizPMD";
import { useLanguage } from "@/context/LanguageContext";


export default function ExtrasPage() {
    const { lang } = useLanguage();
  return (
    <>
      <Navbar />

      <section className="w-full min-h-screen py-20 px-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {lang === "es" ? "Personalidad Pokémon" : "Pokémon Personality"}
        </h1>

        <p className="text-lg opacity-80 max-w-2xl text-center mb-10">
          {lang === "es" ? "Responde a las preguntas y descubre qué Pokémon eres espiritualmente." : "Answer the questions and discover what pokémon are you spiritually"}
        </p>

        <QuizPMD />
      </section>
    </>
  );
}
