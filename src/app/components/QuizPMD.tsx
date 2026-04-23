"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const pokemonImages: Record<string, string> = {
  Charmander: "/img/quiz/charmander.png",
  Machop: "/img/quiz/machop.png",
  Squirtle: "/img/quiz/squirtle.png",
  Pikachu: "/img/quiz/pikachu.png",
  Meowth: "/img/quiz/meowth.png",
  Psyduck: "/img/quiz/psyduck.png",
  Torchic: "/img/quiz/torchic.png",
  Sandslash: "/img/quiz/sandslash.png",
  Bulbasaur: "/img/quiz/bulbasaur.png",
  Slowbro: "/img/quiz/slowbro.png",
  Oricorio: "/img/quiz/oricorio.png",
  Chikorita: "/img/quiz/chikorita.png",
  Eevee: "/img/quiz/eevee.png",
  Cubone: "/img/quiz/cubone.png",
  Stunfisk: "/img/quiz/stunfisk.png",
  Totodile: "/img/quiz/totodile.png",
  Skitty: "/img/quiz/skitty.png",
};

export default function QuizPMD() {
  const [personalityScores, setPersonalityScores] = useState<Record<string, number>>({});
  const [questions, setQuestions] = useState<any[]>([]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuestions() {
      const res = await fetch("/api/questions");
      const data = await res.json();
      setQuestions(data);
      setLoading(false);
    }
    loadQuestions();
  }, []);

  const handleAnswer = (optionIndex: number) => {
    const option = questions[step].options[optionIndex];

    const updatedScores = { ...personalityScores };

    option.scores.forEach((s: any) => {
      updatedScores[s.personality] = (updatedScores[s.personality] || 0) + s.points;
    });

    setPersonalityScores(updatedScores);
    setStep(step + 1);
  };

  const getFinalPokemon = () => {
    const entries = Object.entries(personalityScores);
    console.log("Puntuaciones finales:", personalityScores);

    if (entries.length === 0) return "No se pudo calcular tu personalidad.";

    const [topPersonality] = entries.reduce((max, curr) =>
      curr[1] > max[1] ? curr : max
    );

    const normalized = topPersonality.trim().toLowerCase();

    const map: Record<string, string> = {
      audaz: "Charmander",
      fuerte: "Machop",
      dócil: "Squirtle",
      alegre: "Pikachu",
      tímido: "Meowth",
      miedosa: "Psyduck",
      travieso: "Torchic",
      agitada: "Sandslash",
      valiente: "Bulbasaur",
      calmado: "Slowbro",
      plácida: "Oricorio",
      serena: "Chikorita",
      osada: "Eevee",
      grosera: "Cubone",
      rara: "Stunfisk",
      activa: "Totodile",
      huraña: "Skitty",
    };

    return map[normalized] || "Eevee";
  };

  if (loading) return <p>Cargando preguntas...</p>;
  if (!questions || questions.length === 0) return <p>No hay preguntas.</p>;

  const current = questions[step];
  const finalPokemon = getFinalPokemon();
  const pokemonImage = pokemonImages[finalPokemon] || "/img/quiz/eevee.png";

  return (
    <div className="w-full max-w-xl bg-background border border-foreground/20 rounded-xl p-6 shadow-lg">
      {step < questions.length ? (
        <>
          <h2 className="text-2xl font-semibold mb-4">
            Pregunta {step + 1} de {questions.length}
          </h2>

          <p className="text-lg mb-6">{current.text}</p>

          <div className="flex flex-col gap-3">
            {current.options.map((opt: any, i: number) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                {opt.text}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Resultado</h2>

          <p className="text-lg opacity-80 mb-4">
            Eres un <strong>{finalPokemon}</strong> según tu personalidad.
          </p>

          <img
            src={pokemonImage}
            alt={finalPokemon}
            className="mx-auto w-40 h-40 object-contain mb-6"
          />

          <button
            onClick={() => {
              setStep(0);
              setAnswers([]);
              setPersonalityScores({});
            }}
            className="px-6 py-3 rounded-lg bg-yellow-400 text-black hover:bg-yellow-500 transition"
          >
            Repetir test
          </button>
        </div>
      )}
    </div>
  );
}
