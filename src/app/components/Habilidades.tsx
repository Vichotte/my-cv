"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Habilidades() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    { src: "/img/habilidades/python.png", alt: "Python" },
    { src: "/img/habilidades/java.png", alt: "Java" },
    { src: "/img/habilidades/csharp.png", alt: "C#" },
    { src: "/img/habilidades/mysql.png", alt: "MySQL" },
    { src: "/img/habilidades/git-logo.png", alt: "Git" },
    { src: "/img/habilidades/github-logo.png", alt: "GitHub" },
    { src: "/img/habilidades/make.png", alt: "Make-Integromat" },
    { src: "/img/habilidades/entraid.png", alt: "Entra ID" },
    { src: "/img/habilidades/ms365admin.png", alt: "365Admin" },
    { src: "/img/habilidades/devops.png", alt: "Azure DevOPS" },
    { src: "/img/habilidades/abm.png", alt: "Apple Business Manager" },
    { src: "/img/habilidades/appleconfig.png", alt: "Apple Configurator" },
    { src: "/img/habilidades/jamf.png", alt: "Jamf Now" },

  ];

  // Duplicamos la lista para crear el loop infinito
  const loopSkills = [...skills, ...skills];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  // Autoplay cada 2.5s
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, [mounted]);

  useEffect(() => {
    if (index === skills.length) {
      setTimeout(() => {
        setTransition(false); 
        setIndex(0);          
      }, 700);

      setTimeout(() => {
        setTransition(true);
      }, 750);
    }
  }, [index, skills.length]);

  if (!mounted) {
    return (
      <section id="habilidades" className="w-full py-20 flex flex-col gap-10">
        <h2 className="text-3xl md:text-4xl font-bold">Habilidades</h2>
      </section>
    );
  }

  return (
    <section id="habilidades" className="w-full py-20 flex flex-col gap-10">
      <h2 className="text-3xl md:text-4xl font-bold">Habilidades</h2>

      <div className="overflow-hidden w-full">
        <div
          className={`flex ${transition ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${index * 145}px)` }}
        >
          {loopSkills.map((skill, i) => (
            <div
              key={i}
              className="min-w-[120px] h-[120px] flex items-center justify-center p-4 
                         rounded-xl border border-foreground/20 bg-background/50 shadow-md mx-3"
            >
              <Image src={skill.src} alt={skill.alt} width={70} height={70} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
