"use client";

import { useLanguage } from "@/context/LanguageContext";


export default function SobreMi() {
  const { lang } = useLanguage();
  return (
    <section id="sobremi" className="w-full py-20 flex flex-col items-start gap-10">


      {/* Texto */}
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-3xl md:text-4xl font-bold">
        {lang === "es" ? "Sobre Mí" : "About Me"}
        </h2>

        <p className="text-lg opacity-80 leading-relaxed">
        {lang === "es" ? (
          <>
            Estudié un Grado Medio en <b>Sistemas Microinformáticos y Redes</b>, donde descubrí mi interés por la
            tecnología y el mundo de la informática. Con ganas de seguir aprendiendo y profundizar más en este sector,
            decidí continuar mi formación realizando un <b>Grado Superior en Desarrollo de Aplicaciones Multiplataforma</b>.
            <br /><br />
            Gracias a estas experiencias formativas tan enriquecedoras, tuve la oportunidad de realizar mis prácticas,
            donde actualmente estoy adquiriendo experiencia real en el sector del desarrollo de software,{" "}
            <b>tecnologías TI y ciberseguridad</b>.
            <br /><br />
            Me considero una persona con muchas ganas de aprender, seguir creciendo profesionalmente y afrontar nuevos
            retos dentro del mundo del desarrollo y la tecnología.
          </>
        ) : (
          <>
            I studied a Vocational Degree in <b>Microcomputer Systems and Networks</b>, where I discovered my interest in
            technology and the IT world. Motivated to continue learning and deepen my knowledge, I decided to pursue a{" "}
            <b>Higher Degree in Multiplatform Application Development</b>.
            <br /><br />
            Thanks to these enriching academic experiences, I had the opportunity to complete my internship, where I am
            currently gaining real-world experience in software development, <b>IT technologies and cybersecurity</b>.
            <br /><br />
            I consider myself a highly motivated person, eager to learn, grow professionally, and take on new challenges
            within the world of development and technology.
          </>
        )}
      </p>
      </div>

    </section>
  );
}
