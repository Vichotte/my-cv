"use client";

export default function SobreMi() {
  return (
    <section className="w-full py-20 flex flex-col md:flex-row items-center gap-10">

      {/* Texto */}
      <div className="flex flex-col gap-4 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold">Sobre Mí</h2>

        <p className="text-lg opacity-80 leading-relaxed">
          Soy un desarrollador web con experiencia en soporte IT y backend,
          apasionado por crear soluciones eficientes, limpias y bien estructuradas.
          Me encanta aprender nuevas tecnologías y mejorar continuamente mis habilidades.
        </p>
      </div>

      {/* Imagen opcional */}
      <div className="w-full md:w-auto flex justify-center">
        <img
          src="/img/my-photo.jpg"
          alt="Foto de perfil"
          className="w-64 h-64 object-cover rounded-xl shadow-lg"
        />
      </div>

    </section>
  );
}
