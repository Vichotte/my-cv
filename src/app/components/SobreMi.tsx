"use client";

export default function SobreMi() {
  return (
    <section className="w-full py-20 flex flex-col items-start gap-10">

      {/* Texto */}
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-3xl md:text-4xl font-bold">Sobre Mí</h2>

        <p className="text-lg opacity-80 leading-relaxed">
          Estudié un Grado Medio en <b>Sistemas Microinformáticos y Redes </b>, donde descubrí mi interés por la tecnología y el
          mundo de la informática. Con ganas de seguir aprendiendo y profundizar más en este sector, decidí continuar mi
          formación realizando un <b>Grado Superior en Desarrollo de Aplicaciones Multiplataforma </b>.
          <br /><br />
          Gracias a estas experiencias formativas tan enriquecedoras, tuve la oportunidad de realizar mis prácticas, donde
          actualmente estoy adquiriendo experiencia real en el sector del desarrollo de software, <b>tecnologías IT y
          ciberseguridad </b>.
          <br /><br />
          Me considero una persona con muchas ganas de aprender, seguir creciendo profesionalmente y afrontar nuevos retos
          dentro del mundo del desarrollo y la tecnología.
        </p>
      </div>

    </section>
  );
}
