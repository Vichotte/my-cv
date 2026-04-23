"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

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

  // Sumar puntos de personalidad
  const updatedScores = { ...personalityScores };

  option.scores.forEach((s: any) => {
    updatedScores[s.personality] = (updatedScores[s.personality] || 0) + s.points;
  });

  setPersonalityScores(updatedScores);

  // Avanzar
  setStep(step + 1);
};

const getFinalPokemon = () => {
  // 1. Encontrar la personalidad con más puntos
  const entries = Object.entries(personalityScores);

  if (entries.length === 0) return "No se pudo calcular tu personalidad.";

  const [topPersonality] = entries.reduce((max, curr) =>
    curr[1] > max[1] ? curr : max
  );

  // 2. Mapeo personalidad → Pokémon
  const map: Record<string, string> = {
    Audaz: "Charmander",
    Fuerte: "Machop",
    Dócil: "Squirtle",
    Alegre: "Pikachu",
    Tímido: "Meowth",
    Travieso: "Torchic",
    Valiente: "Bulbasaur",
    Calmado: "Psyduck",
    // añade aquí todas las personalidades que tengas en tu seed
  };

  return map[topPersonality] || "Eevee";
};



  // ⛔ EVITA QUE ENTRE EN RESULTADO ANTES DE TIEMPO
  if (loading) return <p>Cargando preguntas...</p>;
  if (!questions || questions.length === 0) return <p>No hay preguntas.</p>;

  const current = questions[step];

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

  <p className="text-lg opacity-80 mb-6">
    Eres un <strong>{getFinalPokemon()}</strong> según tu personalidad.
  </p>

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
