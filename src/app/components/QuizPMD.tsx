"use client";

import { useState } from "react";
import Navbar from "./Navbar";


export default function QuizPMD() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = [
    {
      question: "Te encuentras un objeto perdido en el suelo. ¿Qué haces?",
      options: [
        "Lo recojo y busco al dueño",
        "Lo dejo donde está",
        "Lo guardo por si alguien pregunta",
        "Lo ignoro completamente"
      ]
    },
    {
      question: "Un amigo está triste. ¿Cómo reaccionas?",
      options: [
        "Intento animarlo con humor",
        "Le escucho en silencio",
        "Le doy espacio",
        "Le doy un abrazo"
      ]
    },
    {
      question: "¿Cómo te describirías?",
      options: [
        "Valiente",
        "Tranquilo",
        "Energético",
        "Analítico"
      ]
    }
  ];

  const handleAnswer = (index: number) => {
    setAnswers([...answers, index]);
    setStep(step + 1);
  };

  const getResult = () => {
    const sum = answers.reduce((a, b) => a + b, 0);

    if (sum <= 2) return "Eres un Pikachu: alegre, curioso y lleno de energía.";
    if (sum <= 5) return "Eres un Charmander: valiente, decidido y con un gran corazón.";
    if (sum <= 7) return "Eres un Squirtle: calmado, inteligente y confiable.";
    return "Eres un Bulbasaur: equilibrado, amable y muy leal.";
  };

  return (
    
    <div className="w-full max-w-xl bg-background border border-foreground/20 rounded-xl p-6 shadow-lg">

      {step < questions.length ? (
        <>
          <h2 className="text-2xl font-semibold mb-4">
            Pregunta {step + 1} de {questions.length}
          </h2>

          <p className="text-lg mb-6">{questions[step].question}</p>

          <div className="flex flex-col gap-3">
            {questions[step].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Resultado</h2>
          <p className="text-lg opacity-80 mb-6">{getResult()}</p>

          <button
            onClick={() => { setStep(0); setAnswers([]); }}
            className="px-6 py-3 rounded-lg bg-yellow-400 text-black hover:bg-yellow-500 transition"
          >
            Repetir test
          </button>
        </div>
      )}

    </div>
  );
}
